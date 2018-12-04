import React from 'react'
import {View} from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Icon } from 'react-native-elements'

const Inputs = (props) => {
    return (
        <View>
            <FormInput 
              containerStyle={props.ContainerStyleFormImput}
              inputStyle={props.InputStyleForm}
              textInputRef={props.textInputRef}
              onFocus={()=>props.onFocus(props.nameInput)}
              onBlur={()=>props.onBlur(props.nameInput)}
              onChangeText={(val)=>props.onChangeText(props.nameInput,val)}
            >
                {props.valueInput}{props.children}
            </FormInput>
            <FormValidationMessage
              containerStyle={props.ContainerStylevalidation}
              labelStyle={props.LabelStyleValidation}
              fontFamily={props.fontFamilyValidation}
            >{props.errorMessage}
            </FormValidationMessage>
        </View>
    )
} 
export default Inputs