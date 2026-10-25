"use client";

import React from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { usePortfolioTheme } from "@/components/theme-provider";
import { Zap, Code2, Database, Wrench } from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioData;
  const { theme } = usePortfolioTheme();
  const iconColor = theme === "gradient-primary" ? "#878787" : "#7413eb";

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes("front")) return Code2;
    if (category.toLowerCase().includes("back")) return Database;
    return Wrench;
  };

  return (
    <section id="skills" className="scroll-mt-20">
      <Card className="border border-border shadow-xs bg-card transition-all">
        <CardHeader className="border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <Zap className="size-5" style={{ color: iconColor }} />
            <CardTitle className="text-xl font-bold tracking-tight text-foreground">
              Skills & Expertise
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-5 space-y-6">
          {skills.map((cat, idx) => {
            const CategoryIcon = getCategoryIcon(cat.category);
            return (
              <div key={idx} className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <CategoryIcon className="size-4" style={{ color: iconColor }} />
                  <span>{cat.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <Badge
                      key={sIdx}
                      variant="secondary"
                      className="px-3 py-1.5 text-xs font-medium rounded-lg hover:border-primary transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </section>
  );
}
