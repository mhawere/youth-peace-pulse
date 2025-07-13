import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import AdminPressReleaseManager from '@/components/AdminPressReleaseManager';

const AdminPress = () => {
  const handleUpdate = () => {
    // This function can be used to refresh data if needed
  };

  return (
    <AdminLayout>
      <AdminPressReleaseManager onUpdate={handleUpdate} />
    </AdminLayout>
  );
};

export default AdminPress;