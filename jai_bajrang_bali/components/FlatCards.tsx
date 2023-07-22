import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards():JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <ScrollView horizontal={true}>

      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
           <Text>🥔</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
           <Text>🥕</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
           <Text>🍠</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
           <Text>🚀</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
           <Text>🍅</Text>
        </View>
      </View>
      </ScrollView>
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
    container:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
        
    },
    card:{
        height:100,
        width:100,
        margin:8,
        borderRadius:5,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    cardOne:{
        backgroundColor:"grey"
    },
    cardThree:{
        backgroundColor:"grey"
    },
    cardTwo:{
        backgroundColor:"grey"
    }
})