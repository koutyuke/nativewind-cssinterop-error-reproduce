import type { FC } from "react";
import { TextInput, View } from "react-native";

// It's not an error.
const Home: FC = () => {
	return (
		<View className="flex h-full items-center justify-center">
			<TextInput placeholder="type-A" className="w-1/2 bg-red-200 text-center text-xl" />
		</View>
	);
};

export default Home;
