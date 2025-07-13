import React from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import AdminNewsletterManager from '@/components/AdminNewsletterManager';

const AdminNewsletter = () => {
  const handleUpdate = () => {
    // This function can be used to refresh data if needed
  };

  return (
    <AdminLayout>
      <AdminNewsletterManager onUpdate={handleUpdate} />
    </AdminLayout>
  );
};

export default AdminNewsletter;