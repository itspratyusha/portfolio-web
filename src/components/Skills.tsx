import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/data";
import { techImage } from "@/lib/techIcons";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-edge bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-edge bg-white p-6">
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.skills.map((skill) => {
                  const image = techImage(skill);
                  return (
                    <li key={skill} className="flex items-center gap-3 text-sm text-muted-text">
                      {image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={image} alt={`${skill} logo`} loading="lazy" className="h-5 w-5 shrink-0" />
                      ) : (
                        <span className="h-2 w-2 shrink-0 rounded-full bg-cobalt" />
                      )}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}