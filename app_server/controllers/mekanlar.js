const anaSayfa = function (req, res) {
  res.render('anasayfa', { "baslik": "Ana Sayfa","sayfaBaslik": {
    "siteAd":"MekanBul",
    "slogan":"Civardaki Mekanları Keşfet!"
  },
  "mekanlar": [
    {
      "ad":"Starbucks",
      "adres":"Centrum Garden AVM",
      "puan":"4",
      "imkanlar": ["Dünya Kahveleri","Kekler","Pastalar"],
      "mesafe":"10km"
    }
    ,
    {
      "ad":"Gloria Jeans",
      "adres":"SDÜ Doğu Kampüsü",
      "puan":"3",
      "imkanlar": ["Kahve","Çay","Pasta"],
      "mesafe":"5km"
    }
  ]
 });
}

const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi', {
     "baslik": "Mekan bilgisi",
      "mekanBaslik": "Starbucks",
      "mekanDetay": {
        "ad":"Starbucks",
        "adres":"Centrum Garden AVM",
        "puan":"4",
        "imkanlar": ["Dünya Kahveleri","Kekler","Pastalar"],
        "koordinatlar": {
           "enlem":"37.83226584629666",
           "boylam":"30.524732239878013"
        },
        "saatler": [
          {
            "gunler":"Pazartesi-Cuma",
            "acilis":"09.00",
            "kapanis":"23.00",
            "kapali": false
          },
          {
            "gunler":"Cumartesi-Pazar",
            "acilis":"10.00",
            "kapanis":"22.00",
            "kapali": false
          }
        ],
        "yorumlar": [
          {
            "yorumYapan":"Eren Şen",
            "puan":"4",
            "tarih":"20 Ekim 2022",
            "yorumMetni":"Kahveler enfes!"

          }
        ]
      }
    });
}

const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { 'title': 'Yorum ekle' });
};


module.exports = {

  anaSayfa,
  mekanBilgisi,
  yorumEkle


}