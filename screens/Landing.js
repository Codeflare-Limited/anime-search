import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {styles} from '../assets/styles/Style';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
Icon.loadFont();

const slides = [
  {
    key: 1,
    title: 'You Love Animes?',
    image: require('../assets/images/anime1.jpg'),
    backgroundColor: '#000',
  },
  {
    key: 2,
    title: 'We know that.',
    image: require('../assets/images/anime3.jpg'),
  },
  {
    key: 3,
    title: 'Search Anime Movies ...',
    image: require('../assets/images/anime4.jpg'),
  },
  {
    key: 4,
    title: 'And Series, too.',
    image: require('../assets/images/anime5.jpg'),
  },
];

class Landing extends Component {
  _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: hp('100%'),
          width: wp('100%'),
          justifyContent: 'center',
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <View style={styles.overlay} />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 45,
            color: '#fff',
            position: 'absolute',
            top: 450,
            zIndex: 3,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <Image
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          source={item.image}
        />
      </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View>
        <Icon
          name="arrow-forward-circle-outline"
          color="rgba(255, 255, 255, .6)"
          size={45}
        />
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View>
        <Icon name="md-checkmark" color="green" size={45} />
      </View>
    );
  };
  _renderSkipButton = () => {
    return (
      <View>
        <Icon name="close-circle-outline" color="#800000" size={45} />
      </View>
    );
  };
  _onDone = () => {
    const items = [['intro', 'intro']];
    AsyncStorage.multiSet(items);
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <AppIntroSlider
        keyExtractor={(item, index) => index.toString()}
        showSkipButton={true}
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderSkipButton={this._renderSkipButton}
      />
    );
  }
}

export default Landing;
