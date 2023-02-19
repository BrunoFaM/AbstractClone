import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

function ButoonsNav() {
  return (
    <div className="flex gap-4 text-2xl mr-3">
      <button>
        <FontAwesomeIcon icon={faSearch} className="hover:text-3xl hover:mt-1 transition-all duration-300" />
      </button>
      <button>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default ButoonsNav;
