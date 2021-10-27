import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Card, Button, Modal, TouchableOpacity} from 'react-native';
import { BarChart } from 'react-native-chart-kit'
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome5'
import Icon4 from 'react-native-vector-icons/Entypo'

import { Dimensions } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';
import { TabRouter } from '@react-navigation/routers';

const data = {
    labels: ["6", "9", "12", "15", "18", "21", "24"],
    datasets: [
      {
        //This is where data from API should be
        data: [3, 5, 3, 2, 5, 3, 3]
      }
    ]
  };


const InfoScreen = () => {

  const [name, setName] = useState("ICA");
  const [crowd, setCrowd] = useState(null);
  const [adress, setAdress] = useState("Östra Kyrkogatan 24");

  //For closing and opening modal
  const [show, setShow] = useState();

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  //Sets the current crowd based on user feedback
  const decideCrowd = (value) => {
    if(value === "low"){
      setCrowd(1);
      alert("Crowd set to LOW");
    }
    else if (value === "mid") {
      
      setCrowd(2);
      alert("Crowd set to MID ");
    }
    else {
      setCrowd(3);
      alert("Crowd set to HIGH");
      
    }

  }

  //Get relevant smiley icon for the current crowd to display information
  const getCurrentCrowd = (crowd) => {
    if(crowd === 1) {
      return <Icon2 name="smiley" size={33} color="#00FF00"/>
    }
    else if (crowd === 2) {
      return <Icon2 name="slightly-smile" size={33} color="yellow"/>
    }
    else if (crowd === 3){
      return <Icon3 name="sad-cry" size={33} color="#FF0000"/>
    }
    else {
      return  <Icon name="question-circle" size={33} color="#FF0000"/>
    }
  }


  return (
    <View style={styles.container}>
      <Modal
        onHide={handleClose}
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
          <View style={styles.modalView}>
          <Icon4 name="cross" size={33} color="black" onPress={() => {setShow(false)}} style={styles.exitButton}/>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.title}>{name}</Text>
             
            </View>
              <View style={{flexDirection: 'row'}}>
              
              <Text style={styles.estimate}>Estimated crowd: </Text>
              {getCurrentCrowd(crowd)}
            </View>
            <View style={styles.modalContent}></View>
            <BarChart
                data={data}
                width={ScreenWidth-60}
                height={180}
                yAxisLabel=""
                chartConfig={{
                    backgroundGradientFrom: "#1E2923",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#ffffff",
                    backgroundGradientToOpacity: 0.5,
                    color: (opacity = 1) => `rgba(1, 20, 146, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    barPercentage: 0.5,
                    withVerticalLabels: false
                }}

            />
            <View style={styles.paragraph}>
              <Text>Address: {adress}</Text>
              <Text>How crowded is it?</Text>
            </View>

            <View style={styles.buttons}>
              <Icon2 name="smiley" size={33} color="#00FF00" onPress={() => {decideCrowd("low")}} style={{padding:7}}/>
              <Icon2 name="slightly-smile" size={33} color="yellow" onPress={() => {decideCrowd("mid")}} style={{padding:7}}/>
              <Icon3 name="sad-cry" size={33} color="#FF0000" onPress={() => {decideCrowd("high")}} style={{padding:7}}/>
            </View>

            <View style={styles.buttons}>
              <Icon.Button styles={styles.button}
                name="heart"
                onPress={ () => {
                  alert(name + " " + "has been favorited!");
                  setShow(false);
                }

                }>
                FAVORITE
              </Icon.Button>
            </View>
          </View>
        </Modal>
      </View>
     

    )
    
}

const styles = StyleSheet.create({
	container: {
		//alignItems: 'center',
		justifyContent: "center",
		padding: 24,
		backgroundColor: "white",
    height: 10
	},

	title: {
		margin: 10,
		marginTop: 5,
    marginLeft: 5,
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center"
	},

  buttons: {
    flexDirection: 'row',
    padding: 7,
  
  },

  paragraph: {
    marginLeft: 5
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    
  },
  modalContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black"
  },
  estimate: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5
  },
  
  exitButton: {
    margin: -20,
    alignSelf: 'flex-end',
    
  },
    
});

export default InfoScreen;