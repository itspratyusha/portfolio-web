import { MailIcon, PhoneIcon } from "@/components/icons";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/BrandIcons";
import { personal } from "@/lib/data";

export default function Footer() {
  const socialLinks = [
    { label: "GitHub", href: personal.github, Icon: GitHubIcon },
    { label: "LinkedIn", href: personal.linkedin, Icon: LinkedInIcon },
    { label: "X (Twitter)", href: personal.twitter, Icon: XIcon },
    { label: "Email", href: `mailto:${personal.email}`, Icon: MailIcon },
    { label: "Phone", href: `tel:${personal.phone}`, Icon: PhoneIcon },
  ];

  return (
    <footer className=" border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-text">© {new Date().getFullYear()} {personal.name}</p>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-muted-text transition-colors hover:border-cobalt hover:text-cobalt"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}