import React from 'react'
import { ContentBoxContainer } from './style'

interface ContentBoxProps {
    children?: React.ReactNode
    cold?: boolean
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, cold = false }) => {
    return <ContentBoxContainer cold={cold}>{children}</ContentBoxContainer>
}

export default ContentBox
