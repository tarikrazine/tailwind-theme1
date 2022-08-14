import { Footer, Header, Nav } from "./components/Common";
import { Billing, Business, CardDeal, Clients, CTA, Testimonials } from "./components/Home";
import { helpers } from "./styles";

function App() {
  return (
    <div className={`${helpers.background} overflow-hidden w-full`}>
      <div className={`${helpers.paddingX} ${helpers.flexCenter}`}>
        <Nav />
      </div>
      <Header />
      <main className={`${helpers.background} ${helpers.paddingX} ${helpers.flexStart}`}>
        <div className={`${helpers.boxWidth}`}>
          <section>stats</section>
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
