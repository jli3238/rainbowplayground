import React from 'react';
import styled from 'styled-components';
import { getRandomColor } from './RandomColor';

const PageContainer = (props) => {
    const backgroundColor = props.backgroundColor ? props.backgroundColor : getRandomColor().shade;
    const RandomBackgroundColoredDiv = styled.div`
        background-color: ${(props) => props.color};
    `;
    return (
        <div className="section">
            <div className="section-title">{props.title}</div>
            {props.plainbackground ? 
            <div className="section-body">
                <p>{props.description}</p>
                <>
                    {props.children}
                </>
                <span><label>{props.resultDescription}</label><div className="algorithm-result">{props.result}</div></span>
            </div>
            :
            <RandomBackgroundColoredDiv color={backgroundColor} className="section-body">
                <p>{props.description}</p>
                <>
                    {props.children}
                </>
                <span><label>{props.resultDescription}</label><div className="algorithm-result">{props.result}</div></span>
            </RandomBackgroundColoredDiv>}
        </div> 
    );
}
export default PageContainer;