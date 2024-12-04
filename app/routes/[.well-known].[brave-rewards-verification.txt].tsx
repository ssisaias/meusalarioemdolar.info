export const loader = () => {
    // handle "GET" request
    const robotText = `This is a Brave Creators publisher verification file.

Domain: meusalarioemdolar.info
Token: b620c613cc0c7f64fe4a82d0ed12caa1379129c981c7c65a55773153f5193900
`;
    return new Response(robotText, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  };
  