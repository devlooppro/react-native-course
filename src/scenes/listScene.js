import { TouchableOpacity, Text} from "react-native";
import React, { Component } from "react";
import Layout from "../components/layout"
import { Actions } from 'react-native-router-flux';
import Button from '../components/button';

class listScene extends Component {


  itemPress(index){
    Actions.item({index})
  }

  render(){
    return (
      <Layout>


        <Button click={this.itemPress.bind(this, 1)}
        text="item1"
        />

        <Button click={this.itemPress.bind(this, 2)}
        text="item2"
        />

      </Layout>
    )
  }
}

export default listScene;