import React from 'react';
import Banner from '../Components/BannerStyled'; 
import Icons from '../Components/Icons';
import { BsAlarmFill, BsFillBasketFill, BsFillBellFill } from "react-icons/bs";
import BoxStyled from '../Components/BoxStyled';

const Home: React.FC = () => {

  return (
    <React.Fragment>
        <Banner height='60vh'>
            <h1>Growdev</h1>
        </Banner>

        <BoxStyled>
          <Icons 
            icon={<BsAlarmFill />}
            titulo='Somente para desktop'
            descricao='Vamos aprender, como utilizar um framework.'/>

          <Icons 
            icon={<BsFillBasketFill/>}
            titulo='Criado com componentes'
            descricao='Utilizamos o Styled Components.'/>
            
          <Icons 
          icon={< BsFillBellFill/>}
          titulo='Facíl aproveitamento'
          descricao='Estamos no caminho.'/>
        </BoxStyled>

        
    </React.Fragment>
  );
};

export default Home;

