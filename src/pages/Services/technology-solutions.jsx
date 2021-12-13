import React from 'react'
import AvailableSolutions from '../../components/ServicesPages/AvailableSolutions'
import CRM from '../../components/ServicesPages/CRM'
import GetSophos from '../../components/ServicesPages/GetSophos'
import MsSolutions from '../../components/ServicesPages/MsSolutions'
import TechnologySolutionsHero from '../../components/ServicesPages/TechnologySolutionsHero'
import UltimateSecurity from '../../components/ServicesPages/UltimateSecurity'

const TechnologySolutions = () => {
    return (
        <div>
            <TechnologySolutionsHero />
            <MsSolutions />
            <CRM />
            <AvailableSolutions />
            <UltimateSecurity />
            <GetSophos />
        </div>
    )
}

export default TechnologySolutions
