import React from 'react'
import {
    NotificationContainer,
    NotificationIconView,
    NotificationTextView,
    NotificationText
} from './style'
import { AiOutlineCheckCircle } from 'react-icons/ai'

interface NotigicationComponent {
    text?: string
    style?: React.CSSProperties
    show?: boolean
}

const NotificationComponent: React.FC<NotigicationComponent> = ({
    text = '',
    show = true
}) => {
    return (
        <NotificationContainer show={show}>
            <NotificationIconView>
                <AiOutlineCheckCircle size={24} color={'#00966c'} />
            </NotificationIconView>
            <NotificationTextView>
                <NotificationText>{text}</NotificationText>
            </NotificationTextView>
        </NotificationContainer>
    )
}

export default NotificationComponent
