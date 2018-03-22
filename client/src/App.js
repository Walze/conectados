import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Categoria from './pages/categoria/Categoria'
import Inicio from './pages/Inicio'
import LicoesPage from './pages/licao/LicoesPage'


class App extends Component {
  constructor() {
    super()

    this.state = {
      displayNav: false
    }

    this.displayNav = bool => this.setState({ displayNav: bool })
  }

  checkActive(tab) {
    if (tab === window.location.pathname) return 'active'
  }

  render(e) {

    return (
      <Router>
        <div>
          <br />

          <div hidden={!this.state.displayNav}>
            <nav className='nav nav-tabs justify-content-center'>
              <div className='nav-item'>
                <Link className={`nav-link ${this.checkActive('/categoria')}`} to="/categoria">Categorias</Link>
              </div>
              <div className='nav-item'>
                <Link className={`nav-link ${this.checkActive('/licao')}`} to="/licao">Lições</Link>
              </div>
            </nav>
          </div>

          <br />

          <Route exact path="/" render={props => <Inicio displayNav={this.displayNav} />} />
          <Route path="/categoria" render={props => <Categoria displayNav={this.displayNav} />} />
          <Route path="/licao" render={props => <LicoesPage displayNav={this.displayNav} />} />


        </div>
      </Router>
    )
  }
}

export default App
