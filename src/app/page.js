import Image from 'next/image'
import './globals.css'

export default function Home() {
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
          <h1>Aidah Dzulfadilah Suwardi</h1>
          <div className="bio-nim">
            <p>D121211037</p>
            <p>Bravo 6, going dark</p>
          </div>
        </div>
      </div>
      <div className="cta">
        <button>
          <p>Halo!</p>
        </button>
      </div>
    </div>
    </div>
    
  )
}
