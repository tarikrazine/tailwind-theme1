import { discount, robot } from "../../../assets";
import { helpers } from "../../../utils/styles";
import { GetStarted } from "../../Home";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <div className={`flex md:flex-row flex-col ${helpers.paddingY}`}>
      <div
        className={`flex-1 ${helpers.flexStart} flex-col xl:p-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          <img src={discount} alt="Discount" className="h-[32px] w-[32px] " />
          <p className={`${helpers.paragraph} ml-2`}>
            <span className="text-slate-50">20%</span> Discount for{" "}
            <span className="text-slate-50">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins ss:text[72px] text-[52px] font-semibold text-slate-50 ss:leading-[100px] leading[70px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className={`text-gradient`}>Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment method.
        </h1>
        <p className={`${helpers.paragraph} max-w-[470px] mt-5`}>
          Excepteur laboris non laboris mollit eiusmod consequat pariatur est
          nostrud fugiat. Elit aliqua ipsum culpa ex velit non quis. Elit aliqua
          ipsum culpa ex velit non quis.
        </p>
      </div>
      <div
        className={`flex-1 flex ${helpers.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="relative w-[100%] h-[100%] z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden ${helpers.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  );
};

export default Header;
