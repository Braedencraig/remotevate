import React from 'react'
import {
    Image,
    asset
} from 'react-vr'

export default function MacBook (){
    return (
        <Image source={asset('macbook.png')}
          style={{
            width: 2,
            height: 2,
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [8.5, -0.5, -2] }, {rotateY : -100}]
          }
          } />
    )
}

module.exports = MacBook
