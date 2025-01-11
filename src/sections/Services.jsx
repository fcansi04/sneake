import { services } from "../constants";
import ServicesCard from "../Componets/ServicesCard";
const Services = () => {
  return (
    <div className="max-container flex max-md:flex-wrap max-md: gap-40 max-lg:gap-8 max-md:gap-8">
      {services.map((service) => {
        return <ServicesCard key={service} {...service} />;
      })}
    </div>
  );
};

export default Services;
