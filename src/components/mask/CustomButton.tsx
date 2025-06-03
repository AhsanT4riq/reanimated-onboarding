import { Pressable, useWindowDimensions } from 'react-native';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { colors } from '@/src/utils/tailwind';

interface CustomButtonProps {
  dataLength: number;
  x: SharedValue<number>;
  handlePress: () => void;
}

export default function CustomButton({ dataLength, x, handlePress }: CustomButtonProps) {
  const { height: SCREEN_HEIGHT } = useWindowDimensions();
  const animateColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_HEIGHT, SCREEN_HEIGHT * 2],
      [colors.green[0], colors.blue[0], colors.brown[0]], // Using your actual color values
    );
    return {
      backgroundColor,
    };
  });

  const buttonAnimationStyle = useAnimatedStyle(() => {
    return {
      width: x.value === 2 * SCREEN_HEIGHT ? withSpring(260) : 120,
      height: x.value === 2 * SCREEN_HEIGHT ? withSpring(80) : 120,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: x.value === 2 * SCREEN_HEIGHT ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX: x.value === 2 * SCREEN_HEIGHT ? withTiming(100) : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: x.value === 2 * SCREEN_HEIGHT ? withTiming(1) : withTiming(0),
      transform: [{ translateX: x.value === 2 * SCREEN_HEIGHT ? withTiming(0) : withTiming(-100) }],
    };
  });

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        className="w-[120px] h-[120px] bg-black justify-center items-center rounded-[100px]"
        style={[animateColor, buttonAnimationStyle]}
      >
        <Animated.Text className="absolute text-white font-bold text-xl" style={textAnimationStyle}>
          Get Started
        </Animated.Text>
        <Animated.Image
          source={require('@/src/assets/images/ArrowIcon.png')}
          style={arrowAnimationStyle}
        />
      </Animated.View>
    </Pressable>
  );
}
