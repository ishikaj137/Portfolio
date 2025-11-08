import { useState, useEffect } from 'react'
import './MoonLoader.css'

export default function MoonLoader({ onComplete }) {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
      if (onComplete) {
        setTimeout(() => {
          onComplete()
        }, 800)
      }
    }, 2000)

    return () => clearTimeout(fadeTimer)
  }, [onComplete])

  return (
    <div className={`moon-loader-container ${isFading ? 'fade-out' : ''}`}>
      <div className="moon-loader">
        <div className="moon-shadow"></div>
      </div>
    </div>
  )
}

