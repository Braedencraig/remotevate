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
            displayingText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }
    toggleDisplayText() {
        if (!this.state.displayingText) {
            this.setState({ displayingText: true })

        } else if (this.state.displayingText) {
            this.setState({ displayingText: false })
        }
    }
    render() {
        return (
            <VrButton onClick={() => this.toggleDisplayText()}>
                {this.state.displayingText === true ? (
                    <View>
                        <Text
                            style={{
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
        )
    }
}

module.exports = MacBook
