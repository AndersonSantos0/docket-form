import React from 'react'
import { CarouselItemView } from './style'

interface CarouselItemProps {
    image: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ image = '' }) => {
    return <CarouselItemView style={{ backgroundImage: `url(${image})` }} />
}

export default CarouselItem
