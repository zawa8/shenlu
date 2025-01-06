import { Metadata } from "next";
import Link from "next/link";
import Showcases from "@/components/showcases";
// import Showcase from "@/components/showcase";
import { WorksPage } from "@/data/meta-data";

export const metadata: Metadata = WorksPage.metadata;

const { showcase } = WorksPage;

export default function Works() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>works</h1>
      <div>
        <div>
          <p>The works i had made over the years.</p>
        </div>
        <hr />
        <h2>Projects</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-4">
            {showcase.slice(0, 2).map((sc: any) => (
              <Showcases
                key={sc.title}
                href={sc.href}
                title={sc.title}
                logoUrl={sc.logoUrl}
                imageUrl={sc.imageUrl}
                description={sc.description}
              />
            ))}
          </div>
          {/* <div className="hidden sm:flex flex-col md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-4">
            {showcase.slice(2).map((sc: any) => (
              <Showcase
                key={sc.title}
                href={sc.href}
                title={sc.title}
                logoUrl={sc.logoUrl}
                imageUrl={sc.imageUrl}
                description={sc.description}
              />
            ))}
          </div>
          <div className="sm:hidden flex flex-col md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-4">
            {showcase.slice(2).map((sc: any) => (
              <Showcase
                key={sc.title}
                href={sc.href}
                title={sc.title}
                logoUrl={sc.logoUrl}
                imageUrl={sc.imageUrl}
                description={sc.description}
              />
            ))}
          </div> */}
        </div>
        <hr />
        <h2>Publications</h2>
        <strong>
          Hscii5 fonts keypads/keyboard rust8 cpp8 zAvA8 zs8/typescript8 iNglish31=a-z+ADHNT
        </strong>
        <p>
          how to build rust for hscii chart for more programing symbols and less capital letters ?
		  <Link target="_blank" href="https://www.reddit.com/r/rust/comments/1huoq4z/how_to_build_rust_for_hscii_chart_for_more/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" > [rust for Hscii ] </Link>
        </p>
        <strong>
          Hscii Hex symbolic code for information interchage. fonts keypads transliterator
        </strong>
        <p>
          Hscii 8fiNger maThs 01234567 89LJBWEF 10=vnti=8+8=4*4
		  <Link target="_blank" href="https://github.com/zava8/plong" > [Hscii_8fgrm plong] </Link>
        </p>
      </div>
    </div>
  );
}
