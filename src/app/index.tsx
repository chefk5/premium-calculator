import { Link } from "expo-router";
import { Text } from "react-native";

export default function Page() {
  return (
    <>
      <Link href="/settings">settings</Link>
      <Text>home</Text>
    </>
  );
}
