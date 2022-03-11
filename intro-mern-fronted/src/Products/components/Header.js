import React from "react";
import {Container, Section} from 'react-bulma-components'
import PropTypes from 'prop-types'

const Header = ({title})=>{
    return (
        <Section>
            <Container>
                <h1 className="title has-text-centered">{title}</h1>
            </Container>
        </Section>
    )
}

Header.prototype ={
    title: PropTypes.string.isRequired
}

export default Header