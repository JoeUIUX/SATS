import React from 'react';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'destructive' | 'warning' | 'success';
}

export const Alert: React.FC<AlertProps> = ({
  children,
  className = '',
  variant = 'default',
  ...props
}) => {
  const variantClasses = {
    default: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/50 dark:border-blue-800 dark:text-blue-200',
    destructive: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/50 dark:border-red-800 dark:text-red-200',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/50 dark:border-yellow-800 dark:text-yellow-200',
    success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/50 dark:border-green-800 dark:text-green-200'
  };
  
  return (
    <div
      role="alert"
      className={`p-4 mb-4 border rounded-lg ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const AlertTitle: React.FC<AlertTitleProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <h4
      className={`font-medium text-lg mb-1 ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
};

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

export const AlertDescription: React.FC<AlertDescriptionProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`text-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};