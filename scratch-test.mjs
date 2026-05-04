async function main() {
  const res = await fetch('http://localhost:3000/api/career/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'octocat', manualSkills: '', resumeText: '' })
  });
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
}

main();
