import { useState } from 'react'
import './Countdown.scss'
import Counter from 'react-countdown'

function Countdown() {

    const [daysPercent, setDaysPercent] = useState('100%')
    const [hoursPercent, setHoursPercent] = useState('100%')
    const [minutesPercent, setMinutesPercent] = useState('100%')
    const [secondsPercent, setSecondsPercent] = useState('100%')


    const renderer = ({ days, hours, minutes, seconds }) => {

        let getPercentage = (time, total) => {
            return time / total * 100 + '%'
        }

        setDaysPercent(getPercentage(days, 36));
        setHoursPercent(getPercentage(hours, 24));
        setMinutesPercent(getPercentage(minutes, 60));
        setSecondsPercent(getPercentage(seconds, 60));

        setInterval(() => {
            setDaysPercent(getPercentage(days, 36));
            setHoursPercent(getPercentage(hours, 24));
            setMinutesPercent(getPercentage(minutes, 60));
            setSecondsPercent(getPercentage(seconds, 60));
        }, 1000)

        return <div className='countdown'>
            <div className='countdown__box'><span>{days}</span><span className='countdown__animation' style={{ width: daysPercent }}></span> <span>Kun</span></div>
            <div className='countdown__box'><span>{hours}</span><span className='countdown__animation' style={{ width: hoursPercent }}></span> <span>Soat</span></div>
            <div className='countdown__box'><span>{minutes}</span><span className='countdown__animation' style={{ width: minutesPercent }}></span> <span>Daqiqa</span></div>
            <div className='countdown__box'><span>{seconds}</span><span className='countdown__animation' style={{ width: secondsPercent }}></span> <span>Soniya</span></div>

        </div>
    }
    return (
        <div className='container'>
            <h1>Biz tez orada ochilamiz!</h1>
            <p>(01.10.2024)</p>
            <Counter date={new Date('10.01.2024')} renderer={renderer} />
        </div>
    )
}

export default Countdown