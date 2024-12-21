"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        My works
      </SectionHeading>
      <div>

      </div>
      Hi
    </section>
  );
}
