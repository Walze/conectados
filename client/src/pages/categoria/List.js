import React, { Component } from 'react'
import PopUp from './PopUp'
import ListItem from './ListItem'


class List extends Component {



  render() {

    return (
      <div>
        <div className='list-group'>
          {this.props.categorias.map(cat =>
            <ListItem key={cat.nome} categoria={cat} />
          )}
        </div>

        <PopUp />
      </div>
    )
  }
}

export default List
