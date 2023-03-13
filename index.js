const urlUsers = 'https://jsonplaceholder.typicode.com/users';
const urlWebsiteImages = 'https://dummyimage.com/200x200/024983/ffffff&text=';

const getUsers = () => {
  fetch(urlUsers)
    .then(fetchResponse => fetchResponse.json())
    .then(userResponse => {
      renderDivs(purgeUsers(userResponse));
    });
}

const getImageByWebsite = (websiteName) => {
  return fetch(`${urlWebsiteImages}${websiteName}`)
    .then(fetchImgResponse => fetchImgResponse.json())
    .then(imgResponse => imgResponse);
}

const purgeUsers = (aUsers) => {
  const purgedUsers = aUsers.map(user => ({
    name: user.name,
    username: user.username,
    email: user.email,
    website: user.website,
    address: { city: user.address.city },
    company: { company: user.company.name },
  }));

  console.log(purgedUsers);

  return purgedUsers;
}

const renderDivs = async (users) => {
  if (!users) return false;

  getImageByWebsite(users[0].website);
  users.forEach((userElement, userIndex) => {

    const cardNumber = userIndex + 1;
    const cardID = document.getElementById('card');
    const title = document.createElement('h1')
    title.innerHTML = 'My card ' + cardNumber;
    cardID.appendChild(title);
  });

}

getUsers();