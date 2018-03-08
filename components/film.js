import React, { Component } from 'react'
import {
    Video,
    View,
    asset,
    MediaPlayerState,
    VrButton
} from 'react-vr'

class Film extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerState: new MediaPlayerState({ autoPlay: false, muted: true })
        }
    }
    render() {
        console.log(this.state.playerState, "HALP")
        return (
            <View style={{ margin: 0.2, height: 2 }}>
                <VrButton
                    onClick={() => this.state.playerState.play()}>
                    <Video
                        style={{ height: 2.7 }}
                        source={asset('onboarding_video.mp4')}
                        playerState={this.state.playerState}
                    />
                </VrButton>
            </View>
        )

    }
}

module.exports = Film
