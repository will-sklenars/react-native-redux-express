import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity, Animated, Easing} from 'react-native';
import styles from './Drink.styles'

class DrinkComponent extends Component {
  constructor(props) {
    super(props);
  }  

  getUrl (drink) {
    const httpURL = drink.strDrinkThumb
    return `${httpURL.slice(0, 4)}s${httpURL.slice(4)}` // add in the 's'
  }

  componentWillMount () {
    const rowHeight = 215
    const row = Math.floor( this.props.index / 2 ) + 1
    this._animateY = new Animated.Value(- row * rowHeight);
    this._animateImageOpacity = new Animated.Value(0);
    this._animateCopyOpacity = new Animated.Value(0);
  }

  componentDidMount () {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this._animateY, {
          toValue: 0,
          duration: 800,
          easing: Easing.elastic(1)
        }),
        Animated.timing(this._animateImageOpacity, {
          toValue: 1,
          duration: 800
        })
      ]),
      Animated.timing(this._animateCopyOpacity, {
        toValue: 1,
        duration: 400
      })
    ]).start()
  }

  render () { 
    const {drink, onImageLoadEnd} = this.props
    const httpsURL =  this.getUrl(drink)
    return (
      <View key={drink.idDrink} style={styles.drinkContainer}>
          <Animated.Image
            style={[styles.image, {
              transform: [{translateY: this._animateY}],
               opacity:   this._animateImageOpacity
            }]}
            source={{uri: httpsURL}}
            onLoadEnd={onImageLoadEnd}
          />
        <Animated.Text key={drink.idDrink} style={[styles.label, {opacity: this._animateCopyOpacity}]}>
          {drink.strDrink}
        </Animated.Text>
        <Animated.View style={[styles.line, {opacity: this._animateCopyOpacity}]}/>
      </View>
    )
  }
}

export default DrinkComponent