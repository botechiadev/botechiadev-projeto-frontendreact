import React from 'react'

export default function InfoUsuario({userData}) {
    const {id, nickname, avatarImg} = userData
  return (
    <div>
      <h3>{nickname}</h3>
      <img src={avatarImg} alt={nickname}/>
    </div>
  )
}
