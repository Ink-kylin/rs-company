import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "ζ‘δΎ", icon: "discover", link: "/zh/demo/" },
  {
    text: "ζε",
    icon: "creative",
    prefix: "/zh/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },

]);
