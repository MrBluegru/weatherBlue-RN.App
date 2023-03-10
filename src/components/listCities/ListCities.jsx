import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import MinimalCard from "../card/MinimalCard";

const ListCities = () => {
  const cities = useSelector((state) => state.cities.cities);
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={({ item: city }) => (
          <MinimalCard city={city} btnDelete={true} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListCities;
