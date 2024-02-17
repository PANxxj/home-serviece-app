import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login/Login';
import { ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/navigations/TabNavigation';
import { useFonts } from 'expo-font';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <NavigationContainer>
    <TabNavigation/>
  </NavigationContainer>
    // <ClerkProvider 
    // tokenCache={tokenCache}
    // publishableKey='pk_test_bmVhdC1tb29zZS0yOC5jbGVyay5hY2NvdW50cy5kZXYk'>
      
    // <View style={styles.container}>



    //   {/* Sign in component */}
    //   <SignedIn>
    //       <NavigationContainer>
    //         <TabNavigation/>
    //       </NavigationContainer>
    //   </SignedIn>


    //    {/* Sign out component */}
    //   <SignedOut>
    //     {/* <Text>You are Signed out</Text> */}
    //     <Login/>
    //   </SignedOut>
    //   <StatusBar style="auto" />
    // </View>
    // </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
