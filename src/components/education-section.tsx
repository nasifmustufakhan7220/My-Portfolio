"use client";

import React from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { usePortfolioTheme } from "@/components/theme-provider";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function EducationSection() {
  const { education } = portfolioData;
  const { theme } = usePortfolioTheme();
  const iconColor = theme === "gradient-primary" ? "#878787" : "#7413eb";

  return (
    <section id="education" className="scroll-mt-20">
      <Card className="border border-border shadow-xs bg-card transition-all">
        <CardHeader className="border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="size-5" style={{ color: iconColor }} />
            <CardTitle className="text-xl font-bold tracking-tight text-foreground">
              Education
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4 divide-y divide-border/60">
          {education.map((item) => (
            <div key={item.id} className="py-4 first:pt-2 last:pb-2 flex gap-3.5 items-start">
              {/* Institution Emblem */}
              <div className="size-11 rounded-lg bg-secondary flex items-center justify-center font-bold text-sm text-primary shrink-0 border border-border shadow-2xs">
                {item.logoText}
              </div>

              <div className="space-y-1 flex-1">
                <h3 className="text-base font-bold text-foreground">
                  {item.school}
                </h3>
                <p className="text-sm font-medium text-foreground/80">
                  {item.degree} · {item.fieldOfStudy}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="size-3.5" style={{ color: iconColor }} />
                  <span>{item.period}</span>
                </div>
                {item.grade && (
                  <p className="text-xs text-muted-foreground font-medium pt-0.5">
                    Grade: <span className="text-foreground">{item.grade}</span>
                  </p>
                )}
                {item.activities && (
                  <div className="flex items-start gap-1.5 text-xs text-muted-foreground pt-1">
                    <Award className="size-3.5 shrink-0 mt-0.5" style={{ color: iconColor }} />
                    <span>{item.activities}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
