import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className='reasons' id='reasons'>
      <div className='left-r'>
        <img src={image1} alt='pic' />
        <img src={image2} alt='pic' />
        <img src={image3} alt='pic' />
        <img src={image4} alt='pic' />
      </div>
      <div className='right-r'>
        <span>Some Reasons</span>

        <div>
            <span className='stroke-text'>Why</span>
            <span> Choose Us ?</span>
        </div>

        <div className='details-r'>
            <div>
                <img src={tick} alt='pic'/>
                <span>Over 140+ Expert Coaches</span>
            </div>
            <div>
                <img src={tick} alt='pic'/>
                <span>Train Smarter And Faster Than Before</span>
            </div>
            <div>
                <img src={tick} alt='pic'/>
                <span>1 Free Program For New Member</span>
            </div>
            <div>
                <img src={tick} alt='pic'/>
                <span>Reliable Partners</span>
            </div>
        </div>
        <span style={{
            color:"var(--gray)",
            fontWeight:"normal"
        }}>OUR Partners</span>

        <div className='partners'>
            <img src={nb} alt='pic'/>
            <img src={adidas} alt='pic'/>
            <img src={nike} alt='pic'/>
        </div>
      </div>
    </div>
  )
}

export default Reasons
