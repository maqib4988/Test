
import React, { useEffect } from 'react';
import { StatusBar, View, Text, TouchableOpacity, Image, ScrollView , StyleSheet, Dimensions } from 'react-native';
import Header from '../Component/Header';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
export default function Dashboard(props) {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      StatusBar.setBackgroundColor('#F9F9F9')
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation])
  return (
    <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
      <Header backColor='#F9F9F9' />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ flex: 1, paddingVertical: 15, }}>
          <View style={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            backgroundColor: '#fff',
            elevation: 4,
            marginHorizontal: 14

          }}>
            <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'Poppins-Medium', color: "#221F1F" }}>Price index</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, fontWeight: '400', fontFamily: 'Poppins-Medium', color: "#969BA0" }}>41 Food Court Units  -  </Text>
              <Text style={{ fontSize: 12, fontWeight: '400', fontFamily: 'Poppins-Medium', color: "#221F1F" }}>4 Units Left</Text>

            </View>
            <View style={{ marginTop: 30, backgroundColor: '#F4F5F9', height: 31,  borderRadius: 4, flexDirection: "row", paddingVertical: 3, paddingHorizontal: 3 , }}>
              <TouchableOpacity style={{
                paddingVertical: 4,
                paddingHorizontal: 5,
                backgroundColor: '#fff',
                borderRadius: 4,
                elevation: 4

              }}>
                <Text style={{ fontSize: 9, fontWeight: '500', fontFamily: 'Poppins-Medium', color: "#221F1F" }}>Food Court Shops</Text>

              </TouchableOpacity>
              <TouchableOpacity style={{
                paddingVertical: 4,
                paddingHorizontal: 5,
                backgroundColor: '#F4F5F9',
                borderRadius: 4,
                justifyContent:"center"


              }}>
                <Text style={{ fontSize: 9, fontWeight: '500', fontFamily: 'Poppins-Medium', color: "#969BA0" }}>Residential Apartments</Text>

              </TouchableOpacity>
              <TouchableOpacity style={{
                paddingVertical: 4,
                paddingHorizontal: 5,
                backgroundColor: '#F4F5F9',
                borderRadius: 4,
                justifyContent:"center"


              }}>
                <Text style={{ fontSize: 9, fontWeight: '500', fontFamily: 'Poppins-Medium', color: "#969BA0" }}>Retail Shops</Text>

              </TouchableOpacity>

            </View>
            <View style={styles.container}>
              <VerticalBarGraph
                data={[250, 400, 350, 500, 600]}
                labels={['Oct 2018', 'Nov 2018', 'Dec 2018', 'Jan 2019', 'Feb 2019']}
                width={Dimensions.get('window').width - 30}
                // width={'100%'}
                height={250}
                barRadius={3}
                barWidthPercentage={0.55}
                
                barColor="#075595"
                baseConfig={{
                  // hasXAxisBackgroundLines: true,
                  hasYAxisBackgroundLines: true,
                  hasXAxisBackgroundLines: true,
                  xAxisLabelStyle: {
                    position: 'left',
                    // color: 'teal',
                    xOffset: 15,
                    color:"#959595",
                    fontSize: 13,
                    // paddingLeft:-20
                    // width:30,
                    backgroundColor: 'tan',
                    fontSize:8
                    // prefix: '$',
                  },
                  yAxisLabelStyle: {
                    fontSize: 8,
                    // rotation: 30,
                    position: 'top',
                    // xOffset: 15,
                    decimals: 2,
                    yOffset: -20,
                    color: '#959595',
                    // height: 100
                  },
                }}
                style={{
                  // marginBottom: 30,
                  // padding: 10,
                  // paddingTop: 20,
                  // borderRadius: 20,
                  // rgba(255,255,255,0.1)
                  // backgroundColor: 'cyan',
                  alignSelf: 'center',
                  marginRight: 15,
                  
                  // width: Dimensions.get('window').width - 70,
                  // width:"100%",
                  // backgroundColor: 'lime',
                  alignItems: 'center',
                }}
              />
            </View>

          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'Poppins-Medium', color: "#221F1F", marginHorizontal: 20 }}>Construction Progress</Text>
            <ScrollView horizontal>
              {[1, 2, 3, 4].map((item, key) => {
                return (
                  <View key={key} style={{ marginTop: 20, marginBottom:4, marginRight: 20, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', elevation: 4, width: 300, marginLeft: key == 0 ? 20 : 0 }}>
                    <Image
                      source={{ uri: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg' }}
                      style={{ width: '100%', height: 185 }}
                      resizeMode={'cover'}
                    />
                    <View style={{
                      backgroundColor: '#000',
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      position: "absolute",
                      left: 10,
                      top: 24,


                    }}>
                      <Text style={{ fontSize: 10, fontWeight: '500', fontFamily: 'Poppins-Medium', color: "#FFFFFF" }}>June 10, 2021</Text>
                    </View>

                  </View>

                )
              })}

            </ScrollView>
          </View>
          <View style={{ marginTop: 24 }}>
            <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'Poppins-Medium', color: "#221F1F", marginHorizontal: 20 }}>Project Pictures</Text>
            <ScrollView horizontal>
              {[1, 2, 3, 4].map((item, key) => {
                return (
                  <View key={key} style={{ marginTop: 20, marginBottom:4, paddingHorizontal: 10, paddingVertical: 10, backgroundColor: '#fff', elevation: 4, width: 300, marginLeft: key == 0 ? 20 : 0, marginRight: 20 }}>
                    <Image
                      source={{ uri: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg' }}
                      style={{ width: '100%', height: 185 }}
                      resizeMode={'cover'}
                    />
                  </View>

                )
              })}

            </ScrollView>
          </View>


        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
    // backgroundColor: '#2c3e50',
  },
});