import styled from 'styled-components'

export const ButtonContainer = styled.div`
    background-color: var(--default-blue);
    border-radius: 32px;
    padding: 10px 24px;
    width: fit-content;
    box-shadow: 0px 3px 6px var(--default-lightgray);
    cursor: pointer;
    transition: 0.4s;

    :active {
        transform: scale(0.95);
    }
`

export const ButtonTitle = styled.p`
    color: var(--default-white);
    font-family: 'Open Sans';
    font-size: 16px;
    user-select: none;
`
