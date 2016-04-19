import React, {Component, NavigatorIOS, StyleSheet} from 'react-native';
import FacebookWall from './FacebookWall';

class Router extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: FacebookWall,
          title: 'FacebookWall'
        }}
        itemWrapperStyle={styles.itemWrapper}
        barTintColor="#3b5998"
        titleTextColor="white"
      />
    );
  }
}

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemWrapper: {
    backgroundColor: '#f7f7f7'
  }
});