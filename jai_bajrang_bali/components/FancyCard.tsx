import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.fancyCard}>
        <Image style={styles.cardImage} source={{
            uri:"https://th.bing.com/th/id/OIP.6egjjjZePTGpTiDfD8ipNQHaHb?w=192&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }}/>
        <Text style={styles.name}>Hanuman</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        paddingVertical:10
        
   },
    cardImage:{
        height:350,
    },
    fancyCard:{
        margin:8,
        padding:10,
        borderRadius:10,
        backgroundColor:"grey"
    },
    name:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        color:"#fff",
        
    }
})