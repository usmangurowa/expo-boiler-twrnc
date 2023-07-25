import tw from "@/lib/tw";
import { clf } from "class-flex";

import React from "react";

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
} from "react-native";

type classTypes = {
  variant?: "primary";
  mode?: "contained" | "outlined" | "text";
  full?: boolean;
  rounded?: boolean;
  size?: "xs" | "sm" | "md";
};

interface ButtonProps extends TouchableOpacityProps, classTypes {
  title: string;
  className?: string;
  textClassName?: string;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

const btn = clf(
  `flex flex-row items-center justify-center font-montserrat-semibold`,
  {
    variants: {
      variant: {
        primary: {
          contained: `bg-primary text-white`,
          outlined: `border-primary text-primary`,
          text: `text-primary`,
        },
      },
      size: {
        xs: `px-2 py-1 md:py-2 text-xs`,
        sm: `px-4 py-3 md:py-4 text-sm`,
        md: `px-5 py-4 md:py-5 text-base`,
      },
      full: {
        true: "w-full",
      },
      rounded: {
        true: "md:rounded-2xl rounded-xl",
        false: "rounded-none",
      },
    },
    defaultVariants: {
      variant: {
        primary: "contained",
      },
      size: "md",
      full: "true",
      rounded: "true",
    },
  }
);

const Button: React.FC<ButtonProps> = ({
  title,
  className,
  textClassName,
  textStyle,
  style,
  variant = "primary",
  mode = "contained",
  full = true,
  rounded = true,
  size = "md",
  icon = null,
  ...rest
}) => {
  const btnClasses = React.useMemo(
    () =>
      btn({
        className,
        variant: {
          ["primary"]: "contained",
        },
        size: "md",
        full,
        rounded,
      }),
    [className, variant, mode, full, rounded, size]
  );
  const textClasses = React.useMemo(
    () =>
      btnClasses
        ?.split(" ")
        .filter((c) => c.startsWith("text-") || c.startsWith("font-"))
        .join(" "),
    [btnClasses]
  );
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[, style, tw.style(btnClasses)]}
      {...rest}
    >
      <Text style={[textStyle, tw.style(textClassName, textClasses)]}>
        {title}
      </Text>
      {icon ? icon : null}
    </TouchableOpacity>
  );
};

export default Button;
