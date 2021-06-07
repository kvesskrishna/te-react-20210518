import React from 'react';

export default function componentName({ errorMessage }) {
    console.log('err msg: ', errorMessage);
    return (
        <>
            <h1>Error message: {errorMessage}</h1>
            {alert('in fallback ui...')}
        </>
    );
}
