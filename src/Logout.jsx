import axios from "axios";
import { Link } from "react-router-dom";

export function Logout() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <Link onClick={handleClick} className="nav-link active" aria-current="page">
      Logout
    </Link>
  );
}
