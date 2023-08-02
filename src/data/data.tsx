import {
    AcademicCapIcon,
    ArrowDownTrayIcon,
    MapIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import profilepic from '../images/profilepic.jpg';
import {
    About,
    Hero,
    HomepageMeta,
    PortfolioItem,
    SkillGroup,
    Social,
    TimelineItem,
} from './dataDef';
import FacebookIcon from "../components/Icon/FacebookIcon";
import GmailIcon from "../components/Icon/GmailIcon";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
    title: 'Kayee (Jiayi) Zhou',
    description: "Kayee (Jiayi) Zhou personal website",
};

/**
 * Section definition
 */
export const SectionId = {
    Hero: 'hero',
    About: 'about',
    Publications: 'publications',
    Experience: 'experience',
    Skills: 'skills',
    Stats: 'stats',
    Footer: 'footer'
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
    imageSrc: heroImage,
    name: `Kayee (Jiayi) Zhou`,
    description: (
        <>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                <strong className="text-stone-100">PhD Candidate</strong><br/>
                @UT Austin LBJ School of Public Affair
            </p>
        </>
    ),
    actions: [
        {
            href: 'assets/kayee_zhou_resume.pdf',
            text: 'Resume',
            primary: true,
            Icon: ArrowDownTrayIcon,
        },
    ],
};

/**
 * About section
 */
export const aboutData: About = {
    profileImageSrc: profilepic,
    description: `Doctoral Student of Public Policy. MA and MPA in Political Science graduate with 10+ years of
experience conducting and assisting research projects, involving immigration and immigrant policies,
race, ethnicity, and identity politics, and public policies of China. Proficient in data processing, statistical
analysis, and machine learning for text analysis by using Stata and R, and qualitative methods, including
interviews and focus groups.`,
    aboutItems: [
        {label: 'Education', text: 'University of Texas', Icon: AcademicCapIcon},
        {label: 'Location', text: 'Austin, TX', Icon: MapIcon},
        {label: 'Interests', text: 'Ethnic politics (particularly Asian American political attitudes and behavior); immigration policy; politics and public policy in China', Icon: SparklesIcon},
    ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
        name: 'Spoken languages',
        skills: [
            {
                name: 'English',
                level: 10,
            },
            {
                name: 'Chinese (Mandarin)',
                level: 10,
            },
            {
                name: 'Chinese (Cantonese)',
                level: 10,
            },
        ],
    },
    {
        name: 'Data Analysis',
        skills: [
            {
                name: 'Stata',
                level: 9,
            },
            {
                name: 'R',
                level: 8,
            },
            {
                name: 'Python',
                level: 7,
            },
        ],
    },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
    {
        title: 'Project title 1',
        description: 'A short description of your project here.',
        url: 'https://kayeezhou.com/project1',
        image: porfolioImage1,
    },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
        date: 'Current',
        location: 'University of Texas, Austin, TX',
        title: 'Ph.D. in Public Affairs',
    },
    {
        date: 'May 2019',
        location: 'Texas Tech University, Lubbock, TX',
        title: 'MA in Political Science',
    },
    {
        date: 'May 2017',
        location: 'Texas Tech University, Lubbock, TX',
        title: 'MPA in Political Science',
    },
    {
        date: 'June 2015',
        location: 'Sun Yat-Sen University, Guangzhou, China',
        title: 'BA in Law',
        content: (<p>&emsp;&#x2022; Majors: Political Science and Public Administration</p>)
    },
];

