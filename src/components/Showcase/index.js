import React from 'react'
import ParticlesBg from '../ParticlesBg'

const Showcase = () => {
    return (
        <div className="Showcase">
            <ParticlesBg className="ParticlesBg" />
            <div className="content">
                <div className="text-container">
                <h1>
                    Accelerate your digital <br /> Transformation
                </h1>
                <p>
                    Accelerate IT and drive business transformation by utilizing our
                    world-class consulting and support solutions
                </p>
                </div>
                <form id="signUpForm">
                <div class="form-group mail-form-container">
                    <input
                    type="email"
                    class="form-control "
                    id="email"
                    required
                    placeholder="email address"
                    />
                    {/* <label class="label-control" for="email">Email address</label> */}
                </div>
                <div class="form-group button-container">
                    <button type="submit" class="form-control-submit-button">
                    SignUp
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Showcase
