export const login = (authData) =>
  fetch('http://localhost:1337/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: authData.email,
      password: authData.password,
    }),
  })
