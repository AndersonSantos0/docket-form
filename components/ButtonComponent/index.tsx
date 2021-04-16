/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { ButtonContainer, ButtonTitle } from './style'

interface ButtonComponentProps {
    children?: string | React.ReactNode
    onClick?: () => void
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
    children,
    onClick = () => {}
}) => {
    return (
        <ButtonContainer onClick={() => onClick()}>
            <ButtonTitle>{children}</ButtonTitle>
        </ButtonContainer>
    )
}

export default ButtonComponent
