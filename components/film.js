import React, { Component } from 'react'
import {
    Video,
    View,
    asset
} from 'react-vr'

function Film() {
    return (
        <View style={{ margin: 0.2, height: 2 }}>
            <Video style={{ height: 2.7 }} source={asset('onboarding_video.mp4')} />
        </View>
    )
}

module.exports = Film