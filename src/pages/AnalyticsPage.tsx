
import React from 'react';
import Navigation from '@/components/Navigation';
import AnalyticsDetails from '@/components/AnalyticsDetails';

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <AnalyticsDetails />
      </div>
    </div>
  );
};

export default AnalyticsPage;
