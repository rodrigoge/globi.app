import { Link, usePathname } from "expo-router";
import { StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/Octicons';
import colors from "@/colors";
import { useState } from "react";

export default function FooterComponent() {
    const [selectedTab, setSelectedTab] = useState<String>('');
    const pathname = usePathname();
    const handleTabSelect = (tab: String) => {
        setSelectedTab(tab);
    };

    return (
        <View style={styles.footer}>
            <Link
                href="/"
                style={styles.link}
                onPress={() => handleTabSelect('home')}
            >
                <Icon
                    name="pencil"
                    style={[
                        styles.icon,
                        {
                            color: pathname === '/' || selectedTab === 'home' ? colors.black : colors.grey
                        }
                    ]}
                />
            </Link>
            <Link
                href="/"
                style={styles.link}
                onPress={() => handleTabSelect('calendar')}
            >
                <Icon
                    name="calendar"
                    style={[
                        styles.icon,
                        {
                            color: pathname === '/calendar' || selectedTab === 'calendar' ? colors.black : colors.grey
                        }
                    ]}
                />
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        borderStyle: "solid",
        borderTopWidth: 1,
        borderTopColor: colors.grey,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        bottom: 0,
        zIndex: 999,
        height: 90
    },
    link: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
        width: '50%',
        height: '100%',
    },
    icon: {
        color: colors.black,
        fontSize: 40,
    }
})