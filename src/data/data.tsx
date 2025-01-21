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
    Education: 'education',
    Portfolios: 'portfolios',
    Experience: 'experience',
    Skills: 'skills',
    Stats: 'stats',
    Publications: 'publications',
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
        {
            label: 'Education',
            text: (<a className="about-link"
                      href="https://www.google.com/search?q=university+of+texas+at+austin+qs+ranking">University of
                Texas</a>),
            Icon: AcademicCapIcon
        },
        {
            label: 'Location',
            text: (<a className="about-link" href="https://www.google.com/search?q=Austin+TX">Austin, TX</a>),
            Icon: MapIcon
        },
        {
            label: 'Interests',
            text: 'Ethnic politics (particularly Asian American political attitudes and behavior); immigration policy; politics and public policy in China',
            Icon: SparklesIcon
        },
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
 * Experience section -- TODO: Standardize resume contact format or offer MDX
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
        title: 'M.A. in Political Science',
    },
    {
        date: 'May 2017',
        location: 'Texas Tech University, Lubbock, TX',
        title: 'MPA in Political Science',
    },
    {
        date: 'June 2015',
        location: 'Sun Yat-Sen University, Guangzhou, China',
        title: 'B.A. in Law',
        content: (<p className="align-left">&emsp;&#x2022; Majors: Political Science and Public Administration</p>)
    },
];

export const researchExperience: TimelineItem[] = [
    {
        date: 'September 2020 - January 2022',
        location: 'Child and Family Research Partnership (CFRP) Center',
        title: 'Graduate Research Assistant',
        content: (
            <p className="align-left">
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
            <p className="align-left">
                Worked with Dr. Raissa Fabregas on the extension of <i>The Effectiveness of Public Agricultural
                Extension: Evidence from Farmer Field Days in Kenya</i> <br/>
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
            <p className="align-left">
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
            <p className="align-left">
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
            <p className="align-left">
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
            <p className="align-left">
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
            <p className="align-left">
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
            <p className="align-left">
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
            <p className="align-left">
                Project: Research on the School Consolidation in China<br/>
                <span>&emsp;&#x2022; Reviewed policy documents and news on the school consolidation</span><br/>
                <span>&emsp;&#x2022; Wrote a report based on a case study on the school consolidation happened in a poverty county</span><br/>
                <span>&emsp;&#x2022; Presented the report at the Sun Yat-sen University Public Administration Case Competition and
won the 2nd prize out of 140 teams</span>
            </p>
        ),
    },
];

export const teachingExperience: TimelineItem[] = [
    {
        date: 'January 2022 – May 2023',
        location: 'LBJ School of Public Affairs, University of Texas at Austin',
        title: 'Teaching Assistant',
        content: (
            <div>
                <p className="align-left">
                    PA 397: Introduction to Empirical Methods for Policy Analysis<br/>
                    <span>&emsp;&#x2022; Nominated for LBJ Graduate Teaching Assistant Award</span><br/>
                    <span>&emsp;&#x2022; Conducted two weekly sections for over 30 master students (each course) to teach quantitative
methods, and the use of R in data analysis</span>
                </p>
                <p className="align-left">
                    PA 397C: Program Evaluation for Nonprofit and Social Impact<br/>
                    <span>&emsp;&#x2022; Teach both quantitative and qualitative methods, and the use of R</span>
                </p>
                <p className="align-left">
                    PA 397G: Analytical Methods for Global Policy Studies<br/>
                    <span>&emsp;&#x2022; Teach quantitative methods, and the use of Stata</span>
                </p>
            </div>
        ),
    },
    {
        date: 'January 2019 – May 2019',
        location: 'Department of Political Science, Texas Tech University',
        title: 'Teaching Assistant',
        content: (
            <div>
                <p className="align-left">
                    PUAD 5352: Public Policy Analysis<br/>
                    <span>&emsp;&#x2022; Monitored and facilitated in-class discussion for 30 master students</span><br/>
                    <span>&emsp;&#x2022; Provided mentoring and guidance to students, aiding them in the drafting of policy memos</span>
                </p>
            </div>
        ),
    },
    {
        date: 'September 2015 – December 2018',
        location: 'Department of Political Science, Texas Tech University',
        title: 'Grader',
        content: (
            <div>
                <p className="align-left">
                    POLS 2306: Texas Politics and Topics (Online Course)
                </p>
                <p className="align-left">
                    POLS 1301: American Government (Online Course)
                </p>
            </div>
        ),
    }
];

/**
 * Research works section
 */
