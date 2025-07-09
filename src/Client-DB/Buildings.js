import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../Images/download.jpeg';
import { 
  IoIosArrowDown, 
  IoMdNotifications, 
  IoIosArrowForward, 
  IoIosArrowBack 
} from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const Buildings = () => {
  // States
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    property_type: '',
    property_size: '',
    bedrooms: '',
    county: '',
    nearest_town: ''
  });

  // Notification states
  const [notifications, setNotifications] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [markAllDisabled, setMarkAllDisabled] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const [showFilters, setShowFilters] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Bedroom options with separate values and labels
  const bedrooms = [
    { value: '1', label: '1 Bedroom' },
    { value: '2', label: '2 Bedrooms' },
    { value: '3', label: '3 Bedrooms' },
    { value: '4', label: '4 Bedrooms' },
    { value: '5', label: '5 Bedrooms' },
    { value: '6', label: '6 Bedrooms' },
    { value: '7', label: '7 Bedrooms' },
    { value: '8', label: '8 Bedrooms' }
  ];

  // Initialize filters from URL and fetch data
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialFilters = {
      building_type: params.get('building_type') || '',
      property_size: params.get('property_size') || '',
      bedrooms: params.get('bedrooms') || '',
      county: params.get('county') || '',
      nearest_town: params.get('nearest_town') || '',
    };
    
    // Handle existing bedroom values from URL
    if (initialFilters.bedrooms) {
      const bedValue = initialFilters.bedrooms;
      const bedOption = bedrooms.find(opt => opt.value === bedValue);
      if (bedOption) {
        initialFilters.bedrooms = bedOption.value;
      }
    }

    setFilters(initialFilters);
    fetchData(params.toString());
  }, []);

  // Fetch notifications
  useEffect(() => {
    if (!accessToken) return;
    axios.get('https://backend.homecert.ie/api/notifications/', {
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(response => {
      setNotifications(response.data?.notifications || []);
    })
    .catch(error => {
      console.error("Error fetching notifications:", error);
    });
  }, [accessToken]);

  // Fetch filtered data from API
  const fetchData = async (queryString = '') => {
    try {
      const response = await axios.get(
        `https://backend.homecert.ie/api/job-search/?${queryString}`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Update URL and fetch new data
  const handleSearch = () => {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });

    const queryString = params.toString().replace(/%2B/g, '+');
    window.history.pushState({}, '', `?${queryString}`);
    fetchData(queryString);
  };

  // Notification handlers (keep existing implementation)
  const handleMarkAllAsRead = async () => {
    // ... (keep existing notification implementation)
  };

  const unreadCount = notifications.filter(n => n.status !== "read").length;


  // Filter options
  const counties = [
    "Carlow", "Cavan", "Clare", "Cork",
    "Donegal", "Dublin", "Galway", "Kerry",
    "Kildare", "Kilkenny", "Laois", "Leitrim",
    "Limerick", "Longford", "Louth", "Mayo",
    "Meath", "Monaghan", "Offaly", "Roscommon",
    "Sligo", "Tipperary", "Waterford", "Westmeath",
    "Wexford", "Wicklow",
   ];
 
   const propertyTypes = [
     'Detached', 'Semi-detached', 'Mid-terrace', 'Apartment', 'Duplex', 'Bungalow', 'Multi-unit', 'Other'
   ];
 
   const propertySizes = [
     'Under 1000 ft²', '1000-2500 ft²', '2500-3000 ft²', '3000-3500 ft²', '3500-4000 ft²', '4000-4500 ft²','4500-5000 ft²', '5000+ ft²' ,
      'under 93 m²','93 m²', '93-232 m²', '232-279 m²', '279-325 m²', '325-372 m²', '372-418 m²', '418-465 m²', '465+ m²'
   ];
 

   const towns = [
    "Carlow", "Bagenalstown", "Hacketstown", "Ballon", "Borris", "Fenagh","Glynn","Kildavin","Leighlinbridge","Myshall","Nurney","Rathvilly","St. Mullins","Tullow","Cavan Town", "Ballyjamesduff", "Shercock","Ardlougher","Arva","Bailieborough","Ballinagh","Ballyconnell","Ballyhaise","Ballyheelan","Ballymacgovern","Bawnboy","Belturbet","Blacklion","Carrickaboy","Castlerahan","Cloverhill","Cootehill","Corlough","Cornafean","Crossdoney","Crosserlough","Crosskeys","Finea","Garadice","Gowna","Kilcogy","Killashandra","Kilnaleck","Kingscourt","Larah","Loughduff","Mountnugent","Mullagh","Poles","Redhills","Stradone","Swanlinbar","Virginia","Passage East", "Lismore", "Kilmacthomas","Aglish","Ardmore","Ballyduff","Cappoquin","Cheekpoint","Cork Road","Dungarvan","Dunmore East","Dunmore Road","Faithlegge","FerrybankGracedieu","Kill","Kilmacow","Portlaw","Ring","Stradbally","Tallow","Tramore","Waterford City","Woodstown","Aghada", "Aherla", "Allihies", "Ballincollig", "Ballineen", "Ballinhas sig",
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
    "Whitegate", "Wilton", "Youghal", "Annagary",
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
    "Stranorlar", "Abbottstown",
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
    "Windy Arbour", "Abbey/knockmoy",
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
    "Woodlawn","Ardfert",
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
    "Waterville", "Allen", "Allenwood", "Athgarvan", "Athy", "Ballitore",
    "Ballymore Eustace", "Ballysax", "Ballyshannon", "Brannockstown", "Broadford",
    "Brownstown", "Calverstown", "Caragh", "Carbury", "Castledermot",
    "Celbridge", "Clane", "Coill Dubh", "Curragh", "Derrinturn",
    "Donadea", "Eadestown", "Enfield", "Johnstown", "Johnstownbridge",
    "Kilcock", "Kilcullen", "Kildangan", "Kildare", "Kilkea",
    "Kill", "Kilmeage", "Kilteel", "Leixlip", "Maynooth",
    "Milltown", "Monasterevin", "Moone", "Moyvalley", "Naas",
    "Newbridge", "Nurney", "Pollardstown", "Prosperous", "Rathangan",
    "Robertstown", "Sallins", "Straffan", "Suncroft", "Timolin",
    "Two Mile House","Ballyhale", "Ballyragget", "Bennettsbridge", "Callan", "Castlecomer",
  "Cuffesgrange", "Dunmore", "Freshford", "Glenmore", "Goresbridge",
  "Gowran", "Graiguenamanagh", "Inistioge", "Johnstown", "Kells",
  "Kilkenny", "Kilmacow", "Kilmoganny", "Mooncoin", "Mullinavat",
  "Paulstown", "Piltown", "Slieverue", "Stoneyford", "Thomastown",
  "Tullogher", "Urlingford","Abbeylek", "Bairlybrittas", "Ballyfin", "Ballylynn", "Ballyrcan", "Borris-in-Ossory", "Castletown", "Clonaslee", "Crettyard", "Cullahill", "Durrow", "Emo", "Errill", "Killenard", "Mountmellick", "Mountrath", "Portarlington", "Portloaise", "Rathdowney", "Shanahoe", "Stradbally", "Timahoe", "Vicarstown","Ballinamore", "Carrick-on-Shannon", "Carrigallen", "Cloone", "Dromahair", "Dromod", "Drumshanbo", "Drumsna", "Fenagh", "Glenfarne", "Gorvagh", "Keshoarrigan", "Leitrim Village", "Manorhamilton", "Mohill", "Newtowngore", "Tullaghan","Limerick", "Abbeyfeale", "Adare", "Annacotty", "Askeaton", "Athlacca", "Ballinacurra", "Ballingarry", "Ballyneety", "Ballysheedy", "Ballysimon", "Broadford", "Bruff", "Caherconlish", "Caherdavin", "Cappamore", "Castleconnell", "Castletroy", "City Centre", "Clareview", "Clarina", "Corbally", "Crecora", "Croagh", "Croom", "Doon", "Dooradoyle", "Dromcollogher", "Dromore", "Droombanna", "Dublin Road", "Ennis Road", "Fedamore", "Foynes", "Galbally", "Garryowen", "Glin", "Hospital", "Janesboro", "Kilbane", "Kilcorcoran", "Kildimo", "Kimallock", "Lisnagry", "Monaleen", "Moyross", "Mungret", "Murroe", "Newcastle West", "North Circular Rd", "Old Singland Rd", "Oola", "Pallasgreen", "Pallaskenny", "Patrickswell", "Pennywell", "Raheen", "Rathbane", "Rathkeale", "Rhebogue", "Shanagolden", "South Circular Rd", "Thomond Gate","Longford", "Dring", "Lanesboro", "Newtowncashel", "Drumlish", "Lanesborough", "Newtownforbes", "Edgeworthstown", "Legan", "Ratharney", "Granard", "Rooskey", "Keenagh", "Moyne", "Termonbarry","Annagassan", "Castebellingham", "Dromiskin", "Hackballscross", "Omeath", "Ardee", "Clogherhead", "Dunany", "Knockbridge", "Ravensdale", "Tinure", "Baltray", "Collon", "Dundalk", "Louth", "Stamullen", "Togher", "Blackrock", "Cooley", "Dunleer", "Mansfieldstown", "Tallanstown", "Tullyallen", "Carlingford", "Drogheda", "Grangebellew", "Monasterboice", "Termonfeckin",  "Achill", "Balla", "Ballina", "Ballinadine", "Ballinrobe",
  "Ballintober", "Ballyhaunis", "Bangor Erris", "Belmullet", "Castlebar",
  "Charlestown", "Claremorris", "Clonbur", "Cong", "Cross",
  "Crossmolina", "Foxford", "Hollymount", "Irishtown", "Islands",
  "Kilkelly", "Killala", "Kilmaine", "Kiltimagh", "Knock",
  "Lacken", "Leenane", "Louisburgh", "Mulranny", "Newport",
  "Partry", "Shrule", "Swinford", "The Neale", "Tourmakeady",
  "Westport", "Ardcath", "Ashbourne", "Athboy", "Athlumley", "Ballinabrackey",
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
  "Trim","Ballinode", "Ballybay", "Carrickmacross", "Castleblayney", "Clones",
  "Clontibret", "Emyvale", "Monaghan", "Scottstown", "Smithborough","Ballinagar", "Ballycumber", "Banagher", "Birr", "Clara", "Cloghan",
  "Clonbullogue", "Daingean", "Edenderry", "Ferbane", "Geashill", 
  "Horseleap", "Kilcormac", "Killeigh", "Kinnitty", "Moneygall", 
  "Rhode", "Shannonbridge", "Shinrone", "Tullamore","Arigna", "Athelague", "Athlone West", "Ballagh", "Ballaghaderreen",
  "Ballinagare", "Ballinameen", "Ballinlough", "Ballintubber", "Ballydangan",
  "Ballyforan", "Ballygar", "Ballymoe", "Boyle", "Brideswell",
  "Castlecoote", "Castleplunkett", "Castlerea", "Cloonfad", "Cootehall",
  "Corrigeenroe", "Creggs", "Croghan", "Curraghboy", "Derrane",
  "Donamon", "Dysart", "Elphin", "Four Mile House", "Frenchpark",
  "Fuerty", "Gallowstown", "Garranlahan", "Keadue", "Kilglass",
  "Kilmore", "Kilrooskey", "Kilteevan", "Kiltoom", "Knockcroghery",
  "Knockvicar", "Lanesboro", "Lanesborough", "Lecarrow", "Lisacul",
  "Loughlynn", "Mount Talbot", "Rooskey", "Roscommon", "Scramoge",
  "Strokestown", "Tarmonbarry", "Tibohine", "Tulsk","Achonry", "Aclare", "Ballinacarrow", "Ballinafad", "Ballinode", "Ballintogher", "Ballisodare", 
       "Ballygawley", "Ballymote", "Ballyrush", "Beltra", "Bunduff", "Buntra", "Calry", "Carney", 
       "Carrowmore", "Castlebaldwin", "Cliffoney", "Collooney", "Coolaney", "Culfadda", "Curry", 
       "Doocastle", "Dromore West", "Drumcliff", "Drumfin", "Dunally", "Easkey", "East Sligo", 
       "Enniscrone", "Grange", "Gurteen", "Kilglass", "Knocknahur", "Lissadell", "Maugheraboy", 
       "Monasteraden", "Mullaghmore", "North Sligo", "Riverstown", "Rosscarbery", "Rosses Point", 
       "Sligo Town", "South Sligo", "Strandhill", "Templeboy", "Tonaphubble", "Tourlestrane", 
       "Tubbercurry", "West Sligo","Ballina", "Ballycommon", "Ballymackey", "Ballyporeen", "Bansha", "Birdhill", "Borrisokane", 
           "Cahir", "Cappagh White", "Carrick-on-Suir", "Carrigahorig", "Cashel", "Clonmel", "Cloughjordan", 
           "Coolbawn", "Dolla", "Dromineer", "Dundrum", "Emly", "Fethard", "Garrykennedy", "Golden", 
           "Kilcommon", "Killenaule", "Lattin", "Mullinahone", "Nenagh", "Newcastle", "Newport", "Newtown", 
           "Oola", "Portroe", "Puckane", "Roscrea", "Silvermines", "Templemore", "Terryglass", "Thurles", 
           "Tipperary Town", "Toomevara","Aglish", "Ardmore", "Ballyduff", "Cappoquin", "Cheekpoint", "Cork Road", "Dungarvan", 
           "Dunmore East", "Dunmore Road", "Faithlegg", "Ferrybank", "Gracedieu", "Kill", "Kilmacow", 
           "Kilmacthomas", "Lismore", "Passage East", "Portlaw", "Ring", "Stradbally", "Tallow", "Tramore", 
           "Waterford City", "Woodstown","Ardmonney", "Athlone East", "Ballinagore", "Ballinahown", "Ballinalack", "Ballykeeran", 
           "Ballymahon", "Ballymore", "Ballynacarrigy", "Ballynafid", "Bracklin", "Castlepollard", 
           "Castletown", "Clonard", "Clonmellon", "Collinstown", "Coole", "Crookedwood", "Delvin", 
           "Drumraney", "Dysart", "Fore", "Geoghegan", "Glasson", "Horseleap", "Kilbeggan", "Killucan", 
           "Kinnegad", "Lismacaffrey", "Miltownpass", "Moate", "Mount Temple", "Moyvore", "Mullingar", 
           "Multyfarnham", "Raharney", "Rathconrath", "Rathowen", "Roachfortbridge", "Streamstown", 
           "Streete", "Tang", "Tyrrellspass","Annagh", "Ardamine", "Arthurstown", "Balledmond", "Ballycanew", "Ballycullane", 
         "Ballygarrett", "Ballymoney", "Blackwater", "Bree", "Bunclody", "Camolin", "Campile", 
         "Castlebridge", "Castletown", "Clogh", "Clonegal", "Clonroche", "Coolgreany", "Courtown", 
         "Craanford", "Creagh", "Curracloe", "Duncannon", "Enniscorthy", "Ferns", "Fethard", 
         "Foulksmills", "Gorey", "Hollyfort", "Inch", "Kilanerin", "Kilmore Quay", "Kilmuckridge", 
         "Kilrush", "Kiltealy", "Monaseed", "New Ross", "Oilgate", "Raheenagurran", "Rosslare", 
         "Rosslare Strand", "Taghmon", "Tara Hill", "Wellingtonbridge","Wexford","Arklow", "Ashford", "Aughavannagh", "Aughrim", "Avoca", "Baltinglass", "Blessington", 
         "Bray", "Brittas", "Brittas Bay", "Carnew", "Delgany", "Donard", "Dunlavin", "Enniskerry", 
         "Glen of Imaal", "Glendalough", "Glenealy", "Glenmalure", "Grange Con", "Greystones", 
         "Hollywood", "Kilcoole", "Kilmacanogue", "Kilpeddar", "Kilquade", "Kiltegan", 
         "Knockananna", "Lacken", "Laragh", "Newcastle", "Newtownmountkennedy", "Rathdangan", 
         "Rathnew", "Redcross", "Roundwood", "Shillelagh", "Stratford-on-Slaney", "Tinahely", 
         "Wicklow Town", "Woodenbridge"
   ];




  return (
    <div className='dashboard'>
   
  {/* Floating Toast Message */}
  {toastMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 9999,
          }}
        >
          {toastMessage}
        </div>
      )}


    <div className="container-fluid">
      <div className="row">
         {/* Header Section with Profile and Notifications */}
         <div className="col-md-12 text-end position-relative">
              <img src={img} alt="Profile" className="img-fluid dashimg mx-2" />
              <span
                className="notibg mx-2 text-center position-relative"
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ cursor: "pointer" }}
              >
                <IoMdNotifications color="black" size={20} />
                {unreadCount > 0 && (
                  <span className="badge bg-danger position-absolute top-0 end-0">
                    {unreadCount}
                  </span>
                )}
              </span>
              {/* Notifications Dropdown */}
              {showDropdown && (
                <div
                  className="dropdown-menu show p-2 position-absolute end-0 bg-white shadow-lg rounded"
                  style={{ width: "300px", maxHeight: "300px", overflowY: "auto" }}
                >
                  {notifications.length > 0 ? (
                    <>
                      <div className="d-flex justify-content-end mb-2">
                        <button
                          className="btn btn-link p-0"
                          onClick={handleMarkAllAsRead}
                          disabled={markAllDisabled}
                        >
                          Mark all as read
                        </button>
                      </div>
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-2 border-bottom"
                          style={{
                            backgroundColor:
                              notification.status === "read" ? "#f8f9fa" : "#ffffff",
                          }}
                        >
                          <p className="mb-0 small">{notification.message}</p>
                          <small className="text-muted">
                            {new Date(notification.created_at).toLocaleString()}
                          </small>
                        </div>
                      ))}
                    </>
                  ) : (
                    <div className="dropdown-item text-center">No new notifications</div>
                  )}
                </div>
              )}
            </div>

        {/* Breadcrumb */}
        <div className="col-md-12 text-start">
          <p>
            HomeLix <IoIosArrowForward /> <span className="text-dark">Buildings</span>
          </p>
        </div>

        {/* Page Title */}
        <div className="col-md-12 text-start d-flex align-items-center">
          <IoIosArrowBack size={30} />
          <div className="fs-3 mx-2 fw-bold">Buildings</div>
        </div>
      </div>
    </div>

    {/* Filters & Table Section */}
    <div className="container bg-light p-3 my-2">
      <div className="filters d-none d-md-block mb-4">
        <div className="row g-2">
          {[
            { name: 'building_type', label: 'Property Type', options: propertyTypes },
            { name: 'property_size', label: 'Property Size', options: propertySizes },
             { 
                name: 'bedrooms', 
                label: 'No of Bedrooms', 
                options: bedrooms 
              },
            { name: 'county', label: 'Property County', options: counties },
            { name: 'nearest_town', label: 'Nearest Town', options: towns }
          ].map((filter, index) => (
            <div className="col-md-2 col-6" key={index}>
                  <select 
                  name={filter.name}
                  className="form-select p-3"
                  value={filters[filter.name]}
                  onChange={handleFilterChange}
                >
                  <option value="" disabled>{filter.label}</option>
                  {filter.options.map((option, i) => {
                    const value = option.value || option;
                    const label = option.label || option;
                    return (
                      <option key={i} value={value}>
                        {label}
                      </option>
                    );
                  })}
                </select>
            </div>
          ))}
          <div className="col-md-1 col-sm-6">
            <button className="btn button12 p-3 w-100" onClick={handleSearch}>
              <FaSearch size={30} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filters Toggle */}
      <div className='row'>
        <div className="col-md-6 col-6">
          <h5 className="mb-3">All Assets</h5>
        </div>
        <div className="col-md-6 col-6 text-end d-block d-md-none">
          <button className="btn btn-sm btn-warning" onClick={() => setShowFilters(prev => !prev)}>
            <span className='fw-bold'> Filters</span> <IoFilterSharp size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="filters mb-4">
          <div className="row g-2">
            {/* Mobile filter selects */}
          </div>
        </div>
      )}

      {/* Assets Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Building Name</th>
              <th>BER Certificate</th>
              <th>Property Size</th>
              <th>Bedrooms</th>
              <th>Property Type</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((asset, index) => (
              <tr key={asset.id}>
                <td data-label="No">{index + 1}</td>
                <td data-label="Building Name">{asset.building_type}</td>
                <td data-label="BER Certificate">{asset.ber_purpose}</td>
                <td data-label="Property Size">{asset.property_size}</td>
                <td data-label="Bedrooms">{asset.bedrooms}</td>
                <td data-label="Property Type">{asset.property_type}</td>
                <td data-label="Location">{asset.county}, {asset.nearest_town}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default Buildings;
