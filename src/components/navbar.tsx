"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePortfolioTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Home,
  User,
  Zap,
  FolderGit2,
  GraduationCap,
  Mail,
  Palette,
  Menu,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: Home, id: "home" },
  { name: "About", href: "#about", icon: User, id: "about" },
  { name: "Skills", href: "#skills", icon: Zap, id: "skills" },
  { name: "Projects", href: "#projects", icon: FolderGit2, id: "projects" },
  { name: "Education", href: "#education", icon: GraduationCap, id: "education" },
  { name: "Contact", href: "#contact", icon: Mail, id: "contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = usePortfolioTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = navItems.map((item) => document.getElementById(item.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop - 120;
          if (scrollY >= top) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Icon color rule from prompt:
  // By default (gradient theme): icon color is '#878787'
  // When toggled (light warm '#f4f2ee'): icon color is '#7413eb'
  const iconColor = theme === "gradient-primary" ? "#878787" : "#7413eb";
  const activeIconColor = theme === "gradient-primary" ? "#4f55db" : "#7413eb";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-xs transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Logo of user's picture */}
        <Link
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2.5 group transition-transform active:scale-95"
          aria-label="Nasif Portfolio Home"
        >
          <div className="relative size-9 rounded-full overflow-hidden border-2 border-primary/20 shadow-xs ring-1 ring-primary/40 group-hover:border-primary transition-all">
            <Image
              src="/nasif-logo.png"
              alt="Nasif Logo"
              fill
              sizes="36px"
              priority
              className="object-cover"
            />
          </div>
          <span className="font-bold text-base tracking-tight hidden sm:inline-block text-foreground group-hover:text-primary transition-colors">
            Nasif<span className="text-primary font-black">.dev</span>
          </span>
        </Link>

        {/* Center / Right: LinkedIn-style Navlinks */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-3 h-full"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative flex flex-col items-center justify-center min-w-[62px] lg:min-w-[70px] h-full px-2 text-xs font-medium transition-all group ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="relative flex items-center justify-center">
                  <Icon
                    className="size-5 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: isActive ? activeIconColor : iconColor }}
                  />
                </div>
                <span className="mt-1 leading-none text-[11px]">{item.name}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-all"
                    style={{ backgroundColor: activeIconColor }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right side controls: Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Theme Color Switcher Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            id="theme-toggle-btn"
            title={
              theme === "gradient-primary"
                ? "Switch to Warm Light Theme (#f4f2ee)"
                : "Switch to Gradient Theme (#8187ff)"
            }
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs border border-border/80 hover:bg-secondary rounded-full transition-all"
          >
            <Palette className="size-4" style={{ color: iconColor }} />
            <span className="hidden sm:inline font-medium text-xs text-foreground">
              {theme === "gradient-primary" ? "Purple Gradient" : "LinkedIn Cream"}
            </span>
          </Button>

          {/* Mobile Navigation Drawer */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Open mobile navigation menu"
                    className="border border-border/60"
                  />
                }
              >
                <Menu className="size-5" style={{ color: iconColor }} />
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6 bg-card text-card-foreground">
                <SheetHeader className="mb-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="relative size-10 rounded-full overflow-hidden border border-border">
                      <Image
                        src="/nasif-logo.png"
                        alt="Nasif"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <SheetTitle className="text-base font-bold text-foreground">
                        Nasif
                      </SheetTitle>
                      <p className="text-xs text-muted-foreground">Portfolio Navigation</p>
                    </div>
                  </div>
                </SheetHeader>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                          isActive
                            ? "bg-secondary text-primary font-semibold"
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Icon
                          className="size-5"
                          style={{ color: isActive ? activeIconColor : iconColor }}
                        />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 pt-4 border-t border-border flex flex-col gap-3">
                  <div className="text-xs font-medium text-muted-foreground">App Theme:</div>
                  <Button
                    onClick={toggleTheme}
                    variant="outline"
                    size="sm"
                    className="w-full justify-start gap-2"
                  >
                    <Palette className="size-4" style={{ color: iconColor }} />
                    <span className="text-xs">
                      {theme === "gradient-primary"
                        ? "Switch to #f4f2ee"
                        : "Switch to #8187ff"}
                    </span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
