export const signupFields = [
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email',
    name: 'email',
    type: 'email',
    isRequired: true,
    placeholder: 'Email address',
  },
  {
    labelText: 'First Name',
    labelFor: 'first-name',
    id: 'firstname',
    name: 'firstname',
    type: 'name',
    isRequired: false,
    placeholder: 'First Name',
  },
  {
    labelText: 'Last Name',
    labelFor: 'last-name',
    id: 'lastname',
    name: 'lastname',
    type: 'name',
    isRequired: false,
    placeholder: 'Last Name',
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    isRequired: false,
    placeholder: 'Password',
  },
];

export const loginFields = [
  {
    labelText: 'Email address',
    labelFor: 'email-address',
    id: 'email',
    name: 'email',
    type: 'email',
    isRequired: true,
    placeholder: 'Email address',
  },

  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    isRequired: false,
    placeholder: 'Password',
  },
];

export const data = {
  eventName: '',
  image: '',
  price: '',
  isUpcoming: false,
  location: '',
  category: '',
};

export const venue = {
  venueName: '',
  venueImage: '',
  isAvailable: false,
  venueLocation: '',
};

// export const moneyFormatter = (value) => {
//   return new Intl.NumberFormat().format(value);
// };

export const moneyFormater = (value, country = 'NG') => {
  const currency = {
    NG: 'NGN',
  };
  return new Intl.NumberFormat(`en-${country}`, {
    style: 'currency',
    currency: currency[country],
  }).format(value);
};
