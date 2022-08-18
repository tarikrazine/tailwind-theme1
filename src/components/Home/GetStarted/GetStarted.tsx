import { arrowUp } from "../../../assets";
import { helpers } from "../../../utils/styles";

interface GetStartedProps {}

const GetStarted = (props: GetStartedProps) => {
  return (
    <div
      className={`${helpers.flexCenter} h-[140px] w-[140px] bg-blue-gradient rounded-full cursor-pointer p-[2px]`}
    >
      <div
        className={`${helpers.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full`}
      >
        <div className={`${helpers.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[20px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="Arrow"
            className={`w-[23px] h-[23px] object-contain`}
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[32px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
