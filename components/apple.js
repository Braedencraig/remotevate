import React from 'react'
import {
    Image,
    asset,
    VrButton
} from 'react-vr'

export default function Apple() {
    return (
        <VrButton>
            <Image
                source={asset('apple.png')}
                style={{
                    width: 1.4,
                    height: 1.4,
                    layoutOrigin: [0.5, 0.5],
                    transform: [{ translate: [17, 2, -15] }, { rotateY: -10 }]
                }
                }
            />
        </VrButton>
    )
}

module.exports = Apple
