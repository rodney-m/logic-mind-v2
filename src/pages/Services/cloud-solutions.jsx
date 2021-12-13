import React from 'react'
import CloudOptions from '../../components/ServicesPages/CloudOptions'
import CloudPlans from '../../components/ServicesPages/CloudPlans'
import CloudSolutionsHero from '../../components/ServicesPages/CloudSolutionsHero'

const CloudSolutions = () => {
    return (
        <div>
            <CloudSolutionsHero/>
            <CloudOptions />
            <CloudPlans/>
        </div>
    )
}

export default CloudSolutions
