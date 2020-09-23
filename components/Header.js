//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

const Container = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 25px 0 25px;
    width: 100%;
`

const Logo = styled.Image`
    width: 40px;
    height: 40px;
`

const Menu = styled.Text`
    font-size: 18px;
    color: #fff;
    letter-spacing: 0.1px;
`

// create a component
const Header = () => {
    return(
        <Container>
            <Logo resizeMode='contain' source={require('../assets/logo.png')} />
            <Menu>Series</Menu>
            <Menu>Films</Menu>
            <Menu>Shows</Menu>
        </Container>
    )
}

//make this component available to the app
export default Header;
