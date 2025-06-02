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
    text: 'Order Instantly From Your Phone!',
    textColor: 'green',
    backgroundColor: 'green-500',
  },
  {
    id: 2,
    animation: require('../assets//animations/Lottie2.json'),
    text: 'Track Your Delivery in Real Time!',
    textColor: 'blue',
    backgroundColor: 'blue-500',
  },
  {
    id: 3,
    animation: require('../assets//animations/Lottie3.json'),
    text: 'Enjoy Fast, Reliable Delivery!',
    textColor: 'brown',
    backgroundColor: 'brown-500',
  },
];

export default data;
