import React from 'react'
import { Route, Switch} from 'react-router-dom'

import '../App/App.css';

import PacaembuHeader from './PacaembuHeader';
// import App from '../App/App.js';
import ParqueUniversitario from "./ParqueUniversitario/ParqueUniversitario.js"
import VillaDiCapri from "./Villa_di_capri/Villa_di_capri.js"
import VittaResidencial from "./Vitta_residencial/Vitta_residencial.js"
import QuintaDOeste from "./Quinta_D_Oeste/Quinta_D_Oeste.js"
import VivaReal from "./Viva_Real/Viva_Real.js"
export default function SubMenu(props) {
  return (   
    <>
      <PacaembuHeader />

      <main>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/ParqueUniversitario" render={(props) => <ParqueUniversitario />}></Route>
          <Route exact path="/Villa_di_capri" render={(props) => <VillaDiCapri />}></Route>
          <Route exact path="/Vitta_residencial" render={(props) => <VittaResidencial />}></Route>
          <Route exact path="/Quinta_D_Oeste" render={(props) => <QuintaDOeste />}></Route>
          <Route exact path="/Viva_Real" render={(props) => <VivaReal />}></Route>
        </Switch>
      </main>

    </>
    
  );
}