const dummy = 'http://localhost:5001/bmunz-316708/us-central1/dummyFunction';
const dialogflowGateway =
  'http://localhost:5001/bmunz-316708/us-central1/dialogflowGateway';

export async function useAskToBot(query) {
  const response = await fetch(
    dialogflowGateway, // TODO: make it env variable
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId: 'berny',
        queryInput: {
          text: {
            text: query,
            languageCode: 'en-US',
          },
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
