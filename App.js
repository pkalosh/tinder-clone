import { StyleSheet, Text, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import TopBar from "./components/TopBar";
import React , {useEffect, useState, useRef}from 'react';
import axios from 'axios';
import SwipeableImage from './components/SwipeableImage';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes';

export default function App() {
  const [users, setUsers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipesRef = useRef(null)

  async function fetchUsers() {
    try {
      const {data} = await axios.get("https://randomuser.me/api/?gender=female&results=50")

      setUsers(data.results)
      console.log(data.results)

    } catch (error) {
      console.log(error)
      Alert.alert("Error getting users", "" , [{text: 'Retry', onPress:() => fetchUsers()}])
    }
  }

  useEffect(() =>{
    fetchUsers()
  }, [])

function handleLike() {
  nextUser()
}

function handlePass() {
  nextUser()
}


function nextUser() {
  const nextIndex = users.length -2 === currentIndex ? 0 : currentIndex + 1;
  setCurrentIndex(nextIndex)
}

function handleLikePress() {
  swipesRef.current.openLeft()
}

function handlePassPress() {
    swipesRef.current.openRight()
}
  return (
    <View style={styles.container}>
      <TopBar />
      <View index={currentIndex} style={styles.swipes}>
    {users.length > 1 && 
    users.map((user, index) => currentIndex === index && (
      <Swipes
      ref={swipesRef}
      key={index}
      currentIndex={currentIndex}
      users={users}
      handleLike={handleLike}
      nextUser={nextUser}
      handlPass={handlePass}
      
      ></Swipes>
    ))}
      </View>
      <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes:{
    flex: 1,
    padding:10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
      },
 shadowOpacity:0.12,
 shadowRadius: 4.65,
 elevation: 7,
  },
})
