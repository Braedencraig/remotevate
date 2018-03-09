import React from 'react'
import {
    Image,
    asset,
    VrButton
} from 'react-vr'

export default function Clock() {
    return (
        <VrButton>
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
    )
}

module.exports = Clock
