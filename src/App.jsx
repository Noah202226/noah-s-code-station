import './App.css'

import vsCode from '../src/assets/vscode.svg'
import nodeIcon from '../src/assets/nodejs.svg'
import gitIcon from '../src/assets/git.svg'
import mongodDB from '../src/assets/mongodb.svg'

function App() {

  return (
    <>
      <h1>Noah's Code Station Setup</h1>
      
      <p className="read-the-docs">
        Click on the link to download what you need.
      </p>

      <div>
        <a href="https://code.visualstudio.com/docs/?dv=win64user" target="_blank">
          <img src={vsCode} className="logo" alt="Vite logo" /> 
        </a>
        <a href="https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi" target="_blank">
          <img src={nodeIcon} className="logo" alt="Vite logo" /> 
        </a>
        <a href="https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe" target="_blank">
          <img src={gitIcon} className="logo" alt="Vite logo" /> 
        </a>
        <a href="https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.7-signed.msi" target="_blank">
          <img src={mongodDB} className="logo" alt="Vite logo" /> 
        </a>
        
        
      </div>
    
    </>
  )
}

export default App
