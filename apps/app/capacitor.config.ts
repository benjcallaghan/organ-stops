import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.walkingriver.organstops',
  appName: 'Organ Stops',
  webDir: '../../dist/apps/app',
  bundledWebRuntime: false,
  plugins: {
    FirebaseAuthentication: {
      providers: ['google.com', 'facebook.com'],
    }
  }
};

export default config;