import React, { useState, useEffect } from 'react'
import './Welcome.css'

const Welcome = (props) => {
    const [index, setIndex] = useState(0)
    const arr = [
        'My name is Adeeb', 'Welcome to my Website'
    ]
    const [currWord, setCurrWord] = useState('Hello')
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in',
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            
            if (index == 2) {
                props.setWelcomeTrigger(false)
            }
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
               
            } else {
                setIndex(index + 1)
                setCurrWord(arr[index])
                setFadeProp({
                    fade: 'fade-in'
                })
            }
            
        }, 2000);

        return () => clearInterval(timeout)
    }, [fadeProp])

    return props.welcomeTrigger ? (
        <div className='welcome-page'>
            <div className= 'Card-2'>
                <h1 className={fadeProp.fade}>{currWord}</h1>
            </div>

        </div>
    ) : ('')
}

export default Welcome