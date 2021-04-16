/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { isEmailValid, isPhoneValid } from '../../utils/utils'
import {
    Input,
    InputContainer,
    InputFeedBack,
    InputFeedBackView,
    InputLabel,
    InputLabelView,
    InputView
} from './style'

interface InputProps {
    label?: string
    placeholder?: string
    required?: boolean
    validate?: boolean
    value: string
    type?: 'name' | 'email' | 'phone'
    style?: React.CSSProperties
    onChange: (value) => void
}

const InputComponent: React.FC<InputProps> = ({
    label = '',
    value = '',
    placeholder = '',
    type = 'name',
    style = {},
    required = false,
    validate = false,
    onChange = () => {}
}) => {
    const [inputMaxLength] = useState(64)
    const [feedBack, setFeedBack] = useState('')

    const onChangeText = e => {
        return onChange(e)
    }

    useEffect(() => {
        if (validate) validateInput()
    }, [validate])

    const validateInput = () => {
        switch (type) {
            case 'name':
                if (required && value.length < 5)
                    return setFeedBack('Nome muito curto')
                setFeedBack('')
                break
            case 'email':
                if (required && !isEmailValid(value))
                    return setFeedBack('Email inválido')
                setFeedBack('')
                break
            case 'phone':
                if (required && !isPhoneValid(value))
                    return setFeedBack('Telefone inválido')
                setFeedBack('')
                break
        }
    }

    return (
        <InputContainer style={style}>
            <InputLabelView>
                <InputLabel>
                    {required && <span>*</span>} {label}
                </InputLabel>
            </InputLabelView>
            <InputView>
                {type === 'phone' ? (
                    <InputMask
                        placeholder={placeholder}
                        onChange={e => onChangeText(e.target.value)}
                        value={value}
                        onBlur={() => validateInput()}
                        className={'input'}
                        mask={'(99) 9999-9999'}
                        maskChar={null}
                    />
                ) : (
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChange={e => onChangeText(e.target.value)}
                        maxLength={inputMaxLength}
                        onBlur={() => validateInput()}
                    />
                )}
            </InputView>
            <InputFeedBackView>
                <InputFeedBack>{feedBack}</InputFeedBack>
            </InputFeedBackView>
        </InputContainer>
    )
}

export default InputComponent
