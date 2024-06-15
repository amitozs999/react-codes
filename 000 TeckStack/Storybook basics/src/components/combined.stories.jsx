import React from 'react'
import { Primary } from './button/Button.stories'
import { Large } from './Input/Input.stories'

export default {
  title: 'Combined',
}

export const Combined = () => (
  <>
    <Large />
    <Primary />
  </>
)