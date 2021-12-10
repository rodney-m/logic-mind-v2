import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import ManagedServ from '../../assets/offer-managed-service.jpg'

function Offer({offerItem}) {
    return (
        <div className={offerItem.textLeft ? 'Offer row' : 'Offer row reverse'}>
            <div className="text col">
                <h3 className="heading">{offerItem.title}</h3>
                <p className="description lead">
                {offerItem.description}
                </p>
                <a href="/" className="btn shadow-sm"><BsArrowRightCircle/></a>
            </div>
            <div className="image col">
                    <div className="img-container">
                        <img className="shadow-sm" src={offerItem.image} alt="managed services" />
                    </div>
            </div>
        </div>
    )
}

export default Offer
