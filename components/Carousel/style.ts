import styled from 'styled-components'

export const CarouselUI = styled.div`
    display: flex;
    align-items: center;

    .CarouselArrow {
        transition: 0.2s;
        cursor: pointer;
        transform: scaleY(2);
    }

    .CarouselArrow:active {
        transform: scaleY(1.9) scaleX(0.8);
    }
`

export const CarouselView = styled.div`
    position: relative;
    overflow: hidden;
    flex: 1;
    height: 130px;
`

interface CarouselContainerProps {
    dataLength?: number
    count?: number
    responsive?: boolean
}

export const CarouselContainer = styled.div<CarouselContainerProps>`
    position: absolute;
    display: flex;
    width: calc(
        ${props => (props.responsive ? '100%' : '50%')} *
            ${props => props.dataLength}
    );
    left: calc(
        ${props => (props.responsive ? '-100%' : '-50%')} *
            ${props => props.count}
    );
    transition: 0.4s;
    height: 100%;
    padding: 8px 0;
`
