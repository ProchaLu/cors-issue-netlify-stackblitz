const testUrls = [
  'https://memegen-link-examples-upleveled.netlify.app/',
  'https://memegen.link/examples/',
  'https://lutfhi.netlify.app/',
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
