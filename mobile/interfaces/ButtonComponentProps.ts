import { GestureResponderEvent } from "react-native";

export interface ButtonComponentProps {
    children: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: object;
}