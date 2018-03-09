import React from 'react'
import {
    Image,
    asset,
    VrButton
} from 'react-vr'

export default function MacBook() {
    return (
        <VrButton>
            <Image
                source={asset('macbook.png')}
                style={{
                    width: 2,
                    height: 2,
                    layoutOrigin: [0.5, 0.5],
                    transform: [{ translate: [8.5, -0.5, -2] }, { rotateY: -100 }]
                }
                }
            />
        </VrButton>
    )
}

module.exports = MacBook
