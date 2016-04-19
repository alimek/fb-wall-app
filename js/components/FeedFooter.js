import React, {Component, View, StyleSheet, TextInput, Image} from 'react-native';
import FeedButton from './FeedButton';

class FeedFooter extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inline}>
          <FeedButton style={styles.button} icon="thumbs-o-up" text="Like"/>
          <FeedButton style={styles.button} icon="comment-o" text="Comment"/>
          <FeedButton style={styles.button} icon="share" text="Share"/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.logo} source={{uri: 'http://www.skyscrapercity.com/customavatars/avatar406714_1.gif'}} />
          <TextInput style={styles.input} placeholder="Write comment ..."/>
        </View>
      </View>
    );
  }
}

export default FeedFooter;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    borderRadius: 5
  },
  inline: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 3
  },
  button: {
    marginRight: 25
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: -5,
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  logo: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: '#cecece',
    marginRight: 5
  },
  input: {
    flex: 2,
    backgroundColor: 'white',
    borderColor: '#cecece',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 5,
    fontSize: 10
  }
});