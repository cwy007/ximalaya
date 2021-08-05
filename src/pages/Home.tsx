import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const mapStateToProps = ({home}: RootState) => ({
  num: home.num,
});

const connector = connect(mapStateToProps);

class Home extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    });
  };

  handleAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {num: 10},
    });
  };

  render() {
    const {num} = this.props;
    return (
      <View>
        <Text>Home{num}</Text>
        <Button title="+" onPress={this.handleAdd} />
        <Button title="跳转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default connector(Home);
