# cssinterop-error-reproduce

This is a repository for reproducing errors in nativewind's cssinterop.

[Issue - [4.1 BUG] CssInterop Throw Error "TypeError: right operand of 'in' is not an object" AND Fix PR Question(#1012)](https://github.com/nativewind/nativewind/issues/1012)

<img width="320" alt="image" src="https://github.com/user-attachments/assets/656f9a97-607b-4836-8321-113cf14eaa3c">

# Environment

node - v22.7.0

pnpm - v9.9.0

nativewind - v4.1.1

react-native-css-interop - v0.1.1

macOS - 14.6.1（23G93）

Simulator - iPhone 15 Pro (iOS 17.5)

AND Expo Go App

# Set up

```sh
# install
> pnpm i

# start
> pnpm run ios -c
```

# Pages

## Home

Links to each page are placed.

## Type-A

🟢 It's not an error.

The code on this page is for checking the operation of CssInterop, which is executed by default.

It should be as follows.

<img width="320" alt="image" src="https://github.com/user-attachments/assets/84bd5075-bbe4-4b71-8dc9-f6ed85178963">

## Type-B

🟥 Sometimes it is an error, sometimes it is not.

The code on this page passes a value to the `placeholderClassName` that causes the error.

However, sometimes it is not an error.

This may be due to internal caching or memoization of `cssInterop` function processing.

But there is no way to clear this (maybe I just don't know).

So if the error does not appear the first time, it will probably never appear after that.

(If you look at the screen, you can see that the text color of the placeHolder has not changed. This means that the `cssInterop` function is not being processed correctly).

<img width="320" alt="image" src="https://github.com/user-attachments/assets/656f9a97-607b-4836-8321-113cf14eaa3c">

## Type-C

🟢 It's not an error.

The code on this page is for checking the operation of the `cssInterop` function.

It should be as follows.

<img width="320" alt="image" src="https://github.com/user-attachments/assets/84bd5075-bbe4-4b71-8dc9-f6ed85178963">

## Type-D

🟥 Sometimes it is an error, sometimes it is not.

The code on this page passes a value to the `placeholderClassName` that causes the error

Sometimes it is an error, sometimes it is no
This may be due to internal caching or memoization of `cssInterop` function processing.

Unlike Type-B, cssInterop is declared her so it would be possible to reproduce it without error. The procedure is described below.

### 1. Run the app

Without changing anything in the code, execute the following command to transition from the top page to this page.

```
pnpm run ios -c
```

If cache, etc., does not work, an error occurs here.

If no error occurs, go to the next process.

### 2. Rerun the app with the comment out of the `cssInterop` function.

Stop the expo that was started in step 1.

Then comment out the cssInterop lines (5~18) and run it again.

(Clear the cache.)

```ts
import { cssInterop } from "nativewind";
import type { FC } from "react";
import { TextInput, View } from "react-native";

// cssInterop(TextInput, {
// 	className: {
// 		target: "style",
// 		nativeStyleToProp: {
// 			textAlign: true,
// 		},
// 	},
// 	placeholderClassName: {
// 		target: false,
// 		nativeStyleToProp: {
// 			color: "placeholderTextColor",
// 		},
// 	},
// });

const Home: FC = () => {
	...
};

export default Home;

```

```
pnpm run ios -c
```

Then open the "type-d" page again.

(There probably won't be any errors here either.)

### 3. Undo the comment-out and run again.

Stop the expo that was started in step 2.

Remove the comment-outs made in step 2 and run the application again.
(Clear the cache.)

```ts
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

const Home: FC = () => {
	...
};

export default Home;

```

```
pnpm run ios -c
```

Then open the "type-d" page again. An error will occur her.

(If you don't see an error, try the above steps again.)

<img width="320" alt="image" src="https://github.com/user-attachments/assets/656f9a97-607b-4836-8321-113cf14eaa3c">

# About This Error

This error occurs when the class is passed to Props where the vlaue target of the Object passed as the second argument of CssInterop is false (boolean).

The cause is omitted.

Taking Type-D as an example, passing a class to a `className` with `style` in target does not cause an error, but passing a class to a `placeholderClassName` with `false` in target causes an error.

```ts
// type-d.tsx

cssInterop(TextInput, {
  className: {
    target: "style", // Not the cause.
    nativeStyleToProp: {
      textAlign: true,
    },
  },
  placeholderClassName: {
    target: false, // Cause of Error
    nativeStyleToProp: {
      color: "placeholderTextColor",
    },
  },
});

const Home: FC = () => {
  return (
    <View className="flex h-full items-center justify-center">
      <TextInput
        placeholder="type-D"
        className="w-1/2 bg-red-100 text-center text-xl"
        placeholderClassName="text-black" // Error...
      />
    </View>
  );
};

export default Home;
```
