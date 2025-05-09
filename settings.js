const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.owner = '628892987132'
global.versi = version
global.namaOwner = "Danzhosting"
global.packname = 'Bot WhatsApp'
global.botname = 'Simple Bot Danzpedia'
global.botname2 = 'Simple Bot'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/62882022066260"
global.linkGrup = "https://chat.whatsapp.com/BB9sdsKb4QHGhOsrPBAt7u"

//Setting Link Hosting
global.reseller = "https://chat.whatsapp.com/INKhHo88593K1UFSYUTi1l"
global.admin = "https://chat.whatsapp.com/IAFnOO8mtmPIljO7MpQf2g"
global.adminv2 = 'https://chat.whatsapp.com/CPh0UQeF24LKbAFe5JymVZ'
global.adminv3 = 'https://chat.whatsapp.com/JF9HS5iFQPhIIHSQmofqhc'
global.murbug = "gada"
global.updatesc = 'https://chat.whatsapp.com/LcQmrKHWMG7JNHs3feRpUZ'

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VayrD8xI1rcrL9sc4s03/142"
global.linktesti = "https://whatsapp.com/channel/0029VayrD8xI1rcrL9sc4s03"
global.idchtesti = "120363373941283254@newsletter"
global.idSaluran = "120363373941283254@newsletter"
global.namaSaluran = "Danzhosting [ Marketplace ]"

global.merchantIdOrderKuota = "OK998125"
global.apiOrderKuota = "26868241731539985998125OKCTF21D7ECF5D4A78D4CFA4B8FDE4D6EE3E"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214358183232934610303UMI51440014ID.CO.QRIS.WWW0215ID20232514253770303UMI5204511153033605802ID5911YOUNG STORE6005BERAU61057731162070703A0163047396"

// ambil repositori lu
global.dbnonmorbot = "https://raw.githubusercontent.com/ms-nicky/dbbot/refs/heads/main/database-vrl.json"


// Settings Api Digital Ocean
global.apiDigitalOcean = "-"

// Settings Api Orkut 
global.apiSimpelBot = "simplebotz85"


// Settings All Payment
global.dana = "089690235468"
global.ovo = "tidak tersedia"
global.gopay = "Tidak Tersedia"

