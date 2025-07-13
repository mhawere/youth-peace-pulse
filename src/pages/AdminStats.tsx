import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import AdminStatsManager from '@/components/AdminStatsManager';

const AdminStats = () => {
  return (
    <AdminLayout>
      <AdminStatsManager />
    </AdminLayout>
  );
};

export default AdminStats;