'use client'
import { useState } from 'react'
import HomePage from './components/HomePage'
import MessagesPage from './components/MessagesPage'
import GiftsPage from './components/GiftsPage'
import MemoriesPage from './components/MemoriesPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onStart={() => setCurrentPage('messages')} />
      case 'messages':
        return <MessagesPage onNext={() => setCurrentPage('gifts')} />
      case 'gifts':
        return <GiftsPage onNext={() => setCurrentPage('memories')} />
      case 'memories':
        return <MemoriesPage onHome={() => setCurrentPage('home')} />
      default:
        return <HomePage onStart={() => setCurrentPage('messages')} />
    }
  }

  return (
    <main className="min-h-screen">
      {renderPage()}
    </main>
  )
}