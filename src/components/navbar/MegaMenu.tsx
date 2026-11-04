"use client";

import Image from "next/image";
import { useState } from "react";
import { MegaMenuColumn } from "./MegaMenuColumn";
import type { MegaMenuContent } from "./types";

export function MegaMenu({ content }: { content: MegaMenuContent }) {
  const images = [
    ...new Set(
      content.columns.flatMap((column) =>
        column.sections.flatMap((section) =>
          section.links.map((link) => link.image),
        ),
      ),
    ),
  ];
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex gap-10 px-10 py-12">
      <div className="grid flex-1 grid-cols-3 gap-10">
        {content.columns.map((column) => (
          <MegaMenuColumn
            key={column.sections.map((section) => section.heading).join("|")}
            column={column}
            onActivateLink={setActiveImage}
          />
        ))}
      </div>

      {/* Todas as fotos ficam montadas para a troca ser instantânea. */}
      <div
        aria-hidden
        className="relative ml-auto aspect-square w-64 shrink-0 overflow-hidden rounded-xl bg-slate-100 xl:w-72"
      >
        {images.map((image) => (
          <Image
            key={image}
            src={image}
            alt=""
            fill
            sizes="288px"
            className={`object-cover transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              image === activeImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
