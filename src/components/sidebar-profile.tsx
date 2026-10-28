"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePortfolioTheme } from "@/components/theme-provider";
import {
  ExternalLink,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";

export function SidebarProfile() {
  const { profile } = portfolioData;
  const { theme } = usePortfolioTheme();
  const iconColor = theme === "gradient-primary" ? "#878787" : "#3e1f59";

  return (
    <aside className="space-y-4">
      {/* Mini Profile Card */}
      <Card className="overflow-hidden border border-border shadow-xs bg-card">
        <div className="h-16 w-full relative overflow-hidden bg-muted">
          <Image
            src="/banner03.png"
            alt="Profile background banner"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 350px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <CardContent className="pt-0 pb-4 px-4 text-center">
          <div className="relative -mt-10 mx-auto size-16 rounded-full border-2 border-card bg-card overflow-hidden shadow-xs ring-1 ring-primary/20">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <h3 className="font-bold text-base text-foreground mt-2">
            {profile.name}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
            {profile.headline}
          </p>

          <div className="my-3 border-t border-border/80" />

        </CardContent>
      </Card>

      {/* Socials & Networking Card */}
      <Card className="border border-border shadow-xs bg-card p-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Social Networks
        </h4>
        <div className="space-y-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
          >
            <div className="flex items-center gap-2">
              <GithubIcon className="size-4" style={{ color: iconColor }} />
              <span className="font-medium">GitHub</span>
            </div>
            <ExternalLink className="size-3 text-muted-foreground" />
          </a>

          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
          >
            <div className="flex items-center gap-2">
              <LinkedinIcon className="size-4" style={{ color: iconColor }} />
              <span className="font-medium">LinkedIn</span>
            </div>
            <ExternalLink className="size-3 text-muted-foreground" />
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-secondary text-foreground transition-colors"
          >
            <div className="flex items-center gap-2">
              <Mail className="size-4" style={{ color: iconColor }} />
              <span className="font-medium">Email</span>
            </div>
            <ExternalLink className="size-3 text-muted-foreground" />
          </a>
        </div>
      </Card>

      {/* Recommended Focus / Highlights */}
      <Card className="border border-border shadow-xs bg-card p-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Trending Topics
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {["#nextjs", "#react19", "#tailwindcss", "#webdev", "#cloud", "#typescript"].map(
            (tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-[11px] font-medium cursor-pointer hover:border-primary"
              >
                {tag}
              </Badge>
            )
          )}
        </div>
      </Card>
    </aside>
  );
}
