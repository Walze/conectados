import React, { Component } from 'react'
import PopUp from './PopUp'
import ListItem from './ListItem'


class List extends Component {

  

  render() {

    return (
      <div>
        <div className='list-group'>
          {this.props.categorias.map(cat =>
            <ListItem popUp={this.popUp} key={cat.id} categoria={cat} />
          )}
        </div>

        <PopUp categorias={this.props.categorias} ref={inst => this.popUp = inst} />
      </div>
    )
  }
}

export default List
