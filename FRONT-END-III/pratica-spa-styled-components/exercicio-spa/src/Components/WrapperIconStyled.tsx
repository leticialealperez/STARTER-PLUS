import React from 'react';
import styled from 'styled-components';


const WrapperIconStyled = styled.section`
    width: 20%;
    text-align:center;

    svg {
        font-size: 50px;
        color: ${props => props.theme.color};
        margin-bottom: 20px;
    }
`

export default WrapperIconStyled;