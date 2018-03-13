import React, { Component } from 'react'

import List from './List'
import './categoria.sass'

import categoriaStore from '../../Stores/categoria.store'
import * as actions from '../../actions/categoria.action'

class Categoria extends Component {
  constructor(props) {
    super(props);

    props.displayNav(true)

    this.state = {
      categorias: categoriaStore.getCats(),
      newCat: { nome: '' }
    }
  }

  componentDidMount() {
    categoriaStore.on('changes', () => {
      console.log('changes categoria')
      this.setState({ categorias: categoriaStore.getCats() })
    })
  }

  componentWillUnmount() {
    categoriaStore.removeAllListeners()
  }

  handleChange(e) {
    let newCat = this.state.newCat
    newCat[e.target.name] = e.target.value

    this.setState({ newCat })
  }

  create(text) {
    actions.createCat(text)
  }

  render() {

    return (
      <div>
        <div className='container'>

          <h4>Criar nova Categoria</h4>

          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='nome'
              value={this.state.newCat.nome}
              onChange={e => this.handleChange(e)}
            />

            <small className='form-text text-muted'>Tenha certeza de que ela já não existe.</small>
          </div>

          <button type='submit' onClick={() => this.create(this.state.newCat)} className='btn btn-primary'>Adicionar</button>

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
