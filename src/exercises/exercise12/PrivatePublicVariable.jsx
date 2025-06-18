import React from "react";

const PrivatePublicVariable = () => {
  function createUser(name) {
    let password = "secret";
    return {
      getName: function () {
        return name;
      },
      checkPassword: function (input) {
        return input === password;
      },
    };
  }
  const user = createUser("Alice");
  console.log(user.getName());
  console.log(user.checkPassword("secret"));
  console.log(user.checkPassword("worng"));
  return <div>PrivatePublicVariable</div>;
};

export default PrivatePublicVariable;
