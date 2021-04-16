import styled, { css } from 'styled-components'

interface ContentBoxContainerProps {
    cold?: boolean
}

export const ContentBoxContainer = styled.div<ContentBoxContainerProps>`
    display: flex;
    flex-direction: column;
    background-color: ${props =>
        props.cold ? 'var(--cold-grey)' : 'var(--default-white)'};
    box-shadow: ${props =>
        props.cold ? 'none' : '0px 1px 2px var(--default-lightgray)'};
    border: ${props =>
        props.cold ? '1px solid var(--soft-cold-grey)' : 'none'};
    border-top: ${props =>
        props.cold ? '10px solid var(--soft-cold-grey)' : 'none'};
    border-radius: 4px;
    min-width: 230px;
    padding: 32px;
    flex: 1;
    margin: 0 16px;
    margin-bottom: 16px;
    box-sizing: border-box;
    ${props =>
        props.cold &&
        css`
            padding-top: 28px;
        `};
`
