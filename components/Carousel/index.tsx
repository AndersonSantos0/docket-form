/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react'
import CarouselItem from '../CarouselItem'
import Lottie from 'react-lottie'
import { CarouselContainer, CarouselUI, CarouselView } from './style'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import loadingJSON from './loading.json'

interface CarouselProps {
    data: Array<CarouselItem>
    style?: React.CSSProperties
    loading?: boolean
}

interface CarouselItem {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
}

const loadingConfig = {
    loop: true,
    autoplay: true,
    animationData: loadingJSON
}

const Carousel: React.FC<CarouselProps> = ({
    data = [],
    style = {},
    loading = false
}) => {
    const [counter, setCounter] = useState(0)
    const [responsive, setResponsive] = useState(false)
    const CAROUSEL_REF = useRef()

    const incrementCounter = () => {
        if (counter < data.length - 2) return setCounter(counter + 1)
    }

    const decrementCounter = () => {
        if (counter > 0) return setCounter(counter - 1)
    }

    const responsiveMode = () => {
        const carousel = CAROUSEL_REF.current as any
        if (carousel && carousel.offsetWidth < 300) return setResponsive(true)
        return setResponsive(false)
    }

    useEffect(() => {
        const carousel = CAROUSEL_REF.current as any
        if (carousel && carousel.offsetWidth < 300) setResponsive(true)

        window.addEventListener('resize', () => responsiveMode())

        return () => window.removeEventListener('resize', () => {})
    }, [])
    return (
        <CarouselUI style={style}>
            <AiFillCaretLeft
                className={'CarouselArrow'}
                size={30}
                color={'var(--default-lightgray)'}
                onClick={() => decrementCounter()}
            />
            <CarouselView ref={CAROUSEL_REF}>
                {loading ? (
                    <Lottie options={loadingConfig} height={130} width={100} />
                ) : (
                    <CarouselContainer
                        responsive={responsive}
                        count={counter}
                        dataLength={data.length}
                    >
                        {data.map((item, idx) => (
                            <CarouselItem key={idx} image={item.download_url} />
                        ))}
                    </CarouselContainer>
                )}
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
