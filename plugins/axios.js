export default function ({ $axios, redirect, route }) {
  $axios.onError(error => {
    switch (error.response && error.response.status) {
      case 401:
        console.log(error)
        redirect('/login' ,{
          redirect: route.fullPath
        })
      break;
    }
  })
}
