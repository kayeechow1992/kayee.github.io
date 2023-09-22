import {FC, memo} from 'react';

import {SectionId, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from "../Common/ResumeSection";
import {SkillGroup} from "./Skills";

const Skills: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Skills}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Skills">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
