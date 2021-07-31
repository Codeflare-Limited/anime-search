import React, {Component} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {SearchBar, Button, Avatar, ListItem} from 'react-native-elements';
import {styles} from '../assets/styles/Style';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      data: [],
      error: null,
      loading: false,
    };
  }

  search = async () => {
    const url = `https://api.jikan.moe/v3/search/anime?q=` + this.state.search;
    this.setState({loading: true});
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({error, loading: false});
      });
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        requestAnimationFrame(() =>
          this.props.navigation.navigate('Description', {
            title: item.title,
            imageName: item.image_url,
            synopsis: item.synopsis,
            episodes: item.episodes,
            rated: item.rated,
          }),
        )
      }>
      <ListItem bottomDivider>
        <Avatar
          source={{uri: item.image_url}}
          style={{width: 80, height: 150}}
        />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle
            style={{color: '#000', textTransform: 'capitalize'}}>
            {item.synopsis}
          </ListItem.Subtitle>
          <ListItem.Subtitle
            style={{color: '#9D7463', textTransform: 'capitalize'}}>
            Episode: {item.episodes}
          </ListItem.Subtitle>
          <ListItem.Subtitle
            style={{color: '#9D7463', textTransform: 'capitalize'}}>
            Rating: {item.rated}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.searchContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#800000" />
        <View style={styles.search}>
          <SearchBar
            containerStyle={{width: '70%', height: 80, backgroundColor: '#fff'}}
            placeholder="Search Anime"
            lightTheme
            platform="ios"
            autoFocus={true}
            showLoading={false}
            autoCorrect={false}
            value={this.state.search}
            onChangeText={search => this.setState({search})}
          />
          <Button
            buttonStyle={{backgroundColor: '#800000', padding: 9}}
            title="search"
            onPress={() => this.search()}
          />
        </View>

        {this.state.loading ? (
          <ActivityIndicator
            style={{
              position: 'absolute',
              flexDirection: 'row',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              marginTop: 0,
            }}
            size="large"
            color="#0275d8"
          />
        ) : (
          <FlatList
            style={{flex: 1}}
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.mal_id.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        )}
      </View>
    );
  }
}

export default Home;
