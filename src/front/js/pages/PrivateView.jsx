import React, { useState, useEffect } from "react";

const PrivateView = ({ token }) => {
  const [whoAmI, setWhoAmI] = useState("");

  const FetchwhoAmI = () => {
    console.log(`Bearer + ${token}`);
    fetch(process.env.BACKEND_URL + "/who_am_i", {
      method: "GET",
      headers: { Authentication: `Bearer ${token}` },
    }).then((data) => setWhoAmI(data.json()));
  };
  useEffect(() => {
    console.log(token);
    if (token) {
      FetchwhoAmI();
    }
    console.log(whoAmI);
  }, [token]);
  return <div className="wrapper"></div>;
};
export default PrivateView;

// test_user1@test.com
