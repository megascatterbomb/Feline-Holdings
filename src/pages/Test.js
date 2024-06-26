import React from 'react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

function Test() {
    const [value, setValue] = useState('');

    const debounced = useDebouncedCallback(
        (value) => {
            setValue(value);
        },
        1000
    );

    return (
        <div>
            <h1>Development test page</h1>
            <input onChange={(e) => debounced(e.target.value)} />
            <p>{value}</p>
        </div>
    )
}

export default Test;