import { useState } from 'react'
  // const savedEmails = null;

function Header(emails, setSearchEmails) {
  const [searchTerm, setSearchterm]  = useState('')


  const  search = (value) => {
    // console.log(emails)
    setSearchterm(value)

    setSearchEmails(emails.filter(email => email.title.toLowerCase().includes(value.toLowerCase())))
  };

  return <header className="header">
    <div className="left-menu">
      <svg className="menu-icon" focusable="false" viewBox="0 0 24 24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>

      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
        alt="gmail logo" />
    </div>

    <div className="search">
      <input className="search-bar" placeholder="Search mail" value={searchTerm}
      onChange={e => search(e.target.value)} 
      >
      </input>
    </div>
  </header>
}

export default Header;