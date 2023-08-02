import { SectionType } from "@/utils/Sections";

function Section({ id, content }: Pick<SectionType, "id" | "content">) {
  return (
    <section className="w-screen h-full " id={id}>
      {content}
    </section>
  );
}

export default Section;
