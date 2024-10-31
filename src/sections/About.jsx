/* eslint-disable react/no-unescaped-entities */

import Globe from 'react-globe.gl'
import Button from '../components/Button.jsx'
import { useState } from 'react'

const About = () => {

  const [hasCopied, setHasCopied] = useState(false);


  const handleCopy = () => {
    navigator.clipboard.writeText('codewitharyansh07@gmail.com');

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }

  return (
    <section className="c-space my-20" id='about'>
      <div className="grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi I'm Aryansh Rajput</p>
              <p className="grid-subtext">
                I am a web developer and a full stack developer. I love to build websites with great user experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack
                </p> 
                <p className="grid-subtext">I specialize in JavaScript, Java with focus on React & Next for Frontend and Node, Express & SpringBoot for Backend.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0, 0, 0, 0.0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[
                //   {lat: 40, lng: -100,
                //   text: "Hello",
                //   size: 1.5,
                //   color: white
                //   }
                // ]}
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across most timezones</p>
              <p className='grid-subtext'>I work with clients from all around the world. I love to build websites with great user experiences.</p>
              <Button name="contact me" isBeam={true} containerClass="w-full mt-10"/>
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain' />
            <div>
              <p className='grid-headtext'>
                My passion for Coding
              </p>
              <p className='grid-subtext'>
                I love solving problems and building things through codes. I love to build websites with great user experiences. Coding isn't just my profession - it's my passion.
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact Me</p>
              <div className='copy-container' onClick={handleCopy}>
              <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
              <p className="lg:text-[20px] md:text-[16px] font-medium text-gray_gradient text-white">codewitharyansh07@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default About
