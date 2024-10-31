/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Leva, useControls } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import { calculateSizes } from '../constants/index.js';

import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';

const Hero = () => {

    const isMobile = useMediaQuery({
        maxWidth: 768
    }) 

    const isTablet = useMediaQuery({
        minWidth: 768,
        maxWidth: 1024
    })

    const isSmall = useMediaQuery({
        maxWidth: 440
    })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    // const controls = useControls( {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: -10,
    //         max: 10
    //     }
    // })

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hi, I am Aryansh <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>

                <div className="w-full h-full absolute inset-0">
                {/* <Leva /> */}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom 
                            
                            // position={[0, 0, 0]} 
                            // rotation={[0.1, -Math.PI, 0]}
                            position={sizes.deskPosition} 
                            scale={sizes.deskScale}
                            rotation={[0, -Math.PI, 0]}
                            />
                            </HeroCamera>
                            

                            <group>
                                <Target position={sizes.targetPosition} />

                                <ReactLogo position={sizes.reactLogoPosition} />

                                <Cube position={sizes.cubePosition} />

                                <Rings position={sizes.ringPosition} />
                            </group>
                            
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                        </Suspense>
                    </Canvas>
                </div>
                <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                    <a href="#about" className='w-fit'>
                        {/* <button></button> */}
                        <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
