// Example database of members
const members = [
    {
      regNumber: "4323",
      name: "Surv. Tajudeen Abimbola Wasiu",
      surfix: "AAQ",
      cadre: "Member",
      status: "Resident",
      company: "Beamlatworld Geospatial Data Services Limited",
      address: "2 Seni Sofowora Street, Opposite Oluwo Police Post, Oluwo, Onikolobo",
      email: "beamberleak.geospace@yahoo.com",
      phone: "nill",
      photo: "Images/PASSPORT.png"
    },
    {
      regNumber: "1306",
      name: "Surv. Abiodun Liadi Olufemi",
      surfix: "KW",
      cadre: "Fellow",
      status: "Resident",
      company: "Femmap Consulting Services",
      address: "39, NUD Road, Isabo Abeokuta",
      email: "olufemi1962@gmail.com",
      phone: "nill",
      photo: "Images/chairman2.png"
    },
    {
      regNumber: "2047",
      name: "Surv. Biokanni Oluomotayo O.",
      surfix: "QS",
      cadre: "Member",
      status: "Resident",
      company: "Biolom Surveys",
      address: "6, Ereko street, Ijebu Ode, Ogun State",
      email: "olumomotayofm@yahoo.com",
      phone: "nill",
      photo: "Images/Secretary.jpg"
    },
    {
      regNumber: "1519",
      name: "Surv. Makanjuola Monsuru Kolawole",
      surfix: "JX",
      cadre: "Fellow",
      status: "Resident",
      company: "Makaay Survey and Geo-informatics Consulting",
      address: "1, King of Glory Street, Progress Estate, Off Obansanjo Farm Road, Sango Ota",
      email: "makaay2dd@gmail.com",
      phone: "nill",
      photo: "Images/Vice Chair.jpg"
    },
    {
      regNumber: "2723",
      name: "Surv. Taiwo Taiye Gbadebo",
      surfix: "TL",
      cadre: "Member",
      status: "Resident",
      company: "Geoplanet Global Resources",
      address: "51, Obafemi Awolowo Way, Isale Igbehin, Abeokuta, Ogun State",
      email: "geotaiye@gmail.com",
      phone: "nill",
      photo: "Images/Auditor (2).jpg"
    },
    {
      regNumber: "1068",
      name: "Surv. Adebowale Ademola ",
      surfix: "NC",
      cadre: "Fellow",
      status: "Resident",
      company: "Plumbline Limited",
      address: "Rd 23, House 44,Federal Housing Estate, Elega, Abeokuta, Ogun State ",
      email: "plumblinelimited@gmail.com",
      phone: "nill",
      photo: "Images/adebowale.jpg"
    },
    {
      regNumber: "1270",
      name: "Surv. Adekoya Kayode Samuel ",
      surfix: "EH",
      cadre: "Fellow",
      status: "Resident",
      company: "Automated Datum Consult Limited",
      address: "3, Automated Datum Closed, off Alh. Bidemi Nasiru Sonuga Street, Imure Sagamu",
      email: "ksadekoya@gmail.com",
      phone: "nill",
      photo: "Images/adekoya.jpg"
    },
    {
      regNumber: "1856",
      name: "Surv. Adeoye Gbadebo Julius",
      surfix: "NU",
      cadre: "Fellow",
      status: "Resident",
      company: "Smartedge Geomatics Limited",
      address: "Dominion Plaza, Mango Road, Adigbe, Abeokuta, Ogun State",
      email: "deboadeoye2002@yahoo.co.uk",
      phone: "nill",
      photo: "Images/adeoye.jpg"
    },
    {
      regNumber: "1033",
      name: "Surv. Ogunlami Olufunmilade Babatunde",
      surfix: "CB",
      cadre: "Fellow",
      status: "Resident",
      company: "Babatunde Ogunlami and CO.",
      address: "Ebenezer Lodge Opp. Government Technical College, Idi Aba, Abeokuta.",
      email: "tundeogunlami@yahoo.com",
      phone: "nill",
      photo: "Images/ogunlami.jpg"
    },
    {
      regNumber: "2981",
      name: "Surv. Adeoti Adekunle Kazeem",
      surfix: "UJ",
      cadre: "Member",
      status: "Resident",
      company: "Geokaad Integrated Services Limited",
      address: "22, Adigbe Road, Opp Police Post, Onikolobo, Abeokuta Ogun State",
      email: "geokaad.1@gmail.com",
      phone: "nill",
      photo: "Images/Asst Secretary.jpg"
    },
    {
      regNumber: "727",
      name: "Surv. Lemboye Akeem Adewale",
      surfix: "NR",
      cadre: "Member",
      status: "Resident",
      company: "Geoland Consult Limited",
      address: "3, Tagoe Street, Oke Ilewo, Abeokuta, Ogun State",
      email: "geolandconsult@yahoo.com",
      phone: "nill",
      photo: "Images/PASSPORT.png"
    }
  ];
  
  // Extract the search query from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query')?.toLowerCase(); // Convert query to lowercase for case-insensitive matching
  
  const memberCard = document.getElementById('member-card');
  
  // Perform the search
  if (query) {
    const member = members.find(m =>
        m.regNumber.toLowerCase() === query || // Check registration number
        m.name.toLowerCase().includes(query)  // Check if name contains the query
      );
  
    if (member) {
      // Populate the member card with data
      document.getElementById('member-photo').src = member.photo;
      document.getElementById('member-name').textContent = member.name;
      document.getElementById('member-reg').textContent = member.regNumber;
      document.getElementById('member-surfix').textContent = member.surfix;
      document.getElementById('member-cadre').textContent = member.cadre;
      document.getElementById('member-status').textContent = member.status;
      document.getElementById('member-company').textContent = member.company;
      document.getElementById('member-address').textContent = member.address;
      document.getElementById('member-email').textContent = member.email;
      document.getElementById('member-phone').textContent = member.phone;
  
      memberCard.style.display = 'block'; // Show the member card
    } else {
      document.getElementById('results-container').innerHTML = `<h2>No member found with name or registration number "${query}".</h2>`;
    }
  } else {
    document.getElementById('results-container').innerHTML = `<h2>No search query provided!</h2>`;
  }
  