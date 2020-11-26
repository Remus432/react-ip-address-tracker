import React, { createContext, useReducer } from "react"
import { reducer } from "./reducer/reducer"

const initialState = {
  ip: "",
  location: "",
  timezone: "",
  position: [],
  isp: ""
}

export const IpData = createContext(initialState)

export const IpDataContext = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  return (
    <IpData.Provider value={[state, dispatch]}>
      { children }
    </IpData.Provider>
  )
}