/* import React from 'react'
import { View, Button, Text, Modal} from 'react-native'
class App extends React.Component {
constructor()
{
  super();
  this.state={
    show: false
  }
}

  render(){
    return(
      <View style={{ flex: 1, marginTop: 100}}>
        <Text style={{ frontSize: 80}}>Normal screen Text</Text>
        <Button title="Info" onPress={()=>{this.setState({show:true})}} />
        <Modal
        transparent={true}
        visible={this.state.show}
        >
        <View style={{backgroundColor:"#000000aa", flex:1}}>
          <View style={{backgroundColor:"#ffffff",textAlignVertical: "center",textAlign: "center", margin:50, padding:40, borderRadius: 10, flex:1}}>
          <Text style={{ frontSize: 30}}>Disclaimer!</Text>
          <Text style={{ frontSize: 20}}>To accurately measure crowdedness we will use your positional data. This data will only be used to mark your position on the map, and will not be used for any other purpose. No other data will be collected!</Text>
        <Button title="OK" onPress={()=>{this.setState({show:false})}} />
          </View>

        </View>
        </Modal>
      </View>
    )
  }
}

export default App;
 */