// Settings Image Url
global.image = {
menu: "https://img86.pixhost.to/images/473/562802678_skyzopedia.jpg", 
imgfake: "https://img86.pixhost.to/images/473/562802678_skyzopedia.jpg",
reply: "https://img86.pixhost.to/images/473/562802678_skyzopedia.jpg", 
logo: "https://img86.pixhost.to/images/473/562802678_skyzopedia.jpg", 
dana: "https://img100.pixhost.to/images/667/540082364_skyzopedia.jpg", 
ovo: "https://img100.pixhost.to/images/667/540082774_skyzopedia.jpg", 
gopay: "https://img100.pixhost.to/images/667/540083275_skyzopedia.jpg", 
qris: false
}

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://pubblicberkah.ndutvps.com"
global.apikey = "ptla_l8l1n2U9VYaE5bDP67MH27ckNnp4LOR5xdO773kdeCD" //ptla
global.capikey = "ptlc_pAAzxbZaVxJ939XDMjXKLXst8O5o6ivrGr8pjRy3SGp" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"privatehost.us.kg": {
"zone": "790918217c4add75b7684458518c5836", 
"apitoken": "qYv4NvEN6ZcUIv4dEXihjkmQMwbP_-3Qy_zFlAHv"
}, 
"botwhatsapp.us.kg": {
"zone": "fb1ac418c5564373a56c91d962b30dca", 
"apitoken": "rfQih0XNXiq7AyEuDoLjoFfHX2mhYf_9kddAdKIo"
}, 
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}, 
"xyro.web.id": {
"zone": "46d0cd33a7966f0be5afdab04b63e695", 
"apitoken": "CygwSHXRSfZnsi1qZmyB8s4qHC12jX_RR4mTpm62"
}, 
"xyroku.my.id": {
"zone": "f6d1a73a272e6e770a232c39979d5139", 
"apitoken": "0Mae_Rtx1ixGYenzFcNG9bbPd-rWjoRwqN2tvNzo"
}, 
"xyro.me": {
"zone": "a1c08ecd2f96516f2a85250b98850e8b", 
"apitoken": "f3IBOeIjRHYSsRhzxBO7yiwl-Twn3fqjmdkLdwlf"
}, 
"cloud-shopp.biz.id": {
"zone": "365f57282cbea3a6d5a738f107df244e", 
"apitoken": "hZKxD6afDLF-wsg1qVA-qbDK_h8lBE4NtqnVZPP8"
},
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
},
"market-panel.site": {
"zone": "d06bf5450ae51612a400bab1c4450283",
"apitoken": "kmb6AkpJ6XvHMzw2m0KbYKZOycIURNYMPA7Wm0BE",
},
"admin-panel.tech": {
"zone": "305d4757160a88486d3780785c7c9887",
"apitoken": "UH-aDtxu5Mm9oU8khMd5ZVg22f7nhnSkCORBn8zP",
},
"kang-panel.tech": {
"zone": "28baf36eb9ced4be271bdb6ea3320f41",
"apitoken": "MBiKuyoS0e0zJc8LKUjSXyLmgAf1IV9u86FJmVny",
},
"web-cabul.me": {
"zone": "4b24636040f0f2d799a8a1aaea568e57",
"apitoken": "OvRX-DghNjcPF9rlKElGCLIsPvv3Nd3khuDAUZ3q",
},
"king-hosting.live": {
"zone": "2e6eb183148e0ef9add390af271a8bb2",
"apitoken": "kcnnE1sESybx-P_nLkkiKtfZFqGhRmwFg9wL0cf6",
},
"tokopanel.software": {
"zone": "cc9638d4c289130ba070484625e6aefa",
"apitoken": "bcAP5z3gHvmQTlQ59qNB9BWmf0JiGt0C99FU6SXs",
},
"pannel-private.me": {
"zone": "71ad41d3c25085bd7b8a1135632c7c63",
"apitoken": "HfGKPUu1KrOVc3q51nkoJYZFQvIpA-AFOP-t6SNZ",
},
"hitam.systems": {
"zone": "cfaba3ef0065acc82facc17f1b79d50b",
"apitoken": "4o3tZAc5jOzA00joKpLYhG_616qCJxNLGlhawMEY",
},
"panel-run-bot.engineer": {
"zone": "678298eaac2e2a0dea25f693310ec6e0",
"apitoken": "8UmNiZZqEIAqWbM7XlcZofyvhc70NMs2_gXmmkug",
},
"uchiha.tech": {
"zone": "1b09e81ec29d760ff33e476a084de6ed",
"apitoken": "nzLwv-2uzMt3Ihsd5MVV2aLJ9EoovxrVK7Y4b2To",
},
"buyer-vps.site": {
"zone": "354e1c784bed5a8d93f458ec1ff86f35",
"apitoken": "rzOLIO1c-Me1X0owStLFUZ0ggfs_cxHDab2A7krF",
},
"arzanoffc.online": {
"zone": "43ca801f5c6a73a77da5f0243f4f8c1d",
"apitoken": "RZQft_gJGOJDskx6L6SxREJCvOKw0hclLjHUCNLS",
},
"hexaneuro.biz.id": {
"zone": "16273869fda58585fc435e4582a5ff56",
"apitoken": "y4wV0um-bvrVTvFVPrNrGEi590bPowvosRyNiGMn"
 },   
