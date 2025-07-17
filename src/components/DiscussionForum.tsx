
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarContent, AvatarFallback } from '@/components/ui/avatar';
import { 
  MessageCircle, 
  Heart, 
  Reply, 
  Clock,
  User,
  Plus
} from 'lucide-react';

const DiscussionForum = () => {
  const [discussions] = useState([
    {
      id: 1,
      title: 'Hygiene supplies shortage in Building A',
      content: 'Has anyone else noticed the lack of soap dispensers on the second floor? This has been an ongoing issue for weeks.',
      author: 'Anonymous User #1',
      timestamp: '2 hours ago',
      replies: 12,
      likes: 8,
      category: 'hygiene',
      isResolved: false
    },
    {
      id: 2,
      title: 'Thank you to the maintenance team!',
      content: 'The broken mirror in the main building restroom was fixed super quickly. Really appreciate the fast response!',
      author: 'Anonymous User #2',
      timestamp: '4 hours ago',
      replies: 5,
      likes: 15,
      category: 'appreciation',
      isResolved: true
    },
    {
      id: 3,
      title: 'Privacy concerns in the new facility',
      content: 'The new restroom facilities lack proper privacy measures. The gaps in the stall doors are quite large and make users uncomfortable.',
      author: 'Anonymous User #3',
      timestamp: '1 day ago',
      replies: 18,
      likes: 23,
      category: 'privacy',
      isResolved: false
    },
    {
      id: 4,
      title: 'Suggestion for eco-friendly products',
      content: 'Would it be possible to switch to more environmentally friendly menstrual products? Many students have been asking about this.',
      author: 'Anonymous User #4',
      timestamp: '2 days ago',
      replies: 7,
      likes: 11,
      category: 'suggestion',
      isResolved: false
    },
    {
      id: 5,
      title: 'Emergency supply request - Building C',
      content: 'Building C is completely out of supplies since yesterday. This is urgent and needs immediate attention.',
      author: 'Anonymous User #5',
      timestamp: '3 days ago',
      replies: 3,
      likes: 6,
      category: 'urgent',
      isResolved: true
    },
    {
      id: 6,
      title: 'Positive feedback on recent improvements',
      content: 'The new dispensers installed last week are working great! Much better than the old ones.',
      author: 'Anonymous User #6',
      timestamp: '1 week ago',
      replies: 9,
      likes: 19,
      category: 'feedback',
      isResolved: false
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Posts', count: discussions.length },
    { value: 'hygiene', label: 'Hygiene', count: discussions.filter(d => d.category === 'hygiene').length },
    { value: 'privacy', label: 'Privacy', count: discussions.filter(d => d.category === 'privacy').length },
    { value: 'urgent', label: 'Urgent', count: discussions.filter(d => d.category === 'urgent').length },
    { value: 'suggestion', label: 'Suggestions', count: discussions.filter(d => d.category === 'suggestion').length },
    { value: 'appreciation', label: 'Appreciation', count: discussions.filter(d => d.category === 'appreciation').length },
    { value: 'feedback', label: 'Feedback', count: discussions.filter(d => d.category === 'feedback').length }
  ];

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(d => d.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'urgent': return 'destructive';
      case 'hygiene': return 'default';
      case 'privacy': return 'outline';
      case 'suggestion': return 'secondary';
      case 'appreciation': return 'success';
      case 'feedback': return 'info';
      default: return 'secondary';
    }
  };

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return parts[0][0] + parts[parts.length - 1][0];
    }
    return name.substring(0, 2);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gradient">Discussion Forum</h2>
          <p className="text-muted-foreground">Anonymous community discussions about facility issues and improvements</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>New Discussion</span>
        </Button>
      </div>

      {/* Category Filter */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label} ({category.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Discussions List */}
      <div className="space-y-4">
        {filteredDiscussions.map((discussion) => (
          <Card key={discussion.id} className="glass-card hover:shadow-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {getInitials(discussion.author)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-lg">{discussion.title}</h3>
                      {discussion.isResolved && (
                        <Badge variant="success" className="text-xs">Resolved</Badge>
                      )}
                    </div>
                    <Badge variant={getCategoryColor(discussion.category)} className="text-xs">
                      {discussion.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground">{discussion.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{discussion.author}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{discussion.timestamp}</span>
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{discussion.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discussion.replies}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <Reply className="h-4 w-4" />
                        <span>Reply</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
