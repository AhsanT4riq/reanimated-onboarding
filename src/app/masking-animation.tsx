import {
  Canvas,
  Circle,
  Group,
  Image,
  makeImageFromView,
  Mask,
  SkImage,
} from '@shopify/react-native-skia';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { cssInterop } from 'nativewind';
import { useRef, useState } from 'react';
import { PixelRatio, useWindowDimensions, View } from 'react-native';
import { runOnJS, useSharedValue, withTiming } from 'react-native-reanimated';

import CustomButton from '@/src/components/mask/CustomButton';
import Onboarding from '@/src/components/mask/Onboarding';
import Pagination from '@/src/components/mask/Pagination';
import data from '@/src/data/data';
import { wait } from '@/src/utils/wait';

cssInterop(Canvas, {
  className: {
    target: 'style',
  },
});

export default function MaskingAnimation() {
  const pd = PixelRatio.get();
  const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef<any>(null);
  const lottieRef = useRef<LottieView>(null);
  const [overlay, setOverlay] = useState<SkImage | null>(null);
  const x = useSharedValue(0);
  const mask = useSharedValue(0);
  const router = useRouter();

  const handlePress = async () => {
    if (currentIndex === data.length - 1 && !active) {
      router.replace('/');
      return;
    }
    if (!active) {
      setActive(true);
      lottieRef.current?.pause();
      // Create the snapshot and set it before any state changes or animations
      const snapshot1 = await makeImageFromView(ref);
      setOverlay(snapshot1);
      await wait(80);
      setCurrentIndex((prev) => prev + 1);
      // Start the animations
      mask.value = withTiming(SCREEN_HEIGHT, { duration: 1000 });
      x.value = withTiming(x.value + SCREEN_HEIGHT, { duration: 1000 }, (finished) => {
        if (finished) {
          // Reset mask first, then clear overlay to prevent flicker
          mask.value = 0;
          runOnJS(setOverlay)(null);
          runOnJS(setActive)(false);
        }
      });
      lottieRef.current?.play();
    }
  };

  return (
    <View className="flex-1 items-center">
      <View ref={ref} collapsable={false} className="flex-1">
        {data.map((item, index) => (
          <Onboarding
            key={index}
            data={item}
            index={index}
            currentIndex={currentIndex}
            lottieRef={lottieRef}
          />
        ))}
      </View>
      {/* Masking Animation */}
      {overlay && (
        <Canvas className="absolute top-0 left-0 right-0 bottom-0" pointerEvents="none">
          <Mask
            mode="luminance"
            mask={
              <Group>
                <Circle
                  cx={SCREEN_WIDTH / 2}
                  cy={SCREEN_HEIGHT - 170}
                  r={SCREEN_HEIGHT}
                  color="white"
                />
                <Circle cx={SCREEN_WIDTH / 2} cy={SCREEN_HEIGHT - 170} r={mask} color="black" />
              </Group>
            }
          >
            <Image
              image={overlay}
              x={0}
              y={0}
              width={overlay.width() / pd}
              height={overlay.height() / pd}
            />
          </Mask>
        </Canvas>
      )}
      <View className="absolute bottom-20 left-0 right-0 mx-[30px] items-center justify-between gap-2">
        <CustomButton dataLength={data.length} x={x} handlePress={handlePress} />
        <Pagination data={data} x={x} />
      </View>
    </View>
  );
}
