import { useEffect } from 'react';
import { Title } from 'react-admin';

interface ExternalLinkProps {
  url: string;
  name: string;
}

export const ExternalLink = ({ url, name }: ExternalLinkProps) => {
  useEffect(() => {
    // Open the external URL in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [url]);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      background: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <Title title={`Opening ${name}...`} />
      <h2 style={{ color: '#1976d2', marginBottom: '20px' }}>🚀 Opening {name}</h2>
      <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>
        Opening <strong>{name}</strong> in a new tab...
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          background: '#4169E1',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        Click here if not redirected automatically →
      </a>
      <p style={{ fontSize: '14px', color: '#999', marginTop: '20px' }}>
        URL: <code style={{ background: '#f5f5f5', padding: '2px 6px', borderRadius: '3px', color: '#333' }}>{url}</code>
      </p>
    </div>
  );
};
