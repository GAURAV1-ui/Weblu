"use client";

import { useTheme } from "@/containers/theme-context";
import React from "react";
import Switch from "./switch";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Switch
        activeButton={theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        hiddenButton={
          theme === "light" ? <Moon size={16} /> : <Sun size={16} />
        }
        setActiveButton={toggleTheme}
      />
    </div>
  );
}
