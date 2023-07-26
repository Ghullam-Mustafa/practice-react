import React from 'react'
import '../friendRequest/FriendRequest.css'

export default function FriendRequest(props) {
  return (
    <>
        <h3 className='heading'>Friend Requests <span className='total'>{props.total} </span> </h3>
        <div className="req">
            <div className="image">
                 <img src={props.src} alt="" className='img' />
            </div>
            <div className="">
                <p className='name'>{props.name} </p>
                <button type="button" className='btn1'>Confirm</button>
                <button type="button" className='btn2'>Delete</button>
                
            </div>
        </div>
    </>
  )
}
