import React, { useRef, useContext } from "react"
import Arrow from "../images/icon-arrow.svg"
import { IpData } from "../IpDataContext"
import { getIP } from "../actions"

const SearchField = () => {
  const searchRef = useRef()

  const [state, dispatch] = useContext(IpData)

  console.log(state)

  async function trackIP() {
    const address = searchRef.current.value

    const res = await fetch(`https://geo.ipify.org/api/v1?apiKey=at_C0AxG78JX18U3cky9D4e5ykApTeWB&ipAddress=${address}`)
    const data = await res.json()

    dispatch(getIP(data))
  }

  return (
    <div className="header__input-group">
      <input ref={searchRef} placeholder="Search for any IP address or domain" className="header__input-group-field"/>
      <button onClick={trackIP} className="header__input-group-btn"><img src={Arrow}/></button>
    </div>
  )
}

export default SearchField