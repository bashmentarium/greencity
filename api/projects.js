export const fetchProjects = (token) =>
  fetch(`http://localhost:1337/projects`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => {
    console.log('Something went wrong')
    console.log(err)
  })
