import React, { Component } from 'react'
import {
    Image,
    asset,
    VrButton,
    View,
    Text
} from 'react-vr'

export default class MacBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingMacBookText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }
    toggleDisplayText() {
        if (!this.state.displayingMacBookText) {
            this.setState({ displayingMacBookText: true })

        } else {
            this.setState({ displayingMacBookText: false })
        }
    }
    render() {
        console.log('displaying MacBook text?: ', this.state.displayingMacBookText)
        return (
            <View>
            <VrButton onClick={this.toggleDisplayText}>
                {this.state.displayingMacBookText === true ? (
                    <View>
                        <Text
                            style={{
                                //position: 'absolute',
                                backgroundColor: '#777879',
                                fontSize: 0.5,
                                fontWeight: '400',
                                layoutOrigin: [0.5, 0.5],
                                paddingLeft: 0.2,
                                paddingRight: 0.2,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                transform: [{ translate: [8.5, -0.5, -2] }, { rotateY: -100 }],
                            }}>
                            You'll need: a MacBook, monitor, and Internet!
                        </Text>
                    </View>
                )
                    :
                    (<Image
                        source={asset('macbook.png')}
                        style={{
                            width: 2,
                            height: 2,
                            layoutOrigin: [0.5, 0.5],
                            transform: [{ translate: [8.5, -0.5, -2] }, { rotateY: -100 }]
                        }
                        }
                    />)
                }
            </VrButton>
            </View>
        )
    }
}

module.exports = MacBook
