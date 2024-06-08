import { THEMES } from "@/const/themes";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export const useChangeTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">(THEMES.light);
  const themeToggleButtonRef = useRef<HTMLDivElement>(null);

  const toggleTheme = async () => {
    if (
      !themeToggleButtonRef.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme((prevTheme) =>
          prevTheme === THEMES.light ? THEMES.dark : THEMES.light
        );
      });
    }).ready;

    const { top, left, width, height } =
      themeToggleButtonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 1000,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return {
    theme,
    toggleTheme,
    themeToggleButtonRef,
  };
};
