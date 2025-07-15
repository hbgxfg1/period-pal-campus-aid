import React from 'react';
import Navigation from '@/components/Navigation';
import ReportSection from '@/components/ReportSection';

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ReportSection />
      </div>
    </div>
  );
};

export default ReportPage;