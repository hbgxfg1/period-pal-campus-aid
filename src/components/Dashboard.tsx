import React, { useState } from 'react';
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

  const stats = [
    {
      title: 'Total Reports',
      value: '342',
      change: '+12%',
      trend: 'up',
      icon: BarChart3,
      color: 'text-primary'
    },
    {
      title: 'Resolved Issues',
      value: '289',
      change: '+8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-success'
    },
    {
      title: 'Pending Reviews',
      value: '23',
      change: '-5%',
      trend: 'down',
      icon: Clock,
      color: 'text-warning'
    },
    {
      title: 'Critical Issues',
      value: '7',
      change: '+2',
      trend: 'up',
      icon: AlertTriangle,
      color: 'text-destructive'
    }
  ];

  const recentReports = [
    {
      id: 1,
      type: 'Empty Dispenser',
      location: 'Main Building - 2nd Floor',
      priority: 'High',
      time: '2 hours ago',
      status: 'In Progress'
    },
    {
      id: 2,
      type: 'Poor Cleanliness',
      location: 'Library Building',
      priority: 'Medium',
      time: '4 hours ago',
      status: 'Resolved'
    },
    {
      id: 3,
      type: 'Missing Supplies',
      location: 'Science Block',
      priority: 'Urgent',
      time: '6 hours ago',
      status: 'Pending'
    },
    {
      id: 4,
      type: 'Privacy Issues',
      location: 'Arts Building',
      priority: 'Medium',
      time: '8 hours ago',
      status: 'In Progress'
    }
  ];

  const locationData = [
    { name: 'Main Building', issues: 45, resolved: 38, pending: 7 },
    { name: 'Library Building', issues: 32, resolved: 28, pending: 4 },
    { name: 'Science Block', issues: 28, resolved: 22, pending: 6 },
    { name: 'Arts Building', issues: 23, resolved: 20, pending: 3 },
    { name: 'Sports Complex', issues: 18, resolved: 15, pending: 3 },
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
      case 'pending': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Admin Dashboard
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-time insights and analytics for campus hygiene management
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
            <Card key={stat.title} className="p-6 glass-card border-primary/10 hover:shadow-glow transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`h-4 w-4 mr-1 ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`} />
                    <span className={`text-sm ${stat.trend === 'up' ? 'text-success' : 'text-destructive'}`}>
                      {stat.change}
                    </span>
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
              
              <div className="space-y-4">
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

          {/* Location Insights */}
          <Card className="p-6 glass-card border-primary/10">
            <h3 className="text-xl font-semibold mb-6">Location Insights</h3>
            
            <div className="space-y-4">
              {locationData.map((location, index) => (
                <div key={location.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{location.name}</span>
                    <span className="text-sm text-muted-foreground">{location.issues} total</span>
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
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6">
              <MapPin className="h-4 w-4 mr-2" />
              View Heatmap
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
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Issue Distribution Chart</p>
                  </div>
                </div>
                <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-success mx-auto mb-2" />
                    <p className="text-muted-foreground">Resolution Trends</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="trends" className="mt-6">
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-info mx-auto mb-2" />
                  <p className="text-muted-foreground">Time-based Analytics</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="mt-6">
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-2" />
                  <p className="text-muted-foreground">Performance Metrics</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-6">
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Download className="h-12 w-12 text-warning mx-auto mb-2" />
                  <p className="text-muted-foreground">Detailed Reports</p>
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