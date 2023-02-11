import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

function ButoonsNav() {
  return (
    <div>
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default ButoonsNav;
