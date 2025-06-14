import { unstable_cache } from "next/cache";
import { LuLinkedin, LuYoutube } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { getSocialMediaLinks } from "@/lib/services";
import { COMPANY_LINKEDIN_URL } from "@/config/constants";

export const getCachedSocialMediaLinks = unstable_cache(
  getSocialMediaLinks,
  ["social-media-links"],
  {
    tags: ["social-media-links"],
  },
);

export default async function SocialLinks() {
  const socialLinks = await getCachedSocialMediaLinks();
  const socialLinkContents = [
    {
      href: socialLinks.twitter_x || "#",
      icon: BsTwitterX,
    },
    {
      href: socialLinks.linkedin || "#",
      icon: LuLinkedin,
    },
    {
      href: socialLinks.youtube || "#",
      icon: LuYoutube,
    },
  ];
  return (
    <div className="flex gap-4 self-center">
      {socialLinkContents.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          role="button"
          aria-label={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-primary p-2 text-primary hover:text-foreground"
        >
          <Icon className="size-5 sm:size-6" />
        </a>
      ))}
      <a
        href={COMPANY_LINKEDIN_URL}
        role="button"
        aria-label={COMPANY_LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-primary p-2 text-primary hover:text-foreground"
      >
        <LuLinkedin className="size-5 sm:size-6" />
      </a>
    </div>
  );
}
