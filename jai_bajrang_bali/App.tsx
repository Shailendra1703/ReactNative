import React from "react"
import { 
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  ScrollView
} from "react-native"
import FlatCards from "./components/FlatCards"
import FancyCard from "./components/FancyCard"


function App():JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return(
     <SafeAreaView>
      <ScrollView>
      <View>
        <FlatCards/>
      </View>
      <View>
        <FancyCard/>
      </View>
      </ScrollView>
     </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center"
  },
  whiteColor:{
    color:"#fff",
  },
  darkColor:{
    color:"red"
  }

})

export default App;