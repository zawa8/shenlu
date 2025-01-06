const HeaderNavLinks = [
  { title: "Home", href: "/", }, { title: "blog", href: "/blog", },
  { title: "works", href: "/works", }, { title: "About", href: "/about", },
];

const HomePage = {
  metadata: {
    metadataBase: new URL("https://zava8.github.io"),
    title: { default: "vimAl blog", template: `%s | vimAl blog`, },
    description: "news in fonts bAsed on Hscii : hex symbolic code for informAtion interchAnge",
    openGraph: {
      title: "zava8",
      description: "indie developer and data visualisation enthusiast.",
      url: "https://zava8.github.io",
      siteName: "Hscii fonts news",
      locale: "en-US",
      type: "website",
    },
    twitter: { title: "etphor 8+8=10=4*4", card: "summary_large_image", },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-snippet": -1, }, },
    icons: { shortcut: "/icon.svg", },
  },
  title: "vimal kumAr",
  description: "Hscii developer keypad font transliterator",
  motto: "Hscii 8finger maThs 5adhtn 5ADHTN ",
  url: "https://aaztk.vercel.app",
  avatar_url: "/images/8ledlogo.png",
};

const WorksPage = {
  metadata: { title: "Hscii fonts keypad", description: "The works i had made over the years for Hscii fonts keypad", },
  showcase: [
    {
      href: "https://aaztk.vercel.app",
      title: "zAvA8 laNguage(Hscii)",
      logoUrl: "/images/mathcheap-logo.svg",
      imageUrl: "/images/mathcheap-showcase.png",
      description: "zAvA8 based on Hscii(hex symbolic code for information interchange) based fonts",
    },
    {
      href: "https://aaztk.vercel.app",
      title: "zavascript8 bAsed on Hscii",
      logoUrl: "/images/aes-logo.svg",
      imageUrl: "/images/aes-showcase.png",
      description:
        "zAvAscript8 based on Hscii(hex symbolic code for information interchange) based fonts",
    },
  ],
};

const AboutPage = {
  metadata: { title: "Hscii based fonts", description: "iNglish31 = a-z + 5ADHTN . fb.com/ztrabc . iNglish31 and indian_korean_115.ttf/woff2" },
};

export { HeaderNavLinks, HomePage, WorksPage, AboutPage };
