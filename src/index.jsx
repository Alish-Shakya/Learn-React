import {createRoot} from "react-dom/client"
import App from "./App"
import "./App.css"
const root = createRoot(document.getElementById("root"))


root.render(
        <>
          <div className="box">
                <App />       
          </div>
        </>
 
)