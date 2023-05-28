import React from 'react';
import { ConfigProvider ,Empty} from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.css';
import { Provider } from 'react-redux';
dayjs.locale('zh-cn');
import store from './store';

import Nodata from "@/assets/no-data.svg"

const App = () => {

  return (
    <ConfigProvider locale={zhCN} renderEmpty={() => <Empty image={Nodata}> </Empty>}>
       <Provider store={store}>
        </Provider>
    </ConfigProvider>
  );
};

export default App
