import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width
const drinkContainerWidth = (screenWidth * 0.8) / 2
const imageWidth = drinkContainerWidth * 0.8

export default {
  
  drinkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: drinkContainerWidth,
    height: drinkContainerWidth * 1.3
  },


  image: {width: 100,
   height: imageWidth,
   width: imageWidth,
   marginBottom: 10,
   borderRadius: imageWidth/2
  },

  label: {
    maxWidth: 120,
    marginBottom: 20,
    textAlign: 'center',
  },

  line: {
    height: 1,
    backgroundColor: 'black',
    width: 150,
    position: 'absolute',
    bottom: 10
  }  

}
