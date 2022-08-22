import { features } from "../../../constants";
import { helpers } from "../../../utils/styles";

interface FeaturedCardProps {
  index: number;
  id: string;
  icon: string;
  title: string;
  content: string;
}

const FeaturedCard = (props: FeaturedCardProps) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] feature-card ${
        props.index !== features.length - 1 ? "mb-6" : "mb-0"
      }`}
    >
      <div
        className={`w-[64px] h-[64px] ${helpers.flexCenter} rounded-full bg-dimBlue`}
      >
        <img
          src={props.icon}
          alt="Features icon"
          className="w-[50%] h-[50%] object-contains"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4
          className={`font-poppins font-semibold leading-[23px] text-[18px] text-slate-50 mb-1`}
        >
          {props.title}
        </h4>
        <p
          className={`font-poppins font-normal leading-[24px] text-[16px] text-dimWhite`}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
