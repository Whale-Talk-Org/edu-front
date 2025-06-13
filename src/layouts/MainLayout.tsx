import { TabBar } from 'antd-mobile';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      key: '/exam',
      title: '考试',
      icon: null,
    //   icon: <i className="iconfont icon-exam" />,
    },
    {
      key: '/class',
      title: '班级',
      icon: null,

    //   icon: <i className="iconfont icon-class" />,
    },
    {
      key: '/doc',
      title: '文档管理',
      icon: null,

    //   icon: <i className="iconfont icon-doc" />,
    },
  ];

  return (
    <div>
      <div style={{ height: 'calc(100vh - 50px)', overflowY: 'auto' }}>
        <Outlet />
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <TabBar activeKey={location.pathname} onChange={value => navigate(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} style={{ fontSize: 14 }} />
          ))}
        </TabBar>
      </div>
    </div>
  );
} 