import React from "react"
import SearchField from "./SearchField"
import Location from "./Location"

const Header = () => (
  <div className="header">
    <h1 className="header__headline">IP Address Tracker</h1>
    <SearchField/>
    <Location/>
  </div>
)

export default Header