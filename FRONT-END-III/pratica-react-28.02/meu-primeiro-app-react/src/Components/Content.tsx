import React from "react";
import Title from "./title";

interface ContentProps {
    descripition: string;
    titlebutton: string;
}

const Content: React.FC<ContentProps> = ({ descripition, titlebutton }) => {
    return (
        <React.Fragment>
            <Title title="Sobre o programa" color="#2b385b" />
            <p>{descripition}</p>
            <button>{titlebutton}</button>
            <img src="./assets/img/img.png" alt="imagem da Jessica" />
        </React.Fragment>

    )
}

export default Content