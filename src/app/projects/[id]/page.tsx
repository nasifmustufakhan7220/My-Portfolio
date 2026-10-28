export const instant = false
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { portfolioData, getProjectById } from "@/lib/portfolio-data";
import { Navbar } from "@/components/navbar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Star,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Activity,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found | Nasif Portfolio",
    };
  }

  return {
    title: `${project.title} | Nasif Portfolio`,
    description: project.tagline || project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  // Find index for next/previous navigation
  const currentIndex = portfolioData.projects.findIndex((p) => p.id === id);
  const prevProject =
    currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioData.projects.length - 1
      ? portfolioData.projects[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb Navigation: Home > projectName */}
        <div className="mb-6">
          <Breadcrumb aria-label="Project Navigation Breadcrumb">
            <BreadcrumbList className="text-xs sm:text-sm font-medium">
              <BreadcrumbItem>
                <BreadcrumbLink
                  render={
                    <Link
                      href="/"
                      className="hover:text-primary transition-colors flex items-center gap-1 font-semibold"
                    >
                      Home
                    </Link>
                  }
                />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="plum-ghost-text font-semibold text-primary truncate max-w-60 sm:max-w-md">
                  {project.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Showcase Card */}
        <Card className="overflow-hidden border border-border shadow-md bg-card mb-8 transition-all">
          {/* Header Banner Accent */}
          <div className="h-32 sm:h-44 w-full relative overflow-hidden bg-linear-to-r from-primary/30 via-primary/10 to-secondary flex items-end p-6">
            <div className="relative z-10 flex items-center justify-between w-full">
              <span className="plum-solid-btn inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-xs text-foreground border border-border shadow-xs">
                <FolderGit2 className="size-3.5 text-primary" />
                Project Case Study
              </span>
              {project.stars && (
                <span className="plum-solid-btn inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-xs text-foreground border border-border shadow-xs">
                  <Star className="plum-star size-3.5 text-amber-500 fill-amber-500" />
                  <span>{project.stars} Stars</span>
                </span>
              )}
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Tagline */}
            <div className="space-y-2">
              <h1 className="plum-ghost-text text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg font-medium text-primary">
                {project.tagline}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-secondary text-secondary-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3 border-t border-border/70">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs transition-all hover:scale-105 active:scale-95"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="size-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="plum-solid-btn inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full text-xs sm:text-sm font-medium border border-border bg-background hover:bg-secondary text-foreground transition-all hover:scale-105 active:scale-95"
                >
                  <GithubIcon className="size-4" />
                  <span>View Repository</span>
                </a>
              )}
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-full text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors ml-auto"
              >
                <ArrowLeft className="size-3.5" />
                <span>Back to Projects</span>
              </Link>
            </div>
          </div>
        </Card>

        {/* Key Metrics / Highlights Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {project.metrics.map((metric, idx) => (
              <Card
                key={idx}
                className="border border-border/80 shadow-xs bg-card p-4 sm:p-5 flex items-center gap-4 transition-all"
              >
                <div className="size-11 rounded-xl bg-secondary flex items-center justify-center text-primary shrink-0 border border-border/60">
                  <Activity className="size-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Detailed Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Main Case Study Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Overview */}
            <Card className="border border-border shadow-xs bg-card p-6 sm:p-7 space-y-3">
              <div className="flex items-center gap-2 text-base font-bold text-foreground">
                <Sparkles className="size-4.5 text-primary" />
                <h2>Project Overview & Problem Solved</h2>
              </div>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </Card>

            {/* Core Features */}
            {project.features && project.features.length > 0 && (
              <Card className="border border-border shadow-xs bg-card p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-foreground">
                  <Layers className="size-4.5 text-primary" />
                  <h2>Key Features & Capabilities</h2>
                </div>
                <ul className="space-y-3">
                  {project.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-sm text-foreground/80 leading-normal"
                    >
                      <CheckCircle2 className="plum-feature-icon size-4.5 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Technical Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <Card className="border border-border shadow-xs bg-card p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-base font-bold text-foreground">
                  <Cpu className="size-4.5 text-primary" />
                  <h2>Architecture & Technical Highlights</h2>
                </div>
                <ul className="space-y-3">
                  {project.architecture.map((arch, aIdx) => (
                    <li
                      key={aIdx}
                      className="flex items-start gap-3 text-sm text-foreground/80 leading-normal"
                    >
                      <div className="size-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>

          {/* Sidebar Info Column */}
          <div className="lg:col-span-4 space-y-5">
            {/* Project Quick Facts */}
            <Card className="border border-border shadow-xs bg-card p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground border-b border-border/60 pb-2">
                Project Information
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-muted-foreground block mb-0.5">Role</span>
                  <span className="font-semibold text-foreground">
                    Lead Full-Stack Developer
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block mb-0.5">Timeline</span>
                  <span className="font-semibold text-foreground">
                    Production Ready
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block mb-0.5">
                    Primary Stack
                  </span>
                  <span className="font-semibold text-foreground">
                    {project.technologies.slice(0, 3).join(", ")}
                  </span>
                </div>
              </div>
            </Card>

            {/* Need a similar system banner */}
            <Card className="border border-border shadow-xs bg-linear-to-br from-card to-secondary/40 p-5 space-y-3">
              <h4 className="text-sm font-bold text-foreground">
                Interested in building something like this?
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                I can help architect and build performant, modern web applications
                tailored to your engineering goals.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center w-full h-8 px-4 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs"
              >
                Let&apos;s Connect
              </Link>
            </Card>
          </div>
        </div>

        {/* Bottom Pagination: Previous / Next Projects */}
        <div className="pt-6 border-t border-border/80 flex items-center justify-between gap-4 flex-wrap">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="plum-ghost-text group flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/60 max-w-[45%]"
            >
              <ArrowLeft className="size-4 shrink-0 transition-transform group-hover:-translate-x-1" />
              <div className="truncate text-left">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block plum-ghost-text">
                  Previous Project
                </span>
                <span className="truncate block font-semibold">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.id}`}
              className="plum-ghost-text group flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-secondary/60 max-w-[45%] ml-auto text-right"
            >
              <div className="truncate text-right">
                <span className="text-[10px] uppercase font-bold text-muted-foreground block plum-ghost-text">
                  Next Project
                </span>
                <span className="truncate block font-semibold">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-xs text-foreground/70 border-t border-border/60 bg-card/60 backdrop-blur-xs mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Nasif. Crafted with Next.js & shadcn/ui.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/#contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
