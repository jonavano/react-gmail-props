import EmailList from './EmailList'
import ReadEmail from './ReadEmail';



function ShowEmails(selectedEmail, setSelectedEmail, filteredEmails, setEmails) {
    if (selectedEmail === null) {

        return <>
            {EmailList(filteredEmails, setEmails, setSelectedEmail)} 
        </>
        
    }
    else {
        return <>
        {ReadEmail(selectedEmail, setSelectedEmail, filteredEmails)}
        </>

    }
}

export default ShowEmails;

