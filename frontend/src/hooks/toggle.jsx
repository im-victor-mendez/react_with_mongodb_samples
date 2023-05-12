import { useState } from "react"

function useToggle() {
    const [toggle, setToggle] = useState(false)
    const message = toggle ? `See less` : `See more`
    
    function activeToggle() {
        setToggle(previous => !previous)
    }

    return {toggle, message, activeToggle}
}

export default useToggle