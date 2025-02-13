import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
 
interface CityTabProps {
  city: string;
  link: string;
  info: string;
  image: any;
  setCurrentCity: (city: string) => void;
}
 
const CityTab: React.FC<CityTabProps> = ({ city, link, info, image, }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{city}</Text>
      <Image source={image} style={styles.cityImage} />
      <Text style={styles.cityInfo}>{info}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cityImage: {
    width: '100%',
    height: 200,
    marginVertical: 16,
  },
  cityInfo: {
    fontSize: 16,
    marginBottom: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
 
export default CityTab;