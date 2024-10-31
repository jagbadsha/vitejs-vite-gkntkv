import { useState } from 'react'
import MobileLoanApp from './pages/MobileLoanApp'
import PersonalInfoPage from './pages/PersonalInfoPage'
import DocumentsPage from './pages/DocumentsPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('loan')
  const [formData, setFormData] = useState({})

  const handlePersonalInfoSubmit = (data) => {
    setFormData(data)
    setCurrentPage('documents')
  }

  const handleDocumentsSubmit = (documents) => {
    console.log('Final submission:', { ...formData, documents })
    // Handle the final submission here
  }

  switch (currentPage) {
    case 'loan':
      return <MobileLoanApp onApply={() => setCurrentPage('personal-info')} />
    case 'personal-info':
      return <PersonalInfoPage onSubmit={handlePersonalInfoSubmit} onBack={() => setCurrentPage('loan')} />
    case 'documents':
      return (
        <DocumentsPage 
          employmentType={formData.employment}
          onSubmit={handleDocumentsSubmit}
          onBack={() => setCurrentPage('personal-info')}
        />
      )
    default:
      return <MobileLoanApp onApply={() => setCurrentPage('personal-info')} />
  }
}

export default App