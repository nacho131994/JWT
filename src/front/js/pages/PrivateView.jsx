import React, { useState, useEffect } from "react";

const PrivateView = ({ token }) => {

  
  const getToken = () => {
    return sessionStorage.getItem("token");
  };
  const [whoAmI, setWhoAmI] = useState("");
  const [validToken, setValidToken] = useState(false);

  const fetchwhoAmI = () => {
    return fetch(process.env.BACKEND_URL + "/who_am_i", {
      method: "GET",
      headers: { Authorization: `Bearer ${getToken()}` },
    }).then((data) => data.json()).then((d) => setWhoAmI(d), setValidToken(true))
  };

  useEffect(() => {
      fetchwhoAmI();
  }, []);

  return (
    validToken ?
    <div className="wrapper"> <h4>Private</h4> <p>Your email is: {whoAmI.email}</p></div> :
    <div className="wrapper"><p>User needs to log in</p></div>
  )
};
export default PrivateView;

// test_user1@test.com
