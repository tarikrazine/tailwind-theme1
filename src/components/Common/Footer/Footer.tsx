import { helpers } from "../../../utils/styles";

interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
    <footer
      className={`${helpers.background} ${helpers.paddingX} ${helpers.flexStart}`}
    >
      <div className={`${helpers.boxWidth}`}>footer</div>
    </footer>
  );
};

export default Footer;
