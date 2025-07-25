const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.static(__dirname));

function getSharedStyles() {
  return `
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0d0221, #1a0633, #2d1b4e, #1e0b3d);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
      color: #fff;
      overflow-x: hidden;
      position: relative;
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(0, 191, 255, 0.08) 0%, transparent 50%);
      pointer-events: none;
      z-index: 1;
    }
    
    .particles {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    
    .particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
    }
    
    .particle.gentle-float {
      animation: gentleFloat linear infinite;
      background: radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, rgba(0, 255, 255, 0.2) 70%, transparent 100%);
      box-shadow: 0 0 8px rgba(0, 255, 255, 0.6);
    }
    
    .particle.gentle-float:nth-child(even) {
      background: radial-gradient(circle, rgba(138, 43, 226, 0.8) 0%, rgba(138, 43, 226, 0.2) 70%, transparent 100%);
      box-shadow: 0 0 8px rgba(138, 43, 226, 0.6);
      animation-duration: 12s;
    }
    
    .particle.gentle-float:nth-child(3n) {
      background: radial-gradient(circle, rgba(0, 191, 255, 0.7) 0%, rgba(0, 191, 255, 0.2) 70%, transparent 100%);
      box-shadow: 0 0 6px rgba(0, 191, 255, 0.5);
      animation-duration: 10s;
    }
    
    @keyframes gentleFloat {
      0% { 
        transform: translateY(100vh) translateX(0px) scale(0.5);
        opacity: 0;
      }
      5% { 
        opacity: 0.3;
        transform: translateY(95vh) translateX(10px) scale(0.7);
      }
      15% { 
        opacity: 0.8;
        transform: translateY(85vh) translateX(-5px) scale(1);
      }
      30% { 
        opacity: 1;
        transform: translateY(70vh) translateX(15px) scale(1.1);
      }
      45% { 
        opacity: 0.9;
        transform: translateY(55vh) translateX(-10px) scale(1);
      }
      60% { 
        opacity: 1;
        transform: translateY(40vh) translateX(20px) scale(1.2);
      }
      75% { 
        opacity: 0.8;
        transform: translateY(25vh) translateX(-8px) scale(1);
      }
      90% { 
        opacity: 0.6;
        transform: translateY(10vh) translateX(12px) scale(0.8);
      }
      100% { 
        opacity: 0;
        transform: translateY(-5vh) translateX(0px) scale(0.3);
      }
    }
    
    header {
      text-align: center;
      padding: 60px 20px;
      position: relative;
      z-index: 10;
    }
    
    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      position: relative;
    }
    
    .logo-image {
      width: 220px;
      height: 220px;
      border-radius: 35px;
      box-shadow: 0 0 50px rgba(0, 255, 255, 0.6);
      filter: drop-shadow(0 0 30px rgba(138, 43, 226, 0.5));
      transition: transform 0.3s ease;
      position: relative;
      z-index: 5;
      mask: radial-gradient(circle, black 50%, transparent 80%);
      -webkit-mask: radial-gradient(circle, black 50%, transparent 80%);
    }
    
    .logo-particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 3;
    }
    
    .logo-particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(0, 255, 255, 0.8);
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.9);
      animation: logoFloat 6s infinite linear;
      left: 50%;
      top: 50%;
      transform-origin: 0 0;
    }
    
    .logo-particle:nth-child(odd) {
      background: rgba(138, 43, 226, 0.8);
      box-shadow: 0 0 15px rgba(138, 43, 226, 0.9);
      animation-duration: 8s;
    }
    
    .logo-particle:nth-child(3n) {
      background: rgba(0, 191, 255, 0.7);
      box-shadow: 0 0 12px rgba(0, 191, 255, 0.8);
      animation-duration: 4s;
    }
    
    .header-logo-flow-particle {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 6;
      box-shadow: 0 0 6px currentColor;
      animation: headerLogoFlow linear infinite;
    }
    
    @keyframes headerLogoFlow {
      0% {
        transform: translate(var(--start-x), var(--start-y)) scale(0.3);
        opacity: 0;
      }
      10% {
        opacity: 0.4;
        transform: translate(var(--start-x), var(--start-y)) scale(0.6);
      }
      25% {
        opacity: 0.8;
        transform: translate(var(--curve1-x), var(--curve1-y)) scale(1);
      }
      50% {
        opacity: 1;
        transform: translate(var(--curve2-x), var(--curve2-y)) scale(1.2);
      }
      75% {
        opacity: 0.9;
        transform: translate(calc((var(--curve2-x) + var(--end-x)) / 2), calc((var(--curve2-y) + var(--end-y)) / 2)) scale(1);
      }
      90% {
        opacity: 0.5;
        transform: translate(var(--end-x), var(--end-y)) scale(0.7);
      }
      100% {
        opacity: 0;
        transform: translate(var(--end-x), var(--end-y)) scale(0.3);
      }
    }
    
    header p {
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
      font-weight: 300;
      opacity: 0.9;
    }
    
    .btn {
      display: inline-block;
      margin: 15px 10px;
      padding: 12px 24px;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      z-index: 10;
      border-radius: 8px;
      border: none;
    }
    
    .btn-primary {
      background: linear-gradient(45deg, #1e40af, #3730a3);
      border: 1px solid rgba(30, 64, 175, 0.3);
      box-shadow: 0 4px 20px rgba(30, 64, 175, 0.2);
    }
    
    .btn-primary:hover {
      background: linear-gradient(45deg, #2563eb, #4338ca);
      box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
      transform: translateY(-2px);
    }
    
    section {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 20px;
      position: relative;
      z-index: 10;
    }
    
    section h2 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 30px;
      background: linear-gradient(45deg, #00FFFF, #8A2BE2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
      filter: drop-shadow(0 0 10px rgba(138, 43, 226, 0.4));
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      margin: 40px 0;
    }
    
    .feature-card {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 20px;
      padding: 30px;
      border: 2px solid rgba(0, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 40px rgba(0, 255, 255, 0.2);
      border-color: rgba(0, 255, 255, 0.5);
    }
    
    .feature-card h3 {
      font-size: 1.5rem;
      margin-bottom: 15px;
      color: #00FFFF;
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    
    .feature-card p {
      line-height: 1.6;
      opacity: 0.9;
      font-size: 16px;
    }
    
    footer {
      background: rgba(0, 0, 0, 0.3);
      text-align: center;
      padding: 30px;
      font-size: 14px;
      color: #ccc;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 768px) {
      header p { font-size: 16px; }
      .features-grid { grid-template-columns: 1fr; }
      section h2 { font-size: 2rem; }
    }
  `;
}

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MarketPace – Delivering Opportunities</title>
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://marketpace.shop">
  <meta property="og:title" content="MarketPace - Build Stronger Communities Through Local Commerce">
  <meta property="og:description" content="Support local shops, services, and entertainers in your community. Join our launch campaign and help transform neighborhoods through community-first commerce. Sign up now for early access!">
  <meta property="og:image" content="https://marketpace.shop/facebook-launch-flyer.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="MarketPace - Community-first marketplace launching soon with local shops, services, and entertainment">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://marketpace.shop">
  <meta property="twitter:title" content="MarketPace - Build Stronger Communities Through Local Commerce">
  <meta property="twitter:description" content="Support local shops, services, and entertainers in your community. Join our launch campaign and help transform neighborhoods through community-first commerce.">
  <meta property="twitter:image" content="https://marketpace.shop/facebook-launch-flyer.png">
  <style>
    ${getSharedStyles()}
  </style>
