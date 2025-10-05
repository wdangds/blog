import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [// Only render this on the homepage (index.md)
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "Recent updates",
        limit: 3,
        showTags: false,
        linkToMore: false,
        filter: (f) => {
          const slug = String(f.slug ?? "")
          const path = String(f.filePath ?? "")

          // 1) Skip any folder index (TOCs), including the homepage
          const isFolderIndex =
            slug === "index" ||
            /(?:^|\/)index$/.test(slug) ||
            /\/index\.mdx?$/.test(path)
          if (isFolderIndex) return false

          // 2) Skip special/asset areas
          if (slug.startsWith(".obsidian/")) return false
          if (slug.startsWith("static/")) return false

          // 3) Only real notes (md/mdx) under content
          if (!/\.mdx?$/.test(path)) return false

          // If you want EVERYTHING else to be eligible, return true:
          return true

          // --- Optional stricter rule ---
          // If you prefer to hand-pick “blog posts”, tag them `post`
          // and replace the `return true` with:
          // return Array.isArray(f.frontmatter?.tags) && f.frontmatter.tags.includes("post")
        },
        // Optional: sort by last modified (Quartz already sorts by date)
        // sort: (a, b) => (b.dates?.modified?.getTime() ?? 0) - (a.dates?.modified?.getTime() ?? 0),
      }),
      // Only show this block on the homepage
      condition: (props) => props.fileData.slug === "index",
    }),
    ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
