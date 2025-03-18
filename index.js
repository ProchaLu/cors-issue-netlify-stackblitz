const workingUrl = 'https://memegen.link/examples/';
const brokenUrl = 'https://memegen-link-examples-upleveled.netlify.app/';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const text = await response.text();
    console.log(`✅ Success fetching ${url}`);
    console.log(text.substring(0, 100));
  } catch (error) {
    console.error(`❌ Failed to fetch ${url}`);
    console.error(error);
  }
}

console.log('\nFetching working API...');
await fetchData(workingUrl);

console.log('\nFetching broken URL...');
await fetchData(brokenUrl);
