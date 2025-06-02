import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ONBOARDING_ITEMS = [
  {
    id: '1',
    title: 'Step Animation',
    route: 'ladder-animation',
  },
  {
    id: '2',
    title: 'Masking Animation',
    route: 'masking-animation',
  },
] as const;

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-4 py-8">
        <Text className="text-2xl font-bold mb-8 text-gray-800">Onboarding Animations</Text>
        <FlatList
          data={ONBOARDING_ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mb-4">
              <Link href={`/${item.route}`} asChild>
                <TouchableOpacity className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <Text className="text-blue-700 font-medium">{item.title}</Text>
                  <Text className="text-blue-400 text-sm mt-1">Tap to view</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <Text className="mt-4 text-gray-500 text-center">Select an animation to view</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
