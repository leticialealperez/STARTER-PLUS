import React from 'react';
import Banner from '../Components/BannerStyled'; 
import Icons from '../Components/Icons';
import { BsAlarmFill, BsFillBasketFill, BsFillBellFill } from "react-icons/bs";
import BoxStyled from '../Components/BoxStyled';
import TitleStyled from '../Components/TitleStyled';
import Content from '../Components/Content';
import Footer from '../Components/Footer';

const Home: React.FC = () => {

  return (
    <React.Fragment>
        <Banner height='60vh'>
            <TitleStyled fontSize='5rem'>Growdev</TitleStyled>
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
        
        <Content title='Titulo 1' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel augue quis velit condimentum aliquet. Curabitur libero justo, aliquam vel dolor eu, sollicitudin sollicitudin velit. Integer massa felis, vestibulum non consequat at, facilisis sed justo. Vestibulum accumsan faucibus pellentesque. Nam fermentum eleifend sollicitudin. Cras non quam metus. Nulla magna eros, consectetur non eleifend vel, malesuada sed felis. Pellentesque in justo finibus, varius nibh nec, vehicula nisl. Donec sit amet fringilla ipsum' srcImage='./assets/images/img1card.jpg' />

        <Content title='Titulo 2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel augue quis velit condimentum aliquet. Curabitur libero justo, aliquam vel dolor eu, sollicitudin sollicitudin velit. Integer massa felis, vestibulum non consequat at, facilisis sed justo. Vestibulum accumsan faucibus pellentesque. Nam fermentum eleifend sollicitudin. Cras non quam metus. Nulla magna eros, consectetur non eleifend vel, malesuada sed felis. Pellentesque in justo finibus, varius nibh nec, vehicula nisl. Donec sit amet fringilla ipsum' srcImage='./assets/images/img2card.jpg' rowDirection='row-reverse'/>

        <Content title='Titulo 3' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel augue quis velit condimentum aliquet. Curabitur libero justo, aliquam vel dolor eu, sollicitudin sollicitudin velit. Integer massa felis, vestibulum non consequat at, facilisis sed justo. Vestibulum accumsan faucibus pellentesque. Nam fermentum eleifend sollicitudin. Cras non quam metus. Nulla magna eros, consectetur non eleifend vel, malesuada sed felis. Pellentesque in justo finibus, varius nibh nec, vehicula nisl. Donec sit amet fringilla ipsum' srcImage='./assets/images/img3card.jpg' />


        <Banner height='40vh'>
            <TitleStyled fontSize='2rem'>Contato</TitleStyled>
        </Banner>

        <Footer />
    </React.Fragment>
  );
};

export default Home;

