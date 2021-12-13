import React from 'react'
import { MdSettingsBackupRestore, MdOutlineBackup } from "react-icons/md";
import { FcDataBackup } from "react-icons/fc";

const AvailableSolutions = () => {
    const optionsList = [
        {
            icon : <FcDataBackup size={35}/>,
            title: 'Enterprise Backup'
        },
        {
            icon : <MdSettingsBackupRestore size={35}/>,
            title: 'Recovery in < 3 minutes'
        },
        {
            icon : <MdOutlineBackup size={35}/>,
            title: 'Replicate to Cloud'
        },
    ]
    return (
        <div className="AvailableSolutions p-3">
            <h1 className='text-center p-3'>Veeam Availability Solutions</h1>
            <div className="container service-container p-3">
                {optionsList.map(option => {
                    return (
                        <div className="service p-3 m-2 shadow-sm rounded-3">
                            {option.icon}
                            <p>{option.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AvailableSolutions
