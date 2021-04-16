import styled, { css } from 'styled-components'

export const ScreenContainer = styled.div`
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const HomeHeader = styled.header`
    height: 130px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const CoverView = styled.div`
    position: absolute;
    height: 200px;
    width: 100vw;
    overflow: hidden;

    > svg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: calc(100vw / 1.77864583);
    }
`

export const HomeHeaderContent = styled.div`
    position: relative;
    z-index: 2;
    width: 75vw;
    max-width: 1100px;
    display: flex;
    align-self: center;
    align-items: flex-end;
    padding: 16px;
    height: 100%;
`

export const LogoView = styled.div``

interface HomeContentProps {
    responsive?: boolean
}

export const HomeContent = styled.div<HomeContentProps>`
    display: flex;
    width: ${props => (props.responsive ? 'calc(100vw - 16px)' : '75vw')};
    max-width: 1100px;
    align-self: center;
    position: relative;
    flex: 1;
    padding-bottom: 16px;
    color: var(--default-darkgray);
    flex-wrap: wrap;

    ${props =>
        props.responsive &&
        css`
            padding-right: 16px;
        `}

    i {
        color: var(--default-lightgray);
        font-size: 14px;
    }
`

interface BoxTitleProps {
    alternative?: boolean
}

export const BoxTitle = styled.h1<BoxTitleProps>`
    font-size: 24px;
    font-family: 'Open Sans bold';

    ${props =>
        props.alternative &&
        css`
            font-size: 20px;
            color: var(--primary-color);
            text-transform: uppercase;
        `}
`

export const BoxSubTitle = styled.h2`
    font-size: 16px;
    font-family: 'Open Sans bold';
`

interface BoxTextProps {
    italic?: boolean
    bold?: boolean
    weak?: boolean
}

export const BoxText = styled.p<BoxTextProps>`
    font-size: 14px;
    ${props =>
        props.italic &&
        css`
            font-style: italic;
        `}

    ${props =>
        props.weak &&
        css`
            color: var(--default-lightgray);
        `}

    ${props =>
        props.bold &&
        css`
            font-weight: bold;
        `}
`

export const InfoView = styled.div`
    padding-bottom: 16px;
`

export const HomeFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background: -webkit-linear-gradient(
        116deg,
        var(--primary-color),
        var(--secondary-color)
    );
    height: 62px;

    > p {
        font-family: 'Open Sans bold';
        text-transform: uppercase;
        color: var(--default-white);
        user-select: none;
    }
`
