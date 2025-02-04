import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "Company",
      links: [
        "About",
        "Products",
        "Pricing",
        "Referral programme",
        "Careers",
        "Zerodha.tech",
        "Open source",
        "Press & media",
        "Zerodha Cares (CSR)",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact us",
        "Support portal",
        "Z-Connect blog",
        "List of charges",
        "Downloads & resources",
        "Videos",
        "Market overview",
        "How to file a complaint?",
        "Status of your complaints",
      ],
    },
    {
      title: "Account",
      links: ["Open an account", "Fund transfer"],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-6 bg-gray-100 text-gray-700 ">
      <div className="w-full md:w-1/4 mb-4 md:mb-0 lg:mx-20">
        <img
          className="h-5 cursor-pointer"
          src="https://zerodha.com/static/images/logo.svg"
          alt="Zerodha Logo"
        />
        <p className="mt-2">© 2010 - 2025, Zerodha Broking Ltd.</p>
        <p>All rights reserved.</p>
      </div>

      {footerData.map((section, index) => (
        <div key={index} className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="font-semibold mb-2">{section.title}</h3>
          <ul>
            {section.links.map((link, i) => (
              <li
                key={i}
                className="text-sm hover:text-blue-500 cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Footer;
