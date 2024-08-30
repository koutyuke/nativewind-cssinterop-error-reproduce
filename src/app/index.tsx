import type { FC } from "react";
import { Text, View } from "react-native";

const Home: FC = () => {
	return (
		<View className="flex h-full items-center justify-center">
			<Text className="text-red-500">Home</Text>
		</View>
	);
};

export default Home;
