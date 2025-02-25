import React from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constant'
import { BallCanvas } from './canvas'

const Tech = () => {

  // create countin function to count the number of technologies
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) =>(
        <div className='w-28 h-28 ' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper (Tech , "")