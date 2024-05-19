import React from 'react'

const Food = () => {
    const food1 = "tufaax";
    const food2 = "canbe";
    const food3 = "lemon";
    const food4 = "orange";
  return (
    <div>

    <nav>
        <ul>
            <li>{food1.toLocaleLowerCase()}</li>
            <li>{food2}</li>
            <li>{food3.toUpperCase()}</li>
            <li>{food4}</li>
            
            
            
            
            

        </ul>
    </nav>
    </div>
  )
}

export default Food