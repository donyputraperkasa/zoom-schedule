import {
    School,
    CalendarDays,
    Clock3,
    Link as LinkIcon,
    FileText,
    Upload,
    CalendarCheck,
    Archive,
} from 'lucide-react'

function getScheduleStatus(date, timeRange) {
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
    const [startTime, endTime] = timeRange.replace('WIB', '').split('-').map(v => v.trim())

    const [startHour, startMinute] = startTime.split('.').map(Number)
    const [endHour, endMinute] = endTime.split('.').map(Number)

    const startDate = new Date(Number(year), months[monthName], Number(day), startHour, startMinute)
    const endDate = new Date(Number(year), months[monthName], Number(day), endHour, endMinute)

    const now = new Date()

    if (now < startDate) return 'upcoming'
    if (now >= startDate && now <= endDate) return 'ongoing'
    return 'finished'
}

function ScheduleList({ schedules }) {
    const activeSchedules = schedules.filter((item) => {
        const status = getScheduleStatus(item.date, item.time)
        return status === 'ongoing' || status === 'upcoming'
    })

    const finishedSchedules = schedules.filter((item) => {
        const status = getScheduleStatus(item.date, item.time)
        return status === 'finished'
    })

    return (
        <>
            <div style={{ marginBottom: '40px' }}>
                <h2
                    style={{
                        marginBottom: '20px',
                        color: '#2563eb',
                        fontSize: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        justifyContent: 'center',
                    }}
                >
                    <>
                        <CalendarCheck size={24} />
                        Jadwal Aktif ({activeSchedules.length})
                    </>
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {activeSchedules.map((item) => {
                        const status = getScheduleStatus(item.date, item.time)
                        const isFinished = status === 'finished'
                        const isOngoing = status === 'ongoing'
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

                            <div
                                style={{
                                    display: 'flex',
                                    gap: '10px',
                                    marginTop: '12px',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <a
                                    href={isFinished ? undefined : item.link}
                                    target={isFinished ? undefined : '_blank'}
                                    rel='noreferrer'
                                    onClick={(e) => {
                                        if (isFinished) e.preventDefault()
                                    }}
                                    className='zoom-action-btn'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: isFinished
                                            ? '#94a3b8'
                                            : isOngoing
                                                ? '#16a34a'
                                                : '#2563eb',
                                        color: 'white',
                                        padding: '12px',
                                        borderRadius: '10px',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        cursor: isFinished ? 'not-allowed' : 'pointer',
                                        opacity: isFinished ? 0.8 : 1,
                                        flex: 1,
                                    }}
                                >
                                    <LinkIcon size={18} />
                                    {isFinished ? 'Sesi Selesai' : isOngoing ? 'Sedang Berjalan' : 'Mulai Zoom'}
                                </a>

                                <a
                                    href={item.driveLink}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='doc-action-btn'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: '#f8fafc',
                                        color: '#334155',
                                        padding: '12px',
                                        borderRadius: '10px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        border: '1px solid #cbd5e1',
                                        flex: 1,
                                    }}
                                >
                                    <FileText size={18} />
                                    Dokumentasi
                                </a>
                                <a
                                    href={item.uploadLink}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='upload-action-btn'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: '#d119a6',
                                        color: 'white',
                                        padding: '12px',
                                        borderRadius: '10px',
                                        textDecoration: 'none',
                                        fontWeight: '600',
                                        flex: 1,
                                    }}
                                >
                                    <Upload size={18} />
                                    Upload File Presentasi Kurikulum
                                </a>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div>
                <h2
                    style={{
                        marginBottom: '20px',
                        color: '#64748b',
                        fontSize: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        justifyContent: 'center',
                    }}
                >
                    <>
                        <Archive size={24} />
                        Jadwal Selesai ({finishedSchedules.length})
                    </>
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {finishedSchedules.map((item) => {
                        const status = getScheduleStatus(item.date, item.time)
                        const isFinished = status === 'finished'
                        const isOngoing = status === 'ongoing'

                        return (
                            <div
                                key={item.id}
                                className='schedule-card'
                                style={{
                                    background: '#ffffff',
                                    borderRadius: '16px',
                                    padding: '20px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                    borderTop: '5px solid #94a3b8',
                                    opacity: 0.85,
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

                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '10px',
                                        marginTop: '12px',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <a
                                        href={isFinished ? undefined : item.link}
                                        target={isFinished ? undefined : '_blank'}
                                        rel='noreferrer'
                                        onClick={(e) => {
                                            if (isFinished) e.preventDefault()
                                        }}
                                        className='zoom-action-btn'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: isFinished
                                                ? '#94a3b8'
                                                : isOngoing
                                                    ? '#16a34a'
                                                    : '#2563eb',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            cursor: isFinished ? 'not-allowed' : 'pointer',
                                            opacity: isFinished ? 0.8 : 1,
                                            flex: 1,
                                        }}
                                    >
                                        <LinkIcon size={18} />
                                        {isFinished ? 'Sesi Selesai' : isOngoing ? 'Sedang Berjalan' : 'Mulai Zoom'}
                                    </a>

                                    <a
                                        href={item.driveLink}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='doc-action-btn'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: '#f8fafc',
                                            color: '#334155',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            border: '1px solid #cbd5e1',
                                            flex: 1,
                                        }}
                                    >
                                        <FileText size={18} />
                                        Dokumentasi
                                    </a>
                                    <a
                                        href={item.uploadLink}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='upload-action-btn'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '8px',
                                            background: '#d119a6',
                                            color: 'white',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            flex: 1,
                                        }}
                                    >
                                        <Upload size={18} />
                                        Upload File Presentasi Kurikulum
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ScheduleList
