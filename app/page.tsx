import data from "./api/data/data.json";

type SkillGroups = {
  frontend: string[];
  backend: string[];
  devOps: string[];
  methodologies: string[];
};

type Project = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
};

type Contact = {
  email: string;
  linkedin: string;
  github: string;
  upwork: string;
};

export default function Home() {
  const skills = data.skills as SkillGroups;
  const projects = data.projects as Project[];
  const contact = data.contact as Contact;

  const skillSections = [
    { title: "Frontend", list: skills.frontend },
    { title: "Backend", list: skills.backend },
    { title: "DevOps", list: skills.devOps },
    { title: "Methodologies", list: skills.methodologies },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <div className="background-mesh" aria-hidden="true" />

      <header className="mx-auto w-full max-w-6xl px-6 pt-8 sm:px-10">
        <div className="glass-panel flex items-center justify-between rounded-full px-5 py-3">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-zinc-300">
            {data.title}
          </p>
          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex gap-5 text-sm text-zinc-300">
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#skills">
                Skills
              </a>
              <a className="nav-link" href="#projects">
                Projects
              </a>
              <a className="nav-link" href="#soft-skills">
                Soft Skills
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </nav>
            <a
              href={data.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan-100"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-10 sm:px-10 sm:pt-16">
        <section
          id="about"
          className="reveal rounded-3xl border border-white/10 bg-zinc-950/80 p-8 shadow-2xl shadow-black/40 backdrop-blur md:p-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-300/90">
            Full-stack Web Developer
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            {data.author}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            {data.description}
          </p>
          <p className="mt-5 max-w-3xl leading-relaxed text-zinc-400">
            {data.banner}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["React.js", "TypeScript", "Express.js"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="skills" className="grid gap-5 lg:grid-cols-2">
          {skillSections.map((group, index) => (
            <article
              key={group.title}
              className="reveal glass-panel rounded-2xl p-6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h2 className="font-display text-xl font-semibold text-zinc-100">
                {group.title}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {group.list.map((skill) => (
                  <li
                    key={`${group.title}-${skill}`}
                    className="rounded-md border border-white/12 bg-white/4 px-3 py-1.5 font-mono text-xs text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section id="projects" className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold text-zinc-100 sm:text-4xl">
              Selected Projects
            </h2>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
              Real product experience
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="reveal project-card rounded-2xl border border-white/12 p-6"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl text-zinc-100">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200 transition-colors hover:text-cyan-100"
                  >
                    View
                  </a>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-300">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <li
                      key={`${project.name}-${tech}`}
                      className="rounded-full border border-cyan-200/20 bg-cyan-200/8 px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-cyan-50"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="soft-skills"
          className="reveal rounded-2xl border border-white/12 bg-zinc-900/70 p-7"
        >
          <h2 className="font-display text-2xl font-semibold text-zinc-100 sm:text-3xl">
            Soft Skills
          </h2>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {data.softSkills.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-white/10 bg-zinc-950/70 px-4 py-3 text-zinc-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="reveal contact-panel rounded-2xl border border-white/12 p-7 sm:p-9"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-cyan-300/90">
                Let&apos;s collaborate
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-zinc-100 sm:text-3xl">
                Contact
              </h2>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="contact-link inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-100"
            >
              {contact.email}
            </a>
          </div>

          <div className="mt-4">
            <a
              href={data.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="download-cv inline-flex items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-100"
            >
              Download CV
            </a>
          </div>

          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link block rounded-xl border border-white/12 bg-zinc-900/70 px-5 py-4"
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-zinc-400">
                  LinkedIn
                </p>
                <p className="mt-1 text-zinc-100">angel-martinez-wb</p>
              </a>
            </li>
            <li>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link block rounded-xl border border-white/12 bg-zinc-900/70 px-5 py-4"
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-zinc-400">
                  GitHub
                </p>
                <p className="mt-1 text-zinc-100">letoor1234</p>
              </a>
            </li>
            <li>
              <a
                href={contact.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link block rounded-xl border border-white/12 bg-zinc-900/70 px-5 py-4"
              >
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-zinc-400">
                  Upwork
                </p>
                <p className="mt-1 text-zinc-100">Freelance Profile</p>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
