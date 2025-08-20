declare module 'three' {
  const THREE: any
  export = THREE
}

declare module 'vanta/dist/vanta.waves.min' {
  interface VantaWavesConfig {
    el: HTMLElement | string
    mouseControls?: boolean
    touchControls?: boolean
    gyroControls?: boolean
    minHeight?: number
    minWidth?: number
    scale?: number
    scaleMobile?: number
  }

  interface VantaEffect {
    destroy: () => void
  }

  function VANTA_WAVES(config: VantaWavesConfig): VantaEffect
  export default VANTA_WAVES
}

declare global {
  interface Window {
    THREE: any
    VANTA: {
      WAVES: (config: any) => any
    }
  }
}
