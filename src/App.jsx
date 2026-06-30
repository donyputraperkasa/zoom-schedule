import './App.css'
import ScheduleList from './components/ScheduleList'
import CreateByMe from './components/CreateByMe'
import { useMemo, useState } from 'react'
import schedulesData from './data/schedule'
import {
  Search,
  School,
  CalendarDays,
  SearchCheck,
  ClipboardList,
  ImageDown,
  Headset,
  Megaphone,
} from 'lucide-react'
import logo from './assets/logo.png'
import backgroundZoom from './assets/background.png'


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

      <div
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '24px',
          justifyContent: 'center',
        }}
      >
        <a
          href='https://forms.gle/XsXtApac3X8GdTsZ7'
          target='_blank'
          rel='noreferrer'
          className='quick-link-btn'
          style={{
            padding: '12px 18px',
            background: '#9928ea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <>
            <ClipboardList size={18} />
              Link Presensi
          </>
        </a>

        <a
          href={backgroundZoom}
          download='backgroundPresentasiKurikulum.png'
          target='_blank'
          rel='noreferrer'
          className='quick-link-btn'
          style={{
            padding: '12px 18px',
            background: '#16a34a',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <>
            <ImageDown size={18} />
            Download Background Zoom
          </>
        </a>

        <a
          href='https://wa.me/628112645659'
          target='_blank'
          rel='noreferrer'
          className='quick-link-btn'
          style={{
            padding: '12px 18px',
            background: '#f59e0b',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <>
            <Headset size={18} />
            Ada Kendala? Hubungi Kami
          </>
        </a>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #fff7ed 0%, #fffbeb 100%)',
          border: '1px solid #fed7aa',
          borderLeft: '6px solid #f59e0b',
          borderRadius: '20px',
          padding: '20px 24px',
          marginBottom: '32px',
          boxShadow: '0 8px 24px rgba(245, 158, 11, 0.12)',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            minWidth: '48px',
            borderRadius: '14px',
            background: '#ffedd5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Megaphone size={24} color='#ea580c' />
        </div>

        <div>
          <p
            style={{
              margin: 0,
              color: '#9a3412',
              fontSize: '14px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            Pengumuman Penting
          </p>
          <h2
            style={{
              margin: '6px 0 8px',
              color: '#7c2d12',
              fontSize: '22px',
              lineHeight: '1.3',
            }}
          >
            Perubahan Jadwal Presentasi Kurikulum
          </h2>
          <p
            style={{
              margin: 0,
              color: '#92400e',
              fontSize: '16px',
              lineHeight: '1.7',
            }}
          >
            Terdapat perubahan jadwal presentasi kurikulum untuk
            <strong> SD BOPKRI Wirobrajan</strong> dan
            <strong> SD BOPKRI Sidomulyo 1</strong>. Silakan cek kembali jadwal terbaru pada daftar di bawah ini.
          </p>
        </div>
      </div>

      <ScheduleList schedules={schedules} />

      <div style={{ marginTop: '50px' }}>
        <CreateByMe />
      </div>
    </div>
  )
}

export default App
