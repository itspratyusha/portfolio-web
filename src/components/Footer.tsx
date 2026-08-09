import { Mail, Phone } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <p className="text-sm text-muted-text">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-muted-text transition-colors hover:border-cobalt hover:text-cobalt"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-muted-text transition-colors hover:border-cobalt hover:text-cobalt"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`tel:${personal.phone.replace(/\s/g, "")}`}
            aria-label="Phone"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge text-muted-text transition-colors hover:border-cobalt hover:text-cobalt"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}