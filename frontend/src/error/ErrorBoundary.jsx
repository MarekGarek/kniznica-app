import React from 'react';

export class NativeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Aktualizuje stav, takže nasledujúci render ukáže náhradné UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Uložíme si podrobný stack trace z konzoly
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '24px', 
          margin: '20px', 
          backgroundColor: '#fff', 
          color: '#000',
          fontFamily: 'monospace',
          border: '2px solid #ff4d4f',
          borderRadius: '6px'
        }}>
          <h2 style={{ color: '#ff4d4f', marginTop: 0 }}>Runtime Error</h2>
          
          {/* Hlavná správa chyby */}
          <p style={{ fontWeight: 'bold', fontSize: '16px' }}>
            {this.state.error && this.state.error.toString()}
          </p>
          
          {/* Kompletný výpis z konzoly (Component Stack) */}
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '16px', 
            overflowX: 'auto',
            fontSize: '13px',
            whiteSpace: 'pre-wrap',
            border: '1px solid #d9d9d9',
            borderRadius: '4px'
          }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
          
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '12px',
              padding: '8px 16px',
              cursor: 'pointer'
            }}
          >
            Obnoviť stránku
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}