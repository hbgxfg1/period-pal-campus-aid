
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, User, Shield } from 'lucide-react';

const LoginPage = () => {
  const [loginType, setLoginType] = useState<'user' | 'admin'>('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app this would validate credentials
    if (loginType === 'admin') {
      // Redirect to admin dashboard
      navigate('/admin');
    } else {
      // Redirect to user dashboard
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">MenstruCare</span>
          </Link>
        </div>

        <Card className="glass-card border-white/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Welcome Back</CardTitle>
            <CardDescription className="text-white/80">
              Sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Login Type Selector */}
            <div className="flex mb-6 p-1 bg-white/10 rounded-lg">
              <Button
                type="button"
                variant={loginType === 'user' ? 'default' : 'ghost'}
                size="sm"
                className="flex-1 text-white"
                onClick={() => setLoginType('user')}
              >
                <User className="h-4 w-4 mr-2" />
                User
              </Button>
              <Button
                type="button"
                variant={loginType === 'admin' ? 'default' : 'ghost'}
                size="sm"
                className="flex-1 text-white"
                onClick={() => setLoginType('admin')}
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </Button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>

              <Button type="submit" className="w-full" variant="glass">
                Sign In as {loginType === 'admin' ? 'Admin' : 'User'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/80 text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="text-white hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
