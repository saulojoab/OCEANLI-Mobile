import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
            <View>
                <Text>Graph</Text>
            </View>
            <View>
                <Text>Points</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#436cce',
        flex: 0.8
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
    }
})