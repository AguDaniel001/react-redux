import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h5>Redux with React Hooks</h5>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
      <hr />
    </div>
  )
}

export default HooksCakeContainer