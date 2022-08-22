import { features } from "../../../constants";
import { helpers, layout } from "../../../utils/styles";
import { Button, FeaturedCard } from "../../Ui";

interface BusinessProps {}

const Business = (props: BusinessProps) => {
  return (
    <section id={"#features"} className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${helpers.heading2}`}>
          Elit deserunt in aute <br className="sm:block hidden" /> eiusmod
          dolore quis.
        </h2>
        <p className={`${helpers.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          veniam ad, similique maxime sequi. Nemo aut veniam ad, similique
          maxime sequi.
        </p>
        <Button />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => {
          return <FeaturedCard key={feature.id} index={index} {...feature} />;
        })}
      </div>
    </section>
  );
};

export default Business;
