import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MobileNavbarProps = {
  isVisible: boolean;
  handleChangeVisibility: (isVisible: boolean) => void;
};
const MobileNavbar = ({
  isVisible,
  handleChangeVisibility,
}: MobileNavbarProps) => {
  return (
    <>
      <div
        className={`transition-all duration-300 ease-in-out animate-slide-down ${
          isVisible ? "h-full" : "h-0"
        }  w-full fixed bg-gray-300 right-0 top-0 flex justify-between font-display`}
      >
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
    </>
  );
};

export default MobileNavbar;
