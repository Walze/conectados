import React, { Component } from 'react'
import List from './List'

import './categoria.sass'

class Categoria extends Component {
  constructor(props) {
    super(props);

    props.displayNav(true)

    window.dis = this

    this.state = {
      categorias: [{ 'id': 5, 'nome': 'kkfghkkghjfghjkkkk' }, { 'id': 6, 'nome': 'niceboi2' }, { 'id': 4, 'nome': 'testaroo' }, { 'id': 2, 'nome': 'teste3' }]
    }
  }

  render() {

    return (
      <div>
        <div className='container'>

          <h4>Criar nova Categoria</h4>

          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Digite Aqui' />
            <small className='form-text text-muted'>Tenha certeza de que ela já não existe.</small>
          </div>

          <button type='submit' className='btn btn-primary'>Adicionar</button>

          <br />
          <br />
          <br />

          <h4>Gerenciar Categorias</h4>

          <List categorias={this.state.categorias} />

        </div>
      </div>
    )
  }
}

export default Categoria
