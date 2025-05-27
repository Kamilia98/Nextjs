'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  error: Error;
  onRetry: () => void;
}

const ErrorBoundary = ({ error, onRetry }: ErrorBoundaryProps) => {
  return (
    <div className="flex items-center justify-center py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <CardTitle className="text-red-800">Something went wrong</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600 text-sm">{error.message}</p>
          <button onClick={onRetry} className="w-full">
            Try Again
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ErrorBoundary;
