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
import { usePathname, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const [activeSection, setActiveSection] = useState(isHomePage ? "home" : "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // On subpages (such as /projects/[id]), do not highlight any navbar section
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. If user is at or near the bottom of the page, activate Contact (last section)
      if (windowHeight + scrollY >= documentHeight - 70) {
        setActiveSection("contact");
        return;
      }

      // 2. If user is at top of page, activate Home
      if (scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // 3. Check section positions from bottom to top using getBoundingClientRect
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i].el;
        if (section) {
          const rect = section.getBoundingClientRect();
          // Active when top of section is within upper viewport
          if (rect.top <= 220) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    handleScroll(); // Evaluate on mount / route change
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (!isHomePage) {
      router.push(`/${href}`);
      return;
    }

    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Icon color: #e9e4eb across the entire application as requested
  const iconColor = "#e9e4eb";
  const activeIconColor = "#ffffff";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-xs transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Logo of user's picture */}
        <Link
          href="/"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              handleNavClick("#home");
            }
          }}
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
          className="hidden md:flex items-center space-x-1 lg:space-x-2.5 h-full"
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
                className={`relative flex flex-col items-center justify-center min-w-[62px] lg:min-w-[68px] h-full px-2 text-xs font-medium transition-all group ${
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div
                  className={`relative flex items-center justify-center size-7 rounded-full transition-all duration-200 shadow-2xs ${
                    isActive
                      ? "bg-primary scale-105"
                      : "bg-[#3e1f59] group-hover:bg-primary/90"
                  }`}
                >
                  <Icon
                    className="size-3.5 transition-transform duration-200 group-hover:scale-110"
                    style={{ color: iconColor }}
                  />
                </div>
                <span className="mt-1 leading-none text-[11px]">{item.name}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-all bg-primary"
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
                : "Switch to Royal Plum Gradient Theme (#3e1f59)"
            }
            className="flex items-center gap-2 px-3 py-1.5 text-xs border border-border/80 bg-secondary/80 hover:bg-secondary rounded-full transition-all shadow-2xs hover:scale-105 active:scale-95"
          >
            <div className="size-5 rounded-full bg-[#3e1f59] flex items-center justify-center shrink-0 shadow-2xs">
              <Palette className="size-3" style={{ color: iconColor }} />
            </div>
            <span className="hidden sm:inline font-semibold text-xs text-foreground">
              {theme === "gradient-primary" ? "Plum (#3e1f59)" : "Cream (#f4f2ee)"}
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
                    className="border border-border/60 bg-[#3e1f59] hover:bg-primary shadow-2xs"
                  />
                }
              >
                <Menu className="size-4" style={{ color: iconColor }} />
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
                        <div className="size-7 rounded-full bg-[#3e1f59] flex items-center justify-center shrink-0 shadow-2xs">
                          <Icon
                            className="size-4"
                            style={{ color: iconColor }}
                          />
                        </div>
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
                    <div className="size-5 rounded-full bg-[#3e1f59] flex items-center justify-center shrink-0">
                      <Palette className="size-3" style={{ color: iconColor }} />
                    </div>
                    <span className="text-xs font-medium">
                      {theme === "gradient-primary"
                        ? "Switch to #f4f2ee"
                        : "Switch to #3e1f59"}
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

