import React from 'react'

const ArrowComponent = ({imgUrl,arrowNum,altTxt}) => {
  return (
    <div className={`arrow arrow${arrowNum}`}>
        <img src={imgUrl} alt={altTxt}/>
    </div>
  )
}

export default ArrowComponent