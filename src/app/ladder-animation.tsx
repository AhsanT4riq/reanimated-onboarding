import { FlatList, View, ViewToken } from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import CustomButton from '@/src/components/ladder/CustomButton';
import Onboarding from '@/src/components/ladder/Onboarding';
import Pagination from '@/src/components/ladder/Pagination';
import data, { OnboardingData } from '@/src/data/data';

export default function LadderAnimation() {
  const flatListRef = useAnimatedRef<FlatList<OnboardingData>>();
  const flatListIndex = useSharedValue(0);
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== null) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

  return (
    <View className="flex-1">
      <Animated.FlatList
        onScroll={onScroll}
        data={data}
        renderItem={({ item, index }) => <Onboarding data={item} index={index} x={x} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEventThrottle={16}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        ref={flatListRef}
        viewabilityConfig={{
          minimumViewTime: 100,
          viewAreaCoveragePercentThreshold: 10,
        }}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View className="absolute bottom-20 left-0 right-0 mx-[30px] py-[30px] flex-row items-center justify-between">
        <Pagination data={data} x={x} />
        <CustomButton
          flatListIndex={flatListIndex}
          flatListRef={flatListRef}
          dataLength={data.length}
          x={x}
        />
      </View>
    </View>
  );
}
