import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../Component/Header';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Update() {
  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <StatusBar backgroundColor={'#F9F9F9'} barStyle={'dark-content'} />
      <Header backColor="#F9F9F9" />
      <View
        style={{
          height: 43,
          width: '60%',
          backgroundColor: '#F4F5F9',
          borderRadius: 6,
          flexDirection: 'row',
          paddingVertical: 5,
          paddingHorizontal: 6,
          marginTop: 15,
          marginHorizontal: 9,
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: '#fff',
            justifyContent: 'center',
            elevation: 3,
            borderRadius: 4,
          }}>
          <Text
            style={{
              color: '#221F1F',
              fontSize: 15,
              fontFamily: 'Poppins-Medium',
              fontWeight: '500',
            }}>
            Updates
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 5,
            paddingHorizontal: 10,
            backgroundColor: '#F4F5F9',
            justifyContent: 'center',
            borderRadius: 4,
            marginLeft: 20,
          }}>
          <Text
            style={{
              color: '#969BA0',
              fontSize: 15,
              fontFamily: 'Poppins-Medium',
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Memebers
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(item, index) => index}
          ListFooterComponent={() => {
            return <View style={{height: 10}} />;
          }}
          renderItem={() => {
            return (
              <View style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      source={{
                        uri: 'https://cdn.lifehack.org/wp-content/uploads/2014/05/HughJackman.jpg',
                      }}
                      style={styles.image}
                    />
                  </View>

                  <View style={{marginLeft: 15}}>
                    <Text style={styles.primaryText}>Sarah Ismail</Text>
                    <Text style={styles.lightText}>May 25, 2022</Text>
                  </View>
                </View>
                <View style={{width: '100%', height: 300, marginVertical: 20}}>
                  <Image
                    source={{
                      uri: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
                    }}
                    style={{width: '100%', height: '100%'}}
                    resizeMode={'cover'}
                  />
                </View>
                <Text style={[styles.primaryText, {marginTop: 0}]}>
                  Eid-ul-Azha Greetings!
                </Text>
                <Text
                  style={[
                    styles.primaryText,
                    {
                      marginTop: 0,
                      fontSize: 14,
                      fontWeight: 'normal',
                      fontFamily: 'Poppins-Medium',
                    },
                  ]}>
                  AOA Everyone!
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{}}>
                    <Text
                      numberOfLines={2}
                      style={[
                        styles.primaryText,
                        {
                          marginTop: 0,
                          fontSize: 14,
                          fontWeight: 'normal',
                          fontFamily: 'Poppins-Medium',
                        },
                      ]}>
                      The management would like to extend
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    marginTop: 20,
                    borderBottomWidth: 2,
                    borderColor: '#E4E4E4',
                  }}>
                  <Text
                    style={[
                      styles.lightText,
                      {color: '#075595', fontFamily: 'Poppins-Medium'},
                    ]}>
                    5 Comments
                  </Text>
                  <Text
                    style={[
                      styles.lightText,
                      {
                        color: '#075595',
                        marginRight: 12,
                        fontFamily: 'Poppins-Medium',
                      },
                    ]}>
                    10 Likes
                  </Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 13}}>
                  <View style={{flexDirection: 'row'}}>
                    <EvilIcons name={'heart'} color="#6E6E6E" size={24} />
                    <Text
                      style={[
                        styles.lightText,
                        {
                          color: '#6E6E6E',
                          fontFamily: 'Poppins-Medium',
                          fontSize: 14,
                          fontWeight: '500',
                          marginLeft: 3,
                        },
                      ]}>
                      Like
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 20}}>
                    <FontAwesome
                      name={'commenting-o'}
                      color="#6E6E6E"
                      size={18}
                    />
                    <Text
                      style={[
                        styles.lightText,
                        {
                          color: '#6E6E6E',
                          fontFamily: 'Poppins-Medium',
                          fontSize: 14,
                          fontWeight: '500',
                          marginLeft: 8,
                        },
                      ]}>
                      Comment
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
    paddingVertical: 20,
    elevation: 3,
    marginHorizontal: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 60 / 2,
  },
  primaryText: {
    color: '#221F1F',
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  lightText: {
    fontSize: 12,

    color: '#959595',
  },
});
