import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { EPCProcess } from "@/components/EPCProcess";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LeadershipTeam } from "@/components/LeadershipTeam";
import { Markets } from "@/components/Markets";
import { Services } from "@/components/Services";
import { TechnicalStrengths } from "@/components/TechnicalStrengths";
import { TrustStrip } from "@/components/TrustStrip";
import { WhyKVASol } from "@/components/WhyKVASol";

export default function Home() {
  return (
    <>
      <a href="#main" className="skipLink">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <EPCProcess />
        <WhyKVASol />
        <TechnicalStrengths />
        <Markets />
        <LeadershipTeam />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
