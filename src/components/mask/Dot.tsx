import { useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { colors } from '@/src/utils/tailwind';

interface DotProps {
  index: number;
  x: SharedValue<number>;
}

export default function Dot({ index, x }: DotProps) {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();

  const dotAnimation = useAnimatedStyle(() => {
    const width = interpolate(
      x.value,
      [(index - 1) * SCREEN_HEIGHT, index * SCREEN_HEIGHT, (index + 1) * SCREEN_HEIGHT],
      [10, 30, 10],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      x.value,
      [(index - 1) * SCREEN_HEIGHT, index * SCREEN_HEIGHT, (index + 1) * SCREEN_HEIGHT],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP,
    );
    return {
      width,
      opacity,
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_HEIGHT, SCREEN_HEIGHT * 2],
      [colors.green[0], colors.blue[0], colors.brown[0]], // Using your actual color values
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View
      className={`h-[10px] bg-black rounded-md mx-2`}
      style={[dotAnimation, animatedColor]}
    />
  );
}
