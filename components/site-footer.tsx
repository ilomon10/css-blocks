import {
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook,
} from "lucide-react";
import Image from "next/image";

import Link from "next/link";

type IconProps = React.HTMLAttributes<SVGElement>;

const items = [
  {
    title: "Product",
    links: [
      {
        name: "Features",
        Icon: Blocks,
      },
      {
        name: "Pricing",
        Icon: CreditCard,
      },
      {
        name: "Integrations",
        Icon: Webhook,
      },
      {
        name: "API Documentation",
        Icon: CodeXml,
      },
    ],
  },
  {
    title: "Compare",
    links: [
      {
        name: "Plausible",
        Icon: (props: IconProps) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              stroke-width="2"
              d="M4 8.5V23c3 0 6-3 6-5.5h2.5c4 0 7.5-4 7.5-9 0-3-3-7.5-8-7.5S4 5.5 4 8.5Z"
            ></path>
          </svg>
        ),
      },
      {
        name: "Matomo",
        Icon: (props: IconProps) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
          >
            <path
              stroke-miterlimit="1.4"
              stroke-width="2"
              d="m13.8 16.3.8.6v-.1l.2-.2a164.4 164.4 0 0 1 .6-.9l.9 1a4.1 4.1 0 0 0 5.3.4c1-.7 1.3-1.8 1.3-2.8 0-1-.5-2-1-2.8l-3-5A3 3 0 0 0 16 5c-.9 0-1.6.3-2 .5-.8.4-1.3 1-1.7 1.8l-1-1.1-.7.7.6-.7a5 5 0 0 0-3-1.3c-1.1 0-2.3.3-3 1.4L1.7 12a4.7 4.7 0 0 0-.7 3.1 4 4 0 0 0 1.2 2c1 .8 2.3.9 3.4.7 1-.2 2.3-.8 2.8-1.9l1 .8a3.6 3.6 0 0 0 3.5 1.2 3.8 3.8 0 0 0 1.5-.9l-.6-.7Zm0 0 .7.7v-.1l-.7-.6Z"
            ></path>
          </svg>
        ),
      },
      {
        name: "Google Analytics",
        Icon: (props: IconProps) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
          >
            <path d="M17 5.1v13.5c0 1.6 1 2.4 2 2.4s2-.7 2-2.4V5.2C21 4 20 3 19 3s-2 1-2 2.1Zm-7 7v6.6c0 1.5 1 2.3 2 2.3s2-.7 2-2.3v-6.5c0-1.3-1-2.2-2-2.2s-2 1-2 2.1Zm-3.6 8.3a2 2 0 1 0-2.8-2.8 2 2 0 0 0 2.8 2.8Z"></path>
          </svg>
        ),
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        Icon: Scale,
      },
      {
        name: "Terms of Service",
        Icon: Handshake,
      },
    ],
  },
];

export function Footer() {
  return (
    <div className="pt-24">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image
              className="h-11 w-auto -ml-2.5 -mt-2"
              alt="pwc"
              src="/_static/images/brands/pwc.svg"
            />
            <p className="text-sm text-foreground/60">
              Track your website traffic with p<span className="italic">w</span>
              c analytics.
            </p>

            <p className="text-sm font-light text-foreground/55 mt-3.5 ">
              <Link
                className="hover:text-foreground/90"
                target="_blank"
                href="https://x.com/raymethula"
              >
                Twitter
              </Link>{" "}
              •{" "}
              <Link className="hover:text-foreground/90" href="#">
                Github
              </Link>{" "}
              •{" "}
              <Link className="hover:text-foreground/90" href="#">
                Discord
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-2 mt-16 md:grid-cols-3 lg:col-span-8 lg:justify-items-end lg:mt-0">
            {items.map(({ title, links }) => (
              <div key={title} className="last:mt-12 md:last:mt-0">
                <h3 className="text-sm font-semibold">{title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {links.map(({ name, Icon }) => (
                    <li key={name}>
                      <Link
                        href="#"
                        className="text-sm transition-all text-foreground/60 hover:text-foreground/90 group"
                      >
                        <Icon className="inline stroke-2 h-4 mr-1.5 transition-all stroke-foreground/60 group-hover:stroke-foreground/90" />
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t pt-6 pb-8">
          <p className="text-xs text-foreground/55">
            P<span className="italic">w</span>C Analytics Inc. © 2024
          </p>
        </div>
      </div>
    </div>
  );
}
