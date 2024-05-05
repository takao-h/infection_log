import { button } from './button.css'

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button className={button} onClick={onClick}>
      {children}
    </button>
  )
}
