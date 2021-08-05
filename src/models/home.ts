import {Effect, Model} from 'dva-core-ts';
import {Reducer} from 'redux';

interface HomeState {
  num: number;
}

interface HomeModel extends Model {
  namespace: 'home'; // 类比身份证
  state: HomeState;
  // 同步action
  reducers: {
    add: Reducer<HomeState>;
  };
  // 异步action
  // effects: {
  //   asyncAdd: Effect;
  // };
}

const initialState = {
  num: 0,
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    add(state = initialState, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
};

export default homeModel;
