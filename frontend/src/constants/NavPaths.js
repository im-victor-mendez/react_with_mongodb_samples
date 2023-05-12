import Paths from "./Paths"

const {
    home,
    airbnb,
    analytics,
    geoSpatial,
    guides,
    mflix,
    restaurants,
    supplies,
    training,
    weatherData
} = Paths

const NavPaths = [
    {
      name: "Home",
      to: home
    },
    {
      name: "AirBnb",
      to: airbnb
    },
    {
        name: "Analytics",
        to: analytics
    },
    {
        name: "Geo Spatial",
        to: geoSpatial
    },
    {
        name: "Guides",
        to: guides
    },
    {
        name: "Mflix",
        to: mflix
    },
    {
        name: "Restaurants",
        to: restaurants
    },
    {
        name: "Supplies",
        to: supplies
    },
    {
        name: "Training",
        to: training
    },
    {
        name: "Weather Data",
        to: weatherData
    }
]

export default NavPaths