import { useMemo } from 'react';
import { ActivityIndicator, Animated, Text } from 'react-native';

export function Fallback() {
    const anim = useMemo(() => {
        const value = new Animated.Value(0);

        Animated.timing(value, {
            useNativeDriver: false,
            toValue: 1,
            duration: 500,
        }).start();

        return value;
    }, []);

    return (
        <Animated.View
            style={{
                alignItems: "center",
                flex: 1,
                justifyContent: "center",
                opacity: anim,
                transform: [{ scale: anim }],
            }}
        >
            <ActivityIndicator size={"large"} color="#61bea2" />
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: 8,
                    color: "#61bea2",
                }}
            >
                Loading CanvasKit...
            </Text>
        </Animated.View>
    );
}
