import { Product } from '../types/ecommerce';

export const PRODUCTS: Product[] = [
  {
    id: "aanal-001",
    slug: "hot-pink-bandhej-draped-gown",
    title: "Hot Pink Bandhej Draped Gown",
    price: 6490,
    regular_price: 8990,
    currency: "INR",
    in_stock: true,
    stock_count: 5,
    sku: "AG-GOW-001",
    description: "Make a show-stopping entrance with this Hot Pink Bandhej Draped Gown. Featuring artisanal Rajasthani Bandhej tie-dye patterns on pure georgette, an impeccably structured corset bodice adorned with micro-pearls and hand zardozi work, and an asymmetrical flowing drape silhouette.",
    short_description: "Pure georgette draped gown with traditional Bandhej prints and hand-embroidered corset bodice.",
    categories: ["Gowns", "Indowestern", "Dresses"],
    occasions: ["Sangeet", "Cocktail", "Reception", "Wedding"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-16-at-12.47.38.jpeg"
    ],
    colors: ["Hot Pink", "Fuschia"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 4.9,
    reviews_count: 24,
    specifications: {
      fabric: "Pure Georgette with Butter Crepe Lining",
      work: "Hand Bandhej Tie-Dye, Cutdana, Pearls & Zari",
      occasion: "Sangeet, Reception, Cocktail Party",
      care: "Strictly Dry Clean Only",
      included: "Draped Gown with built-in Corset & Can-can padding",
      lining: "Attached breathable crepe lining"
    }
  },
  {
    id: "aanal-002",
    slug: "amazonas-green-draped-gown",
    title: "Amazonas Green Draped Gown",
    price: 6890,
    regular_price: 9490,
    currency: "INR",
    in_stock: true,
    stock_count: 4,
    sku: "AG-GOW-002",
    description: "An emerald-green masterpiece crafted in imported satin silk. Features a pleated side cowl, regal asymmetric shoulder drape, and embellished crystal belt accentuating the natural waistline.",
    short_description: "Rich emerald green draped gown in fluid satin silk with crystal waist embellishments.",
    categories: ["Gowns", "Indowestern", "Dresses"],
    occasions: ["Reception", "Cocktail", "Sangeet"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-16-at-12.47.43-2.jpeg"
    ],
    colors: ["Amazonas Green", "Emerald"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.8,
    reviews_count: 18,
    specifications: {
      fabric: "Fluid Satin Silk & Crepe",
      work: "Swarovski Crystals, Hand Ruching & Draping",
      occasion: "Engagement, Reception, Red Carpet",
      care: "Dry Clean Only",
      included: "One-piece Draped Gown with padded cups",
      lining: "Full satin lining"
    }
  },
  {
    id: "aanal-003",
    slug: "vivid-red-peplum-sharara",
    title: "Vivid Red Peplum Sharara Set",
    price: 7490,
    regular_price: 10290,
    currency: "INR",
    in_stock: true,
    stock_count: 8,
    sku: "AG-SHA-003",
    description: "A breathtaking bridal & festive ensemble featuring a vivid scarlet red peplum kurti layered with intricate gota patti, kundan, and resham thread work, paired with a dramatic layered flared sharara and scalloped organza dupatta.",
    short_description: "Scarlet red peplum tunic paired with heavy flare tier sharara and scalloped dupatta.",
    categories: ["Sharara", "Wedding", "Festive"],
    occasions: ["Wedding", "Mehendi", "Sangeet", "Festive"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-2.19.42-PM.jpeg"
    ],
    colors: ["Vivid Red", "Crimson"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 5.0,
    reviews_count: 31,
    specifications: {
      fabric: "Pure Chinon Silk Kurti & Sharara with Silk Organza Dupatta",
      work: "Artisanal Gota Patti, Kundan, Dori & Resham Embroidery",
      occasion: "Bridal Trousseau, Wedding, Festive Puja",
      care: "Dry Clean Only",
      included: "Embroidered Peplum Top, Flared Sharara Pants & Scalloped Dupatta"
    }
  },
  {
    id: "aanal-004",
    slug: "phoenix-orange-gaji-co-ord-set",
    title: "Phoenix Orange Gaji Silk Co-ord Set",
    price: 5290,
    regular_price: 7490,
    currency: "INR",
    in_stock: true,
    stock_count: 6,
    sku: "AG-CRD-004",
    description: "Handwoven in the royal textile heritage of Kutch, this Phoenix Orange pure Gaji Silk co-ord set features traditional Lagdi patta borders, modern asymmetric tunic cut, and tailored cigarette trousers.",
    short_description: "Pure Gaji silk designer coordinate set in vibrant orange with traditional golden zari borders.",
    categories: ["Co-ords", "Indowestern", "Palazzo"],
    occasions: ["Festive", "Puja", "Mehendi", "Family Gatherings"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.25.04.jpeg"
    ],
    colors: ["Phoenix Orange", "Tangerine"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 4.7,
    reviews_count: 15,
    specifications: {
      fabric: "100% Pure Gaji Silk with Natural Sheen",
      work: "Handloom Lagdi Patta Zari & Hand Embroidered Collar",
      occasion: "Diwali, Navratri, Festive Celebrations, Haldi",
      care: "Dry Clean Only",
      included: "Designer Kurti Top & Coordinating Tailored Pants"
    }
  },
  {
    id: "aanal-005",
    slug: "medallion-yellow-kalamkari-co-ord-set",
    title: "Medallion Yellow Kalamkari Co-ord Set",
    price: 4990,
    regular_price: 6990,
    currency: "INR",
    in_stock: true,
    stock_count: 7,
    sku: "AG-CRD-005",
    description: "Sun-kissed Medallion Yellow ensemble featuring handblock printed mythological and floral Kalamkari motifs on organic silk-cotton, styled with contemporary high-low jacket kurti and relaxed wide-leg culottes.",
    short_description: "Kalamkari printed organic silk-cotton co-ord set with handcrafted metallic buttons.",
    categories: ["Co-ords", "Indowestern", "Palazzo"],
    occasions: ["Haldi", "Day Wedding", "Festive", "Puja"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.25.03-1.jpeg"
    ],
    colors: ["Medallion Yellow", "Mustard"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.8,
    reviews_count: 14,
    specifications: {
      fabric: "Organic Silk Cotton & Chanderi",
      work: "Authentic Hand-block Kalamkari & Mirror detailing",
      occasion: "Haldi Ceremony, Day Mehendi, Festive Luncheon",
      care: "Gentle Dry Clean",
      included: "High-low Jacket Kurti & Wide-leg Pants"
    }
  },
  {
    id: "aanal-006",
    slug: "toscana-green-yellow-croptop",
    title: "Toscana Green & Yellow Crop Top Lehenga Set",
    price: 8990,
    regular_price: 12490,
    currency: "INR",
    in_stock: true,
    stock_count: 3,
    sku: "AG-CRX-006",
    description: "An ethereal dual-tone festive lehenga featuring a Toscana green heavily embellished crop top with mirror and thread embroidery, paired with a vibrant sunshine yellow flared lehenga skirt with 6-meter flair.",
    short_description: "Designer green crop top paired with bright yellow heavy flare lehenga and net dupatta.",
    categories: ["Lehenga", "Chaniya Choli", "Croptop"],
    occasions: ["Navratri", "Sangeet", "Mehendi", "Wedding"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.10.05.jpeg"
    ],
    colors: ["Toscana Green", "Sunshine Yellow"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 4.9,
    reviews_count: 27,
    specifications: {
      fabric: "Raw Silk Blouse & Pure Georgette Lehenga Skirt",
      work: "Real Mirror Work, Resham Thread & Foil Zari",
      occasion: "Navratri Garba, Sangeet Night, Mehendi",
      care: "Dry Clean Only",
      included: "Embroidered Blouse, 6-meter Flair Lehenga & Matching Dupatta"
    }
  },
  {
    id: "aanal-007",
    slug: "peacock-blue-shrug-croptop",
    title: "Peacock Blue Shrug Crop Top & Palazzo",
    price: 6290,
    regular_price: 8790,
    currency: "INR",
    in_stock: true,
    stock_count: 5,
    sku: "AG-SHR-007",
    description: "Make a royal statement in this Peacock Blue 3-piece indo-western set. Features a sweetheart neckline crop top, flared palazzo pants, and a floor-length sheer organza shrug embroidered with gold foliage.",
    short_description: "3-piece peacock blue outfit with hand-embroidered crop top, palazzo, and sheer jacket shrug.",
    categories: ["Palazzo & Shrug", "Indowestern", "Croptop"],
    occasions: ["Sangeet", "Reception", "Party", "Cocktail"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.10.01.jpeg"
    ],
    colors: ["Peacock Blue", "Royal Navy"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.8,
    reviews_count: 19,
    specifications: {
      fabric: "Pure Chinon Silk & Sheer Organza",
      work: "Cutdana, Zardozi, and Metallic Sequins",
      occasion: "Sangeet, Reception, Cocktail Party",
      care: "Dry Clean Only",
      included: "Crop Top, Flared Palazzo & Floor-length Shrug Jacket"
    }
  },
  {
    id: "aanal-008",
    slug: "navy-blue-shrug-with-palazzo",
    title: "Navy Blue Heavy Shrug with Palazzo Set",
    price: 6790,
    regular_price: 9490,
    currency: "INR",
    in_stock: true,
    stock_count: 6,
    sku: "AG-SHR-008",
    description: "Midnight glamour at its finest. Rich navy blue georgette 3-piece fusion wear adorned with antique copper and silver threadwork, paired with wide-leg palazzo pants and flowy caped shrug.",
    short_description: "Royal navy blue 3-piece palazzo set with long cape shrug and zardozi detailing.",
    categories: ["Palazzo & Shrug", "Indowestern", "Palazzo"],
    occasions: ["Reception", "Cocktail", "Party", "Sangeet"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.09.58.jpeg"
    ],
    colors: ["Navy Blue", "Midnight"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: false,
    rating: 4.6,
    reviews_count: 11,
    specifications: {
      fabric: "Georgette with Shantoon lining",
      work: "Antique Zari & Micro Sequins",
      occasion: "Evening Receptions & Sangeet",
      care: "Dry Clean Only",
      included: "Crop Top, Palazzo Pants, Long Shrug"
    }
  },
  {
    id: "aanal-009",
    slug: "guacamole-green-multi-colour-floral-gown",
    title: "Guacamole Green Multi-Colour Floral Gown",
    price: 5890,
    regular_price: 8290,
    currency: "INR",
    in_stock: true,
    stock_count: 4,
    sku: "AG-GOW-009",
    description: "Inspired by blooming Mughal gardens, this pastel Guacamole green floor-length gown features vibrant digital botanical prints highlighted with delicate hand-stitched beads and scalloped sleeves.",
    short_description: "Pastel green floral gown with Mughal botanical prints and hand-embellished yoke.",
    categories: ["Gowns", "Dresses", "Indowestern"],
    occasions: ["Mehendi", "Day Wedding", "Garden Party", "Festive"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-2.19.43-PM-2.jpeg"
    ],
    colors: ["Guacamole Green", "Sage Green"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 4.8,
    reviews_count: 22,
    specifications: {
      fabric: "Pure Organza Silk with Butter Crepe Lining",
      work: "Digital Floral Prints, Pearls & Threadwork",
      occasion: "Mehendi Ceremony, Haldi, Festive Luncheon",
      care: "Dry Clean Only",
      included: "One-piece Anarkali Gown with Attached Belt"
    }
  },
  {
    id: "aanal-010",
    slug: "pista-corset-shrug-with-palazzo",
    title: "Pista Green Corset Shrug with Palazzo Set",
    price: 6590,
    regular_price: 9190,
    currency: "INR",
    in_stock: true,
    stock_count: 5,
    sku: "AG-SHR-010",
    description: "Subtle elegance in refreshing pistachio green. Features a structured sweetheart corset top, pleated sharara-palazzo pants, and a full-sleeved embroidered sheer shrug with scalloped zardozi borders.",
    short_description: "Pistachio green corset top, pleated palazzo, and sheer shrug with delicate thread embroidery.",
    categories: ["Palazzo & Shrug", "Indowestern", "Palazzo"],
    occasions: ["Sangeet", "Mehendi", "Reception", "Party"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.09.55.jpeg"
    ],
    colors: ["Pista Green", "Mint"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.9,
    reviews_count: 16,
    specifications: {
      fabric: "Chinon Silk & Fine Organza",
      work: "Tonal Thread Embroidery, Cutdana & Pearls",
      occasion: "Engagement, Sangeet, Mehendi",
      care: "Dry Clean Only",
      included: "Corset Bustier, Flared Palazzo & Long Shrug Jacket"
    }
  },
  {
    id: "aanal-011",
    slug: "lemon-yellow-lakhnavi-nayra-cut",
    title: "Lemon Yellow Lakhnavi Nayra Cut Suit",
    price: 4390,
    regular_price: 6190,
    currency: "INR",
    in_stock: true,
    stock_count: 9,
    sku: "AG-NAY-011",
    description: "Authentic Lucknowi Chikankari craftsmanship meets modern Nayra-cut silhouette in luminous lemon yellow. Detailed with intricate shadow-work embroidery, mukaish highlights, side-slit gather detailing, and matching cigarette pants.",
    short_description: "Lemon yellow Lakhnavi Chikankari Nayra cut suit with matching trousers and chiffon dupatta.",
    categories: ["Nayra Cut", "Palazzo", "Plus Size"],
    occasions: ["Haldi", "Festive", "Puja", "Family Functions"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.09.55-2.jpeg"
    ],
    colors: ["Lemon Yellow", "Pastel Yellow"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 5.0,
    reviews_count: 42,
    specifications: {
      fabric: "Pure Georgette with Modal Satin Lining",
      work: "Hand Lakhnavi Chikankari & Mukaish Sequins",
      occasion: "Haldi Ceremony, Raksha Bandhan, Festive Days",
      care: "Gentle Handwash or Dry Clean",
      included: "Nayra Cut Kurti, Cotton Satin Pant, Chiffon Dupatta"
    }
  },
  {
    id: "aanal-012",
    slug: "wine-purple-croptop-with-shrug",
    title: "Wine Purple Crop Top with Shrug & Skirt",
    price: 7990,
    regular_price: 11190,
    currency: "INR",
    in_stock: true,
    stock_count: 4,
    sku: "AG-CRX-012",
    description: "Regal wine purple 3-piece designer outfit. Heavily hand-embroidered crop top with zardozi and nakshi work, paired with a voluminous circular skirt and a statement sheer shrug with dramatic bell sleeves.",
    short_description: "Rich wine purple crop top, flared skirt, and embroidered statement shrug.",
    categories: ["Lehenga", "Chaniya Choli", "Croptop", "Indowestern"],
    occasions: ["Reception", "Sangeet", "Cocktail", "Wedding"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-19-at-2.19.51-PM-2.jpeg"
    ],
    colors: ["Wine Purple", "Plum"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 4.9,
    reviews_count: 28,
    specifications: {
      fabric: "Raw Silk Top & Georgette Skirt with Organza Jacket",
      work: "Hand Zardozi, Nakshi, Beads & Sequins",
      occasion: "Sangeet, Reception, Cocktail Night",
      care: "Strictly Dry Clean Only",
      included: "Padded Crop Top, Flared Skirt & Bell-Sleeve Shrug"
    }
  },
  {
    id: "aanal-013",
    slug: "apple-red-croptop-with-lehenga",
    title: "Apple Red Designer Crop Top Lehenga",
    price: 9490,
    regular_price: 13990,
    currency: "INR",
    in_stock: true,
    stock_count: 3,
    sku: "AG-LEH-013",
    description: "Classic bridal red reimagined for the contemporary bride. Features heavy heritage dori and mirror work across the choli, a royal pleated kalidar lehenga skirt with can-can inner lining, and double borders.",
    short_description: "Apple red bridal crop top lehenga with heritage dori, mirror work, and full flare.",
    categories: ["Lehenga", "Chaniya Choli", "Croptop", "Wedding"],
    occasions: ["Wedding", "Bridal", "Reception", "Sangeet"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-19-at-2.39.25-PM-1.jpeg"
    ],
    colors: ["Apple Red", "Bridal Red"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 5.0,
    reviews_count: 38,
    specifications: {
      fabric: "Pure Raw Silk Lehenga & Blouse, Soft Net Dupatta",
      work: "Intricate Heritage Dori, Real Mirror Work & Zari",
      occasion: "Bridal Wedding, Sangeet, Karwa Chauth",
      care: "Dry Clean Only",
      included: "Embroidered Blouse, Heavy Can-can Lehenga Skirt & Dupatta"
    }
  },
  {
    id: "aanal-014",
    slug: "shibori-lemon-yellow-nayra-dress",
    title: "Shibori Lemon Yellow Nayra Cut Dress",
    price: 4690,
    regular_price: 6590,
    currency: "INR",
    in_stock: true,
    stock_count: 7,
    sku: "AG-NAY-014",
    description: "Hand-dyed Shibori tie-dye patterns in luminous lemon yellow and white on pure georgette. Styled in an elegant high side-slit Nayra cut silhouette with mirror work belt and matching pants.",
    short_description: "Handcrafted Shibori print Nayra dress with mirror work yoke and matching pants.",
    categories: ["Nayra Cut", "Dresses", "Palazzo"],
    occasions: ["Haldi", "Mehendi", "Festive", "Day Functions"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-19-at-2.42.45-PM-1.jpeg"
    ],
    colors: ["Lemon Yellow", "White"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.7,
    reviews_count: 13,
    specifications: {
      fabric: "Pure Georgette with Shantoon lining",
      work: "Hand Shibori Tie-Dye & Mirror embroidery",
      occasion: "Haldi, Day Puja, Festive Celebrations",
      care: "Dry Clean Only",
      included: "Nayra Tunic Dress, Straight Pant & Dupatta"
    }
  },
  {
    id: "aanal-015",
    slug: "hot-pink-purple-nayra-dress",
    title: "Hot Pink & Purple Ombre Nayra Cut Dress",
    price: 4890,
    regular_price: 6890,
    currency: "INR",
    in_stock: true,
    stock_count: 6,
    sku: "AG-NAY-015",
    description: "Vibrant dual ombre sunset shades transition from hot pink to royal purple. Embellished with delicate resham thread embroidery and cutdana work along the neckline and side gathers.",
    short_description: "Dual-tone ombre Nayra cut suit set in bright pink and purple with designer dupatta.",
    categories: ["Nayra Cut", "Dresses", "Plus Size"],
    occasions: ["Festive", "Sangeet", "Mehendi", "Party"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-19-at-2.42.45-PM.jpeg"
    ],
    colors: ["Hot Pink", "Purple"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "Custom Made"],
    is_bestseller: false,
    is_new: false,
    rating: 4.8,
    reviews_count: 20,
    specifications: {
      fabric: "Pure Georgette Ombre",
      work: "Resham Embroidery, Cutdana & Sequins",
      occasion: "Festive Puja, Mehendi, Family Dinners",
      care: "Dry Clean Only",
      included: "Ombre Nayra Kurti, Silk Pants & Chiffon Dupatta"
    }
  },
  {
    id: "aanal-016",
    slug: "wine-dori-work-lehenga-choli",
    title: "Wine Handcrafted Dori Work Lehenga Choli",
    price: 11990,
    regular_price: 16990,
    currency: "INR",
    in_stock: true,
    stock_count: 2,
    sku: "AG-LEH-016",
    description: "A showpiece of Gujarati couture artistry. Rich wine base woven with golden dori work, matte sequins, and intricate floral jali designs. Comes with a designer sweetheart blouse and heavy scalloped dupatta.",
    short_description: "Luxurious deep wine bridal lehenga choli with rich dori craftsmanship and 7-meter flair.",
    categories: ["Lehenga", "Chaniya Choli", "Wedding"],
    occasions: ["Wedding", "Reception", "Bridal", "Sangeet"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2025/03/Photoroom-20240826_140743.png"
    ],
    colors: ["Wine", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 5.0,
    reviews_count: 36,
    specifications: {
      fabric: "Pure Silk Velvet & Heavy Georgette with Double Can-can",
      work: "Intricate Dori Work, Kundan & Sequins",
      occasion: "Bridal Wedding, Royal Reception",
      care: "Specialized Bridal Dry Clean Only",
      included: "Embroidered Velvet Blouse, 7m Flared Lehenga & Heavy Border Dupatta"
    }
  },
  {
    id: "aanal-017",
    slug: "onion-pink-kinkhab-palazzo-dress",
    title: "Onion Pink Kinkhab Brocade Palazzo Dress",
    price: 5990,
    regular_price: 8490,
    currency: "INR",
    in_stock: true,
    stock_count: 5,
    sku: "AG-PLZ-017",
    description: "Woven with heritage Ahmedabad Kinkhab brocade techniques, this pastel onion pink palazzo suit combines royal vintage luster with clean modern lines and delicate pearl fringes.",
    short_description: "Pastel onion pink Kinkhab brocade kurti dress with flared palazzo and pearl accents.",
    categories: ["Co-ords", "Palazzo", "Indowestern"],
    occasions: ["Sangeet", "Festive", "Reception", "Family Functions"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-29-at-1.43.48-PM.jpeg"
    ],
    colors: ["Onion Pink", "Rose Gold"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.9,
    reviews_count: 17,
    specifications: {
      fabric: "Pure Kinkhab Silk Brocade & Crepe",
      work: "Woven Golden Zari & Pearl Tassels",
      occasion: "Sangeet, Festive Celebrations, Engagement",
      care: "Dry Clean Only",
      included: "Brocade Long Tunic Dress & Flared Palazzo Pants"
    }
  },
  {
    id: "aanal-018",
    slug: "pink-handwork-palazzo-jacket",
    title: "Rose Pink Handwork Palazzo Jacket Suit",
    price: 6990,
    regular_price: 9890,
    currency: "INR",
    in_stock: true,
    stock_count: 4,
    sku: "AG-SHR-018",
    description: "Rose pink 3-piece luxury Indo-western outfit. Features a floor-skimming sheer jacket adorned with hand-embroidered cutdana and gota flowers, over a tailored bustier and wide palazzo pants.",
    short_description: "Rose pink handwork jacket with tailored bustier and flowy palazzo trousers.",
    categories: ["Palazzo & Shrug", "Indowestern", "Palazzo"],
    occasions: ["Sangeet", "Reception", "Cocktail", "Party"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2026/07/Picsart_26-07-03_15-02-21-398-scaled.png"
    ],
    colors: ["Rose Pink", "Blush"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.8,
    reviews_count: 21,
    specifications: {
      fabric: "Fine Georgette & Organza",
      work: "Hand Cutdana, Zardozi & Gota Patti",
      occasion: "Sangeet, Cocktail, Reception",
      care: "Dry Clean Only",
      included: "Bustier Top, Flared Palazzo & Long Floor Jacket"
    }
  },
  {
    id: "aanal-019",
    slug: "rani-handwork-chaniya-choli",
    title: "Rani Pink Handwork Chaniya Choli",
    price: 10490,
    regular_price: 14990,
    currency: "INR",
    in_stock: true,
    stock_count: 3,
    sku: "AG-CHN-019",
    description: "The crown jewel of traditional Gujarati festive couture. Vivid Rani pink adorned with real mirror work, Abhala craft, copper gota borders, and heavy tassels. Perfect for Navratri and destination weddings.",
    short_description: "Authentic Gujarati Rani pink handwork chaniya choli with real mirrors and 8m flair.",
    categories: ["Lehenga", "Chaniya Choli", "Wedding"],
    occasions: ["Navratri", "Wedding", "Sangeet", "Festive"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2026/07/Photoroom-20250408_191909.png"
    ],
    colors: ["Rani Pink", "Magenta"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 5.0,
    reviews_count: 48,
    specifications: {
      fabric: "Pure Gaji Silk & Cotton Slub with Canvas Flair",
      work: "Real Mirror Work, Traditional Abhala, Kutch Embroidery",
      occasion: "Navratri Garba, Sangeet, Mehendi, Festive Wedding",
      care: "Dry Clean Only",
      included: "Embroidered Backless Choli, 8-meter Flair Chaniya & Bandhani Dupatta"
    }
  },
  {
    id: "aanal-020",
    slug: "lavender-pastel-lehenga-choli",
    title: "Lavender Pastel Floral Lehenga Choli",
    price: 9290,
    regular_price: 13290,
    currency: "INR",
    in_stock: true,
    stock_count: 4,
    sku: "AG-LEH-020",
    description: "Modern romanticism in soothing pastel lavender. Crafted in lightweight organza silk with tonal lilac resham embroidery, pearl beads, and a sheer feather-light dupatta.",
    short_description: "Dreamy lavender pastel lehenga choli with soft floral embroidery and pearl accents.",
    categories: ["Lehenga", "Chaniya Choli", "Croptop"],
    occasions: ["Day Wedding", "Sangeet", "Reception", "Engagement"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2026/07/IMG-20240424-WA0066.jpg"
    ],
    colors: ["Lavender", "Lilac"],
    sizes: ["S", "M", "L", "XL", "XXL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 4.9,
    reviews_count: 23,
    specifications: {
      fabric: "Pure Silk Organza with Cotton Shantoon Lining",
      work: "Tonal Lilac Resham, Pearls & Mukaish",
      occasion: "Day Wedding, Sangeet, Engagement",
      care: "Dry Clean Only",
      included: "Blouse, Voluminous Flared Skirt & Sheer Dupatta"
    }
  },
  {
    id: "aanal-021",
    slug: "mint-pista-pure-salsa-silk-palazzo-suit",
    title: "Mint Pista Pure Salsa Silk Handcrafted Palazzo Suit Set",
    price: 5490,
    regular_price: 7890,
    currency: "INR",
    in_stock: true,
    stock_count: 6,
    sku: "AG-PLZ-021",
    description: "Luxurious salsa silk in refreshing mint pista. Detailed with handcrafted zardozi neck yoke, scalloped side vents, and wide-leg palazzo pants with golden hem borders.",
    short_description: "Pure salsa silk handcrafted palazzo suit in soothing mint green with zardozi embroidery.",
    categories: ["Sharara", "Palazzo", "Plus Size"],
    occasions: ["Festive", "Puja", "Family Gathering", "Mehendi"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2026/07/Picsart_26-07-07_14-39-31-106-scaled.png"
    ],
    colors: ["Mint Green", "Pistachio"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "Custom Made"],
    is_bestseller: false,
    is_new: true,
    rating: 4.9,
    reviews_count: 19,
    specifications: {
      fabric: "Pure Salsa Silk with Soft Lining",
      work: "Handcrafted Zardozi, Cutdana & Resham Work",
      occasion: "Festive Puja, Mehendi, Family Dinners",
      care: "Dry Clean Only",
      included: "Straight Silk Kurti, Flared Palazzo & Pure Organza Dupatta"
    }
  },
  {
    id: "aanal-022",
    slug: "royal-blue-pure-chinon-sharara-palazzo-suit-set",
    title: "Royal Blue Pure Chinon Sharara-Palazzo Suit Set",
    price: 5800,
    regular_price: 8200,
    currency: "INR",
    in_stock: true,
    stock_count: 5,
    sku: "AG-SHA-022",
    description: "Deep regal royal blue pure chinon silk 3-piece suit set. Features a heavily embroidered neckline with silver zari and mirror work, coupled with convertible sharara-palazzo pants and a scalloped dupatta.",
    short_description: "Royal blue pure chinon silk suit set with intricate mirror work and convertible sharara-palazzo.",
    categories: ["Sharara", "Palazzo", "Plus Size"],
    occasions: ["Sangeet", "Reception", "Festive", "Wedding"],
    images: [
      "https://aanalgurukul.com/wp-content/uploads/2026/07/Picsart_26-07-07_23-50-08-307.jpg-scaled.jpeg"
    ],
    colors: ["Royal Blue", "Cobalt"],
    sizes: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "Custom Made"],
    is_bestseller: true,
    is_new: false,
    rating: 5.0,
    reviews_count: 34,
    specifications: {
      fabric: "100% Pure Chinon Silk",
      work: "Silver Zari, Real Mirrors & Cutdana",
      occasion: "Sangeet, Reception, Festive Celebrations",
      care: "Dry Clean Only",
      included: "Chinon Kurti, Tiered Sharara-Palazzo Pants & Scalloped Dupatta"
    }
  }
];

// Helper to get EXACT dynamic product count for any category
export function getCategoryCount(products: Product[], categoryId: string): number {
  if (categoryId === 'all') return products.length;
  return products.filter((p) =>
    p.categories.some((c) => c.toLowerCase() === categoryId.toLowerCase())
  ).length;
}

export const CATEGORIES = [
  { id: "all", name: "All Collections", count: 22, image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-16-at-12.47.38.jpeg" },
  { id: "Lehenga", name: "Lehenga & Chaniya Choli", count: 6, image: "https://aanalgurukul.com/wp-content/uploads/2026/07/Photoroom-20250408_191909.png" },
  { id: "Gowns", name: "Designer Gowns", count: 3, image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-16-at-12.47.43-2.jpeg" },
  { id: "Sharara", name: "Sharara & Palazzo Suits", count: 3, image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-2.19.42-PM.jpeg" },
  { id: "Palazzo & Shrug", name: "Shrug & Jacket Sets", count: 4, image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.10.01.jpeg" },
  { id: "Nayra Cut", name: "Nayra Cut Suits", count: 3, image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.09.55-2.jpeg" },
  { id: "Co-ords", name: "Indo-Western Co-ords", count: 3, image: "https://aanalgurukul.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-19-at-15.25.04.jpeg" },
  { id: "Plus Size", name: "Plus Size Couture (3XL-5XL)", count: 4, image: "https://aanalgurukul.com/wp-content/uploads/2026/07/Picsart_26-07-07_14-39-31-106-scaled.png" }
];

export const OCCASIONS = [
  "Wedding",
  "Sangeet",
  "Mehendi",
  "Haldi",
  "Reception",
  "Cocktail",
  "Navratri",
  "Festive"
];
