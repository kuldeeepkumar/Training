import React from "react";

const PrivatePublicVariable = () => {
  // =====================================================Add commentMore actions
  // 4. Private vs Public Variables using Closure + Return
  // =====================================================

  function createUser(name) {
    let password = "secret123"; // Private variable

    // Public methods
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

  console.log("Username:", user.getName()); // Output: Alice
  console.log("Password Check (correct):", user.checkPassword("secret123")); // true
  console.log("Password Check (wrong):", user.checkPassword("wrong")); // false

  // console.log(user.password); // Undefined: 'password' is private

  return <div>PrivatePublicVariable</div>;
};

export default PrivatePublicVariable;