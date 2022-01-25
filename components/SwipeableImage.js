import { StyleSheet, Image, View, Text } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

export default function SwipeableImage({ user, willLike, willPass }) {
    return (
        <View>
            <Image source={{ uri: user?.picture.large }} style={styles.photo} />
            {willLike && (
                <View>
                    <Text style={{ ...styles.textPrimary, color: '#64EDCC'}}>LIKE</Text>
                    </View>
            )}

            {willPass && (
                <View>
                    <Text style={{ ...styles.textPrimary, color: '#64EDCC'}}>NOPE</Text>
                    </View>
            )}
            <View style={styles.textContainer}>
                <View style={styles.textRow}>
                    <Text style={styles.textPrimary}>{user.name.first}</Text>
                    <Text style={styles.textSecondary}>{user.dob.age}</Text>
                </View>
                <View style={{ flexDirection: "row"}}>
                    <FontAwesome name='map-marker' size={20} color="white" style={{padding: 8,}}></FontAwesome>
                    <Text style={styles.textSecondary}>{user?.location.city}</Text>
                </View>
            </View>
        </View>
      )
    }
   
    
const boxStyle= {
    position: 'absolute',
    top: '50%',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft: 20,
    paddingRight:20,
    borderWidth: 3,
    borderRadius: 10,

}

const styles = StyleSheet.create({
    likeBox: {
        ...boxStyle,
        left: 40,
        borderColor: '#64EDCC',

    },
    photo: {
        height: "100%",
        resizeMode: "cover",
        borderRadius: 20,
    },

    textContainer: {
        position: "absolute",
        bottom: 20,
        left: 20,
    },
    textRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    textPrimary: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold"
        },
    textSecondary: {
        color: "white",
        fontSize: 25,
        marginLeft: 10,
    },

    textShadow: {
        textShadowColor: "rgba(0,0,0,0.80)",
        textShadowOffset: {width:-1,height:1},
        textShadowRadius:10,
    },
});
