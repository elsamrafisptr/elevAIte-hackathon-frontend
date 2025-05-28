import { useEffect, useState } from 'react'

type ScreenSize = {
  width: number
  height: number
}

const useScreenSize = (): {
  screenSize: ScreenSize
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
} => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0
  })

  const isMobile = screenSize.width > 0 && screenSize.width <= 768
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024
  const isDesktop = screenSize.width > 1024

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateScreenSize()

    window.addEventListener('resize', updateScreenSize)

    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  return { screenSize, isMobile, isTablet, isDesktop }
}

export default useScreenSize
