
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
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
  Calendar as CalendarIcon,
  Filter,
  Download,
  Bell,
  UserCog,
  CheckSquare,
  BarChart3,
  Zap,
  Search,
  Calendar as CalendarSchedule,
  PlusCircle,
  Trash2
} from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, BarChart, Bar, Cell, Tooltip } from 'recharts';

const AdminDashboard = () => {
  const [reports] = useState([
    { id: 1, type: 'Hygiene Issue', location: 'Building A - Floor 2', status: 'pending', priority: 'high', date: '2024-01-15', time: '10:30 AM', building: 'A', sector: 'Academic', assignedTo: null },
    { id: 2, type: 'Supply Shortage', location: 'Building B - Floor 1', status: 'in-progress', priority: 'medium', date: '2024-01-14', time: '2:15 PM', building: 'B', sector: 'Student Center', assignedTo: 'Team Alpha' },
    { id: 3, type: 'Facility Damage', location: 'Building C - Floor 3', status: 'resolved', priority: 'low', date: '2024-01-13', time: '9:45 AM', building: 'C', sector: 'Library', assignedTo: 'Team Beta' },
    { id: 4, type: 'Privacy Concern', location: 'Building A - Floor 1', status: 'pending', priority: 'high', date: '2024-01-15', time: '3:20 PM', building: 'A', sector: 'Academic', assignedTo: null },
    { id: 5, type: 'Safety Hazard', location: 'Building D - Floor 2', status: 'urgent', priority: 'critical', date: '2024-01-16', time: '8:00 AM', building: 'D', sector: 'Sports Complex', assignedTo: null },
  ]);

  const [selectedReports, setSelectedReports] = useState([]);
  const [filterLocation, setFilterLocation] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('');
  const [filterBuilding, setFilterBuilding] = useState('');

  // Heatmap data
  const heatmapData = [
    { building: 'Building A', issues: 8, color: '#ef4444' },
    { building: 'Building B', issues: 3, color: '#f97316' },
    { building: 'Building C', issues: 1, color: '#22c55e' },
    { building: 'Building D', issues: 6, color: '#ef4444' },
    { building: 'Sports Complex', issues: 4, color: '#f59e0b' },
  ];

  const trendData = [
    { month: 'Jan', issues: 12, resolved: 10 },
    { month: 'Feb', issues: 8, resolved: 8 },
    { month: 'Mar', issues: 15, resolved: 12 },
    { month: 'Apr', issues: 6, resolved: 6 },
  ];

  // Audit checklist state
  const [auditItems, setAuditItems] = useState([
    { id: 1, item: 'Sanitary pad dispensers are stocked', completed: false, standard: 'WHO Guidelines' },
    { id: 2, item: 'Disposal bins are clean and emptied regularly', completed: true, standard: 'National Health Standards' },
    { id: 3, item: 'Privacy locks are functional', completed: false, standard: 'ISO 14001' },
    { id: 4, item: 'Adequate lighting is provided', completed: true, standard: 'Building Safety Code' },
    { id: 5, item: 'Hand washing facilities are available', completed: false, standard: 'WHO Guidelines' },
  ]);

  // Alerts and notifications
  const [alerts] = useState([
    { id: 1, type: 'Stock Alert', message: 'Building A dispensers below 20% capacity', severity: 'high', time: '5 min ago' },
    { id: 2, type: 'Maintenance Due', message: 'Building C scheduled maintenance overdue', severity: 'medium', time: '1 hour ago' },
    { id: 3, type: 'New Report', message: 'Critical safety issue reported in Building D', severity: 'critical', time: 'Just now' },
  ]);

  // Maintenance schedule
  const [maintenanceSchedule] = useState([
    { id: 1, task: 'Monthly Deep Cleaning', location: 'Building A', date: '2024-02-01', status: 'scheduled', team: 'Team Alpha' },
    { id: 2, task: 'Dispenser Restocking', location: 'Building B', date: '2024-01-20', status: 'completed', team: 'Team Beta' },
    { id: 3, task: 'Quarterly Inspection', location: 'All Buildings', date: '2024-01-25', status: 'in-progress', team: 'Inspection Team' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'in-progress': return 'bg-blue-500';
      case 'resolved': return 'bg-green-500';
      case 'urgent': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive';
      case 'medium': return 'outline';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const filteredReports = reports.filter(report => {
    return (
      (!filterLocation || report.location.toLowerCase().includes(filterLocation.toLowerCase())) &&
      (!filterSeverity || report.priority === filterSeverity) &&
      (!filterBuilding || report.building === filterBuilding)
    );
  });

  const handleBulkAssign = (team) => {
    console.log(`Assigning ${selectedReports.length} reports to ${team}`);
    setSelectedReports([]);
  };

  const toggleAuditItem = (id) => {
    setAuditItems(items => 
      items.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const downloadReport = (type) => {
    console.log(`Downloading ${type} report`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gradient mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Advanced facility management and analytics</p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Shield className="h-3 w-3" />
              <span>Admin Access</span>
            </Badge>
            <Button onClick={() => downloadReport('summary')} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Alerts Banner */}
        <div className="mb-6">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-red-800">Active Alerts ({alerts.length})</span>
                </div>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="mt-3 space-y-2">
                {alerts.slice(0, 2).map(alert => (
                  <div key={alert.id} className="flex items-center justify-between text-sm">
                    <span className="text-red-700">{alert.message}</span>
                    <Badge variant={alert.severity === 'critical' ? 'destructive' : 'outline'}>
                      {alert.time}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="live-feed" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="live-feed">Live Feed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="audit">Audit</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="live-feed" className="space-y-6">
            {/* Advanced Filtering */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Advanced Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input
                      placeholder="Search location..."
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Severity</label>
                    <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                      <SelectTrigger>
                        <SelectValue placeholder="All severities" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Building</label>
                    <Select value={filterBuilding} onValueChange={setFilterBuilding}>
                      <SelectTrigger>
                        <SelectValue placeholder="All buildings" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All</SelectItem>
                        <SelectItem value="A">Building A</SelectItem>
                        <SelectItem value="B">Building B</SelectItem>
                        <SelectItem value="C">Building C</SelectItem>
                        <SelectItem value="D">Building D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full">
                      <Search className="h-4 w-4 mr-2" />
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bulk Actions */}
            {selectedReports.length > 0 && (
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-blue-800">
                      {selectedReports.length} reports selected
                    </span>
                    <div className="space-x-2">
                      <Button size="sm" onClick={() => handleBulkAssign('Team Alpha')}>
                        Assign to Team Alpha
                      </Button>
                      <Button size="sm" onClick={() => handleBulkAssign('Team Beta')}>
                        Assign to Team Beta
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setSelectedReports([])}>
                        Clear Selection
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Live Issue Feed */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Live Issue Feed ({filteredReports.length})</span>
                </CardTitle>
                <CardDescription>Real-time updates with advanced filtering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <Checkbox
                          checked={selectedReports.includes(report.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedReports([...selectedReports, report.id]);
                            } else {
                              setSelectedReports(selectedReports.filter(id => id !== report.id));
                            }
                          }}
                        />
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(report.status)}`} />
                        <div>
                          <h3 className="font-medium">{report.type}</h3>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {report.location} • {report.time}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Sector: {report.sector} • Assigned: {report.assignedTo || 'Unassigned'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getPriorityColor(report.priority)}>
                          {report.priority}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Assign
                        </Button>
                        <Button size="sm">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Interactive Heatmap */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Issue Concentration Heatmap</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={heatmapData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="building" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="issues" radius={4}>
                          {heatmapData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Trend Analysis */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Issue Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={{}}>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="issues"
                          stackId="1"
                          stroke="#ef4444"
                          fill="#ef4444"
                          fillOpacity={0.6}
                        />
                        <Area
                          type="monotone"
                          dataKey="resolved"
                          stackId="1"
                          stroke="#22c55e"
                          fill="#22c55e"
                          fillOpacity={0.6}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audit" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckSquare className="h-5 w-5" />
                  <span>Customizable Audit Checklist</span>
                </CardTitle>
                <CardDescription>Based on WHO and national menstrual hygiene guidelines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {auditItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          checked={item.completed}
                          onCheckedChange={() => toggleAuditItem(item.id)}
                        />
                        <div>
                          <p className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {item.item}
                          </p>
                          <p className="text-xs text-muted-foreground">Standard: {item.standard}</p>
                        </div>
                      </div>
                      <Badge variant={item.completed ? 'secondary' : 'outline'}>
                        {item.completed ? 'Complete' : 'Pending'}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <Button variant="outline">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Custom Item
                  </Button>
                  <Button>
                    Generate Audit Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="maintenance" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarSchedule className="h-5 w-5" />
                  <span>Maintenance Scheduling</span>
                </CardTitle>
                <CardDescription>Recurring tasks with completion tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceSchedule.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{task.task}</h3>
                        <p className="text-sm text-muted-foreground">{task.location}</p>
                        <p className="text-xs text-muted-foreground">Team: {task.team}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{task.date}</p>
                        <Badge variant={
                          task.status === 'completed' ? 'secondary' :
                          task.status === 'in-progress' ? 'outline' : 'default'
                        }>
                          {task.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Schedule New Task
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-card hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Download className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-medium mb-2">Weekly Summary</h3>
                  <Button onClick={() => downloadReport('weekly')} className="w-full">Download</Button>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-medium mb-2">Analytics Report</h3>
                  <Button onClick={() => downloadReport('analytics')} className="w-full">Download</Button>
                </CardContent>
              </Card>
              <Card className="glass-card hover:shadow-lg transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-medium mb-2">Compliance Report</h3>
                  <Button onClick={() => downloadReport('compliance')} className="w-full">Download</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCog className="h-5 w-5" />
                  <span>Role-based Access Control</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">Facility Staff Access</div>
                    <div className="text-sm text-muted-foreground">Basic reporting and maintenance logs</div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">Administrator Access</div>
                    <div className="text-sm text-muted-foreground">Full dashboard and analytics access</div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">Policy Maker Access</div>
                    <div className="text-sm text-muted-foreground">Read-only reports and compliance data</div>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                    <div className="font-medium">Maintenance Team</div>
                    <div className="text-sm text-muted-foreground">Task assignments and completion tracking</div>
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
