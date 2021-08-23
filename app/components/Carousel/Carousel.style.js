import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Carousel: {
    flex: 1,
    flexDirection: "row",
  },
  CarouselWrapText: {
    flexDirection: "row",
    position: "relative",
    bottom: "70%",
    alignSelf: "center",
  },
  CarouselText: {
    color: "#888",
    fontSize: 15,
    paddingHorizontal: 3,
  },
  CarouselTextActive: {
    color: "white",
    fontSize: 15,
    paddingHorizontal: 3,
  },
  ArrowLeftIcon: {
    width: 50,
    height: 50,
    transform: [{ rotate: "180deg" }],
  },
  ArrowLeft: {
    flex: 1,
    position: "absolute",
    top: "45%",
    left: 0,
  },
  ArrowRightIcon: {
    width: 50,
    height: 50,
  },
  ArrowRight: {
    flex: 1,
    position: "absolute",
    top: "45%",
    right: 0,
  },
  Base: { flex: 1 },
});

export default Styles;
