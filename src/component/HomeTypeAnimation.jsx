import { TypeAnimation } from 'react-type-animation';

export default function HomeTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Your fitness journey starts here',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'with the Muscle Foundry',
        1000,
        'Transform your body, elevate your life',
        1000,
        'Get Stronger, fitter, happier.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block' }}
      repeat={Infinity}
    />
  )
}
