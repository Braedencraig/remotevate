import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  View
} from 'react-vr';
import VideoFrame from './components/videoFrame'
import MacBook from './components/macbook'
import WelcomeText from './components/welcomeText'
import Apple from './components/apple'

export default class remotevate extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('conference_room.jpg')} />
        <VideoFrame />
        <MacBook />
        <WelcomeText />
        <Apple />
      </View>
    );
  }
}

AppRegistry.registerComponent('remotevate', () => remotevate);


