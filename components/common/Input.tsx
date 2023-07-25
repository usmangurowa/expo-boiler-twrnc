// generate custom input component in react-native

import tw from "@/lib/tw";
import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { clf } from "class-flex";
import { View } from "../native";
import Text from "./Text";
import Divider from "./Divider";
type classTypes = {
  variant?: "primary";
  mode?: "contained" | "outlined" | "text";
  full?: boolean;
  rounded?: boolean;
  size?: "sm" | "md";
};

interface InputProps extends TextInputProps, classTypes {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

const classes = {
  root: clf(`border-primary text-primary border relative`, {
    variants: {
      full: {
        true: "w-full",
      },
      rounded: {
        true: "md:rounded-2xl rounded-xl",
        false: "rounded-none",
      },
      // size: {
      //   sm: `p-2`,
      //   md: `p-3`,
      // },
    },
    defaultVariants: {
      // size: "md",
      full: "true",
      rounded: "true",
    },
  }),

  input: clf(`font-montserrat-medium w-full`, {
    variants: {
      size: {
        sm: `px-2 py-1 md:py-2 -mt-2 text-sm`,
        md: `px-2 md:px-4 py-1 md:py-2 -mt-2 text-base md:text-sm`,
      },
    },
    defaultVariants: {
      size: "md",
    },
  }),
};

const Input: React.FC<InputProps> = ({
  className,
  size = "md",
  rounded = "true",
  full = "true",
  label,
  placeholderTextColor = "#9CA3AF",
  icon,
  ...rest
}) => {
  return (
    <View className={classes.root({ full, rounded })}>
      <Text className="mx-2 md:mx-4 mt-1 text-sm md:mt-1.5 text-primary">
        {label}
      </Text>
      <TextInput
        style={[tw.style(classes.input({ className, size }))]}
        {...rest}
        placeholderTextColor={placeholderTextColor}
      />
      {icon && (
        <View className="absolute flex items-center justify-center h-full right-2">
          {icon}
        </View>
      )}
    </View>
  );
};

export default Input;
