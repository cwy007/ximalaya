import {create} from 'dva-core-ts';
import models from '../models';
import createLoading from 'dva-loading-ts';

// 1.创建dva实例
const app = create();

// 2.加载 model 对象
models.forEach(model => {
  app.model(model);
});

// 插件
app.use(createLoading());

// 3.启动 dva
app.start();

// 4.导出dva的数据
export default app._store;
