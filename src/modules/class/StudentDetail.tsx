import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { mockStudentsClassA, mockStudentsClassB } from './mockStudents';
import styles from './ClassHome.module.css';
import detailStyles from './StudentDetail.module.css';

export default function StudentDetail() {
  const { id = '' } = useParams();
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const allStudents = [...mockStudentsClassA, ...mockStudentsClassB];
    if (!id) {
      setStudent(null);
      return;
    }
    const found = allStudents.find(s => String(s.id) === String(id));
    setStudent(found);
  }, [id]);

  if (!student) return <div style={{ padding: 24 }}>未找到该学生</div>;

  return (
    <div className={detailStyles.hideScrollbar}>
      <div className={detailStyles.header}>
        <span className={detailStyles.title}>个人档案</span>
      </div>
      <div style={{ position: 'relative', minHeight: 200 }}>
        <div className={styles.list} style={{ marginTop: 76 }}>
          <div className={styles.studentItem} style={{ cursor: 'default', borderBottom: 'none', marginBottom: 0 }}>
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
        </div>
      </div>
    </div>
  );
} 