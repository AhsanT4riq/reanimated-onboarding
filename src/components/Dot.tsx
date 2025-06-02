import { useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { colors } from '../utils/tailwind';

interface DotProps {
  index: number;
  x: SharedValue<number>;
}

export default function Dot({ index, x }: DotProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const dotAnimation = useAnimatedStyle(() => {
    const width = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
      [10, 20, 10],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      x.value,
      [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
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
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2],
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
