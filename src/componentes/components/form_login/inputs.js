import React from 'react'
import { View,Text } from 'react-native'
import { FormValidationMessage, } from 'react-native-elements'
import { Item, Input } from 'native-base';
import Icon from '../../iconsObjet/Icon';
const Inputs = (props) => {
    return (
        <View>
            <Item style={props.InputStyleForm}> 
            <Icon name={props.iconName} 
                  fill={props.fillIcon}  
                  height='30'
                  width= '30'  
                  viewBox={props.viewBox}/>
                <Input 
                placeholder={props.valueInputPlaceholder}
                onChangeText={(val)=>props.onChangeText(props.nameInput,val)} 
                onFocus={()=>props.onFocus(props.nameInput)}
                onBlur={()=>props.onBlur(props.nameInput)}
                >
                    {props.valueInput}
                </Input>
                <Text style={{color:'#A40031',fontSize:16, marginRight:10}}>{props.requireText}</Text>
            </Item>
            {/* <FormInput 
              containerStyle={props.ContainerStyleFormImput}
              inputStyle={props.InputStyleForm}
              textInputRef={props.textInputRef}
              onFocus={()=>props.onFocus(props.nameInput)}
              onBlur={()=>props.onBlur(props.nameInput)}
              onChangeText={(val)=>props.onChangeText(props.nameInput,val)}
            >
               
            </FormInput> */}
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