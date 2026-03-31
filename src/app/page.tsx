import Hero from "@/components/Hero"
import GreenInfo from "@/components/GreenInfo";
import Program from "@/components/Program"
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WeddingDate from "@/components/WeddingDate";
import { getNextWeddingDate } from "@/lib/weddingCountdown";
// import Temp from "@/components/Temp";

export default function Home() {
  const targetDate = getNextWeddingDate(new Date());

  return (
    <main>
      <Hero />
      <GreenInfo />
      <Program targetDateIso={targetDate.toISOString()} />
      <Gallery />
      <Contact />
      <WeddingDate targetDateIso={targetDate.toISOString()} />
      {/* <Temp /> */}
    </main>
  );
}
