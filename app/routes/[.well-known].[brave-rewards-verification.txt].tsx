export const loader = () => {
    // handle "GET" request
    const robotText = `This is a Brave Creators publisher verification file.

Domain: meusalarioemdolar.info
Token: 02cd5597f5c014d5ca4c298b08f62fb8e7946475fae287419b655cf75a98d48f
`;
    return new Response(robotText, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  };
  