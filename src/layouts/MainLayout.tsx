import { TabBar } from 'antd-mobile';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import examIcon from '../assets/img/exam.svg';
import classIcon from '../assets/img/class.svg';
import docIcon from '../assets/img/doc.svg';
import mainLayoutStyles from './MainLayout.module.css';

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    {
      key: '/exam',
      title: '考试',
      icon: <img src={examIcon} alt="exam" style={{ width: '24px', height: '24px' }} />,
    },
    {
      key: '/class',
      title: '班级',
      icon: <img src={classIcon} alt="class" style={{ width: '24px', height: '24px' }} />,
    },
    {
      key: '/document',
      title: '文档',
      icon: <img src={docIcon} alt="doc" style={{ width: '24px', height: '24px' }} />,
    },
  ];

  return (
    <div>
      <div style={{ height: 'calc(100vh - 50px)', overflowY: 'auto' }}>
        <Outlet />
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 1000, backgroundColor: '#fff' }}>
        <TabBar activeKey={location.pathname} onChange={value => navigate(value)}>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              className={mainLayoutStyles.tabItemText}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
} 