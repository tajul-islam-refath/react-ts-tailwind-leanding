export interface PropsType {
  service: {
    imgURL: string;
    label: string;
    subtext: string;
  };
}

const ServiceCard = ({ service }: PropsType) => {
  return (
    <div className="sm:flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={service.imgURL} alt={service.label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {service.label}
      </h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-slate-gray">
        {service.subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
