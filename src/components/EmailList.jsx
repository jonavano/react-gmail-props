// import email from './components/email'

import Email from "./Email";


function EmailList(filteredEmails, toggleRead, toggleStar) {
  return <main className="emails">
    <ul>
      {filteredEmails.map((email, index) => (
        Email(index, email, toggleRead, toggleStar)
        // <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
      ))}
    </ul>
  </main>
}

export default EmailList;

