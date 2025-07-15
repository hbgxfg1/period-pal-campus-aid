import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, BarChart3, Users } from 'lucide-react';

const Hero = () => {
  const features = [
    {
      icon: Heart,
      title: 'Anonymous Reporting',
      description: 'Safe, secure reporting for students',
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live dashboards and insights',
    },
    {
      icon: Shield,
      title: 'Campus Auditing',
      description: 'Comprehensive facility assessments',
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Building inclusive environments',
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering
            <span className="block text-transparent bg-gradient-to-r from-white via-primary-light to-secondary-light bg-clip-text">
              Menstrual Dignity
            </span>
            in Education
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive digital platform for anonymous reporting, real-time monitoring, and improving menstrual hygiene infrastructure in educational institutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Link to="/report">
              <Button variant="glass" size="lg" className="group">
                Start Reporting
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const getFeatureLink = (title: string) => {
              switch (title) {
                case 'Anonymous Reporting':
                  return '/report';
                case 'Real-time Analytics':
                  return '/dashboard';
                case 'Campus Auditing':
                  return '/audit';
                case 'Community Impact':
                  return '/dashboard';
                default:
                  return '/';
              }
            };

            return (
              <Link
                key={feature.title}
                to={getFeatureLink(feature.title)}
                className="glass-card p-6 rounded-xl hover:bg-white/20 transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;