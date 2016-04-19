import React, {Component, TouchableHighlight, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FeedButton extends Component {
  render() {
    return (
      <TouchableHighlight>
        <View style={[styles.inline].concat(this.props.style)}>
          <Icon name={this.props.icon} style={[styles.color, styles.icon]}/>
          <Text style={[styles.color, styles.text]}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default FeedButton;

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row'
  },
  color: {
    color: '#6b6b6b'
  },
  icon: {
    lineHeight: 15,
    marginRight: 5
  },
  text: {
  }
});
