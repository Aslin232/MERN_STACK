import React from 'react'
import '../stylings/balance.css'


const Balance = ({onBack}) => {

    const user=JSON.parse(localStorage.getItem("user"))
  return (
    <div className='balance-page'>
        <h2>Your balance</h2>

        <div className="balance-box">
            ${user.balance}
        </div>
        <button onClick={onBack}>Back</button>

    </div>
  )
}

export default Balance