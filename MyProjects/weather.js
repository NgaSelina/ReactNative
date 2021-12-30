import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, Image, TouchableOpacity, Button, ScrollView } from 'react-native';

const background = { uri: "https://phunugioi.com/wp-content/uploads/2020/11/hinh-anh-may-mau-hong-338x600.jpg" };

const DATA = [
    {
        title: 'Mon',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
        isToday: 'true',
    },
    {
        title: 'Tue',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
        isToday: 'false',
    },
    {
        title: 'Wed',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
        isToday: 'false',
    },
    {
        title: 'Thu',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
        isToday: 'false',
    },
    {
        title: 'Fri',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
    {
        title: 'Sat',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
    {
        title: 'Mon',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
    {
        title: 'Tue',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
    {
        title: 'Wed',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
    {
        title: 'Thu',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
    {
        title: 'Fri',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
    {
        title: 'Sat',
        image: 'https://vinhphuc.gov.vn/ct/cms/Convert/dubaott/PublishingImages/Forms/Image/rain.png',
        temp: '21º31',
    },
];

const Item = ({ title, temp, customStyle }) => (
    <View style={[styles.item, customStyle]}>
        {title && <Text style={styles.title}>{title}</Text>}
        {temp && <Text style={styles.temp}>{temp}</Text>}
    </View>
);

const FlatListItem = ({ item }) => {
    return <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        
        <Item title={item.title} customStyle={{ width: 150 }} />

        <Image source={{ uri: item.image }} resizeMode="cover" style={styles.image} />

        <Item temp={item.temp} />

    </View>
}

const App = () => {

    const renderItem = ({ item }) => {
        
        return <FlatListItem item={item} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.background}>
              <ScrollView> 
                  <View>
                      <Text style={styles.numb}>30</Text>
                      <Text style={styles.weath}>sunny</Text>
                  </View>
                  <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Text style={styles.to}>Sun Today</Text>
                        <Text style={styles.te}>21º31</Text>
                    </View>
                    
            <FlatList
                data={DATA}
                renderItem={renderItem}
            />
                {/* {DATA.map((item) => renderItem({item}))} */}
                </ScrollView> 
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginVertical: 1,
        marginHorizontal: 1,
        padding: 20
    },
    title: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
    
    },
    temp: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
 
    },
    image: {

        marginLeft: 10,
        width: 30,
        height: 30,
        //borderRadius: 60,
    },
    numb: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 100,
        alignSelf: 'center',
    },
    weath: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
    },
    to: {
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    te: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20,
    },

});
export default App;