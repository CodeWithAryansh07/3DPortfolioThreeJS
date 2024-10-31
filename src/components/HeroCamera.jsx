/* eslint-disable react/prop-types */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import {easing } from 'maath'


const HeroCamera = ({children, isMobile}) => {

    const groupRef = useRef();

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)

        if (!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y / 3, -state.pointer.x / 5, 0], 0.25, delta)
        }
    })

    

    return (
        <group scale={isMobile ? 0.9 : 1.1} ref = {groupRef}>
            {children}
        </group>
    )
}

export default HeroCamera
