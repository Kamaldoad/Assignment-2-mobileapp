import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CityTab from '../components/citiesPage';

const Tab = createBottomTabNavigator();
// Leftover from first attempts at changing header color based on city. Don't think its currently needed. -Daetan
interface HomeScreenProps {
  setCurrentCity: (city: string) => void;
}

export default function HomeScreen({ setCurrentCity }: HomeScreenProps) {
  return (
    <View style={styles.screen}>
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Welcome to My New App</Text>

      {/* Bottom Tab Navigator */}
      <View style={styles.tabContainer}>
        <Tab.Navigator screenOptions={{ tabBarStyle: styles.container }}>
          <Tab.Screen name="Calgary">
            {() => (
              <CityTab
                city="Calgary"
                link="https://www.calgary.ca/home.html"
                info="Calgary is known for its beautiful parks and the Calgary Stampede."
                image={require("../assets/calgary.jpg")}
                setCurrentCity={setCurrentCity}
              />
            )}
          </Tab.Screen>
          <Tab.Screen name="Edmonton">
            {() => (
              <CityTab
                city="Edmonton"
                link="https://www.edmonton.ca/"
                info="Edmonton is famous for its large mall and vibrant arts scene."
                image={require("../assets/Edmonton.jpg")}
                setCurrentCity={setCurrentCity}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  tabContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
