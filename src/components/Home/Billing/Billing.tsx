import { apple, bill, google } from "../../../assets";
import { helpers, layout } from "../../../utils/styles";

interface BillingProps {}

function Billing(props: BillingProps) {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImg}`}>
        <div
          className={`white__gradient rounded-full w-[50%] h-[50%] absolute -left-1/2 top-0 z-2`}
        />
        <div
          className={`pink__gradient rounded-full w-[50%] h-[50%] absolute -left-1/2 bottom-0 z-2`}
        />
        <img src={bill} alt="Billing" className="relative w-[100%] h-[100%]" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${helpers.heading2}`}>
          Lorem ipsum dolor <br className="sm:block hidden" /> sit amet
          consectetur.
        </h4>
        <p className={`${helpers.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eveniet quod totam reiciendis neque cumque excepturi unde.
        </p>
        <div
          className={`flex-1 ${helpers.flexStart} mt-6 md:mt-10 flex-row flex-wrap`}
        >
          <img
            src={google}
            alt="Google"
            className="object-contain w-[128px] h-[42px] mr-5 cursor-pointer"
          />
          <img
            src={apple}
            alt="Apple"
            className="object-contain w-[128px] h-[42px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
