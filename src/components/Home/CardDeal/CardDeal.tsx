import { card } from "../../../assets";
import { helpers, layout } from "../../../utils/styles";
import { Button } from "../../Ui";

interface CardDealProps {}

const CardDeal = (props: CardDealProps) => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${helpers.heading2}`}>
          Lorem ipsum dolor <br className="sm:block hidden" /> sit amet
          consectetur.
        </h2>
        <p className={`${helpers.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eveniet quod totam reiciendis neque cumque excepturi unde.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="Card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
