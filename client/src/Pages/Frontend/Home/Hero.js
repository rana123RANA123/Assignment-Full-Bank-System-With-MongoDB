import React from 'react'

export default function Hero() {
    return (
        <div className="container-fluid" id='homePicture'>
            <div className="row">
                <div className="col mt-5 ms-5 text-light fw-bold" style={{ width: "600px",backgroundColor:"#023e8a", position: "absolute",opacity:"0.7", height: "250px" }}>
                    <h2 className='mt-4'>get a $200 bonus then <br />make it better</h2>
                    <p>Just add savings to a new Online Checking account and maximize <br />your bonus to $250.</p>
                    <button className='btn btn-light'>See Offer</button>
                </div>
            </div>
        </div>
    )
}
