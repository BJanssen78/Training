import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="Navi-container">
      <ul className="Navi-List">
        <li className="Navi-List-Item">
          <button className="Navi-Btn" type="button">
            Home
          </button>
        </li>
        <li className="Navi-List-Item">
          <button className="Navi-Btn" type="button">
            Reservations
          </button>
        </li>
        <li className="Navi-List-Item">
          <button className="Navi-Btn" type="button">
            Menu
          </button>
        </li>
        <li className="Navi-List-Item">
          <button className="Navi-Btn" type="button">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};
