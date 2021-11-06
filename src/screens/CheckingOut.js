import React, { useState } from 'react'
import { Button, Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import datePicker from '../components/datePicker'
import DatePicker from 'react-native-date-picker'
import { Checkbox, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import colors from '../config/colors'


const CheckingOut = (props) => {
  const [date, setDate] = useState(new Date())
  const nav = useNavigation();
  return (
    <View style = { styles.container }>
        <Text style = { styles.title }>Förfrågan</Text>
        {/*<DatePicker date={date} onDateChange={setDate} />*/}
        <TextInput 
          placeholder = "datum"
        />

      <Pressable 
        style = { styles.Button }
        onPress = { () => nav.navigate("BookAndPay")}>
        <Text style = { styles.ButtonText }>
          Skicka förfrågan
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  Button: {
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 70,
    justifyContent: "center",
    marginVertical: 30,
    width: Dimensions.get("screen").width -44,
},
ButtonText: {
    alignContent: "center",
    alignSelf: "center",
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold"
},
  container: {
    paddingTop: 60
  },
  title: {
    fontSize: 30
  }
})

export default CheckingOut;

