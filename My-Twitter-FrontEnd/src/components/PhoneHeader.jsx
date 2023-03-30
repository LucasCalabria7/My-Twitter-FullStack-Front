import styled from 'styled-components'
import wifi from '../assets/wifi.svg'
import signal from '../assets/signal.svg'
import battery from '../assets/battery.svg'

export function PhoneHeader () {
    const GlobalPhoneHeader = styled.div`
    width: 100%;
    height: 2.75rem;
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3.75rem;
    padding-right: 2.8125rem;
    `

    const Hour = styled.p `
    color: black;
    font-weight: bold;
    font-size: 0.75rem;
    `

    const PhoneStatus = styled.div `
    width: 2rem;
    display: flex;
    `
    return (
        <GlobalPhoneHeader>
        <Hour>Hora</Hour>

        <PhoneStatus>
            <img src={signal} alt='signal-bar' />
            <img src={wifi} alt='wifi-bar' />
            <img src={battery} alt='battery-bar' />
        </PhoneStatus>
        </GlobalPhoneHeader>
    )
}