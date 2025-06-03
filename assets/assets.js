import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import github from './github.png';
import js from './js.png'
import java from './java.png'
import python from './python.png'
import c from './c.png'
import cplus from './cplus.png'
import csharp from './csharp.png'
import html from './html.png'
import aws from './aws.png'
import sql from './sql.png'
import linux from './linux.png'
import windows from './windows.png'
import photo from './photo.png'
import excel from './excel.png'
import word from './word.png'
import powerpoint from './powerpoint.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    download_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    github,
    js,
    java,
    python,
    c,
    cplus,
    csharp,
    html,
    aws,
    sql,
    linux,
    windows,
    photo,
    excel,
    word,
    powerpoint,
};

export const workData = [
  {
    title: 'Marketplace Platform (NDA)',
    description: 'Full‑Stack Design',
    bgImage: '/MarketPlace.jpg',
    longDescription: [
      'As a full‑stack developer, I am spearheading the end‑to‑end build of a two‑sided web and mobile marketplace that connects e‑commerce sellers with Amazon fulfillment specialists. The project demands careful alignment of business logic and user flows so that both parties can create accounts, list services, and initiate engagements with minimal friction.',
      'On the back end I am assembling a serverless micro‑services architecture on AWS—principally Lambda functions fronted by API Gateway and persisting data in DynamoDB—so the platform scales elastically without ops overhead. The cross‑platform React Native and Next.js front‑ends feature real‑time WebSocket chat, role‑based dashboards, and secure Stripe billing, all delivered through a CI/CD pipeline I configured for zero‑downtime releases.'
    ],
    gallery: ['/upwork.png', '/fiverr.png']
  },
  {
    title: 'AI Doc Converter (NDA)',
    description: 'Mobile App / Website',
    bgImage: '/aitopng.png',
    longDescription: [
      'For another confidential client I am leading the development of a proprietary web application that uses AI and computer‑vision pipelines to convert unstructured images and PDFs into structured, company‑standard data formats, enabling secure inter‑company communication from any device.',
      'The application is backed by a Python/Flask API layer and PostgreSQL datastore that orchestrate OCR extraction and GPT‑powered data‑normalization models. A responsive React dashboard lets users upload documents over TLS, watch real‑time processing status, and export clean CSV or JSON in seconds—eliminating hours of manual data entry while enforcing enterprise‑grade RBAC.'
    ],
    gallery: ['/lens.png', '/googlelens.gif']
  },
  {
    title: 'Patrol Vehicle Alert System',
    description: 'Software Design',
    bgImage: '/Patrol.png',
    longDescription: [
      'As my senior capstone I partnered with the Polk County Sheriff’s Office to engineer an edge‑AI safety suite that runs entirely on in‑vehicle hardware and detects gunshots, dangerous objects, and license plates in real time. The project combined computer vision, DSP, and embedded systems under strict performance and reliability constraints.',
      'Working within a seven‑person Agile team, I produced system‑architecture diagrams, managed sprint planning with stakeholders, and designed the DSP pipeline: a YOLOv8‑based model accelerated by CUDA that achieved 95 % precision and 92 % recall in live‑fire field tests, triggering officer alerts in under two seconds.'
    ],
    gallery: [{ src: '/lpr.png', fit: 'contain' }, '/googlelens.gif']
  },
  {
    title: 'Portfolio Webpage',
    description: 'Front‑End Design',
    bgImage: '/Portfolio.png',
    longDescription: [
      'I built my personal portfolio to showcase recent work using React 18, the new Next.js 14 App Router, and Tailwind CSS for utility‑first styling. All pages are statically generated and deployed to Vercel edge functions, which keeps Lighthouse performance scores between 99 and 100.',
      'Project data is loaded from a single JSON file so updates require no code changes, while framer‑motion drives smooth page transitions and the UI adapts to dark/light themes on any viewport. The entire site ships less than 200 kB of JavaScript, highlighting my focus on performance and accessible UX.'
    ],
    gallery: []
  }
];


export const skillData = [
    { section: 'Languages', items: [
        { icon: assets.java, title: 'Java' },
        { icon: assets.python, title: 'Python' },
        { icon: assets.c, title: 'C' },
        { icon: assets.cplus, title: 'C++' },
        { icon: assets.csharp, title: 'C#' },
        { icon: assets.html, title: 'HTML/CSS' },
        { icon: assets.js, title: 'JavaScript' },
        { icon: assets.vscode, title: 'Assembly' },
    ]},

    { section: 'IT Tools', items: [
        { icon: assets.aws, title: 'AWS' },
        { icon: assets.sql, title: 'MySQL' },
        { icon: assets.github, title: 'Github' },
        { icon: assets.linux, title: 'Linux/Unix' },
        { icon: assets.windows, title: 'Windows' },
    ]},

    { section: 'Content Production', items: [
        { icon: assets.photo, title: 'Photoshop' },
        { icon: assets.excel, title: 'Microsoft Excel' },
        { icon: assets.word, title: 'Microsoft Word' },
        { icon: assets.powerpoint, title: 'PowerPoint' },
    ]},
]


export const infoList = [
    { icon: assets.code_icon_dark, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Java, Python, C, C++, HTML, CSS, Javascript, Assembly, HTML, CSS, React Js, Next Js' },
    { icon: assets.edu_icon_dark, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.S in Computer Science' },
    { icon: assets.project_icon_dark, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Patrol Vehicle Alert System\nE‑Commerce Platform\n and more below!' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.github, assets.figma, assets.git
];