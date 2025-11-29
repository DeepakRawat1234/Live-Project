import React from 'react'

const Postbox = ({imgsrc,desc}) => {
  return (
    <div className="post-card">
  <img src={imgsrc} alt="" />
  <p>{desc}</p>
</div>

  )
}

export default Postbox