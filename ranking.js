import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Ranking(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
                        Perfil
                    </Text>
                </View>
                <View style={styles.dotdotdot}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
                     . . .
                    </Text>
                </View>
            </View>
            <View style={styles.userInfo}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>

                    </View>
                </View>
                <View style={styles.userDataContainer}>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
                        Saulo Joab
                    </Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffc103'}}>                    
                        Nível 4
                    </Text>
                </View>
            </View>
            <View style={styles.graphContainer}>
                <View>
                    <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>                    
                        Sua colaboração
                    </Text>
                </View>
                <View styles={styles.chart}>
                    <Text>GRAFICO FODAAAA</Text>
                </View>
            </View>
            <View style={styles.pointsContainer}>
                <View style={{
                    flex: 0.3, 
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 20
                    }}>
                    <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
                        <FontAwesome5 name={'angle-left'} size={40}/>
                    </Text>
                </View>
                <View style={{flex: 0.7, alignItems: 'flex-start'}}>
                    <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>                   
                        1200 pts
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#436cce',
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height
    },
    header: {
        flex: 0.2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flex: 0.3,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotdotdot: {
        flex: 0.7,
        alignItems: 'center'
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        flex: 0.2,
    },
    avatarContainer: {
        flex: 0.3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    userDataContainer: {
        flex: 0.7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    avatar: {
        width: 90,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 100
    },
    graphContainer: {
        flex: 0.6
    },
    chart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pointsContainer: {
        flex: 0.2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})