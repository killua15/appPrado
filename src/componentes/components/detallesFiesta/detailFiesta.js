import React, { Component } from 'react'
import { View, StyleSheet, Text, Dimensions, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { itemAction } from '../../../redux/actions/itemAction'
import { Spinner } from 'native-base';
import { material } from 'react-native-typography'
import HeaderBar from '../../components/headerBar/headerBar'
import ViewDetailFiesta from '../../containers/view_detail_fiesta/view_detal_fiesta';
import { Button, Tabs, Tab } from 'native-base';

class DetailFiesta extends Component {
    constructor(props) {
        super(props)
    }
    async componentWillMount() {
        console.log(this.props.idFiesta)
        await this.props.itemAction(this.props.idFiesta)
    }
    renderDetails = () => {
        const { image, title, date, text } = this.props.itemFiesta.data[0]
        console.log(image)
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: image }}
                    style={styles.view_imageBackgroud}
                    imageStyle={styles.imageStyleImageBackgroudn}>

                    <View style={styles.view_text}>
                        <Text style={styles.text_title}>
                            Codigo de Fiesta
                        </Text>
                    </View>
                    <View style={{ alignSelf: 'center', width: (Dimensions.get('screen').width * 70) / 100 }}>


                        {
                            this.props.itemFiesta.data[1] == true ?
                                <Button block danger>
                                    <Text>Asistir</Text>
                                </Button>
                                :
                                <Button block primary>
                                    <Text>Asistir</Text>
                                </Button>
                        }

                    </View>
                </ImageBackground>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'grey', height:(Dimensions.get('screen').width * 15) / 100 }}>
                 <Text style={{color:'#fff',marginRight:20}}>INFORMACION</Text>
                 <Text style={{color:'#fff',marginRight:20}}>UBICACION</Text>
                 <Text style={{color:'#fff'}}>COMENTARIOS</Text>
                </View>
                <ViewDetailFiesta Item={this.props.itemFiesta.data} />


            </View>
        )
    }
    render() {
        //console.log(this.props)
        return (
            this.props.itemFiesta.isFeching == true ?
                <Spinner></Spinner>
                :
                this.renderDetails()
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // marginTop:(Dimensions.get('screen').height*3)/100,
    },
    image_main: {
        height: (Dimensions.get('screen').height * 40) / 100,
        width: Dimensions.get('screen').width
    },
    view_imageBackgroud: {
        width: Dimensions.get('screen').width,
        height: (Dimensions.get('screen').height * 35) / 100,
        alignContent: 'center',
        justifyContent: 'center',

    },
    imageStyleImageBackgroudn: {
        width: Dimensions.get('screen').width,
        height: (Dimensions.get('screen').height * 35) / 100,
        resizeMode: 'stretch'
    },
    view_text_fecha: {
        flex: 0.3,
        alignContent: 'center',
        backgroundColor: '#F10915',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        opacity: 0.8,
    },
    view_text: {
        flex: 0.3,
        marginBottom: 10,
        alignContent: 'center',
        backgroundColor: '#F10915',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        opacity: 0.8,
    },
    text_title: {
        ...material.headline,
        color: '#fff',
        alignSelf: 'center'
    },
    text_fecha: {
        ...material.headline,
        color: '#fff',
        alignSelf: 'center'
    }
})
const mapStateToProps = (state) => {
    const { itemFiesta } = state
    return { itemFiesta }
}
const mapDispatchToProps = dispatch => {
    return {
        itemAction: (id) => dispatch(itemAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailFiesta) 