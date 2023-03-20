import React from 'react'
import { useNavigate } from 'react-router-dom'

const FinishAndPay = () => {
const navigate = useNavigate()

    const onReadOrder = (e) => {
        e.preventDefault()
        navigate('/readorders')
    }
  return (
    <>
    <button>Pay With CASH</button>
    <button>Pay With CARD</button>
    <button onClick={onReadOrder}>Show Your Order</button>
    
    </>
  )
}

export default FinishAndPay