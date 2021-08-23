import AsyncStorage from "@react-native-async-storage/async-storage";

export const data = [
  {
    title: "First Block",
    images: [
      "http://lorempixel.com/300/200/cats/1",
      "http://lorempixel.com/300/200/cats/2",
      "http://lorempixel.com/300/200/cats/3",
    ],
  },
  {
    title: "Second Block",
    images: [
      "http://lorempixel.com/300/200/food/1",
      "http://lorempixel.com/300/200/food/2",
      "http://lorempixel.com/300/200/food/3",
      "http://lorempixel.com/300/200/food/4",
      "http://lorempixel.com/300/200/food/5",
      "http://lorempixel.com/300/200/food/6",
    ],
  },
  {
    title: "Third Block",
    images: [
      "http://lorempixel.com/300/200/technics/1",
      "http://lorempixel.com/300/200/technics/2",
      "http://lorempixel.com/300/200/technics/3",
    ],
  },
  {
    title: "Fourth Block",
    images: [
      "http://lorempixel.com/300/200/people/1",
      "http://lorempixel.com/300/200/people/2",
      "http://lorempixel.com/300/200/people/3",
      "http://lorempixel.com/300/200/people/4",
      "http://lorempixel.com/300/200/people/5",
    ],
  },
];

export const _storeData = async (key, current) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(current));
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const _retrieveData = async (key, setValue) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      setValue(JSON.parse(value));
    }
  } catch (error) {
    console.log(error);
  }
};
