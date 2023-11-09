'use client'

import { useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [bravo, setBravo] = useState(0)
  const [nama, setNama] = useState('aida canti')
  const handlerBravo = () => {
    setBravo(bravo + 1)

  }

  const handlerTambahNama = () => {
    setNama('aida canti banget')

  }

  return (
    <div className='body'>
      <div className="banner-container">
      <div className="header-banner-wrapper">
        <div className="foto">
          <Image
          src="/assets/aida.png"
          fill
          objectFit='contain'
          />
        </div>
        <div className="nama">
          <h1>{nama}</h1>
          <div className="bio-nim">
            <p>D121211037</p>
            <p>Bravo {bravo}, going dark</p>
          </div>
        </div>
      </div>
      <div className="cta" onClick={handlerBravo}>
        <button>
          <p>Halo!</p>
        </button>
      </div>
      <div className="cta" onClick={handlerTambahNama}>
        <button>
          <p>ganti nama</p>
        </button>
      </div>
    </div>
    </div>
    
  )
}
