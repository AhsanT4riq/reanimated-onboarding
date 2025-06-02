import { useRouter } from 'expo-router';
import { FlatList, Pressable, useWindowDimensions } from 'react-native';
import Animated, {
  AnimatedRef,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { OnboardingData } from '../data/data';
import { colors } from '../utils/tailwind';

interface CustomButtonProps {
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
  dataLength: number;
  x: SharedValue<number>;
}

export default function CustomButton({
  flatListIndex,
  flatListRef,
  dataLength,
  x,
}: CustomButtonProps) {
  const router = useRouter();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const animateWidth = useAnimatedStyle(() => {
    return {
      width: flatListIndex.value === dataLength - 1 ? withTiming(140) : withTiming(60),
    };
  });

  const animateColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, SCREEN_WIDTH * 2],
      [colors.green[0], colors.blue[0], colors.brown[0]], // Using your actual color values
    );
    return {
      backgroundColor,
    };
  });

  const arrowAnimation = useAnimatedStyle(() => {
    return {
      opacity: flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        { translateX: flatListIndex.value === dataLength - 1 ? withTiming(100) : withTiming(0) },
      ],
    };
  });

  const textAnimation = useAnimatedStyle(() => {
    return {
      opacity: flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        { translateX: flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(-100) },
      ],
    };
  });

  const handlePress = () => {
    if (flatListIndex.value < dataLength - 1) {
      flatListRef.current?.scrollToIndex({
        index: flatListIndex.value + 1,
        animated: true,
      });
    } else {
      router.replace('/');
    }
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={[animateWidth, animateColor]}
        className="bg-black p-[10px] rounded-[100px] justify-center items-center overflow-hidden w-[60px] h-[60px]"
      >
        <Animated.Text className="absolute text-white font-bold text-base" style={textAnimation}>
          Get Started
        </Animated.Text>
        <Animated.Image
          source={require('../assets/images/ArrowIcon.png')}
          className="absolute w-[30px] h-[30px]"
          style={arrowAnimation}
        />
      </Animated.View>
    </Pressable>
  );
}
