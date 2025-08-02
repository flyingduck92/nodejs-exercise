const handleRequest = (req, res) => {
  const [url, method] = [req.url, req.method]

  if (url === '/') {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello</title>
      </head>
      <body>
        <form action="/create-users" method="POST">
          <input name="username" type="text" />
          <button type="submit">Submit</button>
        </form>
      </body>
      </html>  
    `)
    return res.end()
  }

  if (url === '/users') {
    res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hello</title>
      </head>
      <body>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </body>
      </html>  
    `)
    return res.end()
  }

  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', chunk => body.push(chunk))

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const username = parsedBody.split('=')[1]
      console.log(username)
    })

    res.status = 302
    res.setHeader('Location', '/')
    return res.end()
  }

  res.setHeader('Content-type', 'text/html')
  res.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>404 Page not found</title>
      </head>
      <body>
        <h1>404 Page not found</h1>
      </body>
      </html>  
    `)
  res.end()
}

module.exports = {
  handler: handleRequest
}