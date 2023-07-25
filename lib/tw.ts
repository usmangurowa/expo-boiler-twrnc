import { TwConfig, create, plugin } from "twrnc";
import TWConfigFile from "../tailwind.config";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { responsiveText } from "./helper";

const { width, height } = Dimensions.get("window");

const config: TwConfig = {
  // ...TWConfigFile,
  theme: {
    ...TWConfigFile.theme,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        "safe-top": {
          paddingTop: Constants.statusBarHeight,
        },
        "safe-bottom": {
          paddingBottom: Constants.statusBarHeight,
        },
        container: `w-full px-4 mx-auto md:px-6 lg:px-8 tablet:px-10`,
        "resize-mode": {
          resizeMode: Constants.platform?.ios ? "contain" : "cover",
        },
        "h-screen": {
          height,
        },
        "w-screen": {
          width,
        },
        "min-h-screen": {
          minHeight: height,
        },
        "min-w-screen": {
          minWidth: width,
        },

        "h-80vh": {
          height: height * 0.8,
        },
        "h-70vh": {
          height: height * 0.7,
        },
        "h-60vh": {
          height: height * 0.6,
        },
        "h-50vh": {
          height: height * 0.5,
        },
        "h-40vh": {
          height: height * 0.4,
        },
        "h-30vh": {
          height: height * 0.3,
        },
        "h-20vh": {
          height: height * 0.2,
        },
        "h-10vh": {
          height: height * 0.1,
        },
        "text-xs": {
          fontSize: responsiveText(12),
        },
        "text-sm": {
          fontSize: responsiveText(14),
        },
        "text-base": {
          fontSize: responsiveText(16),
        },
        "text-lg": {
          fontSize: responsiveText(18),
        },
        "text-xl": {
          fontSize: responsiveText(20),
        },
        "text-2xl": {
          fontSize: responsiveText(24),
        },
        "text-3xl": {
          fontSize: responsiveText(30),
        },
        "text-4xl": {
          fontSize: responsiveText(36),
        },
        "text-5xl": {
          fontSize: responsiveText(48),
        },
        "font-montserrat-light": {
          fontFamily: "Montserrat_300Light",
        },
        "font-montserrat-regular": {
          fontFamily: "Montserrat_400Regular",
        },
        "font-montserrat-medium": {
          fontFamily: "Montserrat_500Medium",
        },
        "font-montserrat-semibold": {
          fontFamily: "Montserrat_600SemiBold",
        },
        "font-montserrat-bold": {
          fontFamily: "Montserrat_700Bold",
        },
        "font-montserrat-extrabold": {
          fontFamily: "Montserrat_800ExtraBold",
        },
        "font-montserrat-black": {
          fontFamily: "Montserrat_900Black",
        },
      });
    }),
  ],
};

const tw = create(config);

export default tw;
