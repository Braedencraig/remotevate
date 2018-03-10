import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingClockText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingClockText) {
            this.setState({ displayingClockText: true })

        } else {
            this.setState({ displayingClockText: false })
        }
    }

    render() {
        console.log('displaying Clock text?: ', this.state.displayingClockText)
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingClockText === true ?
                        (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 0.7,
                                        fontWeight: '400',
                                        layoutOrigin: [0.7, 0.7],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [19, 11, 8] }, { rotateY: -90 }],
                                    }}>
                                    Class begins at 10 a.m. sharp, Monday to Friday.
                        </Text>
                            </View>
                        )
                        : (
                                <Image
                                    source={asset('clock.png')}
                                    style={{
                                        position: 'absolute',
                                        width: 3,
                                        height: 3,
                                        layoutOrigin: [0.7, 0.7],
                                        transform: [{ translate: [19, 11, 8] }, { rotateY: -90 }],
                                    }}
                                    />
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Clock
