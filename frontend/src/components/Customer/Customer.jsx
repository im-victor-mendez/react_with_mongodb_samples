import { useEffect, useState } from 'react'
import useToggle from '../../hooks/toggle'
import './Customer.scss'
import { getRandomColor } from '../../constants/colors'

function Customer({ email, name, moreInfo }) {
  const [color, setColor] = useState()
  const {toggle, message, activeToggle} = useToggle()

  useEffect(() => {
    setColor(getRandomColor())
  }, [])
  

  return (
    <div className="customer" style={{ backgroundColor: color }}>
      <div className="top">
        <div className="left">
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
        <button onClick={activeToggle}>{message}</button>
      </div>

      {toggle && <div className="more-info-customer">
        {moreInfo.map(
          info => {
            const { id, name, data } = info

            return <CustomerToggle key={`${name}-toggle`} id={id} name={name} data={data} />
          }
        )}
      </div>}
    </div>
  )
}

function CustomerToggle({ id, name, data }) {
  const {toggle, message, activeToggle} = useToggle()

  return (
      <div id={id} className={`customer-toggle`}>
          <div className='left'>
              <h2>{name}</h2>
              <button onClick={activeToggle}>{message}</button>
          </div>
          {toggle && <div className="data">
              {typeof data === Array ? data.map(
                  item => {
                      return <p key={`${name}-data`}>{item}</p>
                  }
              ) : <>{`${data}`}</>}
          </div>}
      </div>
  )
}

export default Customer