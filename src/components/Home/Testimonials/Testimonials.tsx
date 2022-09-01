import { feedback } from "../../../constants";
import { helpers, layout } from "../../../utils/styles";
import FeedBackCard from "../FeedBackCard";

interface TestimonialsProps {}

const Testimonials = (props: TestimonialsProps) => {
  return (
    <section
      id="client"
      className={`${helpers.flexCenter} ${helpers.paddingY} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div
        className={`w-full flex justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-10`}
      >
        <h1 className={`${helpers.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${helpers.paragraph} text-left max-w-[470px]`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            neque voluptas error sequi delectus et dolorum similique eaque.
          </p>
        </div>
      </div>
      <div
        className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]`}
      >
        {feedback.map((fB) => (
          <FeedBackCard key={fB.id} {...fB} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
