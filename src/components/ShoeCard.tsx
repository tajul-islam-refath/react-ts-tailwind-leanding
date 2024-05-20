interface ImageUrl {
  thumbnail: string;
  bigShoe: string;
}
interface ShoeCardProps {
  imgUrl: ImageUrl;
  changeShoImage: Function;
  currentImage: string;
}
const ShoeCard = ({ imgUrl, changeShoImage, currentImage }: ShoeCardProps) => {
  const handleClick = () => {
    if (currentImage !== imgUrl.bigShoe) {
      changeShoImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        currentImage === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt={imgUrl.thumbnail}
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
