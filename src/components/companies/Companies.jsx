import React from 'react'

import './conpanies.css'

import {share,github,linkedin,nstagram,whatsapp} from '../../assets/image/img'

export default function Companies() {
  return (
    <>
        <div className="companies">
            <div className="companies_container FLEXCENTER INNERWIDTH PADDING">
                <img src={share} alt="" />
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
                <img src={nstagram} alt="" />
                <img src={whatsapp} alt="" />
            </div>
        </div>
    </>
  )
}
