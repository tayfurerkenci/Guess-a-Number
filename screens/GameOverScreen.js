import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props => {
    return (
    <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imgContainer}>
            <Image 
                source={require('../assets/images/success.png')}
                // always set width and height network images
                // source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}} 
                style={styles.image} 
                resizeMode="cover"
            />
        </View>
        {/* 
            Don't use Views inside a Text component! It is bad for business.
            Text inside of Text receives the style defined the outer Text component.
            Text component has own positioning/layout system which is not flexbox like View component.
        */}
        <View style={styles.resultContainer} >
            <BodyText style={styles.resultText}>Your phone needed 
                <Text style={styles.highlight}> {props.roundsNumber} </Text> 
                rounds to guess the number 
                <Text style={styles.highlight}> {props.userNumber}. </Text>
            </BodyText>
            <MainButton onPress={props.onRestart}>
                NEW GAME 
            </MainButton>
        </View>
    </View>
    );
};
// for perfect circle: border radius must be half size of the width and height
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius:150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
        alignItems: 'center'
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 15
    }
});

export default GameOverScreen;