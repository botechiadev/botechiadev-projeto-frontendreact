import React from 'react'
import styled from 'styled-components'
import { CardRankingCtn } from './styled'
import { List } from '@chakra-ui/react'
export function CardRanking(){

const user ={
    id: 0,
    name: "perfil usuario",
    username: '@perfilModelo',
avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ryVJBJTTM4r-8AhpxZ_dNwHaHU%26pid%3DApi&f=1&ipt=d882fbe834b8c4c830f847fa48a67f8af53e7702944209e702cb41c372e01eed&ipo=images",
ranking: 34
  }
  return (
    <List>
    <CardRankingCtn>

    
          <div key={user.id}>
          <span>{user.ranking}</span>
            <h3>{user.username}</h3>
          <img src={user.avatar} alt={'avatar usuario'}/></div>
     

    </CardRankingCtn>
     </List>
  )
}

