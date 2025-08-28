import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import emailList from './components/EmailList'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
// import email from './components/email'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

 

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  return (
    <div className="app">
      {Header()}

      {LeftMenu(currentTab, setCurrentTab, unreadEmails, starredEmails, hideRead, setHideRead)}
      {emailList(filteredEmails, setEmails)}
    </div>
  )
}

export default App;



