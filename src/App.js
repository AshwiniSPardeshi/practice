import { useState } from "react";

export default function App() {
  return (
    <div className="m-3">
      <div style={{ fontFamily: "cursive" }}>Hello, Good Evening</div>
      <Registration />
    </div>
  );
}

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);

  const userVal = (e) => {
    setUsername(e.target.value);
  };
  const userPass = (e) => {
    setPassword(e.target.value);
  };
  const register = () => {
    let user = { val1: username, val2: password };
    const list1 = [user, ...list];
    setList(list1);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={username}
          placeholder="Enter Username..."
          onChange={userVal}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Password..."
          value={password}
          onChange={userPass}
        />
      </div>
      <div>
        <input type="button" value="Register" onClick={register} />
      </div>
      {list.map((item) => (
        <div>
          {item.val1} {item.val2}
        </div>
      ))}
    </div>
  );
}
