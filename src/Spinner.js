import React from 'react';

const Spinner = (props) => {
    return (
        <div className= " ui active dimmer">
            <di className= "ui big text loader">
                {props.message}
            </di>
        </div>
    );
}

export default Spinner;