import React from 'react';
import Navigation from '@/components/Navigation';
import AuditSection from '@/components/AuditSection';

const AuditPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <AuditSection />
      </div>
    </div>
  );
};

export default AuditPage;