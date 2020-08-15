import React from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';


import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import teachImg from '../../assets/images/icons/give-classes.png';
import heartImg from '../../assets/images/icons/heart.png'

import style from './style';

function Landing(){
    return (
        <View style={style.container}>
            <Image source={landingImg} style={style.banner} />

            <Text style={style.title}>
                Seja bem-vindo(a), {'\n'}
                <Text style={style.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={style.buttonsContainer}>
                <TouchableOpacity style={[style.button, style.buttonPrimary]}>
                    <Image source={studyImg} />
                    <Text style={style.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[style.button, style.buttonSecondary]}>
                    <Image source={teachImg} />
                    <Text style={style.buttonText}>Dar aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={style.totalConnections}>
                Total de 285 conexões já realizadas. {' '}
                <Image source={heartImg} />
            </Text>
        </View>
    )
}

export default Landing;