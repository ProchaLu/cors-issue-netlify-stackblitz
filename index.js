const testUrls = [
  'https://memegen-link-examples-upleveled.netlify.app/',
  'https://netlify.com/',
  'https://lutfhi.netlify.app/',
  // successful fetch tests
  'https://memegen.link/examples/',
  'https://randomuser.me/api/',
];

async function testFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(`✅ Success: ${url}`);
  } catch (error) {
    console.error(`❌ Failed: ${url}`, error);
  }
}

testUrls.forEach(testFetch);
