import React from 'react';

export default function componentName({ error, componentStack, resetErrorBoundary }) {
    return (
        <>
            <h1>Error message: {error.message}</h1>
        </>
    );
}
