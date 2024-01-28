import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://chakri68.github.io/", // replace this with your deployed domain
  author: "Chakri",
  desc: "My tech blog 🛸",
  title: "chakri68",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/chakri68/chakri68.github.io",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/chakri.68",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/chakradhar-reddy-d",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:chakridevireddy69@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/chakri681",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/chakri68",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/939895742850555934",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
];
