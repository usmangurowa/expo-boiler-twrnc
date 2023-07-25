import Constants from "expo-constants";
import { Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

export const responsiveText = (fontSize: number, standardHeight = 680) => {
  const screenHeight = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === "ios" ? 78 : Constants.statusBarHeight;

  const deviceHeight =
    Platform.OS === "android" ? height - offset : screenHeight;

  return Math.round((fontSize * deviceHeight) / standardHeight);
};
