"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePortfolioTheme } from "@/components/theme-provider";
import { FolderGit2, ExternalLink, Star, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const { theme } = usePortfolioTheme();
  const iconColor = theme === "gradient-primary" ? "#878787" : "#7413eb";

  return (
    <section id="projects" className="scroll-mt-20">
      <Card className="border border-border shadow-xs bg-card transition-all">
        <CardHeader className="border-b border-border/60 pb-3 flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderGit2 className="size-5" style={{ color: iconColor }} />
            <CardTitle className="text-xl font-bold tracking-tight text-foreground">
              Featured Projects
            </CardTitle>
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            {projects.length} Showcases
          </span>
        </CardHeader>
        <CardContent className="pt-4 divide-y divide-border/60">
          {projects.map((project) => (
            <div
              key={project.id}
              className="py-5 first:pt-2 last:pb-2 flex flex-col md:flex-row gap-4 items-start justify-between group"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <Link
                    href={`/projects/${project.id}`}
                    className="group/title inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xs"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover/title:text-primary transition-colors underline-offset-4 hover:underline">
                      {project.title}
                    </h3>
                  </Link>
                  {project.stars && (
                    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">
                      <Star className="size-3 text-amber-500 fill-amber-500" />
                      {project.stars}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm font-medium text-primary">
                  {project.tagline}
                </p>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-[11px] px-2 py-0.5 rounded-md bg-secondary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-1 shrink-0 self-start md:self-center flex-wrap">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/80 transition-all shadow-2xs hover:scale-105 active:scale-95"
                >
                  <span>Details</span>
                  <ArrowRight className="size-3" />
                </Link>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-full text-xs font-medium border transition-colors ${
                      theme === "gradient-primary"
                        ? "bg-primary border-primary text-white hover:bg-primary/90"
                        : "border-border bg-background hover:bg-secondary text-foreground"
                    }`}
                  >
                    <GithubIcon className="size-3.5" style={{ color: theme === "gradient-primary" ? "#ffffff" : iconColor }} />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-full text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-xs"
                  >
                    <span>Demo</span>
                    <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
