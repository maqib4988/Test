
import React from 'react'
import { View, Text, Image } from 'react-native'
import { BELL, LOGO, PROFILE } from '../Confiq/StaticImages'
import Vector from '../Assets/Images/Vector.svg'
import Group from '../Assets/Images/Group.svg'

export default function Header(props) {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 14.48, paddingVertical: 19, backgroundColor: props?.backColor , borderBottomWidth:1, borderBottomColor:'#E4E4E4' }}>
            <View>
               <Group />
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{
                    width: 44,
                    height: 44,
                    backgroundColor: "#E9ECFF",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{
                        position: "absolute",
                        width: 20,
                        height: 20,
                        borderRadius: 100,
                        backgroundColor: "#C80000",
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center",
                        // right:'-5%',
                        top: "-25%",
                        left: 32
                    }}>
                        <Text style={{ color: "#fff", fontSize: 10, }}>12</Text>

                    </View>
                   <Vector />

                </View>
                <View style={{ marginLeft: 22, justifyContent: "center", alignItems: "center" }}>
                    <Image source={PROFILE} style={{ width: 44, height: 44, resizeMode: "contain", borderRadius: 100 }} />
                </View>
            </View>

        </View>
    )
}