import { School, CalendarDays, Clock3, Link as LinkIcon } from 'lucide-react'

function ScheduleList({ schedules }) {
    return (
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
        }}
        >
        {schedules.map((item) => (
            <div
            key={item.id}
            className="schedule-card"
            style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                borderTop: '5px solid #2563eb',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}
            >
            <h3
                style={{
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                }}
            >
                <School size={24} color='#2563eb' />
                {item.school}
            </h3>

            <p
                style={{
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                }}
            >
                <CalendarDays size={18} />
                {item.day}, {item.date}
            </p>

            <p
                style={{
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                }}
            >
                <Clock3 size={18} />
                {item.time}
            </p>

            <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="zoom-button"
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                background: '#2563eb',
                color: 'white',
                padding: '12px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                }}
            >
                <>
                <LinkIcon size={18} /> Mulai Zoom
                </>
            </a>
            </div>
        ))}
        </div>
    )
}

export default ScheduleList
