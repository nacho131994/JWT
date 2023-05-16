import React, { useEffect } from "react";

const LogOutView = () => {
  const LogOut = () => {
    return fetch(process.env.BACKEND_URL + "/logout", {
      method: "DELETE",
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then((data) => data.json())
      .then((d) => sessionStorage.removeItem("token"));
  };
  useEffect(() => {
    LogOut();
  }, []);
  const getToken = () => {
    return sessionStorage.getItem("token");
  };
  return (
    <>
      <h1>Has cerrado sesión</h1>
    </>
  );
};

export default LogOutView;
