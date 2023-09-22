import {FC, memo} from 'react';

import {researchExperience, SectionId, teachingExperience} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from '../Common/ResumeSection';
import TimelineItem from '../Common/TimelineItem';

const Experience: FC = memo(() => {
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Experience}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title="Research Experiences">
          {researchExperience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title="Teaching Experiences">
          {teachingExperience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </div>
    </Section>
  );
});

Experience.displayName = 'Experience';
export default Experience;
