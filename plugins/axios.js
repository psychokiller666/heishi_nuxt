export default function ({ $axios, redirect, route }) {
  // $axios.setHeader('version', '3.3.1')
  $axios.setToken('bearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpdGVzdC5vbnRoZXJvYWRzdG9yZS5jb20vYXBwdjVfMS9sb2dpbi93ZWNoYXRhcHAiLCJpYXQiOjE1MjY0NDc4MjIsImV4cCI6MTUyNjY2MzgyMiwibmJmIjoxNTI2NDQ3ODIyLCJqdGkiOiJMU3BjN1N5bE5pb245TEJIIiwic3ViIjo3MCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.OKHTSAeKPWieoEXG-sAC4e73mYetUjpePsw7T8H706Y')

  $axios.onError(error => {
    switch (error.response && error.response.status) {
      case 401:
        console.log(error)
        // redirect('/login' ,{
        //   redirect: route.fullPath
        // })
      break;
    }
  })
}
