export default function ({ app, $axios, store, redirect, route }) {
  // 设置请求版本
  $axios.setHeader('version', store.getters.getVersion)
  // $axios.setToken('bearereyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpdGVzdC5vbnRoZXJvYWRzdG9yZS5jb20vYXBwdjVfMS9sb2dpbi93ZWNoYXRhcHAiLCJpYXQiOjE1MjY3NDA4NzMsImV4cCI6MTUyNjk1Njg3MywibmJmIjoxNTI2NzQwODczLCJqdGkiOiI2bkhRVExORno5Z29xajI2Iiwic3ViIjo3MCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.K1giVmB8DsVJqfH_tNDKkhb-7yITe7Z9XajwUOKvyb0')
  // console.log(this)
  $axios.onResponse(response => {
    // console.log(response)
  })
  $axios.onError(error => {

  })

}
