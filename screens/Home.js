//import liraries
import React, { Component } from 'react';
import { StatusBar, Dimensions } from 'react-native'
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Container = styled.ScrollView`
    flex: 1;
    background-color: #000
`
const Poster = styled.ImageBackground`
    width: 100%;
    height: ${Dimensions.get('window').height * 81 / 100}px;
`
const Gradient = styled(LinearGradient)`
    height: 100%;

`

// create a component
const Home = () => {
    return (
        <>
            <StatusBar
                translucent
                backgroundColor='transparent'
                barStyle='light-content'
            />
            <Container>
                <Poster source={require('../assets/tenet.jpg')}>
                    <Gradient
                        locations={[0, 0.2, 0.6, 0.93]}
                        colors={[
                            'rgba(0,0,0,0.5)',
                            'rgba(0,0,0,0)',
                            'rgba(0,0,0,0)',
                            'rgba(0,0,0,1)'
                        ]}
                    >
                        <Header />
                        <Hero />
                    </Gradient>
                </Poster>
            </Container>
        </>
    )
}

//make this component available to the app
export default Home;
