export const Icon = ({
  styles,
  name,
  imgUrl,
  dark,
  isActive,
  disabled,
  handleClick,
}) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] 
    ${dark ? `dark` : `light`}
    ${
      isActive && isActive === name && "bg-[#8d8a8a] dark:bg-[#111] "
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-[70%] h-[70%]" />
    ) : (
      <img
        src={imgUrl}
        alt="fund_logo"
        className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
      />
    )}
  </div>
);
