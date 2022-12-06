import React from 'react'

import './sass/main.sass'

export default function BlockRunner()
{

    return (
        <div className='block-runner'>
            <h4>Run</h4>
            <p>Click on the Button to run the Code:</p>            
            <div className='log'>
                <h6>Log</h6>
                <div className='preview'>
                    Run ...
                </div>
            </div>
        </div>
    )

}