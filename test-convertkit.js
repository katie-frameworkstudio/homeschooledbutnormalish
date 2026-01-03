// Quick test script to verify ConvertKit credentials
const API_KEY = 'hrkrnhrIF_wLImgmnmYJ-A';
const FORM_ID = '8928244';

console.log('Testing ConvertKit credentials...');
console.log('API Key (first 10 chars):', API_KEY?.substring(0, 10) + '...');
console.log('Form ID:', FORM_ID);

fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    api_key: API_KEY,
    email: 'test@example.com',
    fields: { test: 'true' }
  })
})
  .then(res => res.json())
  .then(data => {
    console.log('\nResponse from ConvertKit:');
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(err => {
    console.error('Error:', err.message);
  });

