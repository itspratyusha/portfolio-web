import { ArrowRightIcon, PinIcon, ExternalLinkIcon, DotIcon } from "@/components/icons";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center pt-30"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 md:grid-cols-2 lg:gap-14">

        {/* Text */}
        <div className="order-last md:order-first">
          <p className="flex items-center gap-2 text-sm text-muted-text">
            <PinIcon className="h-4 w-4 text-cobalt" />
            <span className="font-bold text-cobalt">
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

          <p className="mt-4 text-base text-muted-text sm:text-lg">
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

        {/* Image */}
        <div className="order-first justify-self-center md:order-last">
<div className="relative flex h-[400px] w-[320px] items-end justify-center sm:h-[280px] sm:w-[300px] md:h-[350px] md:w-[380px] lg:h-[380px] lg:w-[400px]">
            {/* Dark green rect bg */}
<div className="absolute left-1/2 top-1/2 h-[350px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-[#31543f] sm:h-[280px] sm:w-[270px] md:h-[330px] md:w-[350px] lg:h-[350px] lg:w-[345px]" />
            {/* White circle behind photo */}
            <div className="absolute left-1/2 top-[45%] h-[220px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-edge bg-[#f7f4ec] sm:h-[250px] sm:w-[250px] md:h-[280px] md:w-[280px] lg:h-[300px] lg:w-[300px]" />

            {/* Image */}
            <div className="relative z-10 flex h-full w-full items-end justify-center">
              <img
                src="/formal-nobg.png"
                alt="Profile"
                 className="h-auto w-[260px] object-contain sm:w-[320px] md:w-[480px] lg:w-[390px]"></img>
            

            {/* HTML badge */}
           <div className="absolute left-2 top-6 z-20 flex h-9 w-9 animate-float items-center justify-center rounded-full border border-edge bg-white shadow sm:left-4 sm:top-15 md:left-9 md:top-20 md:h-11 md:w-11 lg:left-10 lg:top-20 shadow-amber-500">
              <img
                src="/tech/html5.svg"
                alt="HTML"
                className="h-6 w-6"
              />
            </div>

            {/* CSS badge */}
            <div className="absolute right-2 top-10 z-20 flex h-9 w-9 animate-float-slow items-center justify-center rounded-full border border-edge bg-white shadow sm:right-2 sm:top-30 md:right-5 md:top-[40%] md:h-11 md:w-11 lg:right-5 lg:top-40 shadow-blue-800">
              <img
                src="/tech/css3.svg"
                alt="CSS"
                className="h-6 w-6"
              />
            </div>

            {/* JavaScript badge */}
            <div className="absolute bottom-6 left-1 z-20 flex h-9 w-9 animate-float items-center justify-center rounded-full border border-edge bg-white shadow sm:bottom-8 sm:left-1 md:bottom-8 md:left-1 md:h-11 md:w-11 lg:bottom-10 lg:left-2 shadow-yellow-500">
              <img
                src="/tech/javascript.svg"
                alt="JavaScript"
                className="h-6 w-6"
              />
            </div>
</div>
            {/* Role */}
            <div className="absolute -bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-edge bg-white px-5 py-2 text-sm font-semibold text-foreground shadow">
              <DotIcon className="mr-1 mb-1 inline-block h-4 w-5 animate-pulse" />
              <span>Frontend Developer</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}