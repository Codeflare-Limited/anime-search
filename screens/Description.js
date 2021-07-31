import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import {styles} from '../assets/styles/Style';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.title,
      imageName: this.props.navigation.state.params.imageName,
      synopsis: this.props.navigation.state.params.synopsis,
      episodes: this.props.navigation.state.params.episodes,
      rated: this.props.navigation.state.params.rated,
      visible: false,
      setVisible: false,
      loading: true,
    };
  }
  componentDidUpdate() {
    if (this.props.navigation.state.params.title === '') {
      this.setState({
        title: this.props.navigation.state.params.title,
      });
    } else if (this.props.navigation.state.params.imageName === '') {
      this.setState({
        imageName: this.props.navigation.state.params.imageName,
        loading: false,
      });
    } else if (this.props.navigation.state.params.synposis === '') {
      this.setState({
        synopsis: this.props.navigation.state.params.synopsis,
      });
    } else if (this.props.navigation.state.params.episodes === '') {
      this.setState({
        episodes: this.props.navigation.state.params.episodes,
      });
    } else if (this.props.navigation.state.params.rated === '') {
      this.setState({
        rated: this.props.navigation.state.params.rated,
      });
    }
  }

  render() {
    return (
      <View>
        <View style={{position: 'relative', top: -7, marginBottom: 0}}>
          <Image
            source={{uri: this.state.imageName, cache: 'force-cache'}}
            style={[
              styles.adImage,
              {
                height: 270,
                width: '100%',
              },
            ]}
            indicator={Progress.Circle}
            indicatorProps={{
              size: 40,
              borderWidth: 0,
              color: '#686868',
            }}
          />
        </View>
        <ScrollView
          style={{
            height: '84%',
            position: 'relative',
            marginBottom: 35,
          }}>
          <Text style={styles.title}>{this.state.title}</Text>

          <View style={styles.category}>
            <Text style={styles.textCat}>Episode: {this.state.episodes}</Text>
            <Text style={styles.textCat}>Rated: {this.state.rated}</Text>
          </View>

          <Text
            style={[
              styles.description,
              {color: '#212121', fontWeight: 'bold'},
            ]}>
            Description
          </Text>

          {/* DESCRIPTION */}
          <View
            style={{
              flexDirection: 'column',
              marginBottom: 0,
            }}>
            <Text
              style={{
                color: '#212121',
                margin: 30,
                marginTop: 0,
                fontSize: 16,
              }}>
              {this.state.synopsis}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Description;
