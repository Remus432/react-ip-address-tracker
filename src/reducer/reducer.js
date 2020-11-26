export const reducer = (state, action) => {
  switch(action.type) {
    case "GET_IP":
      console.log(action.data)
      const { ip, location, isp } = action.data
      return {
        ip,
        location: `${location.city}, ${location.region}, ${location.country}`,
        timezone: location.timezone,
        position: [location.lat, location.lng],
        isp
      }
    default:
      return state
  }
}