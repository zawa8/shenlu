const HeaderNavLinks = [
  { title: "home", href: "/", }, { title: "blog", href: "/blog", },
  { title: "works", href: "/works", }, { title: "about", href: "/about", },
];

const HomePage = {
  metadata: {
    metadataBase: new URL("https://zawa8.vercel.app"),
    title: { default: "zawa8.vercel.app", template: `%s | vimAl blog`, },
    description: "news in fonts bAsed on Hscii : hex symbolic code for informAtion interchAnge",
    openGraph: {
      title: "zawa8",
      description: "indie developer and data visualisation enthusiast.",
      url: "https://zawa8.vercel.app",
      siteName: "Hscii fonts news",
      locale: "en-US",
      type: "website",
    },
    twitter: { title: "etphor 8+8=10=4*4", card: "summary_large_image", },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-snippet": -1, }, },
    icons: { shortcut: "/icon.svg", },
  },
  title: "wimXl kumAr",
  description: "Hscii developer keypad font transliterator",
  motto: "Hscii 8finger maThs 5adhtn 5ADHTN ",
  url: "https://aaztk.vercel.app",
  avatar_url: "/images/avatar2.jpg", //lotus1.jpg
};

const WorksPage = {
  metadata: { title: "Hscii fonts keypad", description: "The works i had made over the years for Hscii fonts keypad", },
  showcase: [
    {
      href: "https://aaztk.vercel.app",
      title: "zAvA8 laNguage(Hscii)",
      logoUrl: "/images/avatar2.jpg",
      imageUrl: "/images/avatar2.jpg",
      description: "zAvA8 based on Hscii(hex symbolic code for information interchange) based fonts",
    },
    {
      href: "https://aaztk.vercel.app",
      title: "zavascript8 bAsed on Hscii",
      logoUrl: "/images/avatar2.jpg",
      imageUrl: "/images/avatar2.jpg",
      description:
        "zAvAscript8 based on Hscii(hex symbolic code for information interchange) based fonts",
    },
  ],
};

const AboutPage = {
  metadata: { title: "hscii fonts", description: "inglish31 = a-z + 5ADHTN . fb.com/ztrabc . ing115b.ttf/woff2" },
};

export { HeaderNavLinks, HomePage, WorksPage, AboutPage };
