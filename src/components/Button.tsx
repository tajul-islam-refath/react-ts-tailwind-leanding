interface ButtonPropos {
  label: string;
  iconUrl?: string;
  backGroundColor?: string;
  textColor?: string;
  borderColor?: string;
}

const Button = ({
  label,
  iconUrl,
  backGroundColor,
  textColor,
  borderColor,
}: ButtonPropos) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backGroundColor
          ? `${backGroundColor} ${textColor} ${borderColor}`
          : `bg-coral-red  text-white border-coral-red`
      }`}>
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
