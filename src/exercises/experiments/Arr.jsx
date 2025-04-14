import React from 'react';

const ArrayExercise = () => {
    const numbers = [1, 2, 3, 4, 5];

    const doubledNumbers = numbers.map((number) => number %2===0);

    return (
        <div>
            <h1>Array Exercise</h1>
            <p>Original Numbers: {numbers.join(', ')}</p>
            <p>Doubled Numbers: {doubledNumbers.join(', ')}</p>
        </div>
    );
};

export default ArrayExercise;