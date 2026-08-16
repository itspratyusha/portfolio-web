import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";
import { techImage } from "@/lib/techIcons";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16  bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Skills" title="What I work with" />

       <div className="mt-10 space-y-4">
  {skillGroups.map((group) => (
    <div
      key={group.title}
      className="flex flex-col gap-4 rounded-2xl border border-edge bg-white p-5 sm:flex-row sm:items-center sm:gap-0 sm:p-3 md:p-6 "
    >
      {/* Skill group title */}
      <h3 className="w-full shrink-0 text-lg font-semibold text-foreground sm:w-32 border-r pr-2 ">
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
    </div>
  ))}
</div>
      </div>
    </section>
  );
}