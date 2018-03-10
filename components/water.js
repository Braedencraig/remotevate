import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text
} from 'react-vr'

export default class Water extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingWaterText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingWaterText) {
            this.setState({ displayingWaterText: true })

        } else {
            this.setState({ displayingWaterText: false })
        }
    }

    render() {
        console.log('displaying Water text?: ', this.state.displayingWaterText)
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingWaterText === true ?
                        (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 0.9,
                                        fontWeight: '400',
                                        layoutOrigin: [0.5, 0.5],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [19, 5, 18] }, { rotateY: -130 }],
                                    }}>
                                    Stay healthy! Your health is your #1 priority.
                        </Text>
                            </View>
                        )
                        : (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 0.9,
                                        fontWeight: '400',
                                        layoutOrigin: [0.5, 0.5],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [21, -1, 18] }, { rotateY: -130 }],
                                    }}>
                                    .
                        </Text>
                            </View>
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Water
