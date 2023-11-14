import React from 'react'
import { ListItem } from './ListItem'

const Lista = ({nome, items}) => {
  return (
    <div>
        <h2>Lista de {nome}</h2>
        <ul>
            {items.map((value, id) => (
            <ListItem key={id}  item={value}/> //o key é obrigatorio em todos os maps e valor unico e exclusivo
            ))}
        </ul>
    </div>
  )
}

export default Lista