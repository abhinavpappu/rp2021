const proxyurl = ""

const prefix =
  process.env.NODE_ENV === 'production'
    ? 'https://www.reflectionsprojections.org'
    : 'http://localhost:3000';  
export const fetchConferenceData = async () => {
  const url = `${prefix}/data/rp2021.json`;
  const api_call = await fetch(proxyurl + url)
  const data = await api_call.json();
  return data;
};

// export const fetchNavData = async () => {
//   const url = `${prefix}/data/nav.json`;
//   const api_call = await fetch(proxyurl + url)
//   const data = await api_call.json();
//   return data;
// };

// export const fetchGates = async () => {
//   const url = `${prefix}/data/gates.json`;
//   const api_call = await fetch(proxyurl + url)
//   const data = await api_call.json();
//   return data;
// };

// export const fetchRegistrationConfig = async () => {
//   const url = `${prefix}/data/registration.json`;
//   const api_call = await fetch(proxyurl + url)
//   const data = await api_call.json();
//   return data;
// };