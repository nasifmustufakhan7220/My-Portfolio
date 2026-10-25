"use client";

import React from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { usePortfolioTheme } from "@/components/theme-provider";
import { UserCheck, CheckCircle2, Award } from "lucide-react";

export function AboutSection() {
  const { about } = portfolioData;
  const { theme } = usePortfolioTheme();
  const iconColor = theme === "gradient-primary" ? "#878787" : "#7413eb";

  return (
    <section id="about" className="scroll-mt-20">
      <Card className="border border-border shadow-xs bg-card transition-all">
        <CardHeader className="border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <UserCheck className="size-5" style={{ color: iconColor }} />
            <CardTitle className="text-xl font-bold tracking-tight text-foreground">
              About
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
            {about.summary}
          </p>

          <div className="pt-2">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Award className="size-4" style={{ color: iconColor }} />
              Key Highlights & Engineering Focus
            </h3>
            <ul className="space-y-2.5">
              {about.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2
                    className="size-4.5 shrink-0 mt-0.5 text-primary"
                    style={{ color: iconColor }}
                  />
                  <span className="leading-normal">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
