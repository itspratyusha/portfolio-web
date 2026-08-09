import { GraduationCap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { about, education, personal } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-edge py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="About" title="A little about me" />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal delay={80}>
            <div className="space-y-4 text-base leading-7 text-muted-text">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
              
        </div>
      </div>
    </section>
  );
}