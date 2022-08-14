import { NavLinks, navLinks } from "../../../constants";

interface NavigationProps {
  link: NavLinks;
  index: number;
  direction?: "horizontal" | "vertical";
}

const Navigation = (props: NavigationProps) => {
  return (
    <li
      key={props.link.id}
      className={`font-poppins font-normal cursor-pointer text-[16px] ${
        props.direction === "horizontal"
          ? props.index === navLinks.length - 1
            ? "mr-0"
            : "mr-10"
          : props.index === navLinks.length - 1
          ? "mb-0"
          : "mb-4"
      }`}
    >
      <a href={`#${props.link.id}`}>{props.link.title}</a>
    </li>
  );
};

export default Navigation;