export const researchWorks = {
  "Publications": [
    "@article{https://doi.org/10.1111/ssqu.13050,\n" +
    "author = {Zhou, Kayee and Patterson, Dennis},\n" +
    "title = {Changing Patterns of Asian-American Partisanship: Accounting for the Politicization of the U.S.'s Fastest Growing Minority},\n" +
    "journal = {Social Science Quarterly},\n" +
    "volume = {102},\n" +
    "number = {4},\n" +
    "pages = {1428-1438},\n" +
    "doi = {10.1111/ssqu.13050},\n" +
    "url = {https://onlinelibrary.wiley.com/doi/abs/10.1111/ssqu.13050},\n" +
    "eprint = {https://onlinelibrary.wiley.com/doi/pdf/10.1111/ssqu.13050},\n" +
    "abstract = {Abstract Asian Americans are the fastest growing and most diverse minority in the United States, but they have become more alike in terms of their partisan preferences and increasing politicization. Evidence for these changes can be found in two National Surveys of Asian Americans, the first of which was completed in 2008 and showed that Asian Americans were mostly nonpartisans but also that those who were partisans tended to support the Democratic Party. The second survey, completed in 2016, however, indicated that there was an increase in the proportion of democratic identifiers and, also, a significant decline in the proportion of nonpartisans with a concomitant rise in the number of purposive Independents. These shifts suggest that there has been a distinct politicization of Asian Americans, and our purpose in this article is to identify and calibrate the factors that account for these partisan shifts.},\n" +
    "year = {2021}\n" +
    "}",
    "@article{nUOhEAAAQBAJ,\n" +
    "booktitle= {破局: 中国治理变革的地方样本 [Break the Deadlock: Exploring the Chinese way of local governance reform]},\n" +
    "title={提高产能空间,城市升值构动力 [Optimizing City's \n" +
    "Production Capacity to Improve its Competitiveness]},\n" +
    "author={Ye, Lin and Yingling Gao and Kayee Zhou},\n" +
    "editor={He, Yanling},\n" +
    "isbn={9787520103763},\n" +
    "lccn={2018364285},\n" +
    "url={https://books.google.com/books?id=nUOhEAAAQBAJ},\n" +
    "year={2018},\n" +
    "publisher={社会科学文献出版社 [Social Sciences Academic Press]},\n" +
    "pages = {98–129}\n" +
    "}"
  ],
  "Manuscripts": [
    "@article{TheElectoralCycleandPolicyOutcomes,\n" +
    "author = {Patterson, Dennis and Zhou, Kayee},\n" +
    "title = {The Electoral Cycle and Policy Outcomes: Toward an Explanaiton for the Content of Policy in the United States}\n" +
    "}",
    "@article{PredictivePowerofSelf-ReportedIdeology,\n" +
    "author = {Heise, Sarah and Somaraju, Ajay and Zhou, Kayee and Osa, God'swill},\n" +
    "title = {Predictive Power of Self-Reported Ideology from 1972 – 2020}\n" +
    "}",
    "@article{workingPaper1,\n" +
    "author = {Zhou, Kayee},\n" +
    "title = {Impacts of U.S. Local Immigrant Integration Policies on Immigrants’ Political\n" +
    "Participation}\n" +
    "}",
    "@article{workingPaper2,\n" +
    "author = {Zhou, Kayee},\n" +
    "title = {Immigrants' Group Identities and Collective Actions}\n" +
    "}",
    "@article{workingPaper3,\n" +
    "author = {Zhou, Kayee},\n" +
    "title = {Dynamics of Governmental Cooperation with Immigrant-focused Nonprofits}\n" +
    "}",
    "@article{workingPaper4,\n" +
    "author = {Zhou, Kayee},\n" +
    "title = {Legislative Gridlock on Comprehensive Immigration Reforms}\n" +
    "}",
    "@article{workingPaper5,\n" +
    "author = {Zhou, Kayee},\n" +
    "title = {Asian American Group Identity, Consciousness, and Political Participation}\n" +
    "}",
    "@article{workingPaper6,\n" +
    "author = {Zhou, Kayee},\n" +
    "title = {Discrimination, Emotion, and Action: Explaining Political Participation of U.S. \n" +
    "Minorities}\n" +
    "}",
    "@article{workingPaper7,\n" +
    "author = {Paul, Sandeep and Zhou, Kayee and Jones, Jessica and Bixler, Patrick},\n" +
    "title = {Who is My Neighbor? Exploring the Role of Social Capital in Disaster Preparedness and Adaptive Capacity in Urban Texas}\n" +
    "}",
    "@article{workingPaper8,\n" +
    "author = {Heise, Sarah and Zhou, Kayee and Somaraju, Ajay and Osa, God'swill},\n" +
    "title = {Cross-Pressured Asian-Americans and Vote Choice}\n" +
    "}",
    "@article{workingPaper9,\n" +
    "author = {Osa, God'swill and Kayee and Somaraju, Ajay and Heise, Sarah},\n" +
    "title = {Social Identity Informed Model of Partisanship Formation: A Network Simulation Study}\n" +
    "}",
    "@article{workingPaper10,\n" +
    "author = {Chan, Wing, Kit and Kayee Zhou},\n" +
    "title = {Rat Race versus Lying Flat: Why University Qualification Fails to Promote Social Mobility in China}\n" +
    "}",
    "@incollection{workingPaper11,\n" +
    "author = {Zhou, Kayee and Sanderson, Mackenzie and Sarkissian, Holly},\n" +
    "booktitle = {Global Development: Poverty, Inequality and the Politics of Data},\n" +
    "title = {Governance},\n" +
    "editor = {Weaver, Catherine and Ma, Ji and McLaren, Janet}\n" +
    "}"
  ]
}

/**
 * Social items
 */
export const socialLinks: Social[] = [
    {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kayeechow1992'},
    {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kayee-zhou-014678109'},
    {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/kayee.chow.710'},
    {label: 'Gmail', Icon: GmailIcon, href: 'mailto:kayee@utexas.edu'},
];
