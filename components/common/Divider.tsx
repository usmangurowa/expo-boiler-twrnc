import React from "react";
import { View } from "../native";
import { clsx } from "class-flex";

const Divider = ({
  className,
  sp,
  b,
}: {
  className?: string;
  sp: "sm" | "lg";
  b?: boolean;
}) => (
  <View
    className={clsx(className, {
      "my-2": sp === "sm",
      "my-4": sp === "lg",
      "border-b border-slate-200": b,
    })}
  />
);

export default Divider;
