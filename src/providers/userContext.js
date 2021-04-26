import { createContext } from "react";
import app_config from "../config";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const url = app_config.api_url + "/user";

  const addUser = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(url + "/add", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const getUserByEmail = (email) => {
    return fetch(url + "/getbyemail/" + email).then((response) =>
      response.json()
    );
  };

  const getUserById = (id) => {
    return fetch(url + "/getbyid/" + id).then((response) => response.json());
  };

  const getAllUsers = () => {
    return fetch(url + "/getall").then((response) => response.json());
  };

  const deleteUser = (id) => {
    return fetch(url + "/delete/" + id, { method: "DELETE" }).then((response) =>
      response.json()
    );
  };

  return (
    <UserContext.Provider
      value={{ addUser, getUserByEmail, getUserById, getAllUsers, deleteUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
