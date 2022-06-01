import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView, Dimensions , StatusBar ,   } from 'react-native'
import React, { useState , useEffect } from 'react'
import Header from '../Component/Header'


const prev = [
    {
        title: 'SP_M_112',
        Date: "Dec 16, 2020 1:00 PM",
        desp: 'I need payment extensions for  my commercial shop unit. ',
        status: 1
    },
    {
        title: 'SP_M_112',
        Date: "Dec 16, 2020 1:00 PM",
        desp: 'I need payment extensions for  my commercial shop unit. ',
        status: 0
    },
    {
        title: 'SP_M_112',
        Date: "Dec 16, 2020 1:00 PM",
        desp: 'I need payment extensions for  my commercial shop unit. ',
        status: 1
    },
    {
        title: 'SP_M_112',
        Date: "Dec 16, 2020 1:00 PM",
        desp: 'I need payment extensions for  my commercial shop unit. ',
        status: 2
    },
    {
        title: 'SP_M_112',
        Date: "Dec 16, 2020 1:00 PM",
        desp: 'I need payment extensions for  my commercial shop unit. ',
        status: 1
    },
    {
        title: 'SP_M_112',
        Date: "Dec 16, 2020 1:00 PM",
        desp: 'I need payment extensions for  my commercial shop unit. ',
        status: 1
    },
]

