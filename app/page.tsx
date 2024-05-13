import Intro from "@/components/intro";
import Expectations from "@/components/expectations";
import Goals from "@/components/goals";
import Strava from "@/components/strava";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Goals />
      <Strava />
      <Skills />
      <Expectations />
    </main>
  );
}
