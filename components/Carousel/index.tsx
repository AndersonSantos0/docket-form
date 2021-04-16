/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import CarouselItem from '../CarouselItem'
import { CarouselContainer, CarouselUI, CarouselView } from './style'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

interface CarouselProps {
    data: Array<CarouselItem>
    style?: React.CSSProperties
}

interface CarouselItem {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
}

const Carousel: React.FC<CarouselProps> = ({ data = [] }) => {
    const [counter, setCounter] = useState(0)
    const [responsive, setResponsive] = useState(false)

    const incrementCounter = () => {
        if (counter < data.length - 2) return setCounter(counter + 1)
    }

    const decrementCounter = () => {
        if (counter > 0) return setCounter(counter - 1)
    }

    const responsiveMode = width => {
        if (width < 520) return setResponsive(true)
        return setResponsive(false)
    }

    useEffect(() => {
        window.addEventListener('resize', () =>
            responsiveMode(window.innerWidth)
        )

        return () => window.removeEventListener('resize', () => {})
    }, [])
    return (
        <CarouselUI>
            <AiFillCaretLeft
                className={'CarouselArrow'}
                size={30}
                color={'var(--default-lightgray)'}
                onClick={() => decrementCounter()}
            />
            <CarouselView>
                <CarouselContainer
                    responsive={responsive}
                    count={counter}
                    dataLength={data.length}
                >
                    {data.map((item, idx) => (
                        <CarouselItem key={idx} image={item.download_url} />
                    ))}
                </CarouselContainer>
            </CarouselView>
            <AiFillCaretRight
                className={'CarouselArrow'}
                size={30}
                color={'var(--default-lightgray)'}
                onClick={() => incrementCounter()}
            />
        </CarouselUI>
    )
}

export default Carousel
