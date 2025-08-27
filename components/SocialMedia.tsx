import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
// Use Simple Icons for brand logos:
import {
  SiFacebook,
  SiGithub,
  SiLinkedin,
  SiSlack,
  SiYoutube,
} from "react-icons/si";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    title: "Youtube",
    href: "https://profolio-amethystdesign.vercel.app/",
    Icon: SiYoutube,
  },
  {
    title: "Github",
    href: "https://profolio-amethystdesign.vercel.app/",
    Icon: SiGithub,
  },
  {
    title: "Linkedin",
    href: "https://profolio-amethystdesign.vercel.app/",
    Icon: SiLinkedin,
  },
  {
    title: "Facebook",
    href: "https://profolio-amethystdesign.vercel.app/",
    Icon: SiFacebook,
  },
  {
    title: "Slack",
    href: "https://profolio-amethystdesign.vercel.app/",
    Icon: SiSlack,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map(({ title, Icon, href }) => (
          <Tooltip key={title}>
            <TooltipTrigger asChild>
              <Link
                key={title}
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className={cn(
                  "p-1 border rounded-full h-6.3 w-6.3 hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                <Icon size={16} />
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
