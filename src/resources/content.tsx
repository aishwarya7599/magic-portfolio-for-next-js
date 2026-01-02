import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aishwarya",
  lastName: "Anandan",
  name: "Aishwarya Anandan",
  role: "Data Analyst / Business Intelligence / Business Analyst / Forcasting Analyst",
  avatar: "/images/avatar2.jpg",
  email: "aishwarya7599@gmail.com",
  //location: "America/New_York",  Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  location: "US/Eastern",
  languages: ["English", "Hindi", "Tamil", "Malayalam", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aishwarya7599",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aishwarya-anandan/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:aishwarya7599@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Selene, a design engineer at <Text as="span" size="xl" weight="strong">ONCE UI</Text>, where I craft intuitive <br /> user experiences. After hours, I build my own projects.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Aishwarya is a US/Eastern-based Forecasting Specialist and Data Analyst with a passion for transforming complex datasets into simple, actionable business insights. Currently pursuing her Master’s in Business Analytics at UMass Amherst (Fall 2025) , she brings four transformative years of experience from ExxonMobil and Batesville across data engineering, quality management, and business operations. Aishwarya thrives at the intersection of business and technology—fixing operational inefficiencies through SQL, Power BI, and automation while exploring AI technologies to drive smarter decisions and real-world impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Batesville",
        timeframe: "May 2025 - Aug 2025",
        role: "IT Vendor and Contracts Analytics Intern",
        achievements: [
          "Engineered an enterprise a central dashboard using SQL Server and Power BI to manage $10M+ in vendor agreements, standardizing metadata and KPI drill-downs for renewal, spend, and compliance.",
          "Streamlined vendor management processes, improving documentation and automating trackers for increased operational efficiency.",
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-001.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ExxonMobil",
        timeframe: "May 2022 - Apr 2024",
        role: "Senior Business Intelligence Developer - Service Desk",
        achievements: [
          "Spearheaded the engineering of 15+ executive governance dashboards using Tableau, Power BI, and ServiceNow, improving Customer Experience (CX) scores by 0.8 points.",
          "Achieved $90K in annual efficiency gains by architecting SLA-aware workflow automations and performance analytics tools within the ServiceNow ecosystem.",
          "Eliminated 5,000+ manual hours per year by orchestrating ServiceNow Flow automation with embedded data-quality rules and intelligent ticketing routing.",
          "Reduced service ticket volume by 40% through in-depth analysis of ticketing health and the deployment of automated self-service solutions.",
          "Coordinated a high-stakes knowledge transfer for a 25-member team to a Managed Service Provider (MSP), ensuring 100% service continuity through rigorous documentation and training.",
        ],
        images: [],
      },
      {
        company: "ExxonMobil",
        timeframe: "Aug 2020 - Apr 2022",
        role: "Retail Data Analyst - Vendor Management & Data Visualization",
        achievements: [
          "Standardized SLA and KPI governance frameworks for 14,000+ North American retail sites by implementing vendor scorecards, increasing accountability for a 70-member managed services team.",
          "Drove a 30% increase in loyalty revenue for the GroupBuy program by performing cohort analysis to optimize offer targeting and securing stakeholder adoption for strategic roadmap recommendations.",
          "Led 12 enterprise IT security risk assessments to closure with zero safety or compliance incidents by utilizing Power BI to standardize governance reporting and monthly business reviews.",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Massachusetts Amherst",
        description: <>MS in Business Analytics - Data Analytics Track - 4 GPA.</>,
      },
      {
        name: "Christ University",
        description: <>BS in Computer Science, Mathematics, and Statistics.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      //{
      //  title: "Figma",
      //  description: (
      //    <>Able to prototype in Figma with Once UI with unnatural speed.</>
      //  ),
      //  tags: [
      //   {
      //      name: "Figma",
      //      icon: "figma",
      //    },
      //  ],
        // optional: leave the array empty if you don't want to display images
      //  images: [
      //    {
      //      src: "/images/projects/project-01/cover-02.jpg",
      //      alt: "Project image",
      //      width: 16,
      //      height: 9,
      //    },
      //    ],
      //},"""
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