</head>
<body>
  <div class="particles" id="particles"></div>
  
  <header>
    <div class="logo-container">
      <div class="logo-particles" id="logoParticles"></div>
      <img src="/marketpace-logo-1.jpeg" alt="MarketPace Logo" class="logo-image">
    </div>
    <p>More than a marketplace. We deliver opportunity - supporting local shops, services, and entertainers in your community. You set the pace, we make it happen!</p>
    <div style="text-align: center; margin-bottom: 30px;">
      <a href="/enhanced-community-feed" class="btn btn-primary">Try Live Demo</a>
      <a href="/signup-login" class="btn btn-primary" style="font-size: 18px; padding: 15px 30px; background: linear-gradient(45deg, #00ffff, #9d4edd);">Sign Up / Login</a>
      <a href="/sponsorship.html" class="btn btn-primary">Sponsor/Support</a>
    </div>
  </header>



  <section>
    <h2 style="font-size: 2.5rem; color: #00FFFF; text-align: center; margin-bottom: 30px; text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);">Founder's Story – Why I Built MarketPace</h2>
    <div style="background: rgba(255, 255, 255, 0.05); border-radius: 20px; padding: 40px; margin: 40px 0; border: 2px solid rgba(0, 255, 255, 0.3); backdrop-filter: blur(10px); overflow: hidden;">
      <div style="display: flex; align-items: flex-start; gap: 30px; flex-wrap: wrap;">
        <div style="flex: 0 0 280px; text-align: center;">
          <img src="/assets/founder-brooke-brown.jpg" alt="Brooke Brown - Founder" style="width: 280px; height: 280px; border-radius: 20px; object-fit: cover; border: 4px solid rgba(0, 255, 255, 0.5); box-shadow: 0 0 40px rgba(0, 255, 255, 0.4); margin-bottom: 20px;">
          <div style="font-size: 26px; font-weight: bold; color: #00FFFF; margin-bottom: 10px; text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);">Brooke Brown</div>
          <div style="font-size: 18px; color: #8A2BE2; opacity: 0.9; margin-bottom: 15px;">Founder & CEO, MarketPace</div>
          <div style="font-size: 14px; color: #FFD700; opacity: 0.8;">JMA Song of the Year Winner</div>
          <div style="font-size: 14px; color: #FFD700; opacity: 0.8;">15,000+ Music Followers</div>
        </div>
        <div style="flex: 1; min-width: 300px; max-width: calc(100% - 310px); word-wrap: break-word; overflow-wrap: break-word;">
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          For nine years, I poured my heart and soul into my music page. I released a full album, won a JMA for Song of the Year, and built a following of over 15,000 genuine fans—one post, one performance, one conversation at a time. It took hard work, consistent content, and thousands of dollars in paid ads just to stay in Facebook's algorithm.
        </div>
        
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          But over the last 4–5 years, everything changed.
        </div>
        
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          The platform became flooded with money-driven agendas, clickbait, and triggering content designed to keep us in constant conflict. Fake AI accounts started to thrive while real artists and small businesses got buried. Genuine creativity was replaced with shallow trends, and meaningful connection gave way to algorithm warfare.
        </div>
        
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          Then came the bots.
        </div>
        
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          They began impersonating me, stealing my merch, and scamming fans with fake ticket links. Even with 15,000 followers, I couldn't reach my own community. And just like that—my page was hacked. My years of work, gone. Facebook let the fake version of me spread graphic, harmful content under my name while I reported it over and over… with no action taken. They didn't care. Because fake engagement still makes them money.
        </div>
        
        <div style="font-size: 18px; line-height: 1.7; margin-bottom: 20px; color: #FFA500; font-weight: bold;">
          That was the final straw.
        </div>
        
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          MarketPace represents everything I wish existed while 9 years of life spent building my music career was torn down by platform manipulation. It's more than a response—it's a solution. Built to protect creators, support local businesses, and uplift real people, MarketPace is about creating a safe, trusted space where we support each other, grow our local economies, and build jobs from the ground up.
        </div>
        
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 20px;">
          This isn't just a delivery app or marketplace—it's a platform with purpose. A platform that actually serves its community.
        </div>
        
        <div style="font-size: 18px; line-height: 1.7; margin-bottom: 25px; color: #00FFFF; font-weight: bold;">
          We're flipping the script:
        </div>
        
        <div style="font-size: 16px; line-height: 1.8; margin-bottom: 20px; padding-left: 20px;">
          <div style="margin-bottom: 8px;">💪 Support Local over Likes.</div>
          <div style="margin-bottom: 8px;">🏘️ Build Community over Clicks.</div>
          <div style="margin-bottom: 8px;">🎨 Choose Art over Algorithms.</div>
          <div style="margin-bottom: 8px;">✊ Claim Success over Scams.</div>
        </div>
        
        <div style="font-size: 16px; line-height: 1.7; margin-bottom: 25px;">
          We're raising the standard where <strong style="color: #00FFFF;">you set the pace, and we make it happen…</strong>
        </div>
        
        <div style="font-size: 18px; line-height: 1.7; margin-bottom: 25px; color: #FFA500; font-weight: bold;">
          So, if you're ready for something real —
        </div>
        
        <div style="text-align: center; font-size: 24px; color: #00FFFF; margin-bottom: 25px; font-weight: bold; text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);">
          Get on my level. Welcome to MarketPace.
        </div>
        
        <div style="text-align: right; font-style: italic; color: #FFA500; font-size: 16px;">
          Sincerely,<br>
          <strong>Brooke Brown- Founder, MarketPace</strong>
        </div>
        </div>
      </div>
      

    </div>

    <div class="features-grid">
      <div class="feature-card">
        <h3>🛍️ Local Commerce Hub</h3>
        <p>Shop local items, rent anything, or offer odd jobs. From baby gear to power tools, furniture to freelance services - all with same-day delivery.</p>
      </div>
      
      <div class="feature-card">
        <h3>🚚 Community Delivery Network</h3>
        <p>Local drivers earning $4 per pickup + $2 per dropoff + $0.50/mile + 100% tips. Creating jobs while serving neighbors.</p>
      </div>
      
      <div class="feature-card">
        <h3>🎭 The Hub - Local Entertainment</h3>
        <p>Support artists, DJs, musicians, and performers. Book local talent, discover community events, and strengthen cultural connections.</p>
      </div>
      
      <div class="feature-card">
        <h3>🔁 Circular Economy</h3>
        <p>Rent, sell, or barter with full logistics handled. Keep money in your community instead of sending it to distant corporations.</p>
      </div>
      
      <div class="feature-card">
        <h3>🤝 Local Partnerships</h3>
        <p>Sponsored by people and partners who care about local success. Building stronger neighborhoods through economic empowerment.</p>
      </div>
      
      <div class="feature-card">
        <h3>💰 Fair Economics</h3>
        <p>Transparent 5% commission on transactions. Revenue stays local, supporting community growth instead of distant shareholders.</p>
      </div>
    </div>
  </section>



  <footer>
    <p>&copy; 2025 MarketPace · Delivering Opportunities, Building Local Power</p>
    <p style="font-size: 14px; margin-top: 15px; color: #00FFFF;">
      Support: <a href="mailto:MarketPace.contact@gmail.com" style="color: #00FFFF; text-decoration: underline;">MarketPace.contact@gmail.com</a>
    </p>
    <p style="font-size: 12px; opacity: 0.7; margin-top: 10px;">
      "Big tech platforms have taught us to rely on strangers and algorithms.<br>
      MarketPace reminds us what happens when we invest in each other."
    </p>
  </footer>

  <script>
    // Create graceful floating particles that flirt with the logo
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        
        // Create continuous gentle particles
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createGentleParticle();
            }, i * 1500);
        }
        
        // Continue creating particles every 2 seconds
        setInterval(createGentleParticle, 2000);
    }
    
    function createGentleParticle() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particle = document.createElement('div');
        particle.className = 'particle gentle-float';
        
        // Random size between 2-6px for gentle variation
        const size = 2 + Math.random() * 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random horizontal starting position
        const startX = Math.random() * 100;
        particle.style.left = startX + '%';
        
        // Random animation duration for graceful variety
        const duration = 8 + Math.random() * 6; // 8-14 seconds
        particle.style.animationDuration = duration + 's';
        
        // Random delay for organic feeling
        const delay = Math.random() * 3;
        particle.style.animationDelay = delay + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation completes
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, (duration + delay) * 1000);
    }
    
    // Create smooth flowing logo particles like community feed
    function createLogoFlowParticles() {
        const logoContainer = document.getElementById('logoParticles');
        if (!logoContainer) return;
        
        logoContainer.innerHTML = '';
        
        // Create multiple flowing particles with smooth motion
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createSingleLogoParticle();
            }, i * 800);
        }
        
        // Continue creating particles
        setInterval(createSingleLogoParticle, 2000);
    }
    
    function createSingleLogoParticle() {
        const logoContainer = document.getElementById('logoParticles');
        if (!logoContainer) return;
        
        const particle = document.createElement('div');
        particle.className = 'header-logo-flow-particle';
        
        // Create more organic paths around logo that "flirt" with it
        const logoRect = { x: 60, y: 60, width: 120, height: 120 };
        
        // Random approach angle - particles come from different directions
        const approachAngle = Math.random() * 2 * Math.PI;
        const distance = 100 + Math.random() * 60; // Start further out
        
        const startX = logoRect.x + Math.cos(approachAngle) * distance;
        const startY = logoRect.y + Math.sin(approachAngle) * distance;
        
        // Create gentle curves that dance around the logo
        const curve1X = logoRect.x + Math.cos(approachAngle + Math.PI/3) * (distance * 0.6);
        const curve1Y = logoRect.y + Math.sin(approachAngle + Math.PI/3) * (distance * 0.6);
        
        const curve2X = logoRect.x + Math.cos(approachAngle + Math.PI/2) * (distance * 0.3);
        const curve2Y = logoRect.y + Math.sin(approachAngle + Math.PI/2) * (distance * 0.3);
        
        // Final position continues the gentle arc
        const endAngle = approachAngle + Math.PI * (0.8 + Math.random() * 0.4);
        const endX = logoRect.x + Math.cos(endAngle) * (distance * 0.8);
        const endY = logoRect.y + Math.sin(endAngle) * (distance * 0.8);
        
        // Set CSS custom properties for smooth curved motion
        particle.style.setProperty('--start-x', startX + 'px');
        particle.style.setProperty('--start-y', startY + 'px');
        particle.style.setProperty('--curve1-x', curve1X + 'px');
        particle.style.setProperty('--curve1-y', curve1Y + 'px');
        particle.style.setProperty('--curve2-x', curve2X + 'px');
        particle.style.setProperty('--curve2-y', curve2Y + 'px');
        particle.style.setProperty('--end-x', endX + 'px');
        particle.style.setProperty('--end-y', endY + 'px');
        
        // Gentle, varied particle properties
        const colors = [
            'rgba(0, 255, 255, 0.9)',
            'rgba(157, 78, 221, 0.9)', 
            'rgba(0, 191, 255, 0.8)',
            'rgba(138, 43, 226, 0.8)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 2 + Math.random() * 3; // 2-5px for gentleness
        const duration = 4 + Math.random() * 3; // 4-7 seconds for graceful motion
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = color;
        particle.style.color = color;
        particle.style.animationDuration = duration + 's';
        particle.style.filter = 'blur(0.5px)'; // Soft glow effect
        
        logoContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, duration * 1000);
    }
    
    // Initialize
    createParticles();
    createLogoFlowParticles();
  </script>
</body>
</html>
  `);
});

// Community feed route
app.get('/community', (req, res) => {
  res.sendFile(path.join(__dirname, 'community.html'));
});

app.get('/feed', (req, res) => {
  res.sendFile(path.join(__dirname, 'community.html'));
});

// Sign up/login route
app.get('/signup-login', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup-login.html'));
});

app.get('/enhanced-signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'enhanced-signup.html'));
});

app.get('/demo-login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo-login.html'));
});

app.get('/dual-profile-system.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'dual-profile-system.html'));
});

app.get('/sponsorship.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'sponsorship.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('MarketPace Pitch Page running on port ' + PORT);
});