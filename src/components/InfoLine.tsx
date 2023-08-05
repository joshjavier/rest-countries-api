import { ReactNode } from 'react'

interface Props {
  title: string
  text?: string
  children?: ReactNode
}

const InfoLine = ({ title, text = 'None', children }: Props) => {
  return children ? (
    <div>
      <span>{title}:</span> {children}
    </div>
  ) : (
    <p>
      <span>{title}:</span> {text}
    </p>
  )
}

export default InfoLine
