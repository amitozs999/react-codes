import React from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyForm/Button',
  component: Button,
  decorators: [
  
    (Story) => (
    
      <div style={{ margin: '3em' ,display:"flex",justifyContent:"center"}}>  
        <Story />
      </div>
      
    ),
  ],
}

export const Primary = () => <Button className='primary'>Primary</Button>
export const Secondary = () => <Button className='secondary'>Secondary</Button>
export const Success = () => <Button className='success'>Success</Button>
export const Danger = () => <Button className='danger'>Danger</Button>


const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args',
  onClick: action('on-clickji'),
  //  onClick: ()=> console.log("hanji") ,
  
}
PrimaryA.decorators = [

  (Story) => (
  
    <div style={{ margin: '10em' ,display:"flex",justifyContent:"center"}}>   
      <Story />
    </div>
    
  ),
];
export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args',
}