import React from 'react'

import './sass/main.sass'

export default function BlockRunner()
{
    return (
        <div id='block-runner' className='block-runner'>
            <h4>Run</h4>
            <p>Click on the Button to run the Code:</p>            
            <div className='log'>
                <h6>Log</h6>
                <div class="options">
                <button type="button" class="btn btn-primary">RUN</button>
                </div>
                <div className='preview'>
                    Run ...
                </div>
            </div>
        </div>
    )
}