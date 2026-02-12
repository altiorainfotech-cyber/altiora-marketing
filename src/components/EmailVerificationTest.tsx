"use client";

import React, { useState, useEffect, useRef } from 'react';

interface VerificationResult {
  email: string;
  isValid: boolean;
  isDeliverable: boolean;
  isRealImage?: boolean;
  reason?: string;
  timestamp: string;
}

interface VerificationStep {
  step: number;
  message: string;
  progress: number;
  timestamp: string;
}

const EmailVerificationTest: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [steps, setSteps] = useState<VerificationStep[]>([]);
  const [websocketStatus, setWebsocketStatus] = useState<'disconnected' | 'connecting' | 'connected' | 'error'>('disconnected');
  const [testResults, setTestResults] = useState<VerificationResult[]>([]);
  
  const wsRef = useRef<WebSocket | null>(null);

  // Test emails
  const wrongEmails = [
    'invalid-email',
    'wrong@nonexistentdomain.xyz',
    'fake.email@badomain.com',
    'test@invalid-domain.fake'
  ];

  const correctEmails = [
    'yash@altiorainfotech.com',
    'youngblood.yr@gmail.com',
    'aman.singh@altiorainfotech.com'
  ];

  useEffect(() => {
    connectWebSocket();
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const connectWebSocket = () => {
    setWebsocketStatus('connecting');
    
    try {
      const ws = new WebSocket('ws://localhost:3003/websocket/email-verification');
      
      ws.onopen = () => {
        console.log('✅ WebSocket connected');
        setWebsocketStatus('connected');
        wsRef.current = ws;
      };

      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          handleWebSocketMessage(message);
        } catch (error) {
          console.error('❌ Failed to parse WebSocket message:', error);
        }
      };

      ws.onclose = () => {
        console.log('🔌 WebSocket disconnected');
        setWebsocketStatus('disconnected');
        wsRef.current = null;
      };

      ws.onerror = (error) => {
        console.error('❌ WebSocket error:', error);
        setWebsocketStatus('error');
      };

    } catch (error) {
      console.error('❌ Failed to connect WebSocket:', error);
      setWebsocketStatus('error');
    }
  };

  const handleWebSocketMessage = (message: any) => {
    console.log('📨 WebSocket message:', message);

    switch (message.type) {
      case 'connection.established':
        console.log('🔌 Connection established:', message.connectionId);
        break;

      case 'email.verification.progress':
        setSteps(prev => [...prev, {
          step: message.step,
          message: message.message,
          progress: message.progress,
          timestamp: message.timestamp
        }]);
        break;

      case 'email.verification.completed':
        const result: VerificationResult = {
          email: message.email,
          isValid: message.isValid,
          isDeliverable: message.isDeliverable,
          isRealImage: message.isRealImage,
          reason: message.reason,
          timestamp: message.timestamp
        };
        setResult(result);
        setTestResults(prev => [...prev, result]);
        setIsVerifying(false);
        break;

      case 'webhook.received':
        console.log('📧 Webhook data received via WebSocket:', message.data);
        break;

      case 'error':
        console.error('❌ WebSocket error:', message.error);
        break;
    }
  };

  const verifyEmail = async (emailToVerify: string) => {
    if (!emailToVerify.trim()) return;

    setIsVerifying(true);
    setResult(null);
    setSteps([]);

    // Send via WebSocket if connected
    if (wsRef.current && websocketStatus === 'connected') {
      wsRef.current.send(JSON.stringify({
        type: 'email.verify',
        email: emailToVerify
      }));
    } else {
      // Fallback to HTTP API
      try {
        const response = await fetch('/api/email-verification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: emailToVerify,

          })
        });

        const result = await response.json();
        setResult(result);
        setTestResults(prev => [...prev, result]);
      } catch (error) {
        console.error('❌ Email verification failed:', error);
      } finally {
        setIsVerifying(false);
      }
    }
  };

  const runBatchTest = async () => {
    console.log('🚀 Starting batch email verification test');
    
    // Test wrong emails
    for (const wrongEmail of wrongEmails) {
      await verifyEmail(wrongEmail);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait between tests
    }

    // Test correct emails
    for (const correctEmail of correctEmails) {
      await verifyEmail(correctEmail);
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait between tests
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'text-green-400';
      case 'connecting': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return '🟢';
      case 'connecting': return '🟡';
      case 'error': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Email Verification Test System</h2>
        <p className="text-slate-400">Test email verification with WebSocket connection and image validation</p>
        
        {/* WebSocket Status */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-slate-300">WebSocket Status:</span>
          <span className={`text-sm font-medium ${getStatusColor(websocketStatus)}`}>
            {getStatusIcon(websocketStatus)} {websocketStatus.toUpperCase()}
          </span>
          {websocketStatus !== 'connected' && (
            <button
              onClick={connectWebSocket}
              className="ml-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
            >
              Reconnect
            </button>
          )}
        </div>
      </div>

      {/* Manual Email Test */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Manual Email Test</h3>
        <div className="flex gap-4 mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email to verify..."
            className="flex-1 bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-400"
          />
          <button
            onClick={() => verifyEmail(email)}
            disabled={isVerifying || !email.trim()}
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isVerifying ? 'Verifying...' : 'Verify Email'}
          </button>
        </div>

        {/* Quick Test Buttons */}
        <div className="mb-4">
          <p className="text-sm text-slate-300 mb-2">Quick Test:</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-xs text-red-300">Wrong Emails:</span>
            {wrongEmails.map((wrongEmail) => (
              <button
                key={wrongEmail}
                onClick={() => verifyEmail(wrongEmail)}
                disabled={isVerifying}
                className="px-2 py-1 bg-red-600/20 text-red-300 text-xs rounded border border-red-600/30 hover:bg-red-600/30 disabled:opacity-50 transition-colors"
              >
                {wrongEmail}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-green-300">Correct Emails:</span>
            {correctEmails.map((correctEmail) => (
              <button
                key={correctEmail}
                onClick={() => verifyEmail(correctEmail)}
                disabled={isVerifying}
                className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded border border-green-600/30 hover:bg-green-600/30 disabled:opacity-50 transition-colors"
              >
                {correctEmail}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={runBatchTest}
          disabled={isVerifying}
          className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Run Batch Test (All Emails)
        </button>
      </div>

      {/* Verification Progress */}
      {steps.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Verification Progress</h3>
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">{step.message}</p>
                  <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${step.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs text-slate-400">{step.progress}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Current Result */}
      {result && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Verification Result</h3>
          <div className={`p-4 rounded-lg border ${
            result.isValid 
              ? 'bg-green-500/10 border-green-400/30' 
              : 'bg-red-500/10 border-red-400/30'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                result.isValid ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {result.isValid ? '✅' : '❌'}
              </div>
              <div>
                <p className="text-white font-semibold">{result.email}</p>
                <p className={`text-sm ${result.isValid ? 'text-green-300' : 'text-red-300'}`}>
                  {result.isValid ? 'Valid Email' : 'Invalid Email'}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-slate-400">Valid Format:</span>
                <span className={`ml-2 ${result.isValid ? 'text-green-300' : 'text-red-300'}`}>
                  {result.isValid ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <span className="text-slate-400">Deliverable:</span>
                <span className={`ml-2 ${result.isDeliverable ? 'text-green-300' : 'text-red-300'}`}>
                  {result.isDeliverable ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <span className="text-slate-400">Real Image:</span>
                <span className={`ml-2 ${result.isRealImage ? 'text-green-300' : 'text-red-300'}`}>
                  {result.isRealImage ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
            {result.reason && (
              <p className="mt-3 text-slate-300 text-sm">
                <span className="text-slate-400">Reason:</span> {result.reason}
              </p>
            )}
            <p className="mt-2 text-xs text-slate-500">
              Verified at: {new Date(result.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      )}

      {/* Test Results History */}
      {testResults.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Test Results History</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {testResults.map((testResult, index) => (
              <div key={index} className={`p-3 rounded-lg border text-sm ${
                testResult.isValid 
                  ? 'bg-green-500/5 border-green-400/20' 
                  : 'bg-red-500/5 border-red-400/20'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{testResult.email}</span>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      testResult.isValid 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      {testResult.isValid ? 'VALID' : 'INVALID'}
                    </span>
                    <span className="text-xs text-slate-500">
                      {new Date(testResult.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                {testResult.reason && (
                  <p className="text-slate-400 text-xs mt-1">{testResult.reason}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailVerificationTest;