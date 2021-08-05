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
  effects: {
    asyncAdd: Effect;
  };
}

const initialState = {
  num: 0,
};

function delay(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

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
  effects: {
    // 生成器函数
    // 参数与reducer中是相反的
    *asyncAdd({payload}, {call, put}) {
      // call 执行异步操作
      yield call(delay, 3000);
      // 派发action
      yield put({
        // 当前model中的action不用加namespace
        type: 'add',
        payload,
      });
    },
  },
};

export default homeModel;
