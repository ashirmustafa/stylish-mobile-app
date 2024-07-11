import React from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

const items = [
    {
        id: 1,
        aspectratio: 150 / 200,
        color: "#ffcdd2",
    },
    {
        id: 2,
        aspectratio: 1,
        color: "#bbdefb",
    },
    {
        id: 3,
        aspectratio: 120 / 100,
        color: "#c8e6c9",
    },
    {
        id: 4,
        aspectratio: 200 / 150,
        color: "#ffccbc",
    },
    {
        id: 5,
        aspectratio: 375 / 400,
        color: "#d1c4e9",
    },
    {
        id: 6,
        aspectratio: 500 / 400,
        color: "#bbdefb",
    },
    {
        id: 7,
        aspectratio: 1040 / 500,
        color: "#ffcdd2",
    },
    {
        id: 8,
        aspectratio: 2 / 1,
        color: "#bbdefb",
    },
    {
        id: 9,
        aspectratio: 1,
        color: "#c8e6c9",
    },
    {
        id: 10,
        aspectratio: 375 / 400,
        color: "#ffccbc",
    },
    {
        id: 11,
        aspectratio: 1,
        color: "#d1c4e9",
    },
];

const App = () => {
    const width = Dimensions.get("window").width / 2;
    const Card = ({ width, color, aspectratio }) => {
        return (
            <>
                <View
                    style={{
                        backgroundColor: color,
                        width: width,
                        height: width * aspectratio,
                        marginBottom: 10,
                        borderRadius: 10,
                    }}
                />
                <Text>{color}</Text>
            </>
        );
    };

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Masonry View</Text>
            <ScrollView>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 5 }}>
                        {items
                            .filter((_, i) => i % 2 === 0)
                            .map(item => (
                                <Card key={item.id} width={width} aspectratio={item.aspectratio} color={item.color} />
                            ))}
                    </View>
                    <View style={{ marginLeft: 5 }} >
                        {items
                            .filter((_, i) => i % 2 !== 0)
                            .map(item => (
                                <Card key={item.id} width={width} aspectratio={item.aspectratio} color={item.color} />
                            ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    body: {
        padding: 10,
        alignItems: "center",
    },
    text: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
    },
});
