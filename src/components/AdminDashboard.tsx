
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Settings, 
  Shield, 
  FileText,
  TrendingUp,
  MapPin,
  Calendar
} from 'lucide-react';

const AdminDashboard = () => {
  const [reports] = useState([
    { id: 1, type: 'Hygiene Issue', location: 'Building A - Floor 2', status: 'pending', priority: 'high', date: '2024-01-15' },
    { id: 2, type: 'Supply Shortage', location: 'Building B - Floor 1', status: 'in-progress', priority: 'medium', date: '2024-01-14' },
    { id: 3, type: 'Facility Damage', location: 'Building C - Floor 3', status: 'resolved', priority: 'low', date: '2024-01-13' },
    { id: 4, type: 'Privacy Concern', location: 'Building A - Floor 1', status: 'pending', priority: 'high', date: '2024-01-15' },
  ]);

  const [users] = useState([
    { id: 1, role: 'Student', lastActive: '2024-01-15', reportsSubmitted: 3 },
    { id: 2, role: 'Faculty', lastActive: '2024-01-14', reportsSubmitted: 1 },
    { id: 3, role: 'Staff', lastActive: '2024-01-15', reportsSubmitted: 5 },
  ]);

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage reports, users, and system settings</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Shield className="h-3 w-3" />
              <span>Admin Access</span>
            </Badge>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{reports.length}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Issues</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">
                {reports.filter(r => r.status === 'pending').length}
              </div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{users.length}</div>
              <p className="text-xs text-muted-foreground">+5% this week</p>
            </CardContent>
          </Card>

          <Card className="glass-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">85%</div>
              <p className="text-xs text-muted-foreground">+8% improvement</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="reports">Reports Management</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="facilities">Facility Status</TabsTrigger>
            <TabsTrigger value="settings">System Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="reports" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5" />
                  <span>Recent Reports</span>
                </CardTitle>
                <CardDescription>
                  Manage and respond to user reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(report.status)}`} />
                        <div>
                          <h3 className="font-medium">{report.type}</h3>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {report.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getPriorityColor(report.priority)}>
                          {report.priority}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{report.date}</span>
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>User Activity</span>
                </CardTitle>
                <CardDescription>
                  Monitor user engagement and activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Anonymous {user.role}</h3>
                          <p className="text-sm text-muted-foreground">
                            Last active: {user.lastActive}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{user.reportsSubmitted} reports</p>
                          <p className="text-xs text-muted-foreground">submitted</p>
                        </div>
                        <Button size="sm" variant="ghost">
                          View Activity
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="facilities" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Facility Status</span>
                </CardTitle>
                <CardDescription>
                  Overview of facility conditions and maintenance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Building A</h3>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Good Condition</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Building B</h3>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Needs Attention</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Building C</h3>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Recently Updated</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>System Configuration</span>
                </CardTitle>
                <CardDescription>
                  Manage system settings and configurations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">Notification Settings</div>
                    <div className="text-sm text-muted-foreground">Configure alert preferences</div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">User Permissions</div>
                    <div className="text-sm text-muted-foreground">Manage access levels</div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">Report Categories</div>
                    <div className="text-sm text-muted-foreground">Customize report types</div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">System Backup</div>
                    <div className="text-sm text-muted-foreground">Data backup & recovery</div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
