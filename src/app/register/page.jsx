"use client";

import { useState } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const RegisterPage = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const hasLength = password.length >= 6;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const isMatch = password !== '' && password === confirmPassword;


  const CheckIcon = () => (
    <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
  const DotIcon = () => (
    <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="4" />
    </svg>
  );

  const handleRegister = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData);
  
  setErrorMsg('');

  if (!hasLength || !hasUpper || !hasLower) {
    return setErrorMsg("Please meet all password requirements.");
  }
  if (!isMatch) {
    return setErrorMsg("Passwords do not match.");
  }

  const { data, error } = await authClient.signUp.email({
    name: user.name, 
    email: user.email, 
    password: user.password, 
    image: user.photoURL,
  });

  if (error) {
    return setErrorMsg(error.message || "Registration failed. Please try again.");
  }

  if (data) {
    redirect("/login");
  }
};

  return (
    <div className="min-h-screen bg-[#fcf8e3] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <img 
            src="/icon.png" 
            alt="PetHaven Logo" 
            className="w-16 h-16 object-contain drop-shadow-md"
          />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#1a1a1a]">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join PetHaven to find your new best friend
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-orange-100">
          
          {errorMsg && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-bold text-center">
              {errorMsg}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleRegister}>
            
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-[#1a1a1a]">Full Name</label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent text-[#1a1a1a]"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#1a1a1a]">Email address</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent text-[#1a1a1a]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="photoURL" className="block text-sm font-bold text-[#1a1a1a]">Photo URL</label>
              <div className="mt-1">
                <input
                  id="photoURL"
                  name="photoURL"
                  type="url"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent text-[#1a1a1a]"
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-[#1a1a1a]">Password</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent text-[#1a1a1a]"
                  placeholder="••••••••"
                />
              </div>
              
              {/* Dynamic Password Requirements */}
              <div className="mt-3 text-xs font-bold space-y-1">
                <div className={`flex items-center transition-colors ${hasLength ? 'text-green-600' : 'text-gray-400'}`}>
                  {hasLength ? <CheckIcon/> : <DotIcon/>}
                  At least 6 characters
                </div>
                <div className={`flex items-center transition-colors ${hasUpper ? 'text-green-600' : 'text-gray-400'}`}>
                  {hasUpper ? <CheckIcon /> : <DotIcon />}
                  One uppercase letter
                </div>
                <div className={`flex items-center transition-colors ${hasLower ? 'text-green-600' : 'text-gray-400'}`}>
                  {hasLower ? <CheckIcon /> : <DotIcon />}
                  One lowercase letter
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold text-[#1a1a1a]">Confirm Password</label>
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent text-[#1a1a1a]"
                  placeholder="••••••••"
                />
              </div>
              
              {/* Dynamic Match Check */}
              <div className="mt-2 text-xs font-bold">
                <div className={`flex items-center transition-colors ${isMatch ? 'text-green-600' : 'text-gray-400'}`}>
                  {isMatch ? <CheckIcon /> : <DotIcon />}
                  Passwords must match
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-[#f97316] hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f97316] transition-colors mt-4"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600 font-medium">
            Already have an account?{' '}
            <Link href="/login" className="font-bold text-[#f97316] hover:text-orange-700 transition-colors">
              Log in instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;