const createContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = 'Phone: +254 792 252506';

  const address = document.createElement('p');
  address.textContent = 'Addres: Nairobi-Kisumu Highway, In the Mega City Mall compound., Kisumu, KE 40100';

  contact.appendChild(phoneNumber);
  contact.appendChild(address);

  return contact;
}

const loadContact = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
