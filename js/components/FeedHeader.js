import React, {Component, View, StyleSheet, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class FeedHeader extends Component {
  render() {
    const {from, to} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'http://www.skyscrapercity.com/customavatars/avatar406714_1.gif'}} />
        <View style={styles.details}>
          <View style={[styles.name, styles.inline]}>
            <Text style={[styles.textColor]}>{from.name}</Text>
            <Icon style={styles.icon} name="angle-right"/>
            <Text style={[styles.textColor]}>{to.name}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.feedInformation}>2 hours ago</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FeedHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5
  },
  name: {
    height: 20
  },
  description: {

  },
  inline: {
    flexDirection: 'row'
  },
  feedInformation: {
    fontSize: 8
  },
  textColor: {
    color: '#3b5998',
    fontWeight: 'bold'
  },
  details: {
    flex: 2,
    flexDirection: 'column'
  },
  icon: {
    lineHeight: 15,
    marginHorizontal: 10,
    fontSize: 15
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cecece',
    marginRight: 5
  }
});
