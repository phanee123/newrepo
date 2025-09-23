export async function handler(event) {
  const choice = event.queryStringParameters.choice || "unknown";
  console.log(`[CHOICE] User clicked: ${choice} at ${new Date().toISOString()}`);
  return {
    statusCode: 200,
    body: "ok"
  };
}
