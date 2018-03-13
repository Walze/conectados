import React, { Component } from 'react'
import PopUp from './PopUp'
import * as actions from '../../actions/popup.action'


class List extends Component {



  render() {

    return (
      <div>
        <div className='list-group'>
          {this.props.categorias.map(cat =>
            <a
              key={cat.nome}
              onClick={() => actions.updateFields(cat)}
              className='list-group-item list-group-item-action'>
              {cat.nome}
            </a>
          )}
        </div>

        <PopUp />
      </div>
    )
  }
}

export default List
