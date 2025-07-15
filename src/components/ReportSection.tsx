import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { QrCode, MapPin, AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react';

const ReportSection = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [location, setLocation] = useState('');
  const [severity, setSeverity] = useState('');

  const issueTypes = [
    { id: 'dispenser', label: 'Empty Dispenser', icon: AlertTriangle, color: 'text-warning' },
    { id: 'cleanliness', label: 'Poor Cleanliness', icon: AlertTriangle, color: 'text-destructive' },
    { id: 'disposal', label: 'Full Disposal Bin', icon: AlertTriangle, color: 'text-warning' },
    { id: 'privacy', label: 'Privacy Issues', icon: Users, color: 'text-info' },
    { id: 'supplies', label: 'Missing Supplies', icon: AlertTriangle, color: 'text-destructive' },
    { id: 'maintenance', label: 'Maintenance Required', icon: Clock, color: 'text-warning' },
  ];

  const severityLevels = [
    { id: 'low', label: 'Low Priority', color: 'bg-success' },
    { id: 'medium', label: 'Medium Priority', color: 'bg-warning' },
    { id: 'high', label: 'High Priority', color: 'bg-destructive' },
    { id: 'urgent', label: 'Urgent', color: 'bg-destructive' },
  ];

  const locations = [
    'Main Building - 1st Floor',
    'Main Building - 2nd Floor',
    'Library Building',
    'Science Block',
    'Arts Building',
    'Sports Complex',
    'Cafeteria Area',
    'Dormitory Block A',
    'Dormitory Block B',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ selectedIssue, location, severity });
  };

  return (
    <section id="report" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Anonymous Issue Reporting
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Report menstrual hygiene issues safely and anonymously. Your voice matters in creating better facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* QR Code Section */}
          <div className="space-y-8">
            <Card className="p-8 text-center glass-card border-primary/20">
              <div className="w-48 h-48 bg-white rounded-xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                <QrCode className="h-32 w-32 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quick QR Report</h3>
              <p className="text-muted-foreground mb-6">
                Scan this QR code with your phone to quickly report an issue from any location on campus.
              </p>
              <Button variant="outline" size="lg">
                Generate Location QR
              </Button>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 glass-card rounded-lg">
                <CheckCircle className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">247</div>
                <div className="text-sm text-muted-foreground">Issues Resolved</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg">
                <Clock className="h-8 w-8 text-warning mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Pending Issues</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg">
                <Users className="h-8 w-8 text-info mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">89%</div>
                <div className="text-sm text-muted-foreground">User Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Report Form */}
          <Card className="p-8 glass-card border-primary/20">
            <h3 className="text-2xl font-semibold mb-6">Report an Issue</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Issue Type Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Issue Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {issueTypes.map((issue) => (
                    <button
                      key={issue.id}
                      type="button"
                      onClick={() => setSelectedIssue(issue.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        selectedIssue === issue.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <issue.icon className={`h-5 w-5 ${issue.color}`} />
                        <span className="font-medium">{issue.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                >
                  <option value="">Select a location</option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Severity Level */}
              <div>
                <label className="block text-sm font-medium mb-3">Priority Level</label>
                <div className="grid grid-cols-2 gap-3">
                  {severityLevels.map((level) => (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setSeverity(level.id)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                        severity === level.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${level.color}`} />
                        <span className="font-medium">{level.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block text-sm font-medium mb-3">Additional Details (Optional)</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Provide any additional details that might help resolve the issue..."
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={!selectedIssue || !location || !severity}
              >
                Submit Anonymous Report
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReportSection;