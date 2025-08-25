const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkQrTXAva0pjdkZCdnFPWjRneHlCQ2dqOExNeWdXL1pWS3dMVkRYUXNraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaktiK0d4OVJZb3VXdzRNVzA2cUw1dWFjdm9mdGZzenYzZzdzNW1nWGdCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSVdCTldVUnNucG15MkNpOHM1Wlc5U1BQQ0tGT0tpQ3UwaDNHK0pPK1hJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMemJrUm05WEF1ZVZ5T1B1QUZaTC85OUhMWVdFTS9jKzFDaG1XNDFZbFNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FTEd2TC82N25zdjZVMDU5UW5FVmhIZVdWZUhkRzJTaFFUbTkwUFpzbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFYbUVoUmN2MVlTOW5GdWpsaEkza0t3dHVWSjlMdjFUUEJuQVI1OGVLMXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEoxYTFFcVlidWc2MU5tbGZ0N1NCQ0l3a2ZuME5QRS90SEJUVmlxdTdFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnFEaFZ1UDNieVJmbFBGK3Y1MXhBZFBFUTNzODRCcUh0NXB6M0pmUWoydz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkvWGJJWFFJQlBsZWV5UDV2dWJFUUdPV1JkNXk3ZGJCNUp2RlJUY0xYelNmV2hVYlROVFlOOGNnYWZJOVcwWGZDOWNVSGM3MEpzcXd5dzN1RHZPdUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJkTy9WVWdDS3dXMFk5M2hsY0Zvb3FLRlRXL0FOR0dEQlk2YkJDMHFibWFNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJSNllRRTVZUCIsIm1lIjp7ImlkIjoiMjM0ODA1NDY3MTQ1ODoyMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEYW1paXNub25jaGFsYW50IiwibGlkIjoiMTM5NDg3OTIxMzQ0NTg2OjIxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXFyaWJZSEVMU2tzc1VHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicDFFZWp5VFJaSXI4MmdQSnlvdnZtSmh5dHJ6NVhnaEJ6cUdWRUlBSklpND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTlZ2b21oTUpGZXYwVk9RN2ZDUkdRbzFOODNKVVlpczRUZlBFaTY1ZW1FcVdQRy93OU1ZUzBUOEZINFB1VXVBRzJnMG9oMnYyajJIa0M0MlVMVUxuQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImlNaWJhNmpCdktsTm5neTEzYWJGWDY2ek15SUJ3TzBLellidDBldkNaZjZNNWhPNlQ1YzQ3K0VXSVpDYVNBNUxSb1RUNlZqWFpKN2Jpeld3L3c3WEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA1NDY3MTQ1ODoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZFJIbzhrMFdTSy9Ob0R5Y3FMNzVpWWNyYTgrVjRJUWM2aGxSQ0FDU0l1In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxNDAwODgsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOMFUifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TANJIRO-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/cl2vd6.png",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/nl99hq.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ΓȺṈJƗRO-MD ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Tanjiro md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348054671458",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DAMĪNĪ*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Damini 🍂*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/9i3z0o.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> nonchalanceispure 🧘 ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2348054671458",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
