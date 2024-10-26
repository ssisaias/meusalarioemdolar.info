export const loader = () => {
  // handle "GET" request
  const robotText = ` 
        User-agent: *
        Allow: /
    
        Sitemap: http://meusalarioemdolar.info/sitemap.xml
        `;
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
