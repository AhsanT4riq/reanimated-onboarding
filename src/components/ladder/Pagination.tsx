import { View } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

import { OnboardingData } from '@/src/data/data';

import Dot from './Dot';

interface PaginationProps {
  data: OnboardingData[];
  x: SharedValue<number>;
}

export default function Pagination({ data, x }: PaginationProps) {
  return (
    <View className="flex-row items-center justify-center h-10">
      {data.map((_, index) => (
        <Dot key={index} index={index} x={x} />
      ))}
    </View>
  );
}
