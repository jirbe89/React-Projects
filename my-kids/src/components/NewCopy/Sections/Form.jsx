import React from 'react'
import { useForm } from 'react-hook-form'

import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'

import styled from 'styled-components'
import { Button, Typography } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NativeSelect from '@mui/material/NativeSelect'
import Carousel from 'nuka-carousel'

import { useButtonStore } from '../../../store'
import img1 from '../../../resources/images/4.png'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;

  align-items: center;
`

const imgs = [
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img1
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img1
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img1
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img1
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img1
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img1
  }
]

const listImages = imgs =>
  imgs.map(img => (
    <div key={imgs.indexOf(img)}>
      <p>texto</p>
      <img src={img.url} alt={imgs.indexOf(img)} />
    </div>
  ))
const Car = styled(Carousel)`
  gap: 5em;
`
const TestForm = () => {
  //const [buttonText, setButtonText] = React.useState(arrBotones)
  const buttons = useButtonStore(state => state.buttonText)
  const listButtons = arr =>
    arr.map((button, index) => (
      <Button type='button' color='warning' variant='contained' key={index}>
        {button.name}
      </Button>
    ))
  const {
    register,
    handleSubmit
    /*   watch,
    formState: { errors }*/
  } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <Typography variant='h3'>Formulario</Typography>
          <TextField
            color='success'
            placeholder='Ex. Joaquin Irbe'
            {...register('fullName', { required: true, maxLength: 20 })}
            label='Full Name'
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
          <div>
            <InputLabel variant='standard' htmlFor='uncontrolled-native'>
              Gender
            </InputLabel>
            <NativeSelect defaultValue='Female' {...register('gender')}>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Other'>Other</option>
            </NativeSelect>
          </div>
          <Button
            variant='contained'
            type='submit'
            color='primary'
            onClick={useButtonStore(state => state.increaseButton)}
          >
            Submmit
          </Button>

          <Button
            variant='contained'
            type='reset'
            color='secondary'
            onClick={useButtonStore(state => state.removeAllButton)}
          >
            Erase
          </Button>
        </Div>
      </form>
      <div className='display'>{listButtons(buttons)}</div>

      <Car wrapAround slidesToShow={6}>
        {listImages(imgs)}
      </Car>

      <div></div>
    </div>
  )
}

export default TestForm
