const user = {
  name: 'Theodore',
  age: 38,
  city: 'Athens'
}

for (const prop in user)
console.log(`${prop}: ${user[prop]}`)

const hello = function() {
  console.log('Hello ' + user.name + '!')
}

hello()

const hello1 = () => console.log(`Hello ${user['name']}!`)

hello1()