import './Account.scss'
import useToggle from "../../hooks/toggle"
import { useEffect, useState } from 'react'
import { getRandomColor } from '../../constants/colors'

function Account({ account_id, limit, products }) {
    const [color, setColor] = useState()
    const { toggle, message, activeToggle } = useToggle()

    useEffect(() => {
      setColor(getRandomColor())
    }, [])
    

    return (
        <div className="account" style={{ backgroundColor: color }}>
            <div className="top">
                <h1>Account Id: {account_id}</h1>
                <h2>Limit: {limit}</h2>
            </div>
            <div className="products">
                <div className="top">
                    <button onClick={activeToggle}>{message}</button>
                    <h2>Products</h2>
                </div>
                {toggle && <div className="list">
                    {products.map(product => {
                        return <p key={`${product}-key`}>{product}</p>
                    })}
                </div>}
            </div>
        </div>
    )
}
export default Account