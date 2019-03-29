import React, {Fragment} from 'react'

const Membre = ({name, age, children}) => {
  return (
    <Fragment>
      <h2>Membre de ma famille : {name.toUpperCase()} : {age}</h2>

      {children ? <p>{children}</p> : <Fragment/>}
    </Fragment>
  )
}

export default Membre