import React, { useState } from 'react'
import RenderUser from './RenderUser'

function Registro (props) {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [estado, setEstado] = useState([])

  function addUser (e) {
    e.preventDefault()
    let usuario = {
      nombre: nombre,
      apellido: apellido
    }
    setEstado([...estado, usuario])
  }

  return (
    <>
      <form action='' onSubmit={e => addUser(e)}>
        <input
          onChange={e => setNombre(e.target.value)}
          type='text'
          id='nombre'
          name='nombre'
        />
        <input
          onChange={e => setApellido(e.target.value)}
          type='text'
          id='apellido'
          name='apellido'
        />
        <button>Registrarme</button>
      </form>

      <RenderUser user={estado} />
    </>
  )
}

export default Registro
