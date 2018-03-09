import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';
import VideoFrame from './components/videoFrame'

export default class remotevate extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('conference_room.jpg')} />
        <VideoFrame />
        <Image source={asset('macbook.png')}
          style={{
            width: 2,
            height: 2,
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [8.5, -0.5, -2] }, {rotateY : -100}]
          }
          } />
      </View>
    );
  }
}

AppRegistry.registerComponent('remotevate', () => remotevate);

// <Text
//           style={{
//             backgroundColor: '#777879',
//             fontSize: 0.8,
//             fontWeight: '400',
//             layoutOrigin: [0.5, 0.5],
//             paddingLeft: 0.2,
//             paddingRight: 0.2,
//             textAlign: 'center',
//             textAlignVertical: 'center',
//             transform: [{translate: [0, 0, -3]}, 
//             {rotateY : -15}],
//           }}>
//           hello
//         </Text>
