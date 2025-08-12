import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import TweetWall from "@/components/tweet-wall";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <>
      <section id="Home">
        <Hero />
      </section>
      <section id="WorkExperience">
        <WorkExperience />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Tweets">
        <TweetWall />
      </section>
    </>
  );
}
