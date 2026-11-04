"use client";

import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export function BackToTop() {
  const { t } = useI18n();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = buttonRef.current?.closest("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={t.footer.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed right-2.5 bottom-2.5 z-30 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-brand-orange text-white shadow-lg shadow-slate-900/25 transition-[opacity,translate,background-color] duration-200 hover:bg-brand-orange-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <IconArrowUp aria-hidden className="h-5 w-5" />
    </button>
  );
}
