// import email from './components/email'

import Email from "./Email";


function EmailList(filteredEmails, setEmails, setSelectedEmail) {
  return <main className="emails">
    <ul>
      {filteredEmails.map((email, index) => (
        Email(index, email, setEmails, setSelectedEmail)
        // <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
      ))}
    </ul>
  </main>
}

export default EmailList;

