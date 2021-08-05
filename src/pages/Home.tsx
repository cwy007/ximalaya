import React from 'react';
import {View, Text, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/models/index';

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  navigation: RootStackNavigation;
}

const mapStateToProps = ({home, loading}: RootState) => ({
  num: home.num,
  // 哪一个异步操作的状态
  loading: loading.effects['home/asyncAdd'],
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

  handleAsyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {num: 2},
    });
  };

  render() {
    const {num, loading} = this.props;
    return (
      <View>
        <Text>Home{num}</Text>
        <Text>{loading ? '正在努力计算中' : ''}</Text>
        <Button title="加+10" onPress={this.handleAdd} />
        <Button title="异步加+2" onPress={this.handleAsyncAdd} />
        <Button title="跳转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default connector(Home);
