import React, { Component } from 'react'
import {
    Image,
    asset,
    VrButton,
    Text,
    View
} from 'react-vr'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingText: false
        }
        this.displayText = this.displayText.bind(this)
    }

    displayText() {
        if (this.state.displayingText === false) {
            this.setState({ displayingText: true })
            return (
                <Text
                    style={{
                        backgroundColor: '#777879',
                        fontSize: 0.7,
                        fontWeight: '400',
                        layoutOrigin: [0.7, 0.7],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{ translate: [17, 17, 7] }, { rotateY: -100 }],
                    }}>
                    Class begins at 10 a.m. sharp.
              </Text>

            )

        } else if (this.state.displayingText === true) {
            this.setState({ displayingText: false })
            console.log('displaying text?: ', this.state.displayingText)
            //this.state.playerState.pause()
        }
    }

    render() {
        console.log('displaying text?: ', this.state.displayingText)
        return (
            <View>
                <VrButton onClick={() => this.displayText()}>
                    <Image
                        source={asset('clock.png')}
                        style={{
                            width: 3,
                            height: 3,
                            layoutOrigin: [0.7, 0.7],
                            transform: [{ translate: [19, 13, 8] }, { rotateY: -90 }]
                        }
                        }
                    />
                </VrButton>
            </View>
        )

    }
}


module.exports = Clock
