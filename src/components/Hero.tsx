import { ArrowRightIcon, PinIcon, ExternalLinkIcon } from "@/components/icons";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center pt-30"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div className="order-last lg:order-first">
          <p className="flex items-center gap-2 text-sm text-muted-text">
            <PinIcon className="h-4 w-4 text-cobalt" />
           <span className="text-cobalt font-bold">
              {personal.location}
            </span>
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-cobalt">
              {personal.firstName} {personal.lastName}
            </span>
          </h1>
          <p className="mt-4 text-xl font-semibold text-muted-text sm:text-2xl">
            {personal.role}
          </p>
          <p className="mt-4  text-base text-muted-text sm:text-lg">
            {personal.heroIntro}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cobalt px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-600"
            >
              View my work
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-edge px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cobalt hover:text-cobalt"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </div>

        <div className="order-first w-fit justify-self-center lg:order-last">
  <div className="relative flex h-[480px] w-[360px] items-end justify-center sm:h-[220px] sm:w-[300px]">

    {/* Dark green rect bg */}
    <div className="absolute left-1/2 top-1/2 h-[560px] w-[530px] -translate-x-1/2 -translate-y-1/2 bg-[#31543f] sm:h-[310px] sm:w-[300px]" />

    {/* White circle behind photo*/}
    <div className="absolute left-1/2 top-[45%] h-[280px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f7f4ec] sm:h-[250px] sm:w-[250px] border border-edge" />

    {/*img formal */}
    <div className="relative z-10 flex h-full w-full items-end justify-center">
      <img
        src="/formal-nobg.png"
        alt="Profile"
        className="h-auto w-[340px] object-contain sm:w-[290px]"
      />
    </div>

    {/* HTML badge */}
    <div className="absolute animate-float left-5 top-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-white shadow">
      <img
        src="/tech/html5.svg"
        alt="HTML"
        className="h-6 w-6"
      />
    </div>

    {/* CSS badge */}
    <div className="absolute animate-float-slow right-5 top-12 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-white shadow">
      <img
        src="/tech/css3.svg"
        alt="CSS"
        className="h-6 w-6"
      />
    </div>

    {/* JavaScript badge */}
    <div className="absolute animate-float bottom-10 left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-edge bg-white shadow">
      <img
        src="/tech/javascript.svg"
        alt="JavaScript"
        className="h-6 w-6"
      />
    </div>

    {/* Role name in bottom of pic */}
    <div className="absolute  -bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-edge bg-white px-5 py-2 text-sm font-semibold text-foreground shadow">
      <span className="h-2 w-2 rounded-full bg-cobalt">{personal.role}</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
