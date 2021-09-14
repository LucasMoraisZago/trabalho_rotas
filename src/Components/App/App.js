import React from 'react'
import { Route, Switch} from 'react-router-dom'

import './App.css';

import Header from '../Header/Header.js';
import Parra from '../Parra/Parra.js';
import Projeto from '../Projeto/Projeto.js';
import Pacaembu from '../Pacaembu/Pacaembu.js';
import Perplan from '../Perplan/Perplan.js';
import Mrv from '../Mrv/Mrv.js';

function App(props) {
  return (   
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Parra />}></Route>
          <Route exact path="/projeto" render={(props) => <Projeto />}></Route>
          <Route exact path="/pacaembu" render={(props) => <Pacaembu />}></Route>
          <Route exact path="/perplan" render={(props) => <Perplan />}></Route>
          <Route exact path="/mrv" render={(props) => <Mrv />}></Route>
        </Switch>
      </main>

    </>
    
  );
}

export default App;


/* Seções:
1 - inicio/header
2 - cursos
3 - contatos
4 - parceiros
5 - missão
6 - rodapé/footer
*/