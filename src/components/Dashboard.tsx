import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Calendar,
  FileText,
  Shield,
  User,
  Plus
} from 'lucide-react';
import DiscussionForum from './DiscussionForum';

const Dashboard = () => {
  const navigate = useNavigate();

  // Fake data for demonstration
  const [reports] = useState([
    { id: 1, type: 'Hygiene Issue', location: 'Building A - Floor 2', status: 'pending', priority: 'high', date: '2024-01-15' },
    { id: 2, type: 'Supply Shortage', location: 'Building B - Floor 1', status: 'in-progress', priority: 'medium', date: '2024-01-14' },
    { id: 3, type: 'Facility Damage', location: 'Building C - Floor 3', status: 'resolved', priority: 'low', date: '2024-01-13' },
    { id: 4, type: 'Privacy Concern', location: 'Building A - Floor 1', status: 'pending', priority: 'high', date: '2024-01-15' },
  ]);

  // New fake data for admin changes
  const [adminChanges] = useState([
    {
      id: 1,
      action: 'Resolved hygiene issue',
      location: 'Science Building - Floor 2',
      date: '2024-01-15',
      time: '2:30 PM'
    },
    {
      id: 2,
      action: 'Added new supplies',
      location: 'Library - Ground Floor',
      date: '2024-01-14',
      time: '11:15 AM'
    },
    {
      id: 3,
      action: 'Updated facility status',
      location: 'Engineering Block - Floor 3',
      date: '2024-01-13',
      time: '4:45 PM'
    },
    {
      id: 4,
      action: 'Maintenance completed',
      location: 'Main Building - Floor 1',
      date: '2024-01-12',
      time: '9:20 AM'
    }
  ]);

  // New fake data for user's own reports
  const [userReports] = useState([
    {
      id: 1,
      type: 'Supply Shortage',
      location: 'Computer Lab - Floor 2',
      status: 'resolved',
      priority: 'medium',
      date: '2024-01-10',
      adminResponse: 'Supplies restocked'
    },
    {
      id: 2,
      type: 'Hygiene Issue',
      location: 'Cafeteria - Ground Floor',
      status: 'in-progress',
      priority: 'high',
      date: '2024-01-12',
      adminResponse: 'Maintenance team assigned'
    },
    {
      id: 3,
      type: 'Privacy Concern',
      location: 'Student Center - Floor 1',
      status: 'pending',
      priority: 'medium',
      date: '2024-01-14',
      adminResponse: null
    },
    {
      id: 4,
      type: 'Facility Damage',
      location: 'Sports Complex - Locker Room',
      status: 'resolved',
      priority: 'low',
      date: '2024-01-08',
      adminResponse: 'Repairs completed successfully'
    },
    {
      id: 5,
      type: 'Safety Hazard',
      location: 'Chemistry Lab - Floor 3',
      status: 'pending',
      priority: 'high',
      date: '2024-01-16',
      adminResponse: null
    },
    {
      id: 6,
      type: 'Supply Shortage',
      location: 'Medical Room - Ground Floor',
      status: 'in-progress',
      priority: 'medium',
      date: '2024-01-11',
      adminResponse: 'Order placed, supplies arriving soon'
    }
  ]);

  const handleCardClick = (reportType: string) => {
    // Navigate to a specific route based on the report type
    navigate(`/reports?type=${reportType}`);
  };

  const handleReportIssue = () => {
    navigate('/report');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'in-progress': return 'bg-blue-500';
      case 'resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'outline';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header Section with Tabs */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">User Dashboard</h1>
            <p className="text-muted-foreground">Overview of facility status and recent reports</p>
          </div>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <div className="flex justify-end mb-6">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="forum">Discussion Forum</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="dashboard">
            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Recent Reports - Left Side */}
              <div>
                <Card className="glass-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5" />
                      <span>Recent Reports</span>
                    </CardTitle>
                    <CardDescription>
                      Latest facility reports from all users
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {reports.map((report) => (
                        <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${getStatusColor(report.status)}`} />
                            <div>
                              <h4 className="font-medium text-sm">{report.type}</h4>
                              <p className="text-xs text-muted-foreground flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {report.location}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={getPriorityColor(report.priority)} className="text-xs">
                              {report.priority}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{report.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Admin Changes - Right Side */}
              <div>
                <Card className="glass-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Recent Admin Updates</span>
                    </CardTitle>
                    <CardDescription>
                      Latest actions taken by administrators
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {adminChanges.map((change) => (
                        <div key={change.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                              <Shield className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{change.action}</h4>
                              <p className="text-xs text-muted-foreground flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {change.location}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-medium">{change.time}</p>
                            <p className="text-xs text-muted-foreground">{change.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* User's Own Reports Section - Full Width */}
            <Card className="glass-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span>My Reports</span>
                    </CardTitle>
                    <CardDescription>
                      Issues and reports you have submitted
                    </CardDescription>
                  </div>
                  <Button onClick={handleReportIssue} className="flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Report Issue</span>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userReports.map((report) => (
                    <div key={report.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(report.status)}`} />
                          <h4 className="font-medium text-sm">{report.type}</h4>
                        </div>
                        <Badge variant={getPriorityColor(report.priority)} className="text-xs">
                          {report.priority}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-center mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {report.location}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">{report.date}</p>
                      {report.adminResponse && (
                        <div className="mt-2 p-2 bg-muted/30 rounded text-xs">
                          <span className="font-medium text-primary">Admin Response: </span>
                          {report.adminResponse}
                        </div>
                      )}
                      {!report.adminResponse && report.status === 'pending' && (
                        <div className="mt-2 p-2 bg-yellow-500/10 rounded text-xs text-yellow-600">
                          Waiting for admin response...
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="forum">
            <DiscussionForum />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
