import React, { useState, useEffect } from 'react'
import './Home.css'


export default function Timer() {
    const [name, setName] = useState('')
    const [savedName, setSavedName] = useState('')
    const [count, setCount] = useState(10)
    const [running, setRunning] = useState(false)
    const [finished, setFinished] = useState(false)
    const [finalQuote, setFinalQuote] = useState('')
    const [finishCount, setFinishCount] = useState(0)

    const quotes = [
        "ты можешь больше, чем думаешь.",
        "каждый день — шанс стать лучше.",
        "не бойся ошибаться — бойся сдаваться.",
        "путь в тысячу миль начинается с первого шага.",
        "твоё время — сейчас.",
        "сделай сегодня то, за что себе скажешь спасибо завтра.",
        "успех — это движение от неудачи к неудаче без потери энтузиазма.",
        "действуй. Даже если страшно.",
        "мечты работают, если работаешь ты.",
        "ты не проиграл, пока не сдался."
    ]
    const [selectedTime, setSelectedTime] = useState(10)

    useEffect(() => {
        const storedName = localStorage.getItem('username')
        if (storedName){
            setName(storedName)
            setSavedName(storedName)
        }
    },[])
    useEffect(() => {
        let interval = null
        if (running && count > 0) {
        interval = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
        } else if (count === 0 && running) {
        setRunning(false)
        setFinished(true)
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setFinalQuote(`${savedName}, ${quotes[randomIndex]}`)
        setFinishCount(prev => prev+1)
        const audio = new Audio('/soundTimer.mp3')
        audio.play()
        }
        return () => clearInterval(interval)
    }, [running, count, quotes, savedName])

    function handleStart() {
        if (!name.trim()) return
        setSavedName(name)
        setCount(selectedTime)
        setRunning(true)
        setFinished(false)
        setFinalQuote('')
        localStorage.setItem('username',name)
    }

    function handleReset() {
        setRunning(false)
        setCount(10)
        setFinished(false)
        setName('')
        setSavedName('')
        setFinalQuote('')
    }
    function handleTryAgain(){
        setCount(10)
        setFinished(false)
        setRunning(false)
        setFinalQuote('')
    }

    return (
        
        <div className="container">
            <h1>Timer</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Введите имя"
            /><br></br>
            <select value={selectedTime} onChange = {e => setSelectedTime(Number(e.target.value))} disabled={running}>
                <option value = {10}>10 секунд</option>
                <option value = {20}>20 секунд</option>
                <option value = {30}>30 секунд</option>
            </select>
            <button onClick={handleStart} disabled={running}>Старт</button>
            <button onClick={handleReset}>Сброс</button>
            <p>Таймер завершён: {finishCount} раз</p>
            <p>{savedName}, осталось {count} сек</p>
            {finished && <p className="fade-in">{finalQuote}</p>}
            {finished && <button onClick = {handleTryAgain}>Попробовать еще раз</button>}
        </div>
    
    )
}
