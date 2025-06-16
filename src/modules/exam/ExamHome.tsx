import { useState } from 'react';
import { NavBar, Dropdown, SearchBar, List, Collapse, DotLoading } from 'antd-mobile';
// import { getExamList } from '../../api/exam';
// import { getHomeworkList } from '../../api/homework';

const classOptions = [
  { label: '初一(2)班 英语', value: 'classA' },
  { label: '初一(1)班 英语', value: 'classB' },
];

interface Exam {
  id: string;
  title: string;
  date: string;
  avgScore: number;
  maxScore: number;
  minScore: number;
}
interface Homework {
  id: string;
  title: string;
  date: string;
}


export default function ExamHome() {
  const [classId, setClassId] = useState('classA');
  // const [exams, setExams] = useState<Exam[]>([]);
  // const [homeworks, setHomeworks] = useState<Homework[]>([]);
  const [exams] = useState<Exam[]>([
    {
      id: '1',
      title: '高一第一学期期末考',
      date: '2025.12.7',
      avgScore: 75,
      maxScore: 97,
      minScore: 60,
    },
    {
      id: '2',
      title: '高一第一学期期中考',
      date: '2024.11.7',
      avgScore: 75,
      maxScore: 97,
      minScore: 60,
    },
    {
      id: '3',
      title: '高一第一次月考',
      date: '2024.10.7',
      avgScore: 75,
      maxScore: 97,
      minScore: 60,
    },
  ]);
  
  const [homeworks] = useState<Homework[]>([
    {
      id: '1',
      title: '9月8日作业1',
      date: '2025.9.8',
    },
    {
      id: '2',
      title: '9月8日作业2',
      date: '2025.9.8',
    },
  ]);
  const [loading] = useState(false);
  const [examOpen, setExamOpen] = useState(true);
  const [hwOpen, setHwOpen] = useState(true);

  // useEffect(() => {
    // setLoading(true);
    // Promise.all([
    //   getExamList({ classId }).then(res => setExams(res.data.exams)),
    //   getHomeworkList({ classId }).then(res => setHomeworks(res.data.homeworks)),
    // ]).finally(() => setLoading(false));
  // }, [classId]);

  return (
//     <div>
//       <NavBar
//         back={null}
//         right={
//           <SearchBar
//             placeholder="搜索"
//             style={{ '--background': 'transparent', width: 120 }}
//             onFocus={() => {/* 跳转或弹窗 */}}
//           />
//         }
//       >
//         <Dropdown>
//   <Dropdown.Item
//     key="class"
//     title={classOptions.find(opt => opt.value === classId)?.label || ''}
//   >
//     {classOptions.map(opt => (
//       <Dropdown.Item
//         key={opt.value}
//         title={opt.label}
//         onClick={() => setClassId(opt.value)}
//       />
//     ))}
//   </Dropdown.Item>
// </Dropdown>
//       </NavBar>

//       {loading ? (
//         <div style={{ textAlign: 'center', margin: 32 }}><DotLoading color="primary" /></div>
//       ) : (
//         <>
//           <Collapse activeKey={examOpen ? ['exam'] : []} onChange={keys => setExamOpen(keys.includes('exam'))}>
//             <Collapse.Panel key="exam" title="考试">
//               <List>
//                 {exams.map(exam => (
//                   <List.Item
//                     key={exam.id}
//                     description={`班均：${exam.avgScore} 最高：${exam.maxScore} 最低：${exam.minScore}`}
//                     extra={exam.date}
//                     onClick={() => {/* 跳转详情 */}}
//                   >
//                     {exam.title}
//                   </List.Item>
//                 ))}
//               </List>
//             </Collapse.Panel>
//           </Collapse>
//           <Collapse activeKey={hwOpen ? ['hw'] : []} onChange={keys => setHwOpen(keys.includes('hw'))}>
//             <Collapse.Panel key="hw" title="作业">
//               <List>
//                 {homeworks.map(hw => (
//                   <List.Item key={hw.id} extra={hw.date}>
//                     {hw.title}
//                   </List.Item>
//                 ))}
//               </List>
//             </Collapse.Panel>
//           </Collapse>
//         </>
//       )}
//     </div>
<div>exam 模块</div>
  );
}