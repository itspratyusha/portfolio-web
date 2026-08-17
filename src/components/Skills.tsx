"use client"
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";
import { techImage } from "@/lib/techIcons";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

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
          <SectionHeading eyebrow="Skills" title="What I work with" />
        </motion.div>

        <div className="mt-10 space-y-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col gap-4 rounded-2xl border border-edge bg-white p-5 sm:flex-row sm:items-center sm:gap-0 sm:p-3 md:p-6"
            >
              {/* Skill group title */}
              <h3 className="w-full shrink-0 border-r pr-2 text-lg font-semibold text-foreground sm:w-32">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap items-center gap-3 pl-8">
                {group.skills.map((skill) => {
                  const image = techImage(skill);

                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-full border border-edge bg-gray-50 px-3 py-2 text-sm text-muted-text"
                    >
                      {image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={image}
                          alt={`${skill} logo`}
                          loading="lazy"
                          className="h-5 w-5 shrink-0"
                        />
                      )}

                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}