"mypanel.tech": {
"zone": "9c5460deca7c84273b46f2f047783636",
"apitoken": "0IBfmlUlCkYqoFPWYaqCmqI3_vWxkrFNbxrQjzX2"
}, 
"kedai-panel.me": {
"zone": "3ab91ea96368234719c9de7d260742e2",
"apitoken": "O22A19W7trZZ52bAXtF77aUVdGDdAk8PjQqwM7qv"
}, 
"control-pannel.site": {
"zone": "20c517d7dcc25d9cf516f5c4cf2d21ba",
"apitoken": "mAA84Qs4nJvLTaup0HTGrpVbgaSk-4vfUrcdHgCH"
}, 
"mypanelstore.xyz": {
"zone": "72f7362d7686d9158a8e389851fc379c", 
"apitoken": "V2y-I2o1s5E1tdCPpUSnT4FokV6WuxEUC2FqqVIX"
},
"panel-pvrt.my.id": {
"zone": "ee4060e03b223e8e0724908575b70c3b", 
"apitoken": "6HxTQ0VJZVcAJISlKsezttCNzpAAf7ubPy5EDOGR"
},
"ekiofficial.my.id": {
"zone": "df33365b44b11cbe51570a7ed981cae5", 
"apitoken": "rMJGbyeuwFVZJifsB3rIX-nRpIOOa4Wkrhu7V5Jo"
},
"ekiofficial.web.id": {
"zone": "e1b037c00268cae95076b58f7f78b1f6", 
"apitoken": "EJO7mHrBORH9XoQrnUvBqotMYxNm5bjB5UO2PeQE"
},
"eki-panelpvrt.my.id": {
"zone": "6b4cb792b77b6118e91d8604253ca572", 
"apitoken": "DsftwwFCAKrbSo-9r9hxqcscMw8Xvx8gQzTXMSz4"
},
"panelvip.biz.id": {
"zone": "70969a584446a244efe1461f5bb41ff5", 
"apitoken": "pzj2mcvQL1KUQCjj5XjSVPjLqKGCy8U7PtVFuOXr"
},
"shop-panel.biz.id": {
"zone": "62e0683ee057e0e2a39eaf73d18e6eb1", 
"apitoken": "opUN9xsI7mlS3CP8cJA9RbO5SB4gUpcyof9Yaeb7"
},
"centzzcloud.my.id": {
"zone": "749f1d7d69e9329195761b570010c00f", 
"apitoken": "9Su8A1EDXnt9-yGDb7YSGlY_ogJAw2vR9IDtpFrQ"
},
"pakvinsen.me": {
"zone": "3b8cb89265c0e026abaf3bc50ed57e76", 
"apitoken": "ttt0IHK50UKP2HltWUauuyDzkVPqnOEkx7M-5CFs"
},
"satoruuhost.tech": {
"zone": "086b2b4e1c65c22bfd8d5d86cbfa947f", 
"apitoken": "62XZSKEzz4mKM_1wAHK7-_JaA14VrQJDoWI2GeHT"
},
"hostsatoruu.biz.id": {
"zone": "30ea1aac05ca26dda61540e172f52ff4", 
"apitoken": "eZp1wNcc0Mj-btUQQ1cDIek2NZ6u1YW1Bxc2SB3z"
},
"mafiapnel.my.id": {
"zone": "34e28e0546feabb87c023f456ef033bf", 
"apitoken": "bHNaEBwaVSdNklVFzPSkSegxOd9OtKzWtY7P9Zwt"
},
"rexxaoffc.my.id": {
"zone": "f972ed410a833b28c8b5f166d6620d6a", 
"apitoken": "liq8sBPHwvbU2jWQYTCjo4BXafVPeopkAU4avUlP"
}, 
"rexxa.my.id": {
"zone": "b0d37cb6e9d6a7c2b0a82395cbdfd8b9", 
"apitoken": "fR2LO4Hz2y0U8dP3IHRwMHnWi_xKKa5RCZjWaXv3"
},
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
},
"gacorr.biz.id": {
"zone": "cff22ce1965394f1992c8dba4c3db539", 
"apitoken": "v9kYfj5g2lcacvBaJHA_HRgNqBi9UlsVy0cm_EhT"
},
"cafee.my.id": {
"zone": "0d7044fc3e0d66189724952fa3b850ce", 
"apitoken": "wAOEzAfvb-L3vKYE2Xg8svJpHfNS_u2noWSReSzJ"
}, 
"store-panell.my.id": {
"zone": "0189ecfadb9cf2c4a311c0a3ec8f0d5c", 
"apitoken": "eVI-BXIXNEQtBqLpdvuitAR5nXC2bLj6jw365JPZ"
}, 
"vipstoree.my.id": {
"zone": "72fd03404485ddba1c753fc0bf47f0b3", 
"apitoken": "J2_c07ypFEaen92RMS7irszQSrgZ_VFMfgNgzmp0"
}, 
"bokepp.biz.id": {
"zone": "46b8cab5631c6c23c5ec4a7ef1f10803", 
"apitoken": "A8df8PxnKIcxLUTE7XS4TRZBoLslvt4XjJb1XEyi"
}, 
"market-store.my.id": {
"zone": "4ae70eaa56096fdb94ef9050dde52220", 
"apitoken": "_T1fxXQLd6864mYGwgHmciZMiLURKNkyomaPv0sy"
},
"shop-panel.biz.id": {
"zone": "62e0683ee057e0e2a39eaf73d18e6eb1",
"apitoken": "opUN9xsI7mlS3CP8cJA9RbO5SB4gUpcyof9Yaeb7"
},
"pterodaytl.my.id": {
"zone": "828ef14600aaaa0b1ea881dd0e7972b2",
"apitoken": "75HrVBzSVObD611RkuNS1ZKsL5A_b8kuiCs26-f9"
},
"wannhosting.biz.id": {
"zone": "4e6fe33fb08c27d97389cad0246bfd9b",
"apitoken": "75HrVBzSVObD611RkuNS1ZKsL5A_b8kuiCs26-f9"
},   
"wannhosting.my.id": {
"zone": "0b36d11edd793b3f702e0591f0424339",
"apitoken": "OsSjhDZLdHImYTX8fdeiP1wocKwVnoPw5EiI85IF"
}, 
"xnxxx.tech": {
"zone": "639f9cde20c22b1d2f33b2fee54f8f59",
"apitoken": "MtWI3a9-9Za-fGKmwl0uNznqM94eljKgobkF36h1"
},
"pterodactyl-panel.web.id": {
"zone": "d69feb7345d9e4dd5cfd7cce29e7d5b0",
"apitoken": "32zZwadzwc7qB4mzuDBJkk1xFyoQ2Grr27mAfJcB"
},
"panelprivate.web.id": {
"zone": "61bcd80ff1ec9c3a5812f74d6ec24535",
"apitoken": "VnjVDtbb-fSTFIn-3Hckd_E_eseqyHH7u1TTAHMN"
},
"digitalserver.biz.id": {
"zone": "24dec03ff55093ab3a2d1dc926c372df", 
"apitoken": "EnmTeuJUzFF_xmnDnTAlwdxajP5ogeJKH9wy-SiR"
}, 
"serverpanell.biz.id": {
"zone": "aac5555d4f60fcf48c9e901b938fffc0", 
"apitoken": "qd8OolI2_GIu3HLsTZvdk242ggDdD3_IGXMMSQ7P"
}, 
"privatehost.us.kg": {
"zone": "790918217c4add75b7684458518c5836", 
"apitoken": "qYv4NvEN6ZcUIv4dEXihjkmQMwbP_-3Qy_zFlAHv"
}, 
"botwhatsapp.us.kg": {
"zone": "fb1ac418c5564373a56c91d962b30dca", 
"apitoken": "rfQih0XNXiq7AyEuDoLjoFfHX2mhYf_9kddAdKIo"
}, 
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
},
  "yilzizpedia.us.kg": {
    zone: "9e4e70b438a65c1d3e6d0e48b82d79de",
    apitoken: "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
  },
  "marketplace.us.kg": {
    zone: "2f33118c3db00b12c38d07cf1c823ed1",
    apitoken: "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
  },
  "pteroserver.us.kg": {
    zone: "f693559a94aebc553a68c27a3ffe3b55",
    apitoken: "ZPAXx7CL51PtbGweL2pE3BsI3x0hgTgLuy56iXuo"
  },
  "digitalserver.us.kg": {
    zone: "df13e6e4faa4de9edaeb8e1f05cf1a36",
    apitoken: "HXVf4soYFM3iiOewHZ6tk6LEnG9f7m7CVhU0EoVz"
  },
  "xyz-store.biz.id": {
    zone: "8ae812c35a94b7bd2da993a777b8b16d",
    apitoken: "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
  },
  "shopserver.us.kg": {
    zone: "54ca38e266bfdf2dcdb7f51fd79c2db5",
    apitoken: "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
  },
  "Yilzi.web.id": {
    zone: "46d0cd33a7966f0be5afdab04b63e695",
    apitoken: "CygwSHXRSfZnsi1qZmyB8s4qHC12jX_RR4mTpm62"
  },
  "Yilziku.my.id": {
    zone: "f6d1a73a272e6e770a232c39979d5139",
    apitoken: "0Mae_Rtx1ixGYenzFcNG9bbPd-rWjoRwqN2tvNzo"
  },
  "Yilzi.me": {
    zone: "a1c08ecd2f96516f2a85250b98850e8b",
    apitoken: "f3IBOeIjRHYSsRhzxBO7yiwl-Twn3fqjmdkLdwlf"
  },
"cloud-shopp.biz.id": {
zone: "365f57282cbea3a6d5a738f107df244e",
apitoken: "hZKxD6afDLF-wsg1qVA-qbDK_h8lBE4NtqnVZPP8"
}
}

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})