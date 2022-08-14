import { Footer, Header, Nav } from "./components/Common";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Stats,
  Testimonials,
} from "./components/Home";

import { helpers } from "./utils/styles";

function App() {
  return (
    <div className={`${helpers.background} overflow-hidden w-full`}>
      <div className={`${helpers.paddingX} ${helpers.flexCenter}`}>
        <div className={`${helpers.boxWidth}`}>
          <Nav />
        </div>
      </div>
      <Header />
      <main
        className={`${helpers.background} ${helpers.paddingX} ${helpers.flexStart}`}
      >
        <div className={`${helpers.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
