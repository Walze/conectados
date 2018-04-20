




export class Licao {
  constructor(id, titulo, desc, categoria_id, cards) {
    if (typeof id === 'number' || typeof id === 'undefined') {

      this.id = id || 0
      this.titulo = titulo || ''
      this.desc = desc || ''
      this.categoria_id = categoria_id || 0
      this.cards = cards || []

    } else if (typeof id === 'object') {
      const obj = id

      this.id = obj.id
      this.titulo = obj.titulo
      this.desc = obj.desc
      this.categoria_id = obj.categoria_id
      this.cards = obj.cards

    } else throw new Error('Wrong Param Type.')
  }
}

export class Card {
  constructor(id, text, images, pos, licao_id) {
    if (typeof id === 'number' || typeof id === 'undefined') {

      this.id = id || 0
      this.text = text || ''
      this.images = images || ['']
      this.pos = pos || 0
      this.licao_id = licao_id || 0

    } else if (typeof id === 'object') {

      const obj = id

      this.id = obj.id
      this.text = obj.text
      this.images = obj.images
      this.pos = obj.pos
      this.licao_id = obj.licao_id

    } else throw new Error('Wrong Param Type.')
  }
}