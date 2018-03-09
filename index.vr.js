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

export default class remotevate extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('conference_room.jpg')} />
        <VideoFrame />
        <MacBook />
        <WelcomeText />
      </View>
    );
  }
}

AppRegistry.registerComponent('remotevate', () => remotevate);


