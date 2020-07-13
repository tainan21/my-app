import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Bartop from "./components/Bartop/index";
import Menu from "./components/Menu/index";
import Sobre from "./components/Sobre/index";
import MyTeam from "./components/MyTeam/index";
import FooterNew from "./components/Footer/index";


function ConsolidadoGerencial(props) {
    return (
      <div>
        <Bartop />
        <Menu/>
        <Sobre/>
        <MyTeam/>
        <FooterNew/>
      </div>
    );
  }

export default ConsolidadoGerencial;
