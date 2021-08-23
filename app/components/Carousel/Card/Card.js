import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import Styles from "./Card.style";

function Card({ images }) {
  const random = (max, min) => Math.floor(Math.random() * (max - min)) + min;

  const num = random(images.length, 0);

  const image = images[num];

  return (
    <ScrollView horizontal contentContainerStyle={Styles.Card}>
      <View>
        <Image
          style={Styles.Img}
          source={{ uri: image, width: 300, height: 200 }}
        />
      </View>
    </ScrollView>
  );
}

export default React.memo(Card);
