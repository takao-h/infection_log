// button.css.ts
import { style } from '@vanilla-extract/css'

export const button = style({
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: 'darkblue',
  },
})
