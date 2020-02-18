import * as React from 'react'
import styled from 'styled-components'
import Header from './Header'

const PagaTemplateBlock = styled.div``

interface PageTemplateProps {
    hideHeader?: boolean
    style?: React.CSSProperties
    className?: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({
    hideHeader,
    style,
    className,
    children
}) => (
    <PagaTemplateBlock style={style} className={className}>
        {!hideHeader && <Header />}
        {children}
    </PagaTemplateBlock>
)

export default PageTemplate
