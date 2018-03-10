import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text
} from 'react-vr'

export default class Notepad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingNotepadText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingNotepadText) {
            this.setState({ displayingNotepadText: true })

        } else {
            this.setState({ displayingNotepadText: false })
        }
    }

    render() {
        console.log('displaying Notepad text?: ', this.state.displayingNotepadText)
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingNotepadText === true ?
                        (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 1,
                                        fontWeight: '400',
                                        layoutOrigin: [0.5, 0.5],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [-20, 5.5, -1.5] }, { rotateY: -280 }],
                                    }}>
                                    We recommend using Quiver or Boostnote (free) for note-taking.
                        </Text>
                            </View>
                        )
                        : (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 0.6,
                                        fontWeight: '400',
                                        layoutOrigin: [0.5, 0.5],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [-20, 0.9, -4.5] }, { rotateX: -90, rotateY: -320 }],
                                    }}>
                                     Notes
                        </Text>
                            </View>
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Notepad
