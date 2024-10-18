import React from 'react'

const CircleComponent = ({imageUrl,stepNumber,instruction,altTxt,circleNum}) => {
  return (
    <div className={`circle circle${circleNum}`}>
        <img src={imageUrl} alt={altTxt}/>
        <p>Step {stepNumber}:</p>
        <p>{instruction}</p>
    </div>
  )
}

export default CircleComponent