import tw from "@/lib/tw";
import {
  View as DefaultView,
  ViewProps,
  ScrollView as ScrollViewNative,
  ScrollViewProps,
} from "react-native";

export function View({
  className,
  style,
  ...props
}: ViewProps & { className?: string }) {
  return <DefaultView {...props} style={[style, tw.style(className || "")]} />;
}

export function ScrollView({
  className,
  style,
  ...props
}: ScrollViewProps & { className?: string }) {
  return <ScrollViewNative {...props} style={[style, tw.style(className)]} />;
}
