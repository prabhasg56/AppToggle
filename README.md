# AppToggle

AppToggle is a React Native project initialized using `@react-native-community/cli` with JavaScript.

## Getting Started

Follow the steps below to set up the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn** (Package managers for JavaScript)
- **React Native CLI** (If Installed globally, please uninstall first, it may cause runtime problems)
- **Android Studio** (For Android development)
- **Xcode** (For iOS development, macOS only)

### Installation

#### 1. Clone the Repository
```sh
 git clone https://github.com/prabhasg56/AppToggle.git
 cd AppToggle
```

#### 2. Install Dependencies
```sh
 npm install  # or yarn install
```

#### 3. Link Native Dependencies (if required)
```sh
 npx react-native link
```

### Running the Project

#### For Android
Make sure an Android emulator is running or a physical device is connected:
```sh
 npx react-native run-android
```

#### For iOS (Mac only)
Install CocoaPods dependencies:
```sh
 cd ios
 pod install
 cd ..
```
Then, run:
```sh
 npx react-native run-ios
```

### Additional Commands

#### Start Metro Bundler
```sh
 npx react-native start
```

#### Build and Run on a Specific Device (Android)
```sh
 npx react-native run-android --deviceId=<device-id>
```

#### Build and Run on a Specific Device (iOS)
```sh
 npx react-native run-ios --simulator="iPhone 14"
```

### Note For iOS Devices
- Some elements, such as icons, may not work properly because they are not configured correctly.

### Android SDK Configuration Issue
If you are facing Android SDK configuration issues, follow these steps:

#### Step 1: Locate the Android Folder
Open your terminal or file explorer and navigate to the `android` folder inside your project directory:
```sh
cd android
```

#### Step 2: Create the `local.properties` File
If the `local.properties` file does not exist, create it manually inside the `android` folder.

#### Step 3: Add Your SDK Directory
Open the `local.properties` file in a text editor and add the following line, replacing `/Users/test/Library/Android/sdk` with your actual Android SDK path:
```sh
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk  # macOS
sdk.dir=C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk  # Windows
```
For Linux users, the path is typically:
```sh
sdk.dir=/home/YOUR_USERNAME/Android/Sdk
```

#### Step 4: Save and Close
Save the file and close the editor. Now, you should be able to build and run your React Native project without SDK-related errors.

### Troubleshooting

- If you encounter build issues, try clearing the cache:
  ```sh
  npx react-native start --reset-cache
  ```
- If dependencies are not installed properly, try:
  ```sh
  rm -rf node_modules && npm install
  ```


