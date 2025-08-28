import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
// import EmailList from './components/EmailList'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import ShowEmails from './components/ShowEmails'
// import email from './components/email'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const [selectedEmail, setSelectedEmail ] = useState(null);

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
      {ShowEmails(selectedEmail, setSelectedEmail, filteredEmails, setEmails)}
    </div>
  )
}

// {/* {EmailList(filteredEmails, setEmails)} */}
export default App;



