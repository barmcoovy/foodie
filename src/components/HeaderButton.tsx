type HeaderButtonProps = {
  value: string;
};
const HeaderButton = ({ value }: HeaderButtonProps) => {
  return (
    <div className="bg-orange-400 p-3 w-auto text-white text-center rounded-2xl cursor-pointer duration-300 ease-in hover:bg-amber-700">
      <p>{value}</p>
    </div>
  );
};

export default HeaderButton;
