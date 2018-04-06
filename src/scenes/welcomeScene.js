import { View, Text} from "react-native";
import React, { Component } from "react";
import Layout from "../components/layout"
import { Actions } from 'react-native-router-flux';

import Button from '../components/button';
//import Input from "../components/input";
// constructor()
// componentWillReceiveProps()
// componentWillUpdate()
// componentWillMount()
// render()
// componentDidMount()
// componentDidUpdate()
// componentWillUnmount()



class welcomeScene extends Component {
  constructor(){
    super();
    this.state = {
      isShow: true,
      icon: 'rocket'
    };
  }

  componentWillMount(){

  }

  buttonClick() {
    this.setState(prevState=>{
      return { isShow: !prevState.isShow };
    })
  }
  toogleIcon(){
    this.setState(prevState=>{
      return { icon:
        prevState.icon=='rocket' ? 'user' : 'rocket'
      };
    })
  }

  render(){
    return (
      <Layout>


        <Text>123</Text>
        <View>

         </View>

        <Button text="toggle component"
                click={ Actions.list }/>
        <Button text="toggle icon"
                click={ this.toogleIcon.bind(this) }/>


      </Layout>
    )
  }
}

export default welcomeScene;