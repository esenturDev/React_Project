import React from 'react'
import { Button } from '../ul/button/Button'

export const Card = ({fetchz, setFetchz, onClickButtons}) => {
  return (
    <div>
      {fetchz.map((el) => (
        <div key={el.id}>
          <p>{el.value1}</p>
          <Button onClick={() => onClickButtons(el.id)}>DELETE</Button>
        </div>
      ))}
    </div>
  )
}
