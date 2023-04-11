import styled from 'styled-components'
import BaseFooter from '../assets/basefooter.svg'

export function PhoneFooter () {

    const GlobalFooter = styled.div `
    height: 4vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    `

    return (
        <GlobalFooter>
            <img src={BaseFooter} alt='basefooter' />
        </GlobalFooter>
    )
}