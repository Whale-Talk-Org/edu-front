import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import User from './modules/user';
import Exam from './modules/exam';
import Document from './modules/document';
import Student from './modules/student';
import Class from './modules/class';
import MainLayout from './layouts/MainLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="exam/*" element={<Exam />} />
          <Route path="class/*" element={<Class />} />
          <Route path="document/*" element={<Document />} />
          <Route index element={<Navigate to="exam" replace />} />
        </Route>

        <Route path="/user/*" element={<User />} />
        <Route path="/student/*" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
} 