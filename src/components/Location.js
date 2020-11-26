import React, { useContext } from "react"
import { IpData } from "../IpDataContext"

const Location = () => {
  const [ state ] = useContext(IpData)

  return (
    <div className="location">
      <div className="location__info">
        <p className="location__info-headline">IP ADDRESS</p>
        <p className="location__info-data">{ state.ip == "" ?  `192.212.174.101` : state.ip }</p>
      </div>
      <div className="location__info">
        <p className="location__info-headline">LOCATION</p>
        <p className="location__info-data">{ state.ip == "" ? `Brooklyn, NY 10001` : state.location }</p>
      </div>
      <div className="location__info">
        <p className="location__info-headline">TIMEZONE</p>
        <p className="location__info-data">{ state.ip == "" ? `UTC -05:00` : state.timezone }</p>
      </div>
      <div className="location__info">
        <p className="location__info-headline">ISP</p>
        <p className="location__info-data">{ state.ip == "" ? `SpaceX Starlink` : state.isp }</p>
      </div>
    </div>
  )
}

export default Location