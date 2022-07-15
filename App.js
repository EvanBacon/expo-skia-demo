import { View } from "react-native";

import { AsyncSkia } from "./src/AsyncSkia";
import { Fallback } from "./src/Fallback";

export default function App() {
  return (
    <View style={{ backgroundColor: "rgb(36,43,56)", flex: 1 }}>
      <AsyncSkia
        fallback={<Fallback />}
        getComponent={() => import("./src/Breathe")}
      />
    </View>
  );
}
