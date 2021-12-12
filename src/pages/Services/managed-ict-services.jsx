import React from 'react'
import AssessmentCTA from '../../components/ServicesPages/AssessmentCTA'
import HelpDesk from '../../components/ServicesPages/HelpDesk'
import ManagedHero from '../../components/ServicesPages/ManagedHero'
import Outsourcing from '../../components/ServicesPages/Outsourcing'

const ManagedICTServices = () => {
    return (
        <div>
            <ManagedHero />
            <AssessmentCTA />
            <HelpDesk />
            <Outsourcing/>
        </div>
    )
}

export default ManagedICTServices
