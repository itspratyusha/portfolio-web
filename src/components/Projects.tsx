"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";
import { techImage } from "@/lib/techIcons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Projects" title="Things I've built" />

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="flex flex-col rounded-2xl border border-edge bg-white p-6 transition-shadow hover:shadow-2xl"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -6 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>

                {project.status ? (
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {project.status}
                  </span>
                ) : null}
              </div>

              {project.subtitle ? (
                <p className="mt-0.5 text-sm font-semibold text-cobalt">
                  {project.subtitle}
                </p>
              ) : null}

              <p className="mt-3 flex-1 text-sm leading-6 text-muted-text">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => {
                  const image = techImage(tech);

                  return (
                    <li
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-md bg-gray-100 px-2.5 py-1 text-xs text-muted-text"
                    >
                      {image ? (
                        <img
                          src={image}
                          alt={`${tech} logo`}
                          loading="lazy"
                          className="h-3.5 w-3.5"
                        />
                      ) : null}

                      {tech}
                    </li>
                  );
                })}
              </ul>

              {project.link ? (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cobalt hover:underline"
                  whileHover="hover"
                >
                  View project

                  <motion.span
                    variants={{
                      hover: {
                        x: 9,
                      },
                    }}
                  >
                    <ArrowRightIcon className="h-4 w-4" />
                  </motion.span>
                </motion.a>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}