---
description: Müşteri için role-based admin panel kur (CRUD, audit log, export)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:admin-paneli

Sen senior bir full-stack developer'sın. Görevin: müşterinin verilerini yönetmesi için role-based admin panel kurmak.

## Stack
Next.js 14 + Supabase (RLS) + shadcn/ui Data Tables + tRPC (opsiyonel)

## Süreç

### 1. Database — Roles ve Permissions

```sql
CREATE TYPE user_role AS ENUM ('super_admin', 'admin', 'editor', 'viewer');

ALTER TABLE profiles ADD COLUMN role user_role DEFAULT 'viewer';

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  action TEXT NOT NULL,
  resource_type TEXT,
  resource_id UUID,
  metadata JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_created ON audit_logs(created_at DESC);

-- RLS: sadece admin görebilir
CREATE POLICY "Admins can view audit logs"
  ON audit_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'super_admin')
    )
  );
```

### 2. Middleware — Role guards

```typescript
// src/middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const supabase = createServerClient(/* ... */)
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    
    if (request.nextUrl.pathname.startsWith('/admin') && 
        !['admin', 'super_admin'].includes(profile?.role)) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }
  
  return response
}

export const config = {
  matcher: ['/admin/:path*']
}
```

### 3. Layout — Sidebar + breadcrumb

`src/app/admin/layout.tsx` — collapsible sidebar (role'a göre filtered nav), breadcrumb header, user menu (logout, profile).

Nav items per role:
- **super_admin:** Users, Roles, Settings, Audit Logs, Billing, Everything
- **admin:** Users, Settings, Reports
- **editor:** Content, Drafts
- **viewer:** Read-only dashboard

### 4. Data Tables — TanStack Table

```bash
npm install @tanstack/react-table
```

`src/components/admin/data-table.tsx` — generic, reusable:
- Sorting (column headers tıklanabilir)
- Filtering (column-specific)
- Search (global)
- Pagination (client + server)
- Column visibility toggle
- Bulk select + actions
- Export (CSV/Excel)

### 5. CRUD Modals

Her resource için (users, products, orders, ...):
- "Yeni" buton → Dialog modal
- Form (react-hook-form + zod)
- Optimistic update
- Toast notification
- Audit log entry

```typescript
async function createResource(data: any) {
  const { error } = await supabase.from('resources').insert(data)
  if (error) throw error
  
  // Audit log
  await supabase.from('audit_logs').insert({
    user_id: user.id,
    action: 'resource.create',
    resource_type: 'resources',
    metadata: data,
  })
  
  revalidatePath('/admin/resources')
}
```

### 6. Bulk operations

- Bulk delete (with confirmation)
- Bulk export
- Bulk update (status, tags)
- Bulk email (selected users'a mesaj)

### 7. Audit log UI

`/admin/audit-logs` sayfası:
- Tüm aksiyonlar timeline
- Filter: by user, action, date range
- Detail view (JSON metadata)
- IP + user agent

### 8. Export

CSV/Excel export her listing için:
```typescript
import { unparse } from 'papaparse'

function exportCSV(data: any[], filename: string) {
  const csv = unparse(data)
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = `${filename}-${Date.now()}.csv`
  link.click()
}
```

## Çıktı standardı

- [ ] Role-based access (frontend + backend)
- [ ] Tüm tablolarda search + filter + sort
- [ ] Bulk actions
- [ ] Audit log her aksiyonda
- [ ] Export CSV/Excel
- [ ] Mobile responsive (mobile için Sheet drawer)
- [ ] Loading skeletons
- [ ] Empty states
- [ ] Confirmation dialogs (delete için)

## Anti-patterns

❌ Frontend'de role kontrolü, backend'de yok (backend her zaman çift kontrol)
❌ N+1 query (Supabase select with relations)
❌ Export'ta tüm data'yı memory'e yüklemek (stream kullan)
❌ Audit log eksik (her aksiyonda zorunlu)
❌ Soft delete kullanmamak (hard delete recovery yok)

## Yaygın hatalar

**"Permission denied" RLS hatası:**
- RLS policy'si role kontrolü yapmıyor → Policy'yi tekrar yaz
- auth.uid() bağlamı yok → Server client kullan

**Export 1000+ row'da yavaş:**
- Tüm data'yı çekiyor → Server-side pagination + stream
- CSV string memory bloat → Worker thread

Başla — proje setup'tan, sonra DB schema, sonra tek tek özellikler.
