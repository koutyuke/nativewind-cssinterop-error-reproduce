import type { FC } from "react";
import { TextInput, View } from "react-native";

// Sometimes it is an error, sometimes it is not.
// This may be due to internal caching or memoization of `cssInterop` function processing.
// But there is no way to clear this (maybe I just don't know).
// So if the error does not appear the first time, it will probably never appear after that.
//
// (If you look at the screen, you can see that the text color of the placeHolder has not changed.
//  This means that the `cssInterop` function is not being processed correctly).
//
const Home: FC = () => {
	return (
		<View className="flex h-full items-center justify-center">
			<TextInput
				placeholder="type-B"
				className="w-1/2 bg-red-200 text-center text-xl"
				placeholderClassName="text-black"
			/>
		</View>
	);
};

export default Home;
