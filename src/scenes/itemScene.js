import { View, Text} from "react-native";
import React, { Component } from "react";
import Layout from "../components/layout"
import { Actions } from 'react-native-router-flux';
import Button from '../components/button';

class itemScene extends Component {

  changeItem(){
    let index = parseInt(this.props.index)+ 1;
    Actions.refresh({index })
  }
  render(){
    return (
      <Layout>


        <Text>This is cool item #{this.props.index}</Text>
        <Button click={this.changeItem.bind(this, 1)}
                text="next"
        />
      </Layout>
    )
  }
}

export default itemScene;