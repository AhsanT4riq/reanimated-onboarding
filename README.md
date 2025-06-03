# Reanimated Onboarding

A beautiful, interactive onboarding experience built with React Native Reanimated 3 and Expo. This project showcases smooth animations, gesture handling, and a delightful user onboarding flow.

## Features

- 🎨 Smooth, buttery animations powered by React Native Reanimated 3
- ✨ Interactive onboarding slides with parallax effects
- 📱 Responsive design that works on both iOS and Android
- 🎯 Built with TypeScript for type safety
- 🎨 Styled with Tailwind CSS using NativeWind
- 🚀 Optimized performance with React Native Gesture Handler
- 🎭 Beautiful Lottie animations integration

## Demo

https://github.com/AhsanT4riq/reanimated-onboarding/raw/main/demo/demo.mov

## Tech Stack

- [Expo](https://expo.dev/) - Development platform
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) - For smooth animations
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/) - For gesture handling
- [NativeWind](https://www.nativewind.dev/) - Utility-first CSS framework
- [Lottie](https://airbnb.design/lottie/) - For beautiful animations
- [TypeScript](https://www.typescriptlang.org/) - For type safety

## Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS development) or Android Studio (for Android development)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/reanimated-onboarding.git
   cd reanimated-onboarding
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npx expo start
   ```

4. Run on your device/emulator:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your physical device

## Project Structure

```
src/
├── app/                 # App entry point and routes
├── components/          # Reusable components
│   ├── Onboarding.tsx   # Main onboarding component
│   ├── Pagination.tsx   # Custom pagination dots
│   ├── Dot.tsx          # Individual dot component
│   └── CustomButton.tsx # Custom button component
├── data/                # Data for onboarding slides
└── types/               # TypeScript type definitions
```

## Available Scripts

- `npm start` - Start the development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) for the amazing animation library
- [Expo](https://expo.dev/) for the wonderful development experience
- [Lottie](https://airbnb.design/lottie/) for the beautiful animations
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
