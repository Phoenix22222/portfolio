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
    bgImage: '/MarketPlace.png',
    longDescription: [
      `This marketplace is an under-development, NDA-protected platform that functions like Upwork, but is purpose-built for the e-commerce domain. Its mission is to let small and mid‑sized brands instantly hire vetted Amazon specialists, photographers, and listing optimizers, through an intuitive web and mobile interface. By matching merchants with fulfillment talent, the product removes the technical and logistical hurdles that frequently block Main‑Street retailers from expanding onto Amazon, Walmart Marketplace, and other high‑volume channels.`,

      `On the engineering side, I own the entire stack. A serverless mesh of AWS Lambda functions behind API Gateway. The React Native mobile app and Next.js web client share a design‑system component library and stream real‑time chat over WebSockets. CI/CD pipelines in GitHub Actions push updates so that new features land with zero downtime and no vendor lock‑in.`
    ],
    gallery: ['/upwork.png', '/fiverr.png']
  },
  {
    title: 'AI Doc Converter (NDA)',
    description: 'Mobile App / Website',
    bgImage: '/aitopng.png',
    longDescription: [
      `Still in active development project, re‑imagines tools such as Google Lens or Microsoft Lens for the compliance‑minded enterprise. Users snap a picture of an internal document and the application securely converts that unstructured image or PDF into a clean, standards‑driven data package complete with field validation. All processing happens inside the customer’s own cloud account, ensuring that sensitive information never leaves their security boundary.`,

      `The back‑end is a containerized Python / Flask service running on ECS Fargate, wired to PostgreSQQ. A computer‑vision pipeline (OpenCV + Tesseract) extracts primitives, which are then normalized by GPT‑4o function‑calling agents that map content to the client’s schema. Each document flows through an immutable queue, emitting real‑time status to a React dashboard over Server‑Sent Events. At completion, the user can download strongly‑typed CSV, JSON, or an encrypted ZIP/PDF.`
    ],
    gallery: ['/lens.png', '/googlelens.gif']
  },
  {
    title: 'Patrol Vehicle Alert System',
    description: 'Software Design',
    bgImage: '/Patrol.png',
    longDescription: [
      `The Patrol Vehicle Alert System (PVAS) is an edge‑AI safety suite created in partnership with the Polk County Sheriff’s Office. Mounted entirely inside a patrol vehicle, PVAS has three subsystems, license‑plate recognition (LPR), advancing‑object detection (AOD), and gunshot detection (GDS), to elevate a deputy’s situational awareness without adding cognitive load. All computing runs on an in‑vehicle Ubuntu server, so no video or audio leaves the car, in strict compliance with PCSO privacy directives.`,

      `My primary focus was the GDS module. I curated field recordings, generated Mel‑spectrograms, and trained a YOLO‑based classifier that distinguishes gunfire from fireworks, construction noise, or exhaust backfire with 95 % precision and 92 % recall. The pipeline slices audio into two‑second windows, filters events by loudness, and then forwards high‑confidence detections to the alert broker with sub‑two‑second latency. In parallel, the LPR subsystem employs PaddleOCR to read plates that the AOD camera tracker has already identified, while AOD itself leverages a custom‑trained YOLOv11 model to flag oncoming vehicles, weapons, and collision threats. Together, the trio of models delivers an integrated, low‑cost alternative to six‑figure commercial systems such as ShotSpotter.`
    ],
    gallery: [{ src: '/lpr.png', fit: 'contain' }, { src: '/AOD.png', fit: 'contain' }, { src: '/GDS.png', fit: 'contain' }]
  },
  {
    title: 'Portfolio Webpage',
    description: 'Front‑End Design',
    bgImage: '/Portfolio.png',
    longDescription: [
      `I designed and coded this portfolio from the ground up because I wanted a playground where I could practice modern front‑end patterns rather than rely on a cookie‑cutter template. The site is written in React 18 on the Next.js 14 App Router and styled with Tailwind CSS utility classes for speed and composability. The goal is to display information about myself and my works to potential employers and interests.`
    ],
    gallery: [{ src: '/Webpage.png', fit: 'contain' }]
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