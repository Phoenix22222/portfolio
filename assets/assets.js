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
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/LorumIpsumTemplate.png',
    },
    {
        title: 'App for Phone',
        description: 'Mobile App',
        bgImage: '/LorumIpsumTemplate.png',
    },
    {
        title: 'Portfolio site',
        description: 'Web Design',
        bgImage: '/LorumIpsumTemplate.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/LorumIpsumTemplate.png',
    },
]

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