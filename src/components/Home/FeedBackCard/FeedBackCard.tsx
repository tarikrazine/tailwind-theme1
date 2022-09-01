import { quotes } from "../../../assets";
import { FeedBack } from "../../../constants";
import { helpers } from "../../../utils/styles";

interface FeedBackCardProps extends FeedBack {}

const FeedBackCard = (props: FeedBackCardProps) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card`}
    >
      <img
        src={quotes}
        alt="Double quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p
        className={`font-poppins font-normal text-[18px] leading-[32px] text-slate-50 my-10`}
      >
        {props.content}
      </p>
      <div className="flex flex-row items-center justify-start">
        <img
          src={props.img}
          alt={props.name}
          className="w-[32px] h-[32px] object-contain mr-5"
        />
        <div className="flex flex-col">
          <span className="font-poppins font-semibold text-[20px] leading-[32px] text-slate-50">
            {props.name}
          </span>
          <span className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {props.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
