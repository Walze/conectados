import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Inicio extends Component {
  constructor(props) {
    super(props);

    props.displayNav(false)
  }

  render() {
    return (
      <div>
        <br />

        <div className="d-flex align-items-center flex-column">
          <p>
            <b>
              Escolha o que deseja gerenciar
            </b>
          </p>

          <p><Link to="/categoria">Categorias</Link></p>
          <p><Link to="/licao">Lições</Link></p>
        </div>

      </div>
    )
  }
}

export default Inicio;
