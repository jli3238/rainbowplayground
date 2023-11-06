import React, { useState } from 'react';
import PageContainer from '../src/PageContainer';

export function getRandomColor () {
    const num = (min, max) => Math.floor(Math.random()*(max - min) + min);
    return {
        color: `rgb(${num(0, 255)},${num(0, 255)},${num(0,255)});`,
        shade: `rgb(${num(63, 255)},${num(63, 255)},${num(63,255)});`,
        tint: `rgb(${num(0,191)},${num(0,191)},${num(0,191)});`,
    };
};

const RandomColor = () => {
    const [randomColor, setRandomColor] = useState("");

    function handlePickRandomColorButtonClick() {
      const clr = getRandomColor().color;
      setRandomColor(clr);
    }

    return (
        <PageContainer 
            title='Pick a Random Color' 
            description='Pick a random color by clicking the button.'
            resultDescription=''
            result={randomColor}
            backgroundColor={randomColor}
        >
            <div>
                <button onClick={handlePickRandomColorButtonClick}>Pick a random color</button>
            </div>
        </PageContainer>)
}

export default RandomColor;