import React from 'react';

export default function Value({ number }) {
    return (
        <h1>
            {number}
        </h1>
    )
}

Value.defaultProps = {
    number: -1
}
