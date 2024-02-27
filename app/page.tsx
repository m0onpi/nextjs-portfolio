import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import Subscribe from "@/components/News"
import AlertsDisplay from "@/components/Alert"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <Subscribe/>
      <AlertsDisplay/>
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
