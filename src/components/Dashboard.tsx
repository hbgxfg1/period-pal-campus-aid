import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  MapPin, 
  Calendar,
  FileText,
  Shield,
  User
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  // Fake data for demonstration
  const [stats] = useState([
    { label: 'Total Reports', value: 452, change: '+12%', icon: FileText },
    { label: 'Pending Issues', value: 34, change: '-4%', icon: Clock },
    { label: 'Active Users', value: 235, change: '+8%', icon: User },
    { label: 'Resolution Rate', value: '92%', change: '+3%', icon: CheckCircle },
  ]);

  const [reports] = useState([
    { id: 1, type: 'Hygiene Issue', location: 'Building A - Floor 2', status: 'pending', priority: 'high', date: '2024-01-15' },
    { id: 2, type: 'Supply Shortage', location: 'Building B - Floor 1', status: 'in-progress', priority: 'medium', date: '2024-01-14' },
    { id: 3, type: 'Facility Damage', location: 'Building C - Floor 3', status: 'resolved', priority: 'low', date: '2024-01-13' },
    { id: 4, type: 'Privacy Concern', location: 'Building A - Floor 1', status: 'pending', priority: 'high', date: '2024-01-15' },
    { id: 5, type: 'Safety Hazard', location: 'Building D - Floor 4', status: 'in-progress', priority: 'medium', date: '2024-01-12' },
  ]);

  const [heatmapData] = useState([
    { day: 'Mon', hour: '08:00', value: 12 }, { day: 'Mon', hour: '09:00', value: 18 }, { day: 'Mon', hour: '10:00', value: 22 },
    { day: 'Tue', hour: '08:00', value: 8 }, { day: 'Tue', hour: '09:00', value: 15 }, { day: 'Tue', hour: '10:00', value: 19 },
    { day: 'Wed', hour: '08:00', value: 10 }, { day: 'Wed', hour: '09:00', value: 17 }, { day: 'Wed', hour: '10:00', value: 21 },
    { day: 'Thu', hour: '08:00', value: 14 }, { day: 'Thu', hour: '09:00', value: 20 }, { day: 'Thu', hour: '10:00', value: 24 },
    { day: 'Fri', hour: '08:00', value: 11 }, { day: 'Fri', hour: '09:00', value: 16 }, { day: 'Fri', hour: '10:00', value: 20 },
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
    }
  ]);

  const handleCardClick = (reportType: string) => {
    // Navigate to a specific route based on the report type
    navigate(`/reports?type=${reportType}`);
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
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">User Dashboard</h1>
            <p className="text-muted-foreground">Overview of facility status and recent reports</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>Today</span>
            </Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Reports - Left Side */}
          <div className="lg:col-span-1">
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
                  {reports.slice(0, 4).map((report) => (
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

          {/* Right Side - Admin Changes and User Reports */}
          <div className="lg:col-span-2 space-y-6">
            {/* Admin Changes Section */}
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

            {/* User's Own Reports Section */}
            <Card className="glass-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>My Reports</span>
                </CardTitle>
                <CardDescription>
                  Issues and reports you have submitted
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {userReports.map((report) => (
                    <div key={report.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
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
          </div>
        </div>

        {/* Heatmap Section */}
        <Card className="glass-card hover:shadow-glow transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Report Frequency Heatmap</span>
            </CardTitle>
            <CardDescription>
              Visualize report submission patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 gap-2">
              {/* Days */}
              <div></div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>

              {/* Hours */}
              <div>08:00</div>
              {heatmapData.filter(d => d.hour === '08:00').map((data, index) => (
                <div key={index} className={`p-2 rounded-md bg-primary/${data.value * 5}`} title={`${data.day} ${data.hour}: ${data.value} reports`}></div>
              ))}

              <div>09:00</div>
              {heatmapData.filter(d => d.hour === '09:00').map((data, index) => (
                <div key={index} className={`p-2 rounded-md bg-primary/${data.value * 5}`} title={`${data.day} ${data.hour}: ${data.value} reports`}></div>
              ))}

              <div>10:00</div>
              {heatmapData.filter(d => d.hour === '10:00').map((data, index) => (
                <div key={index} className={`p-2 rounded-md bg-primary/${data.value * 5}`} title={`${data.day} ${data.hour}: ${data.value} reports`}></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
