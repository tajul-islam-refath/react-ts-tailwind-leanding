import { star } from "../assets/icons";

interface ProductProps {
  name: string;
  imgURL: string;
  price: number;
}

const PopularProductCard = ({ name, imgURL, price }: ProductProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={imgURL} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {4.3}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-palanquin font-semibold ">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
        ${price}
      </p>
    </div>
  );
};

export default PopularProductCard;
