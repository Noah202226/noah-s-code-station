import "./App.css";

import vsCode from "../src/assets/vscode.svg";
import nodeIcon from "../src/assets/nodejs.svg";
import gitIcon from "../src/assets/git.svg";
import mongodDB from "../src/assets/mongodb.svg";
import codingIcon from "../src/assets/codingIcon.svg";

function App() {
  return (
    <div>
      <img
        src={codingIcon}
        alt="codingIcon"
        style={{
          opacity: 0.6,
          position: "absolute",
          width: "40%",
          height: "40%",

          top: -50,
          left: "50%",
        }}
      />
      <h1 style={{ zIndex: 100 }}>Noah's Code Station Setup</h1>

      <p
        className="read-the-docs"
        style={{ color: "lime", textShadow: "2px 2px 10px black" }}
      >
        Click on the link to download what you need.
      </p>

      <div>
        <a
          href="https://code.visualstudio.com/docs/?dv=win64user"
          target="_blank"
        >
          <img src={vsCode} className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi"
          target="_blank"
        >
          <img src={nodeIcon} className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe"
          target="_blank"
        >
          <img src={gitIcon} className="logo" alt="Vite logo" />
        </a>
        <a
          href="https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.7-signed.msi"
          target="_blank"
        >
          <img src={mongodDB} className="logo" alt="Vite logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
