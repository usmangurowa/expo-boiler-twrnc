import tw from "@/lib/tw";

import React from "react";
import {
  Text as TextNative,
  TextProps as TextProperties,
  TextStyle,
} from "react-native";

interface TextProps extends TextProperties {
  className?: string;
}

const Text: React.FC<TextProps> = ({ className, style, ...rest }) => {
  return <TextNative {...rest} style={[style, tw.style(className)]} />;
};

export default Text;
