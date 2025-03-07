import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Step9 = ({ nextStep, prevStep, handleChange, values }) => {
  const [selectedName, setSelectedName] = useState(null);

  // Get the county selected in Step8 from parent values
  const selectedCounty = localStorage.getItem("countyselected");

  // Map each county to its corresponding list of towns.
  // (Replace the dummy data with your actual town data for each county)
  const townsByCounty = {
    Carlow: ["Carlow", "Bagenalstown", "Hacketstown", "Ballon", "Borris", "Fenagh","Glynn","Kildavin","Leighlinbridge","Myshall","Nurney","Rathvilly","St. Mullins","Tullow"],
    Cavan: ["Cavan Town", "Ballyjamesduff", "Shercock","Ardlougher","Arva","Bailieborough","Ballinagh","Ballyconnell","Ballyhaise","Ballyheelan","Ballymacgovern","Bawnboy","Belturbet","Blacklion","Carrickaboy","Castlerahan","Cloverhill","Cootehill","Corlough","Cornafean","Crossdoney","Crosserlough","Crosskeys","Finea","Garadice","Gowna","Kilcogy","Killashandra","Kilnaleck","Kingscourt","Larah","Loughduff","Mountnugent","Mullagh","Poles","Redhills","Stradone","Swanlinbar","Virginia"],
    Clare: ["Passage East", "Lismore", "Kilmacthomas","Aglish","Ardmore","Ballyduff","Cappoquin","Cheekpoint","Cork Road","Dungarvan","Dunmore East","Dunmore Road","Faithlegge","FerrybankGracedieu","Kill","Kilmacow","Portlaw","Ring","Stradbally","Tallow","Tramore","Waterford City","Woodstown"],
    Cork: [
      "Aghada", "Aherla", "Allihies", "Ballincollig", "Ballineen", "Ballinhas sig",
      "Ballinlough", "Ballinspittle", "Ballintemple", "Ballinure", "Ballycotton",
      "Ballydehob", "Ballygarvan", "Ballyphehane", "Ballyvolane", "Ballyvourney",
      "Baltimore", "Bandon", "Banteer", "Bantry", "Barley Cove", "Barnavara", "Beara",
      "Berrings", "Bishopstown", "Blackpool", "Blackrock", "Blarney", "Boher Bue",
      "Brinny", "Святіgaline", "Сагrignavar", "Сагrigrohane", "Сагrigtwohill",
      "Castlelyons", "Castlemagner", "Castlemartyr", "Castletown Berehaven",
      "Castletownsend", "Charleville", "City Centre", "Clogheen", "Cloghroe",
      "Clonakilty", "Cloyne", "Coachford", "Cobb", "Conna", "Cork Airport",
      "Cork City", "Courtmarsherry", "Crookstown", "Crossbarry", "Crosshaven",
      "Curraheen", "Donnybrook", "Douglas", "Drimoleague", "Drinagh", "Dripsey",
      "Farran", "Dublin Hill", "Fermoy", "Dunmanway", "Fota", "Enniskeane",
      "Frankfield", "Farnanes", "Garryvoe", "Glandore", "Glanmire", "Glasheen",
      "Glenbrook", "Grehagh", "Glengariff", "Glenville", "Glounthaune", "Grange",
      "Gurranabraher", "Halfway", "Inniscarra", "Innishannon", "Islands",
      "Jacobs Island", "Kanturk", "Kerry Pike", "Kerrypike", "Kilbrittain",
      "Kilorohane", "Kiloorrery", "Kileady", "Killeagh", "Kilworth", "Kinsale",
      "Knocknaheeny", "Ladysbridge", "Leap", "Lislevane", "Lissarda", "Little Island",
      "Lyre", "Macroom", "Mahon", "Mahon Point", "Mallow", "Mayfield",
      "Michelstown", "Midleton", "Model Farm", "Millstreet", "Monkstown",
      "Montenotte", "Newmarket", "Rai", "Ovens", "Oysterhaven", "Passage West",
      "Raheen", "Rathcormac", "Rathduff", "Ringaskiddy", "Riverstick", "Riverstown",
      "Rochestown", "Rosscarbery", "Rostellan", "Rylane", "Schull", "Shanakiel",
      "Shanballymore", "Shangarry", "Skibbereen", "St. Lukes", "Sundays Well",
      "Templemartin", "Timoleague", "Tivoli", "Togher", "Tower", "Tullylease",
      "Turners Cross", "Union Hall", "Waterfall", "Watergrasshill", "Whitechurch",
      "Whitegate", "Wilton", "Youghal"
    ],
    Donegal: [
      "Annagary",
      "Ardara",
      "Ballybofey",
      "Ballyshannon",
      "Buncrana",
      "Bundoran",
      "Burtonport",
      "Carrigart",
      "Clonmany",
      "Donegal Town",
      "Downings",
      "Drumkeen",
      "Dunfanaghy",
      "Dungloe",
      "Falcarragh",
      "Fanad",
      "Glencolmcille",
      "Glenties",
      "Gweedore",
      "Inishowen",
      "Inver",
      "Islands",
      "Killybegs",
      "Letterkenny",
      "Lifford",
      "Manorcunningham",
      "Milford",
      "Mullaghuff",
      "Newtown Cunningham",
      "Raphoe",
      "Rathmelton",
      "Rathmullen",
      "Rossnowlagh",
      "Stranorlar",
    ],
    Dublin: [
      // Image 1
      "Abbottstown",
      "Adamstown",
      "Arbour Hill",
      "Artane",
      "Ashtown",
      "Ayrfield",
      "Balbriggan",
      "Baldoyle",
      "Balgriffin",
      "Balinteer",
      "Ballsbridge",
      "Ballyboden",
      "Ballybough",
      "Ballyboughal",
      "Ballybrack",
      "Ballycoolin",
      "Ballycullen",
      "Ballyfermot",
      "Ballygall",
      "Ballymun",
      "Bayside",
      "Beaumont",
      "Beechpark",
      "Blackhorse Ave",
      "Blackpits",
      "Blanchardstown",
      "Bluebell",
      "Bohernabreena",
      "Booterstown",
      "Brennanstown Road",
      "Brittas",
      "Broadstone",
      "Cabinteely",
      "Cabra",
      "Cappagh Road",
      "Carpenterstown",
      "Carrickmines",
      "Castleknock",
      "Chapelizod",
      "Cherry Orchard",
      "Christchurch",
      "Churchtown",
      "Citywest",
      "Clare Hall",
      "Cloghran",
      "Clondalkin",
      "Clonee",
      "Clongriffin",
      "Clonliffe",
      "Clonshaugh",
      "Clonskeagh",
      "Clontarf",
      "Coolock",
      "Corduff",
      "Crumlin",
      "Dalkey",
      "Damastown",
      "Dartry",
      "Deansgrange",
      "Docklands",
      "Dollymount",
      "Dolphins Barn",
      "Donaghmede",
      "Donnybrook",
      "Donnycarney",
      "Drimnagh",
      "Drumcondra",
  
      // Image 2 (continuation in the question’s order)
      "Dundrum",
      "East Wall",
      "Edenmore",
      "Elmount",
      "Fairview",
      "Finglas",
      "Firhouse",
      "Foxrock",
      "Garristown",
      "Glasnevin",
      "Glasthule",
      "Glenageary",
      "Glenasmole",
      "Glenullen",
      "Goatstown",
      "Gormanston",
      "Grand Canal Dk",
      "Greenhills",
      "Griffith Ave",
      "Harolds Cross",
      "Hartstown",
      "Hollystown",
      "IFSC",
      "Inchicore",
      "Irishtown",
      "Islandbridge",
      "Kilbarrack",
      "Killester",
      "Killiney",
      "Kilmacud",     // sometimes appears as 'Kilmashogue' in older references, but often spelled Kilmacud
      "Kilmainham",
      "Kilmore",
      "Kiltiernan",
      "Kimmage",
      "Kinsealy",
      "Knocklyon",
  
      // Image 3
      "Leopardstown",
      "Longmile Road",
      "Loughlinstown",
      "Loughshinny",
      "Lucan",
      "Lusk",
      "Malahide",
      "Marino",
      "Meakstown",
      "Milltown",
      "Monkstown",
      "Mt. Merrion",
      "Mulhuddart",
      "Naas Road",
      "Naul",
      "Nangor Road",
      "Navan Road",
      "Newcastle",
      "Newlands Cross",
      "North Circular Road",
      "North City Centre",
      "North Strand",
      "Northern Cross",
      "Northwest Business Park",
      "Oldtown",
      "Ongar",
      "Palmerstown",
      "Park West",
      "Perrystown",
      "Phibsboro",
      "Poppintree",
      "Porterstown",
      "Portmarnock",
      "Portobello",
      "Portrane",
      "Raheny",
      "Ranelagh",
      "Rathcoole",
      "Rathfarnham",
      "Rathgar",
  
      // Image 4
      "Rathmichael",
      "Rathmines",
      "Rialto",
      "Ringsend",
      "Rolestown",
      "Roseville",
      "Rush",
      "Saggart",
      "Sallynoggin",
      "Sandycove",
      "Sandford",
      "Sandymount",
      "Santry",
      "Shankill",
      "Skerries",
      "Smithfield",
      "South Circular Road",
      "South City Centre",
      "St Margarets",
      "Stepaside",
      "Stillorgan",
      "Stoneybatter",
      "Strawberry Beds",
      "Sutton",
      "Swords",
      "Tallaght",
      "Temple Bar",
      "Templeogue",
      "Terenure",
      "The Coombe",
      "The Ward",
      "Ticknock",
      "Tyrrelstown",
      "Walkinstown",
      "Whitehall",
      "Windy Arbour"
    ],
    Galway: [
      // 1st image
      "Abbey/knockmoy",
      "Ahascragh",
      "Annaghdown",
      "Ardrahan",
      "Athenry",
      "Attymon",
      "Aughrim",
      "Ballinahinch",
      "Ballinasloe",
      "Ballinderreen",
      "Ballybane",
      "Ballybrit",
      "Ballyconneely",
      "Ballyforan",
      "Ballygar",
      "Barna",
      "Bohermore",
      "Boleybeg",
      "Bullaun",
      "Bushypark",
      "Caherlistrane",
      "Carna",
      "Carraroe",
      "Cashel",
      "Castleblakeney",
      "Castlegar",
      "City Centre",
      "Claddagh",
      "Claddaghduff",
      "Claregalway",
      "Clarinbridge",
      "Cleggan",
      "Clifden",
      "Clonboo",
      "Clonbur",
      "Cong",
      "Coose",
      "Corcullen",
      "Cornamona",
  
      // 2nd image
      "Corrandulla",
      "Craughwell",
      "Creggs",
      "Dangan",
      "Doughiska",
      "Dunmore",
      "Eyrecourt",
      "Furbo",
      "Glenamaddy",
      "Glinsk",
      "Gort",
      "Gurteen",
      "Headford",
      "Headford Road",
      "Inverin",
      "Islands",
      "Kearaun",
      "Kilchreest",
      "Kilcolgan",
      "Kilkieran",
      "Killimor",
      "Kilreekil",
      "Kiltomer",
      "Killtullagh",
      "Kingston",
      "Kinvara",
      "Knocknacarra",
      "Lackagh",
      "Leenane",
      "Leitrim",
      "Letterfrack",
      "Lettermullen",
      "Loughrea",
      "Maam Cross",
      "Menlo",
      "Merlin",
      "Mervue",
      "Monivea",
      "Mount Bellew",
  
      // 3rd image
      "Moyard",
      "Moycullen",
      "Moylough",
      "New Inn",
      "Newcastle",
      "Oranmore",
      "Oughterard",
      "Portumna",
      "Rahoon",
      "Recess",
      "Renmore",
      "Renvyle",
      "Roscahill",
      "Roscam",
      "Rosmuck",
      "Rosshill",
      "Roundstone",
      "Salthill",
      "Shanbally",    // sometimes spelled “Shanballa” in local usage
      "Shantalla",
      "Spiddal",
      "Taylors Hill",
      "Terryland",
      "Tirellan",
      "Tonabrocky",
      "Tuam",
      "Tubber",
      "Tullycross",
      "Tullymore",
      "Wellpark",
      "Williamstown",
      "Woodford",
      "Woodlawn",
    ],
    Kerry: [
      "Ardfert",
      "Ballinskelligs",
      "Ballyard",
      "Ballybunion",
      "Ballydavid",
      "Ballyferriter",
      "Ballyheigue",
      "Beaufort",
      "Caherciveen",
      "Caherdaniel",
      "Camp",
      "Caragh Lake",
      "Castlecove",
      "Castleisland",
      "Cromane",
      "Dingle",
      "Farranfore",
      "Glenbeigh",
      "Islands",
      "Kenmare",
      "Kilgarvan",
      "Killarney",
      "Killorglin",
      "Leith",
      "Listowel",
      "Lixnaw",
      "Milltown",
      "Moyvane",
      "Rathmore",
      "Rossbeigh",
      "Sneem",
      "Tarbert",
      "Tralee",
      "Waterville",
    ],
   Kildare: [
    "Allen", "Allenwood", "Athgarvan", "Athy", "Ballitore",
    "Ballymore Eustace", "Ballysax", "Ballyshannon", "Brannockstown", "Broadford",
    "Brownstown", "Calverstown", "Caragh", "Carbury", "Castledermot",
    "Celbridge", "Clane", "Coill Dubh", "Curragh", "Derrinturn",
    "Donadea", "Eadestown", "Enfield", "Johnstown", "Johnstownbridge",
    "Kilcock", "Kilcullen", "Kildangan", "Kildare", "Kilkea",
    "Kill", "Kilmeage", "Kilteel", "Leixlip", "Maynooth",
    "Milltown", "Monasterevin", "Moone", "Moyvalley", "Naas",
    "Newbridge", "Nurney", "Pollardstown", "Prosperous", "Rathangan",
    "Robertstown", "Sallins", "Straffan", "Suncroft", "Timolin",
    "Two Mile House"
  ],
    Kilkenny: ["Ballyhale", "Ballyragget", "Bennettsbridge", "Callan", "Castlecomer",
    "Cuffesgrange", "Dunmore", "Freshford", "Glenmore", "Goresbridge",
    "Gowran", "Graiguenamanagh", "Inistioge", "Johnstown", "Kells",
    "Kilkenny", "Kilmacow", "Kilmoganny", "Mooncoin", "Mullinavat",
    "Paulstown", "Piltown", "Slieverue", "Stoneyford", "Thomastown",
    "Tullogher", "Urlingford"],
    Laois: ["Abbeylek", "Bairlybrittas", "Ballyfin", "Ballylynn", "Ballyrcan", "Borris-in-Ossory", "Castletown", "Clonaslee", "Crettyard", "Cullahill", "Durrow", "Emo", "Errill", "Killenard", "Mountmellick", "Mountrath", "Portarlington", "Portloaise", "Rathdowney", "Shanahoe", "Stradbally", "Timahoe", "Vicarstown"],
    Leitrim: ["Ballinamore", "Carrick-on-Shannon", "Carrigallen", "Cloone", "Dromahair", "Dromod", "Drumshanbo", "Drumsna", "Fenagh", "Glenfarne", "Gorvagh", "Keshoarrigan", "Leitrim Village", "Manorhamilton", "Mohill", "Newtowngore", "Tullaghan"],
    Limerick: ["Limerick", "Abbeyfeale", "Adare", "Annacotty", "Askeaton", "Athlacca", "Ballinacurra", "Ballingarry", "Ballyneety", "Ballysheedy", "Ballysimon", "Broadford", "Bruff", "Caherconlish", "Caherdavin", "Cappamore", "Castleconnell", "Castletroy", "City Centre", "Clareview", "Clarina", "Corbally", "Crecora", "Croagh", "Croom", "Doon", "Dooradoyle", "Dromcollogher", "Dromore", "Droombanna", "Dublin Road", "Ennis Road", "Fedamore", "Foynes", "Galbally", "Garryowen", "Glin", "Hospital", "Janesboro", "Kilbane", "Kilcorcoran", "Kildimo", "Kimallock", "Lisnagry", "Monaleen", "Moyross", "Mungret", "Murroe", "Newcastle West", "North Circular Rd", "Old Singland Rd", "Oola", "Pallasgreen", "Pallaskenny", "Patrickswell", "Pennywell", "Raheen", "Rathbane", "Rathkeale", "Rhebogue", "Shanagolden", "South Circular Rd", "Thomond Gate"],
    Longford: ["Longford", "Dring", "Lanesboro", "Newtowncashel", "Drumlish", "Lanesborough", "Newtownforbes", "Edgeworthstown", "Legan", "Ratharney", "Granard", "Rooskey", "Keenagh", "Moyne", "Termonbarry"],
    Louth: ["Annagassan", "Castebellingham", "Dromiskin", "Hackballscross", "Omeath", "Ardee", "Clogherhead", "Dunany", "Knockbridge", "Ravensdale", "Tinure", "Baltray", "Collon", "Dundalk", "Louth", "Stamullen", "Togher", "Blackrock", "Cooley", "Dunleer", "Mansfieldstown", "Tallanstown", "Tullyallen", "Carlingford", "Drogheda", "Grangebellew", "Monasterboice", "Termonfeckin"],
    Mayo: [
      "Achill", "Balla", "Ballina", "Ballinadine", "Ballinrobe",
      "Ballintober", "Ballyhaunis", "Bangor Erris", "Belmullet", "Castlebar",
      "Charlestown", "Claremorris", "Clonbur", "Cong", "Cross",
      "Crossmolina", "Foxford", "Hollymount", "Irishtown", "Islands",
      "Kilkelly", "Killala", "Kilmaine", "Kiltimagh", "Knock",
      "Lacken", "Leenane", "Louisburgh", "Mulranny", "Newport",
      "Partry", "Shrule", "Swinford", "The Neale", "Tourmakeady",
      "Westport"
  ],  
    Meath: [  "Ardcath", "Ashbourne", "Athboy", "Athlumley", "Ballinabrackey",
      "Ballivor", "Balrath", "Batterstown", "Bellewstown", "Bettystown",
      "Carlanstown", "Carnaross", "Castlejordan", "Castletown", "Clonard",
      "Clonee", "Clonmellon", "Donacarney", "Donore", "Drogheda",
      "Drumone", "Drumree", "Duleek", "Dunboyne", "Dunsany",
      "Dunshaughlin", "Enfield", "Fordstown", "Garristown", "Gormanstown",
      "Hammondtown", "Johnstown", "Jordanstown", "Julianstown", "Kells",
      "Kentstown", "Kilbride", "Kilcock", "Kildalkey", "Kilmessan",
      "Laytown", "Longwood", "Mornington", "Moynalty", "Navan",
      "Nobber", "Oldcastle", "Oldtown", "Rathmoylon", "Ratoath",
      "Slane", "Stamullen", "Summerhill", "Tara", "The Ward",
      "Trim"],
    Monaghan: ["Ballinode", "Ballybay", "Carrickmacross", "Castleblayney", "Clones",
    "Clontibret", "Emyvale", "Monaghan", "Scottstown", "Smithborough"],
    Offaly: ["Ballinagar", "Ballycumber", "Banagher", "Birr", "Clara", "Cloghan",
    "Clonbullogue", "Daingean", "Edenderry", "Ferbane", "Geashill", 
    "Horseleap", "Kilcormac", "Killeigh", "Kinnitty", "Moneygall", 
    "Rhode", "Shannonbridge", "Shinrone", "Tullamore"],
    Roscommon: ["Arigna", "Athelague", "Athlone West", "Ballagh", "Ballaghaderreen",
    "Ballinagare", "Ballinameen", "Ballinlough", "Ballintubber", "Ballydangan",
    "Ballyforan", "Ballygar", "Ballymoe", "Boyle", "Brideswell",
    "Castlecoote", "Castleplunkett", "Castlerea", "Cloonfad", "Cootehall",
    "Corrigeenroe", "Creggs", "Croghan", "Curraghboy", "Derrane",
    "Donamon", "Dysart", "Elphin", "Four Mile House", "Frenchpark",
    "Fuerty", "Gallowstown", "Garranlahan", "Keadue", "Kilglass",
    "Kilmore", "Kilrooskey", "Kilteevan", "Kiltoom", "Knockcroghery",
    "Knockvicar", "Lanesboro", "Lanesborough", "Lecarrow", "Lisacul",
    "Loughlynn", "Mount Talbot", "Rooskey", "Roscommon", "Scramoge",
    "Strokestown", "Tarmonbarry", "Tibohine", "Tulsk"],
    Sligo: ["Achonry", "Aclare", "Ballinacarrow", "Ballinafad", "Ballinode", "Ballintogher", "Ballisodare", 
         "Ballygawley", "Ballymote", "Ballyrush", "Beltra", "Bunduff", "Buntra", "Calry", "Carney", 
         "Carrowmore", "Castlebaldwin", "Cliffoney", "Collooney", "Coolaney", "Culfadda", "Curry", 
         "Doocastle", "Dromore West", "Drumcliff", "Drumfin", "Dunally", "Easkey", "East Sligo", 
         "Enniscrone", "Grange", "Gurteen", "Kilglass", "Knocknahur", "Lissadell", "Maugheraboy", 
         "Monasteraden", "Mullaghmore", "North Sligo", "Riverstown", "Rosscarbery", "Rosses Point", 
         "Sligo Town", "South Sligo", "Strandhill", "Templeboy", "Tonaphubble", "Tourlestrane", 
         "Tubbercurry", "West Sligo"],
    Tipperary: ["Ballina", "Ballycommon", "Ballymackey", "Ballyporeen", "Bansha", "Birdhill", "Borrisokane", 
             "Cahir", "Cappagh White", "Carrick-on-Suir", "Carrigahorig", "Cashel", "Clonmel", "Cloughjordan", 
             "Coolbawn", "Dolla", "Dromineer", "Dundrum", "Emly", "Fethard", "Garrykennedy", "Golden", 
             "Kilcommon", "Killenaule", "Lattin", "Mullinahone", "Nenagh", "Newcastle", "Newport", "Newtown", 
             "Oola", "Portroe", "Puckane", "Roscrea", "Silvermines", "Templemore", "Terryglass", "Thurles", 
             "Tipperary Town", "Toomevara"],
    Waterford: ["Aglish", "Ardmore", "Ballyduff", "Cappoquin", "Cheekpoint", "Cork Road", "Dungarvan", 
             "Dunmore East", "Dunmore Road", "Faithlegg", "Ferrybank", "Gracedieu", "Kill", "Kilmacow", 
             "Kilmacthomas", "Lismore", "Passage East", "Portlaw", "Ring", "Stradbally", "Tallow", "Tramore", 
             "Waterford City", "Woodstown"],
    Westmeath: ["Ardmonney", "Athlone East", "Ballinagore", "Ballinahown", "Ballinalack", "Ballykeeran", 
             "Ballymahon", "Ballymore", "Ballynacarrigy", "Ballynafid", "Bracklin", "Castlepollard", 
             "Castletown", "Clonard", "Clonmellon", "Collinstown", "Coole", "Crookedwood", "Delvin", 
             "Drumraney", "Dysart", "Fore", "Geoghegan", "Glasson", "Horseleap", "Kilbeggan", "Killucan", 
             "Kinnegad", "Lismacaffrey", "Miltownpass", "Moate", "Mount Temple", "Moyvore", "Mullingar", 
             "Multyfarnham", "Raharney", "Rathconrath", "Rathowen", "Roachfortbridge", "Streamstown", 
             "Streete", "Tang", "Tyrrellspass"],
    Wexford: ["Annagh", "Ardamine", "Arthurstown", "Balledmond", "Ballycanew", "Ballycullane", 
           "Ballygarrett", "Ballymoney", "Blackwater", "Bree", "Bunclody", "Camolin", "Campile", 
           "Castlebridge", "Castletown", "Clogh", "Clonegal", "Clonroche", "Coolgreany", "Courtown", 
           "Craanford", "Creagh", "Curracloe", "Duncannon", "Enniscorthy", "Ferns", "Fethard", 
           "Foulksmills", "Gorey", "Hollyfort", "Inch", "Kilanerin", "Kilmore Quay", "Kilmuckridge", 
           "Kilrush", "Kiltealy", "Monaseed", "New Ross", "Oilgate", "Raheenagurran", "Rosslare", 
           "Rosslare Strand", "Taghmon", "Tara Hill", "Wellingtonbridge","Wexford"],
    Wicklow: ["Arklow", "Ashford", "Aughavannagh", "Aughrim", "Avoca", "Baltinglass", "Blessington", 
           "Bray", "Brittas", "Brittas Bay", "Carnew", "Delgany", "Donard", "Dunlavin", "Enniskerry", 
           "Glen of Imaal", "Glendalough", "Glenealy", "Glenmalure", "Grange Con", "Greystones", 
           "Hollywood", "Kilcoole", "Kilmacanogue", "Kilpeddar", "Kilquade", "Kiltegan", 
           "Knockananna", "Lacken", "Laragh", "Newcastle", "Newtownmountkennedy", "Rathdangan", 
           "Rathnew", "Redcross", "Roundwood", "Shillelagh", "Stratford-on-Slaney", "Tinahely", 
           "Wicklow Town", "Woodenbridge"],
  }

  // Get the town list for the selected county; default to an empty array if not found.
  const names = townsByCounty[selectedCounty] || [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Split names into chunks of 4 for each column (layout remains unchanged)
  const chunkSize = 4;
  const nameChunks = [];
  for (let i = 0; i < names.length; i += chunkSize) {
    nameChunks.push(names.slice(i, i + chunkSize));
  }

  // Handle town selection: send the selected town's name to backend via handleChange
  const handleNameClick = (name) => {
    handleChange("nearest_town")(name);
    setSelectedName(name);
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <div>
      <div className="container-fluid step3bg">
        <div className="paDa">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="step1font d-none d-md-block text-light">What is the nearest town?</h1>
              <p className=" fs-1 d-block d-md-none text-light" style={{fontFamily:'Libre Baskerville'}} >What is the nearest town?</p>
              <p className="step1para text-light">
                Select the town closest to the property.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid nooverflowx mt-5 mb-5">
        <div className="row">
          {nameChunks.map((chunk, index) => (
            <div
              key={index}
              className="col-12 col-md-12 px-5 px-md-0 marg"
            >
              <div className="d-flex flex-column flex-md-row">
                {chunk.map((name) => (
                  <button
                    key={name}
                    className={`btn mx-2 step3button w-100 mb-2 ${
                      name === selectedName ? "selected" : ""
                    }`}
                    onClick={() => handleNameClick(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={prevStep}
            style={{
              marginRight: "10px",
              padding: "10px 20px",
              backgroundColor: "#003366",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Back
          </button>

          <button
            onClick={nextStep}
            style={{
              padding: "10px 20px",
              backgroundColor: selectedName ? "#003366" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "100px",
              cursor: selectedName ? "pointer" : "not-allowed",
              fontSize: "14px",
            }}
            disabled={!selectedName}
          >
            Forward
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step9;
