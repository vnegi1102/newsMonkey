import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "Rupert Grint: 'I'll never step out of Ron Weasley's shadow'",
    //         "description": "The actor told the BBC he's written a letter to the next child actor playing Ron in the upcoming HBO TV adaptation of the books.",
    //         "url": "https://www.bbc.com/news/articles/ckgydn88edno",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2b09/live/2984cde0-c609-11f0-9fb5-5f3a3703a365.jpg",
    //         "publishedAt": "2025-11-23T01:14:01Z",
    //         "content": "Noor NanjiCulture reporter\r\nRupert Grint has told the BBC hes unlikely to ever \"step out\" of Ron Weasley's shadow, some 14 years after the release of the final Harry Potter film.\r\n\"I'm fine with that… [+5249 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Kotaku"
    //         },
    //         "author": "Kotaku Deals",
    //         "title": "Amazon Chose Market Share Over Margins, AirPods Pro 3 Crash to Record Low Days After Launch",
    //         "description": "AirPods Pro 3 drop to $219 just weeks after launch.\nThe post Amazon Chose Market Share Over Margins, AirPods Pro 3 Crash to Record Low Days After Launch appeared first on Kotaku.",
    //         "url": "https://kotaku.com/amazon-chose-market-share-over-margins-airpods-pro-3-crash-to-record-low-days-after-launch-2000646557",
    //         "urlToImage": "https://kotaku.com/app/uploads/2025/09/airpods-pro-3.jpg",
    //         "publishedAt": "2025-11-23T00:35:12Z",
    //         "content": "Apple released the AirPods Pro 3 a few weeks ago and they’re already discounted on Amazon. That’s unusual for brand-new Apple products which typically hold their full price for months after launch. A… [+3155 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Kotaku"
    //         },
    //         "author": "Kotaku Deals",
    //         "title": "Amazon Is Going Nuts on Govee Uplighter Lamp, Now Selling for Pocket Change at Black Friday",
    //         "description": "If you've been wanting to upgrade your room's atmosphere without spending a fortune, this deal delivers.\nThe post Amazon Is Going Nuts on Govee Uplighter Lamp, Now Selling for Pocket Change at Black Friday appeared first on Kotaku.",
    //         "url": "https://kotaku.com/amazon-is-going-nuts-on-govee-uplighter-lamp-now-selling-for-pocket-change-at-black-friday-2000646562",
    //         "urlToImage": "https://kotaku.com/app/uploads/2025/11/govee-uplighter-lamp-2.jpg",
    //         "publishedAt": "2025-11-23T01:35:34Z",
    //         "content": "Govee has been giving Philips Hue a run for its money with its suite of affordable smart lighting products. This uplighter floor lamp is a perfect example of what Govee does best, marrying ambient li… [+2804 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Rod Gilmour",
    //         "title": "'We lost 50kg between us and now own a £35m meal prep business'",
    //         "description": "Meal delivery service Prep Kitchen's founders started by hand delivering their boxes. The British entrepreneurs are now set for £35m sales.",
    //         "url": "https://uk.finance.yahoo.com/news/prep-kitchen-healthy-meals-subscription-meal-delivery-060018743.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/efUCPTNhMmF3YMUBeq.lWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://s.yimg.com/os/creatr-uploaded-images/2025-11/5c451200-c49f-11f0-8efe-5c2096f9158d",
    //         "publishedAt": "2025-11-23T06:00:18Z",
    //         "content": "Prep Kitchen has been listed as one of the UK's fastest-growing companies.\r\nA growing trend in the last few months has seen big names such as Spotify (SPOT), Comcast (CMCSA) and Oracle (ORCL) appoint… [+5524 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka.com"
    //         },
    //         "author": "Alejandro Alcolea",
    //         "title": "Las calzadas romanas cambiaron el mundo. Y este Google Maps de hace 2.000 años te permite recorrerlas",
    //         "description": "¿Qué nos han dado los romanos? No es una pregunta que me haga cuando no puedo dormir, sino la genial sátira que los Monty Python plasmaron en ‘La vida de Brian’. El acueducto, el alcantarillado, la enseñanza, la irrigación, la sanidad, el vino, los baños públ…",
    //         "url": "https://www.xataka.com/magnet/calzadas-romanas-cambiaron-mundo-este-google-maps-hace-2-000-anos-te-permite-recorrerlas",
    //         "urlToImage": "https://i.blogs.es/f3aa40/captura-de-pantalla-2025-11-21-a-las-16.59.14/840_560.png",
    //         "publishedAt": "2025-11-23T09:31:06Z",
    //         "content": "¿Qué nos han dado los romanos? No es una pregunta que me haga cuando no puedo dormir, sino la genial sátira que los Monty Python plasmaron en La vida de Brian. El acueducto, el alcantarillado, la ens… [+5347 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5Mac"
    //         },
    //         "author": "Michael Burkhardt",
    //         "title": "Hands-on with Anker’s Prime 25W MagSafe charger: An ideal 3-in-1 solution for iPhone",
    //         "description": "If you’re in the market for an excellent 3-in-1 charging stand ahead of the holiday season, Anker’s new 3-in-1 Prime MagSafe charger could be an excellent pick. It offers 25W MagSafe charging with Qi2.2 support, as well as support for Apple Watch and AirPods …",
    //         "url": "https://9to5mac.com/2025/11/22/hands-on-anker-prime-3-in-1-magsafe-charger-25w-black-friday-deal/",
    //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2025/11/Anker-3-in-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2025-11-23T06:06:52Z",
    //         "content": "If you’re in the market for an excellent 3-in-1 charging stand ahead of the holiday season, Anker’s new 3-in-1 Prime MagSafe charger could be an excellent pick. It offers 25W MagSafe charging with Qi… [+2168 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Dezeen"
    //         },
    //         "author": "Jane Englefield",
    //         "title": "Eight living spaces anchored by statement fireplaces",
    //         "description": "It's rapidly cooling down across the northern hemisphere. To mark the seasonal shift, we've collected a lookbook of eight fireplaces installed in living spaces from Lithuania to Chile. Whether boxy or more conical, these fireplaces are united by their strikin…",
    //         "url": "https://www.dezeen.com/2025/11/23/eight-living-spaces-anchored-by-statement-fireplaces-lookbooks/",
    //         "urlToImage": "https://static.dezeen.com/uploads/2025/11/familien-kvistad-oslo-sq.jpg",
    //         "publishedAt": "2025-11-23T10:00:15Z",
    //         "content": "It's rapidly cooling down across the northern hemisphere. To mark the seasonal shift, we've collected a lookbook of eight fireplaces installed in living spaces from Lithuania to Chile.\r\nWhether boxy … [+4181 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yanko Design"
    //         },
    //         "author": "Srishti Mitra",
    //         "title": "Top 5 iPhone 17 Pro Setup Essentials for 2025",
    //         "description": "Top 5 iPhone 17 Pro Setup Essentials for 2025Setting up your iPhone 17 Pro isn’t just about unboxing and turning it on anymore. With features like ProRes video recording, advanced computational photography, and...",
    //         "url": "https://www.yankodesign.com/2025/11/22/top-5-iphone-17-pro-setup-essentials-for-2025/",
    //         "urlToImage": "https://www.yankodesign.com/images/design_news/2025/11/draft-top-5-iphone-17-pro-setup-essentials-for-2025/TORRAS_OrigArmor_Screen_Protector_hero.jpg",
    //         "publishedAt": "2025-11-23T02:45:58Z",
    //         "content": "Setting up your iPhone 17 Pro isn’t just about unboxing and turning it on anymore. With features like ProRes video recording, advanced computational photography, and desktop-class performance, your n… [+11175 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Applesfera.com"
    //         },
    //         "author": "Guille Lomener",
    //         "title": "Mucho antes de ChatGPT, Steve Jobs ya 'fichó' al joven Sam Altman en una keynote de Apple",
    //         "description": "Hoy en día, el nombre de Sam Altman ya suena en la misma liga que los de Steve Jobs, Tim Cook, Elon Musk o Mark Zuckerberg. Es, sin duda, una de las personas más influyentes del momento en el mundo de la tecnología. Lo que mucha gente no sabe es que la conexi…",
    //         "url": "https://www.applesfera.com/curiosidades/mucho-antes-chatgpt-steve-jobs-ficho-al-joven-sam-altman-keynote-apple",
    //         "urlToImage": "https://i.blogs.es/e38f0b/sam-altman/840_560.jpeg",
    //         "publishedAt": "2025-11-23T10:01:06Z",
    //         "content": "Hoy en día, el nombre de Sam Altman ya suena en la misma liga que los de Steve Jobs, Tim Cook, Elon Musk o Mark Zuckerberg. Es, sin duda, una de las personas más influyentes del momento en el mundo d… [+3557 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "XDA Developers"
    //         },
    //         "author": "Joe Rice-Jones",
    //         "title": "This smart QD-OLED monitor doesn't know if it's a TV or not (and that's part of its charm)",
    //         "description": "Remind me why we have TVs again?",
    //         "url": "https://www.xda-developers.com/review-samsung-smart-monitor-m9/",
    //         "urlToImage": "https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/11/samsung-smart-monitor-m9-home.jpg?w=1600&h=900&fit=crop",
    //         "publishedAt": "2025-11-23T12:00:18Z",
    //         "content": "If you've ever used your TV as a computer monitor, you know that it's not the best idea in the world. The optimization that's done to the panel for TVs compared to that for close-use monitors often m… [+6911 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka Android"
    //         },
    //         "author": "Eva R. de Luis",
    //         "title": "Primero fue Airdrop y pronto Handoff: Android 17 prepara un portapapeles universal entre PC y móvil",
    //         "description": "Seguimos desgranando funciones del próximo Android 17 que llegará en los siguientes meses y lo que se va filtrando no puede ser más prometedor en términos de funcionalidad: si hace unos días contábamos que será una versión para jugones por novedades como los …",
    //         "url": "https://www.xatakandroid.com/sistema-operativo/primero-fue-airdrop-pronto-handoff-android-17-prepara-portapapeles-universal-para-pc-movil",
    //         "urlToImage": "https://i.blogs.es/272818/copi/840_560.jpeg",
    //         "publishedAt": "2025-11-23T08:01:06Z",
    //         "content": "Seguimos desgranando funciones del próximo Android 17 que llegará en los siguientes meses y lo que se va filtrando no puede ser más prometedor en términos de funcionalidad: si hace unos días contábam… [+4299 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xataka Android"
    //         },
    //         "author": "Pepu Ricca",
    //         "title": "Crear tu propio Spotify es posible y cuesta cero euros si lo alojas tú mismo. Es fácil escapar de los algoritmos y suscripciones",
    //         "description": "Llevaba tiempo sintiendo cierta fatiga con el modelo de suscripción para escuchar música en el móvil: migré de Spotify a YouTube Music. Para al final escuchar simplemente mis listas creadas. Buscando una alternativa que me devolviera el control —y evitar las …",
    //         "url": "https://www.xatakandroid.com/aplicaciones-android/crear-tu-propio-spotify-posible-cuesta-cero-euros-alojas-tu-facil-escapar-algoritmos-suscripciones",
    //         "urlToImage": "https://i.blogs.es/5fc231/autohospedar-musica-funkwhale/840_560.jpeg",
    //         "publishedAt": "2025-11-23T12:01:06Z",
    //         "content": "Llevaba tiempo sintiendo cierta fatiga con el modelo de suscripción para escuchar música en el móvil: migré de Spotify a YouTube Music. Para al final escuchar simplemente mis listas creadas. Buscando… [+4259 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BGR"
    //         },
    //         "author": "staff@bgr.com (Christine Persaud)",
    //         "title": "5 Essential Apple Watch Apps You Need To Start Using",
    //         "description": "The Apple Watch supports a wide variety of apps beyond the ones that come pre-installed. WhatsApp, Todoist, and more help you get the most out of your watch.",
    //         "url": "https://www.bgr.com/2028105/essential-apple-watch-apps/",
    //         "urlToImage": "https://www.bgr.com/img/gallery/5-essential-apple-watch-apps-you-need-to-start-using/l-intro-1763221701.jpg",
    //         "publishedAt": "2025-11-23T11:17:00Z",
    //         "content": "We're all so busy nowadays, so the more apps we can use to help keep track of appointments, deadlines, and to-do lists, the better. Todoist is widely considered to be among the best, perfect for both… [+727 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Les Numériques"
    //         },
    //         "author": "Julien Vercoutère",
    //         "title": "Actualité : Le test du smartphone OnePlus 15 a rejoint notre comparatif",
    //         "description": "Notre comparatif de 233 smartphones accueille le test de l'OnePlus 15, disponible à partir de 979 €. Il vient en alternative de l'Apple iPhone 17 au prix de 969 €.",
    //         "url": "https://www.lesnumeriques.com/telephone-portable/le-test-du-smartphone-oneplus-15-a-rejoint-notre-comparatif-n246333.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/test/24/245429/af260554-oneplus-15__1200_678__0-131-1800-1076_wtmk.jpg",
    //         "publishedAt": "2025-11-23T08:02:00Z",
    //         "content": "Bien qu'il perd en singularité côté design, le OnePlus 15 brille par son affichage maitrisé, ses performances de haut vol et surtout son edurance impressionnante, portée par une batterie gigantesque … [+1211 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Les Numériques"
    //         },
    //         "author": "Rick",
    //         "title": "Actualité : Black Friday 2025 – Les écouteurs sans fil Sony WF-1000XM5 Noir \"5 étoiles\" à 199,00 € (-12%)",
    //         "description": "Les écouteurs sans fil Sony WF-1000XM5 Noir passent sous les 200 € chez Amazon et Son-Video.com soit une baisse d'environ 12% sur le prix habituellement constaté.",
    //         "url": "https://www.lesnumeriques.com/ecouteurs-sans-fil/black-friday-2025-les-ecouteurs-sans-fil-sony-wf-1000xm5-noir-5-etoiles-a-199-00-12-n246439.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/211295/d621d708-sony-wf-1000xm5-du-miel-pour-les-oreilles__1200_678__299-369-2699-1629_wtmk.jpg",
    //         "publishedAt": "2025-11-23T11:44:00Z",
    //         "content": "Modèle concernéCe contenu porte spécifiquement sur le modèle : Noir. D'autres déclinaisons existent et leurs prix sont indiqués dans les onglets du tableau ci-dessous.\r\nLes WF-1000XM5 sont les nouvea… [+2529 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Les Numériques"
    //         },
    //         "author": "Louis Paillat",
    //         "title": "Actualité : Black Friday 2025 : Sonos casse (enfin) ses prix, voici les 4 offres réelles à ne pas manquer",
    //         "description": "C'est une rareté dans la Tech : l'américain Sonos, habituellement très frileux sur les promotions, joue le jeu du Black Friday 2025 avec une agressivité qu'on ne lui connaissait pas. De la barre de son premium au casque nomade, tout l'écosystème profite de re…",
    //         "url": "https://www.lesnumeriques.com/casque-bluetooth/black-friday-2025-sonos-casse-enfin-ses-prix-voici-les-4-offres-reelles-a-ne-pas-manquer-n246182.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/news/24/246182/821c698b-black-friday-2025-sonos-casse-enfin-ses-prix-voici-les-4-offres-reelles-a-ne-pas-manquer__1200_678__0-1698-5824-4755.jpg",
    //         "publishedAt": "2025-11-23T09:11:00Z",
    //         "content": "Si vous lorgnez sur du matériel Sonos depuis quelques mois, votre patience vient de payer. La marque californienne, souvent comparée à Apple pour sa politique tarifaire rigide et son écosystème fermé… [+4438 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Les Numériques"
    //         },
    //         "author": "L'équipe Promo",
    //         "title": "Actualité : The Game Awards 2025 : attention aux cyberattaques, protégez-vous avec CyberGhost VPN",
    //         "description": "L’engouement autour de The Game Awards 2025 augmente le risque de cyberattaques. Pour protéger vos données, CyberGhost offre une protection efficace dès 2,03 € par mois.",
    //         "url": "https://www.lesnumeriques.com/vpn/the-game-awards-2025-attention-aux-cyberattaques-protegez-vous-avec-cyberghost-vpn-n246267.html",
    //         "urlToImage": "https://cdn.lesnumeriques.com/optim/news/24/246267/86cf83f4-the-game-awards-2025-attention-aux-cyberattaques-protegez-vous-avec-cyberghost-vpn__1200_678__overflow.jpg",
    //         "publishedAt": "2025-11-23T11:15:00Z",
    //         "content": "Chaque année, The Game Awards attire lattention de millions de joueurs et professionnels du secteur, et lédition 2025 ne fera pas exception. Prévue le 11 décembre 2025 au Peacock Theater de Los Angel… [+3746 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Caschys Blog"
    //         },
    //         "author": "André Westphal",
    //         "title": "Tablets 2026: Marktforscher rechnen mit regelrechtem OLED-Boom",
    //         "description": "LCD vs. OLED: Dieses Spielchen kennen wir unter anderem von Smartphones, Monitoren und natürlich auch Fernsehgeräten. Doch auch im Tablet-Markt stehen die beiden Display-Technologien nebeneinander. Laut den Marktforschern von Omdia könnten jedoch 2026 die Aus…",
    //         "url": "https://stadt-bremerhaven.de/tablets-2026-marktforscher-rechnen-mit-regelrechtem-oled-boom/",
    //         "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2025/09/Samsung-Galaxy-Tab-S11-Ultra-1.jpg",
    //         "publishedAt": "2025-11-23T12:00:03Z",
    //         "content": "LCD vs. OLED: Dieses Spielchen kennen wir unter anderem von Smartphones, Monitoren und natürlich auch Fernsehgeräten. Doch auch im Tablet-Markt stehen die beiden Display-Technologien nebeneinander. L… [+2808 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Frandroid"
    //         },
    //         "author": "Humanoid xp",
    //         "title": "Netflix, HBO Max, tout CANAL+, beIN SPORTS et bien plus encore : une série limitée à 40€/mois pour le Black Friday [Sponso]",
    //         "description": "Après avoir régalé les moins de 26 ans avec ses offres RAT+, CANAL+ décide de s’attaquer aux indécis avec une offre capable de contenter ceux qui n’arrivent pas à choisir entre sport, ciné et séries. Comment ? En baissant le prix de son offre LA TOTALE à 40 e…",
    //         "url": "https://www.frandroid.com/services/2873717_netflix-hbo-max-tout-canal-bein-sports-et-bien-plus-encore-une-serie-limitee-a-40e-mois-pour-le-black-friday",
    //         "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2024/11/canal.jpg?resize=1600,900&key=e2bb1973&watermark",
    //         "publishedAt": "2025-11-23T06:48:00Z",
    //         "content": "Après avoir régalé les moins de 26 ans avec ses offres RAT+, CANAL+ décide de sattaquer aux indécis avec une offre capable de contenter ceux qui narrivent pas à choisir entre sport, ciné et séries. C… [+7028 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Frandroid"
    //         },
    //         "author": "Humanoid xp",
    //         "title": "Mecpow M1 à 129 € : pourquoi ce graveur laser est une excellente affaire du Black Friday [Sponso]",
    //         "description": "Amateurs de loisirs créatifs, bricoleurs en herbe ou professionnels à la recherche d’équipements au bon prix : Geekbuying a ce qu’il vous faut. Pour le Black Friday, les meilleures références de Mecpow sont disponibles à prix (très) réduit.",
    //         "url": "https://www.frandroid.com/produits-android/imprimantes-3d/2875489_mecpow-m1-a-129-e-pourquoi-ce-graveur-laser-est-une-excellente-affaire-du-black-friday",
    //         "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/11/Mecpow-25_2800.webp?resize=1600,900&key=4090de55&watermark",
    //         "publishedAt": "2025-11-23T10:50:00Z",
    //         "content": "Amateurs de loisirs créatifs, bricoleurs en herbe ou professionnels à la recherche déquipements au bon prix : Geekbuying a ce quil vous faut. Pour le Black Friday, les meilleures références de Mecpow… [+8515 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Frandroid"
    //         },
    //         "author": "Humanoid xp",
    //         "title": "Pour le Black Friday, LELO prouve que le sextoys ne sont pas que des objets de plaisir [Sponso]",
    //         "description": "En misant autant sur le design que sur la technologie, LELO veut faire entrer les objets de plaisir dans le quotidien. Des sextoys que l'on retrouve justement en promotion pour le Black Friday.",
    //         "url": "https://www.frandroid.com/produits-android/2864203_pour-le-black-friday-lelo-prouve-que-le-sextoys-ne-sont-pas-que-des-objets-de-plaisir",
    //         "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/11/copy-of-blackfriday-frandroid-unes-6.jpg?resize=1600,900&key=77e06713&watermark",
    //         "publishedAt": "2025-11-23T09:24:11Z",
    //         "content": "En misant autant sur le design que sur la technologie, LELO veut faire entrer les objets de plaisir dans le quotidien. Des sextoys que l’on retrouve justement en promotion pour le Black Friday.\r\nLe m… [+9170 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Slickdeals.net"
    //         },
    //         "author": "angelmartinez",
    //         "title": "Apple AirPods 4 ANC Wireless Earbuds w/ USB-C Case + 2-Year AppleCare+ $119 + Free Shipping",
    //         "description": "Apple AirPods 4 Wireless Earbuds, Bluetooth Headphones, with Active Noise Cancellation, Adaptive Audio, Transparency Mode, Personalized Spatial Audio, USB-C Charging Case with AppleCare+ (2 Years) \n...",
    //         "url": "https://slickdeals.net/f/18853903-apple-airpods-4-anc-wireless-earbuds-w-usb-c-case-2-year-applecare-119-free-shipping",
    //         "urlToImage": "https://slickdeals.net/attachment/4/3/4/7/1/450x450/18827401.thumb",
    //         "publishedAt": "2025-11-23T00:50:32Z",
    //         "content": "This collaborative space allows users to contribute additional information, tips, and insights to enhance the original deal post. Feel free to share your knowledge and help fellow shoppers make infor… [+26 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "PCWorld"
    //         },
    //         "author": "DealPost Team",
    //         "title": "Let your backup computer be this $170 MacBook Air",
    //         "description": "TL;DR: A refurbished Apple MacBook Air for $169.97 (MSRP: $999) — 12-hour battery, 128GB storage, and Intel Core i5 performance.\r\n\n\n\n\nNeed a solid laptop that can handle everyday tasks without dipping into your savings? This refurbished Apple MacBook Air deli…",
    //         "url": "https://www.pcworld.com/article/2977974/let-your-backup-computer-be-this-170-macbook-air.html",
    //         "urlToImage": "https://www.pcworld.com/wp-content/uploads/2025/11/macbook-air-1.png?w=1024",
    //         "publishedAt": "2025-11-23T08:00:00Z",
    //         "content": "Skip to contentWhen you purchase through links in our articles, we may earn a small commission. This doesn't affect our editorial independence\r\n.\r\nTL;DR: A refurbished Apple MacBook Air for $169.97 (… [+1519 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Salon"
    //         },
    //         "author": "Jason Kyle Howard",
    //         "title": "Donald Trump always falls for a handsome man in a suit",
    //         "description": "Zohran Mamdani is just the latest babe to win POTUS’ affections",
    //         "url": "https://www.salon.com/2025/11/23/donald-trump-always-falls-for-a-handsome-man-in-a-suit/",
    //         "urlToImage": "https://www.salon.com/app/uploads/2025/11/Donald-Trump-Zohran-Mamdani-2247836572.jpg",
    //         "publishedAt": "2025-11-23T11:45:39Z",
    //         "content": "Its the stuff of political romance novels. A frustrated, angry bear of a president is roaring in the Oval Office about how people refuse to submit to him. Republicans in Congress over the Epstein fil… [+10007 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Andro4all.com"
    //         },
    //         "author": "Mauro Minichiello",
    //         "title": "Cómo hacer que AirDrop funcione en tu Google Pixel para transferir archivos con iPhone, iPad y macOS",
    //         "description": "Durante años, Android y Apple han vivido en mundos separados a la hora de compartir archivos. Si tenías un Google Pixel y alguien te pedía “¿me pasas eso por AirDrop?”, la respuesta era un resignado “no puedo”. Pero eso acaba de cambiar para siempre. Google h…",
    //         "url": "https://andro4all.com/android/como-hacer-que-airdrop-funcione-en-tu-google-pixel-para-transferir-archivos-con-iphone-ipad-y-macos",
    //         "urlToImage": "https://andro4all.com/hero/2025/11/como-hacer-que-airdrop-funcione-en-tu-google-pixel-para-transferir-archivos-con-iphone-ipad-y-macos.jpg?width=1200",
    //         "publishedAt": "2025-11-23T11:00:08Z",
    //         "content": "Quick Share ahora funciona con AirDrop en un Google Pixel 10, permitiendo compartir archivos entre Android y dispositivos Apple sin complicaciones\r\nDurante años, Android y Apple han vivido en mundos … [+3983 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Appbank.net"
    //         },
    //         "author": "AppBank編集部",
    //         "title": "コンパクトなのに10000mAh！　RORRYの直挿しモバイルバッテリー「D5-10000」がブラックフライデーで3,476円に",
    //         "description": "RORRY（ロリー）は11月21日、直挿しモバイルバッテリー『D5-10000』のブラックフライデー特別セールを11月21日〜12月1日の期間限定で開催すると発表しました。 　同製品は通常5,699円（税込）から30％OFFの3,863円",
    //         "url": "https://www.appbank.net/2025/11/23/goods-books/2871171.php",
    //         "urlToImage": "https://www.appbank.net/wp-content/uploads/2025/11/20251122_190313_020_01.webp",
    //         "publishedAt": "2025-11-23T10:20:00Z",
    //         "content": "RORRY1121D5-100001121121\r\n5,69930OFF3,86310OFFRORRYD5LW3,476\r\n8.5×5.5×3.3cm175g5000mAh50g2\r\niPhone 171.8Apple Watch Series 11221iPhone\r\nApple WatchType-CiPhone 1715Android3Type-CWatchUSB-C\r\nType-C to… [+149 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Googlewatchblog.de"
    //         },
    //         "author": "Jens",
    //         "title": "Android & ChromeOS: Google drängt auf den Desktop – doppelter Angriff auf Microsoft Windows startet 2026",
    //         "description": "Google ist mit den Betriebssystemen Android sehr gut und mit ChromeOS recht akzeptabel aufgestellt, doch das reicht im ständigen Wachstumsdrang nicht mehr aus. Schon im nächsten Jahr könnte es für das Konkurrenzsystem Microsoft Windows ungemütlich werden - de…",
    //         "url": "https://www.googlewatchblog.de/2025/11/android-chromeos-google-draengt-auf-den-desktop-doppelter-angriff-auf-microsoft-windows-startet-2026/",
    //         "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/google-android-chromeos-vs-windows.jpg",
    //         "publishedAt": "2025-11-23T07:30:23Z",
    //         "content": "Google ist mit den Betriebssystemen Android sehr gut und mit ChromeOS recht akzeptabel aufgestellt, doch das reicht im ständigen Wachstumsdrang nicht mehr aus. Schon im nächsten Jahr könnte es für da… [+4118 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Googlewatchblog.de"
    //         },
    //         "author": "Jens",
    //         "title": "Amazon Black Friday: Die besten Aktionen für Google-Nutzer – Rabatte auf Pixel, Android Auto, Smart Home",
    //         "description": "Aus offizieller Sicht dauert es noch gut eine Woche bis zum Black Friday, doch schon gestern ist die Amazon Black Friday-Woche gestartet, die natürlich auch für Google-Nutzer sehr interessant ist. Denn es gibt hohe Rabatte im Google Store, Angebote auf kompat…",
    //         "url": "https://www.googlewatchblog.de/2025/11/amazon-black-friday-die-besten-aktionen-fuer-google-nutzer-rabatte-auf-pixel-android-auto-smart-home-u/",
    //         "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/amazon-black-friday-deals.jpg",
    //         "publishedAt": "2025-11-23T11:45:42Z",
    //         "content": "Aus offizieller Sicht dauert es noch gut eine Woche bis zum Black Friday, doch schon gestern ist die Amazon Black Friday-Woche gestartet, die natürlich auch für Google-Nutzer sehr interessant ist. De… [+5074 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "el-mundo",
    //             "name": "El Mundo"
    //         },
    //         "author": "Abraham P. Romero",
    //         "title": "Florentino, más duro que nunca contra el Barça y Tebas, convoca una asamblea para reformar los estatutos del Madrid: \"Los pagos a Negreira coinciden con sus mejores años, no es normal\"",
    //         "description": "El presidente del conjunto blanco también critica a la Federación y la UEFA. \"Louzán me pidió entrar en la RFEF, no me conoce\", asegura, y recordó el saldo de expulsiones de Madrid y Barça en los últimos años. \"No es normal el nivel del arbitraje\" Leer",
    //         "url": "https://www.elmundo.es/deportes/futbol/2025/11/23/6922efe8e9cf4a09718b45a1.html",
    //         "urlToImage": "https://phantom-elmundo.uecdn.es/e4d4b14235c3063706c8ebac3b398ab5/crop/222x145/1968x1310/resize/1200/f/webp/assets/multimedia/imagenes/2025/11/23/17638958094550.jpg",
    //         "publishedAt": "2025-11-23T11:29:22Z",
    //         "content": "78 minutos de discurso. 78 minutos de un cambio de tono que alimenta la trinchera del Real Madrid en su guerra institucional contra gran parte del fútbol español. Florentino Pérez, más duro que nunca… [+7783 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "DIE WELT"
    //         },
    //         "author": "Lutz Wöckener",
    //         "title": "„Dann steht Mourinho auf, gibt mir einen Kuss auf die Wange – und geht“",
    //         "description": "Sami Khedira verrät, wie die Taktikbesprechung in einer Tiefgarage 2014 zum WM-Halbfinaleinzug über Frankreich führte. Der 38-Jährige blickt zurück auf Titel und Anekdoten und verdeutlicht, wie konzertiert er gerade an seiner zweiten Karriere arbeitet.",
    //         "url": "https://www.welt.de/sport/fussball/article691ad8f258d2cfb625f5e72e/sami-khedira-dann-steht-mourinho-auf-gibt-mir-einen-kuss-auf-die-wange-und-geht.html",
    //         "urlToImage": "https://images.welt.de/691ad8f258d2cfb625f5e72e/137091b5f0f9dff8b78064a3341a66b2-master/ci16x9-w1200/dpapicture-2-544149578-jbh-jpg",
    //         "publishedAt": "2025-11-23T09:15:35Z",
    //         "content": "Sami Khedira verrät, wie die Taktikbesprechung in einer Tiefgarage 2014 zum WM-Halbfinaleinzug über Frankreich führte. Der 38-Jährige blickt zurück auf Titel und Anekdoten und verdeutlicht, wie konze… [+16691 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Tomshw.it"
    //         },
    //         "author": "Dario De Vita",
    //         "title": "È il momento di esagerare: porta a casa la TV più grande del Black Friday e risparmia più di 1000€",
    //         "description": "Siete alla ricerca di un'esperienza visiva davvero immersiva? Su Amazon trovate la TV Hisense 100E7NQ da 100 pollici, un gigante QLED 4K che porta il cinema direttamente nel vostro salotto. Dotata di...",
    //         "url": "https://www.tomshw.it/hardware/tv-hisense-100-qled-4k-144hz-che-prezzo-su-amazon-risparmi-il-47-2025-11-23",
    //         "urlToImage": "https://www.tomshw.it/storage/media/2025/11/76825/tv-hisense-100-qled-4k-144hz-che-prezzo-su-amazon-risparmi-il-4LiwOyN.jpg",
    //         "publishedAt": "2025-11-23T08:50:35Z",
    //         "content": "Siete alla ricerca di un'esperienza visiva davvero immersiva? Su Amazon trovate la TV Hisense 100E7NQ da 100 pollici, un gigante QLED 4K che porta il cinema direttamente nel vostro salotto. Dotata di… [+2231 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Techbang.com"
    //         },
    //         "author": "IFENG",
    //         "title": "Google Chrome 加入「閱讀模式」新按鈕，瀏覽器終於懂得「清爽」了？",
    //         "description": "Google Chrome 加入「閱讀模式」新按鈕，瀏覽器終於懂得「清爽」了？Google 正在測試一項新功能，讓 Chrome 瀏覽器終於有望告別一堆廣告干擾。根據目前 Chrome Canary 測試版的變動，Google 正嘗試在瀏覽器地址列加入「閱讀模式」快捷按鈕，點一下就能切換成乾淨的純文字頁面，大幅提升閱讀體驗。\n一鍵開啟閱讀視圖，清除干擾元素\n當 Chrome 偵測到當前網頁適合顯示簡潔版內容時，地址列會跳出一個「閱讀模式」按鈕（Reading mode），點下去就能立即啟用清爽的閱讀畫面，只顯示文…",
    //         "url": "https://www.techbang.com/posts/126527-google-chrome-reading-mode-button",
    //         "urlToImage": "https://cdn2.techbang.com/system/excerpt_images/126527/original/c4f09370ad75d90f9c380f6b58cd316d.jpg?1763103120",
    //         "publishedAt": "2025-11-23T06:00:00Z",
    //         "content": "Google Chrome Chrome Canary Google \r\nChrome Reading mode\r\n Chrome Google \r\nGoogle \r\n Apple Safari Firefox Reader ViewChrome Google \r\nRead comfortably with minimal distractions Google \r\nChrome Canary … [+40 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ascii.jp"
    //         },
    //         "author": "ASCII",
    //         "title": "AirPods 4がまさかの24,800円！ ノイキャン搭載モデルがここまで安い!?",
    //         "description": "アクティブノイズキャンセリング（ANC）を搭載した最新のワイヤレスイヤホン「Apple AirPods 4」が、Amazonブラックフライデー先行セールに登場！",
    //         "url": "https://weekly.ascii.jp/elem/000/004/354/4354035/",
    //         "urlToImage": "https://ascii.jp/img/2025/11/21/4376127/l/e36badcfa3cc13d7.jpg",
    //         "publishedAt": "2025-11-23T04:00:00Z",
    //         "content": "24,800Surface Go2Office 2024Amazon"
    //     },
    //     {
    //         "source": {
    //             "id": "il-sole-24-ore",
    //             "name": "Il Sole 24 Ore"
    //         },
    //         "author": "di Redazione Roma",
    //         "title": "In Italia è boom per e-commerce, pay tv e contenuti on demand: in 10 anni acquisti sul web saliti del 273%",
    //         "description": "Nell’ultimo anno il costo sostenuto dalle famiglie per i servizi digitali (e-commerce più pay TV e intrattenimento ok demand ecc) si stima raggiungerà in Italia i 66 miliardi di euro",
    //         "url": "https://www.ilsole24ore.com/art/in-italia-e-boom-e-commerce-pay-tv-e-contenuti-on-demand-10-anni-acquisti-web-saliti-273percento-AHZghwuD",
    //         "urlToImage": "https://i2.res.24o.it/images2010/S24/Documenti/2025/11/24/Immagini/Ritagli/AdobeStock_1409204594_Editorial_Use_Only-U42714527346Idz-1440x752@IlSole24Ore-Web.jpeg?r=1170x507",
    //         "publishedAt": "2025-11-23T12:24:08Z",
    //         "content": "Ascolta la versione audio dell'articolo\r\nCon il Black Friday alle porte e le spese natalizie che attendono gli italiani, il commercio online penetra sempre più nelle abitudini degli italiani e regist… [+3742 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techradar",
    //             "name": "TechRadar"
    //         },
    //         "author": "Max Delaney",
    //         "title": "Apple TV getting a 50% discount is my pick for the best Black Friday streaming deal in Australia so far",
    //         "description": "Stream Pluribus, Ted Lasso, Severance, Slow Horses, The Morning Show and much more top-rated TV shows thanks to this Black Friday streaming deal– six months of Apple TV for just AU$7.99 a month.",
    //         "url": "https://www.techradar.com/streaming/apple-tv-getting-a-50-percent-discount-is-my-pick-for-the-best-black-friday-streaming-deal-in-australia-so-far",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/TKg7tKcJMboHWQZLFgzjQk-1920-80.jpg",
    //         "publishedAt": "2025-11-23T02:44:12Z",
    //         "content": "When Black Friday deals arrive, it's the perfect time to grab top Christmas gift ideas or upgrade your home coffee setup to save money in the new year. However, it's also the best time to save on les… [+2351 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techradar",
    //             "name": "TechRadar"
    //         },
    //         "author": "Cat Ellis",
    //         "title": "Save up to $130 off drip coffee makers with these Black Friday deals from Breville, Aarke and more",
    //         "description": "Love your coffee delicious and plentiful? I've got all the best Black Friday offers on drip coffee makers from big brands right here.",
    //         "url": "https://www.techradar.com/home/coffee-machines/save-up-to-usd130-off-drip-coffee-makers-with-these-black-friday-deals-from-breville-aarke-and-more",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/SfSCDi7eCRVt2HhcWGSgRM-1920-80.jpg",
    //         "publishedAt": "2025-11-23T12:38:09Z",
    //         "content": "Black Friday is the perfect time to snag a new coffee maker, particularly if you're a fan of pour-over. There are huge Black Friday deals on drip coffee makers from brands including Breville, Fellow … [+2106 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techradar",
    //             "name": "TechRadar"
    //         },
    //         "author": "matt.evans@futurenet.com (Matt Evans) , Matt Evans",
    //         "title": "Forget the Oura Ring 4 – the Samsung Galaxy Ring has dropped to its lowest-ever Black Friday price",
    //         "description": "Don't want to pay the Oura Ring 4's monthly fee? There's a 30% off Black Friday deal on the Samsung Galaxy Ring right now.",
    //         "url": "https://www.techradar.com/seasonal-sales/forget-the-oura-ring-4-the-samsung-galaxy-ring-has-dropped-to-its-lowest-ever-black-friday-price",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/HKN6PmYR25GVDtGsZCqrJH-2000-80.jpg",
    //         "publishedAt": "2025-11-23T13:06:08Z",
    //         "content": "Smart rings, tiny fitness trackers that fit on your finger instead of your wrist, are super trendy right now, and arguably the best one of the lot is on offer in the Black Friday deals, in both the U… [+2295 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techradar",
    //             "name": "TechRadar"
    //         },
    //         "author": "josh.russell@futurenet.com (Josh Russell) , Josh Russell",
    //         "title": "This early Black Friday SteelSeries wireless headset deal is seriously tempting – but I’m holding out a little longer",
    //         "description": "I can't resist this huge SteelSeries Arctis Nova Pro Black Friday deal – but are even heftier discounts on their way?",
    //         "url": "https://www.techradar.com/gaming/gaming-accessories/this-early-black-friday-steelseries-wireless-headset-deal-is-seriously-tempting-but-im-holding-out-a-little-longer",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/WQBoetdULoTXd3vQkYQnQm-1920-80.jpg",
    //         "publishedAt": "2025-11-23T12:33:48Z",
    //         "content": "If you're wanting to really plunge yourself into your games or dominate online leaderboards, a high-end gaming headset is always a smart purchase. And, fortunately for you, I've tracked down an early… [+3209 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techradar",
    //             "name": "TechRadar"
    //         },
    //         "author": "alex.whitelock@futurenet.com (Alex Whitelock) , Alex Whitelock",
    //         "title": "T-Mobile Black Friday deals 2025: get $1,000 off iPhone 17, Galaxy S25, Pixel 10, plus our expert buying tips",
    //         "description": "I've rounded up all of today's best T-Mobile Black Friday deals into one handy page right here - including buying advice for our readers.",
    //         "url": "https://www.techradar.com/phones/t-mobile/t-mobile-black-friday-deals-1",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/pLTdQ29P88qz3wAUy3z2hW-1920-80.jpg",
    //         "publishedAt": "2025-11-23T12:40:41Z",
    //         "content": "Is it time to upgrade that old phone? Well, this week's best T-Mobile Black Friday deals might just tempt you into a new plan or trade. Right now, several of the latest iPhones, Samsung Galaxy, and P… [+4403 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Tom's Hardware UK"
    //         },
    //         "author": "Mark Tyson",
    //         "title": "Frustrated users paid $2,000 dollars to fix Lenovo Legion ‘speakers not working properly’ error by posting a bug bounty — coder wins the cash by fixing complex audio annoyance eliminated in just a month",
    //         "description": "A motivated Lenovo Legion Pro 7 (16IAX10H) owner has successfully gotten their system’s speaker issues fixed after setting up a bug bounty program on GitHub.",
    //         "url": "https://www.tomshardware.com/software/linux/frustrated-users-paid-usd2-000-dollars-to-fix-lenovo-legion-speakers-not-working-properly-error-by-posting-a-bug-bounty-coder-wins-the-cash-by-fixing-complex-audio-annoyance-eliminated-in-just-a-month",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/UcJAgW7hR9uWNA8XyS5CmD-1920-80.jpg",
    //         "publishedAt": "2025-11-23T13:05:00Z",
    //         "content": "A motivated Lenovo Legion Pro 7 (16IAX10H) owner has successfully gotten their system’s speaker issues fixed after setting up a bug bounty program on GitHub. Nadim Kobeissi, a Linux user, was fed up … [+2963 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ComputerBase"
    //         },
    //         "author": "Volker Rißka",
    //         "title": "Wochenrück- und Ausblick: Anno zieht in einer bunt gemischten Woche an die Spitze",
    //         "description": "In der vergangenen Woche noch knapp an Position 1 gescheitert, hat es in dieser Woche der Community-Test zu Anno 117 auf Platz 1 geschafft. Ohnehin war viel los, es sind 81 News/Notizen und 7 Tests/Berichte erschienen. Welche davon haben die ComputerBase-Lese…",
    //         "url": "https://www.computerbase.de/news/in-eigener-sache/wochenrueckblick-und-ausblick-2025-w47.95153/",
    //         "urlToImage": "https://pics.computerbase.de/1/2/0/2/5/0-760da089c7055f5f/article-1280x720.3293cdd4.jpg",
    //         "publishedAt": "2025-11-23T07:00:00Z",
    //         "content": "In der vergangenen Woche noch knapp an Position 1 gescheitert, hat es in dieser Woche der Community-Test zu Anno 117 auf Platz 1 geschafft. Ohnehin war viel los, es sind 81 News/Notizen und 7 Tests/B… [+2072 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ComputerBase"
    //         },
    //         "author": "Fabian Vecellio del Monego",
    //         "title": "Gaming-PCs im Eigenbau: Von welchen Herstellern stammt eure Wahl-Hardware?",
    //         "description": "Von welchem Hersteller kommt eure CPU im Eigenbau-Gaming-PC, von welchem das Mainboard, was ist mit dem Gehäuse und wer zeichnet sich für die Grafikkarte verantwortlich? Diese Woche geht es in der Sonntagsfrage um die Hersteller eurer Wahl, wenn es um die Kon…",
    //         "url": "https://www.computerbase.de/news/pc-systeme/gaming-pcs-im-eigenbau-von-welchen-herstellern-stammt-eure-wahl-hardware.95158/",
    //         "urlToImage": "https://pics.computerbase.de/1/2/0/2/5/5-9733c4bcad48846b/article-1280x720.1008bd36.jpg",
    //         "publishedAt": "2025-11-23T11:00:00Z",
    //         "content": "Von welchem Hersteller kommt eure CPU im Eigenbau-Gaming-PC, von welchem das Mainboard, was ist mit dem Gehäuse und wer zeichnet sich für die Grafikkarte verantwortlich? Diese Woche geht es in der So… [+7241 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Line25.com"
    //         },
    //         "author": "Kate Dagli",
    //         "title": "Online Gambling Establishment I Danmark Tidak Bermodal Spins & 100% Bonus",
    //         "description": "Store On The Internet Casino Bonusser Eksklusive Bonuskoder Content Dyk Ned I Spillene Her Troværdighed Samt Sikkerhed I Højsædet Kapow Casino Eu Casino: Tilføjet November 2018 Casino House: Tilføjet ... Read More →\nThe post Online Gambling Establishment I Da…",
    //         "url": "https://line25.com/articles/online-gambling-establishment-i-danmark-tidak-bermodal-spins-100-bonus/",
    //         "urlToImage": null,
    //         "publishedAt": "2025-11-23T05:07:21Z",
    //         "content": "Home » Articles » Online Gambling Establishment I Danmark Tidak Bermodal Spins &amp; 100% Bonus\r\nLine25 is reader supported. At no cost to you a commission from sponsors may be earned when a purchase… [+21796 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Line25.com"
    //         },
    //         "author": "Kate Dagli",
    //         "title": "Ireland’s Best Online Internet Casinos 2025 The Ideal Casino Sites",
    //         "description": "Top 10 Irish Online Casinos 2025 ️ Best Gambling Establishment Sites In Ireland Content Live Baccarat Best Online Irish Casinos – Updated Top Casino Sport Providers Welcome Bonuses Mastering ... Read More →\nThe post Ireland’s Best Online Internet Casinos 2025…",
    //         "url": "https://line25.com/articles/irelands-best-online-internet-casinos-2025-the-ideal-casino-sites/",
    //         "urlToImage": null,
    //         "publishedAt": "2025-11-23T05:44:46Z",
    //         "content": "Home » Articles » Irelands Best Online Internet Casinos 2025 The Ideal Casino Sites\r\nLine25 is reader supported. At no cost to you a commission from sponsors may be earned when a purchase is made via… [+28196 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Antyweb.pl"
    //         },
    //         "author": "Kamil Świtalski",
    //         "title": "Zaskakujący test szybkości. Wzięło w nim udział 6 iPhone'ów",
    //         "description": "Jeden z najbardziej dopracowanych testów szybkości pomiędzy kolejnymi generacjami iPhone'ów, jaki kiedykolwiek powstał.",
    //         "url": "https://antyweb.pl/zaskakujacy-test-szybkosci-wzielo-w-nim-udzial-6-iphoneow",
    //         "urlToImage": "https://static.antyweb.pl/img/w_1250,h_550/wp-content/uploads/2025/11/iphone-test.jpg",
    //         "publishedAt": "2025-11-23T10:30:19Z",
    //         "content": "Kilka dni temu na YouTube pojawio si nowe, fascynujce pod wieloma wzgldami wideo, testujce prdko pomidzy szecioma generacjami iPhone'ów Pro Max. Mowa o smartfonach poczwszy od modelu 12 Pro Max, a po… [+2787 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Elladodelmal.com"
    //         },
    //         "author": "noreply@blogger.com (Chema Alonso)",
    //         "title": "Brash: Un exploit DoS en Chromium que \"mata\" los Web Browsers por el \"document.title\"",
    //         "description": "En cuestión de días, lo que empezó como una prueba más en el laboratorio de un hacker colombiano terminó poniendo incómodo a medio ecosistema Chromium. Un simple experimento con el título de una pestaña acabó convirtiéndose en un exploit capaz de tirar navega…",
    //         "url": "https://www.elladodelmal.com/2025/11/brash-un-exploit-dos-en-chromium-que.html",
    //         "urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie14jlX5PFOaGypIq1w_9ytNGXJuKHdEJfwvtt632EVgjCjvHyuOhoxvflUN1p1h_XX2uBwMiFBulUCd4s08zZczsRtE2RsstIM3t1udxUbtFazZZLBCQKfWzHKEHhg3gOcKEgLbofEu34-BcQ3-WgOl0Hg6LniFsW7aswgFlsPoGRZv9J0TbX/w1200-h630-p-k-no-nu/Brash0.jpg",
    //         "publishedAt": "2025-11-23T05:01:00Z",
    //         "content": "<ul><li>Congelamiento total del navegador.</li><li>Bloqueo instantáneo de pestañas.</li><li>Consumo extremo de CPU y memoria.</li><li>En algunos casos, reinicio forzado del proceso del navegador.</li… [+4458 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Iphoneitalia.com"
    //         },
    //         "author": "Giuseppe Migliorino",
    //         "title": "iPhone 17e in arrivo nel 2026 con un upgrade per la fotocamera",
    //         "description": "Nel 2026 arriverà iPhone 17e, il modello più economico della gamma, ma con una grande novità per la fotocamera. \nLink all'articolo originale: iPhone 17e in arrivo nel 2026 con un upgrade per la fotocamera",
    //         "url": "https://www.iphoneitalia.com/843301/iphone-17e-in-arrivo-nel-2026-con-un-upgrade-per-la-fotocamera",
    //         "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2025/07/iPhone-17-Base-Model-Rumored-to-Come-in-New-Green-and-Purple-Colors-Feature.webp",
    //         "publishedAt": "2025-11-23T11:30:29Z",
    //         "content": "iPhone 17e, atteso per l’inizio 2026, sulla carta dovrebbe essere il modello più economico della linea… ma con una sorpresa non da poco sul fronte fotocamera.\r\nSecondo le ultime indiscrezioni, infatt… [+1494 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Olhardigital.com.br"
    //         },
    //         "author": "Ana Luiza Figueiredo",
    //         "title": "Jogos de hoje (23/11/25): onde assistir futebol ao vivo e horários das partidas",
    //         "description": "Quer saber quem joga hoje? Confira horários e onde assistir ao vivo aos jogos de hoje (23/11/25) do futebol do Brasil e do mundo na TV e no streaming\nO post Jogos de hoje (23/11/25): onde assistir futebol ao vivo e horários das partidas apareceu primeiro em O…",
    //         "url": "https://olhardigital.com.br/2025/11/23/internet-e-redes-sociais/jogos-de-hoje-23-11-25-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
    //         "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2024/06/futebol-streaming.jpg",
    //         "publishedAt": "2025-11-23T11:00:00Z",
    //         "content": "Siga o Olhar Digital no Google Discover\r\nConfira a agenda de jogos dos próximos dias aqui!\r\nConfira aqui, no Olhar Digital, onde assistir, ao vivo, às partidas de hoje, 23 de novembro de 2025. Veja, … [+4002 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Olhardigital.com.br"
    //         },
    //         "author": "Kelvin Leão Nunes da Costa",
    //         "title": "8 filmes com Jacob Elordi para ver online",
    //         "description": "Jacob Elordi é um dos atores mais promissores e comentados de Hollywood. Selecionamos oito de seus melhores filmes para assistir online.\nO post 8 filmes com Jacob Elordi para ver online apareceu primeiro em Olhar Digital.",
    //         "url": "https://olhardigital.com.br/2025/11/23/cinema-e-streaming/8-filmes-com-jacobi-elordi-para-ver-online/",
    //         "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2025/11/jacobi-elordi-scaled.jpg",
    //         "publishedAt": "2025-11-23T08:20:00Z",
    //         "content": "Siga o Olhar Digital no Google Discover\r\nUm dos atores jovens de maior destaque em Hollywood no momento é Jacob Elordi. Nos últimos anos, o australiano vem estrelando filmes de destaque e recebendo e… [+4478 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Gadgeteer"
    //         },
    //         "author": "Bill Henderson",
    //         "title": "TerraMaster D4 SSD 4-Bay All-Flash DAS review – Take that, Apple!",
    //         "description": "Almost all of the gadgets I review “do” something. They blast music, mop and suck dirt off the floor, mow my yard, etc. They help me. At first glance, the TerraMaster D4 SSD 4-Bay All-Flash DAS (Direct-Attached Storage) is a gadget that quietly sits on my des…",
    //         "url": "https://the-gadgeteer.com/2025/11/23/terramaster-d4-ssd-4-bay-all-flash-das-review-take-that-apple/",
    //         "urlToImage": "https://the-gadgeteer.com/wp-content/uploads/2025/11/TerraMaster_D4-SSD_3.jpg",
    //         "publishedAt": "2025-11-23T13:02:17Z",
    //         "content": "If you buy something from a link in this article, we may earn a commission. Learn more\r\nAlmost all of the gadgets I review do something. They blast music, mop and suck dirt off the floor, mow my yard… [+5344 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "3dnews.ru"
    //         },
    //         "author": null,
    //         "title": "По итогам третьего квартала выручка поставщиков полупроводниковых компонентов впервые превысила $200 млрд",
    //         "description": "Статистика WSTS гласит, что в прошлом квартале совокупная выручка поставщиков чипов впервые в истории превысила $200 млрд, достигнув $208 млрд. Последовательный рост выручки составил 15,8 %, а в годовом сравнении прирост достиг 25,1 %, продемонстрировав макси…",
    //         "url": "https://3dnews.ru/1132817/po-itogam-tretego-kvartala-viruchka-postavshchikov-poluprovodnikovih-komponentov-vpervie-previsila-200-mlrd",
    //         "urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/11/23/1132817/nvidia_hq.jpg",
    //         "publishedAt": "2025-11-23T05:33:00Z",
    //         "content": "WSTS , $200 , $208 . 15,8 %, 25,1 %, 2021 . , .\r\n : Nvidia\r\n, . TSMC, , ( Apple) . Nvidia, $57 22 % .\r\nSamsung Electronics , $23,9 . , SK hynix, , HBM Nvidia. SK hynix, $17,6 . Broadcom - $17,4 .\r\n ,… [+220 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "redmondpie.com"
    //         },
    //         "author": "Oliver Haslam",
    //         "title": "The Smartest Car Dash Cam Of 2025: Dual-Cameras + ADAS + GPS + 5G WiFi + 4K, Costs Just $89 For Black Friday",
    //         "description": "Black Friday is the perfect time to pick up those accessories that you've been putting off, and that's definitely the case with this dash cam deal. Order now, and you'll get this Botslab 4K Dual Camera setup for just $89.99 — a huge 47% off.\nThe post The Smar…",
    //         "url": "https://www.redmondpie.com/the-smartest-car-dash-cam-of-2025-dual-cameras-adas-gps-5g-wifi-4k-costs-just-89-for-black-friday/",
    //         "urlToImage": "https://cdn.redmondpie.com/wp-content/uploads/2025/11/image_2025-11-22_233458375.png",
    //         "publishedAt": "2025-11-23T00:07:38Z",
    //         "content": "Black Friday is the perfect time to pick up those accessories that you’ve been putting off, and that’s definitely the case with this dash cam deal. Order now, and you’ll get this Botslab 4K Dual Came… [+1332 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Everything-everywhere.com"
    //         },
    //         "author": "Gary Arndt",
    //         "title": "A Brief Overview of the Ottoman Empire",
    //         "description": "Podcast Transcript One of the most important empires in history was the Ottoman Empire.  It wasn’t the biggest empire, but it had an outsized impact on the world due to its strategic location and its moment in history.  The Ottomans shocked the world by captu…",
    //         "url": "https://everything-everywhere.com/a-brief-overview-of-the-ottoman-empire/",
    //         "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-dKHszH4/0/M4J6XkgBrKf9KrxcKVD7646H8kQxMJ4sT94ftMvSr/L/1966epart-L.jpg",
    //         "publishedAt": "2025-11-23T05:51:43Z",
    //         "content": "Subscribe Apple | Spotify | Amazon |iHeart Radio | Castbox | Podcast Republic | RSS | Patreon | Discord | Facebook\r\nOne of the most important empires in history was the Ottoman Empire. \r\nIt wasnt the… [+14951 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Livedoor.biz"
    //         },
    //         "author": "sg3lqj86",
    //         "title": "【Amazon速報】Amazonブラックフライデー（先行セール）本日まで！明日からは真ブラフラへ進化！！！",
    //         "description": "1 ：風名し うおおおおおおおおおおおおおおおおおおおおおおおおおおおお！！！！！！！！！！！！！ 25/11/23 08:26 ID:c8VK+hvv.net",
    //         "url": "https://lifehack2ch.livedoor.biz/archives/51918041.html",
    //         "urlToImage": "https://livedoor.blogimg.jp/sg3lqj86/imgs/b/b/bb9c26cf.jpg",
    //         "publishedAt": "2025-11-23T09:00:34Z",
    //         "content": "2 25/11/23 08:27 ID:c8VK+hvv.net3 25/11/23 08:27 ID:c8VK+hvv.net5 25/11/23 08:28 ID:c8VK+hvv.net6 3 \r\n25/11/23 08:28 ID:vdGy9S5C.net10 &gt;&gt;6\r\n25/11/23 08:29 ID:c8VK+hvv.net7 25/11/23 08:29 ID:c8V… [+3324 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Macitynet.it"
    //         },
    //         "author": "Pubblicità",
    //         "title": "Black Friday, Nuki Smart Lock Go serratura smart low cost a 99,99",
    //         "description": "Amazon sconta al minimo la Serratura smart Nuki Smart Lock Go. Compatibile Wi-Fi, Bluetooth con supporto Matter: installazione in pochi minuti, controllo da app e accesso remoto opzionale con upgrade tramite Nuki Smart Access. Solo 99,99\n- su macitynet.it Bla…",
    //         "url": "https://www.macitynet.it/?p=1443456",
    //         "urlToImage": "https://www.macitynet.it/wp-content/uploads/2025/03/Nuki-Smart-Lock-Go-inside.jpg",
    //         "publishedAt": "2025-11-23T08:44:50Z",
    //         "content": "Nuki Smart Lock Go (2025), una serratura elettronica con Bluetooth, Wi-Fi e supporto Matter, scende al minimo: da 149,99 passa a 99,99 su Amazon.\r\nDesign essenziale e nuove tecnologie\r\nLa Nuki Smart … [+1645 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hwupgrade.it"
    //         },
    //         "author": null,
    //         "title": "Il nuovo iPhone 17e sta arrivando: ecco tutte le novità rispetto al 16e",
    //         "description": "Apple sta lavorando al suo nuovo entry-level: si tratta di iPhone 17e, smartphone atteso sul mercato nel corso della prima parte del 2026 per raccogliere il testimone dal 16e e diventare il modello più economico della gamma",
    //         "url": "https://www.hwupgrade.it/news/apple/il-nuovo-iphone-17e-sta-arrivando-ecco-tutte-le-novita-rispetto-al-16e_146606.html",
    //         "urlToImage": "https://www.hwupgrade.it/i/n/iphone-16e-2_720-1_720.jpg",
    //         "publishedAt": "2025-11-23T08:01:01Z",
    //         "content": "Tra le novità del 2026 di Apple ci sarà spazio anche per il nuovo iPhone 17e, modello destinato raccogliere il testimone da iPhone 16e e a diventare l'entry-level della gamma di smartphone della casa… [+1431 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Nature.com"
    //         },
    //         "author": "Xiaoyu Liu, Wenhao Hu, Jie Sun, Bing Wu",
    //         "title": "Fructose intake driven glycolysis-ROS-EGFR axis specifically promotes the generation and pathogenicity of Th17 cells",
    //         "description": "Th17 cells play roles in maintaining immune homeostasis but also potentially harmful inflammatory processes. Here, authors show that homeostatic and pathological Th17 cells are distinct subtypes, responding to different cytokine combinations and metabolic cue…",
    //         "url": "https://www.nature.com/articles/s41467-025-66064-5",
    //         "urlToImage": null,
    //         "publishedAt": "2025-11-23T00:00:00Z",
    //         "content": "<li>Dong, C. Diversification of T-helper-cell lineages: finding the family root of IL-17-producing cells. Nat. Rev. Immunol.6, 329333 (2006).\r\nGoogle Scholar \r\n</li><li>Korn, T., Bettelli, E., Oukka,… [+16968 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hwupgrade.it"
    //         },
    //         "author": null,
    //         "title": "LibrePods: le funzioni più avanzate delle Apple AirPods Pro disponibili anche su Android",
    //         "description": "Grazie a LibrePods  è possibile accedere alle funzioni più avanzate delle AirPods Pro 2 e 3 anche utilizzando uno smartphone Android: si tratta di un tool open source che punta a superare le limitazioni imposte da Apple.",
    //         "url": "https://www.hwupgrade.it/news/apple/librepods-le-funzioni-piu-avanzate-delle-apple-airpods-pro-disponibili-anche-su-android_146628.html",
    //         "urlToImage": "https://www.hwupgrade.it/i/n/airpodspro3_720-1_720.jpg",
    //         "publishedAt": "2025-11-23T06:01:01Z",
    //         "content": "Un progetto indipendente è riuscito a sbloccare alcune funzionalità delle AirPods anche per dispositivi che non appartengono alla galassia Apple. Grazie a LibrePods, infatti, è possibile utilizzare l… [+1503 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hwupgrade.it"
    //         },
    //         "author": null,
    //         "title": "Il nuovo entry-level della gamma MacBook sta arrivando: chip A18 Pro e tastiera senza retroilluminazione",
    //         "description": "Apple sta lavorando a un nuovo MacBook economico con chip A18 Pro: ecco le prime informazioni sulle specifiche del nuovo modello e le ipotesi sul prezzo e sulla data di lancio commerciale",
    //         "url": "https://www.hwupgrade.it/news/apple/il-nuovo-entry-level-della-gamma-macbook-sta-arrivando-chip-a18-pro-e-tastiera-senza-retroilluminazione_146622.html",
    //         "urlToImage": "https://www.hwupgrade.it/i/n/MacBookFuturo_720_1_720_1_720_1_720.jpg",
    //         "publishedAt": "2025-11-23T11:01:01Z",
    //         "content": "Apple sta lavorando a un nuovoMacBook destinato a diventare il modello entry-level della gamma, posizionato al di sotto del MacBook Air. Il progetto è in rampa di lancio e potrebbe debuttare nel giro… [+1594 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hwupgrade.it"
    //         },
    //         "author": null,
    //         "title": "Amazon Black Friday weekend: le offerte appena aggiornate e i bestseller imperdibili",
    //         "description": "Ecco il meglio del weekend per quanto riguarda le offerte Black Friday Amazon, aggiornate proprio ora. Ci trovate i bestseller in diversi settori ma non solo quelli, perché le promozioni riguardano veramente un po' tutto.",
    //         "url": "https://www.hwupgrade.it/news/multimedia/amazon-black-friday-weekend-le-offerte-appena-aggiornate-e-i-bestseller-imperdibili_146631.html",
    //         "urlToImage": "https://www.hwupgrade.it/i/n/ama_total_primeday3_720.jpg",
    //         "publishedAt": "2025-11-23T09:17:16Z",
    //         "content": "Ecco le migliori \r\nofferte per il Black Friday Amazon, ce ne sono così tanche che è difficile \r\norganizzarle. Si possono risparmiare veramente \r\ncentinaia di Euro, sia su offerte nuove di zecca, sia … [+10442 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Annvoskamp.com"
    //         },
    //         "author": "Ann Voskamp",
    //         "title": "Only the Good Stuff: Multivitamins For Your Weekend {11.22.2025}",
    //         "description": "Happy, happy, happy weekend! Let yourself smile, be crazy inspired, laugh, love & really live the gift of this lifejust a little bit more this weekend… Smile a mile wide & believe like crazy in a Good God redeeming everything — and that there’s love everywher…",
    //         "url": "https://annvoskamp.com/2025/11/only-the-good-stuff-multivitamins-for-your-weekend-11-22-2025/",
    //         "urlToImage": "https://annvoskamp.com/wp-content/uploads/2025/11/anita-austvika-qpGLVA9orhM-unsplash-scaled.jpg",
    //         "publishedAt": "2025-11-23T01:50:23Z",
    //         "content": "Happy, happy, happy weekend! \r\nLet yourself smile, be crazy inspired, laugh, love &amp; really live the gift of this lifejust a little bit more this weekend…\r\n Smile a mile wide &amp; believe like cr… [+4093 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Slate Magazine"
    //         },
    //         "author": "Lizzie O’Leary",
    //         "title": "The Surveillance Interstate",
    //         "description": "Eyes on the road.",
    //         "url": "https://slate.com/podcasts/what-next-tbd/2025/11/ice-sees-your-car",
    //         "urlToImage": "https://compote.slate.com/images/694baddf-b563-49d7-b82c-08f0597d8aca.jpeg?crop=1560%2C1040%2Cx0%2Cy0&width=1560",
    //         "publishedAt": "2025-11-23T10:30:00Z",
    //         "content": "Tracking a license plate across the country has never been easier, which is good news if your car has been stolen, but in an era of ICE and Border Patrol raids, these warrantless searches feel increa… [+473 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MacGeneration"
    //         },
    //         "author": "Christophe Laporte",
    //         "title": "OpenAI, un géant aux pieds d’argile face au retour en force de Google",
    //         "description": "Longtemps perçue comme intouchable, OpenAI voit aujourd’hui son avance se réduire face à la montée en puissance de Google et d’Anthropic. La sortie de Gemini 3 illustre cette bascule progressive, dans un contexte où les enjeux ne sont plus seulement technolog…",
    //         "url": "https://www.macg.co/intelligence-artificielle/2025/11/openai-un-geant-aux-pieds-dargile-face-au-retour-en-force-de-google-305167",
    //         "urlToImage": "https://cdn.mgig.fr/2025/11/mga-065c22bc-w375-w1500-w750_accroche.jpg",
    //         "publishedAt": "2025-11-23T12:11:49Z",
    //         "content": "Longtemps perçue comme intouchable, OpenAI voit aujourdhui son avance se réduire face à la montée en puissance de Google et dAnthropic. La sortie de Gemini 3 illustre cette bascule progressive, dans … [+4573 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Giga"
    //         },
    //         "author": "Sven Kaulfuss",
    //         "title": "Erleichterung für iPhone-Nutzer: Apple hör zu – dieses Feature gehört in iOS 27",
    //         "description": "So simpel, so logisch – und trotzdem fehlt es jedem iPhone: Dieses Konzept trifft ins Schwarze.",
    //         "url": "https://www.giga.de/tech/erleichterung-fuer-iphone-nutzer-apple-hoert-zu-dieses-feature-gehoert-in-ios-27--01KAGF6B21APB6YZR33FS8JJN2",
    //         "urlToImage": "https://static.giga.de/88/9f/05/b5f61cca640f10707af4b50999_cmUgMTkyMCAxMDgwAzhmYjZjNDEwZjU5.png",
    //         "publishedAt": "2025-11-23T10:00:00Z",
    //         "content": "So simpel, so logisch und trotzdem fehlt es jedem iPhone: Dieses Konzept trifft ins Schwarze.\r\nNoch läuft iOS 26 frisch auf Millionen iPhones, doch ein Konzept macht bereits jetzt klar: Für die nächs… [+3406 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Help Net Security"
    //         },
    //         "author": "Help Net Security",
    //         "title": "Week in review: Stealth-patched FortiWeb vulnerability under active exploitation, Logitech data breach",
    //         "description": "Here’s an overview of some of last week’s most interesting news, articles, interviews and videos: The tech that turns supply chains from brittle to unbreakable In this Help Net Security interview, Sev Kelian, CISO and VP of Security at Tecsys, discusses how o…",
    //         "url": "https://www.helpnetsecurity.com/2025/11/23/week-in-review-stealth-patched-fortiweb-vulnerability-under-active-exploitation-logitech-data-breach/",
    //         "urlToImage": "https://img.helpnetsecurity.com/wp-content/uploads/2023/07/16184227/week-in-review.jpg",
    //         "publishedAt": "2025-11-23T09:00:47Z",
    //         "content": "Heres an overview of some of last weeks most interesting news, articles, interviews and videos:\r\nThe tech that turns supply chains from brittle to unbreakableIn this Help Net Security interview, Sev … [+13187 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Giga"
    //         },
    //         "author": "Martin Bosse",
    //         "title": "Für 5,69 Euro pro Stück: Amazon verkauft USB-C-Schnellladegeräte zum Witzpreis",
    //         "description": "Langsame Ladegeräte kosten Zeit und Nerven, besonders wenn ihr unterwegs seid oder euer Gerät schnell wieder einsatzbereit sein soll. Das Ugreen USB-C-Ladegerät im praktischen Doppelpack liefert bis zu 20 Watt Leistung und lädt eure Geräte damit deutlich schn…",
    //         "url": "https://www.giga.de/tech/fuer-5-69-euro-pro-stueck-amazon-verkauft-usb-c-schnellladegeraete-zum-witzpreis--01K5XPZ6G2DPTRHJ5F6EVM8WPG",
    //         "urlToImage": "https://static.giga.de/b2/fd/47/d45cfbb8e57691c3220d4878b8_cmUgMTkyMCAxMDgwA2JkZGNiNTkzMDhi.jpeg",
    //         "publishedAt": "2025-11-23T09:02:00Z",
    //         "content": "Langsame Ladegeräte kosten Zeit und Nerven, besonders wenn ihr unterwegs seid oder euer Gerät schnell wieder einsatzbereit sein soll. Das Ugreen USB-C-Ladegerät im praktischen Doppelpack liefert bis … [+2773 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Iamafoodblog.com"
    //         },
    //         "author": "Stephanie",
    //         "title": "6 Unique Thanksgiving Salads for Your Holiday Spread",
    //         "description": "Salad brightens up the meal and makes it feel more fun and festive.Here are some of my favorite Thanksgiving salads",
    //         "url": "https://iamafoodblog.com/thanksgiving-salads/",
    //         "urlToImage": "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/05/sesame-soy-broccoli-salad-3855w-2.jpg",
    //         "publishedAt": "2025-11-23T08:05:56Z",
    //         "content": "Salads are probably the most overlooked side at Thanksgiving (or any celebration dinner) and I think thats super sad. \r\nSalad is amazing. It provides just the right contrast to all the richness of th… [+3663 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Screen Rant"
    //         },
    //         "author": "Rob Sperduto",
    //         "title": "Prime Video's Critical Role Shows Outshine The Rings of Power",
    //         "description": "Two seasons in, and The Rings of Power shows promise. But Prime Video's new kid on the block with ties to Dungeons & Dragons has already surpassed it.",
    //         "url": "https://screenrant.com/prime-video-critical-role-shows-better-rings-of-power/",
    //         "urlToImage": "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/07/i-m-desperate-for-lord-of-the-rings-the-rings-of-power-to-succeed-but-not-for-the-reason-you-think.jpg?w=1600&h=900&fit=crop",
    //         "publishedAt": "2025-11-23T02:15:17Z",
    //         "content": "Critical Role's latest fantasy show The Mighty Nein has launched to strong reviews, and its debut forces a re-evaluation of exactly which property holds the crown in Prime Video's fantasy library. Wh… [+3588 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Zive.cz"
    //         },
    //         "author": "Martin Chroust",
    //         "title": "Další podivnost z Apple Storu. Přicvakávací kámen s MagSafe využijete zároveň jako držák i stojánek",
    //         "description": "Apple nepřestává překvapovat. Uplynul sotva týden od představení ponožky iPhone Pocket a kalifornský gigant přichází s dalším neobvyklým příslušenstvím – stojanem a gripem v jednom. Hikawa Phone Grip Stand je masivní doplněk na záda iPhonu s podporou MagSafe.…",
    //         "url": "https://mobilmania.zive.cz/clanky/dalsi-podivnost-z-apple-storu-pricvakavaci-kamen-s-magsafe-vyuzijete-zaroven-jako-drzak-i-stojanek/sc-3-a-1363792/default.aspx",
    //         "urlToImage": "https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=796752269",
    //         "publishedAt": "2025-11-23T09:50:00Z",
    //         "content": "Apple nepestává pekvapovat. Uplynul sotva týden od pedstavení ponoky iPhone Pocket a kalifornský gigant pichází s dalím neobvyklým písluenstvím stojanem a gripem v jednom. Hikawa Phone Grip &amp; Sta… [+1752 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "ign",
    //             "name": "IGN"
    //         },
    //         "author": "Estrella Gomez",
    //         "title": "Charlize Theron tiene una gran mancha en su carrera. Un thriller de los 2000 que ella mismo dijo que era \"muy mala película\"",
    //         "description": "A pesar de todo, no se arrepiente\nTodas las estrellas de Hollywood, especialmente las que tienen una larga trayectoria a sus espaldas, han protagonizado uno o dos proyectos de calidad cuestionable. En el caso de Charlize Theron, se pueden nombrar varios, como…",
    //         "url": "https://es.ign.com/movies/223765/news/charlize-theron-tiene-una-gran-mancha-en-su-carrera-un-thriller-de-los-2000-que-ella-mismo-dijo-que",
    //         "urlToImage": "https://sm.ign.com/t/ign_es/screenshot/default/sin-titulo-1_hjw1.1200.jpg",
    //         "publishedAt": "2025-11-23T12:01:08Z",
    //         "content": "Todas las estrellas de Hollywood, especialmente las que tienen una larga trayectoria a sus espaldas, han protagonizado uno o dos proyectos de calidad cuestionable.\r\nLo cierto es que la actriz no es l… [+1232 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Xatakahome.com"
    //         },
    //         "author": "Fran León",
    //         "title": "El Black Friday de Carrefour nos permite comprar esta tele Samsung de 65 pulgadas a precio de outlet",
    //         "description": "Carrefour ya está celebrando el Black Friday, una oportunidad perfecta para poder renovar la vieja tele de tu hogar. Si quieres un televisor grande, ahora puedes llevarte esta Samsung TQ65QN74FAT con un descuento de 300 euros, pudiéndola comprar por 699 euros…",
    //         "url": "https://www.xatakahome.com/seleccion/black-friday-carrefour-nos-permite-comprar-esta-tele-samsung-65-pulgadas-a-precio-outlet",
    //         "urlToImage": "https://i.blogs.es/0d329b/teles-carrefour-4-/1200_630.jpeg",
    //         "publishedAt": "2025-11-23T08:01:06Z",
    //         "content": "Carrefour ya está celebrando el Black Friday, una oportunidad perfecta para poder renovar la vieja tele de tu hogar. Si quieres un televisor grande, ahora puedes llevarte esta Samsung TQ65QN74FAT con… [+1594 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ipadizate.com"
    //         },
    //         "author": "Mauricio Martínez",
    //         "title": "3 funciones en las que Android Auto es mejor que Apple CarPlay",
    //         "description": "Si pensábamos que la batalla eterna entre iOS y Android se quedaba en los móviles estamos equivocados. Esta batalla ha migrado gracias a ellos a otra plataforma que puede utilizarse en los coches, hablamos de Apple CarPlay y Android Auto. Si bien es cierto qu…",
    //         "url": "https://ipadizate.com/android/3-funciones-en-las-que-android-auto-es-mejor-que-apple-carplay",
    //         "urlToImage": "https://ipadizate.com/hero/2025/11/android-auto-es-una-opcion-mas-versatil-que-apple-carplay.jpg?width=1200",
    //         "publishedAt": "2025-11-23T11:00:31Z",
    //         "content": "Android Auto es una opción mas versátil que Apple CarPlay\r\nSi pensábamos que la batalla eterna entre iOS y Android se quedaba en los móviles estamos equivocados. Esta batalla ha migrado gracias a ell… [+4514 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ipadizate.com"
    //         },
    //         "author": "Ángel Roca",
    //         "title": "Añade una pantalla trasera a tu iPhone con esta funda muy parecida a la del Xiaomi 17 Pro Max",
    //         "description": "Cuando Apple mostró el diseño e los iPhone 17 Pro y iPhone 17 Pro Max muchos pensaron que toda esa superficie podía ser perfecta para instalar una cámara trasera con ciertas funciones. Poco después apareció el Xiaomi 17 Pro Max mostrando precisamente eso. Y, …",
    //         "url": "https://ipadizate.com/accesorios/anade-una-pantalla-trasera-a-tu-iphone-con-esta-funda-muy-parecida-a-la-del-xiaomi-17-pro-max",
    //         "urlToImage": "https://ipadizate.com/hero/2025/11/funda-pantalla-iphone-2.jpeg?width=1200",
    //         "publishedAt": "2025-11-23T09:05:32Z",
    //         "content": "Expande las funciones de tu iPhone con esta funda con pantalla\r\nCuando Apple mostró el diseño e los iPhone 17 Pro y iPhone 17 Pro Max muchos pensaron que toda esa superficie podía ser perfecta para i… [+2731 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Techviral.net"
    //         },
    //         "author": "Kavita Iyer",
    //         "title": "Google Adds AirDrop Support To Android’s Quick Share",
    //         "description": "Google has taken a major step toward breaking down the long-standing wall between Android and iOS. On Thursday, the company updated its wireless sharing feature, Quick Share, to communicate directly with Apple’s AirDrop, a first for cross-platform, peer-to-pe…",
    //         "url": "https://techviral.net/google-adds-airdrop-support-to-androids-quick-share/",
    //         "urlToImage": "https://techviral.net/wp-content/uploads/2025/11/Google-Adds-AirDrop-Support-To-Androids-Quick-Share-1.png",
    //         "publishedAt": "2025-11-23T06:47:36Z",
    //         "content": "Google has taken a major step toward breaking down the long-standing wall between Android and iOS. On Thursday, the company updated its wireless sharing feature, Quick Share, to communicate directly … [+2042 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CHIP Online Deutschland"
    //         },
    //         "author": null,
    //         "title": "Mit 5.500 mAh an die Spitze: Samsung Galaxy S26 Ultra setzt neue Akku-Standards",
    //         "description": "Samsung plant ein Akku-Upgrade für das Galaxy S26 Ultra. Mit einem Akku mit 5.500 mAh und neuer Technologie will der Hersteller die Konkurrenz übertreffen.",
    //         "url": "https://www.chip.de/news/handy/mit-5-500-mah-an-die-spitze-samsung-galaxy-s26-ultra-setzt-neue-akku-standards_fca61eb9-a36a-48b1-b24f-a1cf12a1a339.html",
    //         "urlToImage": "https://quadro.burda-forward.de/ctf/702feea2-7c7d-4273-9991-6c2955868603.ba325045-d6ff-4558-8354-976aa1d07745.png?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%28854%2C524%29&hash=c0deede6afc8e90a9a1b6ec093c27ad991e00ab91a2863f63448557eed5dfd99",
    //         "publishedAt": "2025-11-23T10:38:00Z",
    //         "content": "Das kommende Samsung Galaxy S26 Ultra könnte eines der entscheidendsten Upgrades seit Jahren erhalten einen größeren Akku. Laut neuen Leaks erhält das Premium-Smartphone 2026 einen spürbaren Energies… [+2070 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CHIP Online Deutschland"
    //         },
    //         "author": "Carina Blumenroth",
    //         "title": "Nicht reagieren! Hinter dieser Nachricht der Sparkasse verbirgt sich perfider Betrug",
    //         "description": "Derzeit gibt es einen Phishing-Versuch bei der Sparkasse. Kunden werden aufgefordert, den S-ID-Check zu bestätigen. Was Sie beachten sollten.",
    //         "url": "https://www.chip.de/news/cyber-security/nicht-reagieren-hinter-dieser-nachricht-der-sparkasse-verbirgt-sich-perfider-betrug_e2e4ac78-09f2-4f6a-a36f-410c9d22a9ec.html",
    //         "urlToImage": "https://quadro.burda-forward.de/ctf/3bf7dcd7-164d-4313-98c8-9b729aea5282.b64c6bec-f709-49df-9a45-a551782bc598.png?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%281296%2C868%29&hash=8548836a811c723522c41fb96358c129ed74ff321f9f39ba4ccb6c9d81105e92",
    //         "publishedAt": "2025-11-23T07:25:00Z",
    //         "content": "Kunden der Sparkasse sind aktuell von einem Phishing-Versuch betroffen. Konkret geht es darum, dass Cyberkriminelle im Namen der Sparkasse dazu auffordern, den \"S-ID-Check\" zu aktualisieren, berichte… [+2190 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CHIP Online Deutschland"
    //         },
    //         "author": "Aline Wobker",
    //         "title": "Android 17 mit Mega-Upgrade: Universal-Zwischenablage auch für Android-PCs",
    //         "description": "Mit Android 17 plant Google ein Universal-Clipboard für Android-PCs. Inhalte könnten so endlich nahtlos zwischen Geräten kopiert und eingefügt werden.",
    //         "url": "https://www.chip.de/news/handy/android-17-mit-mega-upgrade-universal-zwischenablage-auch-fuer-android-pcs_8bda54ad-f665-4724-b94f-40b7a26a5f98.html",
    //         "urlToImage": "https://quadro.burda-forward.de/ctf/a03197c4-315e-4eea-8805-fae18a50ef68.b41ac741-8504-4a5b-9b0e-d41b76fd131d.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%28274%2C145%29&hash=20eb6eb99d7ae0f8fb34b9e21247eb0bad6e72840f131bf12638ec1ef8393ab1",
    //         "publishedAt": "2025-11-23T07:55:00Z",
    //         "content": "Mit Android 17 könnte Google eine Funktion nachreichen, die viele Nutzer seit Jahren vermissen: eine geräteübergreifende Zwischenablage. Wie Android Authority exklusiv berichtet, arbeitet Google inte… [+2708 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CHIP Online Deutschland"
    //         },
    //         "author": "Patrick Hannemann",
    //         "title": "Kurioser Fund: So haben uns iPhones jahrelang ausgetrickst",
    //         "description": "Viele iPhone-Fans schwören auf die Oberfläche von iOS. Doch auch da wird getrickst.",
    //         "url": "https://www.chip.de/news/handy/kurioser-fund-so-haben-uns-iphones-jahrelang-ausgetrickst_8bcfa915-0462-41b4-ac60-103972b75133.html",
    //         "urlToImage": "https://quadro.burda-forward.de/ctf/c63b4c1a-103a-4a8a-b71f-cfe53b2d6b64.ec5cf2ab-bf7d-422b-bcb4-674723e4d911.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%28174%2C119%29&hash=641d21dc2b379142014c44f7f0ab4994725b09c5106fee032519d88a800a07ae",
    //         "publishedAt": "2025-11-23T13:00:00Z",
    //         "content": "Schon seit dem ersten iPhone begeistert das zugehörige Betriebssystem iOS viele Nutzer weltweit mit elegantem, schlichtem sowie modernem Design. Doch auch die Apple-Entwickler müssen sich manchmal kl… [+2107 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CHIP Online Deutschland"
    //         },
    //         "author": null,
    //         "title": "Weniger Klicks notwendig: Neue EU-Regel könnte Internetnutzung komplett verändern",
    //         "description": "\"Wir verwenden Cookies\" lesen Internetnutzer dauernd und müssen dann entscheiden, ob und welche sie akzeptieren möchten. Die EU-Kommission will das mit ihrem Digitalpaket ändern - und erntet Kritik.",
    //         "url": "https://www.chip.de/news/wifi-dsl-internet/weniger-klicks-notwendig-neue-eu-regel-koennte-internetnutzung-komplett-veraendern_58718cc6-9412-4c03-8110-3ba571ce719b.html",
    //         "urlToImage": "https://quadro.burda-forward.de/ctf/844b87ee-fe41-4330-b5e8-19813cfd818c.ea76f665-d03f-4432-8bcf-48c4de062d4f.jpg?im=RegionOfInterestCrop%3D%281200%2C630%29%2CregionOfInterest%3D%28917%2C565%29&hash=2f932d03fae5fc555cd9c933d9586e8e0fe42294afcd8ce23d104c3b55775bae",
    //         "publishedAt": "2025-11-23T07:02:00Z",
    //         "content": "Internetnutzer sollen nach dem Willen der EU-Kommission künftig weniger Klicks für Cookie-Einstellungen machen müssen. Trotz massiver Kritik von Datenschützern will die Behörde zudem an weitere Digit… [+6210 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Danica Creahan,Liz Kocan",
    //         "title": "Pittsburgh Steelers vs. Chicago Bears NFL game: How to watch, kickoff time, TV channel and more",
    //         "description": "The Chicago Bears play the Pittsburgh Steelers this Sunday. Here's how to tune in to the game.",
    //         "url": "https://sports.yahoo.com/nfl/article/pittsburgh-steelers-vs-chicago-bears-nfl-game-how-to-watch-kickoff-time-tv-channel-and-more-114552425.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Hi11HcnwKgHTywGQhSF41g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2025-11/abec4a40-c4cb-11f0-b59f-a1a3c666b310",
    //         "publishedAt": "2025-11-23T11:45:52Z",
    //         "content": "It's a battle of the two top teams in the northern divisions this Sunday when AFC North leaders the Pittsburgh Steelers visit the NFC North's No. 1 seed (somewhat surprising No. 1 seed) Chicago Bears… [+12848 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Danica Creahan,Liz Kocan",
    //         "title": "Cleveland Browns vs. Las Vegas Raiders NFL game: How to watch, kickoff time, TV channel and more",
    //         "description": "The Cleveland Browns play the Las Vegas Raiders this Sunday. Here's how to tune in to the game.",
    //         "url": "https://sports.yahoo.com/nfl/article/cleveland-browns-vs-las-vegas-raiders-nfl-game-how-to-watch-kickoff-time-tv-channel-and-more-120530564.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/JVaB5LD_PTx6VLwLt6MatA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA7Y2Y9d2VicA--/https://s.yimg.com/os/creatr-uploaded-images/2025-11/3a851800-c54d-11f0-bb5f-74f5dd2102d7",
    //         "publishedAt": "2025-11-23T12:05:30Z",
    //         "content": "Shedeur Sanders will make his first official start for the Cleveland Browns this weekend when the team visits the Las Vegas Raiders on Sunday. Sanders made his long-awaited, but somewhat lackluster, … [+12818 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNET"
    //         },
    //         "author": "Anna Gragert",
    //         "title": "I Tested an AI Food Scanning App for 6 Weeks. This Is What I Learned About Ultra-Processed Foods",
    //         "description": "I also reached out to a registered dietitian to get their thoughts on the app's processed food risk scale and AI chatbot.",
    //         "url": "https://www.cnet.com/health/nutrition/tested-ai-food-scanning-app-6-weeks-what-learned-about-ultra-processed-foods/",
    //         "urlToImage": "https://www.cnet.com/a/img/resize/687435b7e6268afd4120bd4f469ab6b23afd10e6/hub/2025/11/03/c536caec-d20c-43ee-bb30-9853966e8810/zoe-health.jpg?auto=webp&fit=crop&height=675&width=1200",
    //         "publishedAt": "2025-11-23T09:07:00Z",
    //         "content": "Is tracking your food worth it? I spent six weeks testing an AI meal-tracking app to answer that question.\r\nGetty Image/Zooey Liao/CNET\r\nHave you ever looked at food packaging or even a meal on your … [+17603 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Hipersonica.com"
    //         },
    //         "author": "Pedro Gallego",
    //         "title": "Todo en su lugar correcto #21: Lady Gaga - The Fame Monster",
    //         "description": "Qué fama es la buena",
    //         "url": "https://www.hipersonica.com/p/todo-en-su-lugar-correcto-21-lady",
    //         "urlToImage": "https://substackcdn.com/image/fetch/$s_!193R!,w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed2a4d8e-c56f-4478-8ec5-13439b5bef6a_1500x1500.webp",
    //         "publishedAt": "2025-11-23T07:00:38Z",
    //         "content": "(Todo en su lugar correcto es una sección de Hipersónica. Se enfrenta, en cada edición, a uno de los discos elegidos por las empresas y plataformas como canónicos para ver cuánto de verdad hay en que… [+151 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Appleinsider.ru"
    //         },
    //         "author": "Кирилл Пироженко",
    //         "title": "Как настроить вход в веб-версию Альфа Онлайн по лицу или отпечатку пальца",
    //         "description": "Как создать ключ доступа и входить в веб-версию личного кабинета Альфа Банка с помощью Face ID или Touch ID. Пошаговая инструкция для тех, кто не успел скачать приложение из App Store и пользуется Альфа-Онлайн через сайт.",
    //         "url": "https://appleinsider.ru/tips-tricks/kak-nastroit-vxod-v-veb-versiyu-alfa-onlajn-po-licu-ili-otpechatku-palca.html",
    //         "urlToImage": "https://appleinsider.ru/wp-content/uploads/2025/11/alfa_bank_iphone_head-500x263.jpg",
    //         "publishedAt": "2025-11-23T08:00:36Z",
    //         "content": "- App Store. - , - , - - . - , Face ID Touch ID, . , .\r\n - - iPhone. : the-geek.ru\r\n❗️ APPLE \r\n , Face ID Touch ID -, . , . , iPhone , . , - iPhone:\r\n<ol><li>- -;</li> -\r\n<li> , ;</li><li> ;</li><li>… [+185 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Tuttoandroid.net"
    //         },
    //         "author": "Roberto F.",
    //         "title": "Con Android 17 arriverà una funzione che iOS può già vantare",
    //         "description": "In Android 17 sono stati scovati dei riferimenti ad una funzionalità chiamata \"Universal Clipboard\". Ecco tutti i dettagli\nL'articolo Con Android 17 arriverà una funzione che iOS può già vantare proviene da TuttoAndroid.",
    //         "url": "https://www.tuttoandroid.net/news/2025/11/23/android-17-universal-clipboard-1128299/",
    //         "urlToImage": "https://img.tuttoandroid.net/wp-content/uploads/2025/11/Android-17-Cinnamon-Bun-codename-hero-tta.jpg",
    //         "publishedAt": "2025-11-23T10:16:20Z",
    //         "content": "Android può contare su uno strumento per gli appunti che semplifica il copia e incolla di testo o immagini nelle proprie applicazioni preferite ma i suoi contenuti non vengono sincronizzati automatic… [+1923 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Geeky Gadgets"
    //         },
    //         "author": "Roland Hutchinson",
    //         "title": "Has Apple Killed Off The Mac Pro?",
    //         "description": "Apple’s Mac Pro, once regarded as the pinnacle of high-performance modular computing, is gradually losing its prominence within the company’s product lineup. The advent of Apple silicon and the increasing popularity of the Mac Studio signal a strategic pivot …",
    //         "url": "https://www.geeky-gadgets.com/has-apple-killed-off-the-mac-pro/",
    //         "urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2025/11/mac-pro-vs-mac-studio-comparison_optimized.jpg",
    //         "publishedAt": "2025-11-23T10:00:44Z",
    //         "content": "Apples Mac Pro, once regarded as the pinnacle of high-performance modular computing, is gradually losing its prominence within the companys product lineup. The advent of Apple silicon and the increas… [+6384 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Geeky Gadgets"
    //         },
    //         "author": "Roland Hutchinson",
    //         "title": "iOS 26.1 vs iOS 26.2 – Speed, Battery & Performance",
    //         "description": "Apple’s iOS updates consistently generate interest and careful consideration among users. With the release of iOS 26.2, understanding how it compares to iOS 26.1 is essential to determine whether the update aligns with your needs. The video below from iDevice…",
    //         "url": "https://www.geeky-gadgets.com/iios-26-1-vs-ios-26-2/",
    //         "urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2025/11/ios-26-2-vs-26-1-update-comparison_optimized.jpg",
    //         "publishedAt": "2025-11-23T06:00:00Z",
    //         "content": "Apples iOS updates consistently generate interest and careful consideration among users. With the release of iOS 26.2, understanding how it compares to iOS 26.1 is essential to determine whether the … [+5033 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Huffingtonpost.es"
    //         },
    //         "author": "Sergio Coto",
    //         "title": "Sin necesidad de Bluetooth: Apple y Google logran conectar para dar un impulso a la Siri del futuro",
    //         "description": "<![CDATA[<p>El que ha tenido un iPhone entre manos sabe que Siri necesita mejorar. Es como aquella asignatura pendiente que trimestre tras trimestre seguía manteniendo el mismo mensaje: 4, necesita mejorar. Pero Apple quiere poner fin a esto y no me refiero a…",
    //         "url": "https://www.huffingtonpost.es/tecnologia/sin-necesidad-bluetooth-apple-google-logran-conectar-dar-impulso-siri-futuro.html",
    //         "urlToImage": "https://img2.huffingtonpost.es/files/og_thumbnail/uploads/2025/11/20/foto-de-archivo-de-un-telefono-con-el-logo-de-google-y-por-detras-el-logo-de-apple.jpeg",
    //         "publishedAt": "2025-11-23T06:04:20Z",
    //         "content": "El que ha tenido un iPhone entre manos sabe que Siri necesita mejorar. Es como aquella asignatura pendiente que trimestre tras trimestre seguía manteniendo el mismo mensaje: 4, necesita mejorar. Pero… [+3752 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Itc.ua"
    //         },
    //         "author": "Денис Федорук",
    //         "title": "Рецензия на фильм \"Семейный план 2\" / The Family Plan 2",
    //         "description": "С 21 ноября на сервисе Apple TV+ стал доступен к просмотру рождественский комедийный боевик «Семейный план 2» — сиквел ленты 2023 года, что производила впечатление переваренных вареников без начинки. Во втором фильме создатели добавили уютной рождественской т…",
    //         "url": "https://itc.ua/articles/retsenzyya-na-fylm-semejnyj-plan-2-the-family-plan-2/",
    //         "urlToImage": "https://itc.ua/wp-content/uploads/2025/11/w1500_55390603.jpg",
    //         "publishedAt": "2025-11-23T12:00:53Z",
    //         "content": "21 Apple TV+ « 2» 2023 , . , . , .\r\n, , , , , , , , Apple TV+2025IMDb\r\n , . , , .\r\n , . - , . - .\r\n« 2» , , , . - , .\r\n « » . -, . , , , «» . , , .\r\n , « » russian vodka « ». , . - , , Carol of the B… [+169 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Acquiremag.com"
    //         },
    //         "author": "Staff",
    //         "title": "Worth Noting: Wong Kar Wai’s Blossoms Shanghai, the Stahl House goes on sale, Apple shows off its 3D printing process, and Analogue’s 4K Nintendo 64",
    //         "description": "Blossoms Shanghai hits Criterion's streaming service this Monday, a $25 million dollar midcentury modern icon, Apple's 3D printing process, and Analogue's 4K N64 is now available",
    //         "url": "https://acquiremag.com/worth-noting/worth-noting-wong-kar-wais-blossoms-shanghai-the-stahl-house-goes-on-sale-apple-shows-off-its-3d-printing-process-and-analogues-4k-nintendo-64/",
    //         "urlToImage": "https://i0.wp.com/xovvdk.infiniteuploads.cloud/2025/11/blossoms-shanghai.jpeg?fit=1200%2C918&ssl=1",
    //         "publishedAt": "2025-11-23T03:08:40Z",
    //         "content": "This week’s news is led by the imminent arrival of Blossoms Shanghai, Wong Kar Wai’s (In the Mood for Love, Chungking Express) highly anticipated television series. Premiering on the Criterion Channe… [+1474 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ozbargain.com.au"
    //         },
    //         "author": "Dr Stark",
    //         "title": "8BitDo Pro 3 Bluetooth Controller for Switch/Switch 2 - $82 @ Amazon AU",
    //         "description": "Multi-Platform Compatibility - Compatible with Switch 1 & 2, Windows PC, Apple, SteamOS, and Android devices. Swappable Magnetic ABXY Buttons - Easily switch between Switch and Xbox layouts with …",
    //         "url": "https://www.ozbargain.com.au/node/935533",
    //         "urlToImage": "https://files.ozbargain.com.au/n/33/935533l.jpg?h=280cc723",
    //         "publishedAt": "2025-11-23T02:17:06Z",
    //         "content": "All trademarks are owned by their respective owners.OzBargain is an independent community website which has no association with nor endorsement by the respective trademark owners.\r\nCopyright © 2006-2… [+32 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ozbargain.com.au"
    //         },
    //         "author": "JensonSi0215",
    //         "title": "Zorvoxa Wireless Apple Carplay Adapter 2025 for iPhone $49 + Delivery ($0 with Prime/ $59 Spend) @ Amazon",
    //         "description": "About this item 【Lightning-Fast Connectivity】Experience unparalleled speed with Zorvoxa Wireless Apple CarPlay Adapter, powered by advanced 5.8 GHz Wi-Fi, Bluetooth 5.3, and a next-generation …",
    //         "url": "https://www.ozbargain.com.au/node/935606",
    //         "urlToImage": "https://files.ozbargain.com.au/n/06/935606l.jpg?h=0d87aa64",
    //         "publishedAt": "2025-11-23T09:32:48Z",
    //         "content": "This post contains affiliate links. OzBargain might earn commissions when you click through and make purchases. Please see this page for more information.\r\nAbout this itemLightning-Fast ConnectivityE… [+1772 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ozbargain.com.au"
    //         },
    //         "author": "Dennis95",
    //         "title": "Apple AirPods 4 with Active Noise Cancellation ＄206.99 + $10 Shipping @ Hub by Triforce",
    //         "description": "Price is 229.99, after code down to 206.99, + $10 shipping Maybe can do 5% price-beat at officeworks - if your local OW has stock*** (in store only (probably)) part of their Black Friday sale Btw, …",
    //         "url": "https://www.ozbargain.com.au/node/935557",
    //         "urlToImage": "https://files.ozbargain.com.au/n/57/935557x.jpg?h=f62b09d3",
    //         "publishedAt": "2025-11-23T03:54:13Z",
    //         "content": "Price is 229.99, after code down to 206.99, + $10 shipping\r\nMaybe can do 5% price-beat at officeworks - if your local OW has stock*** (in store only (probably))\r\npart of their Black Friday sale\r\nBtw,… [+59 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ozbargain.com.au"
    //         },
    //         "author": "Frank Walker",
    //         "title": "Hydralyte Effervescent Tablets 40-Pack $12.20 ($10.98 Subscribe & Save) + Delivery ($0 with Prime/ $59 Spend) @ Amazon AU",
    //         "description": "Popular deal is back! Orange and Blackcurrant flavours are still in stock. Hydralyte IceBlocks are also on-sale. Apple Black Currant and Lemonade are the only flavours available at $11.00 ($9.90 …",
    //         "url": "https://www.ozbargain.com.au/node/935588",
    //         "urlToImage": "https://files.ozbargain.com.au/n/88/935588l.jpg?h=5989ab1b",
    //         "publishedAt": "2025-11-23T06:56:37Z",
    //         "content": "This post contains affiliate links. OzBargain might earn commissions when you click through and make purchases. Please see this page for more information.\r\nPopular deal is back! Orange and Blackcurra… [+367 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Ozbargain.com.au"
    //         },
    //         "author": "flipper92",
    //         "title": "Apple iPhone 17 Pro 256GB $1,987, iPhone 17 Pro Max 512GB $2,587 @ Hub by Triforce (PB @ Officeworks $1,887.65 / $2457.65)",
    //         "description": "Only $10 less than iPhone 17 Pro 256GB Silver - Officeworks but enough to trigger the 5% Price Beat to bring it down to $1,887.65. iPhone 17 Pro 512GB: Hub by Triforce $2,387 PB @ Officeworks $2,397 …",
    //         "url": "https://www.ozbargain.com.au/node/935514",
    //         "urlToImage": "https://files.ozbargain.com.au/n/14/935514x.jpg?h=80e52b65",
    //         "publishedAt": "2025-11-23T00:36:27Z",
    //         "content": "Only $10 less than iPhone 17 Pro 256GB Silver - Officeworks but enough to trigger the 5% Price Beat to bring it down to $1,887.65.\r\niPhone 17 Pro 512GB: Hub by Triforce $2,387 PB @ Officeworks $2,397… [+98 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "mobiFlip.de"
    //         },
    //         "author": "Oliver Schwuchow",
    //         "title": "Mein Tipp der Woche: Apple iPhone 17 Pro (Max) Wallpaper",
    //         "description": "Es gibt mal wieder eine Empfehlung für einen Wallpaper und es ist mal wieder von Basic Apple Guy, der in den letzten zwei Monaten an einem neuen Wallpaper für die …",
    //         "url": "https://www.mobiflip.de/mein-tipp-der-woche-apple-iphone-17-pro-max-wallpaper/",
    //         "urlToImage": "https://i0.wp.com/www.mobiflip.de/wp-content/uploads/2025/11/apple-iphone-17-pro-intern-wallpaper.jpg?fit=1600%2C1100&ssl=1",
    //         "publishedAt": "2025-11-23T09:00:12Z",
    //         "content": "Es gibt mal wieder eine Empfehlung für einen Wallpaper und es ist mal wieder von Basic Apple Guy, der in den letzten zwei Monaten an einem neuen Wallpaper für die iPhones gearbeitet hat. Dieser ist s… [+1283 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Toodaylab.com"
    //         },
    //         "author": "吴诗源",
    //         "title": "今日消费资讯：汉堡黄新专辑《少女，飞》发布、On 广州天环店开幕",
    //         "description": "汉堡黄新专辑《少女，飞》发布11 月 20 日，汉堡黄的新专辑《少女，飞》正式上线，目前已经可以通过 Apple Music、QQ 音乐、网易云音乐、酷我音乐等平台收听。新专辑收录了 10 首歌，共 37 分钟。这是在 2023 年 12 月 24 日发布的《BURGER POP》后汉堡黄的第二张全长专辑。同时随着新专辑发布，汉堡黄的全国巡演已经开启，目前正在进行中。《阿凡达：火与烬》IMAX 专属海报发布11 月 21 日，IMAX 官方发布了《阿凡达：火与烬》（Avatar: Fire and Ash）的 I…",
    //         "url": "https://www.toodaylab.com/83807",
    //         "urlToImage": null,
    //         "publishedAt": "2025-11-23T00:30:00Z",
    //         "content": "11 20 Apple MusicQQ \r\n10 37 2023 12 24 BURGER POP\r\nIMAX \r\n11 21 IMAX Avatar: Fire and Ash IMAX \r\n12 19 195 3 15 \r\n 2D3DCINITYIMAX 3DCGS Dolby Cinema IMAX 2D\r\nOn \r\n11 21 On On \r\nOn On x Sky High Farm … [+216 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBM (Comic Book Movie)"
    //         },
    //         "author": "DanielKlissmman",
    //         "title": "HBO Boss Admits “Max” Rebranding Was A Mistake; Reveals Being Unsure What A “Max Original” Actually Was",
    //         "description": "HBO Max CEO Casey Bloys has opened up about the company’s “Max” rebranding, acknowledging it as a misstep, and revealing there was internal doubt about what exactly was an “HBO Max Original.”",
    //         "url": "https://comicbookmovie.com/tv/hbo/hbo-boss-admits-max-rebranding-was-a-mistake-reveals-being-unsure-what-a-max-original-actually-was-a225056",
    //         "urlToImage": "https://comicbookmovie.com/images/articles/banners/hbo-boss-admits-max-rebranding-was-a-mistake-reveals-being-unsure-what-a-max-original-actually-was-ab225056.jpg",
    //         "publishedAt": "2025-11-23T00:00:00Z",
    //         "content": "HBO has been a renowned brand for many years. Upon Netflix coming along and essentially disrupting the entertainment industry's traditional business model, multiple studios scrambled to put together … [+3649 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "ZDNet"
    //         },
    //         "author": "Maria Diaz",
    //         "title": "This wall-mounted smart calendar can get you organized before the new year (and it's on sale)",
    //         "description": "In my ongoing effort to stay organized, the 15-inch Skylight Calendar smart display has made the biggest difference. It's 22% off for Black Friday.",
    //         "url": "https://www.zdnet.com/home-and-office/smart-home/this-wall-mounted-smart-calendar-can-get-you-organized-before-the-new-year-and-its-on-sale/",
    //         "urlToImage": "https://www.zdnet.com/a/img/resize/ba8c054e49db36b1b689fcb04e48123df46b5862/2024/04/29/9ba1c1d8-e999-49ed-a6a9-55a81ebc7f92/2.jpg?auto=webp&fit=crop&height=675&width=1200",
    //         "publishedAt": "2025-11-23T00:38:39Z",
    //         "content": "Getting organized is a never-ending battle for me. As a self-proclaimed \"organized person,\" I like controlling my schedule, surroundings, and everything in between. But every time I succeed in gettin… [+5779 chars]"
    //     }
    // ]
    
static defaultProps = {
    country : "us",
    pageSize: 8,
    category: 'general',
}
static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string,
}

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17dde361b56142ea953a8e5e48db10ee&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults, 
            loading: false })
    }

    handlePrevClick = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17dde361b56142ea953a8e5e48db10ee&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        console.log("Next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=17dde361b56142ea953a8e5e48db10ee&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{margin: '35px 0px'}}>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    }
                    )}

                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type='button' className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
