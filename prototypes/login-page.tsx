import React from 'react';
import { Github, Mail, Lock, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      {/* Glassmorphic Container */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-light text-white tracking-tight mb-2">
            Welcome <span className="font-semibold text-blue-400">Back</span>
          </h1>
          <p className="text-slate-400 text-sm">Sign in to access your AI workflow</p>
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-3 bg-white text-slate-950 font-medium py-3 px-4 rounded-xl hover:bg-slate-200 transition-all mb-4">
          <Github size={20} />
          Continue with GitHub
        </button>

        <div className="relative my-8 text-center">
          <hr className="border-white/10" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 px-4 text-xs text-slate-500 uppercase tracking-widest">
            or
          </span>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" size={18} />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            />
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-900/20 transition-all group">
            Sign In
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-slate-500 text-xs">
          New to the platform? <a href="#" className="text-blue-400 hover:underline">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;