import { Link } from "expo-router";
import type { FC } from "react";
import { View } from "react-native";

const Home: FC = () => {
	return (
		<View className="flex h-full flex-col items-center justify-center gap-4">
			<Link href="/type-a" className="text-blue-500 text-xl">
				Type-A
			</Link>
			<Link href="/type-b" className="text-blue-500 text-xl">
				Type-B
			</Link>
			<Link href="/type-c" className="text-blue-500 text-xl">
				Type-C
			</Link>
			<Link href="/type-d" className="text-blue-500 text-xl">
				Type-D
			</Link>
		</View>
	);
};

export default Home;
