export default function CreateByMe() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '24px 0',
        borderTop: '1px solid #e2e8f0',
        marginTop: '30px',
      }}
    >
      <a
        href='https://portofolio-ku-gold.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 14px',
          background: '#f8fafc',
          color: '#64748b',
          textDecoration: 'none',
          borderRadius: '999px',
          fontWeight: '500',
          fontSize: '13px',
          border: '1px solid #e2e8f0',
          transition: 'all 0.2s ease',
        }}
        className='created-by-link'
      >
        Created by Mas Don
      </a>
    </div>
  )
}