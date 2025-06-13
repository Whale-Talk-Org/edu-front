import React from 'react';
import { TabBar } from 'antd-mobile';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

// 导入图标（这里使用占位符，您可能需要根据实际情况替换）
import { 
  TeamOutline,
  ContentOutline
} from 'antd-mobile-icons';

const tabs = [
  {
    key: '/exam',
    title: '考试',
    icon: <TeamOutline />,
  },
  {
    key: '/class',
    title: '班级',
    icon: <TeamOutline />,
  },
  {
    key: '/document',
    title: '文件',
    icon: <ContentOutline />,
  },
];

const BasicLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  // 根据当前路由确定激活的 tab
  const activeKey = tabs.find(tab => location.pathname.startsWith(tab.key))?.key || '/exam';

  return (
    <div>
      {/* 路由内容渲染区域 */}
      <div style={{ paddingBottom: '50px' }}>
        <Outlet />
      </div>

      {/* 底部 TabBar */}
      <TabBar activeKey={activeKey} onChange={setRouteActive}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default BasicLayout; 