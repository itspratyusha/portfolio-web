"use client";

import SectionHeading from "@/components/SectionHeading";
import { about, education } from "@/lib/data";
import { CodeIcon, GraduationCapIcon } from "./icons";
import { techImage } from "@/lib/techIcons";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        <div className="rounded-3xl border border-[#31543f]/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

            {/* left-about */}
            <div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <SectionHeading
                  eyebrow="About"
                  title="A little about me"
                />
              </motion.div>

              {/* About content */}
              <div className="mt-8 space-y-4 text-base leading-7 text-muted-text">

                {about.map((paragraph, index) => (
                  <motion.p
                    key={paragraph.slice(0, 24)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                {/* Technologies heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cobalt"
                >
                  <CodeIcon className="h-5 w-5 text-cobalt" />

                  <span>Technologies I work with</span>
                </motion.div>

                {/* Technologies */}
                <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {["React", "Next.js", "Tailwind CSS", "Bootstrap"].map(
                    (tech, index) => {
                      const image = techImage(tech);

                      return (
                        <motion.li
                          key={tech}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.08,
                            ease: "easeOut",
                          }}
                          whileHover={{ y: -3 }}
                          className="flex cursor-default items-center gap-2 rounded-xl border border-edge bg-white px-2 py-2 shadow-sm sm:px-3"
                        >
                          {image && (
                            <img
                              src={image}
                              alt={`${tech} logo`}
                              className="h-4 w-4 shrink-0 object-contain"
                            />
                          )}

                          <span className="text-xs font-semibold text-foreground sm:text-sm">
                            {tech}
                          </span>
                        </motion.li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>

            {/* education side-left */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="w-full justify-self-center lg:max-w-md"
            >

              {/* Education Card */}
              <div className="relative overflow-hidden rounded-3xl border border-[#31543f]/10 bg-white p-6 shadow-sm sm:p-8">

                {/* Education heading */}
                <div className="mb-7 flex items-center gap-2 text-sm font-semibold uppercase text-cobalt">
                  <GraduationCapIcon className="h-5 w-5 text-cobalt" />

                  <p className="tracking-wider">
                    Education
                  </p>
                </div>

                <div className="relative pl-6">

                  {/* Timeline line */}
                  <div className="absolute bottom-5 left-0 top-1 w-px bg-[#31543f]/20" />

                  {/* Education */}
                  <div className="relative">

                    {/* Timeline dot */}
                    <div className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-[#31543f] ring-4 ring-[#31543f]/10" />

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#31543f]">
                      {education.period}
                    </p>

                    <h4 className="mt-3 text-lg font-bold leading-snug text-[#17211b] sm:text-xl">
                      B.Sc. CSIT
                    </h4>

                    <p className="mt-1 text-sm font-medium text-[#31543f]">
                      {education.degree}
                    </p>

                    <p className="mt-2 text-sm font-bold leading-6 text-[#31543f]">
                      {education.school}
                    </p>

                    <div className="mt-3 inline-flex items-center rounded-full bg-[#f7f4ec] px-4 py-2 text-xs font-semibold text-[#31543f]">
                      Tribhuvan University
                    </div>
                  </div>

                  {/* Training part */}
                  <div className="relative mt-10">

                    {/* Timeline dot */}
                    <div className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-[#31543f] ring-4 ring-[#31543f]/10" />

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#31543f]">
                      Nov 2025 – Jan 2026
                    </p>

                    <h4 className="mt-3 text-lg font-bold leading-snug text-[#17211b] sm:text-xl">
                      Frontend Development Training
                    </h4>

                    <p className="mt-2 text-sm font-bold leading-6 text-[#31543f]">
                      Broadway Infosys Pvt. Ltd.
                    </p>

                    <div className="mt-3 inline-flex items-center rounded-full bg-[#f7f4ec] px-4 py-2 text-xs font-semibold text-[#31543f]">
                      Completed
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}