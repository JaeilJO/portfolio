import { NavigationLinkIconType } from "@/utils/NavigationItems";
import Link from "next/link";

function NaivgationLinkIcon({
  icon,
  href,
}: Pick<NavigationLinkIconType, "href" | "icon">) {
  return (
    <li className="transition-colors duration-200 hover:text-stone-300">
      <Link href={href}>{icon}</Link>
    </li>
  );
}

export default NaivgationLinkIcon;
