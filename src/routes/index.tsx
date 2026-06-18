import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  HeartHandshake,
  Star,
  TrendingUp,
  Compass,
  BookOpen,
  Lightbulb,
  Brain,
  Clock,
  ShieldCheck,
  Play,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Couple Therapy — A Guided Relationship Journey" },
      {
        name: "description",
        content:
          "Therapist-guided tools and resources to deepen connection, communication, and emotional intimacy together.",
      },
    ],
  }),
  component: CoupleTherapyPage,
});

/* ---------------------------------- Page ---------------------------------- */

function CoupleTherapyPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />

      <main className="mx-auto w-full max-w-5xl px-5 pb-28 sm:px-8">
        <PageIntro />
        <GuidedSeries />
        <RelationshipTools />
        <Resources />
        <Footer />
      </main>
    </div>
  );
}

/* --------------------------------- TopBar --------------------------------- */

function TopBar() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 pt-8 sm:px-8 sm:pt-10">
      <button className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
        Back
      </button>
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 text-sage" />
        Therapist-approved
      </div>
    </header>
  );
}

/* -------------------------------- PageIntro ------------------------------- */

function PageIntro() {
  return (
    <section className="mt-14 sm:mt-20">
      <div className="flex items-center gap-3">
        <ConnectedCircles />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
          Couple Therapy
        </span>
      </div>
      <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-[3.5rem]">
        A gentle path toward a{" "}
        <em className="font-normal italic text-[oklch(0.55_0.08_25)]">
          closer, more honest
        </em>{" "}
        relationship.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Therapist-guided practices, reflections, and resources for couples who
        want to communicate better, feel more connected, and grow together.
      </p>
    </section>
  );
}

function ConnectedCircles() {
  return (
    <svg width="32" height="18" viewBox="0 0 32 18" aria-hidden>
      <circle cx="9" cy="9" r="7" fill="none" stroke="var(--sage)" strokeWidth="1.4" />
      <circle cx="23" cy="9" r="7" fill="none" stroke="oklch(0.7 0.1 20)" strokeWidth="1.4" />
    </svg>
  );
}

/* ------------------------------ GuidedSeries ------------------------------ */

function GuidedSeries() {
  return (
    <Section
      eyebrow="Guided series"
      title="Your current journey"
      desc="A therapist-designed series you can move through at your own pace, together."
    >
      <article className="relative overflow-hidden rounded-[20px] border border-border bg-card shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
          {/* Left */}
          <div className="p-7 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.94_0.03_155)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sage">
              Featured series · Phase 3
            </span>
            <h3 className="mt-5 font-display text-3xl leading-tight text-foreground sm:text-[2.25rem]">
              The Art of Listening &amp; Being Heard
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Six guided sessions to help you turn everyday conversations into
              moments of real understanding — drawn from the Gottman Method and
              Emotionally Focused Therapy.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-sage" />
                ~12 min per session
              </span>
              <span className="inline-flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-[oklch(0.7_0.1_20)]" />
                12 activities
              </span>
              <span className="inline-flex items-center gap-2">
                <Brain className="h-4 w-4 text-[oklch(0.65_0.09_295)]" />
                Evidence-based
              </span>
            </div>

            <div className="mt-7">
              <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span>Session 8 of 12</span>
                <span className="text-foreground">In progress</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[oklch(0.94_0.012_80)]">
                <div className="h-full w-2/3 rounded-full bg-sage" />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90">
                <Play className="h-4 w-4 fill-background" />
                Continue Journey
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[oklch(0.96_0.012_80)]">
                View all sessions
              </button>
            </div>
          </div>

          {/* Right — illustration */}
          <div className="relative hidden items-center justify-center bg-gradient-to-br from-[oklch(0.96_0.025_25)] via-[oklch(0.97_0.018_80)] to-[oklch(0.95_0.03_155)] p-10 lg:flex">
            <JourneyIllustration />
          </div>
        </div>
      </article>
    </Section>
  );
}

