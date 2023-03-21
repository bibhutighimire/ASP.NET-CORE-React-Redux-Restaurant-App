import React from 'react'
import { useState } from 'react'

const Total = ({selectallcart}) => {
    const[pri, setPri] = useState(0)

    
    //{carts.reduce((acc, item) => acc + item.price, 0)}

   
        let total = 0;
        selectallcart.map((item) => (total = total + item.price));
        console.log("TOTAL", total)
        return total;
    

  /*   carts.map(p => {
        setPri(pri+p.price)
       
        console.log("SUMSUM:", pri)
        //return sum
        
        //setPrice(price+p.price)
      })
 */

  return (
    <div>{total}</div>
  )
}

export default Total