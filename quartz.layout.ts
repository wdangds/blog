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
        filter: (f) => {
          // Treat any folder index page as NOT a post
          const isFolderIndex =
            f.slug === "index" ||                                // root: content/index.md
            (typeof f.slug === "string" && /(?:^|\/)index$/.test(f.slug)) ||
            (typeof f.filePath === "string" && /\/index\.mdx?$/.test(f.filePath))

          if (isFolderIndex) return false

          // Your “post” rule (adjust to your structure/tags)
          return (
            (typeof f.slug === "string" && f.slug.startsWith("posts/")) ||
            (Array.isArray(f.frontmatter?.tags) && f.frontmatter.tags.includes("post"))
          )
        },
        // sort: (a, b) => (b.dates?.modified?.getTime() ?? 0) - (a.dates?.modified?.getTime() ?? 0),
      }),
      condition: (props) => props.fileData.slug === "index",
    }),],
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
