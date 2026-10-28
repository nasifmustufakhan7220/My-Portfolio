"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "gradient-primary" | "light-warm";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  iconColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("gradient-primary");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
    if (savedTheme === "gradient-primary" || savedTheme === "light-warm") {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "gradient-primary");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "gradient-primary" ? "light-warm" : "gradient-primary";
    setTheme(nextTheme);
  };

  const iconColor = "#e9e4eb";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, iconColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function usePortfolioTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("usePortfolioTheme must be used within a ThemeProvider");
  }
  return context;
}
