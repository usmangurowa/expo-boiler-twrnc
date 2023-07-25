import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import { View, ScrollView } from "@/components/native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Dimensions } from "react-native";
import Input from "@/components/common/Input";
import Divider from "@/components/common/Divider";
import { ArrowRight } from "iconsax-react-native";

const { width, height } = Dimensions.get("window");

const Main = () => {
  return (
    <SafeAreaView>
      <ScrollView className="container h-screen">
        <View className="flex items-center w-full min-h-screen">
          <Text className="text-5xl font-montserrat-light">Main</Text>
          <Text className="text-5xl font-montserrat-light">{width}</Text>
          <Button
            title="Button"
            className="justify-between"
            icon={<ArrowRight size={20} color="#fff" variant="Outline" />}
          />
          <Divider sp="sm" />
          <Input
            placeholder="Hello world"
            label="Username"
            icon={<ArrowRight size={20} color="#000" variant="Outline" />}
          />
        </View>
        <View className="flex items-center justify-center flex-1 w-full h-screen bg-primary-800">
          <Text>Main</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
