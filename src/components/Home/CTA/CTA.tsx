import { helpers } from "../../../utils/styles";
import { Button } from "../../Ui";

interface CTAProps {}

const CTA = (props: CTAProps) => {
  return (
    <section
      className={`${helpers.flexCenter} ${helpers.marginY} ${helpers.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className={`flex-1 flex flex-col`}>
        <h1 className={`${helpers.heading2}`}>Let's try our service now</h1>
        <p className={`${helpers.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit consectetur
          adipisicing.
        </p>
      </div>
      <div className={`${helpers.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button title="Subscribe" />
      </div>
    </section>
  );
};

export default CTA;
