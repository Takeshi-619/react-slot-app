import './componentCss/effct.css'
import gsap from 'gsap'
import { useEffect } from 'react'

const Effct = () => {
  
  useEffect(() => {
      gsap.fromTo('.ef', {opacity: 0}, {opacity: 1, duration: 1.5, repeat: -1, yoyo: true})
  }, [])

  return (
    <div className='ef'>      
        <div className='ef' id='red'></div>
        <div className='ef' id='orange'></div>
        <div className='ef' id='yellow'></div>
        <div className='ef' id='green'></div>
        <div className='ef' id='blue'></div>
        <div className='ef' id='indigo'></div>
        <div className='ef' id='violet'></div>
    </div>
  )
}

export default Effct