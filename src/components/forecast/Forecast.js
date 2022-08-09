import React, { useState } from 'react';
import { Accordion } from 'react-accessible-accordion';

import './Forcast.css'

const Forecast = () => {
    return (
        <>
            <label className='title'>Daily</label>
            <Accordion></Accordion>
        </>
    )
};

export default Forecast;