function JourneyIllustration() {
  return (
    <svg viewBox="0 0 280 280" className="h-auto w-full max-w-[280px]" aria-hidden>
      <defs>
        <linearGradient id="ringA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.7 0.1 20)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.7 0.1 20)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ringB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.62 0.07 155)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.62 0.07 155)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="140" r="78" fill="none" stroke="url(#ringA)" strokeWidth="1.2" />
      <circle cx="110" cy="140" r="78" fill="oklch(0.7 0.1 20 / 0.07)" />
      <circle cx="170" cy="140" r="78" fill="none" stroke="url(#ringB)" strokeWidth="1.2" />
      <circle cx="170" cy="140" r="78" fill="oklch(0.62 0.07 155 / 0.07)" />
      <path
        d="M140 158 C 128 146, 118 138, 118 126 C 118 118, 124 112, 132 112 C 137 112, 140 115, 140 118 C 140 115, 143 112, 148 112 C 156 112, 162 118, 162 126 C 162 138, 152 146, 140 158 Z"
        fill="oklch(0.55 0.08 25)"
        opacity="0.9"
      />
    </svg>
  );
}

/* ---------------------------- Relationship Tools -------------------------- */

const tools = [
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Relationship Values Check-In",
    desc: "Reflect together on what matters most in this season of your relationship.",
    accent: "rose",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Appreciation Habit",
    desc: "A simple daily practice for noticing and naming what you love in each other.",
    accent: "sand",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Relationship Connection Tracker",
    desc: "Gentle weekly check-ins to stay attuned to closeness, warmth, and intimacy.",
    accent: "sage",
  },
  {
    icon: <Compass className="h-5 w-5" />,
    title: "Shared Relationship Vision",
    desc: "Imagine and shape the future you'd like to build together, one value at a time.",
    accent: "lavender",
  },
] as const;

const accentMap: Record<string, string> = {
  rose: "bg-[oklch(0.96_0.03_20)] text-[oklch(0.55_0.1_20)]",
  sand: "bg-[oklch(0.96_0.035_75)] text-[oklch(0.5_0.07_60)]",
  sage: "bg-[oklch(0.95_0.03_155)] text-sage",
  lavender: "bg-[oklch(0.95_0.025_295)] text-[oklch(0.55_0.09_295)]",
};

function RelationshipTools() {
  return (
    <Section
      eyebrow="Relationship tools"
      title="Therapeutic exercises for couples"
      desc="Short, intentional practices to use on your own or together."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {tools.map((t) => (
          <a
            key={t.title}
            href="#"
            className="group flex h-full flex-col rounded-[20px] border border-border bg-card p-7 transition-all hover:border-[oklch(0.88_0.015_70)] hover:shadow-soft"
          >
            <div
              className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accentMap[t.accent]}`}
            >
              {t.icon}
            </div>
            <h4 className="mt-6 font-display text-xl text-foreground">
              {t.title}
            </h4>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">
              {t.desc}
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Begin exercise
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Resources ------------------------------- */

const resources = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Articles",
    desc: "In-depth reads from licensed couples therapists.",
    count: "42 articles",
    accent: "sand",
  },
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Tips",
    desc: "Short, practical ideas to try in your week.",
    count: "28 tips",
    accent: "sage",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Stories",
    desc: "Real couples on what helped them grow closer.",
    count: "16 stories",
    accent: "rose",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Myths",
    desc: "Common relationship beliefs, gently re-examined.",
    count: "12 myths",
    accent: "lavender",
  },
] as const;

function Resources() {
  return (
    <Section
      eyebrow="Resource library"
      title="Read, reflect, and learn"
      desc="Hand-selected resources to support your journey between sessions."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {resources.map((r) => (
          <a
            key={r.title}
            href="#"
            className="group flex items-start gap-5 rounded-[20px] border border-border bg-card p-6 transition-all hover:border-[oklch(0.88_0.015_70)] hover:shadow-soft"
          >
            <div
              className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accentMap[r.accent]}`}
            >
              {r.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-xl text-foreground">
                  {r.title}
                </h4>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {r.desc}
              </p>
              <div className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {r.count}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <div className="mt-24 flex flex-col items-center gap-2 border-t border-border pt-10 text-center text-xs text-muted-foreground">
      <div className="inline-flex items-center gap-2">
        <Heart className="h-3.5 w-3.5 text-[oklch(0.7_0.1_20)]" />
        Made with care for couples growing together
      </div>
      <div>
        This is wellness content — not a substitute for professional therapy.
      </div>
    </div>
  );
}

/* ------------------------------ Section helper ---------------------------- */

function Section({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-20 sm:mt-28">
      <div className="mb-8 flex flex-col gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
          {eyebrow}
        </span>
        <h2 className="font-display text-[1.75rem] text-foreground sm:text-[2rem]">
          {title}
        </h2>
        {desc && (
          <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {desc}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
