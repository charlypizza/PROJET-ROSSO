import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'tj9zovgw', 
  dataset: 'production',
  token: 'skpAIU5A9k64ZQb4PWKvw2BjvwhZ24ohrBZclpL08TybXZIOMWS0WKMgsVWLrJb7qIeEh1Uz9DRJjWevTxKBcnLoIULfjjUVoyl0hyvLkVG2bTVzRtrbWw3dAa7K3g6JkSANE8PF7xISxpvc5OzugWuOlplYcIYqPpcJLd5GRjxUKATUr1dD', // Get this from sanity.io/manage
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function seedData() {
  console.log('🌱 Starting to seed data...');

  try {
    // 1. Seed Site Settings
    console.log('📝 Creating site settings...');
    const siteSettings = await client.create({
      _type: 'siteSettings',
      siteName: 'ROSSO Cafe Marseille',
      instagramUrl: 'https://www.instagram.com/rossocafemarseille_/',
      instagramHandle: '@rossocafemarseille_',
      footerDescription: 'Coffee shop tendance au coeur de Marseille. Cafes de specialite et sandwichs maison.',
      schedule: {
        weekdays: 'Lun - Sam : 8h - 20h',
        sunday: 'Dimanche : Ferme',
      },
      address: '29 Rue Pavillon',
      mapUrl: 'https://maps.app.goo.gl/2GWWxjoKGWEA6sx59',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.9673772893487!2d5.373771776669766!3d43.29548927913038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0cc9d1d0a9d%3A0x5c4b8b8b8b8b8b8b!2s29%20Rue%20Pavillon%2C%2013001%20Marseille!5e0!3m2!1sfr!2sfr!4v1703764800000!5m2!1sfr!2sfr',
      logoWhiteUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-logo-blanc-footer-site-web.png',
      logoRedUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-logo-rouge-barre-de-navigation.png',
    });
    console.log('✅ Site settings created');

    // 2. Seed Hero Panels
    console.log('🖼️  Creating hero panels...');
    const heroPanels = [
      'https://charlypizza.github.io/assets/rosso-cafe-canette-chocolat-chaud-boisson-gourmande.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-canette-blue-latte-vanille-boisson-signature.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-canette-golden-latte-vanille-curcuma.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-canette-ube-latte-vanille-boisson-violette.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-canette-matcha-latte-vanille-the-vert.webp',
    ];

    for (const url of heroPanels) {
      await client.create({
        _type: 'heroPanel',
        imageUrl: url,
        alt: 'Rosso Cafe drink',
      });
    }
    console.log('✅ Hero panels created');

    // 3. Seed About Section
    console.log('📄 Creating about section...');
    await client.create({
      _type: 'aboutSection',
      topLabel: '29 Rue Pavillon',
      title: 'Le Concept',
      paragraphs: [
        'ROSSO c\'est un lieu chaleureux de partage et de gourmandise.',
        'Entre déco rouge et clins d\'œil à nos chambres d\'ado, sens-toi comme à la maison.',
        'Pâtisseries, boissons de notre barista et sandwichs généreux sont disponibles toute la journée.',
        'Au cœur de Marseille, Rosso est ton nouveau QG solaire, mêlant café de spécialité et détente absolue.',
        'Bosse, papote, prends du bon temps… on s\'occupe du reste.',
      ],
      imageUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-interieur-coffee-shop-tendance.webp',
      schedule: {
        weekdays: 'Lun - Sam : 8h - 20h',
        sunday: 'Dimanche : Ferme',
      },
      contactInstagram: '@rossocafemarseille_',
      contactInstagramUrl: 'https://www.instagram.com/rossocafemarseille_',
      mapUrl: 'https://maps.app.goo.gl/2GWWxjoKGWEA6sx59',
      mapButtonText: 'Nous trouver',
    });
    console.log('✅ About section created');

    // 4. Seed Menu Items for Boissons
    console.log('☕ Creating drink menu items...');
    
    // Coffee Bar Items
    const coffeeItems = [
      { name: 'EXPRESSO' },
      { name: 'DOUBLE' },
      { name: 'MACCHIATO' },
      { name: 'CAPPUCCINO' },
      { name: 'FLAT WHITE' },
      { name: 'LATTE', variant: 'VANILLE, CINNAMON' },
    ];

    const coffeeItemRefs = [];
    for (const item of coffeeItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.name,
        title: item.name,
        variant: item.variant,
      });
      coffeeItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // Matcha Bar Items
    const matchaItems = [
      { name: 'ORIGINAL MATCHA' },
      { name: 'MATCHA LATTE' },
      { name: 'MATCHA LATTE VANILLE' },
      { name: 'MATCHA COCONUT WATER' },
      { name: 'DIRTY MATCHA LATTE' },
    ];

    const matchaItemRefs = [];
    for (const item of matchaItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.name,
        title: item.name,
      });
      matchaItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // Sesame Bar Items
    const sesameItems = [
      { name: 'BLACK LATTE' },
      { name: 'DIRTY BLACK LATTE' },
    ];

    const sesameItemRefs = [];
    for (const item of sesameItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.name,
        title: item.name,
      });
      sesameItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // Blue Bar Items
    const blueItems = [
      { name: 'BLUE LATTE VANILLE' },
      { name: 'BLUE COCONUT WATER' },
    ];

    const blueItemRefs = [];
    for (const item of blueItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.name,
        title: item.name,
      });
      blueItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // Chocolat Bar Items
    const chocolatItems = [
      { name: 'HOT CHOCOLAT' },
      { name: 'HOT BOUNTY', variant: 'WITH COCO MILK' },
      { name: 'DIRTY HOT CHOCOLAT' },
    ];

    const chocolatItemRefs = [];
    for (const item of chocolatItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.name,
        title: item.name,
        variant: item.variant,
      });
      chocolatItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // Ube Bar Items
    const ubeItems = [
      { name: 'UBE LATTE' },
      { name: 'UBE LATTE VANILLE' },
      { name: 'DIRTY UBE LATTE' },
      { name: 'UBE COCONUT WATER' },
    ];

    const ubeItemRefs = [];
    for (const item of ubeItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.name,
        title: item.name,
      });
      ubeItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // Golden Bar Items
    const goldenItems = [
      { name: 'GOLDEN LATTE' },
      { name: 'GOLDEN AMERICANO' },
      { name: 'GOLDEN LATTE VANILLE' },
      { name: 'DIRTY GOLDEN LATTE' },
    ];

    const goldenItemRefs = [];
    for (const item of goldenItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.name,
        title: item.name,
      });
      goldenItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // 5. Create Drink Subcategories
    console.log('📋 Creating drink subcategories...');
    
    const coffeeBar = await client.create({
      _type: 'menuSubcategory',
      name: 'COFFEE BAR',
      barTitle: 'COFFEE BAR',
      items: coffeeItemRefs,
    });

    const matchaBar = await client.create({
      _type: 'menuSubcategory',
      name: 'MATCHA BAR',
      barTitle: 'MATCHA BAR',
      items: matchaItemRefs,
    });

    const sesameBar = await client.create({
      _type: 'menuSubcategory',
      name: 'SESAME BAR',
      barTitle: 'SESAME BAR',
      items: sesameItemRefs,
    });

    const blueBar = await client.create({
      _type: 'menuSubcategory',
      name: 'BLUE BAR',
      barTitle: 'BLUE BAR',
      subtitle: 'UNE BOISSON A BASE DE SPIRULINE',
      items: blueItemRefs,
    });

    const chocolatBar = await client.create({
      _type: 'menuSubcategory',
      name: 'CHOCOLAT BAR',
      barTitle: 'CHOCOLAT BAR',
      items: chocolatItemRefs,
    });

    const ubeBar = await client.create({
      _type: 'menuSubcategory',
      name: 'UBE BAR',
      barTitle: 'UBE BAR',
      subtitle: 'BOISSON SPÉCIFIQUE A BASE D\'IGNAME VIOLETTE.',
      items: ubeItemRefs,
    });

    const goldenBar = await client.create({
      _type: 'menuSubcategory',
      name: 'GOLDEN BAR',
      barTitle: 'GOLDEN BAR',
      subtitle: 'BOISSON AU CURCUMA QUI POSSÈDE MILLE VERTUS',
      items: goldenItemRefs,
    });

    console.log('✅ Drink subcategories created');

    // 6. Seed Sandwich Items
    console.log('🥪 Creating sandwich menu items...');
    
    // Sando Bar Items
    const sandoItems = [
      {
        title: 'HALLOUMI (VG)',
        description: ['HALLOUMI, TOMATES SÉCHÉES, SALADE,', 'MENTHE, OIGNON ROUGE, CONCOMBRE'],
      },
      {
        title: 'SPICY TUNA',
        description: ['FARCI DE THON À LA MENTHE,', 'OIGNON ROUGE, SAUCE SHIRASHA, CONCOMBRE'],
      },
      {
        title: 'KATSU',
        description: ['POULET PANÉ, CHOU BLANC,', 'SALADE DE CHOU ROUGE CAROTTE'],
      },
      {
        title: 'EGG & CHEESE',
        description: ['BROUILLADE D\'OEUFS,', 'TARTUFFADE, CREAM CHEESE'],
      },
      {
        title: 'LE BLT',
        description: ['BACON (POITRINE DE BOEUF),', 'LAITUE, TOMATES & MAYO EPICÉE'],
      },
    ];

    const sandoItemRefs = [];
    for (const item of sandoItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.title,
        title: item.title,
        description: item.description,
      });
      sandoItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // Dwiches Bar Items
    const dwichesItems = [
      {
        title: 'LE MEATBALL',
        description: ['BOULETTES DE VIANDE, SAUCE TOMATE', '& MOZZARELLA GRATINÉE'],
      },
      {
        title: 'LA BAVETTE SUPRÊME',
        description: ['BAVETTE, CHEDDAR & COMPOTÉE D\'OIGNONS'],
      },
      {
        title: 'SUGGESTION ROSSO',
        description: ['EN FONCTION DE L\'INSPIRATION DU CHEF'],
      },
    ];

    const dwichesItemRefs = [];
    for (const item of dwichesItems) {
      const created = await client.create({
        _type: 'menuItem',
        name: item.title,
        title: item.title,
        description: item.description,
      });
      dwichesItemRefs.push({ _type: 'reference', _ref: created._id });
    }

    // 7. Create Sandwich Subcategories
    console.log('📋 Creating sandwich subcategories...');
    
    const sandoBar = await client.create({
      _type: 'menuSubcategory',
      name: 'SANDO BAR',
      barTitle: 'SANDO BAR',
      subtitle: 'SANDWICHES FROIDS A BASE DE PAIN JAPONAIS',
      items: sandoItemRefs,
    });

    const dwichesBar = await client.create({
      _type: 'menuSubcategory',
      name: 'DWICHES BAR',
      barTitle: 'DWICHES BAR',
      subtitle: 'SANDWICHES CHAUDS DANS UNE BONNE BAGUETTE',
      footer: 'LE VRAI GOUT D\'UNE PAUSE',
      items: dwichesItemRefs,
    });

    console.log('✅ Sandwich subcategories created');

    // 8. Create Menu Categories
    console.log('🍽️  Creating menu categories...');
    
    await client.create({
      _type: 'menuCategory',
      name: 'Boissons',
      displayName: 'Boissons',
      slug: { _type: 'slug', current: 'boissons' },
      videoUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-preparation-boissons-specialites-video.webm',
      subcategories: [
        { _type: 'reference', _ref: coffeeBar._id },
        { _type: 'reference', _ref: matchaBar._id },
        { _type: 'reference', _ref: sesameBar._id },
        { _type: 'reference', _ref: blueBar._id },
        { _type: 'reference', _ref: chocolatBar._id },
        { _type: 'reference', _ref: ubeBar._id },
        { _type: 'reference', _ref: goldenBar._id },
      ],
    });

    await client.create({
      _type: 'menuCategory',
      name: 'Sandwichs',
      displayName: 'Sandwichs',
      slug: { _type: 'slug', current: 'sandwichs' },
      imageUrl: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-menu-sandwichs-maison-carte.webp',
      subcategories: [
        { _type: 'reference', _ref: sandoBar._id },
        { _type: 'reference', _ref: dwichesBar._id },
      ],
    });

    console.log('✅ Menu categories created');

    // 9. Seed Gallery Media
    console.log('🎨 Creating gallery media...');
    const galleryMedia = [
      {
        url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-sandwichs-maison-faits-sur-place.webp',
        alt: 'Sandwich maison',
        isVideo: false,
      },
      {
        url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-sandwich-gourmand-fait-maison.webp',
        alt: 'Burger maison',
        isVideo: false,
      },
      {
        url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-coffee-shop-tendance-sandwichs-maison-boissons-qualite.webm',
        alt: 'Carrousel photo',
        isVideo: true,
      },
      {
        url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-coffee-shop-moment-deguster-sur-place.webp',
        alt: 'Ambiance coffe shop',
        isVideo: false,
      },
      {
        url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-video-concept-ambiance-deco-experience-client.webm',
        alt: 'Bento photo',
        isVideo: true,
      },
      {
        url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-cafe-specialite-boisson-chaude.webp',
        alt: 'Coffee',
        isVideo: false,
      },
      {
        url: 'https://charlypizza.github.io/assets/rosso-cafe-marseille-dessert-gourmand-fait-maison.webp',
        alt: 'Dessert maison',
        isVideo: false,
      },
    ];

    for (const media of galleryMedia) {
      await client.create({
        _type: 'galleryMedia',
        mediaUrl: media.url,
        alt: media.alt,
        isVideo: media.isVideo,
      });
    }
    console.log('✅ Gallery media created');

    // 10. Seed Instagram Photos
    console.log('📸 Creating Instagram photos...');
    const instagramPhotos = [
      'https://charlypizza.github.io/assets/rosso-cafe-marseille-coffee-shop-tendance-instagram-post.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-marseille-flatlay-cafe-sandwich-dessert.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-marseille-latte-art-cafe-specialite.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-marseille-ambiance-interieur-deco-design.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-marseille-equipe-barista-service-souriant.webp',
      'https://charlypizza.github.io/assets/rosso-cafe-marseille-a-emporter-takeaway-cafe-sandwich.webp',
    ];

    for (const url of instagramPhotos) {
      await client.create({
        _type: 'instagramPhoto',
        imageUrl: url,
        alt: 'Instagram post',
      });
    }
    console.log('✅ Instagram photos created');

    console.log('🎉 All data seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
  }
}

seedData();