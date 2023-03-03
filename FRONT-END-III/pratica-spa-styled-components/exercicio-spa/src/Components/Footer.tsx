import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../Config/Routes';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiFillTwitterSquare} from "react-icons/ai";
import WrapperFooterStyled from './WrapperFooterStyled';
import BoxNavegateStyled from './BoxNavegateStyled';


const Footer: React.FC = () => {
    return (
        <WrapperFooterStyled>
            <BoxNavegateStyled>
                <nav>
                    <ul>
                        {routes.map((route, index) => {
                            return (
                                <li key={index}>
                                    <Link to={route.url}>{route.label}</Link>
                                </li>
                            )
                        } )}
                    </ul>
                </nav>
                <small>
                    &copy; Your Website 2023. All Rights Reserved. 
                </small>
            </BoxNavegateStyled>

            <BoxNavegateStyled>
                  <BsFacebook/>
                  <BsInstagram/>
                  <AiFillTwitterSquare/>      
            </BoxNavegateStyled>
            
        </WrapperFooterStyled>
    )
}

export default Footer