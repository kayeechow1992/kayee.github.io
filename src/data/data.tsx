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
        {label: 'Location', text: 'Austin, TX', Icon: MapIcon},
        {label: 'Interests', text: 'Reading, Baking, Hiking', Icon: SparklesIcon},
        {label: 'Education', text: 'University of Texas', Icon: AcademicCapIcon},
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

export const experience: TimelineItem[] = [
    {
        date: 'March 2010 - Present',
        location: 'Awesome Development Company',
        title: 'Research Assistant',
        content: (
            <p>
                Describe work, special projects, notable achievements, what technologies you have been working with, and
                anything else that would be useful for an employer to know.
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
