// Vercel Edge Geolocation API Route
export const config = {
  runtime: 'edge',
};

export default function handler(request: Request) {
  // Read Vercel Edge Header for Country
  const country = request.headers.get('x-vercel-ip-country') || null;
  const region = request.headers.get('x-vercel-ip-country-region') || null;
  const city = request.headers.get('x-vercel-ip-city') || null;

  const COUNTRY_MAP: Record<string, string> = {
    US: 'USD',
    GB: 'GBP',
    IN: 'INR',
    CA: 'CAD',
    AU: 'AUD',
    AE: 'AED',
    DE: 'EUR',
    FR: 'EUR',
    IT: 'EUR',
    ES: 'EUR',
    NL: 'EUR',
  };

  const detectedCurrency = country ? COUNTRY_MAP[country.toUpperCase()] || 'USD' : 'INR';

  return new Response(
    JSON.stringify({
      country,
      region,
      city,
      currency: detectedCurrency,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=3600',
      },
    }
  );
}
