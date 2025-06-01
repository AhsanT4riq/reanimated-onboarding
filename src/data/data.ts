import { AnimationObject } from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Lottie1.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: 'green',
    backgroundColor: 'pink',
  },
  {
    id: 2,
    animation: require('../assets//animations/Lottie2.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: 'blue-dark',
    backgroundColor: 'blue-light',
  },
  {
    id: 3,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Lorem Ipsum dolor sit amet',
    textColor: 'orange',
    backgroundColor: 'yellow',
  },
];

export default data;
