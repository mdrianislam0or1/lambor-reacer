import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touch delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                description="Order Online for Touch delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section/>
            <Section/>
        </Container>
    )
}

export default Home


const Container = styled.div`
   height: 100vh;

`