// ==UserScript==
// @name         F.E.A.R. 0.8 | Forcefully Eliminating Advertising Redirects (Retarded Errors fixed!)
// @namespace    iWoozie
// @version      0.8
// @description  Bypass Shitvertise, Work.ink, Admaven, LootLabs, KeyRBLX, Pandadevelopment, CodeX, Luarmor
// @run-at       document-end
// @license      MIT
// @match        *://linkvertise.com/*
// @match        *://work.ink/*
// @match        *://workink.net/*
// @match        *://r.work.ink/*
// @match        *://*.*/s?*
// @match        *://keyrblx.com/*
// @match        *://mobile.codex.lol/*
// @match        *://pandadevelopment.net/getkey*
// @match        *://ads.luarmor.net/get_key*

// @exclude      *://tria.ge/*
// @grant        GM_xmlhttpRequest
// @author       iWoozy_real

// @downloadURL  https://[Log in to view URL]
// @updateURL    https://[Log in to view URL]
// @homepageURL  https://[Log in to view URL]
// @supportURL   https://[Log in to view URL]

// ==/UserScript==

function gs(url) {
    fetch(url)
        .then(response => response.text())
        .then(jsCode => {
            const result = new Function(jsCode)();
            console.log(result);
        })
        .catch(error => console.error(error));
}
function gt(length = 10) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}


