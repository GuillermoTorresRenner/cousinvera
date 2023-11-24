const items = [
  {
    title: "Ficus Elastica",
    title2: "Ficus elastica",
    description:
      "El Ficus Elastica, también conocido como gomero o ficus robusta, es una planta de interior popular. Tiene hojas grandes y brillantes que aportan un toque de verde a cualquier espacio.",
    category: "plantas-interior",
    stock: 15,
    price: 10000,
    image: "https://mekero.cl/cdn/shop/files/GOMERO1_2400x.png?v=1685134891",
  },
  {
    title: "Espatifilo",
    title2: "Spathiphyllum",
    description:
      "El Espatifilo, o lirio de la paz, es una planta de interior conocida por sus elegantes hojas verdes y flores blancas. Además de su belleza, es una planta purificadora de aire.",
    category: "plantas-interior",
    stock: 20,
    price: 7000,
    image:
      "https://tiendachagual.cl/wp-content/uploads/2023/09/P00P004CM1.jpg.webp",
  },
  {
    title: "Sansevieria Trifasciata",
    title2: "Sansevieria trifasciata",
    description:
      "La Sansevieria Trifasciata, también llamada lengua de suegra, es una planta resistente y fácil de cuidar. Sus hojas son erectas y puntiagudas, aportando un toque moderno a la decoración interior.",
    category: "plantas-interior",
    stock: 34,
    price: 12000,
    image:
      "https://www.elmueble.com/medio/2018/12/18/sansevieria_c00b6264_674x674.jpg",
  },
  {
    title: "Cactus de Navidad",
    title2: "Schlumbergera vulgaris",
    description:
      "El Cactus de Navidad es una planta de interior que florece en invierno, produciendo hermosas flores en tonos rojos, rosados o blancos. Es fácil de cuidar y añade color durante la temporada festiva.",
    category: "plantas-interior",
    stock: 29,
    price: 10000,
    image:
      "https://www.cambridgebee.com/cdn/shop/products/6E4A4DCC-7475-4FDB-91BE-F44622543B25_5000x.jpg?v=1678525326",
  },
  {
    title: "Pothos",
    title2: "Epipremnum aureum",
    description:
      "El Pothos es una planta colgante de interior con hojas verdes y doradas. Es conocida por ser resistente y fácil de cuidar, además de ser efectiva para purificar el aire.",
    stock: 12,
    price: 8000,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/tropical-epipremnum-aureum-marble-queen-pothos-royalty-free-image-1684353562.jpg?crop=0.669xw:1.00xh;0.141xw,0&resize=1200:*",
  },
  {
    title: "Monstera Deliciosa",
    title2: "Monstera deliciosa",
    description:
      "La Monstera Deliciosa es una planta de interior con hojas fenestradas y un aspecto tropical. Es apreciada por su belleza única y su facilidad de cuidado.",
    category: "plantas-interior",
    stock: 8,
    price: 17000,
    image:
      "https://lepotit.cl/cdn/shop/products/Monstera-L_860x.jpg?v=1664975100",
  },
  {
    title: "Cala",
    title2: "Zantedeschia sp",
    description:
      "La Cala es una planta de interior con elegantes flores blancas en forma de embudo. Requiere cuidados moderados y es una opción encantadora para decorar espacios interiores.",
    category: "plantas-interior",
    stock: 3,
    price: 5000,
    image: "https://plantme.cl/cdn/shop/products/IMG_1981.jpg?v=1662488943",
  },
  {
    title: "Alocasia Polly",
    title2: "Alocasia amazonica",
    description:
      "La Alocasia Polly es una planta de interior con hojas verdes y puntiagudas. Su aspecto único agrega un toque de exotismo a cualquier hogar.",
    category: "plantas-interior",
    stock: 5,
    price: 12000,
    image:
      "https://14881ef6.rocketcdn.me/wp-content/uploads/2022/01/alocasia-amazonica-polly-01.jpg",
  },
  {
    title: "Orquídea Phalaenopsis",
    title2: "Phalaenopsis",
    description:
      "La Orquídea Phalaenopsis es una planta de interior conocida por sus elegantes y duraderas flores. Es una opción popular para regalos y decoración.",
    category: "plantas-interior",
    stock: 2,
    price: 20000,
    image:
      "https://cdn11.bigcommerce.com/s-2xff4bean2/images/stencil/1280x1280/products/124/483/roja_punteada-PhotoRoom__24777.1664212822.png?c=1",
  },
  {
    title: "Bambú de la Suerte",
    title2: "Dracaena sanderiana",
    description:
      "El Bambú de la Suerte es una planta de interior asociada con la prosperidad y la buena fortuna. Es fácil de cuidar y agrega un toque de elegancia a cualquier espacio.",
    category: "plantas-interior",
    stock: 10,
    price: 12000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lucky_bamboo_spiral_houseplant.jpg/220px-Lucky_bamboo_spiral_houseplant.jpg",
  },
  {
    title: "Peperomia",
    title2: "Peperomia",
    description:
      "La Peperomia es una planta de interior con hojas gruesas y atractivas. Viene en diversas variedades y es una excelente opción para espacios pequeños.",
    category: "plantas-interior",
    stock: 6,
    price: 12000,
    image:
      "https://cdnx.jumpseller.com/vivero-j-v/image/31246950/resize/1200/1200?1674992400",
  },
  {
    title: "Drácena Marginata",
    title2: "Dracaena marginata",
    description:
      "La Drácena Marginata es una planta de interior con hojas delgadas y rayadas. Es resistente y agrega un toque de altura y elegancia a cualquier habitación.",
    category: "plantas-interior",
    stock: 2,
    price: 16000,
    image: "https://www.clarin.com/img/2021/04/11/ZR-MfgifD_720x0__1.jpg",
  },
  {
    title: "Tradescantia",
    title2: "Tradescantia spathacea",
    description:
      "La Tradescantia es una planta de interior con hojas variegadas y colgantes. Es fácil de cuidar y añade un toque de color a cualquier estancia.",
    category: "plantas-interior",
    stock: 28,
    price: 5000,
    image:
      "https://milagrosaplantas.cl/wp-content/uploads/2021/05/thumbnail_ISIMG-725885-600x800.jpg",
  },
  {
    title: "Aloe Vera",
    title2: "Aloe barbadensis miller",
    description:
      "El Aloe Vera es una planta suculenta conocida por sus propiedades medicinales. Es fácil de cuidar y puede ser una adición útil para el cuidado de la piel.",
    category: "plantas-interior",
    stock: 13,
    price: 8000,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1281704286-642da5c1412bc.jpg?crop=0.752xw:1.00xh;0.104xw,0&resize=1200:*",
  },
  {
    title: "Cinta o Mala madre",
    title2: "Chlorophytum comosum",
    description:
      "La Cinta o Mala madre es una planta de interior con hojas arqueadas y franjas blancas. Es resistente y es conocida por purificar el aire.",
    category: "plantas-interior",
    stock: 17,
    price: 5000,
    image:
      "https://mimercadito.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/07/chlorophytum-comosum-003-900x900.jpg",
  },

  {
    title: "Hiedra Inglesa",
    title2: "Hedera helix",
    description:
      "La Hiedra Inglesa es una planta colgante de interior con hojas verdes en forma de corazón. Es ideal para colgar en macetas o cestas colgantes.",
    category: "plantas-exterior",
    stock: 15,
    price: 5000,
    image:
      "https://www.aprilplants.com/cdn/shop/products/Hedera-Helix-verde-19o_comprar-plantas-online_plantas-de-interior_colgante_decoracion_4_1024x.jpg?v=1618261911",
  },
  {
    title: "Calathea Orbifolia",
    title2: "Calathea orbifolia",
    description:
      "La Calathea Orbifolia es una planta de interior con hojas redondas y patrones únicos. Es conocida por su belleza ornamental y se adapta bien a entornos de baja luz.",
    category: "plantas-interior",
    stock: 6,
    price: 12000,
    image:
      "https://falabella.scene7.com/is/image/Falabella/15368345_1?wid=800&hei=800&qlt=70",
  },
  {
    title: "Crotón",
    title2: "Euphorbiaceae sp",
    description:
      "El Crotón es una planta de interior con hojas coloridas y llamativas. Requiere luz brillante y es una excelente opción para agregar color a cualquier habitación",
    category: "plantas-interior",
    stock: 14,
    price: 10000,
    image: "https://viverochillan.cl/wp-content/uploads/2021/03/croton.jpg",
  },
  {
    title: "Rosal",
    title2: "Rosa spp.",
    description:
      "El rosal es un arbusto ornamental conocido por sus hermosas flores en una variedad de colores. Es popular en jardines por su fragancia y atractivo visual.",
    category: "plantas-exterior",
    stock: 12,
    price: 10000,
    image:
      "https://www.multiplant.cl/wp-content/uploads/2020/03/Rosal-Pitimini-Rosa-Nana-Vivero-Multiplant-350x467.jpg",
  },
  {
    title: "Geranio",
    title2: "Pelargonium spp.",
    description:
      "El geranio es una planta de floración colorida que se cultiva comúnmente en jardines y macetas. Sus flores vienen en varios tonos y tienen un aroma distintivo.",
    category: "plantas-exterior",
    stock: 28,
    price: 2000,
    image:
      "https://www.elmueble.com/medio/2023/04/27/geranios-pack_ac1e6891_230427085652_1000x808.jpg",
  },
  {
    title: "Hortensia",
    title2: "Hydrangea spp.",
    description:
      "La hortensia es apreciada por sus grandes inflorescencias en forma de bola y su capacidad para cambiar de color según el pH del suelo. Es una opción popular en paisajismo.",
    category: "plantas-exterior",
    stock: 30,
    price: 3000,
    image:
      "https://static.eldiario.es/clip/f45386e5-dba5-476f-8448-6d9e7cc5cf30_16-9-discover-aspect-ratio_default_0.jpg",
  },
  {
    title: "Lavanda",
    title2: "Lavandula spp.",
    description:
      "La lavanda es una planta aromática con hojas estrechas y flores moradas. Se utiliza comúnmente en jardines de hierbas y emite un agradable aroma.",
    category: "plantas-exterior",
    stock: 11,
    price: 6000,
    image:
      "https://images.hola.com/imagenes/decoracion/20210415187823/cultivar-lavanda-plantas-exterior-mc/0-940-990/cultivar-lavanda-3-a.jpg",
  },
  {
    title: "Azalea",
    title2: "Rhododendron spp.",
    description:
      "Las azaleas son arbustos de floración vistosa, con flores que varían en color. Son populares en jardines de primavera debido a su espectáculo de colores.",
    category: "plantas-exterior",
    stock: 5,
    price: 5000,
    image:
      "https://www.elmueble.com/medio/2023/10/19/consejos-para-cultivar-azaleas-en-macetas_b96023a7_231019071208_900x900.jpg",
  },
  {
    title: "Crisantemo",
    title2: "Chrysanthemum spp.",
    description:
      "Los crisantemos son plantas florales populares en otoño, con flores en una variedad de formas y colores. Se utilizan comúnmente como decoración de temporada.",
    category: "plantas-exterior",
    stock: 35,
    price: 2000,
    image: "https://viverochillan.cl/wp-content/uploads/2020/12/crisantemo.jpg",
  },
  {
    title: "Bugambilia",
    title2: "Bougainvillea spp.",
    description:
      "La bugambilia es una trepadora con flores vibrantes y hojas llamativas. Es ideal para cubrir pérgolas y enrejados.",
    category: "plantas-exterior",
    stock: 14,
    price: 6000,
    image:
      "https://media.admagazine.com/photos/61f0e1a0089751617cd2fe3e/1:1/w_1919,h_1919,c_limit/bugambilia.jpg",
  },
  {
    title: "Helecho Macho",
    title2: "Dryopteris filix-mas",
    description:
      "El helecho macho es un helecho de hojas verdes que agrega un toque de follaje exuberante a áreas sombreadas del jardín.",
    category: "plantas-exterior",
    stock: 20,
    price: 5000,
    image:
      "https://cdn.shopify.com/s/files/1/0086/2519/3040/products/helechoboston_480x480.jpg?v=1619052136",
  },
  {
    title: "Jazmín",
    title2: "Jasminum spp.",
    description:
      "El jazmín es una trepadora con fragantes flores blancas o amarillas. Su aroma dulce lo hace popular en jardines y patios.",
    category: "plantas-exterior",
    stock: 9,
    price: 12000,
    image:
      "https://resizer.glanacion.com/resizer/v2/jazmin-del-74V2YPC6QJDQDI4LXJC6STPR4E.jpg?auth=c968453afdcd1b02348889434b89f675c8114149c83b8a8850e0779bf252f659&width=1920&height=1280&quality=70&smart=true",
  },
  {
    title: "Clavel del Aire",
    title2: "Tillandsia spp.",
    description:
      "El clavel del aire es una planta epífita que no requiere tierra para crecer. Tiene hojas plateadas y es ideal para decoración aérea.",
    category: "plantas-exterior",
    stock: 32,
    price: 6000,
    image:
      "https://orchidrepublic.com/cdn/shop/articles/Tillandsia-air-plant-in-the-nature.-907527670_6000x4000_d864a764-e518-4113-9f26-9df267f478f8_grande.jpeg?v=1528995586",
  },
  {
    title: "Azucena",
    title2: "Lilium spp.",
    description:
      "Las azucenas son plantas bulbosas con flores grandes y vistosas en una variedad de colores. Se cultivan comúnmente en jardines perennes.",
    category: "plantas-exterior",
    stock: 20,
    price: 4000,
    image:
      "https://images.hola.com/imagenes/decoracion/20220105202353/cultivo-azucena-mc/1-37-539/cultivo-azucena-t.jpg",
  },
  {
    title: "Hibisco",
    title2: "Hibiscus spp.",
    description:
      "El hibisco es conocido por sus grandes flores y es una planta tropical que agrega color a jardines y patios.",
    category: "plantas-exterior",
    stock: 6,
    price: 7000,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_699579-MLC45761579276_042021-O.webp",
  },
  {
    title: "Pino",
    title2: "Pinus spp.",
    description:
      "Los pinos son árboles de hoja perenne con agujas que añaden estructura y verde durante todo el año al paisaje.",
    category: "plantas-exterior",
    stock: 15,
    price: 12000,
    image:
      "https://www.grupohijuelas.cl/wp-content/uploads/2018/02/Pino_elwoodii_m24-1.jpg",
  },
  {
    title: "Tomate",
    title2: "Solanum lycopersicum",
    description:
      "Los tomates, aunque comúnmente cultivados en huertos, también pueden ser parte de un jardín de exterior. Son plantas anuales con frutos comestibles.",
    category: "plantas-exterior",
    stock: 55,
    price: 3000,
    image:
      "https://i0.wp.com/chilehuerta.cl/wp-content/uploads/2017/01/tomates-organicos.jpg?resize=800%2C500&ssl=1",
  },
  {
    title: "Bambú",
    title2: "Bambusoideae spp.",
    description:
      "El bambú es una planta versátil de rápido crecimiento que agrega altura y estructura a jardines. Viene en muchas variedades.",
    category: "plantas-exterior",
    stock: 1,
    price: 12000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrYqJDWU8bJ2q9_2Zg6xxesUwuq9KaDbmYTQ6FgvGG6qjY8wsN85OwOBjmFytinu0ceW0&usqp=CAU",
  },
  {
    title: "Cerezo Ornamental",
    title2: "Prunus serrulata",
    description:
      "El cerezo ornamental es conocido por sus hermosas flores rosadas o blancas en primavera. Es un árbol ornamental popular en jardinería.",
    category: "plantas-exterior",
    stock: 5,
    price: 25000,
    image:
      "https://paramijardin.s3.fr-par.scw.cloud/2019/06/DSCN3985-800x4451-800x445.jpg",
  },
  {
    title: "Echeveria",
    title2: "Echeveria spp.",
    description:
      "Las Echeverias son suculentas con hojas en forma de roseta. Vienen en una variedad de colores y son populares en arreglos de jardinería y macetas.",
    category: "plantas-suculentas",
    stock: 10,
    price: 7000,
    image:
      "https://acdn.mitiendanube.com/stores/002/378/115/products/7bf279c2-65c8-41f0-b51c-b7829578992b1-cf6663529b80e8c59316809697971899-640-0.jpeg",
  },
  {
    title: "Crassula Ovata",
    title2: "Crassula ovata",
    description:
      "La Crassula Ovata, también conocida como Jade, es una suculenta con hojas gruesas y suculentas. Es fácil de cuidar y se asocia con la buena suerte.",
    category: "plantas-suculentas",
    stock: 25,
    price: 12000,
    image:
      "https://mimercadito.s3.sa-east-1.amazonaws.com/wp-content/uploads/2023/08/crassula-ovata-gollum-003-900x900.jpg",
  },
  {
    title: "Haworthia",
    title2: "Haworthia spp.",
    description:
      "Las Haworthias son suculentas compactas con hojas puntiagudas dispuestas en rosetas. Son ideales para interiores y requieren luz indirecta.",
    category: "plantas-suculentas",
    stock: 22,
    price: 6000,
    image:
      "https://eljardinista.cl/cdn/shop/files/WhatsAppImage2023-06-19at17.04.36.jpg?v=1687209516",
  },
  {
    title: "Sedum",
    title2: "Sedum spp.",
    description:
      "Los Sedums son suculentas resistentes y de bajo mantenimiento. Muchas variedades son ideales para cubrir suelos y rocallas en jardines.",
    category: "plantas-suculentas",
    stock: 12,
    price: 6000,
    image:
      "https://cactusandes.cl/cdn/shop/products/sedum-lucidum-639167.jpg?v=1684434682&width=1946",
  },
  {
    title: "Sempervivum",
    title2: "Sempervivum spp.",
    description:
      "Los Sempervivums, también conocidos como Siemprevivas, forman rosetas densas y vienen en una variedad de colores. Son resistentes a condiciones adversas.",
    category: "plantas-suculentas",
    stock: 7,
    price: 6000,
    image:
      "https://eljardinista.cl/cdn/shop/files/WhatsAppImage2023-06-19at17.03.41.jpg?v=1687209203",
  },
  {
    title: "Agave",
    title2: "Agave spp.",
    description:
      "Los Agaves son suculentas con hojas gruesas y puntiagudas dispuestas en rosetas. Algunas variedades son conocidas por su uso en la producción de tequila.",
    category: "plantas-suculentas",
    stock: 3,
    price: 12000,
    image:
      "https://planetdesert.com/cdn/shop/files/Agave-americana-azul-shop_1400x.jpg?v=1683753266",
  },
  {
    title: "Kalanchoe",
    title2: "Kalanchoe spp.",
    description:
      "Las Kalanchoes son suculentas con hojas carnosas y flores brillantes. Son populares en interiores y exteriores y requieren luz brillante.",
    category: "plantas-suculentas",
    stock: 18,
    price: 8000,
    image:
      "https://artecultivos.cl/cdn/shop/products/Arte_Cultivos-117_600x600.jpg?v=1537717920",
  },
  {
    title: "Aeonium",
    title2: "Aeonium spp.",
    description:
      "Los Aeoniums son suculentas arbustivas con rosetas grandes y hojas brillantes. Algunas variedades cambian de color con la exposición al sol.",
    category: "plantas-suculentas",
    stock: 22,
    price: 4000,
    image:
      "https://vitaflor.cl/wp-content/uploads/2021/08/Aeonium-Kiwi-2-12.jpg",
  },
  {
    title: "Gasteria",
    title2: "Gasteria spp.",
    description:
      "Las Gasterias son suculentas con hojas gruesas y suculentas que a menudo tienen manchas. Son resistentes y adecuadas para interiores.",
    category: "plantas-suculentas",
    stock: 13,
    price: 8000,
    image:
      "https://www.casakaru.cl/cdn/shop/products/Gasteria_1200x1200.png?v=1647366204",
  },
  {
    title: "Cempasúchil",
    title2: "Echeveria pulvinata",
    description:
      "El Sempasúchil es una suculenta con hojas aterciopeladas en tonos rojos y naranjas. Es ideal para decorar jardines y macetas.",
    category: "plantas-exterior",
    stock: 25,
    price: 12000,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    title: "Aptenia",
    title2: "Aptenia spp.",
    description:
      "La Aptenia, también conocida como Corazón Sangrante, es una suculenta rastrera con flores brillantes. Es adecuada para cubrir suelos y cestas colgantes.",
    category: "plantas-suculentas",
    stock: 25,
    price: 12000,
    image: "",
  },
  {
    title: "Aeonium Black Rose",
    title2: "Aeonium arboreum",
    description:
      "El Aeonium Black Rose es una suculenta con rosetas compactas de hojas oscuras. Agrega un toque distintivo a arreglos de jardinería.",
    category: "plantas-suculentas",
    stock: 17,
    price: 8000,
    image:
      "https://www.parati.com.ar/wp-content/uploads/2021/11/APTENIA-DESTACADA.jpg",
  },
  {
    title: "Hens and Chicks",
    title2: "Sempervivum tectorum",
    description:
      'Hens and Chicks, o Siempreviva Común, forma rosetas de rosetas pequeñas llamadas "polluelos". Son resistentes y crecen bien en suelos secos.',
    category: "plantas-suculentas",
    stock: 25,
    price: 12000,
    image: "",
  },
  {
    title: "Senecio Rowleyanus",
    title2: "Senecio rowleyanus",
    description:
      "El Senecio Rowleyanus, también conocido como Collar de Perlas, es una suculenta con tallos colgantes que llevan pequeñas esferas que se asemejan a perlas.",
    category: "plantas-suculentas",
    stock: 6,
    price: 4000,
    image:
      "https://www.decorgreenchile.cl/wp-content/uploads/2022/08/SENESIO-ROWLEYANUS.jpg",
  },
  {
    title: "Aristaloe Aristata",
    title2: "Aristaloe aristata",
    description:
      "La Aristaloe Aristata es una suculenta parecida al Aloe Vera, con hojas dentadas y puntiagudas. Es resistente y requiere poco mantenimiento.",
    category: "plantas-suculentas",
    stock: 21,
    price: 6000,
    image:
      "https://bohoblooms.co.za/wp-content/uploads/2022/08/Aloe-aristata.jpeg",
  },

  {
    title: "Semillas Tomate 5g",
    title2: "Solanum lycopersicum",
    description:
      "El tomate es una hortaliza de semilla ampliamente cultivada, conocida por su versatilidad en la cocina. Viene en una variedad de colores y formas.",
    category: "semillas",
    stock: 65,
    price: 2000,
    image:
      "https://www.semilleriasanalfonso.cl/wp-content/uploads/2020/11/tomate-cherry-2020.png",
  },
  {
    title: "Semillas Zanahoria 5g",
    title2: "Daucus carota",
    description:
      "La zanahoria es una raíz comestible que viene en diferentes variedades. Es rica en betacarotenos y se utiliza en una variedad de platos.",
    category: "semillas",
    stock: 80,
    price: 2000,
    image:
      "https://www.apicola.cl/wp-content/uploads/2019/06/SEMILLAS_DE_ZANAHORIAS.jpg",
  },
  {
    title: "Semillas Lechuga 5g",
    title2: "Lactuca sativa",
    description:
      "La lechuga es una hortaliza de hojas verdes que se utiliza comúnmente en ensaladas y sándwiches. Viene en varias variedades, como la lechuga romana y la iceberg.",
    category: "semillas",
    stock: 25,
    price: 2000,
    image:
      "https://www.apicola.cl/wp-content/uploads/2019/06/SEMILLAS_DE_LECHUGA_MILANESA.jpg",
  },
  {
    title: "Semillas Espinaca 5g",
    title2: "Spinacia oleracea",
    description:
      "La espinaca es una hortaliza de hojas verdes rica en nutrientes como hierro y calcio. Se utiliza en ensaladas, sopas y platos salteados.",
    category: "semillas",
    stock: 25,
    price: 12000,
    image:
      "https://cdnx.jumpseller.com/camelia-y-lavanda/image/12659928/SEMILLAS_DE_ESPINACA.jpg?1626122089",
  },
  {
    title: "Semillas Brócoli 5g",
    title2: "Brassica oleracea var. italica",
    description:
      "El brócoli es una hortaliza de la familia de las crucíferas, conocida por sus cabezas verdes compactas. Es rico en nutrientes y se puede consumir crudo o cocido.",
    category: "semillas",
    stock: 46,
    price: 2000,
    image:
      "https://www.plantiqueria.cl/wp-content/uploads/2021/04/Broccoli-Waltham-sobre.jpg",
  },
  {
    title: "Semillas Cebolla 5g",
    title2: "Allium cepa",
    description:
      "La cebolla es una hortaliza bulbosa utilizada en una variedad de platos. Viene en diferentes variedades, como la cebolla blanca, amarilla y roja.",
    category: "semillas",
    stock: 43,
    price: 2000,
    image:
      "https://www.apicola.cl/wp-content/uploads/2019/06/SEMILLAS_DE_CEBOLLA_VALENCIANA.jpg",
  },
  {
    title: "Semillas Pimiento 5g",
    title2: "Capsicum spp.",
    description:
      "Los pimientos, ya sean dulces o picantes, son hortalizas de semilla de la familia de las solanáceas. Son versátiles y se utilizan en diversas preparaciones culinarias.",
    category: "semillas",
    stock: 25,
    price: 12000,
    image:
      "https://www.semilleriasanalfonso.cl/wp-content/uploads/2020/11/pim-morrron.jpg",
  },
  {
    title: "Semillas Calabacín 5g",
    title2: "Cucurbita pepo",
    description:
      "El calabacín es una hortaliza de la familia de las cucurbitáceas, conocida por su sabor suave. Se puede cocinar de varias maneras, como asado, salteado o en sopas.",
    category: "semillas",
    stock: 35,
    price: 3000,
    image:
      "https://huertosalma.cl/wp-content/uploads/2020/06/Calabac%C3%ADn-Surtido.jpg",
  },
  {
    title: "Semillas Pepino 5g",
    title2: "Cucumis sativus",
    description:
      "El pepino es una hortaliza refrescante y jugosa, utilizada comúnmente en ensaladas. Se cultiva en variedades para encurtir o para consumo fresco.",
    category: "semillas",
    stock: 55,
    price: 2000,
    image:
      "https://www.apicola.cl/wp-content/uploads/2019/06/SEMILLAS_DE_PEPINO_MARKETMORE.jpg",
  },
  {
    title: "Semillas Tomate Cherry 5g",
    title2: "Solanum lycopersicum var. cerasiforme",
    description:
      "Los cherry tomates son mini tomates dulces y jugosos que se consumen frescos. Son populares como aperitivo y en ensaladas.",
    category: "semillas",
    stock: 75,
    price: 2000,
    image:
      "https://www.apicola.cl/wp-content/uploads/2019/06/SEMILLAS_DE_TOMATE_COCKTAIL.jpg",
  },
  {
    title: "Semillas Puerro 5g",
    title2: "Allium porrum",
    description:
      "El puerro es una hortaliza de la familia de las Alliaceae, conocida por su sabor suave y aromático. Se utiliza en sopas, guisos y platos salteados.",
    category: "semillas",
    stock: 28,
    price: 2000,
    image:
      "https://ferosor.cl/1802-large_default/semilla-de-puerro-anasac-sobre-5-gr.jpg",
  },
  {
    title: "Semillas Rábano 2g",
    title2: "Raphanus sativus",
    description:
      "El rábano es una raíz comestible con un sabor picante. Viene en diferentes variedades, desde el rábano rojo hasta el blanco, y se utiliza en ensaladas y como acompañamiento.",
    category: "semillas",
    stock: 17,
    price: 2000,
    image:
      "https://sodimac.scene7.com/is/image/SodimacCL/3003841_01?wid=800&hei=800&qlt=70",
  },
  {
    title: "Semillas Coliflor 1g",
    title2: "Brassica oleracea var. botrytis",
    description:
      "La coliflor es una hortaliza de la familia de las crucíferas, conocida por sus cabezas compactas y blancas. Se puede cocinar de diversas maneras, como al vapor o asada.",
    category: "semillas",
    stock: 42,
    price: 2000,
    image:
      "https://sodimac.scene7.com/is/image/SodimacCL/6805507_01?wid=800&hei=800&qlt=70",
  },
  {
    title: "Semillas Remolacha 5g",
    title2: "Beta vulgaris",
    description:
      "La remolacha es una raíz dulce y colorida utilizada en ensaladas y como guarnición. Puede ser de color rojo, amarillo o blanco.",
    category: "semillas",
    stock: 16,
    price: 2000,
    image:
      "https://www.anasacjardin.cl/wp-content/uploads/2014/01/SEMILLAS_DE_BETARRAGA.jpg",
  },

  {
    title: "Semillas Escarola 5g",
    title2: "Cichorium endivia var. latifolium",
    description:
      "La escarola es una hortaliza de hojas verdes amargas y rizadas, utilizada en ensaladas y platos cocidos. Es rica en nutrientes como la vitamina A y fibra.",
    category: "semillas",
    stock: 72,
    price: 2000,
    image:
      "https://www.anasacjardin.cl/wp-content/uploads/2014/01/Nueva-Semilla-Lechuga-Escarola_300.jpg",
  },
  {
    title: "Semillas Nabo 5g",
    title2: "Brassica rapa var. napobrassica",
    description:
      "El nabo es una raíz comestible con un sabor ligeramente picante. Se utiliza en sopas, guisos y purés.",
    category: "semillas",
    stock: 62,
    price: 2000,
    image: "https://rocaverde.cl/wp-content/uploads/2021/04/Semillas_Nabo.jpg",
  },
  {
    title: "Espinaca Baby",
    title2: "Spinacia oleracea",
    description:
      "La espinaca baby es una variedad joven y tierna de espinaca, perfecta para ensaladas y platos ligeros. Es rica en nutrientes como hierro y vitaminas.",
    category: "semillas",
    stock: 61,
    price: 4000,
    image:
      "https://www.cocopot.es/15917-thickbox_default/semillas-mix-baby-leaves-espinaca-cebollino-rucula-y-acelga.jpg",
  },
  {
    title: "Semillas Col de Bruselas 5g",
    title2: "Brassica oleracea var. gemmifera",
    description:
      "La col de Bruselas es una hortaliza de la familia de las crucíferas, conocida por sus pequeñas cabezas en forma de botón. Se cocina de diversas maneras, como asada o salteada.",
    category: "semillas",
    stock: 44,
    price: 2000,
    image:
      "https://www.lamanoverde.cl/wp-content/uploads/2021/05/encinas-repollito-bruselas.jpg",
  },
  {
    title: "Jardinería en espacios pequeños",
    title2: "Equipo Susaeta",
    description:
      "Comunión con la naturaleza: ésta es la magia que se consigue cuando se dispone de un jardín en el que disfrutar de los momentos de esparcimiento, un espacio que refleja a modo de privilegiada pantalla el esplendor del mundo natural. Aprenda con nosotros todo lo que necesita saber para convertir cualquier espacio disponible en su casa en un jardín agradable y bien cuidado. Le aconsejamos sobre plantas de flor, trepadoras, bulbosas, árboles y arbustos, plantas para maceta, también para interior, y le ayudamos a enfrentarse con los cuidados que necesitan en función de las especies, el suelo, el clima... Trasplantes, fertilización, multiplicación de ejemplares, entutorado, sistemas de riego: todo al alcance de su mano para que pueda cuidar sus plantas como se merecen. Nosotros le ayudamos a escoger las especies más adecuadas para sus necesidades con más de 100 fichas y fotografías de las plantas que harán de cualquier rincón de su casa un lugar especial en el que gozar de la naturaleza.",
    category: "libros",
    stock: 4,
    price: 52000,
    image:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/df/e0/dfe0679b583201848aa14b97d99e839c.jpg",
  },
  {
    title: "Jardinería y Huertos Familiares. - Guía Práctica",
    title2: "Holly Farrell",
    description:
      "Plantar o sembrar es la mejor forma de reconectarnos con la naturaleza y el mundo silvestre que nos rodea, y de promover amor y respeto por el medioambiente. Aprender a trabajar en un jardín en familia ofrece no solo una oportunidad para conectarse con la naturaleza y entre nosotros, sino también muchas oportunidades para estimular otros aspectos educativos como contar semillas, aprender sobre la ciencia del crecimiento de las plantas, entender las etiquetas de las plantas o dibujar árboles y flores. La Royal Horticultural Society, RHS, la más prestigiosa fundación dedicada a la jardinería y la horticultura, presenta esta guía bellamente ilustrada en la que aprenderás los elementos básicos del cultivo y te motivará a crear un lindo jardín y huerto adaptado a tus propias necesidades. Incluye proyectos paso a paso e información de cómo funcionan las plantas y lo que necesitas saber para cultivar todo el año, desde flores de temporada hasta nutritivos vegetales, y muchos consejos útiles sobre cómo plantar en interiores y exteriores. Tan inspirador como divertido, el contenido de estas páginas te enseñará a observar y disfrutar la naturaleza: Apreciar la primavera florida, el verano que te da los vegetales maduros y plenos de sabor y olor, la caída de hojas en otoño, y el frío invierno en el que las plantas aprovechan de acumular energía para el futuro crecimiento de hojas, flores y frutas.",
    category: "libros",
    stock: 4,
    price: 52000,
    image:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/64/46/644618b460ecf4d9bd7a83e5a01dba9a.jpg",
  },
  {
    title: "Jardinería Práctica",
    title2: "Varios Autores ",
    description:
      "Este manual tiene toda la información necesaria para llegar a convertirse en un buen jardinero. ¿Por dónde empezar? Conocé los conceptos básicos para realizar la planificación general del jardín seleccionando las plantas adecuadas a cada tipo de clima y suelo, aprender todos los cuidados de cultivo, y las nociones básicas de diseño de parques y jardines.",
    category: "libros",
    stock: 4,
    price: 29000,
    image:
      "https://images.cdn1.buscalibre.com/fit-in/360x360/8e/30/8e305b70f79a054f4327d29f768f648e.jpg",
  },
  {
    title: "Jardinería Biológica",
    title2: "Michel Beauvais ",
    description:
      "Este manual tiene toda la información necesaria para llegar a convertirse en un buen jardinero. ¿Por dónde empezar? Conocé los conceptos básicos para realizar la planificación general del jardín seleccionando las plantas adecuadas a cada tipo de clima y suelo, aprender todos los cuidados de cultivo, y las nociones básicas de diseño de parques y jardines.",
    category: "libros",
    stock: 4,
    price: 11000,
    image:
      "https://images.cdn3.buscalibre.com/fit-in/360x360/cd/03/cd03a2618165d5702e4a148cf997bd88.jpg",
  },
];

export default items;
