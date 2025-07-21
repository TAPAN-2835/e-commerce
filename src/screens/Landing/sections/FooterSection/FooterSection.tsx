import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Footer column data for better maintainability
  const footerColumns = [
    {
      title: "Acount",
      links: ["Log In", "Sign Up", "Redeem a Gift Card"],
    },
    {
      title: "Company",
      links: [
        "About",
        "Environmental Initiatives",
        "Factories",
        "DEI",
        "Careers",
        "International",
        "Accessibility",
      ],
    },
    {
      title: "Get Help",
      links: ["Help Center", "Return Policy", "Shipping Info", "Bulk Orders"],
    },
    {
      title: "Connect",
      links: ["Facebook", "Instagram", "Twitter", "Affiliates", "Out Stores"],
    },
  ];

  // Footer policy links
  const policyLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Do Not Sell or Share My Personal Information",
    "CS Supply Chain Transparency",
    "Vendor Code of Conduct",
    "Sitemap Pages",
    "Sitemap Products",
  ];

  return (
    <footer className="flex flex-col items-center pt-10 pb-0 px-4 lg:px-[72px] relative self-stretch w-full flex-[0_0_auto] bg-x-100">
      <div className="flex flex-col lg:flex-row items-start relative self-stretch w-full flex-[0_0_auto] gap-8 lg:gap-0">
        {/* Map through footer columns */}
        {footerColumns.map((column, index) => (
          <div
            key={`column-${index}`}
            className="flex flex-col items-start gap-5 p-2 lg:p-5 relative flex-1 grow"
          >
            <h3 className="relative self-stretch mt-[-1.00px] font-text-400-demi font-[number:var(--text-400-demi-font-weight)] text-x-500 text-[length:var(--text-400-demi-font-size)] tracking-[var(--text-400-demi-letter-spacing)] leading-[var(--text-400-demi-line-height)] [font-style:var(--text-400-demi-font-style)]">
              {column.title}
            </h3>

            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              {column.links.map((link, linkIndex) => (
                <a
                  key={`link-${index}-${linkIndex}`}
                  href="#"
                  className={`relative self-stretch ${linkIndex === 0 ? "mt-[-1.00px]" : ""} font-text-300 font-[number:var(--text-300-font-weight)] text-x-300 text-[length:var(--text-300-font-size)] tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)] [font-style:var(--text-300-font-style)] hover:underline hover:text-x-500 cursor-pointer transition-colors`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Email subscription section */}
        <div className="inline-flex items-start p-2 lg:p-5 relative flex-[0_0_auto] w-full lg:w-auto">
          <div className="flex flex-col md:flex-row items-stretch md:items-center relative w-full">
            <Input
              className="w-full md:w-[390px] px-[15px] py-[18px] mt-[-1.00px] mb-[-1.00px] md:ml-[-1.00px] bg-white border border-solid border-[#dddbdc] rounded-none md:rounded-l-none font-text-300 font-[number:var(--text-300-font-weight)] text-x-300 text-[length:var(--text-300-font-size)] tracking-[var(--text-300-letter-spacing)] leading-[var(--text-300-line-height)]"
              placeholder="Email Address"
            />
            <Button
              className="inline-flex items-center justify-center px-3.5 py-[14.5px] mt-2 md:mt-[-1.00px] mb-[-1.00px] md:mr-[-1.00px] bg-x-500 border border-solid border-neutral-800 rounded-none md:rounded-r-none hover:bg-x-400 w-full md:w-auto"
              type="submit"
              aria-label="Subscribe"
            >
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      <Separator className="w-full bg-x-200 my-4" />

      {/* Footer policy links and copyright */}
      <div className="flex flex-col items-center gap-4 px-0 py-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start justify-center gap-3 lg:gap-6 relative self-stretch w-full flex-[0_0_auto] flex-wrap">
          {policyLinks.map((link, index) => (
            <a
              key={`policy-${index}`}
              href="#"
              className="relative w-fit mt-[-1.00px] font-text-200 font-[number:var(--text-200-font-weight)] text-x-300 text-xs lg:text-[length:var(--text-200-font-size)] text-center tracking-[var(--text-200-letter-spacing)] leading-[var(--text-200-line-height)] whitespace-nowrap [font-style:var(--text-200-font-style)] hover:underline hover:text-x-500 cursor-pointer transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="relative self-stretch font-text-200 font-[number:var(--text-200-font-weight)] text-x-300 text-[length:var(--text-200-font-size)] text-center tracking-[var(--text-200-letter-spacing)] leading-[var(--text-200-line-height)] [font-style:var(--text-200-font-style)]">
          © 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
