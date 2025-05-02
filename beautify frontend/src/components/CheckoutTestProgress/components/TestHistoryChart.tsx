// src/components/TestHistoryChart.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface TestHistoryChartProps {
  data: any[];
  metricPath: string;
  metricLabel: string;
  isDarkMode: boolean;
}

export const TestHistoryChart: React.FC<TestHistoryChartProps> = ({
  data,
  metricPath,
  metricLabel,
  isDarkMode
}) => {
  // Extract the metric name for use as the data key
  const metricName = metricPath.split('.').pop() || 'value';
  
  // Format the data for the chart
  const chartData = data.map(item => {
    const metricValue = extractValue(item.results, metricPath);
    return {
      date: new Date(item.test_date).toLocaleDateString(),
      [metricName]: metricValue,
      tooltipLabel: new Date(item.test_date).toLocaleString()
    };
  }).filter(item => item[metricName] !== null);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#374151" : "#e5e7eb"} />
        <XAxis 
          dataKey="date" 
          stroke={isDarkMode ? "#9ca3af" : "#6b7280"}
          tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280" }}
        />
        <YAxis 
          stroke={isDarkMode ? "#9ca3af" : "#6b7280"} 
          tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280" }}
        />
        <Tooltip 
          labelFormatter={(label, items) => { 
            const item = items[0]?.payload;
            return item?.tooltipLabel || label;
          }}
          contentStyle={{
            backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
            borderColor: isDarkMode ? '#374151' : '#e5e7eb',
            color: isDarkMode ? '#e5e7eb' : '#111827'
          }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey={metricName} 
          name={metricLabel}
          stroke="#3b82f6" 
          strokeWidth={2}
          dot={{ r: 4, stroke: '#3b82f6', fill: 'white' }}
          activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2, fill: 'white' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Helper function to extract values from nested objects
export const extractValue = (obj: any, path: string): number | null => {
  if (!obj) return null;
  
  const parts = path.split('.');
  let value = obj;
  
  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part];
    } else {
      return null;
    }
  }
  
  // Try to parse as number
  const numValue = parseFloat(value);
  return isNaN(numValue) ? null : numValue;
};