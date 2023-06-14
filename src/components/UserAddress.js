import React from "react";

const UserAddress = ({ suite, street, city }) => {
  return (
    <div>
      {suite}, {street}, {city}
    </div>
  );
};

export default UserAddress;
