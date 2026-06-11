import { School, CalendarDays, Clock3, Link as LinkIcon } from 'lucide-react'

function isScheduleFinished(date, timeRange) {
    const months = {
        Januari: 0, 
        Februari: 1, 
        Maret: 2, 
        April: 3, 
        Mei: 4, 
        Juni: 5,
        Juli: 6, 
        Agustus: 7, 
        September: 8, 
        Oktober: 9, 
        November: 10,
        Desember: 11,
    }

    const [day, monthName, year] = date.split(' ')
    const endTime = timeRange.split('-')[1].replace('WIB', '').trim()
    const [hours, minutes] = endTime.split('.').map(Number)

    const scheduleEnd = new Date(
        Number(year),
        months[monthName],
        Number(day),
        hours,
        minutes,
    )

    return new Date() > scheduleEnd
}

function ScheduleList({ schedules }) {
    return (
        <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px',
        }}
        >
        {schedules.map((item) => {
            const isFinished = isScheduleFinished(item.date, item.time)
            return (
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

            {isFinished && (
                <div
                    style={{
                        marginBottom: '12px',
                        color: '#16a34a',
                        fontWeight: '600',
                    }}
                >
                    ✅ Presentasi selesai
                </div>
            )}

            <a
                href={isFinished ? undefined : item.link}
                target={isFinished ? undefined : '_blank'}
                rel='noreferrer'
                className='zoom-button'
                onClick={(e) => {
                    if (isFinished) e.preventDefault()
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    background: isFinished ? '#94a3b8' : '#2563eb',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    cursor: isFinished ? 'not-allowed' : 'pointer',
                    opacity: isFinished ? 0.8 : 1,
                }}
            >
                <LinkIcon size={18} />
                {isFinished ? 'Sesi Selesai' : 'Mulai Zoom'}
            </a>
            </div>
            )
        })}
        </div>
    )
}

export default ScheduleList
