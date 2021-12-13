import React from 'react'
import { Link } from 'react-router-dom'

const GetSophos = () => {
    return (
        <div className='GetSophos p-4'>
            <div className="container">
                <div className="row p-5">
                    <div className="col-md-4">
                        <h3 className="statistic">90%</h3>
                        <p>of small businesses worry their IT security won't keep up with malware</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="statistic">92%</h3>
                        <p>are worried about the threat of ransomware</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="statistic">25%</h3>
                        <p>of an IT Manager’s time is spent managing IT security solutions</p>
                    </div>
                </div>
                <Link className='btn' to="#">Get Sophos</Link>
            </div>
        </div>
    )
}

export default GetSophos
