import { useEffect, useState } from 'react';
import { NavBar, Dropdown, List, DotLoading } from 'antd-mobile';
import { sayHello } from '@/api/hello';
import { listClassStudents } from '@/api/class';
import styles from './ClassHome.module.css';
import arrowIcon from './img/arrow.svg';
import { mockStudentsClassA, mockStudentsClassB } from './mockStudents';
import { useNavigate } from 'react-router-dom';

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
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<Student[]>(
    // 初始加载 ClassA 的 Mock 数据
    mockStudentsClassA
  );
  const [activeDropdownKey, setActiveDropdownKey] = useState<string | null>(null);
  const navigate = useNavigate();

  // 提取的获取学生数据函数
  const fetchStudentsData = async (currentClassId: string) => {
    setLoading(true);
    try {
      // **TODO: 服务开通后，取消注释以下代码进行真实API调用**
      // const response = await listClassStudents(currentClassId, { pageSize: 10, pageNumber: 1 });
      // console.log('班级学生接口返回:', response);
      // setStudents(response.data.students); // 假设返回数据结构是 response.data.students

      // 服务未通时，使用 Mock 数据
      if (currentClassId === 'classA') {
        setStudents(mockStudentsClassA);
      } else if (currentClassId === 'classB') {
        setStudents(mockStudentsClassB);
      }
    } catch (error) {
      console.error('获取班级学生失败:', error);
      // 错误时也回退到 Mock 数据
      if (currentClassId === 'classA') {
        setStudents(mockStudentsClassA);
      } else if (currentClassId === 'classB') {
        setStudents(mockStudentsClassB);
      }
    } finally {
      setLoading(false);
    }
  };

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

    // 初始加载学生数据
    fetchStudentsData(classId);
  }, []); // 空依赖数组表示只在组件挂载时运行一次

  // 当 classId 变化时重新获取学生数据
  useEffect(() => {
    fetchStudentsData(classId);
  }, [classId]);

  return (
    <div className={styles.container}>
      <NavBar back={null} className={styles.header}>
        <Dropdown className={styles.myCustomDropdown}
          activeKey={activeDropdownKey}
          onChange={setActiveDropdownKey}
          arrow={
            <img
              src={arrowIcon}
              alt="arrow"
              style={{ width: '24px', height: '24px' }}
              className={`${styles.dropdownArrow} ${activeDropdownKey ? styles.dropdownArrowRotate : ''}`}
            />
          }
        >
          <Dropdown.Item
            key="class"
            title={classOptions.find(opt => opt.value === classId)?.label || ''}
            onClick={() => setActiveDropdownKey(activeDropdownKey === 'class' ? null : 'class')}
          >
            {classOptions.map(opt => (
              <Dropdown.Item
                key={opt.value}
                title={opt.label}
                onClick={() => {
                  setClassId(opt.value);
                  setActiveDropdownKey(null);
                }}
              />
            ))}
          </Dropdown.Item>
        </Dropdown>
      </NavBar>

      {loading ? (
        <div style={{ textAlign: 'center', margin: 32 }}><DotLoading color="primary" /></div>
      ) : (
        <div className={styles.list}>
          {students.map(student => (
            <div
              className={styles.studentItem}
              key={student.id}
              onClick={() => navigate(`/student/${student.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={student.avatar}
                className={styles.avatar}
                alt="avatar"
              />
              <div className={styles.info}>
                <div className={styles.name}>{student.name}</div>
                <div className={styles.scores}>
                  <span className={styles.scoreLabel}>平均分：{student.avgScore}</span>
                  <span className={styles.scoreLabel}>最高分：{student.maxScore}</span>
                  <span className={styles.scoreLabel}>最低分：{student.minScore}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
} 