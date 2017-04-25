import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const styles = StyleSheet.create({
  line: {
	  // flex: 1,
	  height: 1,
	  backgroundColor: 'black',
	  width: 100
  }
});


const HorizontalLine = (props) => {
	return (
		<View key={props.key} style={styles.line}/>
	)
}

export default HorizontalLine
