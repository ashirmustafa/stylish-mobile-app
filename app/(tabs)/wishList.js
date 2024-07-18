// import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";

// const items = [
//     { id: 1, uri: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/pc/i20_Modelpc.png", color: "#ffcdd2" },
//     { id: 2, uri: "https://faashwear.com/wp-content/uploads/2021/01/IMG_20210109_020344_925.jpg", color: "#bbdefb" },
//     { id: 3, uri: "https://easternfashion.pk/cdn/shop/files/16_de698feb-92fd-47fb-877f-ccf0c701792d.jpg?v=1704194736", color: "#c8e6c9" },
//     { id: 4, uri: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg", color: "#ffccbc" },
//     { id: 5, uri: "https://www.dressyzone.com/cdn/shop/collections/whte_1200x1200.jpg?v=1556014458", color: "#d1c4e9" },
//     { id: 6, uri: "https://gracestore.pk/cdn/shop/files/mc1129-mahoon--1_ttlvibo8a39xjxmv_497f6385-daa4-4607-915e-9755f724b254_1200x.jpg?v=1708761179", color: "#bbdefb" },
//     { id: 7, uri: "https://nilsonline.lk/image/cache/catalog/nils/product/046006090/NILS-046006090-WEB-04-612x875.jpg", color: "#ffcdd2" },
//     { id: 8, uri: "https://gaachi.pk/cdn/shop/files/Summer24_drop4_3540_1024x1024.jpg?v=1709880174", color: "#bbdefb" },
//     { id: 9, uri: "https://media.istockphoto.com/id/178851955/photo/flowery-evase-bateau-yellow-dress.jpg?s=612x612&w=0&k=20&c=EOJGCGC6dmFt0IQvbxq3PthCmNXO1flOpjYWC4KkcyQ=", color: "#c8e6c9" },
//     { id: 10, uri: "https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-7.jpg", color: "#ffccbc" },
// ];

// const WishList = () => {
//     const width = Dimensions.get("window").width / 2 - 15; // Adjust width to fit the screen
//     const [imageSizes, setImageSizes] = useState({});

//     useEffect(() => {
//         items.forEach(item => {
//             Image.getSize(item.uri, (width, height) => {
//                 setImageSizes(prevState => ({
//                     ...prevState,
//                     [item.id]: { width, height, aspectRatio: width / height }
//                 }));
//             });
//         });
//     }, []);

//     const Card = ({ uri, aspectRatio }) => {
//         return (
//             <View>
//                 <View style={[styles.card, { width: width, height: width / aspectRatio }]} className="pb-6 bg-white">
//                     <Image source={{ uri }} style={{ width: "100%", height: "100%", borderRadius: 10 }} />
//                     <View className="px-3">
//                         <Text className="font-normal">Black Winter</Text>
//                         <Text className="text-xs">Autumn And Winter Casual cotton-padded jacket...</Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <View>
//             <View style={styles.header}>
//                 <Image source={require('../../assets/burgerMenu.png')} />
//                 <Image source={require('../../assets/logo.png')} />
//                 <Image source={require('../../assets/avatar.png')} />
//             </View>

//             <View style={styles.searchContainer}>
//                 <Image source={require("../../assets/search.png")} style={styles.searchIcon} />
//                 <TextInput placeholder="Search any Product" style={styles.searchInput} />
//                 <Image source={require("../../assets/mic.png")} style={styles.micIcon} />
//             </View>

//             <View style={styles.sortFilterContainer}>
//                 <Text style={styles.itemCount}>52,082+ Items</Text>
//                 <View style={styles.sortFilterButtons}>
//                     <TouchableOpacity style={styles.sortFilterButton}>
//                         <Text>Sort</Text>
//                         <Image source={require('../../assets/arrows.png')} />
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.sortFilterButton}>
//                         <Text>Filter</Text>
//                         <Image source={require('../../assets/arrows.png')} />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             <ScrollView style={styles.scrollView} className="mt-5">
//                 <View style={styles.columnContainer}>
//                     <View style={styles.column}>
//                         {items
//                             .filter((_, i) => i % 2 === 0)
//                             .map(item => (
//                                 <Card
//                                     key={item.id}
//                                     uri={item.uri}
//                                     aspectRatio={imageSizes[item.id]?.aspectRatio || 1}
//                                 />
//                             ))}
//                     </View>
//                     <View style={styles.column}>
//                         {items
//                             .filter((_, i) => i % 2 !== 0)
//                             .map(item => (
//                                 <Card
//                                     key={item.id}
//                                     uri={item.uri}
//                                     aspectRatio={imageSizes[item.id]?.aspectRatio || 1}
//                                 />
//                             ))}
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingHorizontal: 20,
//         marginTop: 20,
//     },
//     searchContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: "white",
//         borderRadius: 10,
//         paddingHorizontal: 10,
//         marginVertical: 20,
//     },
//     searchIcon: {
//         width: 15,
//         marginRight: 10,
//     },
//     searchInput: {
//         flex: 1,
//     },
//     micIcon: {
//         position: "absolute",
//         right: 10,
//     },
//     sortFilterContainer: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         paddingHorizontal: 20,
//         alignItems: "center",
//     },
//     itemCount: {
//         fontSize: 16,
//         fontWeight: "bold",
//     },
//     sortFilterButtons: {
//         flexDirection: "row",
//     },
//     sortFilterButton: {
//         backgroundColor: "white",
//         borderRadius: 5,
//         flexDirection: "row",
//         alignItems: "center",
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         marginLeft: 10,
//     },
//     scrollView: {
//         paddingHorizontal: 10,
//     },
//     columnContainer: {
//         flexDirection: "row",
//     },
//     column: {
//         flex: 1,
//     },
//     card: {
//         marginBottom: 10,
//         borderRadius: 10,
//     },
// });

