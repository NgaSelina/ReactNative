import React, { useState } from "react";
import { SafeAreaView, View, Switch, StyleSheet, Text, StatusBar, ImageBackground, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import Video from 'react-native-video';
const background = { uri: "https://hinhchuctet.com/wp-content/uploads/2018/04/hinh-nen-phong-canh-thien-nhien-dep-3-450x800.jpg" };

const image = {uri:"https://t4.ftcdn.net/jpg/01/37/50/79/360_F_137507905_iAnRkcJkgkqvq2aV4FbefNAnUgDkNilw.jpg"};

const App = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.background} >

            <View style={styles.head}>
                <Text style={styles.prod}>PROD</Text>
                <Switch
                    trackColor={{ false: 'red', true: 'green' }}
                    thumbColor={isEnabled ? 'white' : 'white'}
                    onValueChange={toggleSwitch}
                    value={isEnabled} 
                    style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}  
                />
                <Text style={styles.staging}>STAGING</Text>
            </View>

                <Image source={image} resizeMode='cover' style={styles.image}></Image>
            
                <Text style={styles.big}>
                    BEYOND{"\n"}DRIVEN.
                </Text>
                <Text style={styles.small}>
                    If you're like us, obsessed {"\n"} with always being better {"\n"} today than you were {"\n"} yesterday, then welcome {"\n"} to MyTaylorMade+.
                </Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
                    <TouchableOpacity>
                        <Text style={styles.join}>JOIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.log}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
                

            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    big: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 30,
    },
    small: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    join: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 58,
        paddingVertical: 10,
    },
    log: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        borderRadius: 20,
        paddingHorizontal: 53,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 20,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginTop: 100,
        marginLeft: 30,
    },
    head: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    prod: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    staging: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default App;