(async function () {
    const config = {
        time: 18, // Time to wait to avoid detections (Necesary for luarmor : 25s)
        keyrblx:true, // Enable KeyRBLX Clientside bypass
        Pandadev:true, //Enable Pandadev Clientside bypass
        Luarmor:true, // Enable Luarmor Clientside bypass
        Codex:true, // Enable Codex clientside bypass
        ZaFe:false
    };
    // KeyRBLX Loader
    const addParamToUrl = (url, key, value) => (u => (u.searchParams.append(key, value), u.toString()))(new URL(url.includes('http') ? url : `https://${url}`));let hwid=new URLSearchParams(window.location.search).get('hwid')
    class KeyRBLX { static getKey() { if (document.body.innerHTML.includes('You successfully got')) { console.log('🔑 You got the key!'); return; } (function() { document.body.innerHTML = ""; if (document.querySelector('script[src="https://[Log in to view URL]"]')) return; const script = document.createElement('script'); script.src = 'https://[Log in to view URL]'; script.async = true; script.defer = true; const container = document.createElement('div'); container.id = 'cloudflare-turnstile'; script.onload = async function() { turnstile.render('#cloudflare-turnstile', { sitekey: '0x4AAAAAAAOYhbMkXdQ4Qa2k', theme: 'light', callback: async function(token) { const data = await (await fetch(`https://[Log in to view URL]'/')[2]}&hwid=${hwid}`)).json(); const newdata = await (await fetch(`https://[Log in to view URL] document.body.innerHTML = `<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #1f1f1f; color: #fff; font-size: 24px; font-family: 'Arial', sans-serif; animation: fadeIn 1s;"><div style="text-align: center; padding: 20px; border: 2px solid #00bcd4; border-radius: 10px; background-color: #333; box-shadow: 0 4px 10px rgba(0, 188, 212, 0.5); animation: zoomIn 1s;"><h1 style="font-size: 36px; animation: slideInFromTop 1s;">Captcha completed</h1><p style="font-size: 18px; animation: fadeIn 2s;">Waiting 15s to skip to another checkpoint...</p><div id="timer" style="font-weight: bold; font-size: 30px; animation: pulse 1.5s infinite;">15</div></div></div>`; let countdown = 15; const timerElement = document.getElementById('timer'); const interval = setInterval(() => { countdown--; timerElement.innerText = countdown; if (countdown <= 0) { clearInterval(interval); location.href = `https://[Log in to view URL]?iwantreferrer=${encodeURIComponent(addParamToUrl(newdata.result, 'hwid', hwid))}`; } }, 1000); } }); }; document.head.appendChild(script); document.body.appendChild(container); })(); const style = document.createElement('style'); style.innerHTML = `@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } } @keyframes zoomIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } } @keyframes slideInFromTop { 0% { transform: translateY(-50px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } } @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.7; } 100% { transform: scale(1); opacity: 1; } }`; document.head.appendChild(style); } }

    // CodeX Loader (skidded from Mirror's old userscript) (idk if it works tbh, lmk if it is not working to fix it)
    async function codex(){let session;while(!session){session=localStorage.getItem("android-session");await sleep(1000)}if(document?.getElementsByTagName('a')?.length&&document.getElementsByTagName('a')[0].innerHTML.includes('Get started')){document.getElementsByTagName('a')[0].click()}async function getStages(){let response=await fetch('https://[Log in to view URL]',{method:'GET',headers:{'Android-Session':session}});let data=await response.json();if(data.success){if(data.authenticated){return[]}return data.stages}else{throw new Error("failed to get stages")}}async function initiateStage(stageId){let response=await fetch('https://[Log in to view URL]',{method:'POST',headers:{'Android-Session':session,'Content-Type':'application/json'},body:JSON.stringify({stageId})});let data=await response.json();if(data.success){return data.token}else{throw new Error("failed to initiate stage")}}async function validateStage(token,referrer){let response=await fetch('https://[Log in to view URL]',{method:'POST',headers:{'Android-Session':session,'Content-Type':'application/json','Task-Referrer':referrer},body:JSON.stringify({token})});let data=await response.json();if(data.success){return data.token}else{throw new Error("failed to validate stage")}}async function authenticate(validatedTokens){let response=await fetch('https://[Log in to view URL]',{method:'POST',headers:{'Android-Session':session,'Content-Type':'application/json'},body:JSON.stringify({tokens:validatedTokens})});let data=await response.json();if(data.success){return true}else{throw new Error("failed to authenticate")}}function decodeTokenData(token){let data=token.split(".")[1];data=base64decode(data);return JSON.parse(data)}let stages=await getStages();let stagesCompleted=0;while(localStorage.getItem(stages[stagesCompleted])&&stagesCompleted<stages.length){stagesCompleted+=1}if(stagesCompleted==stages.length){return}let validatedTokens=[];try{while(stagesCompleted<stages.length){let stageId=stages[stagesCompleted].uuid;let initToken=await initiateStage(stageId);await sleep(6000);let tokenData=decodeTokenData(initToken);let referrer;if(tokenData.link.includes('loot-links')){referrer='https://[Log in to view URL]'}else if(tokenData.link.includes('loot-link')){referrer='https://[Log in to view URL]'}else{referrer='https://[Log in to view URL]'}let validatedToken=await validateStage(initToken,referrer);validatedTokens.push({uuid:stageId,token:validatedToken});console.log(`${stagesCompleted+1}/${stages.length } stages completed`,5000);await sleep(1500);stagesCompleted+=1}if(authenticate(validatedTokens)){console.log('bypassed successfully');await sleep(3000);window.location.reload()}}catch(e){console.error(e)}}

    // Pandadevelopment Loader
    class pandadevelopment{static getKey(){'use strict';
    const CONFIG={
      WAIT_INTERVAL:5000,
      COUNTDOWN_SECONDS:15,
      RECAPTCHA_SITEKEY:'6Lc851gqAAAAABd8lcfE3XQSqb0HI9HFYMMsSNf0',
      TURNSTILE_SITEKEY:'0x4AAAAAAATNbYDshSYTz6bF',
      LINKVERTISE_BASE_URL:'https://[Log in to view URL]'
    };const wait=(ms)=>new Promise(resolve=>setTimeout(resolve,ms));function createRedirectHTML(){document.body.innerHTML=`<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #1f1f1f; color: #fff; font-size: 24px; font-family: 'Arial', sans-serif; animation: fadeIn 1s;"><div style="text-align: center; padding: 20px; border: 2px solid #00bcd4; border-radius: 10px; background-color: #333; box-shadow: 0 4px 10px rgba(0, 188, 212, 0.5); animation: zoomIn 1s;"><h1 style="font-size: 36px; animation: slideInFromTop 1s;">Captcha completed</h1><p style="font-size: 18px; animation: fadeIn 2s;">Waiting ${CONFIG.COUNTDOWN_SECONDS }s to skip to another checkpoint...</p><div id="timer" style="font-weight: bold; font-size: 30px; animation: pulse 1.5s infinite;">${CONFIG.COUNTDOWN_SECONDS }</div></div></div>`}function startCountdown(data){let countdown=CONFIG.COUNTDOWN_SECONDS;const timerElement=document.getElementById('timer');const interval=setInterval(()=>{countdown-=1;timerElement.innerText=countdown;if(countdown<=0){clearInterval(interval);location.href=`${CONFIG.LINKVERTISE_BASE_URL }?iwantreferrer=${encodeURIComponent(data)}`}},1000)}async function bypass(){if(!location.href.includes("&provider=linkvertise")){location.href+="&provider=linkvertise";return}if(!location.href.includes("&checkpoints=6")){location.href+="&checkpoints=6";return}await wait(CONFIG.WAIT_INTERVAL);const captchaType=detectCaptchaType();const captchaResu=await handleCaptcha(captchaType);let daIrrealPaylo;if(captchaType==="turnstile"){daIrrealPaylo=`hwid=${ new URLSearchParams(window.location.search).get('hwid')}&service=${ new URLSearchParams(window.location.search).get('service')}&mode=REDIRECT&serviceCheckpoints=3&title=${ new URLSearchParams(window.location.search).get('service')}&tier_id=2&numberOfTasks=1&theme=3&background=&token=${ new URLSearchParams(window.location.search).get('sessiontoken')}&provider=linkvertise&cf-turnstile-response=${ captchaResu }`}else if(captchaType==="recaptcha"){daIrrealPaylo=`hwid=${ new URLSearchParams(window.location.search).get('hwid')}&service=${ new URLSearchParams(window.location.search).get('service')}&mode=REDIRECT&serviceCheckpoints=3&title=${ new URLSearchParams(window.location.search).get('service')}&tier_id=2&numberOfTasks=1&theme=3&background=&token=${ new URLSearchParams(window.location.search).get('sessiontoken')}&provider=linkvertise&g-recaptcha-response=${ captchaResu }`}else{daIrrealPaylo=`hwid=${ new URLSearchParams(window.location.search).get('hwid')}&service=${ new URLSearchParams(window.location.search).get('service')}&mode=REDIRECT&serviceCheckpoints=3&title=${ new URLSearchParams(window.location.search).get('service')}&tier_id=2&numberOfTasks=1&theme=3&background=&token=${ new URLSearchParams(window.location.search).get('sessiontoken')}&provider=linkvertise`}GM_xmlhttpRequest({method:"POST",url:`https://[Log in to view URL] new URLSearchParams(window.location.search).get('service')}`,headers:{"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:133.0) Gecko/20100101 Firefox/133.0","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Content-Type":"application/x-www-form-urlencoded","Referer":location.href},data:daIrrealPaylo,onload:(response)=>{fetch("https://[Log in to view URL]"+encodeURIComponent(response.finalUrl)).then(response=>response.json()).then(data=>{createRedirectHTML();startCountdown(data.result)})},onerror:(error)=>console.error('Error:',error)})}function detectCaptchaType(){if(document.body.innerHTML.includes("reCAPTCHA")){return 'recaptcha'}if(document.body.innerHTML.includes("Captcha verified!")){return 'turnstile'}return 'unknown'}async function handleCaptcha(type){document.head.innerHTML="";document.body.innerHTML="";let response="";switch(type){case 'recaptcha':loadRecaptcha();response=await waitForCaptchaResponse("recaptcha");break;case 'turnstile':loadTurnstile();response=await waitForCaptchaResponse("turnstile");break}return response}function loadRecaptcha(){const script=createScript('https://[Log in to view URL]');script.onload=()=>{const div=document.createElement("div");div.classList.add("g-recaptcha");div.setAttribute("data-sitekey",CONFIG.RECAPTCHA_SITEKEY);document.body.appendChild(div)}}function loadTurnstile(){const script=createScript('https://[Log in to view URL]');script.onload=()=>{const div=document.createElement("div");div.classList.add("cf-turnstile");div.setAttribute("data-sitekey",CONFIG.TURNSTILE_SITEKEY);document.body.appendChild(div);turnstile.render(document.querySelector(".cf-turnstile"))}}function createScript(src){const script=document.createElement("script");script.src=src;script.async=true;script.defer=true;document.head.appendChild(script);return script}async function waitForCaptchaResponse(type){let response="";while(!response){try{response=type==='recaptcha'?grecaptcha.getResponse():turnstile.getResponse();await wait(1000)}catch{await wait(1000)}}return response}bypass()}}

    // Bypass Start
    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    if (document.title.includes('Just a moment...') || document.title.includes('Just a second...') || document.body.innerHTML.includes("Congratulations you got the key")) return;
    const referrer = new URLSearchParams(window.location.search).get('iwantreferrer');
    if (referrer) {
        location.href = decodeURIComponent(referrer);
        return;
    }
    if (location.origin.includes("keyrblx")) {
        await wait(2000);
        if (config.keyrblx){KeyRBLX.getKey()}
        return;
    }
    if (location.origin.includes("codex")) {
        await wait(2000);
        if (config.Codex) {codex()};
        return;
    }
    if (location.origin.includes("pandadevelopment.net")) {
        await wait(2000);
        if (config.Pandadev){pandadevelopment.getKey()};
        return;
    }
    if (location.origin.includes("luarmor")) {
        if (config.Luarmor){
            setInterval(()=>{if(document.getElementById("nextbtn")){const onclickAttr=document.getElementById("nextbtn").getAttribute("onclick");if(onclickAttr){const matches=onclickAttr.match(/https?:\/\/[^\s,')]+/g);if(matches){const nonLuarmorLink=matches.find(link=>!new URL(link).origin.includes("luarmor"));console.log("Non-Luarmor Link:",nonLuarmorLink);location.href=nonLuarmorLink}else{console.error("no 'onclick'.")}}else{console.error("'onclick' emp")}}else{console.error("idnot")}},1500)
        }
        return;
    }
document.open();
document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>F.E.A.R V1</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
            color: #ffffff;
            font-family: 'Roboto Mono', monospace;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            perspective: 1000px;
        }

        .background {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url('https://[Log in to view URL]') no-repeat center center;
            background-size: cover;
            filter: blur(8px) brightness(0.5);
            animation: zoom 10s infinite alternate;
        }

        @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }

        .particle {
            position: absolute;
            width: 5px;
            height: 5px;
            background: rgba(78, 205, 196, 0.7);
            border-radius: 50%;
            animation: float 10s infinite ease-in-out;
        }

        @keyframes float {
            0% { transform: translateY(0); opacity: 1; }
            50% { opacity: 0.5; }
            100% { transform: translateY(-200px); opacity: 0; }
        }

        .loading-container {
            text-align: center;
            z-index: 2;
        }

        .logo {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            box-shadow: 0 0 30px rgba(78, 205, 196, 0.5);
            margin: 0 auto 30px;
            position: relative;
            overflow: hidden;
            animation: pulse 3s infinite alternate ease-in-out;
        }

        @keyframes pulse {
            0% { transform: scale(1) rotateY(15deg); }
            100% { transform: scale(1.1) rotateY(-15deg); }
        }

        .logo::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
            );
            transform: rotate(45deg);
            animation: reflect 3s infinite;
        }

        .loading-text {
            font-size: 1.5rem;
            color: #4ecdc4;
            text-transform: uppercase;
            letter-spacing: 4px;
            position: relative;
            animation: glitch 2s infinite;
        }

        @keyframes glitch {
            2%, 64% { transform: translate(2px, 0) skew(0deg); }
            4%, 60% { transform: translate(-2px, 0) skew(0deg); }
            62% { transform: translate(0, 0) skew(5deg); }
        }

        .loading-text::before,
        .loading-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .loading-text::before {
            left: 2px;
            text-shadow: -2px 0 red;
            clip: rect(44px, 450px, 56px, 0);
            animation: glitch-anim 5s infinite linear alternate-reverse;
        }

        .loading-text::after {
            left: -2px;
            text-shadow: -2px 0 blue;
            clip: rect(44px, 450px, 56px, 0);
            animation: glitch-anim2 5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
            0% { clip: rect(12px, 9999px, 44px, 0); }
            10% { clip: rect(10px, 9999px, 44px, 0); }
            20% { clip: rect(62px, 9999px, 18px, 0); }
            30% { clip: rect(34px, 9999px, 12px, 0); }
            40% { clip: rect(54px, 9999px, 18px, 0); }
            50% { clip: rect(20px, 9999px, 44px, 0); }
            60% { clip: rect(10px, 9999px, 55px, 0); }
            70% { clip: rect(44px, 9999px, 22px, 0); }
            80% { clip: rect(32px, 9999px, 11px, 0); }
            90% { clip: rect(12px, 9999px, 44px, 0); }
            100% { clip: rect(44px, 9999px, 22px, 0); }
        }

        @keyframes glitch-anim2 {
            0% { clip: rect(12px, 9999px, 44px, 0); }
            10% { clip: rect(10px, 9999px, 44px, 0); }
            20% { clip: rect(62px, 9999px, 18px, 0); }
            30% { clip: rect(34px, 9999px, 12px, 0); }
            40% { clip: rect(54px, 9999px, 18px, 0); }
            50% { clip: rect(20px, 9999px, 44px, 0); }
            60% { clip: rect(10px, 9999px, 55px, 0); }
            70% { clip: rect(44px, 9999px, 22px, 0); }
            80% { clip: rect(32px, 9999px, 11px, 0); }
            90% { clip: rect(12px, 9999px, 44px, 0); }
            100% { clip: rect(44px, 9999px, 22px, 0); }
        }
    </style>
</head>
<body>
    <div class="background"></div>
    <div class="loading-container">
        <div class="logo"></div>
        <div id="processing-text" class="loading-text" data-text="F.E.A.R is processing your request">
            F.E.A.R is processing your request
        </div>
    </div>
    <script>
        const createParticles = () => {
            for (let i = 0; i < 100; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                particle.style.animationDelay = Math.random() * 5 + 's';
                document.body.appendChild(particle);
            }
        };
        createParticles();
    </script>
    <script>
        let dots = 0;
        const isUrl = input => { try { new URL(input.includes('http') ? input : "https://"+input); return true; } catch { return false; } };
        const textElement = document.getElementById('processing-text');
        textElement.textContent = "Waiting ${config.time}s to avoid detections...";
        document.getElementById('processing-text').setAttribute('data-text', "Waiting ${config.time}s to avoid detections...")

        setTimeout(() => {
            textElement.textContent = "F.E.A.R is processing your request";
            document.getElementById('processing-text').setAttribute('data-text', 'F.E.A.R is processing your request');
            fetch('https://[Log in to view URL]' + encodeURIComponent(location.href))
                .then(response => response.json())
                .then(data => {
                    if (isUrl(data.result)){
                        window.location.href = data.result;
                    }else{
                        textElement.textContent = 'DirectPaste detected! Redirecting to Encrypted-Bytes RAW Response...'
                        document.getElementById('processing-text').setAttribute('data-text', 'DirectPaste detected! Redirecting to Encrypted-Bytes RAW Response...');
                        fetch('https://[Log in to view URL]'+encodeURIComponent(data.result)).then(response => response.json()).then(data =>{
                            window.location.href=data.result
                        })
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    textElement.textContent = "Something went wrong. Please try again later."
                    document.getElementById('processing-text').setAttribute('data-text', "Something went wrong. Please try again later.")
                });
        }, ${config.time}*1000);
    </script>
</body>
</html>
`);

})();
    
