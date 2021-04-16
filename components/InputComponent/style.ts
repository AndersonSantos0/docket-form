import styled from 'styled-components'

export const InputContainer = styled.div`
    padding: 8px 0;
`

export const InputLabelView = styled.div`
    padding: 4px 0;
`

export const InputLabel = styled.label`
    font-size: 14px;

    > span {
        color: var(--accent-color);
    }
`

export const InputView = styled.div`
    > .input {
        background-color: var(--default-white);
        border: 1px solid var(--default-lightgray);
        border-radius: 2px;
        padding: 8px;
        width: 100%;
        outline: none;
        box-sizing: border-box;
        font-family: 'Open Sans';
    }

    > .input:focus {
        border-color: var(--default-blue);
        box-shadow: 0 0 2px 0 var(--default-blue);
    }

    > .input::placeholder {
        color: var(--default-lightgray);
    }
`

export const Input = styled.input`
    background-color: var(--default-white);
    border: 1px solid var(--default-lightgray);
    border-radius: 2px;
    padding: 8px;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    font-family: 'Open Sans';

    :focus {
        border-color: var(--default-blue);
        box-shadow: 0 0 2px 0 var(--default-blue);
    }

    ::placeholder {
        color: var(--default-lightgray);
    }
`

export const InputFeedBackView = styled.div`
    padding: 4px 0;
`

export const InputFeedBack = styled.p`
    font-size: 10px;
    height: 4px;
    color: var(--accent-color);
`
