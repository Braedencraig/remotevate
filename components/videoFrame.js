import React, {Component} from 'react'
import {
    View,
    Video
} from 'react-vr'
import Film from './film'

function VideoFrame () {
        return (
            <View style={{
                flex: 1,
                width: 4.7,
                height: 3,
                flexDirection: 'column',
                alignItems: 'stretch',
                backgroundColor: '#000000',
                layoutOrigin: [0.5, 0.5],
                transform: [{translate: [0, 0, -5]},
                {rotateY: -10},
            ]
              }}>
                <Film />
              </View>
        )
    }

module.exports = VideoFrame
