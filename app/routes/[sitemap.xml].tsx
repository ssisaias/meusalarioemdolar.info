export const loader = () => {
  // handle "GET" request
  const content = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://www.meusalarioemdolar.info/</loc>
      <lastmod>2022-10-26T00:36:16</lastmod>
      <priority>1.0</priority>
      </url>
      <url>
      <loc>https://www.meusalarioemdolar.info/sources</loc>
      <lastmod>2022-10-26T00:36:16</lastmod>
      <priority>1.0</priority>
      </url>
      </urlset>
      `;
  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      encoding: "UTF-8",
    },
  });
};
