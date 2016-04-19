import React, {Component, View, Text, StyleSheet} from 'react-native';

class FeedContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.message}</Text>
      </View>
    )
  }
}

export default FeedContent;

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});