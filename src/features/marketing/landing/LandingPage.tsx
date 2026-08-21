import { useState } from 'react'
import type { LandingSection } from './types'
import HeroSection from './sections/HeroSection'
import HowItWorksSection from './sections/HowItWorksSection'

export default function LandingPage() {
  const [section, setSection] = useState<LandingSection>('hero')

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8fc]">
      {section === 'hero' && (
        <HeroSection onNavigate={setSection} />
      )}

      {section === 'how-it-works' && (
        <HowItWorksSection onNavigate={setSection} />
      )}
    </main>
  )
}