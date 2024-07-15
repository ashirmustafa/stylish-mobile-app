import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
export default function Checkout() {
  return (
    <>
      <View className="px-5 mt-5">
        <View className="flex-row justify-between mt-10 items-center">
          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="black"
            onPress={() => expoRouter.back()}
          />
          <Text className="text-lg font-semibold">Checkout</Text>
          <View className="invisible" />
        </View>
      </View>
      <View className="bg-[#C4C4C4] h-[1px] w-full my-4" />

      <View className="px-5">
        <View className="flex-row  gap-1">
          <EvilIcons name="location" size={24} color="black" />
          <Text className="font-bold">Delivery Address</Text>
        </View>

        <View className="flex-row justify-between items-center ">
          <View className="w-[241px] bg-white p-3 rounded-xl mt-4">
            <View className="flex-row justify-between mb-2">
              <Text>Address:</Text>
              <FontAwesome name="pencil-square-o" size={24} color="black" />
            </View>
            <Text>
              216 St Paul's Rd, London N1 2LL, UK Contact : +44-784232
            </Text>
          </View>
          <View className="bg-white self-stretch items-center justify-center p-6 rounded-xl mt-4">
            <Ionicons name="add-circle-outline" size={34} color="black" />
          </View>
        </View>

        <View className="mt-5 mb-3">
          <Text className="font-bold">Shopping List</Text>
        </View>
        <ScrollView>
          {[0,1,2,3,4].map((index) => (
            <TouchableOpacity style={styles.container} key={index}>
            <View style={styles.row}>
              <Image source={require("../assets/shoppingList.png")} />
              <View style={styles.details}>
                <View>
                  <Text style={styles.title}>Women's casual Wear</Text>
                  <View style={styles.variationsRow}>
                    <Text>Variations:</Text>
                    <View style={styles.variations}>
                      <View style={styles.variation} className="mx-1">
                        <Text>Black</Text>
                      </View>
                      <View
                        style={[styles.variation, styles.ml2]}
                        className="mx-1"
                      >
                        <Text>Red</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.ratingRow}>
                    <Text style={styles.rating}>4.8</Text>
                    <StarRating
                      starStyle={styles.star}
                      rating={4.5}
                      starSize={18}
                      emptyColor="#bbbbbb"
                    />
                  </View>
                  <View style={styles.priceRow}>
                    <View style={styles.price}>
                      <Text style={styles.bold}>$ 34.00</Text>
                    </View>
                    <View className="ml-2">
                      <Text style={styles.discount}>upto 33% off</Text>
                      <Text style={styles.originalPrice}>$ 66.00</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.orderRow}>
              <Text>Total Order (1) :</Text>
              <Text style={styles.bold}>$ 34.00</Text>
            </View>
          </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    paddingBottom: 12,
    paddingTop: 8,
    paddingHorizontal: 8,
    marginVertical: 5
  },
  row: {
    flexDirection: "row",
  },
  details: {
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  variationsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  variations: {
    flexDirection: "row",
  },
  variation: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 2,
    paddingHorizontal: 4,
  },
  ml2: {
    marginLeft: 8,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    fontSize: 14,
    marginRight: 8,
  },
  star: {
    marginHorizontal: -1,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  price: {
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  bold: {
    fontWeight: "bold",
  },
  discount: {
    color: "red",
    fontSize: 12,
  },
  originalPrice: {
    color: "gray",
  },
  divider: {
    backgroundColor: "#C4C4C4",
    height: 1,
    width: "100%",
    marginVertical: 16,
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
