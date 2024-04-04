import { useEffect, useState } from 'react'
import { useSound } from 'use-sound'

import carSFX1 from '../../assets/audio/car_sound.mp3'
import carSFX2 from '../../assets/audio/car_sound_2.mp3'

export function UseControls(vehicleAPI, chassisAPI, enableControls, soundOff) {
    let [controls, setControls] = useState({})
    const [playSFX1, { pause: pauseSFX1 }] = useSound(carSFX1, {volume: 0.5})
    // const [playSFX2, { pause: pauseSFX2 }] = useSound(carSFX2, {volume: 0.5})

    useEffect(() => {
        if (enableControls) {
            const keyDownHandler = (e) => {
            setControls((controls) => ({
                ...controls,
                [e.key.toLowerCase()]: true
                }))
            }

            const keyUpHandler = (e) => {
                setControls((controls) => ({
                    ...controls,
                    [e.key.toLowerCase()]: false
                }))
            }
                window.addEventListener('keydown', keyDownHandler)
                window.addEventListener('keyup', keyUpHandler)

            return () => {
                window.removeEventListener('keydown', keyDownHandler)
                window.removeEventListener('keyup', keyUpHandler)
            }
        }
        else {
            return
        }
        
    }, [enableControls])

    // Apply movement
    useEffect(() => {
        // Forward
        if (controls.w || controls.arrowup) {
            vehicleAPI.applyEngineForce(80, 2)
            vehicleAPI.applyEngineForce(80, 3)

            if (!soundOff) {
                playSFX1()
            }
            
        }
        // Backward
        else if (controls.s || controls.arrowdown) {
            vehicleAPI.applyEngineForce(-80, 2)
            vehicleAPI.applyEngineForce(-80, 3)

            if (!soundOff) {
                playSFX1()
            }
        }
        // No movement
        else {
            vehicleAPI.applyEngineForce(0, 2)
            vehicleAPI.applyEngineForce(0, 3)

            if (!soundOff) {
                pauseSFX1()
                // playSFX2()
            }
        }

        // Left
        if (controls.a || controls.arrowleft) {
            vehicleAPI.setSteeringValue(0.35, 2)
            vehicleAPI.setSteeringValue(0.35, 3)
            vehicleAPI.setSteeringValue(-0.1, 0)
            vehicleAPI.setSteeringValue(-0.1, 1)
        }
        // Right
        else if (controls.d || controls.arrowright) {
            vehicleAPI.setSteeringValue(-0.35, 2)
            vehicleAPI.setSteeringValue(-0.35, 3)
            vehicleAPI.setSteeringValue(0.1, 0)
            vehicleAPI.setSteeringValue(0.1, 1)
        }
           
        // No movement
        else {
            for (let i = 0; i < 4; i++) {
                vehicleAPI.setSteeringValue(0, i)
            }
        }

        // Hold shift to brake
        if (controls.shift) {
            vehicleAPI.setBrake(8, 0)
            vehicleAPI.setBrake(8, 1)

            if (!soundOff) {
                pauseSFX1()
                // pauseSFX2()
                // playSFX2()
            }
            
        }
        else {
            vehicleAPI.setBrake(0, 0)
            vehicleAPI.setBrake(0, 1)
            vehicleAPI.setBrake(0, 2)
            vehicleAPI.setBrake(0, 3)
            // pauseSFX2()
        }

        // Reset position
        if (controls.r) {
            chassisAPI.position.set(15, 0, 0)
            chassisAPI.velocity.set(0, 0, 0)
            chassisAPI.rotation.set(0, 0, 0)

            if (!soundOff) {
                pauseSFX1()
                // pauseSFX2()
                // playSFX2()
            }
        }

    }, [controls, vehicleAPI, chassisAPI])

    return controls
} 