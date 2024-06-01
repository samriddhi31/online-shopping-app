import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { FashionLogo, HeartIcon, SolarBell } from '../../../assets'

const Header = () => {
  return (
        <View>
            <View style={styles.logoView}>
                <Image style={styles.headerImage}
                source={(FashionLogo)}
                />
                <View style={styles.headerContent}>
                    <Text style={styles.textContainer1}>
                        Good Morning
                    </Text>
                    <Text style={styles.textContainer2}>
                        Lorem ipsum
                    </Text>
                </View>
                <TouchableOpacity style={styles.sideContainer}>
                    <Image style={styles.solarBellStyle}
                    source={(SolarBell)}
                    />
                    <Image style={styles.heartIconStyle}
                    source={(HeartIcon)}
                    />
                </TouchableOpacity>
            </View>
        </View>
  )
}

export default Header