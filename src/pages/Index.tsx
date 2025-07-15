import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ReportSection from '@/components/ReportSection';
import Dashboard from '@/components/Dashboard';
import AuditSection from '@/components/AuditSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ReportSection />
      <Dashboard />
      <AuditSection />
    </div>
  );
};

export default Index;
