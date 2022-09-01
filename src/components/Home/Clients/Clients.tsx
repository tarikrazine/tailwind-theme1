import { clients } from "../../../constants";
import { helpers } from "../../../utils/styles";

interface ClientsProps {}

const Clients = (props: ClientsProps) => {
  return (
    <section className={`${helpers.flexCenter} my-4`}>
      <div className={`${helpers.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`${helpers.flexCenter} min-w-[120px] sm:min-w-[192px] flex-1`}
          >
            <img
              src={client.logo}
              className="w-[100px] sm:w-[192px] object-contain"
              alt={client.logo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
