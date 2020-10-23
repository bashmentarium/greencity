export const fetchProjects = (token) =>
  fetch(`https://green-city-us.herokuapp.com/projects`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => {
    console.log('Something went wrong')
    console.log(err)
  })
