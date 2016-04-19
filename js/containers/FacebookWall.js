import React, {Component, ScrollView, StyleSheet} from 'react-native';
import Feed from '../components/Feed';

const feeds = [
  {
    id: 1,
    msg: 'Hello, asdfasdfasd fasdfas dfasdfa sdfasdfasdf',
    from: {
      name: 'LastName'
    },
    to: {
      name: 'Someone'
    }
  },
  {
    id: 2,
    msg: ', słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku. Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bar',
    from: {
      name: 'LastKoasd'
    },
    to: {
      name: 'iOS'
    }
  },
  {
    id: 3,
    msg: 'Yo, cvcvcv 123123123 dfasdfa sdfasdfasdf',
    from: {
      name: 'React'
    },
    to: {
      name: 'Kdasd'
    }
  },
  {
    id: 4,
    msg: 'ALS kdlaksd asdasd, asdfasdfasd fasdfas dfasasdfas df asdf asdf asd fasd fasdf asd fsdfa sdfasdfasdf',
    from: {
      name: 'Asdcasdasd'
    },
    to: {
      name: 'Qweasdasd'
    }
  },
  {
    id: 5,
    msg: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker',
    from: {
      name: 'Koqwenasd'
    },
    to: {
      name: 'QWeokasd'
    }
  }
];

class FacebookWall extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {feeds.map((item) => <Feed key={item.id} data={item}/>)}
      </ScrollView>
    );
  }
}

export default FacebookWall;

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
