import React, { useRef  } from "react";
import { SafeAreaView, View, Switch, StyleSheet, Text, StatusBar, ImageBackground, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import Video from 'react-native-video';
// import backgroundVideo from './video/background';
const App = () => {
    const refVideo = useRef()
    const onBuffer = (data) => {
        console.log("on buffering==>>", data)
    }

    const videoError = (data) => {
        console.log("error raised==>>", data)
    }

    return(
        <View style={styles.container}>
            <Video source={require('./Campaign.mp4')} 
                ref={refVideo}                                    
                onBuffer={onBuffer}                
                onError={videoError} 
                controls={true}   
                paused={true}           
                style={styles.backgroundVideo} 
                resizeMode="cover"/>
               
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundVideo: {
        height: '100%',
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // backgroundColor: 'red',
    },
});

export default App;