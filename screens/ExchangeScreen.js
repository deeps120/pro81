import React from 'react';
import { StyleSheet, Text,
         View,TextInput,TouchableOpacity,
        KeyboardAvoidingView,FlatList, Alert,
    ListItem} from 'react-native';
import * as firebase from 'firebase';
import db from '../config';

class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={
           itemName:'',
           description:''
        }
    }
   addItem=(itemName,description)=>{
    var username = this.state.username
    db.collection('exchange_requests').add({
        "username": userName,
        "itemName": itemName,
        "description": description,
        

    })
    this.setState({
        itemName : '',
        description : ''
    })
    return Alert.alert('item ready to sell','',
    [
        {text : 'ok', onPress: ()=>{this.props.navigation.navigate('homeScreen')
    }}
    ]
    );
   }

   renderItem=({item,i})=>{
return(
    <ListItem>
        key={i}
        title={item.item_name}
        subtitle={item.description}
        rightElement={
            <TouchableOpacity><Text>exchange</Text></TouchableOpacity>
        }
    </ListItem>
)
   }

    render(){
        return(
            <View>
                <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addItem(this.state.itemName,this.state.description)}}>
                    <Text style={styles.text}>add item </Text>
                </TouchableOpacity>

                <FlatList>
                KeyExtractor={this.KeyExtractor}
                data={this.state.all_Requests}
                renderItem ={ this.renderItem}
                </FlatList>
                </View>
        );
    }
}
const styles=StyleSheet.create({
    Button:{
        width:100,
        height:50,
        alignSelf:'center',
        marginTop:10
    },
   
    text:{
        fontSize:18,
        fontStyle:'italic',
        fontWeight:'bold'
       
    }
})
export default ExchangeScreen;
