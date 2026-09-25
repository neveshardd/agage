import { MegaMenuLink } from "./MegaMenuLink";
import type { MegaMenuColumnData } from "./types";

export function MegaMenuColumn({ column }: { column: MegaMenuColumnData }) {
  return (
    <div className="flex flex-col gap-8">
      {column.sections.map((section) => (
        <div key={section.heading}>
          <h3 className="mb-4 text-[15px] font-semibold text-black">
            {section.heading}
          </h3>
          <ul className="flex flex-col gap-1">
            {section.links.map((link) => (
              <li key={link.label}>
                <MegaMenuLink link={link} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
