import { useState } from "react";
//importaciones de los componentes, esto se veran en la pagina
import {Login} from "../components/Login";
import { Register } from "../components/Register";
import {FirstApp} from "../components/FirstApp";
import {FetchSimpsons} from "./FetchSimpson";

export function App(){
    const[user, setUser] = useState("");
    const [showTask, setShowtask] = useState("")
    const handleLogin =(userName)=>{
        setUser(userName)
    };
    const handleLogout = () => {
        setUser("");
    };   
    return(
    <div className="App">
        <div className="Bienvenida">
            <h1>Bienvenido</h1>
            <button onClick={() => setShowtask("task1")}>Tarea 1</button>
            <button onClick={() => setShowtask("task2")}>Tarea 2</button>
            <button onClick={() => setShowtask("task3")}>Tarea 3</button>
        </div>
        {showTask === "task1" ? <FirstApp /> : ""}
        {showTask === "task2" ? (
            <div>
              <h1>Esta es la tarea 2</h1>
              {user ? (
                <div>
                  <h2>Hola de nuevo {user}</h2>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              ) : (
                <>
                  <Login onLogin={handleLogin} />
                  <Register />
                </>
              )}
            </div>
        ) : (
            <h1> </h1>
        )}

        {showTask === "task3" ? <FetchSimpsonsApi /> : <h1></h1>}
        </div>
    )
}