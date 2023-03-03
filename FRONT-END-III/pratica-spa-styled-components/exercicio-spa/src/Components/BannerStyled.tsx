import React from 'react'
import styled from 'styled-components'

interface BannerProps {
    height: string;
}

const Banner = styled.section<BannerProps>`
    background-image: url(./assets/images/ocean.jpg);
    background-size: cover;
    background-position: center;
    height: ${(props) => props.height };
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: #fff;
    width: 100%;

`

export default Banner