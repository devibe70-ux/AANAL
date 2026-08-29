import { Product } from '../types/ecommerce';

export function generateGoogleMerchantXml(products: Product[]): string {
  const itemsXml = products.map(p => `
    <item>
      <g:id>${p.id}</g:id>
      <g:title><![CDATA[${p.title}]]></g:title>
      <g:description><![CDATA[${p.description}]]></g:description>
      <g:link>https://aanalgurukul.com/product/${p.slug}/</g:link>
      <g:image_link>${p.images[0] || ''}</g:image_link>
      <g:availability>${p.in_stock ? 'in stock' : 'out of stock'}</g:availability>
      <g:price>${p.price}.00 INR</g:price>
      <g:brand>Aanal Gurukul</g:brand>
      <g:condition>new</g:condition>
      <g:product_type><![CDATA[Apparel & Accessories > Clothing > Traditional & Ethnic Wear > ${p.categories.join(' > ')}]]></g:product_type>
      <g:google_product_category>1604</g:google_product_category>
      <g:mpn>${p.sku}</g:mpn>
      <g:gender>female</g:gender>
      <g:age_group>adult</g:age_group>
      <g:color><![CDATA[${p.colors.join('/')}]]></g:color>
      <g:size>Free Size / Custom</g:size>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>Aanal Gurukul - Luxury Ethnic Designer Wear Feed</title>
    <link>https://aanalgurukul.com</link>
    <description>Authentic Indian Bridal Lehengas, Chaniya Choli, Indo-Western Gowns &amp; Suits</description>
    ${itemsXml}
  </channel>
</rss>`;
}
