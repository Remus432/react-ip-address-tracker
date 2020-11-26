import React, { createContext, useReducer } from "react"
import { reducer } from "./reducer/reducer"
import Header from "./components/Header"
import Map from "./components/Map"
import { IpDataContext } from "./IpDataContext"

function App() {

  return (
    <div className="App">
      <IpDataContext>
        <Header/>
        <Map/>
      </IpDataContext>
    </div>
  );
}

export default App;
