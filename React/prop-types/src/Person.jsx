import React from "react";
import PropTypes from "prop-types";

function Person({ name, age, address, hobbies, pronoun }) {
  const formattedAddress = `${address.houseNumber} ${address.street}, ${address.city}`;
  return (
    <div className="person">
      <p>
        {name} (aged {age}) lives at {formattedAddress}. {pronoun} likes to{" "}
        {hobbies.join(", ")}. What a person!
      </p>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.shape({
    houseNumber: PropTypes.number,
    street: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  pronoun: PropTypes.string,
};
Person.defaultProps = {
  hobbies: ["coding"],
  pronoun: "Their",
};
export default Person;
