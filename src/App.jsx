import './App.css'
import ScheduleList from './components/ScheduleList'
import CreateByMe from './components/CreateByMe'
import { useMemo, useState } from 'react'
import schedulesData from './data/schedule'
import { Search, School, CalendarDays, SearchCheck } from 'lucide-react'
import logo from './assets/logo.png'


function App() {
  const [search, setSearch] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  const dates = [...new Set(schedulesData.map(item => item.date))]

  const schedules = useMemo(() => {
    return schedulesData.filter(item => {
      const matchSchool = item.school.toLowerCase().includes(search.toLowerCase())
      const matchDate = selectedDate ? item.date === selectedDate : true
      return matchSchool && matchDate
    })
  }, [search, selectedDate])

  const totalSchools = schedulesData.length
  const totalDates = dates.length

  return (
    <div
      style={{
        width: '100%',
        margin: '40px auto',
        padding: '20px 40px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <img
          src={logo}
          alt='Logo BOPKRI'
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            marginBottom: '16px',
          }}
        />

        <h1
          style={{
            color: '#1e3a8a',
            margin: 0,
            lineHeight: '1.1',
            marginBottom: '20px',
            fontSize: '40px',
            fontWeight: '600',
          }}
        >
          Jadwal Presentasi Kurikulum Sekolah
        </h1>

        <p
          style={{
            color: '#64748b',
            fontSize: '22px',
            margin: 0,
            marginTop: '8px',
          }}
        >
          Yayasan BOPKRI Yogyakarta • Tahun Ajaran 2025/2026
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '30px',
        }}
      >
        <div className='dashboard-card'>
          <h3
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <School size={28} color='#2563eb' />
            Total Sekolah
          </h3>
          <p>{totalSchools}</p>
        </div>

        <div className='dashboard-card'>
          <h3
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <CalendarDays size={28} color='#2563eb' />
            Total Tanggal
          </h3>
          <p>{totalDates}</p>
        </div>

        <div className='dashboard-card'>
          <h3
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <SearchCheck size={28} color='#2563eb' />
            Hasil Ditampilkan
          </h3>
          <p>{schedules.length}</p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          alignItems: 'center',
          background: '#fff',
          padding: '20px',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: '#eff6ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Search size={22} color='#2563eb' />
        </div>

        <input
          type='text'
          placeholder='Cari sekolah...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '14px 16px',
            flex: 1,
            minWidth: '250px',
            borderRadius: '12px',
            border: '1px solid #dbeafe',
            fontSize: '15px',
          }}
        />

        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            padding: '14px 16px',
            minWidth: '220px',
            borderRadius: '12px',
            border: '1px solid #dbeafe',
            fontSize: '15px',
          }}
        >
          <option value=''>Semua Tanggal</option>
          {dates.map((date) => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
      </div>
      <ScheduleList schedules={schedules} />

      <div style={{ marginTop: '50px' }}>
        <CreateByMe />
      </div>
    </div>
  )
}

export default App
