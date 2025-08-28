function ReadEmail(selectedEmail, setSelectedEmail, filteredEmails) {
    return <>
    <main className="email-view">
        <article className="email-content">
          <div className="title">
            <h1>{filteredEmails[selectedEmail].title}</h1>
          </div>
          <header className="email-content--header">
            <div className="email-info">
              <div className="sender-info">
                <h2>{filteredEmails[selectedEmail].sender}</h2>
              
              </div>
            </div>
           
          </header>
          <section className="email-body">

          </section>
          <section className="email-actions">
            <button onClick={() => setSelectedEmail(null)}>return</button>
          </section>
        </article>
      </main>
    </>
}

export default ReadEmail;