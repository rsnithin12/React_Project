import Record from "./people.json";
import "./homepage.css";
import { useNavigate, Link } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
    localStorage.clear();
  }
  return (
    <div className="content">
      <button className="btn" onClick={(e) => handleClick()}>
        LOGOUT
      </button>
      {Record.map((record) => {
        return (
          <div className="box">
            <ul>
              <li>
                <a href="/people/{record.id}">
                  <Link to="./viewpage">
                    {record.first_name}
                    {record.last_name}
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}
export default Homepage;
