import React, {memo}from 'react'

const TaxComp = ({taxData}) => {
    console.log("Render => TaxComp Componenti");
    return (
        <div className='text-center text-danger fw-bold'>TaxComp:{taxData.current.ship}</div>
    )
}

export default memo(TaxComp);