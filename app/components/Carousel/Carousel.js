import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Card from "./Card/Card";
import { data, _retrieveData, _storeData } from "../../lib";
import Styles from "./Carousel.style";

function Carousel() {
  const [ref, setRef] = useState(null);
  const [cords, setCords] = useState({});
  const [current, setCurrent] = useState(0);

  const windowWidth = Dimensions.get("window").width;
  const marginOfBock = (windowWidth - 300) / 2;

  useEffect(() => {
    _retrieveData("current", setCurrent);
  }, []);

  useEffect(() => {
    _storeData("current", current);
  }, [current]);

  const handleOnScroll = useCallback((e) => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const layoutMeasurement = e.nativeEvent.layoutMeasurement.width;
    const currenBlock = Math.ceil(contentOffset / layoutMeasurement);
    setCurrent(currenBlock);
  });

  const nextBlock = () => {
    ref.scrollTo({
      x: cords[current + 1] - marginOfBock,
      y: 0,
      animated: true,
    });
  };

  const prevBlock = () => {
    ref.scrollTo({
      x: cords[current - 1] - marginOfBock,
      y: 0,
      animated: true,
    });
    setCurrent(current - 1);
  };

  const handleOnLayout = (e, index) => {
    const layout = e.nativeEvent.layout;
    cords[index] = layout.x;
    setCords(cords);
  };

  return (
    <View style={Styles.Base}>
      <View
        style={Styles.Base}
        onLayout={() =>
          ref.scrollTo({
            x: cords[current] - marginOfBock,
            y: 0,
            animated: true,
          })
        }
      >
        <ScrollView
          style={Styles.Carousel}
          ref={(ref) => setRef(ref)}
          horizontal
          onScroll={handleOnScroll}
          showsHorizontalScrollIndicator={false}
        >
          {data.map(({ title, images }, index) => (
            <View key={title} onLayout={(e) => handleOnLayout(e, index)}>
              <Card images={images} />
            </View>
          ))}
        </ScrollView>
        <View style={Styles.CarouselWrapText}>
          {data.map((block, index) => (
            <Text
              key={index}
              style={
                current === index
                  ? Styles.CarouselTextActive
                  : Styles.CarouselText
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>

      {data.length > current + 1 && (
        <TouchableOpacity onPress={nextBlock} style={Styles.ArrowRight}>
          <Image
            style={Styles.ArrowRightIcon}
            source={require("../../assets/right-arrow.png")}
          ></Image>
        </TouchableOpacity>
      )}
      {current !== 0 && (
        <TouchableOpacity onPress={prevBlock} style={Styles.ArrowLeft}>
          <Image
            style={Styles.ArrowLeftIcon}
            source={require("../../assets/right-arrow.png")}
          ></Image>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Carousel;
