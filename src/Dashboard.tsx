import { Title } from 'react-admin';

export const Dashboard = () => {
  console.log('Dashboard component rendering! Version: v1.03 - Clickable external links');

  return (
    <div style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '30px',
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      minHeight: '500px'
    }}>
    <Title title="Candid Studios Dashboard v1.03" />

    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    }}>
      <h1 style={{
        fontSize: '32px',
        margin: 0,
        color: '#1976d2'
      }}>
        Welcome to Candid Studios Dashboard
      </h1>
      <span style={{
        fontSize: '14px',
        color: '#999',
        fontWeight: 'bold'
      }}>v1.03</span>
    </div>

    <p style={{
      fontSize: '18px',
      color: '#666',
      marginBottom: '30px'
    }}>
      React Admin powered by PostgREST
    </p>

    <div style={{
      background: '#4169E1',
      padding: '20px',
      borderRadius: '6px',
      marginBottom: '30px'
    }}>
      <h3 style={{ marginTop: 0, color: '#ffffff' }}>Current Configuration</h3>
      <ul style={{ lineHeight: '2', listStyle: 'none', paddingLeft: 0, color: '#ffffff' }}>
        <li>📡 <strong>API URL:</strong> <code style={{ background: '#ffffff', color: '#333', padding: '2px 8px', borderRadius: '3px' }}>{import.meta.env.VITE_API_URL || 'http://localhost:3000'}</code></li>
        <li>🔧 <strong>Mode:</strong> <code style={{ background: '#ffffff', color: '#333', padding: '2px 8px', borderRadius: '3px' }}>{import.meta.env.MODE}</code></li>
      </ul>
    </div>

    <h3 style={{ color: '#333', marginTop: '30px' }}>🚀 Getting Started</h3>
    <ol style={{ lineHeight: '2', color: '#333' }}>
      <li>Make sure PostgREST is running at <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px', color: '#333' }}>http://localhost:3000</code></li>
      <li>Add your database tables as resources in <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px', color: '#333' }}>src/App.tsx</code></li>
      <li>Use React Admin's built-in components to manage your data</li>
    </ol>

    <h3 style={{ color: '#333', marginTop: '30px' }}>📚 Next Steps</h3>
    <ul style={{ lineHeight: '2', color: '#333' }}>
      <li>Start PostgREST backend from the vidi.cloud project</li>
      <li>Create your first Resource component</li>
      <li>Customize this dashboard or remove it entirely</li>
    </ul>

    <div style={{
      marginTop: '40px',
      padding: '15px',
      background: '#e3f2fd',
      borderLeft: '4px solid #1976d2',
      borderRadius: '4px',
      color: '#333'
    }}>
      <strong>💡 Tip:</strong> Check the console for any API connection errors. If PostgREST isn't running, you'll see connection failures.
    </div>
  </div>
  );
};
