import styled from 'styled-components'

interface CarouselItemViewProps {
    dataLength?: number
}

export const CarouselItemView = styled.div<CarouselItemViewProps>`
    background-position: center;
    background-size: cover;
    box-shadow: 0px 3px 6px var(--default-lightgray);
    border: 2px solid var(--default-white);
    width: 50%;
    margin: 0 12px;
    height: 100%;
`
