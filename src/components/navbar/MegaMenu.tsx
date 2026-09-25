import { MegaMenuColumn } from "./MegaMenuColumn";
import type { MegaMenuContent } from "./types";

export function MegaMenu({ content }: { content: MegaMenuContent }) {
  return (
    <div className="grid grid-cols-4 gap-10 px-10 py-12">
      {content.columns.map((column) => (
        <MegaMenuColumn
          key={column.sections.map((section) => section.heading).join("|")}
          column={column}
        />
      ))}
    </div>
  );
}
