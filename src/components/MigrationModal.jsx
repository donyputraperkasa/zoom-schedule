import React from 'react'

export default function MigrationModal() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.35)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        zIndex: 99999,
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
          maxWidth: '460px',
          width: '100%',
          padding: '36px 32px 32px',
          textAlign: 'center',
          boxSizing: 'border-box',
          animation: 'fadeInScale 0.3s ease-out forwards',
        }}
      >
        <h2
          style={{
            margin: '0 0 14px 0',
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827',
            letterSpacing: '-0.02em',
          }}
        >
          Website Telah Berpindah
        </h2>

        <p
          style={{
            margin: '0 0 26px 0',
            fontSize: '15px',
            lineHeight: '1.6',
            color: '#4b5563',
          }}
        >
          Website ini telah berpindah alamat ke sistem baru. Silakan klik tombol
          di bawah untuk menuju ke tautan tersebut.
        </p>

        <a
          href="https://tatakelolaku.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="migration-button"
          style={{
            display: 'block',
            width: '100%',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '14px 20px',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            boxSizing: 'border-box',
            transition: 'background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#1d4ed8'
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.45)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 99, 235, 0.35)'
          }}
        >
          tatakelolaku.vercel.app
        </a>
      </div>
    </div>
  )
}

