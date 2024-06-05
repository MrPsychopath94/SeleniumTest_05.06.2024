import React from "react";
import { useState } from "react";

export default function UserForm({ onUserAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onUserAdd({ name, email });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            id="inputName"
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            id="inputEmail"
          ></input>
        </div>
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}
