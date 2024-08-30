import { cssInterop } from "nativewind";
import type { FC } from "react";
import { TextInput as RNTextInput, View } from "react-native";

cssInterop(RNTextInput, {
	className: {
		target: "style",
		nativeStyleToProp: {
			textAlign: true,
		},
	},
	placeholderClassName: {
		target: false,
		nativeStyleToProp: {
			color: "placeholderTextColor",
		},
	},
});

// It's not an error.
const Home: FC = () => {
	return (
		<View className="flex h-full items-center justify-center">
			<RNTextInput placeholder="type-C" className="w-1/2 bg-red-100 text-center text-xl" />
		</View>
	);
};

export default Home;
