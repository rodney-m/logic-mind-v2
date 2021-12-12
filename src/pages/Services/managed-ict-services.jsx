import React from 'react'
import AssessmentCTA from '../../components/ServicesPages/AssessmentCTA'
import HelpDesk from '../../components/ServicesPages/HelpDesk'
import InfrastructureConsulting from '../../components/ServicesPages/InfrastructureConsulting'
import ManagedHero from '../../components/ServicesPages/ManagedHero'
import Outsourcing from '../../components/ServicesPages/Outsourcing'
import ProjectManagement from '../../components/ServicesPages/ProjectManagement'

const ManagedICTServices = () => {
    return (
        <div>
            <ManagedHero />
            <AssessmentCTA />
            <HelpDesk />
            <Outsourcing/>
            <ProjectManagement />
            <InfrastructureConsulting />
        </div>
    )
}

export default ManagedICTServices
