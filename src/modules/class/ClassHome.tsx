import { useEffect, useState } from 'react';
import { NavBar, Dropdown, List, DotLoading } from 'antd-mobile';
import { sayHello } from '@/api/hello';

const classOptions = [
  { label: '初一(2)班 英语', value: 'classA' },
  { label: '初一(1)班 英语', value: 'classB' },
];

interface Student {
  id: string;
  name: string;
  avatar: string;
  avgScore: number;
  maxScore: number;
  minScore: number;
}

export default function ClassHome() {
  const [classId, setClassId] = useState('classA');
  const [loading] = useState(false);
  const [students] = useState<Student[]>([
    {
      id: '1',
      name: '李明',
      avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
      avgScore: 92,
      maxScore: 96,
      minScore: 85,
    },
    {
      id: '2',
      name: '李明明明明',
      avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
      avgScore: 92,
      maxScore: 96,
      minScore: 85,
    },
    {
      id: '3',
      name: '陈藤藤',
      avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
      avgScore: 92,
      maxScore: 96,
      minScore: 85,
    },
    {
        id: '4',
        name: '李明',
        avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
        avgScore: 92,
        maxScore: 96,
        minScore: 85,
    },
    {
        id: '5',
        name: '李明',
        avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
        avgScore: 92,
        maxScore: 96,
        minScore: 85,
    },
    {
        id: '6',
        name: '卢胜蓝',
        avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
        avgScore: 92,
        maxScore: 96,
        minScore: 85,
    },
    {
        id: '7',
        name: '卢胜蓝',
        avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
        avgScore: 92,
        maxScore: 96,
        minScore: 85,
    },
    {
        id: '8',
        name: '卢胜蓝',
        avatar: 'https://pic.rmb.bdstatic.com/bjh/news/6c7ca0a23f49ebcf2305ff4567693ac4.png',
        avgScore: 92,
        maxScore: 96,
        minScore: 85,
    },
  ]);

  useEffect(() => {
    const testApi = async () => {
      try {
        const response = await sayHello({ name: 'test' });
        console.log('测试接口返回:', response);
      } catch (error) {
        console.error('测试接口调用失败:', error);
      }
    };

    testApi();
  }, []);

  return (
    <div>
      <NavBar
        back={null}
      >
        <Dropdown>
          <Dropdown.Item
            key="class"
            title={classOptions.find(opt => opt.value === classId)?.label || ''}
          >
            {classOptions.map(opt => (
              <Dropdown.Item
                key={opt.value}
                title={opt.label}
                onClick={() => setClassId(opt.value)}
              />
            ))}
          </Dropdown.Item>
        </Dropdown>
      </NavBar>

      {loading ? (
        <div style={{ textAlign: 'center', margin: 32 }}><DotLoading color="primary" /></div>
      ) : (
        <List>
          {students.map(student => (
            <List.Item
              key={student.id}
              prefix={
                <img
                  src={student.avatar}
                  style={{ borderRadius: 20, width: 40, height: 40 }}
                  alt="avatar"
                />
              }
              description={`平均分: ${student.avgScore} 最高分: ${student.maxScore} 最低分: ${student.minScore}`}
            >
              {student.name}
            </List.Item>
          ))}
        </List>
      )}

    </div>
  );
} 