export default function Inquire(props) {
    const [previous, setprevious] = useState(true)
    useEffect(()=> {
        const unsubscribe = props.navigation.addListener('focus', () => {
            StatusBar.setBackgroundColor('#fff')
          });
      
          // Return the function to unsubscribe from the event so it gets removed on unmount
          return unsubscribe;
    } ,[props.navigation])
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'red'
        }}>
             {/* <StatusBar  backgroundColor="#fff"  barStyle={'dark-content'} /> */}
            <Header backColor="#fff" />
            <ScrollView horizontal={false}>
                <ScrollView horizontal={true}>
                    <View style={{
                        paddingVertical: 15,
                        paddingLeft: 9,
                        paddingRight: 29,
                        flex: 1,
                        backgroundColor: "#fff",
                        width: Dimensions.get('screen').width,

                    }}>
                        <View style={{
                            height: 43,
                            width: '90%',
                            backgroundColor: "#FDFCFC",
                            borderRadius: 6,
                            flexDirection: "row",
                            paddingVertical: 5,
                            paddingHorizontal: 6
                        }}>
                            <TouchableOpacity
                                onPress={() => setprevious(true)}
                                style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    backgroundColor: previous ? '#fff' : "#FDFCFC",
                                    elevation: previous ? 3 : 0,
                                    borderRadius: 4,


                                }}>
                                <Text style={{
                                    color: previous ? '#221F1F' : '#969BA0',
                                    fontSize: 15,
                                    fontFamily: "Poppins-Medium",
                                    fontWeight: '500'
                                }}>
                                    Previous Inquiries
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setprevious(false)}
                                style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    backgroundColor: previous ? '#FDFCFC' : "#fff",

                                    elevation: previous ? 0 : 3,
                                    borderRadius: 4,
                                    marginLeft: 20
                                }}>
                                <Text style={{
                                    color: previous ? '#969BA0' : '#221F1F',
                                    fontSize: 15,
                                    fontFamily: "Poppins-Medium",
                                    fontWeight: '500',
                                    textAlign: "center"
                                }}>
                                    Make New Inquiry
                                </Text>
                            </TouchableOpacity>

                        </View>
                        {previous ? (
                            <View>
                                <FlatList
                                    data={prev}
                                    keyExtractor={(item, index) => index}
                                    ListFooterComponent={() => {
                                        return (
                                            <View style={{ height: 30 }} />
                                        )

                                    }}
                                    renderItem={({ item, key }) => {
                                        console.log(item)
                                        return (
                                            <View style={{
                                                marginTop: 28,
                                                paddingHorizontal: 15,
                                                backgroundColor:'#fff'
                                            }}>
                                                <Text style={{ color: "#005FFF", fontSize: 14, textDecorationLine: "underline" }}>{item.title}</Text>
                                                <Text style={{ color: "#075595", fontSize: 12, marginTop: 8, fontFamily: "Poppins-Medium", fontWeight: '500' }}>{item.Date}</Text>
                                                <Text style={{ color: "#221F1F", fontSize: 16, fontWeight: "500", lineHeight: 24 }}>{item.desp}</Text>
                                                <View style={{ flexDirection: "row" }}>
                                                    <Text style={{ color: '#221F1F', fontSize: 14, fontWeight: '400', marginTop: 2 }}>Status: </Text>
                                                    <Text style={{ color: item.status == 0 ? '#FA7F25' : item.status == 1 ? "#2DA52D" : "#075595", fontSize: 14, fontWeight: '400', marginTop: 2 }}>{item.status == 0 ? "Pending" : item.status == 1 ? "Resolved" : "In Progress"}</Text>

                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>

                        ) :
                            <>
                                <View style={{ marginTop: 32 }}>
                                    <Text style={{ color: "#221F1F", fontSize: 16, fontWeight: '400' }}>Inquiry Subject</Text>
                                    <TextInput
                                        placeholder='Enter subject here'
                                        placeholderTextColor={'#959595'}
                                        style={{
                                            borderRadius: 5,
                                            height: 44,
                                            backgroundColor: '#F8F8F8',
                                            borderWidth: 1,
                                            borderColor: '#B9B9B9',
                                            marginTop: 20,
                                            paddingHorizontal: 13,
                                            fontStyle: "italic",
                                            fontSize: 12,
                                            color:"#959595"
                                        }}
                                    />
                                </View>
                                <View style={{
                                    height: 43,
                                    width: '90%',
                                    backgroundColor: "#F4F5F9",
                                    borderRadius: 6,
                                    flexDirection: "row",
                                    paddingVertical: 5,
                                    paddingHorizontal: 6,
                                    marginTop:30
                                }}>
                                    <TouchableOpacity
                                      
                                        style={{
                                            paddingVertical: 5,
                                            paddingHorizontal: 18,
                                            backgroundColor:  '#E9ECFF' ,
                                            justifyContent:"center",
                                            elevation:  3 ,
                                            borderRadius: 4,


                                        }}>
                                        <Text style={{
                                            color: '#075595',
                                            fontSize: 12,
                                            fontFamily: "Poppins-Medium",
                                            fontWeight: '500'
                                        }}>
                                           Accounts and Billing
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            paddingVertical: 5,
                                            paddingHorizontal: 10,
                                            backgroundColor:  '#F4F5F9',
                                            justifyContent:"center",

                                            elevation: 0 ,
                                            borderRadius: 4,
                                            marginLeft: 20
                                        }}>
                                        <Text style={{
                                            color:  '#969BA0',
                                            fontSize: 12,
                                            fontFamily: "Poppins-Medium",
                                            fontWeight: '500',
                                            textAlign: "center"
                                        }}>
                                            General Inquiry
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ color: "#221F1F", fontSize: 16, fontWeight: '400' }}>Description</Text>
                                    <TextInput
                                        placeholder='Enter subject here'
                                        placeholderTextColor={'#959595'}
                                        multiline={true}
                                        numberOfLines={10}
                                        textAlignVertical='top'
                                        style={{
                                            borderRadius: 5,

                                            backgroundColor: '#F8F8F8',
                                            borderWidth: 1,
                                            borderColor: '#B9B9B9',
                                            marginTop: 20,
                                            paddingTop: 21,
                                            paddingHorizontal: 13,
                                            fontStyle: "italic",
                                            fontSize: 12,
                                            color:"#959595"
                                        }}
                                    />
                                </View>
                                <View style={{ marginTop: 32 }}>
                                    <Text style={{ color: "#221F1F", fontSize: 16, fontWeight: '400' }}>Attachment</Text>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <View style={{
                                        flexDirection: "row"
                                    }}>
                                        <TouchableOpacity style={{
                                            paddingVertical: 10,
                                            paddingHorizontal: 10,
                                            backgroundColor: '#221F1F'
                                        }}>
                                            <Text style={{ color: "#fff", fontSize: 14, fontWeight: '400' }}>Choose File</Text>

                                        </TouchableOpacity>
                                        <View style={{ justifyContent: "center", marginLeft: 12 }}>
                                            <Text style={{ color: "#6F6F6F", fontSize: 14, fontWeight: '400' }}>No file chosen</Text>
                                        </View>

                                    </View>


                                </View>
                                <View style={{ marginTop: 20, flexDirection: "row-reverse" }}>
                                    <TouchableOpacity style={{
                                        paddingVertical: 6,
                                        paddingHorizontal: 10,
                                        backgroundColor: '#075595',
                                        marginLeft: 25
                                    }}>
                                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: '400' }}>Save Details</Text>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={{
                                        paddingVertical: 6,
                                        paddingHorizontal: 10,
                                        backgroundColor: '#221F1F'
                                    }}>
                                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: '400' }}>Reset</Text>

                                    </TouchableOpacity>

                                </View>
                            </>
                        }


                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}