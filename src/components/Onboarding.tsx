import LottieView from 'lottie-react-native';
import { Text, useWindowDimensions, View } from 'react-native';
import Animated, { interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { OnboardingData } from '@/src/data/data';

interface OnboardingProps {
  data: OnboardingData;
  index: number;
  x: SharedValue<number>;
}

const getBackgroundColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    pink: 'bg-pink',
    'blue-light': 'bg-blue-light',
    yellow: 'bg-yellow',
  };
  return colorMap[color] || 'bg-gray-200';
};

const getTextColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    green: 'text-green',
    'blue-dark': 'text-blue-dark',
    orange: 'text-orange',
  };
  return colorMap[color] || 'text-black';
};

export default function Onboarding({ data, index, x }: OnboardingProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const lottieAnimation = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [200, 0, -200],
      'clamp',
    );
    return {
      transform: [{ translateY }],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [1, 4, 4],
      'clamp',
    );
    return {
      transform: [{ scale }],
    };
  });

  return (
    <View
      className="flex-1 justify-around items-center"
      style={{ width: SCREEN_WIDTH, marginBottom: 120 }}
    >
      <View className="absolute top-0 left-0 right-0 bottom-0 items-center justify-end">
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
            },
            circleAnimation,
          ]}
          className={getBackgroundColorClass(data.backgroundColor)}
        />
      </View>
      <Animated.View style={lottieAnimation}>
        <LottieView
          source={data.animation}
          autoPlay
          loop
          style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
        />
      </Animated.View>
      <Text
        className={`text-[44px] font-bold text-center mb-[10px] mx-5 ${getTextColorClass(data.textColor)}`}
      >
        {data.text}
      </Text>
    </View>
  );
}
