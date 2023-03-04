import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "项目",
      icon: "project",
      prefix: "project/",
      children: "structure",
    },
    // "slides",
  ],
});
