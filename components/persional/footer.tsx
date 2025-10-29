import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/solutions", label: "Solutions" },
      { href: "/products/ai-tools", label: "AI Tools" },
      { href: "/products/apis", label: "APIs" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/docs", label: "Docs" },
      { href: "/support", label: "Support" },
      { href: "/community", label: "Community" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: Facebook },
  { href: "https://twitter.com", icon: Twitter },
  { href: "https://linkedin.com", icon: Linkedin },
  { href: "https://github.com", icon: Github },
];

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold">AreaKnotch Labs</h3>
          <p className="mt-2 text-sm max-w-xs">
            Building innovative, accessible, and impactful AI solutions to empower people and businesses worldwide.
          </p>
        </div>

        {/* Links */}
        {FOOTER_LINKS.map((section) => (
          <div key={section.title}>
            <h4 className="text-sm font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator />

      {/* Bottom */}
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} AreaKnotch Labs. All rights reserved.</p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <Link key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={href}>
              <Icon className="h-5 w-5 hover:opacity-80" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

/*
How to use:
1. Save as components/footer.tsx
2. Import in app/layout.tsx (below <main>) or in app/page.tsx.
3. Update social media links and footer content as needed.
*/