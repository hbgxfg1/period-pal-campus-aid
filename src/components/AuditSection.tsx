import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Star, 
  MapPin, 
  Calendar,
  FileText,
  Download,
  Plus
} from 'lucide-react';

const AuditSection = () => {
  const [selectedFacility, setSelectedFacility] = useState('all');

  const auditScores = [
    {
      facility: 'Main Building',
      overall: 85,
      hygiene: 90,
      supplies: 80,
      privacy: 85,
      accessibility: 85,
      lastAudit: '2024-01-15',
      status: 'Good'
    },
    {
      facility: 'Library Building',
      overall: 92,
      hygiene: 95,
      supplies: 90,
      privacy: 90,
      accessibility: 90,
      lastAudit: '2024-01-12',
      status: 'Excellent'
    },
    {
      facility: 'Science Block',
      overall: 75,
      hygiene: 70,
      supplies: 80,
      privacy: 75,
      accessibility: 75,
      lastAudit: '2024-01-10',
      status: 'Needs Improvement'
    },
    {
      facility: 'Arts Building',
      overall: 88,
      hygiene: 85,
      supplies: 90,
      privacy: 90,
      accessibility: 85,
      lastAudit: '2024-01-08',
      status: 'Good'
    }
  ];

  const auditCriteria = [
    {
      category: 'Hygiene Standards',
      items: [
        { name: 'Cleanliness of facilities', weight: 25, score: 85 },
        { name: 'Handwashing stations', weight: 20, score: 90 },
        { name: 'Proper ventilation', weight: 15, score: 80 },
        { name: 'Floor and surface maintenance', weight: 20, score: 85 },
        { name: 'Odor control', weight: 20, score: 75 }
      ]
    },
    {
      category: 'Supply Management',
      items: [
        { name: 'Product availability', weight: 30, score: 80 },
        { name: 'Dispenser functionality', weight: 25, score: 85 },
        { name: 'Product quality', weight: 20, score: 90 },
        { name: 'Restocking frequency', weight: 25, score: 75 }
      ]
    },
    {
      category: 'Privacy & Accessibility',
      items: [
        { name: 'Door locks and privacy', weight: 30, score: 90 },
        { name: 'Adequate space', weight: 25, score: 85 },
        { name: 'Disability access', weight: 20, score: 80 },
        { name: 'Lighting adequacy', weight: 25, score: 85 }
      ]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 80) return 'text-warning';
    if (score >= 70) return 'text-info';
    return 'text-destructive';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-success';
    if (score >= 80) return 'bg-warning';
    if (score >= 70) return 'bg-info';
    return 'bg-destructive';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Excellent':
        return <Badge className="bg-success text-success-foreground">{status}</Badge>;
      case 'Good':
        return <Badge className="bg-warning text-warning-foreground">{status}</Badge>;
      case 'Needs Improvement':
        return <Badge className="bg-destructive text-destructive-foreground">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <section id="audit" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Campus Audit System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive facility assessments with scoring systems aligned to health standards and actionable improvement suggestions.
          </p>
        </div>

        {/* Audit Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-3 p-6 glass-card border-primary/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Facility Audit Scores</h3>
              <div className="flex items-center space-x-4">
                <select
                  value={selectedFacility}
                  onChange={(e) => setSelectedFacility(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-border bg-background focus:border-primary outline-none"
                >
                  <option value="all">All Facilities</option>
                  <option value="main">Main Building</option>
                  <option value="library">Library Building</option>
                  <option value="science">Science Block</option>
                  <option value="arts">Arts Building</option>
                </select>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Audit
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {auditScores.map((facility, index) => (
                <div key={facility.facility} className="p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold text-lg">{facility.facility}</h4>
                      {getStatusBadge(facility.status)}
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-muted-foreground">
                        Last audit: {facility.lastAudit}
                      </span>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getScoreColor(facility.overall)}`}>
                          {facility.overall}%
                        </div>
                        <div className="text-xs text-muted-foreground">Overall Score</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'Hygiene', score: facility.hygiene },
                      { label: 'Supplies', score: facility.supplies },
                      { label: 'Privacy', score: facility.privacy },
                      { label: 'Accessibility', score: facility.accessibility }
                    ].map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                          <div className="absolute inset-0 rounded-full bg-muted">
                            <div
                              className={`absolute inset-0 rounded-full ${getScoreBg(metric.score)}`}
                              style={{
                                clipPath: `conic-gradient(from 0deg, transparent ${100 - metric.score}%, currentColor ${100 - metric.score}%)`
                              }}
                            />
                          </div>
                          <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                            <span className={`text-sm font-bold ${getScoreColor(metric.score)}`}>
                              {metric.score}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="p-6 glass-card border-primary/10">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Audit
                </Button>
                <Button variant="gradient" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Start Audit
                </Button>
              </div>
            </Card>

            <Card className="p-6 glass-card border-primary/10">
              <h3 className="font-semibold mb-4">Compliance Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Health Standards</span>
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Safety Protocols</span>
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Accessibility</span>
                  <AlertTriangle className="h-5 w-5 text-warning" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Privacy Standards</span>
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Detailed Audit Criteria */}
        <Card className="p-6 glass-card border-primary/10">
          <h3 className="text-2xl font-semibold mb-6">Audit Criteria & Standards</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {auditCriteria.map((category) => (
              <div key={category.category} className="space-y-4">
                <h4 className="font-semibold text-lg text-primary">{category.category}</h4>
                
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <div key={index} className="p-3 bg-muted/30 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className={`text-sm font-bold ${getScoreColor(item.score)}`}>
                          {item.score}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>Weight: {item.weight}%</span>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(item.score / 20) ? 'text-warning fill-current' : 'text-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1 mt-2">
                        <div
                          className={`h-1 rounded-full ${getScoreBg(item.score)}`}
                          style={{ width: `${item.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h5 className="font-semibold text-primary mb-2">Improvement Recommendations</h5>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Increase frequency of restocking in Science Block facilities</li>
              <li>• Improve ventilation systems in Main Building restrooms</li>
              <li>• Install additional privacy measures in Arts Building</li>
              <li>• Regular maintenance schedule for all dispenser units</li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AuditSection;