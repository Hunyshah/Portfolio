import { ExperienceTimeline } from "@/components/experience/timeline";
import { SkillGroups } from "@/components/skills/skill-groups";
import { ContactCta } from "@/components/contact/contact-cta";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/experience";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Experience",
  description:
    "Professional experience of Syed Bilal Haider as a Web and Mobile App Developer at TOPSOL and LUMINOR SOFT, building React and React Native applications.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Building and maintaining apps <span className="serif-accent text-accent">in teams.</span>
          </>
        }
        description="Web and mobile development with React and React Native — integrating REST APIs, managing state and working with designers and product managers on real features."
      />

      <section aria-label="Roles" className="container-page pb-16">
        <ExperienceTimeline detailed />
      </section>

      <section aria-labelledby="education-title" className="container-page py-16">
        <SectionHeading eyebrow="Education" id="education-title" title={education.qualification} description={education.institution} />
      </section>

      <section aria-labelledby="skills-title" className="container-page py-16">
        <SectionHeading eyebrow="Capabilities" id="skills-title" title="Technical skills" />
        <div className="mt-12">
          <SkillGroups />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
