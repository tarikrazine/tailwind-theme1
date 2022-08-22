import { stats } from "../../../constants";
import { helpers } from "../../../utils/styles";

interface StatsProps {}

const Stats = (props: StatsProps) => {
  return (
    <section
      className={`${helpers.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => {
        return (
          <div
            key={stat.id}
            className={`flex-1 flex justify-center items-center flex-row m-3`}
          >
            <h4 className="font-poppins font-semibold xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-slate-50">
              {stat.value}
            </h4>
            <p
              className={`text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-slate-50 uppercase ml-3`}
            >
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
