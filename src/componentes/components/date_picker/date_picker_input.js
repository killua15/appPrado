import React from 'react'
import {View} from 'react-native'
import { Container, Header, Content, DatePicker, Text } from 'native-base';

const DatePickerInput = (props) => {
    return (
        <View>
           <DatePicker
            defaultDate={new Date(2010, 4, 4)}
            minimumDate={new Date(1900, 1, 1)}
            //maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Fecha Nacimiento"
            textStyle={{ color: "blue" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            />
            <Text>
              {/* Date: {this.state.chosenDate.toString().substr(4, 12)} */}
            </Text>
        </View>
    )
} 
export default DatePickerInput