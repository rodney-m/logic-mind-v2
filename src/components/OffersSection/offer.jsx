import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";

function Offer({offerItem}) {
    return (
        <div className={offerItem.textLeft ? 'Offer row' : 'Offer row reverse'}>
            <div className="text col-md-6 py-3 my-5">
                <h3 className="heading">{offerItem.title}</h3>
                <p className="description lead">
                {offerItem.description}
                </p>
                <a href="/" className="btn shadow-sm"><BsArrowRightCircle/></a>
            </div>
            <div className="image col-md-6">
                    <div className="img-container">
                        <img className="shadow-sm" src={offerItem.image} alt="managed services" />
                    </div>
            </div>
        </div>
    )
}

export default Offer
