import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }: { letterClass: string; strArray: string[]; idx: number }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters