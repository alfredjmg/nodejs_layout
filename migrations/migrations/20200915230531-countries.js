module.exports = {
  async up(db) {
    
    // ---------------------------------------------------------------------------------------------
    try {
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AF",country_name:"Afghanistan",country_code:"93"},
      );
      await db.collection('states').insertMany([
        {
          code: "BDS",
          name: "Badakhshān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BGL",
          name: "Baghlān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BAL",
          name: "Balkh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BDG",
          name: "Bādghīs",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BAM",
          name: "Bāmyān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DAY",
          name: "Dāykundī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FRA",
          name: "Farāh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FYB",
          name: "Fāryāb",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GHA",
          name: "Ghaznī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GHO",
          name: "Ghōr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HEL",
          name: "Helmand",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HER",
          name: "Herāt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JOW",
          name: "Jowzjān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KAN",
          name: "Kandahār",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KHO",
          name: "Khōst",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KNR",
          name: "Kunar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KDZ",
          name: "Kunduz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KAB",
          name: "Kābul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KAP",
          name: "Kāpīsā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LAG",
          name: "Laghmān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LOG",
          name: "Lōgar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NAN",
          name: "Nangarhār",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NIM",
          name: "Nīmrōz"
        },
        {
          code: "NUR",
          name: "Nūristān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PIA",
          name: "Paktiyā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PKA",
          name: "Paktīkā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PAN",
          name: "Panjshayr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PAR",
          name: "Parwān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SAM",
          name: "Samangān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SAR",
          name: "Sar-e Pul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TAK",
          name: "Takhār",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "URU",
          name: "Uruzgān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WAR",
          name: "Wardak",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZAB",
          name: "Zābul",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AL",country_name:"Albania",country_code:"355"},
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Berat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Dibër",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Durrës",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Elbasan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Fier",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Gjirokastër",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Korçë",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Kukës",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Lezhë",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Shkodër",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Tiranë",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Vlorë",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"DZ",country_name:"Algeria",country_code:"213"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Adrar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Alger",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Annaba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Aïn Defla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Aïn Témouchent",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Batna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Biskra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Blida",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Bordj Bou Arréridj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Bouira",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Boumerdès",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Béchar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Béjaïa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Chlef",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Constantine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Djelfa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "El Bayadh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "El Oued",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "El Tarf",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Ghardaïa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Guelma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Illizi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Jijel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Khenchela",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Laghouat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Mascara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Mila",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Mostaganem",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Msila",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Médéa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Naama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Oran",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Ouargla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Oum el Bouaghi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "48",
          name: "Relizane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Saïda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Sidi Bel Abbès",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Skikda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Souk Ahras",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Sétif",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Tamanghasset",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Tiaret",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "Tindouf",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Tipaza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "38",
          name: "Tissemsilt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Tizi Ouzou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Tlemcen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Tébessa",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AS",country_name:"American samoa",country_code:"1-684"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AD",country_name:"Andorra",country_code:"376"}
      );
      await db.collection('states').insertMany([
        {
          code: "07",
          name: "Andorra la Vella",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Canillo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Encamp",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Escaldes-Engordany",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "La Massana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Ordino",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Sant Julià de Lòria",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AO",country_name:"Angola",country_code:"244"}
      );
      await db.collection('states').insertMany([
        {
          code: "BGO",
          name: "Bengo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BGU",
          name: "Benguela",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BIE",
          name: "Bié",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CAB",
          name: "Cabinda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CNN",
          name: "Cunene",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HUA",
          name: "Huambo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HUI",
          name: "Huíla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CCU",
          name: "Kuando Kubango",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CNO",
          name: "Kwanza Norte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CUS",
          name: "Kwanza Sul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LUA",
          name: "Luanda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LNO",
          name: "Lunda Norte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LSU",
          name: "Lunda Sul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MAL",
          name: "Malange",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MOX",
          name: "Moxico",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NAM",
          name: "Namibe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UIG",
          name: "Uíge",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZAI",
          name: "Zaire",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AI",country_name:"Anguilla",country_code:"1-264"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AQ",country_name:"Antarctica",country_code:"672"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AG",country_name:"Antigua and barbuda",country_code:"1-268"}
      );
      await db.collection('states').insertMany([
        {
          code: "10",
          name: "Barbuda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Redonda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Saint George",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Saint John",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Saint Mary",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Saint Paul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Saint Peter",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Saint Philip",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AR",country_name:"Argentina",country_code:"54"}
      );
      await db.collection('states').insertMany([
        {
          code: "B",
          name: "Buenos Aires",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Catamarca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Chaco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Chubut",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Ciudad Autónoma de Buenos Aires",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Corrientes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "X",
          name: "Córdoba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Entre Ríos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Formosa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Y",
          name: "Jujuy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "La Pampa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "La Rioja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Mendoza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Misiones",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Q",
          name: "Neuquén",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "R",
          name: "Río Negro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "A",
          name: "Salta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "J",
          name: "San Juan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "San Luis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Z",
          name: "Santa Cruz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Santa Fe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Santiago del Estero",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "V",
          name: "Tierra del Fuego",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Tucumán",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AM",country_name:"Armenia",country_code:"374"}
      );
      await db.collection('states').insertMany([
        {
          code: "AG",
          name: "Aragac̣otn",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Ararat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AV",
          name: "Armavir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ER",
          name: "Erevan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GR",
          name: "Geġark'unik'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KT",
          name: "Kotayk'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LO",
          name: "Loṙi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "Syunik'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TV",
          name: "Tavuš",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VD",
          name: "Vayoć Jor",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Širak",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AW",country_name:"Aruba",country_code:"297"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AU",country_name:"Australia",country_code:"61"}
      );
      await db.collection('states').insertMany([
        {
          code: "ACT",
          name: "Australian Capital Territory",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NSW",
          name: "New South Wales",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NT",
          name: "Northern Territory",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QLD",
          name: "Queensland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "South Australia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TAS",
          name: "Tasmania",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VIC",
          name: "Victoria",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WA",
          name: "Western Australia",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AT",country_name:"Austria",country_code:"43"}
      );
      await db.collection('states').insertMany([
        {
          code: "B",
          name: "Burgenland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Kärnten",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NÖ",
          name: "Niederösterreich",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OÖ",
          name: "Oberösterreich",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Salzburg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ST",
          name: "Steiermark",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Tirol",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "V",
          name: "Vorarlberg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Wien",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AZ",country_name:"Azerbaijan",country_code:"994"}
      );
      await db.collection('states').insertMany([
        {
          code: "NX",
          name: "Naxçıvan",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BS",country_name:"Bahamas, the",country_code:"1-242"}
      );
      await db.collection('states').insertMany([
        {
          code: "AK",
          name: "Acklins",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BY",
          name: "Berry Islands",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BI",
          name: "Bimini",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BP",
          name: "Black Point",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CI",
          name: "Cat Island",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "Central Abaco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CS",
          name: "Central Andros",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CE",
          name: "Central Eleuthera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FP",
          name: "City of Freeport",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CK",
          name: "Crooked Island and Long Cay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EG",
          name: "East Grand Bahama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EX",
          name: "Exuma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GC",
          name: "Grand Cay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HI",
          name: "Harbour Island",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HT",
          name: "Hope Town",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IN",
          name: "Inagua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LI",
          name: "Long Island",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MC",
          name: "Mangrove Cay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MG",
          name: "Mayaguana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MI",
          name: "Moores Island",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NO",
          name: "North Abaco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NS",
          name: "North Andros",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NE",
          name: "North Eleuthera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RI",
          name: "Ragged Island",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RC",
          name: "Rum Cay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SS",
          name: "San Salvador",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "South Abaco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "South Andros",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "South Eleuthera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SW",
          name: "Spanish Wells",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WG",
          name: "West Grand Bahama",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BH",country_name:"Bahrain",country_code:"973"}
      );
      await db.collection('states').insertMany([
        {
          code: "14",
          name: "Al Janūbīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Al Manāmah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Al Muḩarraq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Al Wusţá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Ash Shamālīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BD",country_name:"Bangladesh",country_code:"880"}
      );
      await db.collection('states').insertMany([
        {
          code: "A",
          name: "Barisal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Chittagong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Dhaka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Khulna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Rajshahi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Rangpur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Sylhet",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BB",country_name:"Barbados",country_code:"1-246"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Christ Church",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Saint Andrew",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Saint George",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Saint James",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Saint John",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Saint Joseph",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Saint Lucy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Saint Michael",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Saint Peter",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Saint Philip",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Saint Thomas",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BY",country_name:"Belarus",country_code:"375"}
      );
      await db.collection('states').insertMany([
        {
          code: "BR",
          name: "Brestskaya voblasts'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HO",
          name: "Homyel'skaya voblasts'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HM",
          name: "Horad Minsk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HR",
          name: "Hrodzenskaya voblasts'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Mahilyowskaya voblasts'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MI",
          name: "Minskaya voblasts'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VI",
          name: "Vitsyebskaya voblasts'",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BE",country_name:"Belgium",country_code:"32"}
      );
      await db.collection('states').insertMany([
        {
          code: "BRU",
          name: "Brussels Hoofdstedelijk Gewest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WAL",
          name: "Région Wallonne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VLG",
          name: "Vlaams Gewest",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BZ",country_name:"Belize",country_code:"501"}
      );
      await db.collection('states').insertMany([
        {
          code: "BZ",
          name: "Belize",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CY",
          name: "Cayo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CZL",
          name: "Corozal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OW",
          name: "Orange Walk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SC",
          name: "Stann Creek",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TOL",
          name: "Toledo",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BJ",country_name:"Benin",country_code:"229"}
      );
      await db.collection('states').insertMany([
        {
          code: "AL",
          name: "Alibori",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AK",
          name: "Atakora",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AQ",
          name: "Atlantique",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BO",
          name: "Borgou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "Collines",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DO",
          name: "Donga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KO",
          name: "Kouffo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LI",
          name: "Littoral",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Mono",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OU",
          name: "Ouémé",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PL",
          name: "Plateau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZO",
          name: "Zou",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BM",country_name:"Bermuda",country_code:"1-441"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BT",country_name:"Bhutan",country_code:"975"}
      );
      await db.collection('states').insertMany([
        {
          code: "33",
          name: "Bumthang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Chhukha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Dagana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Gasa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Ha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Lhuentse",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Monggar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Paro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Pemagatshel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Punakha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Samdrup Jongkha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Samtse",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Sarpang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Thimphu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TY",
          name: "Trashi Yangtse",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Trashigang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Trongsa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Tsirang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Wangdue Phodrang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Zhemgang",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BO",country_name:"Bolivia",country_code:"591"}
      );
      await db.collection('states').insertMany([
        {
          code: "H",
          name: "Chuquisaca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Cochabamba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "El Beni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "La Paz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "O",
          name: "Oruro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Pando",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Potosí",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Santa Cruz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Tarija",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BQ",country_name:"Bonaire, sint eustatius, and saba",country_code:"599"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BA",country_name:"Bosnia and herzegovina",country_code:"387"}
      );
      await db.collection('states').insertMany([
        {
          code: "BRC",
          name: "Brčko distrikt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BIH",
          name: "Federacija Bosna i Hercegovina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SRP",
          name: "Republika Srpska",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BW",country_name:"Botswana",country_code:"267"}
      );
      await db.collection('states').insertMany([
        {
          code: "CE",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CH",
          name: "Chobe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FR",
          name: "Francistown",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Gaborone",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GH",
          name: "Ghanzi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JW",
          name: "Jwaneng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KG",
          name: "Kgalagadi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KL",
          name: "Kgatleng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KW",
          name: "Kweneng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LO",
          name: "Lobatse",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NE",
          name: "North-East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NW",
          name: "North-West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SP",
          name: "Selibe Phikwe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "South-East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Southern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ST",
          name: "Sowa Town",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BR",country_name:"Brazil",country_code:"55"}
      );
      await db.collection('states').insertMany([
        {
          code: "AC",
          name: "Acre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AL",
          name: "Alagoas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AP",
          name: "Amapá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AM",
          name: "Amazonas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Bahia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CE",
          name: "Ceará",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DF",
          name: "Distrito Federal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ES",
          name: "Espírito Santo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GO",
          name: "Goiás",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Maranhão",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MT",
          name: "Mato Grosso",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MS",
          name: "Mato Grosso do Sul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MG",
          name: "Minas Gerais",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PR",
          name: "Paraná",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PB",
          name: "Paraíba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PA",
          name: "Pará",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PE",
          name: "Pernambuco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PI",
          name: "Piauí",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RN",
          name: "Rio Grande do Norte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RS",
          name: "Rio Grande do Sul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RJ",
          name: "Rio de Janeiro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RO",
          name: "Rondônia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RR",
          name: "Roraima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SC",
          name: "Santa Catarina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "Sergipe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SP",
          name: "São Paulo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TO",
          name: "Tocantins",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IO",country_name:"British indian ocean territory",country_code:"246"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BN",country_name:"Brunei",country_code:"673"}
      );
      await db.collection('states').insertMany([
        {
          code: "BE",
          name: "Belait",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BM",
          name: "Brunei-Muara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TE",
          name: "Temburong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TU",
          name: "Tutong",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BG",country_name:"Bulgaria",country_code:"359"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Blagoevgrad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Burgas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Dobrich",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Gabrovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Haskovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Kardzhali",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Kyustendil",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Lovech",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Montana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Pazardzhik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Pernik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Pleven",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Plovdiv",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Razgrad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Ruse",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Shumen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Silistra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Sliven",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Smolyan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Sofia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Sofia-Grad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Stara Zagora",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Targovishte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Varna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Veliko Tarnovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Vidin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Vratsa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Yambol",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BF",country_name:"Burkina faso",country_code:"226"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Boucle du Mouhoun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Cascades",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Centre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Centre-Est",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Centre-Nord",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Centre-Ouest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Centre-Sud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Est",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Hauts-Bassins",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Nord",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Plateau-Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Sahel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Sud-Ouest",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"BI",country_name:"Burundi",country_code:"257"}
      );
      await db.collection('states').insertMany([
        {
          code: "BB",
          name: "Bubanza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BM",
          name: "Bujumbura Mairie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BL",
          name: "Bujumbura Rural",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BR",
          name: "Bururi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "Cankuzo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CI",
          name: "Cibitoke",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GI",
          name: "Gitega",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KR",
          name: "Karuzi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KY",
          name: "Kayanza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KI",
          name: "Kirundo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Makamba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MU",
          name: "Muramvya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MY",
          name: "Muyinga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MW",
          name: "Mwaro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NG",
          name: "Ngozi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RT",
          name: "Rutana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RY",
          name: "Ruyigi",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KH",country_name:"Cambodia",country_code:"855"}
      );
      await db.collection('states').insertMany([
        {
          code: "2",
          name: "Baat Dambang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "1",
          name: "Banteay Mean Chey",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Kampong Chaam",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Kampong Chhnang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Kampong Spueu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "Kampong Thum",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "Kampot",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Kandaal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "9",
          name: "Kaoh Kong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Kracheh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Krong Kaeb",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Krong Pailin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Krong Preah Sihanouk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Mondol Kiri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Otdar Mean Chey",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Phnom Penh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Pousaat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Preah Vihear",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Prey Veaeng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Rotanak Kiri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Siem Reab",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Stueng Traeng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Svaay Rieng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Taakaev",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CM",country_name:"Cameroon",country_code:"237"}
      );
      await db.collection('states').insertMany([
        {
          code: "AD",
          name: "Adamaoua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CE",
          name: "Centre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ES",
          name: "East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EN",
          name: "Far North",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LT",
          name: "Littoral",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NO",
          name: "North",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NW",
          name: "North-West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "South",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SW",
          name: "South-West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OU",
          name: "West",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CA",country_name:"Canada",country_code:"1B"}
      );
      await db.collection('states').insertMany([
        {
          code: "AB",
          name: "Alberta",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "BC",
          name: "British Columbia",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "MB",
          name: "Manitoba",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "NB",
          name: "New Brunswick",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "NL",
          name: "Newfoundland and Labrador",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "NS",
          name: "Nova Scotia",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "ON",
          name: "Ontario",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "PE",
          name: "Prince Edward Island",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "QC",
          name: "Quebec",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "SK",
          name: "Saskatchewan",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "NT",
          name: "Northwest Territories",
          subdivision: "territory",
          country_id: country.ops[0]._id
        },
        {
          code: "NU",
          name: "Nunavut",
          subdivision: "territory",
          country_id: country.ops[0]._id
        },
        {
          code: "YT",
          name: "Yukon",
          subdivision: "territory",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CV",country_name:"Cape verde",country_code:"238"}
      );
      await db.collection('states').insertMany([
        {
          code: "B",
          name: "Ilhas de Barlavento",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Ilhas de Sotavento",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KY",country_name:"Cayman islands",country_code:"1-345"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CF",country_name:"Central african republic",country_code:"236"}
      );
      await db.collection('states').insertMany([
        {
          code: "BB",
          name: "Bamingui-Bangoran",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BGF",
          name: "Bangui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BK",
          name: "Basse-Kotto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KB",
          name: "Gribingui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HM",
          name: "Haut-Mbomou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HK",
          name: "Haute-Kotto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HS",
          name: "Haute-Sangha / Mambéré-Kadéï",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KG",
          name: "Kémo-Gribingui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LB",
          name: "Lobaye",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MB",
          name: "Mbomou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NM",
          name: "Nana-Mambéré",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MP",
          name: "Ombella-Mpoko",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UK",
          name: "Ouaka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AC",
          name: "Ouham",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OP",
          name: "Ouham-Pendé",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "Sangha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VK",
          name: "Vakaga",
          subdivision: null,
          country_id: country.ops[0]._id
        }  
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TD",country_name:"Chad",country_code:"235"}
      );
      await db.collection('states').insertMany([
        {
          code: "BA",
          name: "Al Baṭḩah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LC",
          name: "Al Buḩayrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BG",
          name: "Baḩr al Ghazāl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BO",
          name: "Būrkū",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EN",
          name: "Innīdī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Kānim",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LO",
          name: "Lūqūn al Gharbī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LR",
          name: "Lūqūn ash Sharqī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ND",
          name: "Madīnat Injamīnā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Māndūl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Māyū Kībbī al Gharbī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ME",
          name: "Māyū Kībbī ash Sharqī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GR",
          name: "Qīrā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Salāmāt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CB",
          name: "Shārī Bāqirmī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MC",
          name: "Shārī al Awsaṭ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SI",
          name: "Sīlā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TI",
          name: "Tibastī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tānjilī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OD",
          name: "Waddāy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WF",
          name: "Wādī Fīrā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HL",
          name: "Ḥajjar Lamīs",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CL",country_name:"Chile",country_code:"56"}
      );
      await db.collection('states').insertMany([
        {
          code: "AI",
          name: "Aisén del General Carlos Ibañez del Campo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AN",
          name: "Antofagasta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Araucanía",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AP",
          name: "Arica y Parinacota",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AT",
          name: "Atacama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BI",
          name: "Bío-Bío",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "Coquimbo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LI",
          name: "Libertador General Bernardo O'Higgins",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LL",
          name: "Los Lagos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LR",
          name: "Los Ríos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Magallanes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ML",
          name: "Maule",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RM",
          name: "Región Metropolitana de Santiago",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tarapacá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VS",
          name: "Valparaíso",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CN",country_name:"China",country_code:"86"}
      );
      await db.collection('states').insertMany([
        {
          code: "45",
          name: "Guangxi",
          subdivision: "Autonomous region",
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Nei Mongol",
          subdivision: "Autonomous region",
          country_id: country.ops[0]._id
        },
        {
          code: "64",
          name: "Ningxia",
          subdivision: "Autonomous region",
          country_id: country.ops[0]._id
        },
        {
          code: "65",
          name: "Xinjiang",
          subdivision: "Autonomous region",
          country_id: country.ops[0]._id
        },
        {
          code: "54",
          name: "Xizang",
          subdivision: "Autonomous region",
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Beijing",
          subdivision: "Municipality",
          country_id: country.ops[0]._id
        },
        {
          code: "50",
          name: "Chongqing",
          subdivision: "Municipality",
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Shanghai",
          subdivision: "Municipality",
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Tianjin",
          subdivision: "Municipality",
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Anhui",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Fujian",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "62",
          name: "Gansu",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Guangdong",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Guizhou",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Hainan",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Hebei",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Heilongjiang",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Henan",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Hubei",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Hunan",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Jiangsu",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Jiangxi",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Jilin",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Liaoning",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "63",
          name: "Qinghai",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Shaanxi",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "Shandong",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Shanxi",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Sichuan",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "71",
          name: "Taiwan",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Yunnan",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Zhejiang",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "91",
          name: "Hong Kong",
          subdivision: "Special administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "92",
          name: "Macao",
          subdivision: "Special administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "",
          name: "Hong Kong Island",
          subdivision: "Special administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KOWLOON",
          name: "Kowloon",
          subdivision: "Special administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "NEW TERRITORIES",
          name: "New Territories",
          subdivision: "Special administrative region",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CX",country_name:"Christmas island",country_code:"61-89164"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CC",country_name:"Cocos (keeling) islands",country_code:"61-89162"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CO",country_name:"Colombia",country_code:"57"}
      );
      await db.collection('states').insertMany([
        {
          code: "AMA",
          name: "Amazonas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ANT",
          name: "Antioquia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ARA",
          name: "Arauca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ATL",
          name: "Atlántico",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BOL",
          name: "Bolívar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BOY",
          name: "Boyacá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CAL",
          name: "Caldas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CAQ",
          name: "Caquetá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CAS",
          name: "Casanare",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CAU",
          name: "Cauca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CES",
          name: "Cesar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CHO",
          name: "Chocó",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CUN",
          name: "Cundinamarca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "COR",
          name: "Córdoba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DC",
          name: "Distrito Capital de Bogotá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GUA",
          name: "Guainía",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GUV",
          name: "Guaviare",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HUI",
          name: "Huila",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LAG",
          name: "La Guajira",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MAG",
          name: "Magdalena",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MET",
          name: "Meta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NAR",
          name: "Nariño",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NSA",
          name: "Norte de Santander",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PUT",
          name: "Putumayo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QUI",
          name: "Quindío",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RIS",
          name: "Risaralda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SAP",
          name: "San Andrés, Providencia y Santa Catalina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SAN",
          name: "Santander",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SUC",
          name: "Sucre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TOL",
          name: "Tolima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VAC",
          name: "Valle del Cauca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VAU",
          name: "Vaupés",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VID",
          name: "Vichada",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KM",country_name:"Comoros",country_code:"269"}
      );
      await db.collection('states').insertMany([
        {
          code: "A",
          name: "Anjouan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Grande Comore",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Mohéli",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CG",country_name:"Congo (brazzaville)",country_code:"242"}
      );
      await db.collection('states').insertMany([
        {
          code: "11",
          name: "Bouenza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BZV",
          name: "Brazzaville",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Cuvette",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Cuvette-Ouest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Kouilou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "Likouala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "2",
          name: "Lékoumou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "9",
          name: "Niari",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Plateaux",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Pointe-Noire",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Pool",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Sangha",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CD",country_name:"Congo (kinshasa)",country_code:"243"}
      );
      await db.collection('states').insertMany([
        {
          code: "BN",
          name: "Bandundu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BC",
          name: "Bas-Congo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KW",
          name: "Kasai-Occidental",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KE",
          name: "Kasai-Oriental",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Katanga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KN",
          name: "Kinshasa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Maniema",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NK",
          name: "Nord-Kivu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OR",
          name: "Orientale",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SK",
          name: "Sud-Kivu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EQ",
          name: "Équateur",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CK",country_name:"Cook islands",country_code:"682"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CR",country_name:"Costa rica",country_code:"506"}
      );
      await db.collection('states').insertMany([
        {
          code: "A",
          name: "Alajuela",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Cartago",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Guanacaste",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Heredia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Limón",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Puntarenas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SJ",
          name: "San José",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CI",country_name:"Cote d'ivoire",country_code:"225"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"HR",country_name:"Croatia",country_code:"385"}
      );
      await db.collection('states').insertMany([
        {
          code: "07",
          name: "Bjelovarsko-bilogorska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Brodsko-posavska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Dubrovačko-neretvanska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Grad Zagreb",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Istarska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Karlovačka županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Koprivničko-križevačka županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Krapinsko-zagorska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Ličko-senjska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Međimurska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Osječko-baranjska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Požeško-slavonska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Primorsko-goranska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Sisačko-moslavačka županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Splitsko-dalmatinska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Varaždinska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Virovitičko-podravska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Vukovarsko-srijemska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Zadarska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Zagrebačka županija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Šibensko-kninska županija",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CU",country_name:"Cuba",country_code:"53"}
      );
      await db.collection('states').insertMany([
        {
          code: "15",
          name: "Artemisa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Camagüey",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Ciego de Ávila",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Cienfuegos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Granma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Guantánamo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Holguín",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "99",
          name: "Isla de la Juventud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "La Habana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Las Tunas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Matanzas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Mayabeque",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Pinar del Río",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Sancti Spíritus",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Santiago de Cuba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Villa Clara",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CW",country_name:"Curacao",country_code:"599-9"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CY",country_name:"Cyprus",country_code:"357"}
      );
      await db.collection('states').insertMany([
        {
          code: "04",
          name: "Ammochostos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Keryneia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Larnaka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Lefkosia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Lemesos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Pafos",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CZ",country_name:"Czech republic",country_code:"420"}
      );
      await db.collection('states').insertMany([
        {
          code: "JM",
          name: "Jihomoravský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JC",
          name: "Jihočeský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Karlovarský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KR",
          name: "Královéhradecký kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LI",
          name: "Liberecký kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Moravskoslezský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OL",
          name: "Olomoucký kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PA",
          name: "Pardubický kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PL",
          name: "Plzeňský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PR",
          name: "Praha, hlavní město",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ST",
          name: "Středočeský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VY",
          name: "Vysočina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZL",
          name: "Zlínský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "US",
          name: "Ústecký kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"DK",country_name:"Denmark",country_code:"45"}
      );
      await db.collection('states').insertMany([
        {
          code: "84",
          name: "Hovedstaden",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "82",
          name: "Midtjylland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "81",
          name: "Nordjylland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "85",
          name: "Sjælland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "83",
          name: "Syddanmark",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"DJ",country_name:"Djibouti",country_code:"253"}
      );
      await db.collection('states').insertMany([
        {
          code: "AS",
          name: "Ali Sabieh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Arta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DI",
          name: "Dikhil",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DJ",
          name: "Djibouti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OB",
          name: "Obock",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tadjourah",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"DM",country_name:"Dominica",country_code:"1-767"}
      );
      await db.collection('states').insertMany([
        {
          code: "02",
          name: "Saint Andrew",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Saint David",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Saint George",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Saint John",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Saint Joseph",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Saint Luke",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Saint Mark",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Saint Patrick",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Saint Paul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Saint Peter",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"DO",country_name:"Dominican republic",country_code:"1-809"}
      );
      await db.collection('states').insertMany([
        {
          code: "33",
          name: "Cibao Nordeste",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Cibao Noroeste",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Cibao Norte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Cibao Sur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "El Valle",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "38",
          name: "Enriquillo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Higuamo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Ozama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Valdesia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Yuma",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"EC",country_name:"Ecuador",country_code:"593"}
      );
      await db.collection('states').insertMany([
        {
          code: "A",
          name: "Azuay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Bolívar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Carchi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Cañar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Chimborazo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "X",
          name: "Cotopaxi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "O",
          name: "El Oro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Esmeraldas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Galápagos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Guayas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "I",
          name: "Imbabura",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Loja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "R",
          name: "Los Ríos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Manabí",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Morona-Santiago",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Napo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Orellana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Y",
          name: "Pastaza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Pichincha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "Santa Elena",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Santo Domingo de los Tsáchilas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Sucumbíos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Tungurahua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Z",
          name: "Zamora-Chinchipe",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"EG",country_name:"Egypt",country_code:"20"}
      );
      await db.collection('states').insertMany([
        {
          code: "DK",
          name: "Ad Daqahlīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Al Baḩr al Aḩmar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BH",
          name: "Al Buḩayrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FYM",
          name: "Al Fayyūm",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GH",
          name: "Al Gharbīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ALX",
          name: "Al Iskandarīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IS",
          name: "Al Ismāٰīlīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GZ",
          name: "Al Jīzah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MN",
          name: "Al Minyā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MNF",
          name: "Al Minūfīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KB",
          name: "Al Qalyūbīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Al Qāhirah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LX",
          name: "Al Uqşur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WAD",
          name: "Al Wādī al Jadīd",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SUZ",
          name: "As Suways",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "As Sādis min Uktūbar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SHR",
          name: "Ash Sharqīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ASN",
          name: "Aswān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AST",
          name: "Asyūţ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BNS",
          name: "Banī Suwayf",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PTS",
          name: "Būr Saٰīd",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DT",
          name: "Dumyāţ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JS",
          name: "Janūb Sīnā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KFS",
          name: "Kafr ash Shaykh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MT",
          name: "Maţrūḩ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KN",
          name: "Qinā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SIN",
          name: "Shamāl Sīnā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SHG",
          name: "Sūhāj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HU",
          name: "Ḩulwān",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SV",country_name:"El salvador",country_code:"503"}
      );
      await db.collection('states').insertMany([
        {
          code: "AH",
          name: "Ahuachapán",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "Cabañas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CH",
          name: "Chalatenango",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CU",
          name: "Cuscatlán",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LI",
          name: "La Libertad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PA",
          name: "La Paz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UN",
          name: "La Unión",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Morazán",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SM",
          name: "San Miguel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SS",
          name: "San Salvador",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SV",
          name: "San Vicente",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Santa Ana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Sonsonate",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "US",
          name: "Usulután",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GQ",country_name:"Equatorial guinea",country_code:"240"}
      );
      await db.collection('states').insertMany([
        {
          code: "C",
          name: "Región Continental",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "I",
          name: "Región Insular",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ER",country_name:"Eritrea",country_code:"291"}
      );
      await db.collection('states').insertMany([
        {
          code: "MA",
          name: "Al Awsaţ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DU",
          name: "Al Janūbĩ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AN",
          name: "Ansabā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DK",
          name: "Janūbī al Baḩrī al Aḩmar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GB",
          name: "Qāsh-Barkah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SK",
          name: "Shimālī al Baḩrī al Aḩmar",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"EE",country_name:"Estonia",country_code:"372"}
      );
      await db.collection('states').insertMany([
        {
          code: "37",
          name: "Harjumaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Hiiumaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Ida-Virumaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Järvamaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "49",
          name: "Jõgevamaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "59",
          name: "Lääne-Virumaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "57",
          name: "Läänemaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "67",
          name: "Pärnumaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "65",
          name: "Põlvamaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "70",
          name: "Raplamaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "74",
          name: "Saaremaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "78",
          name: "Tartumaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "82",
          name: "Valgamaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "84",
          name: "Viljandimaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "86",
          name: "Võrumaa",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ET",country_name:"Ethiopia",country_code:"251"}
      );
      await db.collection('states').insertMany([
        {
          code: "BE",
          name: "Bīnshangul Gumuz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DD",
          name: "Dirē Dawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Gambēla Hizboch",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HA",
          name: "Hārerī Hizb",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OR",
          name: "Oromīya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Sumalē",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TI",
          name: "Tigray",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SN",
          name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AA",
          name: "Ādīs Ābeba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AF",
          name: "Āfar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AM",
          name: "Āmara",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"FK",country_name:"Falkland islands (islas malvinas)",country_code:"500A"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"FO",country_name:"Faroe islands",country_code:"298"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"FJ",country_name:"Fiji",country_code:"679"}
      );
      await db.collection('states').insertMany([
        {
          code: "C",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Eastern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Northern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "R",
          name: "Rotuma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"FI",country_name:"Finland",country_code:"358"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Ahvenanmaan maakunta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Etelä-Karjala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Etelä-Pohjanmaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Etelä-Savo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Kainuu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Kanta-Häme",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Keski-Pohjanmaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Keski-Suomi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Kymenlaakso",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Lappi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Pirkanmaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Pohjanmaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Pohjois-Karjala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Pohjois-Pohjanmaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Pohjois-Savo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Päijät-Häme",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Satakunta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Uusimaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Varsinais-Suomi",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"FR",country_name:"France",country_code:"33"}
      );
      await db.collection('states').insertMany([
        {
          code: "A",
          name: "Alsace",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Aquitaine",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Auvergne",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Brittany",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Burgundy",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Centre-Val de Loire",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Champagne-Ardenne",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Corsica",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "I",
          name: "Franche-Comté",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Languedoc-Roussillon",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Limousin",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Lorraine",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Lower Normandy",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Midi-Pyrénées",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "O",
          name: "Nord-Pas-de-Calais",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "R",
          name: "Pays de la Loire",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Picardy",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Poitou-Charentes",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Provence-Alpes-Côte d'Azur",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "V",
          name: "Rhône-Alpes",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "Q",
          name: "Upper Normandy",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        },
        {
          code: "J",
          name: "Île-de-France",
          subdivision: "Metropolitan region",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GF",country_name:"French guiana",country_code:"594"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PF",country_name:"French polynesia",country_code:"689"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GA",country_name:"Gabon",country_code:"241"}
      );
      await db.collection('states').insertMany([
        {
          code: "1",
          name: "Estuaire",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "2",
          name: "Haut-Ogooué",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Moyen-Ogooué",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Ngounié",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Nyanga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "Ogooué-Ivindo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "Ogooué-Lolo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Ogooué-Maritime",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "9",
          name: "Woleu-Ntem",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GM",country_name:"Gambia, the",country_code:"220"}
      );
      await db.collection('states').insertMany([
        {
          code: "B",
          name: "Banjul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Central River",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Lower River",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "North Bank",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Upper River",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GE",country_name:"Georgia",country_code:"995"}
      );
      await db.collection('states').insertMany([
        {
          code: "AB",
          name: "Abkhazia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AJ",
          name: "Ajaria",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GU",
          name: "Guria",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IM",
          name: "Imereti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "K'akheti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KK",
          name: "Kvemo Kartli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MM",
          name: "Mtskheta-Mtianeti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RL",
          name: "Rach'a-Lechkhumi-Kvemo Svaneti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SZ",
          name: "Samegrelo-Zemo Svaneti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SJ",
          name: "Samtskhe-Javakheti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SK",
          name: "Shida Kartli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TB",
          name: "Tbilisi",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"DE",country_name:"Germany",country_code:"49"}
      );
      await db.collection('states').insertMany([
        {
          code: "BW",
          name: "Baden-Württemberg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BY",
          name: "Bayern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BE",
          name: "Berlin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BB",
          name: "Brandenburg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HB",
          name: "Bremen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HH",
          name: "Hamburg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HE",
          name: "Hessen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MV",
          name: "Mecklenburg-Vorpommern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Niedersachsen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NW",
          name: "Nordrhein-Westfalen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RP",
          name: "Rheinland-Pfalz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SL",
          name: "Saarland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SN",
          name: "Sachsen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ST",
          name: "Sachsen-Anhalt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Schleswig-Holstein",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TH",
          name: "Thüringen",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GH",country_name:"Ghana",country_code:"233"}
      );
      await db.collection('states').insertMany([
        {
          code: "AH",
          name: "Ashanti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Brong-Ahafo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CP",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EP",
          name: "Eastern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AA",
          name: "Greater Accra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NP",
          name: "Northern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UE",
          name: "Upper East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UW",
          name: "Upper West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TV",
          name: "Volta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WP",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GI",country_name:"Gibraltar",country_code:"350"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GR",country_name:"Greece",country_code:"30"}
      );
      await db.collection('states').insertMany([
        {
          code: "A",
          name: "Anatoliki Makedonia kai Thraki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "I",
          name: "Attiki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Dytiki Ellada",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Dytiki Makedonia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Ionia Nisia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Ipeiros",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Kentriki Makedonia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Kriti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Notio Aigaio",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "J",
          name: "Peloponnisos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Sterea Ellada",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Thessalia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Voreio Aigaio",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GL",country_name:"Greenland",country_code:"299"}
      );
      await db.collection('states').insertMany([
        {
          code: "KU",
          name: "Kommune Kujalleq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SM",
          name: "Kommuneqarfik Sermersooq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QA",
          name: "Qaasuitsup Kommunia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QE",
          name: "Qeqqata Kommunia",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GD",country_name:"Grenada",country_code:"1-473"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Saint Andrew",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Saint David",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Saint George",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Saint John",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Saint Mark",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Saint Patrick",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Southern Grenadine Islands",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GP",country_name:"Guadeloupe",country_code:"590"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GU",country_name:"Guam",country_code:"1-671"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GT",country_name:"Guatemala",country_code:"502"}
      );
      await db.collection('states').insertMany([
        {
          code: "AV",
          name: "Alta Verapaz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BV",
          name: "Baja Verapaz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CM",
          name: "Chimaltenango",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CQ",
          name: "Chiquimula",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PR",
          name: "El Progreso",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ES",
          name: "Escuintla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GU",
          name: "Guatemala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HU",
          name: "Huehuetenango",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IZ",
          name: "Izabal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JA",
          name: "Jalapa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JU",
          name: "Jutiapa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PE",
          name: "Petén",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QZ",
          name: "Quetzaltenango",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QC",
          name: "Quiché",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RE",
          name: "Retalhuleu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Sacatepéquez",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SM",
          name: "San Marcos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SR",
          name: "Santa Rosa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Sololá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "Suchitepéquez",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TO",
          name: "Totonicapán",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZA",
          name: "Zacapa",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GG",country_name:"Guernsey",country_code:"44-1481"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GN",country_name:"Guinea",country_code:"224"}
      );
      await db.collection('states').insertMany([
        {
          code: "B",
          name: "Boké",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Conakry",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Faranah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Kankan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Kindia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Labé",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Mamou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Nzérékoré",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GW",country_name:"Guinea-bissau",country_code:"245"}
      );
      await db.collection('states').insertMany([
        {
          code: "L",
          name: "Leste",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Norte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Sul",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GY",country_name:"Guyana",country_code:"592"}
      );
      await db.collection('states').insertMany([
        {
          code: "BA",
          name: "Barima-Waini",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CU",
          name: "Cuyuni-Mazaruni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DE",
          name: "Demerara-Mahaica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EB",
          name: "East Berbice-Corentyne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ES",
          name: "Essequibo Islands-West Demerara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Mahaica-Berbice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PM",
          name: "Pomeroon-Supenaam",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PT",
          name: "Potaro-Siparuni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UD",
          name: "Upper Demerara-Berbice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UT",
          name: "Upper Takutu-Upper Essequibo",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"HT",country_name:"Haiti",country_code:"509"}
      );
      await db.collection('states').insertMany([
        {
          code: "AR",
          name: "Artibonite",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CE",
          name: "Centre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Grande-Anse",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Nippes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ND",
          name: "Nord",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NE",
          name: "Nord-Est",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NO",
          name: "Nord-Ouest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OU",
          name: "Ouest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Sud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "Sud-Est",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"HN",country_name:"Honduras",country_code:"504"}
      );
      await db.collection('states').insertMany([
        {
          code: "AT",
          name: "Atlántida",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CH",
          name: "Choluteca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CL",
          name: "Colón",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CM",
          name: "Comayagua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CP",
          name: "Copán",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CR",
          name: "Cortés",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EP",
          name: "El Paraíso",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FM",
          name: "Francisco Morazán",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GD",
          name: "Gracias a Dios",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IN",
          name: "Intibucá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IB",
          name: "Islas de la Bahía",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LP",
          name: "La Paz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LE",
          name: "Lempira",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OC",
          name: "Ocotepeque",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OL",
          name: "Olancho",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SB",
          name: "Santa Bárbara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VA",
          name: "Valle",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "YO",
          name: "Yoro",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"HK",country_name:"Hong kong",country_code:"852"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"HU",country_name:"Hungary",country_code:"36"}
      );
      await db.collection('states').insertMany([
        {
          code: "BA",
          name: "Baranya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BZ",
          name: "Borsod-Abaúj-Zemplén",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BU",
          name: "Budapest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BK",
          name: "Bács-Kiskun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BE",
          name: "Békés",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BC",
          name: "Békéscsaba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CS",
          name: "Csongrád",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DE",
          name: "Debrecen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DU",
          name: "Dunaújváros",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EG",
          name: "Eger",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FE",
          name: "Fejér",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GY",
          name: "Győr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GS",
          name: "Győr-Moson-Sopron",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HB",
          name: "Hajdú-Bihar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HE",
          name: "Heves",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HV",
          name: "Hódmezővásárhely",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JN",
          name: "Jász-Nagykun-Szolnok",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KV",
          name: "Kaposvár",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KM",
          name: "Kecskemét",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KE",
          name: "Komárom-Esztergom",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MI",
          name: "Miskolc",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NK",
          name: "Nagykanizsa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NY",
          name: "Nyíregyháza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NO",
          name: "Nógrád",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PE",
          name: "Pest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PS",
          name: "Pécs",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ST",
          name: "Salgótarján",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Somogy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SN",
          name: "Sopron",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SZ",
          name: "Szabolcs-Szatmár-Bereg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Szeged",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SS",
          name: "Szekszárd",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SK",
          name: "Szolnok",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Szombathely",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SF",
          name: "Székesfehérvár",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TB",
          name: "Tatabánya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TO",
          name: "Tolna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VA",
          name: "Vas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VE",
          name: "Veszprém",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VM",
          name: "Veszprém",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZA",
          name: "Zala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZE",
          name: "Zalaegerszeg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ER",
          name: "Érd",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IS",country_name:"Iceland",country_code:"354"}
      );
      await db.collection('states').insertMany([
        {
          code: "7",
          name: "Austurland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "1",
          name: "Höfuðborgarsvæði utan Reykjavíkur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "Norðurland eystra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Norðurland vestra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "0",
          name: "Reykjavík",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Suðurland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "2",
          name: "Suðurnes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Vestfirðir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Vesturland",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IN",country_name:"India",country_code:"91"}
      );
      await db.collection('states').insertMany([
        {
          code: "AN",
          name: "Andaman and Nicobar Islands",
          subdivision: "Union territory",
          country_id: country.ops[0]._id
        },
        {
          code: "CH",
          name: "Chandigarh",
          subdivision: "Union territory",
          country_id: country.ops[0]._id
        },
        {
          code: "DN",
          name: "Dadra and Nagar Haveli",
          subdivision: "Union territory",
          country_id: country.ops[0]._id
        },
        {
          code: "DD",
          name: "Daman and Diu",
          subdivision: "Union territory",
          country_id: country.ops[0]._id
        },
        {
          code: "DL",
          name: "Delhi",
          subdivision: "Union territory",
          country_id: country.ops[0]._id
        },
        {
          code: "LD",
          name: "Lakshadweep",
          subdivision: "Union territory",
          country_id: country.ops[0]._id
        },
        {
          code: "PY",
          name: "Puducherry",
          subdivision: "Union territory",
          country_id: country.ops[0]._id
        },
        {
          code: "AP",
          name: "Andhra Pradesh",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Arunachal Pradesh",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "AS",
          name: "Assam",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "BR",
          name: "Bihar",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "CT",
          name: "Chhattisgarh",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Goa",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "GJ",
          name: "Gujarat",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "HR",
          name: "Haryana",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "HP",
          name: "Himachal Pradesh",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "JK",
          name: "Jammu and Kashmir",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "JH",
          name: "Jharkhand",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Karnataka",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "KL",
          name: "Kerala",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MP",
          name: "Madhya Pradesh",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MH",
          name: "Maharashtra",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MN",
          name: "Manipur",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "ML",
          name: "Meghalaya",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MZ",
          name: "Mizoram",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NL",
          name: "Nagaland",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "OR",
          name: "Odisha",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "PB",
          name: "Punjab",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "RJ",
          name: "Rajasthan",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "SK",
          name: "Sikkim",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TN",
          name: "Tamil Nadu",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TG",
          name: "Telangana",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TR",
          name: "Tripura",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "UP",
          name: "Uttar Pradesh",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "UT",
          name: "Uttarakhand",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "WB",
          name: "West Bengal",
          subdivision: "state",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ID",country_name:"Indonesia",country_code:"62"}
      );
      await db.collection('states').insertMany([
        {
          code: "JW",
          name: "Jawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Kalimantan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ML",
          name: "Maluku",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NU",
          name: "Nusa Tenggara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PP",
          name: "Papua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SL",
          name: "Sulawesi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SM",
          name: "Sumatera",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IR",country_name:"Iran",country_code:"98"}
      );
      await db.collection('states').insertMany([
        {
          code: "32",
          name: "Alborz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Ardabīl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Būshehr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Chahār Maḩāll va Bakhtīārī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Eşfahān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Fārs",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Golestān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Gīlān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Hamadān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Hormozgān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Kermān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Kermānshāh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Khorāsān-e Janūbī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Khorāsān-e Razavī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Khorāsān-e Shemālī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Khūzestān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Kohgīlūyeh va Būyer Aḩmad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Kordestān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Lorestān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Markazī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Māzandarān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Qazvīn",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Qom",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Semnān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Sīstān va Balūchestān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Tehrān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Yazd",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Zanjān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Āz̄arbāyjān-e Gharbī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Āz̄arbāyjān-e Sharqī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Īlām",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IM",country_name:"Isle of man",country_code:"44-1624"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IE",country_name:"Ireland",country_code:"353"}
      );
      await db.collection('states').insertMany([
        {
          code: "C",
          name: "Connaught",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Leinster",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Munster",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Ulster",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IQ",country_name:"Iraq",country_code:"964"}
      );
      await db.collection('states').insertMany([
        {
          code: "AN",
          name: "Al Anbār",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Al Başrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MU",
          name: "Al Muthanná",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QA",
          name: "Al Qādisīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NA",
          name: "An Najaf",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Arbīl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "As Sulaymānīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TS",
          name: "At Ta'mīm",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BG",
          name: "Baghdād",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BB",
          name: "Bābil",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DA",
          name: "Dahūk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DQ",
          name: "Dhī Qār",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DI",
          name: "Diyālá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Karbalā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Maysān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Nīnawá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WA",
          name: "Wāsiţ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Şalāḩ ad Dīn",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IL",country_name:"Israel",country_code:"972"}
      );
      await db.collection('states').insertMany([
        {
          code: "D",
          name: "HaDarom",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "HaMerkaz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Z",
          name: "HaTsafon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HA",
          name: "H̱efa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tel-Aviv",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JM",
          name: "Yerushalayim",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"IT",country_name:"Italy",country_code:"39"}
      );
      await db.collection('states').insertMany([
        {
          code: "65",
          name: "Abruzzo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "77",
          name: "Basilicata",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "78",
          name: "Calabria",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "72",
          name: "Campania",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Emilia-Romagna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Friuli-Venezia Giulia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "62",
          name: "Lazio",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Liguria",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Lombardia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "57",
          name: "Marche",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "67",
          name: "Molise",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Piemonte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "75",
          name: "Puglia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "88",
          name: "Sardegna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "82",
          name: "Sicilia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Toscana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Trentino-Alto Adige",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "55",
          name: "Umbria",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Valle d'Aosta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Veneto",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"JM",country_name:"Jamaica",country_code:"1-876"}
      );
      await db.collection('states').insertMany([
        {
          code: "13",
          name: "Clarendon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Hanover",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Kingston",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Manchester",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Portland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Saint Andrew",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Saint Ann",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Saint Catherine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Saint Elizabeth",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Saint James",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Saint Mary",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Saint Thomas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Trelawny",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Westmoreland",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"JP",country_name:"Japan",country_code:"81"}
      );
      await db.collection('states').insertMany([
        {
          code: "23",
          name: "Aiti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Akita",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Aomori",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "38",
          name: "Ehime",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Gihu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Gunma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Hirosima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Hokkaidô",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Hukui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Hukuoka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Hukusima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Hyôgo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Ibaraki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Isikawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Iwate",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "Kagawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Kagosima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Kanagawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Kumamoto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Kyôto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Kôti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Mie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Miyagi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Miyazaki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Nagano",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Nagasaki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Nara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Niigata",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Okayama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Okinawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Saga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Saitama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Siga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Simane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Sizuoka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Tiba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Tokusima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Totigi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Tottori",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Toyama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Tôkyô",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Wakayama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Yamagata",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Yamaguti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Yamanasi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Ôita",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Ôsaka",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"JE",country_name:"Jersey",country_code:"44-1534"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"XU",country_name:"Johnston atoll",country_code:"N/A"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"JO",country_name:"Jordan",country_code:"962"}
      );
      await db.collection('states').insertMany([
        {
          code: "BA",
          name: "Al Balqā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AQ",
          name: "Al ʽAqabah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AZ",
          name: "Az Zarqā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AT",
          name: "Aţ Ţafīlah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IR",
          name: "Irbid",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JA",
          name: "Jerash",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Karak",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MN",
          name: "Ma'ān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Mafraq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MD",
          name: "Mādabā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AJ",
          name: "ʽAjlūn",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AM",
          name: "‘Ammān",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KZ",country_name:"Kazakhstan",country_code:"7-6"}
      );
      await db.collection('states').insertMany([
        {
          code: "ALA",
          name: "Almaty",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ALM",
          name: "Almaty oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AKM",
          name: "Aqmola oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AKT",
          name: "Aqtöbe oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AST",
          name: "Astana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ATY",
          name: "Atyraū oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZAP",
          name: "Batys Qazaqstan oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MAN",
          name: "Mangghystaū oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "YUZ",
          name: "Ongtüstik Qazaqstan oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PAV",
          name: "Pavlodar oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KAR",
          name: "Qaraghandy oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KUS",
          name: "Qostanay oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KZY",
          name: "Qyzylorda oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VOS",
          name: "Shyghys Qazaqstan oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SEV",
          name: "Soltüstik Qazaqstan oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZHA",
          name: "Zhambyl oblysy",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KE",country_name:"Kenya",country_code:"254"}
      );
      await db.collection('states').insertMany([
        {
          code: "200",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "300",
          name: "Coast",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "400",
          name: "Eastern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "110",
          name: "Nairobi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "500",
          name: "North-Eastern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "600",
          name: "Nyanza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "700",
          name: "Rift Valley",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "800",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KI",country_name:"Kiribati",country_code:"686"}
      );
      await db.collection('states').insertMany([
        {
          code: "G",
          name: "Gilbert Islands",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Line Islands",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Phoenix Islands",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KP",country_name:"Korea, north",country_code:"850"}
      );
      await db.collection('states').insertMany([
        {
          code: "04",
          name: "Chagang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Kangwon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "North Hamgyong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "North Hwanghae",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "North Pyongan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Pyongyang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Rason",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Ryanggang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "South Hamgyong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "South Hwanghae",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "South Pyongan",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KR",country_name:"Korea, south",country_code:"82"}
      );
      await db.collection('states').insertMany([
        {
          code: "26",
          name: "Busan-gwangyeoksi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Chungcheongbuk-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Chungcheongnam-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Daegu-gwangyeoksi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Daejeon-gwangyeoksi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Gangwon-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Gwangju-gwangyeoksi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Gyeonggi-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Gyeongsangbuk-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "48",
          name: "Gyeongsangnam-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Incheon-gwangyeoksi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "49",
          name: "Jeju-teukbyeoljachido",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Jeollabuk-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Jeollanam-do",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "50",
          name: "Sejong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Seoul-teukbyeolsi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Ulsan-gwangyeoksi",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KW",country_name:"Kuwait",country_code:"965"}
      );
      await db.collection('states').insertMany([
        {
          code: "AH",
          name: "Al Aḩmadi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FA",
          name: "Al Farwānīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JA",
          name: "Al Jahrā’",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KU",
          name: "Al Kuwayt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MU",
          name: "Mubārak al Kabīr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HA",
          name: "Ḩawallī",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KG",country_name:"Kyrgyzstan",country_code:"996"}
      );
      await db.collection('states').insertMany([
        {
          code: "B",
          name: "Batken",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GB",
          name: "Bishkek",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Chü",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "J",
          name: "Jalal-Abad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Naryn",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "O",
          name: "Osh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Talas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Y",
          name: "Ysyk-Köl",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LA",country_name:"Laos",country_code:"856"}
      );
      await db.collection('states').insertMany([
        {
          code: "AT",
          name: "Attapu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BK",
          name: "Bokèo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BL",
          name: "Bolikhamxai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CH",
          name: "Champasak",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HO",
          name: "Houaphan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KH",
          name: "Khammouan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LM",
          name: "Louang Namtha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LP",
          name: "Louangphabang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OU",
          name: "Oudômxai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PH",
          name: "Phôngsali",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SL",
          name: "Salavan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SV",
          name: "Savannakhét",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VT",
          name: "Vientiane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VI",
          name: "Vientiane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "XA",
          name: "Xaignabouli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "XN",
          name: "Xaisômboun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "XI",
          name: "Xiangkhoang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "XE",
          name: "Xékong",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LV",country_name:"Latvia",country_code:"371"}
      );
      await db.collection('states').insertMany([
        {
          code: "001",
          name: "Aglonas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "002",
          name: "Aizkraukles novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "003",
          name: "Aizputes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "004",
          name: "Aknīstes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "005",
          name: "Alojas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "006",
          name: "Alsungas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "007",
          name: "Alūksnes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "008",
          name: "Amatas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "009",
          name: "Apes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "010",
          name: "Auces novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "012",
          name: "Babītes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "013",
          name: "Baldones novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "014",
          name: "Baltinavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "015",
          name: "Balvu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "016",
          name: "Bauskas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "017",
          name: "Beverīnas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "018",
          name: "Brocēnu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "019",
          name: "Burtnieku novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "020",
          name: "Carnikavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "021",
          name: "Cesvaines novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "023",
          name: "Ciblas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "022",
          name: "Cēsu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "024",
          name: "Dagdas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DGV",
          name: "Daugavpils",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "025",
          name: "Daugavpils novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "026",
          name: "Dobeles novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "027",
          name: "Dundagas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "028",
          name: "Durbes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "029",
          name: "Engures novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "031",
          name: "Garkalnes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "032",
          name: "Grobiņas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "033",
          name: "Gulbenes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "034",
          name: "Iecavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "035",
          name: "Ikšķiles novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "036",
          name: "Ilūkstes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "037",
          name: "Inčukalna novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "038",
          name: "Jaunjelgavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "039",
          name: "Jaunpiebalgas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "040",
          name: "Jaunpils novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JEL",
          name: "Jelgava",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "041",
          name: "Jelgavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JKB",
          name: "Jēkabpils",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "042",
          name: "Jēkabpils novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JUR",
          name: "Jūrmala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "043",
          name: "Kandavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "045",
          name: "Kocēnu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "046",
          name: "Kokneses novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "048",
          name: "Krimuldas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "049",
          name: "Krustpils novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "047",
          name: "Krāslavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "050",
          name: "Kuldīgas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "044",
          name: "Kārsavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "053",
          name: "Lielvārdes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LPX",
          name: "Liepāja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "054",
          name: "Limbažu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "057",
          name: "Lubānas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "058",
          name: "Ludzas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "055",
          name: "Līgatnes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "056",
          name: "Līvānu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "059",
          name: "Madonas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "060",
          name: "Mazsalacas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "061",
          name: "Mālpils novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "062",
          name: "Mārupes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "063",
          name: "Mērsraga novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "064",
          name: "Naukšēnu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "065",
          name: "Neretas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "066",
          name: "Nīcas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "067",
          name: "Ogres novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "068",
          name: "Olaines novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "069",
          name: "Ozolnieku novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "073",
          name: "Preiļu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "074",
          name: "Priekules novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "075",
          name: "Priekuļu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "070",
          name: "Pārgaujas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "071",
          name: "Pāvilostas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "072",
          name: "Pļaviņu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "076",
          name: "Raunas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "078",
          name: "Riebiņu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "079",
          name: "Rojas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "080",
          name: "Ropažu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "081",
          name: "Rucavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "082",
          name: "Rugāju novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "083",
          name: "Rundāles novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "REZ",
          name: "Rēzekne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "077",
          name: "Rēzeknes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RIX",
          name: "Rīga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "084",
          name: "Rūjienas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "086",
          name: "Salacgrīvas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "085",
          name: "Salas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "087",
          name: "Salaspils novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "088",
          name: "Saldus novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "089",
          name: "Saulkrastu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "091",
          name: "Siguldas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "093",
          name: "Skrundas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "092",
          name: "Skrīveru novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "094",
          name: "Smiltenes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "095",
          name: "Stopiņu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "096",
          name: "Strenču novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "090",
          name: "Sējas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "097",
          name: "Talsu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "099",
          name: "Tukuma novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "098",
          name: "Tērvetes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "100",
          name: "Vaiņodes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "101",
          name: "Valkas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VMR",
          name: "Valmiera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "102",
          name: "Varakļānu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "104",
          name: "Vecpiebalgas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "105",
          name: "Vecumnieku novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VEN",
          name: "Ventspils",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "106",
          name: "Ventspils novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "107",
          name: "Viesītes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "108",
          name: "Viļakas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "109",
          name: "Viļānu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "103",
          name: "Vārkavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "110",
          name: "Zilupes novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "011",
          name: "Ādažu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "030",
          name: "Ērgļu novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "051",
          name: "Ķeguma novads",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "052",
          name: "Ķekavas novads",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LB",country_name:"Lebanon",country_code:"961"}
      );
      await db.collection('states').insertMany([
        {
          code: "AK",
          name: "Aakkâr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BH",
          name: "Baalbek-Hermel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Beyrouth",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BI",
          name: "Béqaa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AS",
          name: "Liban-Nord",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JA",
          name: "Liban-Sud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JL",
          name: "Mont-Liban",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NA",
          name: "Nabatîyé",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LS",country_name:"Lesotho",country_code:"266"}
      );
      await db.collection('states').insertMany([
        {
          code: "D",
          name: "Berea",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Butha-Buthe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Leribe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Mafeteng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "A",
          name: "Maseru",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Mohale's Hoek",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "J",
          name: "Mokhotlong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Qacha's Nek",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Quthing",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Thaba-Tseka",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LR",country_name:"Liberia",country_code:"231"}
      );
      await db.collection('states').insertMany([
        {
          code: "BM",
          name: "Bomi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BG",
          name: "Bong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GP",
          name: "Gbarpolu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GB",
          name: "Grand Bassa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CM",
          name: "Grand Cape Mount",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GG",
          name: "Grand Gedeh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GK",
          name: "Grand Kru",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LO",
          name: "Lofa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MG",
          name: "Margibi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MY",
          name: "Maryland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Montserrado",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Nimba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RG",
          name: "River Gee",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RI",
          name: "Rivercess",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SI",
          name: "Sinoe",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LY",country_name:"Libya",country_code:"218"}
      );
      await db.collection('states').insertMany([
        {
          code: "BU",
          name: "Al Buţnān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JA",
          name: "Al Jabal al Akhḑar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JG",
          name: "Al Jabal al Gharbī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JI",
          name: "Al Jifārah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JU",
          name: "Al Jufrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KF",
          name: "Al Kufrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MJ",
          name: "Al Marj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MB",
          name: "Al Marqab",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WA",
          name: "Al Wāḩāt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NQ",
          name: "An Nuqaţ al Khams",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZA",
          name: "Az Zāwiyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Banghāzī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DR",
          name: "Darnah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GT",
          name: "Ghāt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MI",
          name: "Mişrātah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MQ",
          name: "Murzuq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NL",
          name: "Nālūt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SB",
          name: "Sabhā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SR",
          name: "Surt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WD",
          name: "Wādī al Ḩayāt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WS",
          name: "Wādī ash Shāţiʾ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TB",
          name: "Ţarābulus",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LI",country_name:"Liechtenstein",country_code:"423"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Balzers",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Eschen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Gamprin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Mauren",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Planken",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Ruggell",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Schaan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Schellenberg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Triesen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Triesenberg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Vaduz",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LT",country_name:"Lithuania",country_code:"370"}
      );
      await db.collection('states').insertMany([
        {
          code: "AL",
          name: "Alytaus Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KU",
          name: "Kauno Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KL",
          name: "Klaipėdos Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MR",
          name: "Marijampolės Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PN",
          name: "Panevėžio Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tauragės Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TE",
          name: "Telšių Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UT",
          name: "Utenos Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VL",
          name: "Vilniaus Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Šiaulių Apskritis",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LU",country_name:"Luxembourg",country_code:"352"}
      );
      await db.collection('states').insertMany([
        {
          code: "D",
          name: "Diekirch",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Grevenmacher",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Luxembourg",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MO",country_name:"Macau",country_code:"853"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MK",country_name:"Macedonia",country_code:"389"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Aerodrom",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Aračinovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Berovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Bitola",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Bogdanci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Bogovinje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Bosilovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Brvenica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Butel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "77",
          name: "Centar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "78",
          name: "Centar Župa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Debar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Debarca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Delčevo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Demir Hisar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Demir Kapija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Dojran",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Dolneni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Drugovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Gazi Baba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Gevgelija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Gjorče Petrov",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Gostivar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Gradsko",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Ilinden",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Jegunovce",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "Karbinci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "38",
          name: "Karpoš",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Kavadarci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Kisela Voda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Kičevo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Konče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Kočani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Kratovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Kriva Palanka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Krivogaštani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Kruševo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Kumanovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "48",
          name: "Lipkovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "49",
          name: "Lozovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Makedonska Kamenica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Makedonski Brod",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "50",
          name: "Mavrovo i Rostuša",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Mogila",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "54",
          name: "Negotino",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "55",
          name: "Novaci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "56",
          name: "Novo Selo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "58",
          name: "Ohrid",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "57",
          name: "Oslomej",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "60",
          name: "Pehčevo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "59",
          name: "Petrovec",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Plasnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "62",
          name: "Prilep",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "63",
          name: "Probištip",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "64",
          name: "Radoviš",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "65",
          name: "Rankovce",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "66",
          name: "Resen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "67",
          name: "Rosoman",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "68",
          name: "Saraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "70",
          name: "Sopište",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "71",
          name: "Staro Nagoričane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "72",
          name: "Struga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "73",
          name: "Strumica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "74",
          name: "Studeničani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "69",
          name: "Sveti Nikole",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "75",
          name: "Tearce",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "76",
          name: "Tetovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Valandovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Vasilevo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Veles",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Vevčani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Vinica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Vraneštica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Vrapčište",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Zajas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Zelenikovo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Zrnovci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "79",
          name: "Čair",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "80",
          name: "Čaška",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "81",
          name: "Češinovo-Obleševo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "82",
          name: "Čučer Sandevo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "83",
          name: "Štip",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "84",
          name: "Šuto Orizari",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Želino",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MG",country_name:"Madagascar",country_code:"261"}
      );
      await db.collection('states').insertMany([
        {
          code: "T",
          name: "Antananarivo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Antsiranana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Fianarantsoa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Mahajanga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "A",
          name: "Toamasina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Toliara",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MW",country_name:"Malawi",country_code:"265"}
      );
      await db.collection('states').insertMany([
        {
          code: "C",
          name: "Central Region",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Northern Region",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Southern Region",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MY",country_name:"Malaysia",country_code:"60"}
      );
      await db.collection('states').insertMany([
        {
          code: "14",
          name: "Wilayah Persekutuan Kuala Lumpur",
          subdivision: "federal territory",
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Wilayah Persekutuan Labuan",
          subdivision: "federal territory",
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Wilayah Persekutuan Putrajaya",
          subdivision: "federal territory",
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Johor",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Kedah",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Kelantan",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Melaka",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Negeri Sembilan",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Pahang",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Perak",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Perlis",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Pulau Pinang",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Sabah",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Sarawak",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Selangor",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Terengganu",
          subdivision: "state",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MV",country_name:"Maldives",country_code:"960"}
      );
      await db.collection('states').insertMany([
        {
          code: "CE",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MLE",
          name: "Male",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NO",
          name: "North",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NC",
          name: "North Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "South",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SC",
          name: "South Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UN",
          name: "Upper North",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "US",
          name: "Upper South",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ML",country_name:"Mali",country_code:"223"}
      );
      await db.collection('states').insertMany([
        {
          code: "BKO",
          name: "Bamako",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "Gao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "1",
          name: "Kayes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Kidal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "2",
          name: "Koulikoro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Mopti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Sikasso",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Ségou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "Tombouctou",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MT",country_name:"Malta",country_code:"356"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Attard",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Balzan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Birgu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Birkirkara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Birżebbuġa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Bormla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Dingli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Fgura",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Floriana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Fontana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Gudja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Għajnsielem",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Għarb",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Għargħur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Għasri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Għaxaq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Gżira",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Iklin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Isla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Kalkara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Kerċem",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Kirkop",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Lija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Luqa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Marsa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Marsaskala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Marsaxlokk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Mdina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Mellieħa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Mosta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Mqabba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Msida",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Mtarfa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Munxar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Mġarr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "Nadur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "38",
          name: "Naxxar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Paola",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Pembroke",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Pietà",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Qala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Qormi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Qrendi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Rabat Għawdex",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Rabat Malta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Safi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "50",
          name: "San Lawrenz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "San Pawl il-Baħar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "48",
          name: "San Ġiljan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "49",
          name: "San Ġwann",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Sannat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Santa Luċija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "54",
          name: "Santa Venera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "55",
          name: "Siġġiewi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "56",
          name: "Sliema",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "57",
          name: "Swieqi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "58",
          name: "Ta' Xbiex",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "59",
          name: "Tarxien",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "60",
          name: "Valletta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Xagħra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "62",
          name: "Xewkija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "63",
          name: "Xgħajra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Ħamrun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "64",
          name: "Żabbar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "65",
          name: "Żebbuġ Għawdex",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "66",
          name: "Żebbuġ Malta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "67",
          name: "Żejtun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "68",
          name: "Żurrieq",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MH",country_name:"Marshall islands",country_code:"692"}
      );
      await db.collection('states').insertMany([
        {
          code: "L",
          name: "Ralik chain",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Ratak chain",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MQ",country_name:"Martinique",country_code:"596"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MR",country_name:"Mauritania",country_code:"t222"}
      );
      await db.collection('states').insertMany([
        {
          code: "07",
          name: "Adrar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Assaba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Brakna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Dakhlet Nouâdhibou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Gorgol",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Guidimaka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Hodh ech Chargui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Hodh el Gharbi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Inchiri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NKC",
          name: "Nouakchott",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Tagant",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Tiris Zemmour",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Trarza",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MU",country_name:"Mauritius",country_code:"230"}
      );
      await db.collection('states').insertMany([
        {
          code: "AG",
          name: "Agalega Islands",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BR",
          name: "Beau Bassin-Rose Hill",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BL",
          name: "Black River",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CC",
          name: "Cargados Carajos Shoals",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CU",
          name: "Curepipe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FL",
          name: "Flacq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GP",
          name: "Grand Port",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Moka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PA",
          name: "Pamplemousses",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PW",
          name: "Plaines Wilhems",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PL",
          name: "Port Louis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PU",
          name: "Port Louis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QB",
          name: "Quatre Bornes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RR",
          name: "Rivière du Rempart",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RO",
          name: "Rodrigues Island",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Savanne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VP",
          name: "Vacoas-Phoenix",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"YT",country_name:"Mayotte",country_code:"262-269"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MX",country_name:"Mexico",country_code:"52"}
      );
      await db.collection('states').insertMany([
        {
          code: "DIF",
          name: "Distrito Federal",
          subdivision: "federal district",
          country_id: country.ops[0]._id
        },
        {
          code: "AGU",
          name: "Aguascalientes",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "BCN",
          name: "Baja California",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "BCS",
          name: "Baja California Sur",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "CAM",
          name: "Campeche",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "CHP",
          name: "Chiapas",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "CHH",
          name: "Chihuahua",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "COA",
          name: "Coahuila",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "COL",
          name: "Colima",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "DUR",
          name: "Durango",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "GUA",
          name: "Guanajuato",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "GRO",
          name: "Guerrero",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "HID",
          name: "Hidalgo",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "JAL",
          name: "Jalisco",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MIC",
          name: "Michoacán",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MOR",
          name: "Morelos",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MEX",
          name: "México",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NAY",
          name: "Nayarit",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NLE",
          name: "Nuevo León",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "OAX",
          name: "Oaxaca",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "PUE",
          name: "Puebla",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "QUE",
          name: "Querétaro",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "ROO",
          name: "Quintana Roo",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "SLP",
          name: "San Luis Potosí",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "SIN",
          name: "Sinaloa",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "SON",
          name: "Sonora",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TAB",
          name: "Tabasco",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TAM",
          name: "Tamaulipas",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TLA",
          name: "Tlaxcala",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "VER",
          name: "Veracruz",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "YUC",
          name: "Yucatán",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "ZAC",
          name: "Zacatecas",
          subdivision: "state",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"FM",country_name:"Micronesia, federated states of",country_code:"691"}
      );
      await db.collection('states').insertMany([
        {
          code: "TRK",
          name: "Chuuk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KSA",
          name: "Kosrae",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PNI",
          name: "Pohnpei",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "YAP",
          name: "Yap",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"QM",country_name:"Midway islands",country_code:"1-808A"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MD",country_name:"Moldova",country_code:"373"}
      );
      await db.collection('states').insertMany([
        {
          code: "AN",
          name: "Anenii Noi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BS",
          name: "Basarabeasca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BR",
          name: "Briceni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Bălţi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "Cahul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CT",
          name: "Cantemir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CU",
          name: "Chişinău",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CM",
          name: "Cimişlia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CR",
          name: "Criuleni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CL",
          name: "Călăraşi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CS",
          name: "Căuşeni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DO",
          name: "Donduşeni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DR",
          name: "Drochia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DU",
          name: "Dubăsari",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ED",
          name: "Edineţ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FL",
          name: "Floreşti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FA",
          name: "Făleşti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GL",
          name: "Glodeni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Găgăuzia, Unitatea teritorială autonomă",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HI",
          name: "Hînceşti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IA",
          name: "Ialoveni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LE",
          name: "Leova",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Nisporeni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OC",
          name: "Ocniţa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OR",
          name: "Orhei",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RE",
          name: "Rezina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RI",
          name: "Rîşcani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Soroca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ST",
          name: "Străşeni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SN",
          name: "Stînga Nistrului, unitatea teritorială din",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SI",
          name: "Sîngerei",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Taraclia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TE",
          name: "Teleneşti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BD",
          name: "Tighina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UN",
          name: "Ungheni",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Şoldăneşti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SV",
          name: "Ştefan Vodă",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MC",country_name:"Monaco",country_code:"377"}
      );
      await db.collection('states').insertMany([
        {
          code: "FO",
          name: "Fontvieille",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JE",
          name: "Jardin Exotique",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CL",
          name: "La Colle",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "La Condamine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "La Gare",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "La Source",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LA",
          name: "Larvotto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Malbousquet",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Monaco-Ville",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MG",
          name: "Moneghetti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MC",
          name: "Monte-Carlo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MU",
          name: "Moulins",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PH",
          name: "Port-Hercule",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SR",
          name: "Saint-Roman",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Sainte-Dévote",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SP",
          name: "Spélugues",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VR",
          name: "Vallon de la Rousse",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MN",country_name:"Mongolia",country_code:"976"}
      );
      await db.collection('states').insertMany([
        {
          code: "073",
          name: "Arhangay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "071",
          name: "Bayan-Ölgiy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "069",
          name: "Bayanhongor",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "067",
          name: "Bulgan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "037",
          name: "Darhan uul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "061",
          name: "Dornod",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "063",
          name: "Dornogovĭ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "059",
          name: "Dundgovĭ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "057",
          name: "Dzavhan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "065",
          name: "Govĭ-Altay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "064",
          name: "Govĭ-Sümber",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "039",
          name: "Hentiy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "043",
          name: "Hovd",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "041",
          name: "Hövsgöl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "035",
          name: "Orhon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "049",
          name: "Selenge",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "051",
          name: "Sühbaatar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "047",
          name: "Töv",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "1",
          name: "Ulaanbaatar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "046",
          name: "Uvs",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "053",
          name: "Ömnögovĭ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "055",
          name: "Övörhangay",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ME",country_name:"Montenegro",country_code:"382"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Andrijevica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Bar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Berane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Bijelo Polje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Budva",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Cetinje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Danilovgrad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Gusinje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Herceg-Novi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Kolašin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Kotor",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Mojkovac",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Nikšić",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Petnjica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Plav",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Pljevlja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Plužine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Podgorica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Rožaje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Tivat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Ulcinj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Šavnik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Žabljak",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MS",country_name:"Montserrat",country_code:"1-664"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MA",country_name:"Morocco",country_code:"212B"}
      );
      await db.collection('states').insertMany([
        {
          code: "09",
          name: "Chaouia-Ouardigha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Doukhala-Abda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Fès-Boulemane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Gharb-Chrarda-Beni Hssen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Grand Casablanca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Guelmim-Es Smara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "L'Oriental",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Laâyoune-Boujdour-Sakia el Hamra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Marrakech-Tensift-Al Haouz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Meknès-Tafilalet",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Oued ed Dahab-Lagouira",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Rabat-Salé-Zemmour-Zaer",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Souss-Massa-Drâa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Tadla-Azilal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Tanger-Tétouan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Taza-Al Hoceima-Taounate",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MZ",country_name:"Mozambique",country_code:"258"}
      );
      await db.collection('states').insertMany([
        {
          code: "P",
          name: "Cabo Delgado",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Gaza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "I",
          name: "Inhambane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Manica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MPM",
          name: "Maputo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Maputo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Nampula",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "A",
          name: "Niassa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Sofala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Tete",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Q",
          name: "Zambézia",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MM",country_name:"Myanmar",country_code:"95"}
      );
      await db.collection('states').insertMany([
        {
          code: "07",
          name: "Ayeyarwady",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Bago",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Chin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Kachin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Kayah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Kayin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Magway",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Mandalay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Mon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Rakhine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Sagaing",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Shan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Tanintharyi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Yangon",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NA",country_name:"Namibia",country_code:"264"}
      );
      await db.collection('states').insertMany([
        {
          code: "ER",
          name: "Erongo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HA",
          name: "Hardap",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Karas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KE",
          name: "Kavango East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KW",
          name: "Kavango West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KH",
          name: "Khomas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KU",
          name: "Kunene",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OW",
          name: "Ohangwena",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OH",
          name: "Omaheke",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OS",
          name: "Omusati",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ON",
          name: "Oshana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OT",
          name: "Oshikoto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OD",
          name: "Otjozondjupa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "Zambezi",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NR",country_name:"Nauru",country_code:"674"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Aiwo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Anabar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Anetan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Anibare",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Baiti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Boe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Buada",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Denigomodu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Ewa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Ijuw",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Meneng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Nibok",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Uaboe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Yaren",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NP",country_name:"Nepal",country_code:"977"}
      );
      await db.collection('states').insertMany([
        {
          code: "2",
          name: "Madhya Pashchimanchal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "1",
          name: "Madhyamanchal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Pashchimanchal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Purwanchal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Sudur Pashchimanchal",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NL",country_name:"Netherlands",country_code:"31"}
      );
      await db.collection('states').insertMany([
        {
          code: "DR",
          name: "Drenthe",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "FL",
          name: "Flevoland",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "FR",
          name: "Fryslân",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "GE",
          name: "Gelderland",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "GR",
          name: "Groningen",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "LI",
          name: "Limburg",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "NB",
          name: "Noord-Brabant",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "NH",
          name: "Noord-Holland",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "OV",
          name: "Overijssel",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "UT",
          name: "Utrecht",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "ZE",
          name: "Zeeland",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "ZH",
          name: "Zuid-Holland",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "AW",
          name: "Aruba",
          subdivision: "country",
          country_id: country.ops[0]._id
        },
        {
          code: "CW",
          name: "Curaçao",
          subdivision: "country",
          country_id: country.ops[0]._id
        },
        {
          code: "SX",
          name: "Sint Maarten",
          subdivision: "country",
          country_id: country.ops[0]._id
        },
        {
          code: "BQ1",
          name: "Bonaire",
          subdivision: "special municipality",
          country_id: country.ops[0]._id
        },
        {
          code: "BQ2",
          name: "Saba",
          subdivision: "special municipality",
          country_id: country.ops[0]._id
        },
        {
          code: "BQ3",
          name: "Sint Eustatius",
          subdivision: "special municipality",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NC",country_name:"New caledonia",country_code:"687"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NZ",country_name:"New zealand",country_code:"64"}
      );
      await db.collection('states').insertMany([
        {
          code: "N",
          name: "North Island",
          subdivision: "Island",
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "South Island",
          subdivision: "Island",
          country_id: country.ops[0]._id
        },
        {
          code: "AUK",
          name: "Auckland",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "BOP",
          name: "Bay of Plenty",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "CAN",
          name: "Canterbury",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "HKB",
          name: "Hawke's Bay",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "MWT",
          name: "Manawatu-Wanganui",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "NTL",
          name: "Northland",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "OTA",
          name: "Otago",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "STL",
          name: "Southland",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "TKI",
          name: "Taranaki",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "WKO",
          name: "Waikato",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "WGN",
          name: "Wellington",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "WTC",
          name: "West Coast",
          subdivision: "regional council",
          country_id: country.ops[0]._id
        },
        {
          code: "CIT",
          name: "Chatham Islands Territory",
          subdivision: "special island authority",
          country_id: country.ops[0]._id
        },
        {
          code: "GIS",
          name: "Gisborne District",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "MBH",
          name: "Marlborough District",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NSN",
          name: "Nelson City",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "TAS",
          name: "Tasman District",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NI",country_name:"Nicaragua",country_code:"505"}
      );
      await db.collection('states').insertMany([
        {
          code: "AN",
          name: "Atlántico Norte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AS",
          name: "Atlántico Sur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BO",
          name: "Boaco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "Carazo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CI",
          name: "Chinandega",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "Chontales",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ES",
          name: "Estelí",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GR",
          name: "Granada",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JI",
          name: "Jinotega",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LE",
          name: "León",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MD",
          name: "Madriz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MN",
          name: "Managua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MS",
          name: "Masaya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MT",
          name: "Matagalpa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NS",
          name: "Nueva Segovia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RI",
          name: "Rivas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SJ",
          name: "Río San Juan",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NE",country_name:"Niger",country_code:"227"}
      );
      await db.collection('states').insertMany([
        {
          code: "1",
          name: "Agadez",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "2",
          name: "Diffa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Dosso",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Maradi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Niamey",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Tahoua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "Tillabéri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "Zinder",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NG",country_name:"Nigeria",country_code:"234"}
      );
      await db.collection('states').insertMany([
        {
          code: "AB",
          name: "Abia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FC",
          name: "Abuja Federal Capital Territory",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AD",
          name: "Adamawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AK",
          name: "Akwa Ibom",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AN",
          name: "Anambra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Bauchi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BY",
          name: "Bayelsa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BE",
          name: "Benue",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BO",
          name: "Borno",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CR",
          name: "Cross River",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DE",
          name: "Delta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EB",
          name: "Ebonyi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ED",
          name: "Edo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EK",
          name: "Ekiti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EN",
          name: "Enugu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GO",
          name: "Gombe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IM",
          name: "Imo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JI",
          name: "Jigawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KD",
          name: "Kaduna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KN",
          name: "Kano",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KT",
          name: "Katsina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KE",
          name: "Kebbi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KO",
          name: "Kogi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KW",
          name: "Kwara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LA",
          name: "Lagos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NA",
          name: "Nassarawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Niger",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OG",
          name: "Ogun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ON",
          name: "Ondo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OS",
          name: "Osun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OY",
          name: "Oyo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PL",
          name: "Plateau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RI",
          name: "Rivers",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Sokoto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Taraba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "YO",
          name: "Yobe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZA",
          name: "Zamfara",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NU",country_name:"Niue",country_code:"683"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NF",country_name:"Norfolk island",country_code:"672-3"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"MP",country_name:"Northern mariana islands",country_code:"1-670"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"NO",country_name:"Norway",country_code:"47"}
      );
      await db.collection('states').insertMany([
        {
          code: "02",
          name: "Akershus",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Aust-Agder",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Buskerud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Finnmark",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Hedmark",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Hordaland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Jan Mayen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Møre og Romsdal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Nord-Trøndelag",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Nordland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Oppland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Oslo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Rogaland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Sogn og Fjordane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Svalbard",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Sør-Trøndelag",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Telemark",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Troms",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Vest-Agder",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Vestfold",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Østfold",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"OM",country_name:"Oman",country_code:"968"}
      );
      await db.collection('states').insertMany([
        {
          code: "DA",
          name: "Ad Dākhilīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BU",
          name: "Al Buraymī",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Al Bāţinah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WU",
          name: "Al Wusţá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Ash Sharqīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZA",
          name: "Az̧ Z̧āhirah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Masqaţ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MU",
          name: "Musandam",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZU",
          name: "Z̧ufār",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PK",country_name:"Pakistan",country_code:"92"}
      );
      await db.collection('states').insertMany([
        {
          code: "JK",
          name: "Azad Kashmir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Balochistan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Federally Administered Tribal Areas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GB",
          name: "Gilgit-Baltistan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IS",
          name: "Islamabad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KP",
          name: "Khyber Pakhtunkhwa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PB",
          name: "Punjab",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Sindh",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PW",country_name:"Palau",country_code:"680"}
      );
      await db.collection('states').insertMany([
        {
          code: "002",
          name: "Aimeliik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "004",
          name: "Airai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "010",
          name: "Angaur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "050",
          name: "Hatobohei",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "100",
          name: "Kayangel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "150",
          name: "Koror",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "212",
          name: "Melekeok",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "214",
          name: "Ngaraard",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "218",
          name: "Ngarchelong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "222",
          name: "Ngardmau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "224",
          name: "Ngatpang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "226",
          name: "Ngchesar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "227",
          name: "Ngeremlengui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "228",
          name: "Ngiwal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "350",
          name: "Peleliu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "370",
          name: "Sonsorol",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PA",country_name:"Panama",country_code:"507"}
      );
      await db.collection('states').insertMany([
        {
          code: "1",
          name: "Bocas del Toro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Chiriquí",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "2",
          name: "Coclé",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Colón",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Darién",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EM",
          name: "Emberá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "Herrera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KY",
          name: "Kuna Yala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "Los Santos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NB",
          name: "Ngöbe-Buglé",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Panamá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Panamá Oeste",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "9",
          name: "Veraguas",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PG",country_name:"Papua new guinea",country_code:"675"}
      );
      await db.collection('states').insertMany([
        {
          code: "NSB",
          name: "Bougainville",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CPM",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CPK",
          name: "Chimbu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EBR",
          name: "East New Britain",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ESW",
          name: "East Sepik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EHG",
          name: "Eastern Highlands",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "EPW",
          name: "Enga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GPK",
          name: "Gulf",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MPM",
          name: "Madang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MRL",
          name: "Manus",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MBA",
          name: "Milne Bay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MPL",
          name: "Morobe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NCD",
          name: "National Capital District",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NIK",
          name: "New Ireland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NPP",
          name: "Northern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SAN",
          name: "Sandaun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SHM",
          name: "Southern Highlands",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WBK",
          name: "West New Britain",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WPD",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WHM",
          name: "Western Highlands",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PY",country_name:"Paraguay",country_code:"595"}
      );
      await db.collection('states').insertMany([
        {
          code: "16",
          name: "Alto Paraguay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Alto Paraná",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Amambay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ASU",
          name: "Asunción",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Boquerón",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Caaguazú",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "Caazapá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Canindeyú",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "1",
          name: "Concepción",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Cordillera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Guairá",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "Itapúa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Misiones",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "9",
          name: "Paraguarí",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Presidente Hayes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "2",
          name: "San Pedro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Ñeembucú",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PE",country_name:"Peru",country_code:"51"}
      );
      await db.collection('states').insertMany([
        {
          code: "AMA",
          name: "Amazonas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ANC",
          name: "Ancash",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "APU",
          name: "Apurímac",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ARE",
          name: "Arequipa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AYA",
          name: "Ayacucho",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CAJ",
          name: "Cajamarca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CUS",
          name: "Cusco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CAL",
          name: "El Callao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HUV",
          name: "Huancavelica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HUC",
          name: "Huánuco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ICA",
          name: "Ica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JUN",
          name: "Junín",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LAL",
          name: "La Libertad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LAM",
          name: "Lambayeque",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LIM",
          name: "Lima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LOR",
          name: "Loreto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MDD",
          name: "Madre de Dios",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MOQ",
          name: "Moquegua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LMA",
          name: "Municipalidad Metropolitana de Lima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PAS",
          name: "Pasco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PIU",
          name: "Piura",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PUN",
          name: "Puno",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SAM",
          name: "San Martín",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TAC",
          name: "Tacna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TUM",
          name: "Tumbes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UCA",
          name: "Ucayali",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PH",country_name:"Philippines",country_code:"63"}
      );
      await db.collection('states').insertMany([
        {
          code: "14",
          name: "Autonomous Region in Muslim Mindanao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Bicol",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Cagayan Valley",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Calabarzon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Caraga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Central Luzon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Central Visayas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Cordillera Administrative Region",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Davao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Eastern Visayas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Ilocos",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Mimaropa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "00",
          name: "National Capital Region",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Northern Mindanao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Soccsksargen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Western Visayas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Zamboanga Peninsula",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PN",country_name:"Pitcairn islands",country_code:"64A"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PL",country_name:"Poland",country_code:"48"}
      );
      await db.collection('states').insertMany([
        {
          code: "DS",
          name: "Dolnośląskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KP",
          name: "Kujawsko-pomorskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LU",
          name: "Lubelskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LB",
          name: "Lubuskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MZ",
          name: "Mazowieckie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Małopolskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OP",
          name: "Opolskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PK",
          name: "Podkarpackie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PD",
          name: "Podlaskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PM",
          name: "Pomorskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WN",
          name: "Warmińsko-mazurskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WP",
          name: "Wielkopolskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZP",
          name: "Zachodniopomorskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LD",
          name: "Łódzkie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SL",
          name: "Śląskie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SK",
          name: "Świętokrzyskie",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PT",country_name:"Portugal",country_code:"351"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Aveiro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Beja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Braga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Bragança",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Castelo Branco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Coimbra",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Faro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Guarda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Leiria",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Lisboa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Portalegre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Porto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Região Autónoma da Madeira",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Região Autónoma dos Açores",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Santarém",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Setúbal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Viana do Castelo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Vila Real",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Viseu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Évora",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"PR",country_name:"Puerto rico",country_code:"1-787"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"QA",country_name:"Qatar",country_code:"974"}
      );
      await db.collection('states').insertMany([
        {
          code: "DA",
          name: "Ad Dawḩah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KH",
          name: "Al Khawr wa adh Dhakhīrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WA",
          name: "Al Wakrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RA",
          name: "Ar Rayyān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MS",
          name: "Ash Shamāl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZA",
          name: "Az̧ Za̧`āyin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "US",
          name: "Umm Şalāl",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"RE",country_name:"Reunion",country_code:"262"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"RO",country_name:"Romania",country_code:"40"}
      );
      await db.collection('states').insertMany([
        {
          code: "AB",
          name: "Alba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Arad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AG",
          name: "Argeș",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BC",
          name: "Bacău",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BH",
          name: "Bihor",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BN",
          name: "Bistrița-Năsăud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BT",
          name: "Botoșani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BV",
          name: "Brașov",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BR",
          name: "Brăila",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "București",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BZ",
          name: "Buzău",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CS",
          name: "Caraș-Severin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CJ",
          name: "Cluj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CT",
          name: "Constanța",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CV",
          name: "Covasna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CL",
          name: "Călărași",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DJ",
          name: "Dolj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DB",
          name: "Dâmbovița",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GL",
          name: "Galați",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GR",
          name: "Giurgiu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GJ",
          name: "Gorj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HR",
          name: "Harghita",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HD",
          name: "Hunedoara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IL",
          name: "Ialomița",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IS",
          name: "Iași",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IF",
          name: "Ilfov",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MM",
          name: "Maramureș",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MH",
          name: "Mehedinți",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MS",
          name: "Mureș",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NT",
          name: "Neamț",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OT",
          name: "Olt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PH",
          name: "Prahova",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SM",
          name: "Satu Mare",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SB",
          name: "Sibiu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SV",
          name: "Suceava",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SJ",
          name: "Sălaj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TR",
          name: "Teleorman",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TM",
          name: "Timiș",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TL",
          name: "Tulcea",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VS",
          name: "Vaslui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VN",
          name: "Vrancea",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VL",
          name: "Vâlcea",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"RU",country_name:"Russia",country_code:"7"}
      );
      await db.collection('states').insertMany([
        {
          code: "AMU",
          name: "Amurskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "ARK",
          name: "Arkhangel'skaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "AST",
          name: "Astrakhanskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "BEL",
          name: "Belgorodskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "BRY",
          name: "Bryanskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "CHE",
          name: "Chelyabinskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "IRK",
          name: "Irkutskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "IVA",
          name: "Ivanovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KGD",
          name: "Kaliningradskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KLU",
          name: "Kaluzhskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KEM",
          name: "Kemerovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KIR",
          name: "Kirovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KOS",
          name: "Kostromskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KGN",
          name: "Kurganskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "KRS",
          name: "Kurskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "LEN",
          name: "Leningradskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "LIP",
          name: "Lipetskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "MAG",
          name: "Magadanskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "MOS",
          name: "Moskovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "MUR",
          name: "Murmanskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "NIZ",
          name: "Nizhegorodskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "NGR",
          name: "Novgorodskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "NVS",
          name: "Novosibirskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "OMS",
          name: "Omskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "ORE",
          name: "Orenburgskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "ORL",
          name: "Orlovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "PNZ",
          name: "Penzenskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "PSK",
          name: "Pskovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "ROS",
          name: "Rostovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "RYA",
          name: "Ryazanskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "SAK",
          name: "Sakhalinskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "SAM",
          name: "Samarskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "SAR",
          name: "Saratovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "SMO",
          name: "Smolenskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "SVE",
          name: "Sverdlovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "TAM",
          name: "Tambovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "TOM",
          name: "Tomskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "TUL",
          name: "Tul'skaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "TVE",
          name: "Tverskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "TYU",
          name: "Tyumenskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "ULY",
          name: "Ul'yanovskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "VLA",
          name: "Vladimirskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "VGG",
          name: "Volgogradskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "VLG",
          name: "Vologodskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "VOR",
          name: "Voronezhskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "YAR",
          name: "Yaroslavskaya oblast'",
          subdivision: "administrative region",
          country_id: country.ops[0]._id
        },
        {
          code: "ALT",
          name: "Altayskiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "KAM",
          name: "Kamchatskiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "KHA",
          name: "Khabarovskiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "KDA",
          name: "Krasnodarskiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "KYA",
          name: "Krasnoyarskiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "PER",
          name: "Permskiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "PRI",
          name: "Primorskiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "STA",
          name: "Stavropol'skiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "ZAB",
          name: "Zabaykal'skiy kray",
          subdivision: "administrative territory",
          country_id: country.ops[0]._id
        },
        {
          code: "MOW",
          name: "Moskva",
          subdivision: "autonomous city",
          country_id: country.ops[0]._id
        },
        {
          code: "SPE",
          name: "Sankt-Peterburg",
          subdivision: "autonomous city",
          country_id: country.ops[0]._id
        },
        {
          code: "CHU",
          name: "Chukotskiy avtonomnyy okrug",
          subdivision: "autonomous district",
          country_id: country.ops[0]._id
        },
        {
          code: "KHM",
          name: "Khanty-Mansiyskiy avtonomnyy okrug-Yugra",
          subdivision: "autonomous district",
          country_id: country.ops[0]._id
        },
        {
          code: "NEN",
          name: "Nenetskiy avtonomnyy okrug",
          subdivision: "autonomous district",
          country_id: country.ops[0]._id
        },
        {
          code: "YAN",
          name: "Yamalo-Nenetskiy avtonomnyy okrug",
          subdivision: "autonomous district",
          country_id: country.ops[0]._id
        },
        {
          code: "YEV",
          name: "Yevreyskaya avtonomnaya oblast'",
          subdivision: "autonomous region",
          country_id: country.ops[0]._id
        },
        {
          code: "AD",
          name: "Adygeya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "AL",
          name: "Altay, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Bashkortostan, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "BU",
          name: "Buryatiya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "CE",
          name: "Chechenskaya Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "CU",
          name: "Chuvashskaya Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "DA",
          name: "Dagestan, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "IN",
          name: "Ingushetiya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "KB",
          name: "Kabardino-Balkarskaya Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "KL",
          name: "Kalmykiya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "KC",
          name: "Karachayevo-Cherkesskaya Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "KR",
          name: "Kareliya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "KK",
          name: "Khakasiya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "KO",
          name: "Komi, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "ME",
          name: "Mariy El, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Mordoviya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Sakha, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "Severnaya Osetiya-Alaniya, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tatarstan, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "TY",
          name: "Tyva, Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        },
        {
          code: "UD",
          name: "Udmurtskaya Respublika",
          subdivision: "republic",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"RW",country_name:"Rwanda",country_code:"250"}
      );
      await db.collection('states').insertMany([
        {
          code: "02",
          name: "Est",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Nord",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Ouest",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Sud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Ville de Kigali",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SH",country_name:"Saint helena, ascension, and tristan da cunha",country_code:"290"}
      );
      await db.collection('states').insertMany([
        {
          code: "AC",
          name: "Ascension",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HL",
          name: "Saint Helena",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tristan da Cunha",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"KN",country_name:"Saint kitts and nevis",country_code:"1-869"}
      );
      await db.collection('states').insertMany([
        {
          code: "N",
          name: "Nevis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Saint Kitts",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LC",country_name:"Saint lucia",country_code:"1-758"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Anse la Raye",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Castries",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Choiseul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Dauphin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Dennery",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Gros Islet",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Laborie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Micoud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Praslin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Soufrière",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Vieux Fort",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"VC",country_name:"Saint vincent and the grenadines (windward islands)",country_code:"1-784"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Charlotte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Grenadines",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Saint Andrew",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Saint David",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Saint George",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Saint Patrick",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"WS",country_name:"Samoa",country_code:"685"}
      );
      await db.collection('states').insertMany([
        {
          code: "AA",
          name: "A'ana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AL",
          name: "Aiga-i-le-Tai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AT",
          name: "Atua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FA",
          name: "Fa'asaleleaga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GE",
          name: "Gaga'emauga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GI",
          name: "Gagaifomauga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PA",
          name: "Palauli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Satupa'itea",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TU",
          name: "Tuamasaga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VF",
          name: "Va'a-o-Fonoti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VS",
          name: "Vaisigano",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SM",country_name:"San marino",country_code:"378"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Acquaviva",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Borgo Maggiore",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Chiesanuova",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Domagnano",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Faetano",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Fiorentino",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Montegiardino",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "San Marino",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Serravalle",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ST",country_name:"Sao tome and principe",country_code:"239"}
      );
      await db.collection('states').insertMany([
        {
          code: "P",
          name: "Príncipe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "São Tomé",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SA",country_name:"Saudi arabia",country_code:"966"}
      );
      await db.collection('states').insertMany([
        {
          code: "11",
          name: "Al Bāḩah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Al Jawf",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Al Madīnah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Al Qaşīm",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Al Ḩudūd ash Shamālīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Ar Riyāḑ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Ash Sharqīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Jīzān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Makkah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Najrān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Tabūk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "ٰĀsīr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Ḩā'il",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SN",country_name:"Senegal",country_code:"221"}
      );
      await db.collection('states').insertMany([
        {
          code: "DK",
          name: "Dakar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DB",
          name: "Diourbel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FK",
          name: "Fatick",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Kaffrine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KL",
          name: "Kaolack",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KD",
          name: "Kolda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KE",
          name: "Kédougou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LG",
          name: "Louga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MT",
          name: "Matam",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SL",
          name: "Saint-Louis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "Sédhiou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TC",
          name: "Tambacounda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TH",
          name: "Thiès",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZG",
          name: "Ziguinchor",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SC",country_name:"Seychelles",country_code:"248"}
      );
      await db.collection('states').insertMany([
        {
          code: "02",
          name: "Anse Boileau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Anse Etoile",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Anse Royale",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Anse aux Pins",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Au Cap",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Baie Lazare",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Baie Sainte Anne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Beau Vallon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Bel Air",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Bel Ombre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Cascade",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "English River",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Glacis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Grand Anse Mahe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Grand Anse Praslin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "La Digue",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Les Mamelles",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Mont Buxton",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Mont Fleuri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Plaisance",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Pointe Larue",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Port Glaud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Roche Caiman",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Saint Louis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Takamaka",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SL",country_name:"Sierra leone",country_code:"232"}
      );
      await db.collection('states').insertMany([
        {
          code: "E",
          name: "Eastern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Northern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Southern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Western Area",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SG",country_name:"Singapore",country_code:"65"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Central Singapore",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "North East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "North West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "South East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "South West",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SX",country_name:"Sint maarten",country_code:"1-721"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SK",country_name:"Slovakia",country_code:"421"}
      );
      await db.collection('states').insertMany([
        {
          code: "BC",
          name: "Banskobystrický kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BL",
          name: "Bratislavský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KI",
          name: "Košický kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Nitriansky kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PV",
          name: "Prešovský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TC",
          name: "Trenčiansky kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Trnavský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZI",
          name: "Žilinský kraj",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SI",country_name:"Slovenia",country_code:"386"}
      );
      await db.collection('states').insertMany([
        {
          code: "001",
          name: "Ajdovščina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "195",
          name: "Apače",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "002",
          name: "Beltinci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "148",
          name: "Benedikt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "149",
          name: "Bistrica ob Sotli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "003",
          name: "Bled",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "150",
          name: "Bloke",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "004",
          name: "Bohinj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "005",
          name: "Borovnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "006",
          name: "Bovec",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "151",
          name: "Braslovče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "007",
          name: "Brda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "008",
          name: "Brezovica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "009",
          name: "Brežice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "152",
          name: "Cankova",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "011",
          name: "Celje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "012",
          name: "Cerklje na Gorenjskem",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "013",
          name: "Cerknica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "014",
          name: "Cerkno",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "153",
          name: "Cerkvenjak",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "196",
          name: "Cirkulane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "018",
          name: "Destrnik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "019",
          name: "Divača",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "154",
          name: "Dobje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "020",
          name: "Dobrepolje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "155",
          name: "Dobrna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "021",
          name: "Dobrova–Polhov Gradec",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "156",
          name: "Dobrovnik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "022",
          name: "Dol pri Ljubljani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "157",
          name: "Dolenjske Toplice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "023",
          name: "Domžale",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "024",
          name: "Dornava",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "025",
          name: "Dravograd",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "026",
          name: "Duplek",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "027",
          name: "Gorenja vas–Poljane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "028",
          name: "Gorišnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "207",
          name: "Gorje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "029",
          name: "Gornja Radgona",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "030",
          name: "Gornji Grad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "031",
          name: "Gornji Petrovci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "158",
          name: "Grad",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "032",
          name: "Grosuplje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "159",
          name: "Hajdina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "161",
          name: "Hodoš",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "162",
          name: "Horjul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "160",
          name: "Hoče–Slivnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "034",
          name: "Hrastnik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "035",
          name: "Hrpelje-Kozina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "036",
          name: "Idrija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "037",
          name: "Ig",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "038",
          name: "Ilirska Bistrica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "039",
          name: "Ivančna Gorica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "040",
          name: "Izola",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "041",
          name: "Jesenice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "163",
          name: "Jezersko",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "042",
          name: "Juršinci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "043",
          name: "Kamnik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "044",
          name: "Kanal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "045",
          name: "Kidričevo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "046",
          name: "Kobarid",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "047",
          name: "Kobilje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "049",
          name: "Komen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "164",
          name: "Komenda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "050",
          name: "Koper",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "197",
          name: "Kosanjevica na Krki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "165",
          name: "Kostel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "051",
          name: "Kozje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "048",
          name: "Kočevje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "052",
          name: "Kranj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "053",
          name: "Kranjska Gora",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "166",
          name: "Križevci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "054",
          name: "Krško",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "055",
          name: "Kungota",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "056",
          name: "Kuzma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "057",
          name: "Laško",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "058",
          name: "Lenart",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "059",
          name: "Lendava",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "060",
          name: "Litija",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "061",
          name: "Ljubljana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "062",
          name: "Ljubno",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "063",
          name: "Ljutomer",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "208",
          name: "Log-Dragomer",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "064",
          name: "Logatec",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "167",
          name: "Lovrenc na Pohorju",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "065",
          name: "Loška Dolina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "066",
          name: "Loški Potok",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "068",
          name: "Lukovica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "067",
          name: "Luče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "069",
          name: "Majšperk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "198",
          name: "Makole",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "070",
          name: "Maribor",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "168",
          name: "Markovci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "071",
          name: "Medvode",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "072",
          name: "Mengeš",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "073",
          name: "Metlika",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "074",
          name: "Mežica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "169",
          name: "Miklavž na Dravskem Polju",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "075",
          name: "Miren–Kostanjevica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "170",
          name: "Mirna Peč",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "076",
          name: "Mislinja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "199",
          name: "Mokronog–Trebelno",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "078",
          name: "Moravske Toplice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "077",
          name: "Moravče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "079",
          name: "Mozirje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "080",
          name: "Murska Sobota",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "081",
          name: "Muta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "082",
          name: "Naklo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "083",
          name: "Nazarje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "084",
          name: "Nova Gorica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "085",
          name: "Novo Mesto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "086",
          name: "Odranci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "171",
          name: "Oplotnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "087",
          name: "Ormož",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "088",
          name: "Osilnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "089",
          name: "Pesnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "090",
          name: "Piran",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "091",
          name: "Pivka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "172",
          name: "Podlehnik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "093",
          name: "Podvelka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "092",
          name: "Podčetrtek",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "200",
          name: "Poljčane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "173",
          name: "Polzela",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "094",
          name: "Postojna",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "174",
          name: "Prebold",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "095",
          name: "Preddvor",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "175",
          name: "Prevalje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "096",
          name: "Ptuj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "097",
          name: "Puconci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "100",
          name: "Radenci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "099",
          name: "Radeče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "101",
          name: "Radlje ob Dravi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "102",
          name: "Radovljica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "103",
          name: "Ravne na Koroškem",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "176",
          name: "Razkrižje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "098",
          name: "Rače–Fram",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "201",
          name: "Renče-Vogrsko",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "209",
          name: "Rečica ob Savinji",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "104",
          name: "Ribnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "177",
          name: "Ribnica na Pohorju",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "107",
          name: "Rogatec",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "106",
          name: "Rogaška Slatina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "105",
          name: "Rogašovci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "108",
          name: "Ruše",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "178",
          name: "Selnica ob Dravi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "109",
          name: "Semič",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "110",
          name: "Sevnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "111",
          name: "Sežana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "112",
          name: "Slovenj Gradec",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "113",
          name: "Slovenska Bistrica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "114",
          name: "Slovenske Konjice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "179",
          name: "Sodražica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "180",
          name: "Solčava",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "202",
          name: "Središče ob Dravi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "115",
          name: "Starše",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "203",
          name: "Straža",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "181",
          name: "Sveta Ana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "204",
          name: "Sveta Trojica v Slovenskih Goricah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "182",
          name: "Sveti Andraž v Slovenskih Goricah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "116",
          name: "Sveti Jurij",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "210",
          name: "Sveti Jurij v Slovenskih Goricah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "205",
          name: "Sveti Tomaž",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "184",
          name: "Tabor",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "010",
          name: "Tišina",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "128",
          name: "Tolmin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "129",
          name: "Trbovlje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "130",
          name: "Trebnje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "185",
          name: "Trnovska Vas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "186",
          name: "Trzin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "131",
          name: "Tržič",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "132",
          name: "Turnišče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "133",
          name: "Velenje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "187",
          name: "Velika Polana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "134",
          name: "Velike Lašče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "188",
          name: "Veržej",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "135",
          name: "Videm",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "136",
          name: "Vipava",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "137",
          name: "Vitanje",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "138",
          name: "Vodice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "139",
          name: "Vojnik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "189",
          name: "Vransko",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "140",
          name: "Vrhnika",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "141",
          name: "Vuzenica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "142",
          name: "Zagorje ob Savi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "143",
          name: "Zavrč",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "144",
          name: "Zreče",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "015",
          name: "Črenšovci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "016",
          name: "Črna na Koroškem",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "017",
          name: "Črnomelj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "033",
          name: "Šalovci",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "183",
          name: "Šempeter–Vrtojba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "118",
          name: "Šentilj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "119",
          name: "Šentjernej",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "120",
          name: "Šentjur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "211",
          name: "Šentrupert",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "117",
          name: "Šenčur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "121",
          name: "Škocjan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "122",
          name: "Škofja Loka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "123",
          name: "Škofljica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "124",
          name: "Šmarje pri Jelšah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "206",
          name: "Šmarješke Toplice",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "125",
          name: "Šmartno ob Paki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "194",
          name: "Šmartno pri Litiji",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "126",
          name: "Šoštanj",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "127",
          name: "Štore",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "190",
          name: "Žalec",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "146",
          name: "Železniki",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "191",
          name: "Žetale",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "147",
          name: "Žiri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "192",
          name: "Žirovnica",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "193",
          name: "Žužemberk",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SB",country_name:"Solomon islands",country_code:"677"}
      );
      await db.collection('states').insertMany([
        {
          code: "CT",
          name: "Capital Territory",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CE",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CH",
          name: "Choiseul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GU",
          name: "Guadalcanal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IS",
          name: "Isabel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MK",
          name: "Makira-Ulawa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ML",
          name: "Malaita",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RB",
          name: "Rennell and Bellona",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TE",
          name: "Temotu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WE",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SO",country_name:"Somalia",country_code:"252"}
      );
      await db.collection('states').insertMany([
        {
          code: "AW",
          name: "Awdal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BK",
          name: "Bakool",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BN",
          name: "Banaadir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BR",
          name: "Bari",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BY",
          name: "Bay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Galguduud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GE",
          name: "Gedo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HI",
          name: "Hiiraan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JD",
          name: "Jubbada Dhexe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JH",
          name: "Jubbada Hoose",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MU",
          name: "Mudug",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NU",
          name: "Nugaal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Sanaag",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Shabeellaha Dhexe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Shabeellaha Hoose",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Sool",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TO",
          name: "Togdheer",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WO",
          name: "Woqooyi Galbeed",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ZA",country_name:"South africa",country_code:"27"}
      );
      await db.collection('states').insertMany([
        {
          code: "EC",
          name: "Eastern Cape",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FS",
          name: "Free State",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GT",
          name: "Gauteng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NL",
          name: "KwaZulu-Natal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LP",
          name: "Limpopo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MP",
          name: "Mpumalanga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NW",
          name: "North West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NC",
          name: "Northern Cape",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WC",
          name: "Western Cape",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GS",country_name:"South georgia and south sandwich islands",country_code:"500B"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ES",country_name:"Spain",country_code:"34"}
      );
      await db.collection('states').insertMany([
        {
          code: "C",
          name: "A Coruña",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "AB",
          name: "Albacete",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "A",
          name: "Alicante",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "AL",
          name: "Almería",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "O",
          name: "Asturias",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Badajoz",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "PM",
          name: "Balears",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Barcelona",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "BU",
          name: "Burgos",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Cantabria",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "CS",
          name: "Castellón",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "CR",
          name: "Ciudad Real",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "CU",
          name: "Cuenca",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "CC",
          name: "Cáceres",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "Cádiz",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "Córdoba",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "GI",
          name: "Girona",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "GR",
          name: "Granada",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "GU",
          name: "Guadalajara",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "SS",
          name: "Guipúzcoa",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Huelva",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "HU",
          name: "Huesca",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "J",
          name: "Jaén",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "LO",
          name: "La Rioja",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "GC",
          name: "Las Palmas",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "LE",
          name: "León",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Lleida",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "LU",
          name: "Lugo",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Madrid",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "MU",
          name: "Murcia",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Málaga",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "NA",
          name: "Navarra",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "OR",
          name: "Ourense",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Palencia",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "PO",
          name: "Pontevedra",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Salamanca",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "TF",
          name: "Santa Cruz de Tenerife",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "SG",
          name: "Segovia",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "SE",
          name: "Sevilla",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Soria",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Tarragona",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "TE",
          name: "Teruel",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "TO",
          name: "Toledo",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "V",
          name: "Valencia",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "VA",
          name: "Valladolid",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "BI",
          name: "Vizcaya",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "ZA",
          name: "Zamora",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "Z",
          name: "Zaragoza",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "VI",
          name: "Álava",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "AV",
          name: "Ávila",
          subdivision: "Province",
          country_id: country.ops[0]._id
        },
        {
          code: "CE",
          name: "Ceuta",
          subdivision: "autonomous city in North Africa",
          country_id: country.ops[0]._id
        },
        {
          code: "ML",
          name: "Melilla",
          subdivision: "autonomous city in North Africa",
          country_id: country.ops[0]._id
        },
        {
          code: "AN",
          name: "Andalucía",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Aragón",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "AS",
          name: "Asturias, Principado de",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "CN",
          name: "Canarias",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "CB",
          name: "Cantabria",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "CL",
          name: "Castilla y León",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "CM",
          name: "Castilla-La Mancha",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "CT",
          name: "Catalunya",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "EX",
          name: "Extremadura",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Galicia",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "IB",
          name: "Illes Balears",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "RI",
          name: "La Rioja",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "MD",
          name: "Madrid, Comunidad de",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "MC",
          name: "Murcia, Región de",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "NC",
          name: "Navarra, Comunidad Foral de",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "PV",
          name: "País Vasco",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        },
        {
          code: "VC",
          name: "Valenciana, Comunidad",
          subdivision: "autonomous community",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"LK",country_name:"Sri lanka",country_code:"94"}
      );
      await db.collection('states').insertMany([
        {
          code: "2",
          name: "Central Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "5",
          name: "Eastern Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "7",
          name: "North Central Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "6",
          name: "North Western Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "4",
          name: "Northern Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "9",
          name: "Sabaragamuwa Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "3",
          name: "Southern Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "8",
          name: "Uva Province",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "1",
          name: "Western Province",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SD",country_name:"Sudan",country_code:"249"}
      );
      await db.collection('states').insertMany([
        {
          code: "RS",
          name: "Al Baḩr al Aḩmar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GZ",
          name: "Al Jazīrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KH",
          name: "Al Kharţūm",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GD",
          name: "Al Qaḑārif",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NR",
          name: "An Nīl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NW",
          name: "An Nīl al Abyaḑ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NB",
          name: "An Nīl al Azraq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NO",
          name: "Ash Shamālīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DW",
          name: "Gharb Dārfūr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DS",
          name: "Janūb Dārfūr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KS",
          name: "Janūb Kurdufān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KA",
          name: "Kassalā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DN",
          name: "Shamāl Dārfūr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KN",
          name: "Shamāl Kurdufān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DE",
          name: "Sharq Dārfūr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SI",
          name: "Sinnār",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DC",
          name: "Zalingei",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SR",country_name:"Suriname",country_code:"597"}
      );
      await db.collection('states').insertMany([
        {
          code: "BR",
          name: "Brokopondo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CM",
          name: "Commewijne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CR",
          name: "Coronie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Marowijne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NI",
          name: "Nickerie",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PR",
          name: "Para",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PM",
          name: "Paramaribo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Saramacca",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SI",
          name: "Sipaliwini",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WA",
          name: "Wanica",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"XR",country_name:"Svalbard",country_code:"47-79"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SZ",country_name:"Swaziland",country_code:"268"}
      );
      await db.collection('states').insertMany([
        {
          code: "HH",
          name: "Hhohho",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LU",
          name: "Lubombo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Manzini",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Shiselweni",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SE",country_name:"Sweden",country_code:"46"}
      );
      await db.collection('states').insertMany([
        {
          code: "K",
          name: "Blekinge län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Dalarnas län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "I",
          name: "Gotlands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "X",
          name: "Gävleborgs län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Hallands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Z",
          name: "Jämtlands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Jönköpings län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Kalmar län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Kronobergs län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BD",
          name: "Norrbottens län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Skåne län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AB",
          name: "Stockholms län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Södermanlands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Uppsala län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Värmlands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AC",
          name: "Västerbottens län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Y",
          name: "Västernorrlands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Västmanlands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "O",
          name: "Västra Götalands län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Örebro län",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Östergötlands län",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"CH",country_name:"Switzerland",country_code:"41"}
      );
      await db.collection('states').insertMany([
        {
          code: "AG",
          name: "Aargau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Appenzell Ausserrhoden",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AI",
          name: "Appenzell Innerrhoden",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BL",
          name: "Basel-Landschaft",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BS",
          name: "Basel-Stadt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BE",
          name: "Bern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FR",
          name: "Fribourg",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GE",
          name: "Genève",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GL",
          name: "Glarus",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GR",
          name: "Graubünden",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JU",
          name: "Jura",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LU",
          name: "Luzern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NE",
          name: "Neuchâtel",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NW",
          name: "Nidwalden",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "OW",
          name: "Obwalden",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SG",
          name: "Sankt Gallen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Schaffhausen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SZ",
          name: "Schwyz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Solothurn",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TG",
          name: "Thurgau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TI",
          name: "Ticino",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UR",
          name: "Uri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VS",
          name: "Valais",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VD",
          name: "Vaud",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZG",
          name: "Zug",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ZH",
          name: "Zürich",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"SY",country_name:"Syria",country_code:"963"}
      );
      await db.collection('states').insertMany([
        {
          code: "LA",
          name: "Al Lādhiqīyah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QU",
          name: "Al Qunayţirah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HA",
          name: "Al Ḩasakah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RA",
          name: "Ar Raqqah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "As Suwaydā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DR",
          name: "Darٰā",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DY",
          name: "Dayr az Zawr",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DI",
          name: "Dimashq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ID",
          name: "Idlib",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RD",
          name: "Rīf Dimashq",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Ţarţūs",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HL",
          name: "Ḩalab",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HM",
          name: "Ḩamāh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HI",
          name: "Ḩimş",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TW",country_name:"Taiwan",country_code:"886"}
      );
      await db.collection('states').insertMany([
        {
          code: "CHA",
          name: "Changhua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CYQ",
          name: "Chiayi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CYI",
          name: "Chiayi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HSZ",
          name: "Hsinchu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HSQ",
          name: "Hsinchu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HUA",
          name: "Hualien",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ILA",
          name: "Ilan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KHQ",
          name: "Kaohsiung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KHH",
          name: "Kaohsiung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KEE",
          name: "Keelung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MIA",
          name: "Miaoli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NAN",
          name: "Nantou",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PEN",
          name: "Penghu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PIF",
          name: "Pingtung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TXG",
          name: "Taichung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TXQ",
          name: "Taichung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TNN",
          name: "Tainan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TNQ",
          name: "Tainan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TPE",
          name: "Taipei",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TPQ",
          name: "Taipei",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TTT",
          name: "Taitung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TAO",
          name: "Taoyuan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "YUN",
          name: "Yunlin",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TJ",country_name:"Tajikistan",country_code:"992"}
      );
      await db.collection('states').insertMany([
        {
          code: "DU",
          name: "Dushanbe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "KT",
          name: "Khatlon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "GB",
          name: "Kŭhistoni Badakhshon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "Sughd",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TZ",country_name:"Tanzania",country_code:"255"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Arusha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Dar es Salaam",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Dodoma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Iringa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Kagera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Kaskazini Pemba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Kaskazini Unguja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Kigoma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Kilimanjaro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Kusini Pemba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Kusini Unguja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Lindi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Manyara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Mara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Mbeya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Mjini Magharibi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Morogoro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Mtwara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Mwanza",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Pwani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Rukwa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Ruvuma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Shinyanga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Singida",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Tabora",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Tanga",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TH",country_name:"Thailand",country_code:"66"}
      );
      await db.collection('states').insertMany([
        {
          code: "37",
          name: "Amnat Charoen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Ang Thong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "38",
          name: "Bueng Kan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Buri Ram",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Chachoengsao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Chai Nat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Chaiyaphum",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Chanthaburi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "50",
          name: "Chiang Mai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "57",
          name: "Chiang Rai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Chon Buri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "86",
          name: "Chumphon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Kalasin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "62",
          name: "Kamphaeng Phet",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "71",
          name: "Kanchanaburi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Khon Kaen",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "81",
          name: "Krabi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Krung Thep Maha Nakhon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Lampang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Lamphun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Loei",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Lop Buri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "58",
          name: "Mae Hong Son",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Maha Sarakham",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "49",
          name: "Mukdahan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Nakhon Nayok",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "73",
          name: "Nakhon Pathom",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "48",
          name: "Nakhon Phanom",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Nakhon Ratchasima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "60",
          name: "Nakhon Sawan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "80",
          name: "Nakhon Si Thammarat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "55",
          name: "Nan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "96",
          name: "Narathiwat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Nong Bua Lam Phu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Nong Khai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Nonthaburi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Pathum Thani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "94",
          name: "Pattani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "82",
          name: "Phangnga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "93",
          name: "Phatthalung",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Phatthaya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "56",
          name: "Phayao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "67",
          name: "Phetchabun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "76",
          name: "Phetchaburi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "66",
          name: "Phichit",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "65",
          name: "Phitsanulok",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Phra Nakhon Si Ayutthaya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "54",
          name: "Phrae",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "83",
          name: "Phuket",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Prachin Buri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "77",
          name: "Prachuap Khiri Khan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "85",
          name: "Ranong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "70",
          name: "Ratchaburi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Rayong",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Roi Et",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Sa Kaeo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Sakon Nakhon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Samut Prakan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "74",
          name: "Samut Sakhon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "75",
          name: "Samut Songkhram",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Saraburi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "91",
          name: "Satun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Si Sa Ket",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Sing Buri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "90",
          name: "Songkhla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "64",
          name: "Sukhothai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "72",
          name: "Suphan Buri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "84",
          name: "Surat Thani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Surin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "63",
          name: "Tak",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "92",
          name: "Trang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Trat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Ubon Ratchathani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Udon Thani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Uthai Thani",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Uttaradit",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "95",
          name: "Yala",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Yasothon",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TL",country_name:"Timor-leste",country_code:"670"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TG",country_name:"Togo",country_code:"228"}
      );
      await db.collection('states').insertMany([
        {
          code: "C",
          name: "Centre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Kara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Maritime",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Plateaux",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Savannes",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TK",country_name:"Tokelau",country_code:"690"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TO",country_name:"Tonga",country_code:"676"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "'Eua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Ha'apai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Niuas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Tongatapu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Vava'u",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TT",country_name:"Trinidad and tobago",country_code:"1-868"}
      );
      await db.collection('states').insertMany([
        {
          code: "ARI",
          name: "Arima",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CHA",
          name: "Chaguanas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CTT",
          name: "Couva-Tabaquite-Talparo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DMN",
          name: "Diego Martin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ETO",
          name: "Eastern Tobago",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PED",
          name: "Penal-Debe",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PTF",
          name: "Point Fortin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "POS",
          name: "Port of Spain",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PRT",
          name: "Princes Town",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RCM",
          name: "Rio Claro-Mayaro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SFO",
          name: "San Fernando",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SJL",
          name: "San Juan-Laventille",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SGE",
          name: "Sangre Grande",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SIP",
          name: "Siparia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TUP",
          name: "Tunapuna-Piarco",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "WTO",
          name: "Western Tobago",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TN",country_name:"Tunisia",country_code:"216"}
      );
      await db.collection('states').insertMany([
        {
          code: "12",
          name: "Ariana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Ben Arous",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Bizerte",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Béja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "81",
          name: "Gabès",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "71",
          name: "Gafsa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Jendouba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Kairouan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Kasserine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "73",
          name: "Kebili",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "La Manouba",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Le Kef",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Mahdia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "82",
          name: "Medenine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Monastir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Nabeul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Sfax",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Sidi Bouzid",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Siliana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Sousse",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "83",
          name: "Tataouine",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "72",
          name: "Tozeur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Tunis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Zaghouan",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TR",country_name:"Turkey",country_code:"90"}
      );
      await db.collection('states').insertMany([
        {
          code: "01",
          name: "Adana",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Adıyaman",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Afyonkarahisar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "68",
          name: "Aksaray",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Amasya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Ankara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Antalya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "75",
          name: "Ardahan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Artvin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Aydın",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Ağrı",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "10",
          name: "Balıkesir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "74",
          name: "Bartın",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "72",
          name: "Batman",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "69",
          name: "Bayburt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "11",
          name: "Bilecik",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Bingöl",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Bitlis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Bolu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Burdur",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "16",
          name: "Bursa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Denizli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Diyarbakır",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "81",
          name: "Düzce",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Edirne",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Elazığ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Erzincan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Erzurum",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Eskişehir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Gaziantep",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Giresun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Gümüşhane",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Hakkâri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Hatay",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Isparta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "76",
          name: "Iğdır",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Kahramanmaraş",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "78",
          name: "Karabük",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "70",
          name: "Karaman",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Kars",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "Kastamonu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "38",
          name: "Kayseri",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "79",
          name: "Kilis",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Kocaeli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "42",
          name: "Konya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Kütahya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Kırklareli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "71",
          name: "Kırıkkale",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Kırşehir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "44",
          name: "Malatya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Manisa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Mardin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Mersin",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "48",
          name: "Muğla",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "49",
          name: "Muş",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "50",
          name: "Nevşehir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Niğde",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Ordu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "80",
          name: "Osmaniye",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Rize",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "54",
          name: "Sakarya",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "55",
          name: "Samsun",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "56",
          name: "Siirt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "57",
          name: "Sinop",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "58",
          name: "Sivas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "59",
          name: "Tekirdağ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "60",
          name: "Tokat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Trabzon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "62",
          name: "Tunceli",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "64",
          name: "Uşak",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "65",
          name: "Van",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "77",
          name: "Yalova",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "66",
          name: "Yozgat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "67",
          name: "Zonguldak",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "17",
          name: "Çanakkale",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Çankırı",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "19",
          name: "Çorum",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "İstanbul",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "İzmir",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "63",
          name: "Şanlıurfa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "73",
          name: "Şırnak",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TM",country_name:"Turkmenistan",country_code:"993"}
      );
      await db.collection('states').insertMany([
        {
          code: "A",
          name: "Ahal",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Aşgabat",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Balkan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Daşoguz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Lebap",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Mary",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TC",country_name:"Turks and caicos islands",country_code:"1-649"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"TV",country_name:"Tuvalu",country_code:"688"}
      );
      await db.collection('states').insertMany([
        {
          code: "FUN",
          name: "Funafuti",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NMG",
          name: "Nanumanga",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NMA",
          name: "Nanumea",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NIT",
          name: "Niutao",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NUI",
          name: "Nui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NKF",
          name: "Nukufetau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NKL",
          name: "Nukulaelae",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "VAI",
          name: "Vaitupu",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"UG",country_name:"Uganda",country_code:"256"}
      );
      await db.collection('states').insertMany([
        {
          code: "C",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Eastern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Northern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"UA",country_name:"Ukraine",country_code:"380"}
      );
      await db.collection('states').insertMany([
        {
          code: "43",
          name: "Avtonomna Respublika Krym",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "71",
          name: "Cherkas'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "74",
          name: "Chernihivs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "77",
          name: "Chernivets'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "12",
          name: "Dnipropetrovs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Donets'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Ivano-Frankivs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "63",
          name: "Kharkivs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "65",
          name: "Khersons'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "68",
          name: "Khmel'nyts'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Kirovohrads'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Kyïv",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Kyïvs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "L'vivs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Luhans'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "48",
          name: "Mykolaïvs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Odes'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Poltavs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "56",
          name: "Rivnens'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Sevastopol'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "59",
          name: "Sums'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Ternopil's'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Vinnyts'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Volyns'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Zakarpats'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Zaporiz'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Zhytomyrs'ka Oblast'",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"AE",country_name:"United arab emirates",country_code:"971"}
      );
      await db.collection('states').insertMany([
        {
          code: "AJ",
          name: "'Ajmān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AZ",
          name: "Abū Z̧aby",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FU",
          name: "Al Fujayrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Ash Shāriqah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DU",
          name: "Dubayy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RK",
          name: "Ra's al Khaymah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "UQ",
          name: "Umm al Qaywayn",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"GB",country_name:"United kingdom",country_code:"44"}
      );
      await db.collection('states').insertMany([
        {
          code: "BDG",
          name: "Barking and Dagenham",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "BNE",
          name: "Barnet",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "BEX",
          name: "Bexley",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "BEN",
          name: "Brent",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "BRY",
          name: "Bromley",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "CMD",
          name: "Camden",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "CRY",
          name: "Croydon",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "EAL",
          name: "Ealing",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "ENF",
          name: "Enfield",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "GRE",
          name: "Greenwich",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "HCK",
          name: "Hackney",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "HMF",
          name: "Hammersmith and Fulham",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "HRY",
          name: "Haringey",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "HRW",
          name: "Harrow",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "HAV",
          name: "Havering",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "HIL",
          name: "Hillingdon",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "HNS",
          name: "Hounslow",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "ISL",
          name: "Islington",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "KEC",
          name: "Kensington and Chelsea",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "KTT",
          name: "Kingston upon Thames",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "LBH",
          name: "Lambeth",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "LEW",
          name: "Lewisham",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "MRT",
          name: "Merton",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "NWM",
          name: "Newham",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "RDB",
          name: "Redbridge",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "RIC",
          name: "Richmond upon Thames",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "SWK",
          name: "Southwark",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "STN",
          name: "Sutton",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "TWH",
          name: "Tower Hamlets",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "WFT",
          name: "Waltham Forest",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "WND",
          name: "Wandsworth",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "WSM",
          name: "Westminster",
          subdivision: "London borough",
          country_id: country.ops[0]._id
        },
        {
          code: "EAW",
          name: "England and Wales",
          subdivision: "Nation",
          country_id: country.ops[0]._id
        },
        {
          code: "GBN",
          name: "Great Britain",
          subdivision: "Nation",
          country_id: country.ops[0]._id
        },
        {
          code: "UKM",
          name: "United Kingdom",
          subdivision: "Nation",
          country_id: country.ops[0]._id
        },
        {
          code: "LND",
          name: "London, City of",
          subdivision: "city corporation",
          country_id: country.ops[0]._id
        },
        {
          code: "ABE",
          name: "Aberdeen City",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ABD",
          name: "Aberdeenshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ANS",
          name: "Angus",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "AGB",
          name: "Argyll and Bute",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "CLK",
          name: "Clackmannanshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "DGY",
          name: "Dumfries and Galloway",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "DND",
          name: "Dundee City",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "EAY",
          name: "East Ayrshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "EDU",
          name: "East Dunbartonshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ELN",
          name: "East Lothian",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ERW",
          name: "East Renfrewshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "EDH",
          name: "Edinburgh, City of",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ELS",
          name: "Eilean Siar",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "FAL",
          name: "Falkirk",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "FIF",
          name: "Fife",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "GLG",
          name: "Glasgow City",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "HLD",
          name: "Highland",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "IVC",
          name: "Inverclyde",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "MLN",
          name: "Midlothian",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "MRY",
          name: "Moray",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "NAY",
          name: "North Ayrshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "NLK",
          name: "North Lanarkshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ORK",
          name: "Orkney Islands",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "PKN",
          name: "Perth and Kinross",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "RFW",
          name: "Renfrewshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "SCB",
          name: "Scottish Borders, The",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ZET",
          name: "Shetland Islands",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "SAY",
          name: "South Ayrshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "SLK",
          name: "South Lanarkshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "STG",
          name: "Stirling",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "WDU",
          name: "West Dunbartonshire",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "WLN",
          name: "West Lothian",
          subdivision: "council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ENG",
          name: "England",
          subdivision: "country",
          country_id: country.ops[0]._id
        },
        {
          code: "SCT",
          name: "Scotland",
          subdivision: "country",
          country_id: country.ops[0]._id
        },
        {
          code: "WLS",
          name: "Wales",
          subdivision: "country",
          country_id: country.ops[0]._id
        },
        {
          code: "ANT",
          name: "Antrim",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ARD",
          name: "Ards",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "ARM",
          name: "Armagh",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "BLA",
          name: "Ballymena",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "BLY",
          name: "Ballymoney",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "BNB",
          name: "Banbridge",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "BFS",
          name: "Belfast",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "CKF",
          name: "Carrickfergus",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "CSR",
          name: "Castlereagh",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "CLR",
          name: "Coleraine",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "CKT",
          name: "Cookstown",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "CGV",
          name: "Craigavon",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "DRY",
          name: "Derry",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "DOW",
          name: "Down",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "DGN",
          name: "Dungannon and South Tyrone",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "FER",
          name: "Fermanagh",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "LRN",
          name: "Larne",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "LMV",
          name: "Limavady",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "LSB",
          name: "Lisburn",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "MFT",
          name: "Magherafelt",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "MYL",
          name: "Moyle",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "NYM",
          name: "Newry and Mourne District",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "NTA",
          name: "Newtownabbey",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "NDN",
          name: "North Down",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "OMH",
          name: "Omagh",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "STB",
          name: "Strabane",
          subdivision: "district council area",
          country_id: country.ops[0]._id
        },
        {
          code: "BNS",
          name: "Barnsley",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "BIR",
          name: "Birmingham",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "BOL",
          name: "Bolton",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "BRD",
          name: "Bradford",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "BUR",
          name: "Bury",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "CLD",
          name: "Calderdale",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "COV",
          name: "Coventry",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "DNC",
          name: "Doncaster",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "DUD",
          name: "Dudley",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "GAT",
          name: "Gateshead",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "KIR",
          name: "Kirklees",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "KWL",
          name: "Knowsley",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "LDS",
          name: "Leeds",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "LIV",
          name: "Liverpool",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "MAN",
          name: "Manchester",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "NET",
          name: "Newcastle upon Tyne",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "NTY",
          name: "North Tyneside",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "OLD",
          name: "Oldham",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "RCH",
          name: "Rochdale",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "ROT",
          name: "Rotherham",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SLF",
          name: "Salford",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SAW",
          name: "Sandwell",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SFT",
          name: "Sefton",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SHF",
          name: "Sheffield",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SOL",
          name: "Solihull",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "STY",
          name: "South Tyneside",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SHN",
          name: "St. Helens",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SKP",
          name: "Stockport",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "SND",
          name: "Sunderland",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "TAM",
          name: "Tameside",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "TRF",
          name: "Trafford",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "WKF",
          name: "Wakefield",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "WLL",
          name: "Walsall",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "WGN",
          name: "Wigan",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "WRL",
          name: "Wirral",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "WLV",
          name: "Wolverhampton",
          subdivision: "metropolitan district",
          country_id: country.ops[0]._id
        },
        {
          code: "NIR",
          name: "Northern Ireland",
          subdivision: "province",
          country_id: country.ops[0]._id
        },
        {
          code: "BKM",
          name: "Buckinghamshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "CAM",
          name: "Cambridgeshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "CMA",
          name: "Cumbria",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "DBY",
          name: "Derbyshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "DEV",
          name: "Devon",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "DOR",
          name: "Dorset",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "ESX",
          name: "East Sussex",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "ESS",
          name: "Essex",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "GLS",
          name: "Gloucestershire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "HAM",
          name: "Hampshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "HRT",
          name: "Hertfordshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "KEN",
          name: "Kent",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "LAN",
          name: "Lancashire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "LEC",
          name: "Leicestershire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "LIN",
          name: "Lincolnshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "NFK",
          name: "Norfolk",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "NYK",
          name: "North Yorkshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "NTH",
          name: "Northamptonshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "NTT",
          name: "Nottinghamshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "OXF",
          name: "Oxfordshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "SOM",
          name: "Somerset",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "STS",
          name: "Staffordshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "SFK",
          name: "Suffolk",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "SRY",
          name: "Surrey",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "WAR",
          name: "Warwickshire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "WSX",
          name: "West Sussex",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "WOR",
          name: "Worcestershire",
          subdivision: "two-tier county",
          country_id: country.ops[0]._id
        },
        {
          code: "BAS",
          name: "Bath and North East Somerset",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BDF",
          name: "Bedford",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BBD",
          name: "Blackburn with Darwen",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BPL",
          name: "Blackpool",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BGW",
          name: "Blaenau Gwent",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BMH",
          name: "Bournemouth",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BRC",
          name: "Bracknell Forest",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BGE",
          name: "Bridgend",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BNH",
          name: "Brighton and Hove",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "BST",
          name: "Bristol, City of",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CAY",
          name: "Caerphilly",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CRF",
          name: "Cardiff",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CMN",
          name: "Carmarthenshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CBF",
          name: "Central Bedfordshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CGN",
          name: "Ceredigion",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CHE",
          name: "Cheshire East",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CHW",
          name: "Cheshire West and Chester",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CWY",
          name: "Conwy",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "CON",
          name: "Cornwall",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "DAL",
          name: "Darlington",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "DEN",
          name: "Denbighshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "DER",
          name: "Derby",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "DUR",
          name: "Durham, County",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "ERY",
          name: "East Riding of Yorkshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "FLN",
          name: "Flintshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "GWN",
          name: "Gwynedd",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "HAL",
          name: "Halton",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "HPL",
          name: "Hartlepool",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "HEF",
          name: "Herefordshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "AGY",
          name: "Isle of Anglesey",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "IOW",
          name: "Isle of Wight",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "IOS",
          name: "Isles of Scilly",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "KHL",
          name: "Kingston upon Hull",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "LCE",
          name: "Leicester",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "LUT",
          name: "Luton",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "MDW",
          name: "Medway",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "MTY",
          name: "Merthyr Tydfil",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "MDB",
          name: "Middlesbrough",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "MIK",
          name: "Milton Keynes",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "MON",
          name: "Monmouthshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NTL",
          name: "Neath Port Talbot",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NWP",
          name: "Newport",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NEL",
          name: "North East Lincolnshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NLN",
          name: "North Lincolnshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NSM",
          name: "North Somerset",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NBL",
          name: "Northumberland",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "NGM",
          name: "Nottingham",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "PEM",
          name: "Pembrokeshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "PTE",
          name: "Peterborough",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "PLY",
          name: "Plymouth",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "POL",
          name: "Poole",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "POR",
          name: "Portsmouth",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "POW",
          name: "Powys",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "RDG",
          name: "Reading",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "RCC",
          name: "Redcar and Cleveland",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "RCT",
          name: "Rhondda, Cynon, Taff",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "RUT",
          name: "Rutland",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "SHR",
          name: "Shropshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "SLG",
          name: "Slough",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "SGC",
          name: "South Gloucestershire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "STH",
          name: "Southampton",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "SOS",
          name: "Southend-on-Sea",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "STT",
          name: "Stockton-on-Tees",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "STE",
          name: "Stoke-on-Trent",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "SWA",
          name: "Swansea",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "SWD",
          name: "Swindon",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "TFW",
          name: "Telford and Wrekin",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "THR",
          name: "Thurrock",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "TOB",
          name: "Torbay",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "TOF",
          name: "Torfaen",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "VGL",
          name: "Vale of Glamorgan, The",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "WRT",
          name: "Warrington",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "WBK",
          name: "West Berkshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "WIL",
          name: "Wiltshire",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "WNM",
          name: "Windsor and Maidenhead",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "WOK",
          name: "Wokingham",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "WRX",
          name: "Wrexham",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        },
        {
          code: "YOR",
          name: "York",
          subdivision: "unitary authority",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"US",country_name:"United states",country_code:"1A"}
      );
      await db.collection('states').insertMany([
        {
          code: "DC",
          name: "District of Columbia",
          subdivision: "district",
          country_id: country.ops[0]._id
        },
        {
          code: "AS",
          name: "American Samoa",
          subdivision: "outlying territory",
          country_id: country.ops[0]._id
        },
        {
          code: "GU",
          name: "Guam",
          subdivision: "outlying territory",
          country_id: country.ops[0]._id
        },
        {
          code: "MP",
          name: "Northern Mariana Islands",
          subdivision: "outlying territory",
          country_id: country.ops[0]._id
        },
        {
          code: "PR",
          name: "Puerto Rico",
          subdivision: "outlying territory",
          country_id: country.ops[0]._id
        },
        {
          code: "UM",
          name: "United States Minor Outlying Islands",
          subdivision: "outlying territory",
          country_id: country.ops[0]._id
        },
        {
          code: "VI",
          name: "Virgin Islands, U.S.",
          subdivision: "outlying territory",
          country_id: country.ops[0]._id
        },
        {
          code: "AL",
          name: "Alabama",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "AK",
          name: "Alaska",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "AZ",
          name: "Arizona",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "AR",
          name: "Arkansas",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "California",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "Colorado",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "CT",
          name: "Connecticut",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "DE",
          name: "Delaware",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "FL",
          name: "Florida",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "GA",
          name: "Georgia",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "HI",
          name: "Hawaii",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "ID",
          name: "Idaho",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "IL",
          name: "Illinois",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "IN",
          name: "Indiana",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "IA",
          name: "Iowa",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "KS",
          name: "Kansas",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "KY",
          name: "Kentucky",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "LA",
          name: "Louisiana",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "ME",
          name: "Maine",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MD",
          name: "Maryland",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Massachusetts",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MI",
          name: "Michigan",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MN",
          name: "Minnesota",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MS",
          name: "Mississippi",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Missouri",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "MT",
          name: "Montana",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NE",
          name: "Nebraska",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NV",
          name: "Nevada",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NH",
          name: "New Hampshire",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NJ",
          name: "New Jersey",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NM",
          name: "New Mexico",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NY",
          name: "New York",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "NC",
          name: "North Carolina",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "ND",
          name: "North Dakota",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "OH",
          name: "Ohio",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "OK",
          name: "Oklahoma",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "OR",
          name: "Oregon",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "PA",
          name: "Pennsylvania",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "RI",
          name: "Rhode Island",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "SC",
          name: "South Carolina",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "South Dakota",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TN",
          name: "Tennessee",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "TX",
          name: "Texas",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "UT",
          name: "Utah",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "VT",
          name: "Vermont",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "VA",
          name: "Virginia",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "WA",
          name: "Washington",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "WV",
          name: "West Virginia",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "WI",
          name: "Wisconsin",
          subdivision: "state",
          country_id: country.ops[0]._id
        },
        {
          code: "WY",
          name: "Wyoming",
          subdivision: "state",
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"UY",country_name:"Uruguay",country_code:"598"}
      );
      await db.collection('states').insertMany([
        {
          code: "AR",
          name: "Artigas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CA",
          name: "Canelones",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CL",
          name: "Cerro Largo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CO",
          name: "Colonia",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DU",
          name: "Durazno",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FS",
          name: "Flores",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FD",
          name: "Florida",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LA",
          name: "Lavalleja",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Maldonado",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MO",
          name: "Montevideo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PA",
          name: "Paysandú",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RV",
          name: "Rivera",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RO",
          name: "Rocha",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RN",
          name: "Río Negro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Salto",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SJ",
          name: "San José",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SO",
          name: "Soriano",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tacuarembó",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TT",
          name: "Treinta y Tres",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"UZ",country_name:"Uzbekistan",country_code:"998"}
      );
      await db.collection('states').insertMany([
        {
          code: "AN",
          name: "Andijon",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BU",
          name: "Buxoro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "FA",
          name: "Farg‘ona",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JI",
          name: "Jizzax",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NG",
          name: "Namangan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "NW",
          name: "Navoiy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QA",
          name: "Qashqadaryo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "QR",
          name: "Qoraqalpog‘iston Respublikasi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Samarqand",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SI",
          name: "Sirdaryo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SU",
          name: "Surxondaryo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TO",
          name: "Toshkent",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TK",
          name: "Toshkent",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "XO",
          name: "Xorazm",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"VU",country_name:"Vanuatu",country_code:"678"}
      );
      await db.collection('states').insertMany([
        {
          code: "MAP",
          name: "Malampa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "PAM",
          name: "Pénama",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SAM",
          name: "Sanma",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SEE",
          name: "Shéfa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TAE",
          name: "Taféa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TOB",
          name: "Torba",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"VA",country_name:"Vatican city",country_code:"379"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"VE",country_name:"Venezuela",country_code:"58"}
      );
      await db.collection('states').insertMany([
        {
          code: "Z",
          name: "Amazonas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "B",
          name: "Anzoátegui",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "C",
          name: "Apure",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "D",
          name: "Aragua",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "E",
          name: "Barinas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "F",
          name: "Bolívar",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "G",
          name: "Carabobo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "H",
          name: "Cojedes",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "Y",
          name: "Delta Amacuro",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "W",
          name: "Dependencias Federales",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "A",
          name: "Distrito Capital",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "I",
          name: "Falcón",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "J",
          name: "Guárico",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "K",
          name: "Lara",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "M",
          name: "Miranda",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "N",
          name: "Monagas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "L",
          name: "Mérida",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "O",
          name: "Nueva Esparta",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "P",
          name: "Portuguesa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "R",
          name: "Sucre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "T",
          name: "Trujillo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "S",
          name: "Táchira",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "X",
          name: "Vargas",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "U",
          name: "Yaracuy",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "V",
          name: "Zulia",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"VN",country_name:"Vietnam",country_code:"84"}
      );
      await db.collection('states').insertMany([
        {
          code: "44",
          name: "An Giang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "43",
          name: "Bà Rịa–Vũng Tàu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "57",
          name: "Bình Dương",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "58",
          name: "Bình Phước",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "40",
          name: "Bình Thuận",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "31",
          name: "Bình Định",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "55",
          name: "Bạc Liêu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "54",
          name: "Bắc Giang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "53",
          name: "Bắc Kạn",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "56",
          name: "Bắc Ninh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "50",
          name: "Bến Tre",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Cao Bằng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "59",
          name: "Cà Mau",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "CT",
          name: "Cần Thơ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "30",
          name: "Gia Lai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Hà Giang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "63",
          name: "Hà Nam",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HN",
          name: "Hà Nội",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "15",
          name: "Hà Tây",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "23",
          name: "Hà Tĩnh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "14",
          name: "Hòa Bình",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "66",
          name: "Hưng Yên",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "61",
          name: "Hải Dương",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HP",
          name: "Hải Phòng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "73",
          name: "Hậu Giang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SG",
          name: "Hồ Chí Minh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "34",
          name: "Khánh Hòa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "47",
          name: "Kiên Giang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "28",
          name: "Kon Tum",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Lai Châu",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "41",
          name: "Long An",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "02",
          name: "Lào Cai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "35",
          name: "Lâm Đồng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Lạng Sơn",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "67",
          name: "Nam Định",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "22",
          name: "Nghệ An",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "18",
          name: "Ninh Bình",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "36",
          name: "Ninh Thuận",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "68",
          name: "Phú Thọ",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "32",
          name: "Phú Yên",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "24",
          name: "Quảng Bình",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "27",
          name: "Quảng Nam",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "29",
          name: "Quảng Ngãi",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "13",
          name: "Quảng Ninh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "25",
          name: "Quảng Trị",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "52",
          name: "Sóc Trăng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Sơn La",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "21",
          name: "Thanh Hóa",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "20",
          name: "Thái Bình",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "69",
          name: "Thái Nguyên",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "26",
          name: "Thừa Thiên–Huế",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "46",
          name: "Tiền Giang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "51",
          name: "Trà Vinh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Tuyên Quang",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "37",
          name: "Tây Ninh",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "49",
          name: "Vĩnh Long",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "70",
          name: "Vĩnh Phúc",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "Yên Bái",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "71",
          name: "Điện Biên",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DN",
          name: "Đà Nẵng",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "33",
          name: "Đắk Lắk",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "72",
          name: "Đắk Nông",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "39",
          name: "Đồng Nai",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "45",
          name: "Đồng Tháp",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"VG",country_name:"Virgin islands, british",country_code:"1-284"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"VI",country_name:"Virgin islands, u.s.",country_code:"1-340"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"QW",country_name:"Wake island",country_code:"1-808B"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"WF",country_name:"Wallis and futuna",country_code:"681"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"EH",country_name:"Western sahara",country_code:"212A"}
      );
      await db.collection('states').insertMany([
        {
          code: "N/A",
          name: "N/A",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"YE",country_name:"Yemen",country_code:"967"}
      );
      await db.collection('states').insertMany([
        {
          code: "AD",
          name: "'Adan",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AM",
          name: "'Amrān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "AB",
          name: "Abyān",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "BA",
          name: "Al Bayḑā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "JA",
          name: "Al Jawf",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MR",
          name: "Al Mahrah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MW",
          name: "Al Maḩwīt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HU",
          name: "Al Ḩudaydah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DA",
          name: "Aḑ Ḑāli'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "DH",
          name: "Dhamār",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "IB",
          name: "Ibb",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "LA",
          name: "Laḩij",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Ma'rib",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "RA",
          name: "Raymah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SH",
          name: "Shabwah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "TA",
          name: "Tā‘izz",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SA",
          name: "Şan‘ā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SN",
          name: "Şan‘ā'",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "SD",
          name: "Şā‘dah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HJ",
          name: "Ḩajjah",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HD",
          name: "Ḩaḑramawt",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ZM",country_name:"Zambia",country_code:"260"}
      );
      await db.collection('states').insertMany([
        {
          code: "02",
          name: "Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "08",
          name: "Copperbelt",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "03",
          name: "Eastern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "04",
          name: "Luapula",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "09",
          name: "Lusaka",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "06",
          name: "North-Western",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "05",
          name: "Northern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "07",
          name: "Southern",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "01",
          name: "Western",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------
      var country = await db.collection('countries').insertOne(
        {country_abbreviation:"ZW",country_name:"Zimbabwe",country_code:"263"}
      );
      await db.collection('states').insertMany([
        {
          code: "BU",
          name: "Bulawayo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "HA",
          name: "Harare",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MA",
          name: "Manicaland",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MC",
          name: "Mashonaland Central",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "ME",
          name: "Mashonaland East",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MW",
          name: "Mashonaland West",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MV",
          name: "Masvingo",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MN",
          name: "Matabeleland North",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MS",
          name: "Matabeleland South",
          subdivision: null,
          country_id: country.ops[0]._id
        },
        {
          code: "MI",
          name: "Midlands",
          subdivision: null,
          country_id: country.ops[0]._id
        }
      ]);
      // ---------------------------------------------------------------------------------------------

      
        
   } catch (error) {
      console.log(error);
   };

  },

  async down(db) {

  },
};
