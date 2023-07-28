import LogoDecorator from "@/components/DecoratorComponents/ColumnLineDecorator";
import { NavigationItemType } from "@/utils/NavigationItems";
import { useState } from "react";

function NavigationItem({
  href,
  title,
}: Pick<NavigationItemType, "href" | "title">) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <a href={`#${href}`}>{title}</a>
      {isHovered ? <LogoDecorator isHovered={isHovered} /> : <></>}
    </li>
  );
}

export default NavigationItem;
