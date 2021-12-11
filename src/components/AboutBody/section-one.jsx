import React from 'react'
import Img from '../../assets/about-section-1.jpg'

const SectionOne = () => {
    return (
        <div className='Offer row'> {/* borrowed from offers section -- reusing code  */}
            <div className="text col-md-6 py-3 my-5">
                <h3 className="heading">Technology excites us to come up with tailor-made business solutions</h3>
                <p className="description lead">
                Logikmind provides strategic consulting services to help clients solve business IT and operational problems throughout the entire business cycle and set the foundation for project delivery.
                <br/>
                We believe technology is a critical business tool that should support profitability. So whether it’s making sure your software is up-to-date, your data is secure, or your employees can get seamless remote access to the company server, Logikmind is constantly monitoring the health and connectivity of your system to insure minimum downtime and maximum productivity.
                </p>
            </div>
            <div className="image col-md-6 py-3 my-5">
                    <div className="img-container">
                        <img className="shadow-sm" src={Img} alt="managed services" />
                    </div>
            </div>
        </div>
    )
}

export default SectionOne
