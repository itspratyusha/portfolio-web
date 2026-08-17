"use client";

import { ExternalLinkIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { GitHubIcon } from "@/components/BrandIcons";
import SectionHeading from "@/components/SectionHeading";
import { personal } from "@/lib/data";
import { motion } from "motion/react";

const contactItems = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: "Address",
    value: personal.location,
    Icon: PinIcon,
  },
  {
    label: "GitHub",
    value: personal.githubHandle,
    href: personal.github,
    Icon: GitHubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Contact" title="Get in touch" />

        <p className="mt-4 max-w-xl text-base text-muted-text">
          Have a project in mind, or just want to say hi? Feel free to reach out.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(({ label, value, href, Icon }, index) => {
            const className =
              "flex items-center gap-4 rounded-2xl border border-edge bg-white p-5 transition-colors hover:border-cobalt";

            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt/10 text-cobalt">
                  <Icon className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
                    {label}
                  </p>

                  <p className="truncate text-sm font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              </>
            );

            return href ? (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={className}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={className}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-10 rounded-2xl bg-gradient-to-r from-cobalt to-cobalt-600 p-8 text-center sm:p-10"
        >
          <h3 className="text-xl font-bold text-white">
            Want my full details?
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-white/85">
            Open my resume online to see my complete projects, education, and technical skills.
          </p>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-100"
          >
            <motion.span
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <ExternalLinkIcon className="h-4 w-4" />
              </motion.span>

              <motion.span
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                View Resume
              </motion.span>
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}