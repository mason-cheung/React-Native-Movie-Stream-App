//import liraries
import React, { Component, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import Carousel from 'react-native-anchor-carousel'
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components';

// create a component
const Home = () => {

    const [background, setBackground] = useState({
        uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwQZ2s5TKxJm8pAGaRDt0VehyvikwU3zgd1I1iR-KD7QsNHmcN',
        name: 'Tenet',
        stat: '2020 ‧ Action/Thriller ‧ 2h 30m',
        desc: 'A secret agent embarks on a dangerous, time-bending mission to prevent the start of World War III.'
    })

    const [gallery, setGallery] = useState([
        {
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwQZ2s5TKxJm8pAGaRDt0VehyvikwU3zgd1I1iR-KD7QsNHmcN',
            title: 'Tenet',
            released: '2020 ‧ Action/Thriller ‧ 2h 30m',
            key: '1',
            desc: 'A secret agent embarks on a dangerous, time-bending mission to prevent the start of World War III.'
        },
        {
            image: 'https://pic.pimg.tw/yangbear/4ad34fcb5a531.jpg',
            title: 'Kitaro: Nippon bakuretsu',
            released: '2008 ‧ Drama/Animation ‧ 1h 15m',
            key: '2',
            desc: 'A new letter for help from the girl Feng Jihua arrived in the monster mailbox. Recently, strange incidents have occurred in her surroundings. Before Kitaro and his party arrived, Hua was dragged into the mirror by the monster Mirror. Then Lord Kagami scattered Onitaros companions to various parts of the country, and shut Onitaro into the mirror world. Kitaro went through hardships before he escaped from the world in the mirror. In ancient times, the wild fighting god sealed by King Yan Mo was awakened, and he possessed a powerful force above all monsters. Feng Jihua is holding the key to the recovery of the Wild Fight God. Knowing the truth, Kitaro is determined to protect the girl Hua and save Japan. Forty-seven monsters came together to start an unprecedented monster war...'
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/71rgiqKm5ZL._AC_SY741_.jpg',
            title: 'Weathering with You',
            released: '2019 ‧ Animation/Fantasy ‧ 1h 51m',
            key: '3',
            desc: 'A boy runs away to Tokyo and befriends a girl who appears to be able to manipulate the weather.'
        },
        {
            image: 'https://pbs.twimg.com/media/D35yBZ8WwAEAMQq.jpg',
            title: 'Detective Conan: The Fist of Blue Sapphire',
            released: '2019 ‧ Animation/Anime ‧ 1h 50m',
            key: '4',
            desc: 'Detective Conan: The Fist of Blue Sapphire is a 2019 Japanese animated film. It is the twenty-third installment of the Case Closed film series based on the manga series of the same name by Gosho Aoyama, following the 2018 film Detective Conan: Zero the Enforcer. The film was released on 12 April 2019. '
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/71d-53%2BeM0L._AC_SL1093_.jpg',
            title: 'About Time',
            released: '2013 ‧ Romance/Fantasy ‧ 2h 4m',
            key: '5',
            desc: 'Like all the men in his family, Tim Lake possesses the power to travel in time. With the advice of his father, he uses his special ability to pursue his romantic interest, Mary.'
        }

    ])

    const [list, setList] = useState([
        {
            image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwQZ2s5TKxJm8pAGaRDt0VehyvikwU3zgd1I1iR-KD7QsNHmcN',
            key: '1',
        },
        {
            image: 'https://pic.pimg.tw/yangbear/4ad34fcb5a531.jpg',
            key: '2',
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/71rgiqKm5ZL._AC_SY741_.jpg',
            key: '3',
        },
        {
            image: 'https://pbs.twimg.com/media/D35yBZ8WwAEAMQq.jpg',
            key: '4',
        },
        {
            image: 'https://images-na.ssl-images-amazon.com/images/I/71d-53%2BeM0L._AC_SL1093_.jpg',
            key: '5',
        }
    ])

    const carouselRef = useRef(null);
    const { width, height } = Dimensions.get('window');
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        carouselRef.current.scrollToIndex(index);
                        setBackground({
                            uri: item.image,
                            name: item.title,
                            stat: item.released,
                            desc: item.desc
                        })
                    }}
                >
                    <Image source={{ uri: item.image }} style={styles.caruoselImage} />
                    <Text style={styles.caruoselText}>{item.title}</Text>
                    <MaterialIcons name='library-add' size={30} color='white' style={styles.caruoselIcon} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView style={{ backgroundColor: '#000' }}>
            <View style={styles.carouselContentContainer}>
                <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
                    <ImageBackground
                        source={{ uri: background.uri }}
                        style={styles.ImageBackGd}
                        blurRadius={10}
                    >
                        <View style={styles.searchBoxContainer}>
                            <TextInput
                                placeholder='Search Movies'
                                placeholderTextColor='#666'
                                style={styles.SearchBox}
                            />
                            <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
                        </View>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Top Picks this Week</Text>
                        <View style={styles.carouselContainerView}>
                            <Carousel style={styles.Carousel}
                                data={gallery}
                                renderItem={renderItem}
                                itemWidth={200}
                                containerWidth={width - 20}
                                separatorWidth={0}
                                ref={carouselRef}
                                inActiveOpacity={0.4}
                            />
                        </View>
                        <View style={styles.movieInfoContainer}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.movieName}>{background.name}</Text>
                                <Text style={styles.movieStat}>{background.stat}</Text>
                            </View>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                            <Text style={{ color: 'white', opacity: 0.8, lineHeight: 20 }}>{background.desc}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={{ marginHorizontal: 14 }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24, marginTop: 24}}>Continue Watching</Text>
                <ImageBackground
                    source={{ uri: 'https://storage.googleapis.com/www-cw-com-tw/article/202002/article-5e5737dd478ab.jpg' }}
                    style={{ height: 250, width: '100%', backgroundColor: '#000' }}
                    resizeMode='cover'
                >
                    <Text style={{ color: 'white', padding: 14, }}>Someday Or One Day (想見你)</Text>
                    <TouchableOpacity style={{ ...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%' }}>
                        <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24,marginTop: 36}}>
                    <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>My List</Text>
                    <Text style={{color: 'white', fontSize: 14, fontWeight: 'normal'}}>View All</Text>
                </View>
                <FlatList 
                style={{marginBottom: 30}}
                data={list}
                horizontal={true}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity style={{marginRight: 20}}>
                            <Image source={{uri: item.image}} style={{height: 300, width: 200}} />
                            <View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8}}></View>
                            <FontAwesome5 name='play' size={38} color='#fff' style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9}} />
                        </TouchableOpacity>
                    )
                }}
                 />
            </View>
        </ScrollView>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselContentContainer: {
        flex: 1,
        backgroundColor: '#000',
        height: Dimensions.get('screen').height,
        paddingHorizontal: 14,
    },
    ImageBackGd: {
        flex: 1,
        height: null,
        width: null,
        opacity: 1,
        justifyContent: 'flex-start'
    },
    searchBoxContainer: {
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 4,
        marginVertical: 50,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    SearchBox: {
        padding: 13,
        paddingLeft: 20,
        fontSize: 16,
    },
    searchBoxIcon: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    carouselContainerView: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Carousel: {
        flex: 1,
        overflow: 'visible',
    },
    caruoselImage: {
        width: 200,
        height: 320,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    caruoselText: {
        padding: 14,
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 2,
        fontWeight: 'bold',
    },
    caruoselIcon: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    movieInfoContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 14,
    },
    movieName: {
        paddingLeft: 14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6,
    },
    movieStat: {
        paddingLeft: 14,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    playIconContainer: {
        backgroundColor: '#212121',
        padding: 18,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderWidth: 4,
        borderColor: 'rgba(2, 173, 148, 0.2)',
        marginBottom: 14,
    },
});

//make this component available to the app
export default Home;
