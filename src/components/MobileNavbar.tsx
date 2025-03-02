import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderButton from "./HeaderButton";

type MobileNavbarProps = {
  isVisible: boolean;
  handleChangeVisibility: (isVisible: boolean) => void;
  navbarButtonsContent: string[];
};
const MobileNavbar = ({
  isVisible,
  handleChangeVisibility,
  navbarButtonsContent,
}: MobileNavbarProps) => {
  return (
    <>
      <div
        className={`transition-all duration-300 ease-in-out animate-slide-down ${
          isVisible ? "h-full" : "h-0"
        }  w-full fixed bg-gray-300 right-0 top-0  font-display`}
      >
        <div className="flex justify-between">
          <div className="m-10 text-2xl">
            <h1>Navigation</h1>
          </div>
          <div className="m-10 text-2xl">
            <FontAwesomeIcon
              icon={faXmark}
              className="cursor-pointer"
              onClick={() => handleChangeVisibility(false)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {navbarButtonsContent.map((value, key) => {
            return <p key={key}>{value}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
