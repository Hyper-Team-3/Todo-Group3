import { TypeAnimation } from 'react-type-animation';

export default function AnimatedText({ text, delay }) {
  return (
    <TypeAnimation
      sequence={[
        `${text}`, 
        delay,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  )
}





