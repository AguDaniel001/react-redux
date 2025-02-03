import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h5>Redux with Input Options</h5>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
      <hr />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps 
)(NewCakeContainer)