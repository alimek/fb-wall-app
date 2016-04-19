import React, {Component, TouchableHighlight, View, Text, StyleSheet} from 'react-native';

import FeedFooter from './FeedFooter';
import FeedContent from './FeedContent';
import FeedHeader from './FeedHeader';

class Feed extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.container}>
        <View style={styles.feed}>
          <FeedHeader from={this.props.data.from} to={this.props.data.to}/>
          <FeedContent message={this.props.data.msg}/>
          <FeedFooter/>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cecece',
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  feed: {
    padding: 0,
    borderBottomRightRadius: 10,
    borderRadius: 5
  }
});
