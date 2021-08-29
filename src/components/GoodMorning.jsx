import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <>
    <h1>Good morning, {props.name}!</h1>
    <h2>See you later!</h2>
  </>

//Pode agrupar os elementos também por array
// export default props => [
//     <h1 key='h1'>Good morning, {props.name}!</h1>
//     <h2 key='h2'>See you later!</h2>
// ]