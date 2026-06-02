---
description: Onboarding wizard kur (multi-step form, progress, save state)
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [proje-adı]
---

# /web-saas:onboarding-flow

Sen UX engineer'sın. Yeni kullanıcı için pürüzsüz onboarding wizard kuracaksın.

## Stack
React Hook Form + Zustand (state) + Framer Motion + Supabase

## Süreç

### 1. Adım planla

İdeal: **3-5 adım**, her biri 30 saniyenin altı.

Örnek (B2B SaaS):
1. **Welcome** — isim + foto
2. **Workspace** — şirket adı + size
3. **Use case** — neyi otomatize etmek istiyorsun (multi-choice)
4. **Invite team** — opsiyonel (skip butonu)
5. **First action** — "Hadi başla" CTA

### 2. State management (Zustand)

```typescript
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface OnboardingState {
  step: number
  data: Partial<OnboardingData>
  setStep: (step: number) => void
  updateData: (data: Partial<OnboardingData>) => void
  reset: () => void
}

export const useOnboarding = create<OnboardingState>()(
  persist(
    (set) => ({
      step: 1,
      data: {},
      setStep: (step) => set({ step }),
      updateData: (data) => set((s) => ({ data: { ...s.data, ...data } })),
      reset: () => set({ step: 1, data: {} })
    }),
    { name: 'onboarding-state' }
  )
)
```

### 3. Layout — Progress + step

```tsx
<div className="min-h-screen flex flex-col">
  <header className="p-4">
    <Progress value={(step / totalSteps) * 100} />
    <p className="text-sm text-muted-foreground">Adım {step} / {totalSteps}</p>
  </header>
  
  <main className="flex-1 flex items-center justify-center p-4">
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="max-w-md w-full"
      >
        {currentStepComponent}
      </motion.div>
    </AnimatePresence>
  </main>
  
  <footer className="p-4 flex justify-between">
    <Button variant="ghost" onClick={prev}>Geri</Button>
    <Button onClick={next}>Devam</Button>
  </footer>
</div>
```

### 4. Form per step

Her adım için React Hook Form:
```tsx
const form = useForm({
  resolver: zodResolver(stepSchema),
  defaultValues: data
})

async function onSubmit(stepData: StepData) {
  updateData(stepData)
  if (step === totalSteps) {
    await submitAll()
    router.push('/dashboard')
  } else {
    setStep(step + 1)
  }
}
```

### 5. Skip butonu (opsiyonel adımlarda)

```tsx
{stepConfig.optional && (
  <Button variant="ghost" onClick={() => setStep(step + 1)}>
    Şimdilik geç
  </Button>
)}
```

### 6. Save & continue

`persist` middleware ile localStorage'a save. Sayfa kapansa bile dönünce devam ettiği yerden başlar.

### 7. Final submit

Tüm adımları aggregate edip backend'e gönder:
```typescript
async function submitAll() {
  await fetch('/api/onboarding/complete', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  
  // Reset state
  reset()
}
```

### 8. Welcome celebration

Bittiğinde confetti / animation:
```bash
npm install canvas-confetti
```
```typescript
import confetti from 'canvas-confetti'
confetti({ particleCount: 100, spread: 70 })
```

## Çıktı standardı

- [ ] 3-5 adım (her biri 30sn altı)
- [ ] Progress bar üstte
- [ ] Skip seçeneği opsiyonel adımlarda
- [ ] State persist (refresh sonrası devam)
- [ ] Mobile-friendly
- [ ] Smooth transitions (Framer Motion)
- [ ] A/B testable
- [ ] Analytics event her adımda

## Anti-patterns

❌ 10 adımlık onboarding (kullanıcı bırakır)
❌ Tek seferde tüm bilgi (parçalara böl)
❌ Skip vermemek (zorunluluk hissi)
❌ Persist yok (refresh sonrası baştan)
❌ Mobile'da bozuk (gerçek telefon test)

Başla.
