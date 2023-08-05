interface Props {
  title: string
  text: string | undefined
}

const InfoLine = ({ title, text = 'None' }: Props) => {
  return (
    <p>
      <span>{title}:</span> {text}
    </p>
  )
}

export default InfoLine
