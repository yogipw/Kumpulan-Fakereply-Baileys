/*
]======> YogiPw <======[ 
Halo bang
Cuma kumpulan fakereply. 
Monggo dipake stah
]======> Hmmm <======[ 
*/

/*
<======> Fakereply <======>
1.Product 
2.Troli 
3.Location 
4.Document 
5.Video 
6.Gclink 
7.Kontak 
8.Gif 
9.TextThumbnail 
10.VN 
<======> 
*/

//FAKEREPLY PRODUCT
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./gambar/logolungab.jpeg`) //Gambarnye
					},
					"title": "Yogi-Fakereply", //Kasih namalu 
					"description": "SELF BOT", 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": "YogiPw",
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
//FAKEREPLY TROLI
const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 1,
                            status: 1,
                            surface : 1,
                            message: 'YogiPw', //Kasih namalu
                            orderTitle: 'Bang',
                            thumbnail: fs.readFileSync('./stik/thumb.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
//FAKEREPLY LOCATION
const flokasi = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: 'Russia',
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
//FAKEREPLY DOCUMENT
const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: 'Halo bang', 
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
//FAKEREPLY VIDEO
const fvideo = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
//FAKEREPLY GROUPINVITE
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "mememteeeekkeke",
			"groupName": "P", 
            "caption": "Halo bang jagoo", 
            'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
		}
	}
}
//FAKEREPLY GIF
const fgif = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '99999', 
                 'gifPlayback': 'true', 
                 'caption': 'Halo bang',
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  } 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text":"hallo bang",
                 "title": `Hmm`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
	                  } 
                     }
//FAKEREPLY VN
const fvn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "${second}",
                 "ptt": "true"
                        }
	                  } 
                     }