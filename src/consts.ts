// Site settings
export const SITE_TAB = "Hackastro";
export const SITE_TITLE = "Hackastro⌨️";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// Theme settings
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
};

// User profile information
export const USER_SITE = "https://frosti.saroprock.com";
export const USER_NAME = "Jack Wenyoung";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";

export const menuItems = [
  {
    id: "home",
    href: "/",
    svg: "material-symbols:home-outline-rounded",
    target: "_self",
  }, // Home page
  {
    id: "about",
    href: "/about",
    svg: "material-symbols:info-outline-rounded",
    target: "_self",
  }, // About page
  {
    id: "blog",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "allblog",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "techblog",
        href: "/blog/categories/tech",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "lifeblog",
        href: "/blog/categories/life",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    // text: "Project",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  // {
  //   id: "friend",
  //   text: "Friend",
  //   href: "/friend",
  //   svg: "material-symbols:supervisor-account-outline-rounded",
  //   target: "_self",
  // }, // Friends page
  {
    id: "contact",
    // text: "Contact",
    href: "mailto:dlwxxxdlw@gmail.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://afdian.net/a/saroprock",
    ariaLabel: "Support my work",
    title: "Support my work",
    svg: "ri:cup-line",
  },
  {
    href: "https://github.com/EveSunMaple",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://space.bilibili.com/438392347",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "ri:rss-line",
  },
];
