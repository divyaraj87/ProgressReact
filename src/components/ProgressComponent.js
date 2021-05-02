import React from 'react';

export const ProgressComponent = ({ bgcolor, completed, width}) => <div class="containerStyles" >
    <div style={{backgroundColor: `${bgcolor}`, width: `${width}%`, textAlign: 'right', height: '100%', borderRadius: 'inherit'}}>
        <span class="labelStyles">{`${completed}%`}</span>
    </div>
</div>