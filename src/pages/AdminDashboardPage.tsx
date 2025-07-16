
import React from 'react';
import Navigation from '@/components/Navigation';
import AdminDashboard from '@/components/AdminDashboard';

const AdminDashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <AdminDashboard />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
