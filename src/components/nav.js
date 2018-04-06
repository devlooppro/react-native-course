import { View, TouchableOpacity} from "react-native";
import React from 'react';
import styles from "../themes/styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Nav = (props)=>(
  <View
    style={ styles.nav }
  >
    <TouchableOpacity >
      <Icon name="user" size={30} color="#2c3e50" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="calendar" size={30} color="#2c3e50" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="rocket" size={30} color="#2c3e50" />
    </TouchableOpacity>
    <TouchableOpacity>
      <Icon name="bars" size={30} color="#2c3e50" />
    </TouchableOpacity>

  </View>
);

export default Nav;