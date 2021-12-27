import React, { useState } from "react";
import UserInfo from "./components/User-Info/User-info";
import FormInput from "./components/User-input/FromInput";

const DUMMY_DATA = [
  {
    id: Math.random(),
    name: "Chetu",
    age: 21,
  },
  {
    id: Math.random(),
    name: "Raku",
    age: 19,
  },
  {
    id: Math.random(),
    name: "Guru",
    age: 22,
  },
  {
    id: Math.random(),
    name: "Pranav",
    age: 5,
  },
];
function App() {
  const [data, UpdateData] = useState(DUMMY_DATA);
  const getData = (data) => {
    UpdateData((prev) => {
      return [...prev, data];
    });
  };
  const deleteHandler = (id) => {
    UpdateData((prev) => {
      return prev.filter((user) => user.id !== id);
    });
  };

  return (
    <div>
      <FormInput onsubmit={getData}></FormInput>
      <UserInfo user={data} ondelete={deleteHandler}></UserInfo>
    </div>
  );
}

export default App;
