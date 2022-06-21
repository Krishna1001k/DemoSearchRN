const ErrorHandling = (err) => { 
    console.log('aetra     '+err);
    switch (err) {
        case "auth/network-request-failed":
            alert('Internet Connection Not Found');
            break;
    
        case 'auth/email-already-in-use':
            alert('Email address is already in use!');
            break;

    
        case 'auth/invalid-email':
            alert('Email address is invalid!')
            break;

        case 'auth/user-not-found':
            alert('User Not Found')
            break;

    
        case 'auth/wrong-password':
            alert('Wrong Password')
            break;

    
        case 'auth/weak-password':
            alert('Please Set Strong Password')
            break;

    
        default:
            alert('Error')
    }
}


export default  ErrorHandling;