// export default WishList;



import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import StarRating from 'react-native-star-rating-widget';

const items = [
    { id: 1, uri: "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/pc/i20_Modelpc.png" },
    { id: 2, uri: "https://faashwear.com/wp-content/uploads/2021/01/IMG_20210109_020344_925.jpg" },
    { id: 3, uri: "https://easternfashion.pk/cdn/shop/files/16_de698feb-92fd-47fb-877f-ccf0c701792d.jpg?v=1704194736" },
    { id: 4, uri: "https://t3.ftcdn.net/jpg/00/96/74/82/360_F_96748234_L1OpQlE8LQJmmjGpeQZvcOVOkhxCPzCa.jpg" },
    { id: 5, uri: "https://www.dressyzone.com/cdn/shop/collections/whte_1200x1200.jpg?v=1556014458" },
    { id: 6, uri: "https://gracestore.pk/cdn/shop/files/mc1129-mahoon--1_ttlvibo8a39xjxmv_497f6385-daa4-4607-915e-9755f724b254_1200x.jpg?v=1708761179" },
    { id: 7, uri: "https://nilsonline.lk/image/cache/catalog/nils/product/046006090/NILS-046006090-WEB-04-612x875.jpg" },
    { id: 8, uri: "https://gaachi.pk/cdn/shop/files/Summer24_drop4_3540_1024x1024.jpg?v=1709880174" },
    { id: 9, uri: "https://media.istockphoto.com/id/178851955/photo/flowery-evase-bateau-yellow-dress.jpg?s=612x612&w=0&k=20&c=EOJGCGC6dmFt0IQvbxq3PthCmNXO1flOpjYWC4KkcyQ=" },
    { id: 10, uri: "https://iheartcraftythings.com/wp-content/uploads/2021/06/dress-7.jpg" },
];

const WishList = () => {
    const cardWidth = Dimensions.get("window").width / 2 - 20; // Adjust width to fit the screen
    const [imageSizes, setImageSizes] = useState({});

    useEffect(() => {
        items.forEach(item => {
            Image.getSize(item.uri, (width, height) => {
                setImageSizes(prevState => ({
                    ...prevState,
                    [item.id]: { width, height, aspectRatio: width / height }
                }));
            });
        });
    }, []);

    const Card = ({ uri, aspectRatio }) => {
        const imageHeight = cardWidth / aspectRatio;
        const cardHeight = imageHeight + 100; // Add space for the text

        return (
            <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
                <Image source={{ uri }} style={{ width: "100%", height: imageHeight, borderRadius: 10 }} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Black Winter</Text>
                    <Text style={styles.description}>Autumn And Winter Casual cotton-padded jacket...</Text>
                    <Text className="font-bold">₹499</Text>
                    <View className="flex-row mt-1">
                                                <StarRating
                                                    starStyle={{
                                                        marginHorizontal: -1
                                                    }}
                                                    rating={4.5}
                                                    starSize={14}
                                                    emptyColor='#bbbbbb'
                                                />
                                                <Text className="text-[10px] text-[#A4A9B3]"> 45,674</Text>
                                            </View>
                </View>
            </View>
        );
    };

    return (
        <View>
            <View className="px-5">
                    <View className="flex-row justify-between items-center mt-8">
                        <Image source={require('../../assets/burgerMenu.png')} />
                        <Image source={require('../../assets/logo.png')} />
                        <Image source={require('../../assets/avatar.png')} />
                    </View>

                    <View className="bg-white mt-5 flex-row items-center py-2 px-5 rounded-xl relative">
                        <Image
                            source={require("../../assets/search.png")}
                            className="mr-2 ml-1 w-[14.58px]"
                        />
                        <TextInput placeholder="Search any Product" />
                        <Image
                            source={require("../../assets/mic.png")}
                            className="absolute right-5"
                        />
                    </View>

                    <View className="flex-row justify-between mt-5">
                        <Text className="text-lg font-semibold">All Featured</Text>
                        <View className="flex-row">
                            <TouchableOpacity className="bg-white rounded-md flex-row items-center px-2 py-1 mr-3">
                                <Text className="mr-1">Sort</Text>
                                <Image source={require('../../assets/arrows.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-white rounded-md flex-row items-center px-2 py-1">
                                <Text className="mr-1">Filter</Text>
                                <Image source={require('../../assets/arrows.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            <ScrollView style={styles.scrollView} className="mt-5">
                <View style={styles.columnContainer}>
                    <View style={styles.column}>
                        {items
                            .filter((_, i) => i % 2 === 0)
                            .map(item => (
                                <Card
                                    key={item.id}
                                    uri={item.uri}
                                    aspectRatio={imageSizes[item.id]?.aspectRatio || 1}
                                />
                            ))}
                    </View>
                    <View style={styles.column}>
                        {items
                            .filter((_, i) => i % 2 !== 0)
                            .map(item => (
                                <Card
                                    key={item.id}
                                    uri={item.uri}
                                    aspectRatio={imageSizes[item.id]?.aspectRatio || 1}
                                />
                            ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    searchIcon: {
        width: 15,
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
    },
    micIcon: {
        position: "absolute",
        right: 10,
    },
    sortFilterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    itemCount: {
        fontSize: 16,
        fontWeight: "bold",
    },
    sortFilterButtons: {
        flexDirection: "row",
    },
    sortFilterButton: {
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
    },
    scrollView: {
        paddingHorizontal: 10,
    },
    columnContainer: {
        flexDirection: "row",
    },
    column: {
        flex: 1,
    },
    card: {
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: "white",
        overflow: "hidden",
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        fontSize: 12,
        color: "gray",
    },
});

export default WishList;
