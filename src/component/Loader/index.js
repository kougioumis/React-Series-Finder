
import React from 'react';
import loaderSrc from '../../assets/loader.gif'

const loader = props => (
    <div>
        <img
            style = {{width:75 }}
            alt = "loader icon"
            src = {loaderSrc} />
    </div>

);
export default loader;