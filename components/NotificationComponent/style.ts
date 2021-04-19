import styled, { css } from 'styled-components'

interface NotificationContainerProps {
    show?: boolean
}

export const NotificationContainer = styled.div<NotificationContainerProps>`
    background-color: #73e6cbcc;
    border: solid 2px #00966c;
    position: fixed;
    border-radius: 30px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    top: 10px;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.4s;
    width: fit-content;
    ${props =>
        props.show &&
        css`
            opacity: 1;
            top: 30px;
        `};
`

export const NotificationIconView = styled.div`
    border-right: solid 1px #00966c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    padding-right: 16px;
`

export const NotificationTextView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    padding-left: 16px;
`

export const NotificationText = styled.p`
    color: #00966c;
    font-family: 'Open Sans bold';
`
