import { View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../Component/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function UNit(props) {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor('#F9F9F9')
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation])
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* <StatusBar backgroundColor={"#F9F9F9"} barStyle={'dark-content'} /> */}
      <Header backColor="#F9F9F9" />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        <View style={{ flex: 1, paddingVertical: 15, paddingHorizontal: 9 }}>
          <View style={{
            paddingVertical: 20,
            paddingLeft: 20,
            backgroundColor: '#F9F9F9'
          }}>
            <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 18, fontWeight: '500', }}>Unit Details</Text>
            <View style={{ marginTop: 30, flexDirection: "row", }}>
              <View style={{ flexDirection: "row", width: "50%" }}>
                <View style={{ width: "30%" }}>
                  <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Floor:</Text>
                </View>

                <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>7th Floor</Text>

              </View>
              <View style={{ flexDirection: "row", width: "50%" }}>
                <View style={{ width: "50%" }}>
                  <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Unit No::</Text>
                </View>
                <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>FC - 335</Text>


              </View>

            </View>
            <View style={{ marginTop: 23, flexDirection: "row", }}>
              <View style={{ flexDirection: "row", width: '50%' }}>
                <View style={{ width: "30%" }}>
                  <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Size::</Text>
                </View>

                <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>1020 sq. ft.</Text>

              </View>
              <View style={{ flexDirection: "row", width: '50%' }}>
                <View style={{ width: "50%" }}>
                  <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Purchase Rate:</Text>
                </View>
                <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>9000 sq. ft.</Text>


              </View>

            </View>
            <View style={{ marginTop: 23, flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", width: '50%', }}>
                <View style={{ width: "30%" }}>
                  <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Price:</Text>
                </View>

                <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>19,068,210 PKR</Text>

              </View>
              <View style={{ flexDirection: "row", width: "50%" }}>
                <View style={{ width: "50%" }}>
                  <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Sold Date:</Text>
                </View>
                <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>09/12/2021.</Text>


              </View>

            </View>

          </View>




          <View style={{
            height: 43,
            width: '65%',
            backgroundColor: "#F4F5F9",
            borderRadius: 6,
            flexDirection: "row",
            paddingVertical: 5,
            paddingHorizontal: 6,
            marginTop: 30
          }}>
            <TouchableOpacity

              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#fff',
                justifyContent: "center",
                elevation: 3,
                borderRadius: 4,


              }}>
              <Text style={{
                color: '#221F1F',
                fontSize: 15,
                fontFamily: "Poppins-Medium",
                fontWeight: '500'
              }}>
                Payment Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#F4F5F9',
                justifyContent: "center",

                elevation: 0,
                borderRadius: 4,
                marginLeft: 20
              }}>
              <Text style={{
                color: '#969BA0',
                fontSize: 15,
                fontFamily: "Poppins-Medium",
                fontWeight: '500',
                textAlign: "center"
              }}>
                Files
              </Text>
            </TouchableOpacity>

          </View>

          <View style={{ marginTop: 30, paddingHorizontal: 7 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ width: '30%', justifyContent: "center" }}>

                <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Total Amount:</Text>
              </View>
              <View style={{width:'70%' , justifyContent:"center"}}>
              <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>1 crore, 1 lac and 60 thousand rupees.</Text>

              </View>
            
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 , flexWrap:"wrap" }}>
              <View style={{ width: '30%', justifyContent: "center", }}>

                <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Total Amount:</Text>
              </View>
              <View style={{ justifyContent: "center" , width:"70%" }}>
                <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>1 crore, 1 lac and 60 thousand rupees.</Text>
              </View>


            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 18 }}>
              <View style={{ width: '30%', justifyContent: "center" }}>

                <Text style={{ color: '#221F1F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>Total Amount:</Text>
              </View>
              <View style={{width:"70%" , justifyContent:"center"}}>
              <Text style={{ color: '#6F6F6F', fontFamily: "Poppins-Medium", fontSize: 14, fontWeight: '400', }}>1 crore, 1 lac and 60 thousand rupees.</Text>
              </View>
             

            </View>

          </View>
          <View style={{ marginTop: 24, flexDirection: "row", width: "90%", height: 44 }}>
            <View style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: "38%",
              height: '100%',
              backgroundColor: "#8CC540"
            }}>
              <Text style={{ color: '#fff', fontSize: 14 }}>38% Paid</Text>

            </View>
            <View style={{
              width: "62%",
              height: '100%',
              backgroundColor: "#00A79D2B",
              justifyContent: 'center',
              paddingLeft: 15
            }}>
              <Text style={{ color: '#221F1F', fontSize: 14 }}>38% Paid</Text>

            </View>

          </View>

          <TouchableOpacity style={{ marginTop: 30, backgroundColor: '#fff', elevation: 3, justifyContent: 'center', alignItems: "center", paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#221F1F', fontSize: 18, fontWeight: '400', }}>View Payment Plan</Text>
              <FontAwesome name='long-arrow-right' color={'#221F1F'} size={24} style={{ marginLeft: 15 }} />
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 30, backgroundColor: '#fff', elevation: 3, justifyContent: 'center', alignItems: "center", paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#221F1F', fontSize: 18, fontWeight: '400', }}>View Paid Installments</Text>
              <FontAwesome name='long-arrow-right' color={'#221F1F'} size={24} style={{ marginLeft: 15 }} />
            </View>

          </TouchableOpacity>


        </View>
      </ScrollView>
    </View>
  )
}