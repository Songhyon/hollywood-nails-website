/* FI / EN language switch. Finnish is the page source; this swaps text to English.
   Remembers the choice per visitor (localStorage, optional). ?lang=en also works. */
(function () {
  var EN = {
    "Töitä": "Work", "Palvelut": "Services", "Tekijät": "Team", "Hinnasto": "Prices", "Varaa aika": "Book",
    "Sävy": "Shade", "Suklaa": "Chocolate",
    "#00 Suklaa & marmori": "#00 Chocolate & marble", "· manteli": "· almond",
    "Kynsistudio Hämeentiellä, Sörnäisissä. Rakenne- ja geelikynnet, cat eye, nail art, jalkahoidot, ripset ja sokerointi.":
      "Nail studio on Hämeentie in Sörnäinen, Helsinki. Acrylic and gel nails, cat eye, nail art, pedicures, lashes and sugaring.",
    "Töitämme · 11 settiä": "Our work · 11 sets",
    "Kaikki tässä on meidän käsialaamme.": "Everything here is our own work.",
    "Jokainen kuva on studiomme omaa työtä. Selaa, ja sivu vaihtaa sävyä kynsien mukaan.":
      "Every photo is our studio's own work. Scroll, and the page changes colour with the nails.",
    "manteli · strassit": "almond · rhinestones",
    "#07 Ranskalainen": "#07 French", "klassinen · valkoiset kärjet": "classic · white tips",
    "#13 Pinkki ombre": "#13 Pink ombre", "pinkistä valkoiseen": "pink to white",
    "#01 Marja": "#01 Berry", "ombre · cat eye · manteli": "ombre · cat eye · almond",
    "#02 Liila": "#02 Lilac", "cat eye · valkoiset viivat": "cat eye · white lines",
    "musta matta · cat eye": "matte black · cat eye",
    "#11 Burgundi": "#11 Burgundy", "viisto ranskalainen": "diagonal French",
    "#03 Punainen": "#03 Red", "klassinen · kiiltävä": "classic · glossy",
    "#09 Vadelma": "#09 Raspberry", "pyöreä": "round",
    "#16 Savu": "#16 Smoke", "musta–punainen · glitter": "black–red · glitter",
    "#14 Pronssi": "#14 Bronze", "cat eye · musta glitter": "cat eye · black glitter",
    "Lisää töitä Instagramissa:": "More of our work on Instagram:",
    "Mitä teemme.": "What we do.", "Kynnet": "Nails",
    "Manikyyri, geelilakkaus ja akryyliset rakennekynnet. Ranskalaiset, ombret, cat eye ja kuviot.":
      "Manicure, gel polish and acrylic nails. French, ombre, cat eye and designs.",
    "Jalat": "Feet", "Jalkahoito ja varpaiden geelilakkaus.": "Pedicure and gel polish for toes.",
    "Ripset & kulmat": "Lashes & brows",
    "Ripsienpidennykset, ripsitaivutus sekä ripsien ja kulmien kestovärjäys.":
      "Lash extensions, lash lift, and lash and brow tinting.",
    "Sokerointi": "Sugaring",
    "Hellävarainen karvanpoisto sokeritahnalla, ylähuulesta sääriin ja reisiin.":
      "Gentle hair removal with sugar paste, from upper lip to legs.",
    "Keneltä varaat.": "Who to book.", "Omistaja.": "Owner.",
    "Kaikki palvelut: kynnet, jalkahoidot, ripset ja sokerointi.": "All services: nails, pedicures, lashes and sugaring.",
    "Varaa soittamalla": "Book by phone",
    "Kynnet, jalkahoidot ja ripset. Teresa palvelee englanniksi": "Nails, pedicures and lashes. Teresa speaks English",
    "Teresan hinnat ja vapaat ajat näet netissä, tai soita / WhatsApp": "See Teresa's prices and free times online, or call / WhatsApp",
    "Vuodesta 2006": "Since 2006", "· Hämeentie 17": "· Hämeentie 17", "Meistä": "About us", "Vuodesta 2006.": "Since 2006.",
    "Hollywood Nails on ollut Hämeentiellä Sörnäisissä jo vuodesta 2006, koko ajan samassa paikassa. Olemme ylpeitä siitä, että asiakkaat palaavat meille vuodesta toiseen.":
      "Hollywood Nails has been on Hämeentie in Sörnäinen since 2006, always in the same place. We're proud that our customers keep coming back year after year.",
    "Teemme rakenne- ja geelikynnet, jalkahoidot, ripset ja sokeroinnin huolellisesti. Palvelemme suomeksi, vietnamiksi ja englanniksi.":
      "We do acrylic and gel nails, pedicures, lashes and sugaring with care. We serve you in Finnish, Vietnamese and English.",
    "· yli 500 arvostelua Timmassa": "· 500+ reviews on Timma", "5,0 ★": "5.0 ★",
    "Varaa Teresalle": "Book with Teresa",
    "(English only)": "(no Finnish)",
    "· Sandy · puhelinvaraus": "· Sandy · phone booking",
    "Mitä se maksaa.": "What it costs.",
    "Sandyn hinnat, kun varaat soittamalla. Teresan hinnat näet hänen nettiajanvarauksestaan.":
      "Sandy's prices when you book by phone. Teresa's prices are shown in her online booking.",
    "Rakennekynnet": "Acrylic nails", "Uudet akryylikynnet": "New acrylic set", "Ranskalainen": "French",
    "Huolto": "Refill", "1 jatke huollossa": "1 extension in a refill", "1 kynnen korjaus": "1 nail repair",
    "Rakennekynsien poisto": "Acrylic removal", "1 väri": "1 colour", "2 väriä": "2 colours",
    "Muut koristeet": "Other decorations", "alk. 2,50 €": "from 2,50 €",
    "Manikyyri & geelilakkaus": "Manicure & gel polish",
    "Manikyyri (muotoilu, kynsinauhojen käsittely)": "Manicure (shaping, cuticle care)",
    "Geelilakkaus": "Gel polish", "Geelilakkauksen huolto": "Gel polish refill",
    "Jalkahoito": "Pedicure", "Jalkahoito (liuotus, kovettumat, kynsinauhat, hieronta)": "Pedicure (soak, calluses, cuticles, massage)",
    "Jalkahoito ja geelilakkaus": "Pedicure with gel polish", "Varpaiden geelilakkaus": "Gel polish on toes",
    "Varpaiden geelilakkauksen huolto": "Toe gel polish refill",
    "Ripsienpidennykset": "Lash extensions", "Uudet klassiset": "New classic set", "Uudet volyymit": "New volume set",
    "Hybridiripset": "Hybrid lashes", "Ripsitaivutus (sis. värjäys)": "Lash lift (incl. tint)",
    "Ripsienpidennysten poisto": "Lash extension removal",
    "Kestovärjäys": "Tinting", "Ripset": "Lashes", "Kulmat": "Brows", "Ripset ja kulmat": "Lashes and brows",
    "Ylähuuli": "Upper lip", "Kainalot": "Underarms", "Koko kasvot": "Full face", "Käsivarret": "Arms",
    "Sääret": "Lower legs", "Reidet": "Thighs", "Sääret ja reidet": "Full legs",
    "Varaus": "Booking", "· puhelimella · call to book": "· by phone",
    "Soita, niin sovitaan aika.": "Call us to book a time.",
    "Osoite": "Address", "Sörnäinen, lyhyt kävely metroasemalta.": "Sörnäinen, a short walk from the metro.",
    "Näytä kartalla": "Show on map", "Aukioloajat": "Opening hours",
    "Ma–pe 10–18": "Mon–Fri 10–18", "La 10–14": "Sat 10–14", "Su suljettu": "Sun closed", "Muut": "Other",
    "Hollywood Nails (toiminimi) · Hämeentie 17 A, 00500 Helsinki · Y-tunnus 2030900-5 · ALV-nro FI20309005":
      "Hollywood Nails (sole trader) · Hämeentie 17 A, 00500 Helsinki · Business ID 2030900-5 · VAT FI20309005",
    "Sivusto ei käytä evästeitä eikä kerää henkilötietoja. No cookies, no tracking.":
      "This site uses no cookies and collects no personal data.",
    /* swatch / set names, aria + alt texts */
    "Pinkki ombre": "Pink ombre", "Marja": "Berry", "Liila": "Lilac", "Burgundi": "Burgundy",
    "Punainen": "Red", "Vadelma": "Raspberry", "Savu": "Smoke", "Pronssi": "Bronze",
    "Sivun sisältö": "Page sections", "Hollywood Nails, alkuun": "Hollywood Nails, back to top",
    "Hyppää sävyyn": "Jump to a shade", "Töitämme": "Our work",
    "Suklaanruskeat ja marmorikuvioidut mantelikynnet, Hollywood Nailsin työtä": "Chocolate brown and marble almond nails by Hollywood Nails",
    "Nude-mantelikynnet strasseilla": "Nude almond nails with rhinestones",
    "Klassinen ranskalainen manikyyri": "Classic French manicure",
    "Pinkki–valkoinen ombre": "Pink–white ombre",
    "Marjanpunainen ombre cat eye -kynnet": "Berry red ombre cat eye nails",
    "Liila cat eye valkoisilla viivoilla": "Lilac cat eye with white lines",
    "Musta matta ja magenta cat eye": "Matte black and magenta cat eye",
    "Burgundi viisto ranskalainen": "Burgundy diagonal French",
    "Klassinen punainen": "Classic red",
    "Vadelmanpunaiset pyöreät kynnet": "Raspberry red round nails",
    "Musta–punainen savu ja glitter": "Black–red smoke and glitter",
    "Pronssi cat eye ja musta glitter": "Bronze cat eye and black glitter",
    "Sandy, Hollywood Nailsin omistaja": "Sandy, owner of Hollywood Nails",
    "Teresa, kynsi- ja ripsiteknikko": "Teresa, nail and lash technician"
  };
  var META = {
    fi: { title: document.title, desc: (document.querySelector('meta[name="description"]') || {}).content },
    en: { title: "Hollywood Nails · Nail studio in Sörnäinen, Helsinki",
          desc: "Acrylic and gel nails, cat eye, nail art, pedicures, lashes and sugaring on Hämeentie, Sörnäinen, Helsinki. Call 040 411 2391 to book." }
  };
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  var texts = [], attrs = [], sets = [];
  var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (n) {
      var p = n.parentElement;
      if (!p || p.tagName === 'SCRIPT' || p.tagName === 'STYLE' || p.closest('#langBtn')) return 2;
      return EN[norm(n.textContent)] ? 1 : 2;
    }
  });
  var n; while ((n = w.nextNode())) texts.push([n, n.textContent]);
  function grabAttrs() {
    attrs = [];
    document.querySelectorAll('[alt],[aria-label]').forEach(function (e) {
      ['alt', 'aria-label'].forEach(function (a) {
        var v = e.getAttribute(a);
        if (v && (EN[v] || e._fi && e._fi[a])) { e._fi = e._fi || {}; if (!e._fi[a]) e._fi[a] = v; attrs.push([e, a]); }
      });
    });
  }
  document.querySelectorAll('[data-name]').forEach(function (e) { sets.push([e, e.dataset.name]); });
  var btn = document.getElementById('langBtn');
  function apply(lang) {
    grabAttrs();
    texts.forEach(function (t) {
      var fi = t[1], en = EN[norm(fi)];
      t[0].textContent = lang === 'en' ? fi.replace(norm(fi), en) : fi;
    });
    attrs.forEach(function (t) {
      var fi = t[0]._fi[t[1]];
      t[0].setAttribute(t[1], lang === 'en' ? (EN[fi] || fi) : fi);
    });
    sets.forEach(function (s) { s[0].dataset.name = lang === 'en' ? (EN[s[1]] || s[1]) : s[1]; });
    var chip = document.getElementById('chipName');
    if (chip) { var fiName = chip._fi || (chip._fi = chip.textContent);
      var cur = sets.filter(function (s) { return s[1] === chip.textContent || EN[s[1]] === chip.textContent; })[0];
      if (cur) chip.textContent = cur[0].dataset.name; }
    document.documentElement.lang = lang;
    document.title = META[lang].title;
    var d = document.querySelector('meta[name="description"]'); if (d && META[lang].desc) d.content = META[lang].desc;
    if (btn) { btn.textContent = lang === 'en' ? 'FI' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Vaihda kieli suomeksi' : 'Switch to English'); }
    try { localStorage.setItem('hn-lang', lang); } catch (e) {}
    current = lang;
  }
  var current = 'fi', start = 'fi';
  try { start = localStorage.getItem('hn-lang') || 'fi'; } catch (e) {}
  if (/[?&]lang=en/.test(location.search)) start = 'en';
  if (/[?&]lang=fi/.test(location.search)) start = 'fi';
  if (start === 'en') apply('en');
  if (btn) btn.addEventListener('click', function () { apply(current === 'en' ? 'fi' : 'en'); });
})();
