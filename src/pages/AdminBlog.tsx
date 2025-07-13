import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import AdminBlogManager from '@/components/AdminBlogManager';

const AdminBlog = () => {
  return (
    <AdminLayout>
      <AdminBlogManager />
    </AdminLayout>
  );
};

export default AdminBlog;