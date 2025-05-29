// src/components/TestDetailsModal.tsx
import React from 'react';

interface TestDetailsModalProps {
  test: any;
  onClose: () => void;
  isDarkMode: boolean;
}

export const TestDetailsModal: React.FC<TestDetailsModalProps> = ({
  test,
  onClose,
  isDarkMode
}) => {
  if (!test) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: isDarkMode ? '#1e1e1e' : 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        width: '90%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        <div style={{
          padding: '16px',
          borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: isDarkMode ? '#f3f4f6' : '#111827',
            margin: 0
          }}>
            Test Details - {new Date(test.test_date).toLocaleString()}
          </h3>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: isDarkMode ? '#9ca3af' : '#6b7280'
            }}
          >
            ×
          </button>
        </div>
        
        <div style={{ padding: '16px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            marginBottom: '16px'
          }}>
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                marginBottom: '4px'
              }}>
                Component
              </div>
              <div style={{
                fontSize: '16px',
                color: isDarkMode ? '#f3f4f6' : '#111827'
              }}>
                {test.component_id}
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                marginBottom: '4px'
              }}>
                Test Type
              </div>
              <div style={{
                fontSize: '16px',
                color: isDarkMode ? '#f3f4f6' : '#111827',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {test.test_type || 'Standard Test'}
                
                {/* badge to indicate if test was real or simulated */}
                {test.results && test.results.simulated ? (
                  <span style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    color: '#f59e0b',
                    fontSize: '12px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 500
                  }}>
                    Simulated
                  </span>
                ) : (
                  <span style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    fontSize: '12px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontWeight: 500
                  }}>
                    Real Data
                  </span>
                )}
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                marginBottom: '4px'
              }}>
                Status
              </div>
              <div style={{
                display: 'inline-block',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: test.status === 'completed' 
                  ? (isDarkMode ? 'rgba(16, 185, 129, 0.2)' : '#ecfdf5')
                  : (isDarkMode ? 'rgba(239, 68, 68, 0.2)' : '#fee2e2'),
                color: test.status === 'completed'
                  ? (isDarkMode ? '#34d399' : '#047857')
                  : (isDarkMode ? '#f87171' : '#b91c1c')
              }}>
                {test.status === 'completed' ? 'SUCCESS' : 'FAILED'}
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '14px',
                fontWeight: 500,
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                marginBottom: '4px'
              }}>
                Test Date
              </div>
              <div style={{
                fontSize: '16px',
                color: isDarkMode ? '#f3f4f6' : '#111827'
              }}>
                {new Date(test.test_date).toLocaleString()}
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '24px' }}>
            <h4 style={{
              fontSize: '16px',
              fontWeight: 600,
              color: isDarkMode ? '#f3f4f6' : '#111827',
              marginBottom: '12px'
            }}>
              Test Results
            </h4>
            
            <div style={{
              backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
              borderRadius: '6px',
              padding: '16px',
              overflow: 'auto',
              maxHeight: '400px',
              fontFamily: 'monospace',
              fontSize: '14px',
              color: isDarkMode ? '#f3f4f6' : '#111827',
              whiteSpace: 'pre-wrap'
            }}>
              {JSON.stringify(test.results, null, 2)}
            </div>
          </div>
          
          {test.notes && (
            <div style={{ marginTop: '24px' }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: 600,
                color: isDarkMode ? '#f3f4f6' : '#111827',
                marginBottom: '12px'
              }}>
                Notes
              </h4>
              <div style={{
                padding: '12px',
                backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                borderRadius: '6px',
                color: isDarkMode ? '#f3f4f6' : '#111827'
              }}>
                {test.notes}
              </div>
            </div>
          )}
          
          <div style={{ 
            marginTop: '24px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <button
              onClick={() => {
                // Export the test details
                const detailsJson = JSON.stringify(test, null, 2);
                const blob = new Blob([detailsJson], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = `test_details_${test.id}.json`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Export Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};