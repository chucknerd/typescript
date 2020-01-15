import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { stringify } from "querystring";

const App: React.FC = (): JSX.Element => {

  interface Iobj {
    a: number;
    b: Array<string>;
    c: string;
  }

  const [test, setTest] = useState<string>("");
  const [num, setNum] = useState<number>(3);
  const [myArr, setMyArr] = useState<Array<string>>([]);
  const [obg, setByObj] = useState<Iobj>({a: 2, b:[], c: ""});

  setMyArr(["3"]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
