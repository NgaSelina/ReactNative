import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';

const image = {uri: "https://lh3.googleusercontent.com/H2oENJMeM2_feKeIAcZHhRwDURqnC9wN31iPcUvcR_mnPScgxnsvOtkxx2SUBVfedLSb=w720-h310"};

const invited = {uri: "https://i.pinimg.com/564x/dc/5f/50/dc5f502fffc9a064bca7a7be5c8771b2.jpg"};

const DATA = [
  {

    name: 'Ngo Chuc',
    email: 'ngochuc@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-doraemon-ngai-ngung.jpg',
  status: 'not_invite',
  },
  {

    name: 'Ngo Chuc',
    email: 'ngochuc@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-doraemon-ngai-ngung.jpg',
  status: 'not_invite',
  },
  {

    name: 'Ngo Chuc',
    email: 'ngochuc@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-doraemon-ngai-ngung.jpg',
  status: 'not_invite',
  },
  {

    name: 'Nguyen Nga',
    email: 'nguyennga@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2021/02/avatar-dep-chanh-sa-cho-con-gai.jpg',
   status: 'invited',
  },
  {
 
    name: 'Le Thuan',
    email: 'lethuan@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg',
  status: 'invited',
  },
];
const DATA1= [
  {

    name: 'Ngo Chuc',
    email: 'ngochuc@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2020/10/hinh-anh-doraemon-ngai-ngung.jpg',
  status: 'not_invite',
  },
  {

    name: 'Nguyen Nga',
    email: 'nguyennga@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2021/02/avatar-dep-chanh-sa-cho-con-gai.jpg',
   status: 'invited',
  },
  {
 
    name: 'Le Thuan',
    email: 'lethuan@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg',
  status: 'invited',
  },
    {
 
    name: 'Le Thuan',
    email: 'lethuan@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg',
  status: 'invited',
  },
    {
 
    name: 'Le Thuan',
    email: 'lethuan@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg',
  status: 'invited',
  },  {
 
    name: 'Le Thuan',
    email: 'lethuan@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg',
  status: 'invited',
  },  {
 
    name: 'Le Thuan',
    email: 'lethuan@gmail.com',
    avatar:
            'https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg',
  status: 'invited',
  },
];

const Item = ({ name, email, avatar, status }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.email}>{email}</Text>
  </View>
);

const FlatListItem = ({item}) => {
    const [isSent, setRequestStatus] = useState(false)

    const renderStatus = (status) => {
        switch(status) {
          case 'not_invite':
            return <TouchableOpacity onPress={() => {
                // TODO: update status request
                setRequestStatus(!isSent);
            }}>
            <Text style={styles.not}>
              {isSent ? 'Sent' :'Invite'}
            </Text>
            </TouchableOpacity>
            case 'invited':
            return <TouchableOpacity><Image source={{  uri:  'https://i.pinimg.com/564x/dc/5f/50/dc5f502fffc9a064bca7a7be5c8771b2.jpg'}} resizeMode="cover" style={styles.logo} />
            </TouchableOpacity>
        }
      }

    return <View style={{flexDirection: 'row', borderRadius: 15,backgroundColor: 'pink', marginVertical: 1, alignItems: 'center'}}>
    
    <Image source={{  uri:  item.avatar}} resizeMode="cover" style={styles.avatar} />
    
      <View style={{ flex: 1}}>
        <Item name={item.name} 
        email={item.email}
         />
      </View>
      
      {renderStatus(item.status)}
      
    </View>
    
    }

const App = () => {
  const [contactList, setContactList] = useState(DATA1);


  const renderItem = ({ item }) => {
    return <FlatListItem item={item} />
  }
  
  const addList = () => {
 // 
   setContactList(DATA.concat(DATA1))
   ///setContactList([...DATA, ...DATA1])
  }

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image} >
      <FlatList
        data={contactList}
        ItemSeparatorComponent={() => <View style={{ height: 2, backgroundColor: 'gray'}} />}
        renderItem={renderItem}
        onEndReached={() => {
              /// addList();
              
              setContactList(DATA.concat(DATA1))
        }}
        onEndReachedThreshold={1}
      />
      <TouchableOpacity style={styles.basebutton} onPress={addList}>
       <Text style={styles.baseText}>Add more</Text>
      </TouchableOpacity>
     
      
      
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 1,
   
  },
  baseText:{
    coler: 'white',
  },
  basebutton:{
    borderRadius: 16,
    margin: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    
    
  },
  name: {
    color: 'gray',
    fontSize: 15,
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
    fontSize: 12,
  },
  image: {
    height: '100%',
    //paddingBottom: 100,
    //paddingTop: 27,
    
  },
  avatar: {
    marginLeft: 10,
    width: 60,
    height:60,
    borderRadius: 60,
  },
  not:{
    backgroundColor: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    marginRight: 20,
  },
  logo:{
    marginRight:10,
    width: 20,
    height: 20,
    marginRight: 20,
  },
});

export default App;