import React from 'react'
import './Plans.css'
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

const Plans = () => {
  return (
    <div className='plans-container'>
    <div className='blur plans-blur-1'></div>
    <div className='blur plans-blur-2'></div>
      <div className='programs-header' style={{gap:"2rem"}}>
        <span className='stroke-text'>Ready To Start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>Now With Us</span>
      </div>

      {/* Plans Card */}
      <div className='plans'>
        {
            plansData.map((plan,index) => (
                <div className='plan' key={index}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className='features'>
                        {
                            plan.features.map((feature, index) => (
                                <div className='feature'>
                                    <img src={whiteTick} alt='pic'/>
                                    <span key={index}>{feature}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <span>See More Benefits</span>
                    </div>
                    <button className='btn'>Join Now</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Plans
