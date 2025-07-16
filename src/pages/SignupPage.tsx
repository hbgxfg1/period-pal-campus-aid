
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, User, Shield } from 'lucide-react';

const SignupPage = () => {
  const [accountType, setAccountType] = useState<'user' | 'admin'>('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adminCode, setAdminCode] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (accountType === 'admin' && adminCode !== 'ADMIN123') {
      alert('Invalid admin code');
      return;
    }

    // Mock signup - in real app this would create account
    alert('Account created successfully!');
    navigate('/login');
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
            <CardTitle className="text-2xl text-white">Create Account</CardTitle>
            <CardDescription className="text-white/80">
              Join our community today
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Account Type Selector */}
            <div className="flex mb-6 p-1 bg-white/10 rounded-lg">
              <Button
                type="button"
                variant={accountType === 'user' ? 'default' : 'ghost'}
                size="sm"
                className="flex-1 text-white"
                onClick={() => setAccountType('user')}
              >
                <User className="h-4 w-4 mr-2" />
                User
              </Button>
              <Button
                type="button"
                variant={accountType === 'admin' ? 'default' : 'ghost'}
                size="sm"
                className="flex-1 text-white"
                onClick={() => setAccountType('admin')}
              >
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </Button>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
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
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>

              {accountType === 'admin' && (
                <div className="space-y-2">
                  <Label htmlFor="adminCode" className="text-white">Admin Code</Label>
                  <Input
                    id="adminCode"
                    type="password"
                    placeholder="Enter admin verification code"
                    value={adminCode}
                    onChange={(e) => setAdminCode(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    required
                  />
                  <p className="text-xs text-white/60">Contact your institution for the admin code</p>
                </div>
              )}

              <Button type="submit" className="w-full" variant="glass">
                Create {accountType === 'admin' ? 'Admin' : 'User'} Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/80 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-white hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
