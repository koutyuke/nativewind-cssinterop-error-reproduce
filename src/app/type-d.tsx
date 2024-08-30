import { cssInterop } from "nativewind";
import type { FC } from "react";
import { TextInput, View } from "react-native";

cssInterop(TextInput, {
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

// Sometimes it is an error, sometimes it is not.
// This may be due to internal caching or memoization of `cssInterop` function processing.
// Unlike Type-B, cssInterop is declared here,
//   so it would be possible to reproduce it without error. The procedure is described below.
//
// 1. Run the app.
//
// Without changing anything in the code,
//   execute the following command to transition from the top page to this page.
//
// ```sh
// pnpm run ios -c
// ```
// If cache, etc., does not work, an error occurs here.
// If no error occurs, go to the next process.
//
// 2. Rerun the app with the comment out of the `cssInterop` function.
//
// Stop the expo that was started in step 1.
//
// Then comment out the cssInterop lines (5~18) and run it again.
// (Clear the cache.)
//
// ```sh
// pnpm run ios -c
// ```
//
// Then open the "type-d" page again.
// (There probably won't be any errors here either.)
//
// 3. Undo the comment-out and run again.
//
// Stop the expo that was started in step 2.
//
// Remove the comment-outs made in step 2 and run the application again.
// (Clear the cache.)
//
// ```sh
// pnpm run ios -c
// ```
// Then open the "type-d" page again.
// An error will occur here.
// (If you don't see an error, try the above steps again.)
const Home: FC = () => {
	return (
		<View className="flex h-full items-center justify-center">
			<TextInput
				placeholder="type-D"
				className="w-1/2 bg-red-100 text-center text-xl"
				placeholderClassName="text-black"
			/>
		</View>
	);
};

export default Home;
