import React, { useContext } from 'react'
import { ApiContext } from '../../common/context/api-context'
import Item from '../Item/Item'

export default function List({frota}) {


  return (
     <ul className="painel-de-videos">
        {frota.map((auto)=>(
            <Item key={auto.id} bananinha={auto}/>
        ))}
     </ul>   
  )
}
