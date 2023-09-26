import {FC, memo, useState} from 'react';

import {researchWorks, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from "../Common/ResumeSection";
import {
  availableCitationStyles,
  CitationTemplateLoader,
  defaultCitationStyle
} from "../../../data/CitationTemplateLoader";

const Cite = require('citation-js')

const ResearchWorks: FC = memo(() => {
  const [currentCitationFormat, setCurrentCitationFormat] = useState<string>(defaultCitationStyle);

  CitationTemplateLoader.loadTemplates()
  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Publications}>
      <div className="flex flex-col items-center pb-3" data-te-dropdown-ref>
        <button
          className="flex items-center whitespace-nowrap rounded border-orange-400 border-2 bg-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          type="button"
          id="citationFormatDropdownButton"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light">Citation Format
          <span className="ml-2 w-2"><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="rgba(251, 146, 60, 1)"
            className="h-5 w-5">
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"/>
            </svg>
          </span>
        </button>
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
          aria-labelledby="citationFormatDropdownMenuButton"
          data-te-dropdown-menu-ref>
          {
            availableCitationStyles.map(citationFormat => (
              <li
                key={`li_${citationFormat}`}
                className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal hover:bg-neutral-100 hover:text-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-black dark:hover:bg-neutral-600"
                onClick={() => setCurrentCitationFormat(citationFormat)}
                data-te-dropdown-item-ref
              >{citationFormat.toUpperCase()}</li>
            ))
          }
        </ul>
      </div>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        {
          Object.entries(researchWorks).map(([researchWorkType, items]) => {
            return <ResumeSection title={researchWorkType}>
              {items.map((item, index) => {
                const cite = new Cite()
                cite.set(item)
                const htmlContent = formatBibliography(
                  cite.format("bibliography", {
                    format: "html",
                    template: currentCitationFormat
                  })
                )
                return <div key={`${researchWorkType}_${index}`} className="bibliography"
                            dangerouslySetInnerHTML={{__html: htmlContent}}/>
              })}
            </ResumeSection>
          })
        }
      </div>
    </Section>
  );
});

/**
 * Method to highlight author name and remove n.d. for unpublished works
 * @param rawBibliography
 */
const formatBibliography = (rawBibliography: String) => {
  const textsToBold = ["Zhou, Kayee", "Kayee Zhou", "Zhou, K", "Zhou, J", "Zhou, Jiayi", "Jiayi Zhou"]
  const textsToRemove = [" (n.d.)", ", n.d"]
  let output = rawBibliography
  textsToBold.forEach(textToBold =>
    output = output.replace(textToBold, `<b>${textToBold}</b>`)
  )
  textsToRemove.forEach(textToRemove =>
    output = output.replace(textToRemove, "")
  )
  return output
}

ResearchWorks.displayName = 'Research Works';
export default ResearchWorks;
