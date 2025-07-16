
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  TrendingUp,
  Calendar,
  User,
  Building
} from 'lucide-react';

const AnalyticsDetails = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const type = searchParams.get('type') || 'total';
  const building = searchParams.get('building');

  // Comprehensive fake data for different analytics types
  const analyticsData = {
    total: {
      title: 'Total Reports',
      value: '1,247',
      description: 'All hygiene reports submitted across campus',
      icon: TrendingUp,
      color: 'text-primary',
      reports: [
        { id: 'R001', type: 'Empty Soap Dispenser', location: 'Engineering Building - 3rd Floor', priority: 'High', time: '2 hours ago', status: 'In Progress', reporter: 'Student #4521' },
        { id: 'R002', type: 'Broken Toilet Seat', location: 'Library Main Floor - Women\'s', priority: 'Medium', time: '4 hours ago', status: 'Resolved', reporter: 'Staff #892' },
        { id: 'R003', type: 'No Paper Towels', location: 'Student Union - Food Court', priority: 'Urgent', time: '6 hours ago', status: 'Assigned', reporter: 'Student #7234' },
        { id: 'R004', type: 'Poor Ventilation', location: 'Science Block - Lab 204', priority: 'Medium', time: '8 hours ago', status: 'In Progress', reporter: 'Faculty #156' },
        { id: 'R005', type: 'Clogged Drain', location: 'Dormitory A - 2nd Floor', priority: 'High', time: '1 day ago', status: 'Pending', reporter: 'Student #9876' },
        { id: 'R006', type: 'Missing Toilet Paper', location: 'Administration Building', priority: 'Medium', time: '1 day ago', status: 'Resolved', reporter: 'Staff #445' },
        { id: 'R007', type: 'Dirty Mirror', location: 'Arts Building - 1st Floor', priority: 'Low', time: '2 days ago', status: 'Resolved', reporter: 'Student #3321' },
        { id: 'R008', type: 'Leaking Faucet', location: 'Sports Complex - Locker Room', priority: 'High', time: '2 days ago', status: 'In Progress', reporter: 'Coach #78' }
      ]
    },
    resolved: {
      title: 'Resolved Issues',
      value: '1,089',
      description: 'Successfully resolved hygiene issues',
      icon: CheckCircle,
      color: 'text-success',
      reports: [
        { id: 'R002', type: 'Broken Toilet Seat', location: 'Library Main Floor - Women\'s', priority: 'Medium', resolvedTime: '2 hours', status: 'Resolved', resolver: 'Maintenance Team A' },
        { id: 'R006', type: 'Missing Toilet Paper', location: 'Administration Building', priority: 'Medium', resolvedTime: '1.5 hours', status: 'Resolved', resolver: 'Cleaning Staff B' },
        { id: 'R007', type: 'Dirty Mirror', location: 'Arts Building - 1st Floor', priority: 'Low', resolvedTime: '45 minutes', status: 'Resolved', resolver: 'Janitor #12' },
        { id: 'R010', type: 'Empty Hand Sanitizer', location: 'Medical Center - Entrance', priority: 'High', resolvedTime: '30 minutes', status: 'Resolved', resolver: 'Medical Staff' },
        { id: 'R011', type: 'Blocked Sink', location: 'Engineering Building - 2nd Floor', priority: 'Medium', resolvedTime: '3 hours', status: 'Resolved', resolver: 'Plumber #5' },
        { id: 'R012', type: 'Burnt Light Bulb', location: 'Student Union - 3rd Floor', priority: 'Low', resolvedTime: '1 hour', status: 'Resolved', resolver: 'Electrician #3' }
      ]
    },
    pending: {
      title: 'Pending Reviews',
      value: '94',
      description: 'Reports awaiting review or assignment',
      icon: Clock,
      color: 'text-warning',
      reports: [
        { id: 'R005', type: 'Clogged Drain', location: 'Dormitory A - 2nd Floor', priority: 'High', waitTime: '1 day', status: 'Pending Assignment', reporter: 'Student #9876' },
        { id: 'R013', type: 'Broken Lock', location: 'Library - Study Room 3', priority: 'Medium', waitTime: '12 hours', status: 'Pending Review', reporter: 'Student #5544' },
        { id: 'R014', type: 'No Hot Water', location: 'Dormitory B - 4th Floor', priority: 'High', waitTime: '8 hours', status: 'Pending Assignment', reporter: 'Student #7788' },
        { id: 'R015', type: 'Dirty Floor', location: 'Science Block - Hallway', priority: 'Medium', waitTime: '6 hours', status: 'Pending Review', reporter: 'Faculty #234' },
        { id: 'R016', type: 'Broken Dispenser', location: 'Sports Complex - Main Entrance', priority: 'Medium', waitTime: '4 hours', status: 'Pending Assignment', reporter: 'Student #9901' }
      ]
    },
    critical: {
      title: 'Critical Issues',
      value: '64',
      description: 'High-priority issues requiring immediate attention',
      icon: AlertTriangle,
      color: 'text-destructive',
      reports: [
        { id: 'R003', type: 'No Paper Towels', location: 'Student Union - Food Court', priority: 'Urgent', time: '6 hours ago', status: 'Assigned', reporter: 'Student #7234' },
        { id: 'R017', type: 'Sewage Backup', location: 'Engineering Building - Basement', priority: 'Critical', time: '2 hours ago', status: 'In Progress', reporter: 'Security #45' },
        { id: 'R018', type: 'No Running Water', location: 'Medical Center - Emergency Wing', priority: 'Critical', time: '30 minutes ago', status: 'Escalated', reporter: 'Nurse #123' },
        { id: 'R019', type: 'Gas Leak Smell', location: 'Science Block - Chemistry Lab', priority: 'Critical', time: '1 hour ago', status: 'Emergency Response', reporter: 'Professor #567' },
        { id: 'R020', type: 'Flooding', location: 'Library - Basement Level', priority: 'Critical', time: '3 hours ago', status: 'In Progress', reporter: 'Librarian #89' }
      ]
    }
  };

  // Building-specific data
  const buildingData = {
    'Engineering Building': {
      totalRestrooms: 20,
      floors: 5,
      totalReports: 186,
      resolved: 152,
      pending: 34,
      avgResolutionTime: '2.4 hrs',
      recentReports: [
        { id: 'R001', type: 'Empty Soap Dispenser', floor: '3rd Floor', priority: 'High', time: '2 hours ago', status: 'In Progress' },
        { id: 'R011', type: 'Blocked Sink', floor: '2nd Floor', priority: 'Medium', time: '1 day ago', status: 'Resolved' },
        { id: 'R017', type: 'Sewage Backup', floor: 'Basement', priority: 'Critical', time: '2 hours ago', status: 'In Progress' }
      ]
    },
    'Library Complex': {
      totalRestrooms: 12,
      floors: 4,
      totalReports: 143,
      resolved: 128,
      pending: 15,
      avgResolutionTime: '1.8 hrs',
      recentReports: [
        { id: 'R002', type: 'Broken Toilet Seat', floor: 'Main Floor', priority: 'Medium', time: '4 hours ago', status: 'Resolved' },
        { id: 'R013', type: 'Broken Lock', floor: '3rd Floor', priority: 'Medium', time: '12 hours ago', status: 'Pending' },
        { id: 'R020', type: 'Flooding', floor: 'Basement', priority: 'Critical', time: '3 hours ago', status: 'In Progress' }
      ]
    }
  };

  const currentData = analyticsData[type as keyof typeof analyticsData];
  const currentBuilding = building ? buildingData[building as keyof typeof buildingData] : null;

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'bg-red-600 text-white';
      case 'urgent': return 'bg-destructive text-destructive-foreground';
      case 'high': return 'bg-warning text-warning-foreground';
      case 'medium': return 'bg-info text-info-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'resolved': return 'text-success';
      case 'in progress': return 'text-warning';
      case 'assigned': return 'text-info';
      case 'escalated': return 'text-purple-600';
      case 'emergency response': return 'text-red-600';
      case 'pending': 
      case 'pending assignment':
      case 'pending review': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-foreground">
              {building ? `${building} Analytics` : `${currentData.title} Analytics`}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              {building ? `Detailed view of ${building}` : currentData.description}
            </p>
          </div>
        </div>

        {/* Summary Cards */}
        {building ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Reports</p>
                    <p className="text-3xl font-bold">{currentBuilding?.totalReports}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Resolved</p>
                    <p className="text-3xl font-bold text-success">{currentBuilding?.resolved}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-3xl font-bold text-warning">{currentBuilding?.pending}</p>
                  </div>
                  <Clock className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card border-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Avg Resolution</p>
                    <p className="text-2xl font-bold">{currentBuilding?.avgResolutionTime}</p>
                  </div>
                  <Clock className="h-8 w-8 text-info" />
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="glass-card border-primary/10 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center`}>
                  <currentData.icon className={`h-8 w-8 ${currentData.color}`} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{currentData.value}</h2>
                  <p className="text-lg text-muted-foreground">{currentData.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Detailed Table */}
        <Card className="glass-card border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <currentData.icon className={`h-5 w-5 ${currentData.color}`} />
              <span>{building ? `Recent Reports - ${building}` : `${currentData.title} Details`}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Time/Duration</TableHead>
                  <TableHead>Reporter/Resolver</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(building ? currentBuilding?.recentReports : currentData.reports)?.map((report: any) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium">{report.id}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-muted-foreground" />
                        {building ? `${building} - ${report.floor}` : report.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(report.priority)}>
                        {report.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${getStatusColor(report.status)}`}>
                        {report.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-muted-foreground" />
                        {report.time || report.resolvedTime || report.waitTime}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1 text-muted-foreground" />
                        {report.reporter || report.resolver}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Building-specific additional info */}
        {building && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="glass-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span>Building Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Floors:</span>
                    <span className="font-medium">{currentBuilding?.floors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Restrooms:</span>
                    <span className="font-medium">{currentBuilding?.totalRestrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Resolution Rate:</span>
                    <span className="font-medium text-success">
                      {Math.round((currentBuilding?.resolved! / currentBuilding?.totalReports!) * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Resolution Time:</span>
                    <span className="font-medium">{currentBuilding?.avgResolutionTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm">3 issues resolved today</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span className="text-sm">2 new reports pending</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-info rounded-full"></div>
                    <span className="text-sm">1 maintenance team assigned</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">1 critical issue escalated</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsDetails;
