import LottieView from 'lottie-react-native';
import { RefObject } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';

import { OnboardingData } from '@/src/data/data';

interface OnboardingProps {
  data: OnboardingData;
  index: number;
  currentIndex: number;
  lottieRef: RefObject<LottieView | null>;
}

const getBackgroundColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    'green-500': 'bg-green-500',
    'blue-500': 'bg-blue-500',
    'brown-500': 'bg-brown-500',
  };
  return colorMap[color] || 'bg-gray-200';
};

const getTextColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    green: 'text-green',
    blue: 'text-blue',
    brown: 'text-brown',
  };

  return colorMap[color] || 'text-black';
};

export default function Onboarding({ data, index, currentIndex, lottieRef }: OnboardingProps) {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  if (index !== currentIndex) return null;

  return (
    <View
      className={`flex-1 items-center pt-safe pb-safe px-9 gap-10 ${getBackgroundColorClass(data.backgroundColor)}`}
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
    >
      <LottieView
        ref={lottieRef}
        source={data.animation}
        autoPlay
        loop
        style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
      />
      <Text className={`text-[40px] font-bold text-center ${getTextColorClass(data.textColor)}`}>
        {data.text}
      </Text>
    </View>
  );
}
