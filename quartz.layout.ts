import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Menú Principal ": "https://clubcomputacioncuantica.github.io/notas",
      "| Website": "https://clubcomputacioncuantica.github.io",
      "GitHub": "https://github.com/clubcomputacioncuantica",
      "Discord": "https://discord.gg/4Js4X82Ky5",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [
    // quartz.layout.ts
    Component.Graph({
      // Focused context around the current note
      localGraph: {
        drag: true,
        zoom: true,
        depth: 1,          // 2 hops = good context without clutter
        scale: 1.05,
        repelForce: 0.95,  // more spacing between nodes
        centerForce: 0.2,  // gentler pull to center
        linkDistance: 75,  // longer links = clearer structure
        fontSize: 0.7,     // slightly larger labels
        opacityScale: 1.2, // labels fade a bit faster when zooming out
        showTags: false,   // hide tag nodes (cleaner)
        removeTags: [],    // or e.g. ["meta","draft"]
        enableRadial: false
      },

      // Bird’s-eye view of the whole vault
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,         // all notes
        scale: 0.85,
        repelForce: 0.9,
        centerForce: 0.15,
        linkDistance: 75,
        fontSize: 0.3,   // smaller labels for big graphs
        opacityScale: 1.4, // fade labels more when zoomed out
        showTags: false,   // tags off in global view = much clearer
        removeTags: [],    // add noisy tags if needed
        enableRadial: false // nice, compact global layout
      },
    }),
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
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}

Component.Explorer({
  folderClickBehavior: "collapse", // not "link"
})
