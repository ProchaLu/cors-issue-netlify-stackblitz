const testUrls = [
  'https://memegen-link-examples-upleveled.netlify.app/',
  'https://netlify.com/',
  'https://lutfhi.netlify.app/',
  'https://share-zebra-81.deno.dev/proxy',
  // successful fetch test
  'https://memegen.link/examples/',
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
