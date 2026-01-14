import Card from "@/components/cards/Card";
import SectionHeader from "@/components/common/SectionHeader";
import { getHomeData, getServices } from "@/lib/wpApi";

const OurServices = async () => {
  const [data, services] = await Promise.all([getHomeData(), getServices()]);
  if (!data) return null;
  return (
    <section className="top-padded">
      <div className="inner-padded">
        <SectionHeader title={data?.services_section?.title} />
        <div className="f-bw">
          <div className="grid grid-cols-2 gap-5">
            {services?.map((service) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.excerpt}
                link={service.slug}
                iconLink={service.acf.service_icon}
                pricetext={`Starts from $${service.acf.price}`}
                isServiceCard
                btnText="Book a Call"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
