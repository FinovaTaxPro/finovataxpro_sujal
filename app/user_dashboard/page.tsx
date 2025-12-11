'use client';

import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const token = localStorage.getItem('authToken');
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  const res = await fetch(url, { headers });
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // @ts-ignore
    error.info = await res.json();
    // @ts-ignore
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function UserDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { data: user, error: userError } = useSWR(
    mounted ? `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile/` : null,
    fetcher
  );

  const { data: cases, error: casesError } = useSWR(
    mounted ? `${process.env.NEXT_PUBLIC_API_URL}/api/services/cases/` : null,
    fetcher
  );

  if (!mounted) return null;

  if (userError) {
    // If 401, redirect to login
    if (userError.status === 401) {
      window.location.href = '/login';
      return null;
    }
    return <div className="text-red-500 text-center mt-10">Error loading profile</div>;
  }

  if (!user) return <div className="text-center mt-10 text-slate-300">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header Section */}
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700 shadow-xl">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back, {user.first_name || 'User'}!</h1>
          <p className="text-slate-400">Manage your profile and track your service requests.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Full Name</label>
                  <div className="text-slate-200 font-medium">{user.first_name} {user.last_name}</div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email Address</label>
                  <div className="text-slate-200 font-medium">{user.email}</div>
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Member Since</label>
                  <div className="text-slate-200 font-medium">
                    {new Date(user.date_joined).toLocaleDateString()}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full py-2 px-4 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition text-sm font-medium">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cases Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white flex items-center">
                  <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  My Cases
                </h2>
                <a href="/" className="text-sm text-cyan-400 hover:text-cyan-300 font-medium">
                  + New Service
                </a>
              </div>

              {casesError ? (
                <div className="text-red-400 text-sm bg-red-900/20 p-4 rounded-lg">Failed to load cases.</div>
              ) : !cases ? (
                <div className="text-slate-400 text-center py-8">Loading cases...</div>
              ) : cases.length === 0 ? (
                <div className="text-center py-12 bg-slate-900/30 rounded-xl border border-slate-700/50">
                  <svg className="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-slate-400 mb-2">No active cases found</p>
                  <a href="/" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Browse Services &rarr;</a>
                </div>
              ) : (
                <div className="space-y-4">
                  {cases.map((caseItem: any) => (
                    <div key={caseItem.id} className="bg-slate-700/30 hover:bg-slate-700/50 transition rounded-xl p-4 border border-slate-600/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-white font-medium text-lg">{caseItem.service_plan?.service?.name || 'Service Request'}</h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className="text-slate-400 text-sm">#{caseItem.id}</span>
                          <span className="text-slate-600 text-xs">•</span>
                          <span className="text-slate-400 text-sm">{new Date(caseItem.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${caseItem.status === 'COMPLETED' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                          caseItem.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                            caseItem.status === 'IN_PROGRESS' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                              'bg-slate-500/10 text-slate-400 border-slate-500/20'
                          }`}>
                          {caseItem.status}
                        </span>

                        <a href={`/cases/${caseItem.id}`} className="text-slate-300 hover:text-white p-2 hover:bg-slate-600 rounded-lg transition">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}