// src/components/TestHistoryTable.tsx
import React from 'react';

interface TestHistoryTableProps {
  testHistory: any[];
  isDarkMode: boolean;
  onViewDetails: (item: any) => void;
}

export const TestHistoryTable: React.FC<TestHistoryTableProps> = ({
  testHistory,
  isDarkMode,
  onViewDetails
}) => {
  return (
    <div style={{
      borderRadius: '8px',
      overflow: 'hidden',
      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
    }}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        fontSize: '14px'
      }}>
        <thead style={{ 
          backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
          color: isDarkMode ? '#d1d5db' : '#6b7280',
          fontWeight: 500
        }}>
          <tr>
            <th style={{ 
              padding: '12px 16px',
              textAlign: 'left',
              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
            }}>
              Date/Time
            </th>
            <th style={{ 
              padding: '12px 16px',
              textAlign: 'left',
              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
            }}>
              Test Options
            </th>
            <th style={{ 
              padding: '12px 16px',
              textAlign: 'left',
              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
            }}>
              Status
            </th>
            <th style={{ 
              padding: '12px 16px',
              textAlign: 'left',
              borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
            }}>
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {testHistory.slice().reverse().map((item, index) => (
            <tr key={item.id} style={{ 
              backgroundColor: index % 2 === 0 
                ? (isDarkMode ? '#111827' : '#ffffff') 
                : (isDarkMode ? '#1f2937' : '#f9fafb') 
            }}>
              <td style={{ 
                padding: '12px 16px',
                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                color: isDarkMode ? '#e5e7eb' : '#111827'
              }}>
                {new Date(item.test_date).toLocaleString()}
              </td>
              <td style={{ 
                padding: '12px 16px',
                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                color: isDarkMode ? '#e5e7eb' : '#111827'
              }}>
                {item.results.testedOptions ? item.results.testedOptions.join(', ') : 'N/A'}
              </td>
              <td style={{ 
                padding: '12px 16px',
                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
              }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 500,
                  backgroundColor: item.status === 'completed' 
                    ? (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5')
                    : (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                  color: item.status === 'completed'
                    ? (isDarkMode ? '#34d399' : '#047857')
                    : (isDarkMode ? '#f87171' : '#b91c1c')
                }}>
                  {item.status === 'completed' ? 'SUCCESS' : 'FAILED'}
                </span>
              </td>
              <td style={{ 
                padding: '12px 16px',
                borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
              }}>
                <button 
                  onClick={() => onViewDetails(item)}
                  style={{
                    backgroundColor: isDarkMode ? '#2563eb' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};