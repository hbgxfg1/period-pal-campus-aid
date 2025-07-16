import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  TrendingUp, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Calendar,
  Filter,
  Download
} from 'lucide-react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const navigate = useNavigate();

  // Fake data for college campus
  const stats = [
    {
      title: 'Total Reports',
      value: '1,247',
      change: '+18%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-primary'
    },
    {
      title: 'Resolved Issues',
      value: '1,089',
      change: '+15%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-success'
    },
    {
      title: 'Pending Reviews',
      value: '94',
      change: '-12%',
      trend: 'down',
      icon: Clock,
      color: 'text-warning'
    },
    {
      title: 'Critical Issues',
      value: '64',
      change: '+8%',
      trend: 'up',
      icon: AlertTriangle,
      color: 'text-destructive'
    }
  ];

  const recentReports = [
    {
      id: 1,
      type: 'Empty Soap Dispenser',
      location: 'Engineering Building - 3rd Floor Men\'s',
      priority: 'High',
      time: '15 minutes ago',
      status: 'In Progress',
      reporter: 'Student #4521'
    },
    {
      id: 2,
      type: 'Broken Toilet Seat',
      location: 'Library Main Floor - Women\'s',
      priority: 'Medium',
      time: '1 hour ago',
      status: 'Resolved',
      reporter: 'Staff #892'
    },
    {
      id: 3,
      type: 'No Paper Towels',
      location: 'Student Union - Food Court',
      priority: 'Urgent',
      time: '2 hours ago',
      status: 'Assigned',
      reporter: 'Student #7234'
    },
    {
      id: 4,
      type: 'Poor Ventilation',
      location: 'Science Block - Lab 204',
      priority: 'Medium',
      time: '3 hours ago',
      status: 'In Progress',
      reporter: 'Faculty #156'
    },
    {
      id: 5,
      type: 'Clogged Drain',
      location: 'Dormitory A - 2nd Floor',
      priority: 'High',
      time: '4 hours ago',
      status: 'Pending',
      reporter: 'Student #9876'
    },
    {
      id: 6,
      type: 'Missing Toilet Paper',
      location: 'Administration Building',
      priority: 'Medium',
      time: '5 hours ago',
      status: 'Resolved',
      reporter: 'Staff #445'
    }
  ];

  // Enhanced location data with more realistic college buildings
  const locationData = [
    { 
      name: 'Engineering Building', 
      issues: 186, 
      resolved: 152, 
      pending: 34,
      floors: 5,
      restrooms: 20,
      avgResolutionTime: '2.4 hrs'
    },
    { 
      name: 'Library Complex', 
      issues: 143, 
      resolved: 128, 
      pending: 15,
      floors: 4,
      restrooms: 12,
      avgResolutionTime: '1.8 hrs'
    },
    { 
      name: 'Student Union', 
      issues: 167, 
      resolved: 145, 
      pending: 22,
      floors: 3,
      restrooms: 18,
      avgResolutionTime: '3.1 hrs'
    },
    { 
      name: 'Science Complex', 
      issues: 124, 
      resolved: 108, 
      pending: 16,
      floors: 6,
      restrooms: 24,
      avgResolutionTime: '2.7 hrs'
    },
    { 
      name: 'Dormitory A', 
      issues: 98, 
      resolved: 82, 
      pending: 16,
      floors: 8,
      restrooms: 32,
      avgResolutionTime: '4.2 hrs'
    },
    { 
      name: 'Dormitory B', 
      issues: 89, 
      resolved: 76, 
      pending: 13,
      floors: 8,
      restrooms: 32,
      avgResolutionTime: '3.8 hrs'
    },
    { 
      name: 'Administration', 
      issues: 67, 
      resolved: 61, 
      pending: 6,
      floors: 3,
      restrooms: 8,
      avgResolutionTime: '1.5 hrs'
    },
    { 
      name: 'Arts Building', 
      issues: 78, 
      resolved: 69, 
      pending: 9,
      floors: 4,
      restrooms: 14,
      avgResolutionTime: '2.1 hrs'
    },
    { 
      name: 'Sports Complex', 
      issues: 134, 
      resolved: 115, 
      pending: 19,
      floors: 2,
      restrooms: 16,
      avgResolutionTime: '5.6 hrs'
    },
    { 
      name: 'Medical Center', 
      issues: 45, 
      resolved: 43, 
      pending: 2,
      floors: 2,
      restrooms: 6,
      avgResolutionTime: '0.9 hrs'
    }
  ];

  // Issue type distribution data
  const issueTypes = [
    { type: 'Empty Dispensers', count: 387, percentage: 31 },
    { type: 'Cleanliness', count: 298, percentage: 24 },
    { type: 'Missing Supplies', count: 186, percentage: 15 },
    { type: 'Maintenance', count: 167, percentage: 13 },
    { type: 'Plumbing', count: 124, percentage: 10 },
    { type: 'Other', count: 85, percentage: 7 }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'urgent': return 'bg-destructive text-destructive-foreground';
      case 'high': return 'bg-warning text-warning-foreground';
      case 'medium': return 'bg-info text-info-foreground';
      default: return 'bg-success text-success-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'resolved': return 'text-success';
      case 'in progress': return 'text-warning';
      case 'assigned': return 'text-info';
      case 'pending': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const handleStatsClick = (type: string) => {
    navigate(`/analytics?type=${type}`);
  };

  const handleBuildingClick = (buildingName: string) => {
    navigate(`/analytics?building=${encodeURIComponent(buildingName)}`);
  };

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Campus Hygiene Dashboard
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-time insights for State University campus facilities
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 rounded-lg border border-border bg-background focus:border-primary outline-none"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.title} 
              className="p-6 glass-card border-primary/10 hover:shadow-glow transition-all duration-300 cursor-pointer"
              onClick={() => handleStatsClick(['total', 'resolved', 'pending', 'critical'][index])}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-success' : 'text-destructive'} ${stat.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span className={`text-sm ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                      {stat.change}
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">vs last week</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Reports */}
          <div className="lg:col-span-2">
            <Card className="p-6 glass-card border-primary/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Recent Reports</h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div>
                        <p className="font-medium text-foreground">{report.type}</p>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {report.location}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Reported by: {report.reporter}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(report.priority)}`}>
                        {report.priority}
                      </span>
                      <div className="flex items-center justify-end mt-2 text-sm">
                        <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground mr-2">{report.time}</span>
                        <span className={`font-medium ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Building Heatmap */}
          <Card className="p-6 glass-card border-primary/10">
            <h3 className="text-xl font-semibold mb-6">Building Heatmap</h3>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {locationData.map((location, index) => (
                <div 
                  key={location.name} 
                  className="space-y-2 cursor-pointer hover:bg-muted/30 p-2 rounded-lg transition-colors"
                  onClick={() => handleBuildingClick(location.name)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground text-sm">{location.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{location.issues} total</span>
                      <div className={`w-3 h-3 rounded-full ${
                        location.pending > 25 ? 'bg-destructive' :
                        location.pending > 15 ? 'bg-warning' : 'bg-success'
                      }`} />
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(location.resolved / location.issues) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{location.resolved} resolved</span>
                    <span>{location.pending} pending</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Avg resolution: {location.avgResolutionTime} | {location.restrooms} restrooms
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="outline" 
              className="w-full mt-6"
              onClick={() => navigate('/analytics')}
            >
              <MapPin className="h-4 w-4 mr-2" />
              View Campus Map
            </Button>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Card className="mt-8 p-6 glass-card border-primary/10">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Issue Type Distribution</h4>
                  <div className="space-y-3">
                    {issueTypes.map((issue) => (
                      <div key={issue.type} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{issue.type}</span>
                          <span className="text-muted-foreground">{issue.count} ({issue.percentage}%)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${issue.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-success mx-auto mb-2" />
                    <p className="text-muted-foreground">Resolution Rate: 87.3%</p>
                    <p className="text-sm text-muted-foreground mt-1">↑ 5.2% from last month</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trends" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-foreground">2.8 hrs</p>
                  <p className="text-sm text-muted-foreground">Avg Resolution Time</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-foreground">94%</p>
                  <p className="text-sm text-muted-foreground">User Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-foreground">156</p>
                  <p className="text-sm text-muted-foreground">Reports This Week</p>
                </div>
              </div>
              <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-info mx-auto mb-2" />
                  <p className="text-muted-foreground">Weekly Trend Analysis</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Top Performing Buildings</h4>
                  {locationData.slice(0, 5).map((location, index) => (
                    <div key={location.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <p className="font-medium">{location.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {Math.round((location.resolved / location.issues) * 100)}% resolution rate
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`w-3 h-3 rounded-full ${index < 2 ? 'bg-success' : index < 4 ? 'bg-warning' : 'bg-muted'}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-secondary mx-auto mb-2" />
                    <p className="text-muted-foreground">Staff Performance Metrics</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span className="text-sm">Weekly Report</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span className="text-sm">Monthly Summary</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span className="text-sm">Building Analysis</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    <span className="text-sm">Custom Report</span>
                  </Button>
                </div>
                <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Detailed Analytics Coming Soon</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
