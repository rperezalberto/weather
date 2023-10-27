import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';
import { Sunny2Icons, SunnyIcons } from '../assets/Icons';

const HomeScreen = () => {
    return (
        <View>
            <LinearGradient colors={["#06C5EF", "#0648F1"]} className="rounded-lg px-4" style={styles.containterGradiente}>
                <View className="flex-row mt-20 self-center items-center">
                    <MaterialIcons name="location-on" size={30} color="white" />
                    <Text className="ml-2 text-white text-2xl font-extrabold">Minsk</Text>
                </View>

                <View className="items-center">
                    <SunnyIcons />

                    <View>
                        <Text className="text-white text-9xl font-extrabold">29</Text>
                        <Text className="text-yellow-300 text-5xl font-medium">Cloudy</Text>
                        <Text className="text-white text-1xl self-center font-light">Monday, 17 May</Text>
                    </View>

                    <View className="w-full my-2" style={{ borderWidth: StyleSheet.hairlineWidth, borderColor: 'white', }} />

                    <View>
                        <View>
                            <Text>13 Km/h</Text>
                        </View>
                    </View>
                </View>

            </LinearGradient >

            <View className="">
                <Text>Hola mundo</Text>
            </View>
        </View >
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    containterGradiente: {
        // height: '80%',

        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});