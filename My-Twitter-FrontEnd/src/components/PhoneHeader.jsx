import wifi from '../assets/wifi.svg'
import signal from '../assets/signal.svg'
import battery from '../assets/battery.svg'
import { GlobalPhoneHeader, Hour, PhoneStatus } from '../styles/PhoneHeaderStyles'

export function PhoneHeader () {
    return (
        <GlobalPhoneHeader>
        <Hour>9:41</Hour>

        <PhoneStatus>
            <img src={signal} alt='signal-bar' />
            <img src={wifi} alt='wifi-bar' />
            <img src={battery} alt='battery-bar' />
        </PhoneStatus>
        </GlobalPhoneHeader>
    )
}