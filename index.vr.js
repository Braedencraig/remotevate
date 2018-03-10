import React, { Component } from 'react';
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
import Clock from './components/clock'
import Water from './components/water'
import Notepad from './components/notepad'

export default class remotevate extends Component {
  render() {
    return (
      <View style={{ position: 'absolute' }}>
        <Pano source={asset('conference_room.jpg')} style={{ position: 'absolute' }} />
        <VideoFrame />
        <MacBook />
        <WelcomeText />
        <Apple />
        <Clock />
        <Water />
        <Notepad />

      </View>
    );
  }
}

AppRegistry.registerComponent('remotevate', () => remotevate);