export const researchExperience: TimelineItem[] = [
    {
        date: 'September 2020 - January 2022',
        location: 'Child and Family Research Partnership (CFRP) Center',
        title: 'Graduate Research Assistant',
        content: (
            <p>
                Projects: <br/>
                1) Texas Home Visiting Program - Describing Home Visiting’s Value Evaluation III: The
Connection Between THV and Child Wellbeing<br/>
                2) Protective and Compensatory Experience<br/>
                <span>&emsp;&#x2022; Cleaned, matched, processed, and analyzed large datasets using Stata and R</span><br/>
                <span>&emsp;&#x2022; Created analysis report based on produced results</span>
            </p>
        ),
    },
    {
        date: 'March 2020 – June 2020',
        location: 'The University of Texas at Austin',
        title: 'Graduate Research Assistant',
        content: (
            <p>
                Worked with Dr. Raissa Fabregas on the extension of <i>The Effectiveness of Public Agricultural Extension: Evidence from Farmer Field Days in Kenya</i> <br/>
                <span>&emsp;&#x2022; Matched and merged multiple datasets and performed analysis using Stata</span><br/>
                <span>&emsp;&#x2022; Transformed results with LaTeX, verified analytical results, and edited papers</span>
            </p>
        ),
    },
    {
        date: 'January 2015 – June 2015',
        location: 'Nanhai District, China',
        title: 'Member of the Research Team',
        content: (
            <p>
                Project: Analyze the Separation of Administration and Economic Reform among Village Committees<br/>
                <span>&emsp;&#x2022; Collected and analyzed policy documents, minutes from meetings, and progress reports about the
reform from local governments and village committees</span><br/>
                <span>&emsp;&#x2022; Interviewed with leaders of village committees and residents’ committees on the reform</span>
            </p>
        ),
    },
    {
        date: 'September 2014 – December 2014',
        location: 'Luogang District, China',
        title: 'Research Assistant',
        content: (
            <p>
                Project: Evaluate the Administrative Approval Reform of Local Government<br/>
                <span>&emsp;&#x2022; Reviewed policy documents, minutes from meetings and implementation plans about the reform
conducted by the Luogang government</span><br/>
                <span>&emsp;&#x2022; Conducted interviews with heads of various departments in the Luogang government</span>
            </p>
        ),
    },
    {
        date: 'June 2014 – September 2014',
        location: 'Nanhai District, China',
        title: 'Research Assistant',
        content: (
            <p>
                Project: Assess Social Work Agencies’ Performance in Providing Elder Care Services<br/>
                <span>&emsp;&#x2022; Conducted documentation reviews and observations to evaluate 5 agencies’ performances</span><br/>
                <span>&emsp;&#x2022; Interviewed 10 leaders, 13 frontline social workers, and 20 clients on agencies’ services</span><br/>
                <span>&emsp;&#x2022; provided constructive advice to the agencies and contributed to the evaluation report</span>
            </p>
        ),
    },
    {
        date: 'July 2014 – September 2014',
        location: 'Nanhai District, China',
        title: 'Research Assistant',
        content: (
            <p>
                Project: Assess Social Work Agencies’ Performance in Providing Elder Care Services<br/>
                <span>&emsp;&#x2022; Conducted documentation reviews and observations to evaluate 5 agencies’ performances</span><br/>
                <span>&emsp;&#x2022; Interviewed 10 leaders, 13 frontline social workers, and 20 clients on agencies’ services</span><br/>
                <span>&emsp;&#x2022; Provided constructive advice to the agencies and contributed to the evaluation report</span>
            </p>
        ),
    },
    {
        date: 'June 2014 – September 2014',
        location: 'Nanhai District, China',
        title: 'Research Assistant',
        content: (
            <p>
                Project: Research on the Elder Care Services in Nanhai District<br/>
                <span>&emsp;&#x2022; Conducted participant observation at Nursing Home at Danzao Town for 3 months</span><br/>
                <span>&emsp;&#x2022; Implemented a survey on 700 elders over 60 years old</span><br/>
                <span>&emsp;&#x2022; Interviewed with the staff of nursing homes and social work agencies</span><br/>
                <span>&emsp;&#x2022; Contributed to the report with recommendations to the government by comparing China’s
efforts with social welfare policies of developed countries</span>
            </p>
        ),
    },
    {
        date: 'June 2014 – September 2014',
        location: 'Nanhai District, China',
        title: 'Member of the Research Team',
        content: (
            <p>
                Project: Research on the Local Culture of the Historic Villages<br/>
                <span>&emsp;&#x2022; Collected, reviewed and evaluated family documents and historical records of an ancient village
in Danzao Town, such as records on the lives and kinship ties of ancestors and stories of historical
architecture</span><br/>
                <span>&emsp;&#x2022; Conducted oral history interviews with 3 villagers</span><br/>
                <span>&emsp;&#x2022; Wrote a report on the history of the village, including stories of the village’s founders, names and
historical buildings</span><br/>
                <span>&emsp;&#x2022; Presented the results at the local culture research competition and made an exhibition at Danzao
Town to introduce the hidden local culture to the public</span>
            </p>
        ),
    },
    {
        date: 'September 2013 – December 2013',
        location: 'Sun Yat-sen University',
        title: 'Member of the Research Team',
        content: (
            <p>
                Project: Research on the School Consolidation in China<br/>
                <span>&emsp;&#x2022; Reviewed policy documents and news on the school consolidation</span><br/>
                <span>&emsp;&#x2022; Wrote a report based on a case study on the school consolidation happened in a poverty county</span><br/>
                <span>&emsp;&#x2022; Presented the report at the Sun Yat-sen University Public Administration Case Competition and
won the 2nd prize out of 140 teams</span>
            </p>
        ),
    },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kayeechow1992'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jiayi-kayee-zhou-014678109/'},
    {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/kayee.chow.710'},
    {label: 'Gmail', Icon: GmailIcon, href: 'mailto:kayee@utexas.edu'},
];
