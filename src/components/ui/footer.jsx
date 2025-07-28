// components/ui/Footer.tsx
import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="w-full py-4 text-neutral-500 text-sm flex items-center justify-center gap-8 z-10 relative">
      <a
        href="https://github.com/malayashekhar/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors duration-200 cursor-pointer"
      >
        © malayashekhar_
      </a>
      <a
        href="https://github.com/malayashekhar/Voxa"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <IconBrandGithub size={20} />
      </a>
    </footer>
  );
};

export default Footer;
