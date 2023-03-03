import React from 'react';
import styled from 'styled-components';

interface BoxStyledProps {
    widthSize?: string;
    heightSize?: string;
    rowDirection?: 'row-reverse' | 'row';
}

const BoxStyled = styled.div<BoxStyledProps>`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${props => props.theme.fontColor};
    display: flex;
    width: ${(props) => props.widthSize ?? '100%'};
    height: ${(props) => props.heightSize ?? '40vh'};
    flex-direction: ${(props) => props.rowDirection ?? 'row'};
    align-items: center;
    justify-content: space-evenly;

    figure {
        width: 50%;
        height: 100%;


        img {
            width: 100%;
            height: 100%;
        }
    }
`

export default BoxStyled;