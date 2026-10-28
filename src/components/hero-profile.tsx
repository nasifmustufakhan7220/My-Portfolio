"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/lib/portfolio-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { usePortfolioTheme } from "@/components/theme-provider";

import {
  MapPin,
  Briefcase,
  ExternalLink,
  Mail,
  Download,
} from "lucide-react";
import { toast } from "@/components/ui/toast";

export function HeroProfile() {
  const { profile } = portfolioData;
  const { theme } = usePortfolioTheme();
  const isPlum = theme === "gradient-primary";
  const iconColor = "#ffffff";

  const RESUME_URL =
    "https://drive.google.com/file/d/1A8eW4Q7f6jSlSffqkteCnBobcW8ijnxT/view?usp=sharing";

  const handleDownloadClick = () => {
    toast.add({
      title: "Download Resume",
      description: "Ready to view and download Nasif's resume?",
      actionProps: {
        children: "OK to Proceed",
        onClick: () => {
          window.open(RESUME_URL, "_blank", "noopener,noreferrer");
        },
      },
      timeout: 8000,
    });
  };

  return (
    <Card className="relative overflow-hidden border border-border shadow-md bg-card transition-all duration-300">
      {/* LinkedIn Cover Banner */}
      <div className="h-36 sm:h-48 w-full relative overflow-hidden bg-muted">
        <Image
          src="/banner03.png"
          alt="Profile cover banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="px-5 sm:px-8 pb-6">
        {/* Profile Avatar overlapping banner */}
        <div className="relative -mt-16 sm:-mt-20 mb-3 flex items-end justify-between flex-wrap gap-4">
          <div className="relative size-28 sm:size-36 rounded-full border-4 border-card bg-card shadow-lg overflow-hidden ring-2 ring-primary/20">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="144px"
              priority
              className="object-cover"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              className="rounded-full font-semibold shadow-xs transition-all hover:scale-105"
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="size-5 rounded-full bg-[#3e1f59] flex items-center justify-center mr-1.5 shrink-0">
                <Mail className="size-3" style={{ color: iconColor }} />
              </div>
              Get in Touch
            </Button>
            <Button
              variant={isPlum ? "default" : "outline"}
              className={`rounded-full font-semibold transition-all ${
                isPlum
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-secondary"
              }`}
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="size-5 rounded-full bg-[#3e1f59] flex items-center justify-center mr-1.5 shrink-0">
                <ExternalLink className="size-3" style={{ color: iconColor }} />
              </div>
              View Projects
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-border"
              title="Download Resume"
              onClick={handleDownloadClick}
            >
              <div className="size-6 rounded-full bg-[#3e1f59] flex items-center justify-center shrink-0">
                <Download className="size-3.5" style={{ color: iconColor }} />
              </div>
            </Button>
          </div>
        </div>

        {/* Identity & Headline */}
        <div className="space-y-2 mt-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {profile.name}
            </h1>
            <Badge
              variant="secondary"
              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
            >
              Open to Work
            </Badge>
          </div>

          <p className="text-sm sm:text-base font-medium text-foreground/90 max-w-2xl leading-snug">
            {profile.headline}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground pt-1">
            <span className="flex items-center gap-1.5">
              <div className="size-5 rounded-full bg-[#3e1f59] flex items-center justify-center shrink-0">
                <Briefcase className="size-3" style={{ color: iconColor }} />
              </div>
              <span>{profile.company}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <div className="size-5 rounded-full bg-[#3e1f59] flex items-center justify-center shrink-0">
                <MapPin className="size-3" style={{ color: iconColor }} />
              </div>
              <span>{profile.location}</span>
            </span>
          </div>
        </div>

        {/* Quick Highlights / Bio */}
        <div className="mt-5 pt-4 border-t border-border/80">
          <p className="text-sm text-foreground/80 leading-relaxed max-w-3xl">
            {profile.bio}
          </p>
        </div>
      </div>
    </Card>
  );
}
