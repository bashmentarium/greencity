export const login = (authData) =>
  fetch('https://green-city-us.herokuapp.com/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: authData.email,
      password: authData.password,
    }),
  })
