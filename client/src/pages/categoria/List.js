import React, { Component } from 'react'
import PopUp from '../licao/PopUp'
import * as popUp from '../../actions/popups.action'
import { updateCat, deleteCat } from '../../actions/categoria.action'


class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      popUpCurrentCat: {
        id: 0,
        nome: ''
      }
    }
  }


  handleChange(e) {
    let popUpCurrentCat = Object.assign({}, this.state.popUpCurrentCat)
    popUpCurrentCat[e.target.name] = e.target.value

    this.setState({ popUpCurrentCat })
  }

  updatePopUp(cat) {
    this.setState({ popUpCurrentCat: cat })
    popUp.open()
  }

  save() {
    updateCat(this.state.popUpCurrentCat)
    popUp.close()
  }

  delete() {
    deleteCat(this.state.popUpCurrentCat)
    popUp.close()
  }


  render() {

    return (
      <div>
        <div className='list-group'>
          {this.props.categorias.map(cat =>
            <a
              key={cat.nome}
              onClick={() => this.updatePopUp(cat)}
              className='list-group-item list-group-item-action'>
              {cat.nome}
            </a>
          )}
        </div>

        <PopUp>
          <h4>Editar/Deletar</h4>

          <br />

          <div className="form-group">

            <input
              type="text"
              className="form-control"
              name='nome'
              onChange={(e) => this.handleChange(e)}
              value={this.state.popUpCurrentCat.nome}
            />

            <br />

            <button onClick={() => this.save()} type="submit" className="col-md-12 btn btn-success">Alterar</button>
            <button onClick={() => this.delete()} type="submit" className="col-md-12 btn btn-danger">Remover</button>
          </div>
        </PopUp>
        
      </div>
    )
  }
}

export default List
