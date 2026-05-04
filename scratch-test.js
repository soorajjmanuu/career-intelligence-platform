import { fetchDeveloperInsights } from './lib/github.js';

async function main() {
  try {
    const data = await fetchDeveloperInsights('octocat');
    console.log("SUCCESS!", Object.keys(data));
  } catch (err) {
    console.error("ERROR!", err.message, err.stack);
  }
}

main();
