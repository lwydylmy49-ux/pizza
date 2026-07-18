/* =========================================================
   بيتزا لذيذة - جافا سكريبت عادي (Vanilla)
   ========================================================= */

/* ============ الإعدادات ============ */
// رابط الخادم المحلي (Node.js + PostgreSQL) — غيّره إذا شغّلت الخادم على منفذ أو جهاز آخر
const API_BASE_URL = 'http://localhost:3000/api';

/* ============ DATA ============ */
const mealsData = [
  { name: 'بيتزا إيطالية',    desc: 'عجينة طرية، صلصة طماطم طبيعية، وجبن موزاريلا ذائب مع ريحان طازج — طعم أصيل يُثلج الصدر.', price: '850 دج', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80' },
  { name: 'بيتزا المرقاز',    desc: 'مرقاز محلي محمّر، فلفل حلو، زيتون، وجبن غرويير — نكهة جزائرية لا تُنسى.', price: '950 دج', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80' },
  { name: 'بيتزا التونة',     desc: 'تونة طازجة، بصل، كبر، وليمون — خفيفة وصحية ومناسبة للعشاء.', price: '800 دج', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80' },
  { name: 'بيتزا الدجاج',     desc: 'قطع دجاج مشوي على الفحم، فطر، فلفل ملوّن، وصلصة باربكيو منزلية.', price: '1000 دج', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&q=80' },
  { name: 'بيتزا الأربع جبنات', desc: 'موزاريلا، شيدر، روكفور، وإيمونتال — لمحبي الجبن الحقيقي.', price: '1100 دج', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80' },
  { name: 'بيتزا مارغريتا',   desc: 'الكلاسيكية التي لا غنى عنها: طماطم، موزاريلا طازجة، وريحان أخضر.', price: '750 دج', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80' }
];

const pricingData = [
  { name: 'بيتزا الشاورما',    desc: 'شاورما دجاج أو لحم مع صلصة الطحينة والخضار الطازجة', price: '1200 دج', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&q=80' },
  { name: 'سبيشال الجزائر',    desc: 'مرقاز، تونة، دجاج، وجبن مضاعف — كلها في بيتزا واحدة', price: '1500 دج', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80' },
  { name: 'بيتزا هاواي',       desc: 'أناناس طازج مع قطع الدجاج وصلصة حلوة مالحة', price: '1100 دج', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&q=80' },
  { name: 'بيتزا العائلات',    desc: 'حجم كبير يكفي 4 أشخاص، اختر الحشوة التي تفضّلها', price: '2200 دج', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&q=80' },
  { name: 'بيتزا فلاحية',      desc: 'خضار الموسم المشوية مع زيت الزيتون البكر', price: '900 دج', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=200&q=80' },
  { name: 'بيتزا بيكون',       desc: 'بيكون مقرمش مع بصل مكرمل وجبن شيدر', price: '1300 دج', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&q=80' },
  { name: 'بيتزا كريسبي',      desc: 'عجينة رقيقة ومقرمشة مع حشوة غنية ومختارة', price: '950 دج', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=200&q=80' },
  { name: 'بيتزا الأطفال',     desc: 'حجم صغير بحشوة بسيطة يحبّها الأطفال', price: '600 دج', img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=200&q=80' }
];

const tabsData = {
  pizza: [
    { name: 'بيتزا جزائرية',  desc: 'مرقاز محلي، فلفل، زيتون، وجبن غرويير — طعم بلادنا في طبق واحد.', price: '950 دج', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80' },
    { name: 'بيتزا مارغريتا', desc: 'الكلاسيكية الخالدة بطماطم طازجة وموزاريلا وريحان أخضر.', price: '750 دج', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80' },
    { name: 'بيتزا التونة',   desc: 'تونة، بصل، كبر، وليمون — خفيفة ومناسبة للعشاء.', price: '800 دج', img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80' }
  ],
  drinks: [
    { name: 'حمود بوعلام',     desc: 'المشروب الغازي الأصيل الذي كبرنا عليه، بارد ومنعش.', price: '150 دج', img: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&q=80' },
    { name: 'عصير برتقال طبيعي', desc: 'برتقال يُعصر أمامك، دون سكر مضاف أو مواد حافظة.', price: '350 دج', img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80' },
    { name: 'لبن رائب',        desc: 'لبن طازج مثلّج — يُروي العطش ويفتح الشهية.', price: '200 دج', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80' }
  ],
  burgers: [
    { name: 'برغر كلاسيكي', desc: 'لحم بقري مفروم طازج، خس، طماطم، وصلصة البيت السرّية.', price: '650 دج', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
    { name: 'برغر بالجبن',  desc: 'طبقتان من جبن الشيدر الذائب فوق لحم مشوي على الفحم.', price: '750 دج', img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80' },
    { name: 'الكسكروت بالتونة', desc: 'الساندويتش الجزائري الأصيل بالتونة، الهريسة، الزيتون، والليمون.', price: '450 دج', img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80' }
  ],
  pasta: [
    { name: 'سباغيتي بولونيز', desc: 'لحم مفروم مع صلصة طماطم مطهوّة على نار هادئة.', price: '850 دج', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80' },
    { name: 'فتوتشيني ألفريدو', desc: 'صلصة كريمية غنية مع قطع دجاج مشوي وجبن بارميزان.', price: '950 دج', img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=400&q=80' },
    { name: 'بيني أرابياتا',    desc: 'معكرونة حارّة بصلصة طماطم وثوم وفلفل أحمر — لمحبّي الطعام الحار.', price: '800 دج', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80' }
  ]
};

/* ============ RENDER FUNCTIONS ============ */
function renderMeals() {
  const list = document.getElementById('mealsList');
  list.innerHTML = mealsData.map(m => `
    <div class="meal-item">
      <div class="meal-image"><img src="${m.img}" alt="${m.name}" loading="lazy"></div>
      <div class="meal-info">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="meal-action">
          <span class="meal-price">${m.price}</span>
          <button class="btn-order" data-name="${m.name}" data-price="${m.price}" data-img="${m.img}">اطلب الآن</button>
        </div>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.name, btn.dataset.price, btn.dataset.img));
  });
}

function renderPricing() {
  const grid = document.getElementById('pricingGrid');
  grid.innerHTML = pricingData.map(p => `
    <div class="pricing-item">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <div class="pricing-info">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
      </div>
      <span class="pricing-price">${p.price}</span>
    </div>
  `).join('');
}

function renderTabs(category) {
  const content = document.getElementById('tabContent');
  const items = tabsData[category] || [];
  content.innerHTML = items.map(i => `
    <div class="tab-item">
      <img src="${i.img}" alt="${i.name}" loading="lazy">
      <h3>${i.name}</h3>
      <p>${i.desc}</p>
      <span class="price">${i.price}</span>
      <button class="btn-add" data-name="${i.name}" data-price="${i.price}" data-img="${i.img}">أضف إلى السلة</button>
    </div>
  `).join('');
  content.querySelectorAll('.btn-add').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.name, btn.dataset.price, btn.dataset.img));
  });
}

/* ============ HERO CAROUSEL ============ */
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  dots.forEach(dot => dot.addEventListener('click', e => goTo(parseInt(e.target.dataset.slide))));
  setInterval(() => goTo(current + 1), 5000);
}

/* ============ NAVBAR ============ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  toggle.addEventListener('click', () => menu.classList.toggle('open'));

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      const link = menu.querySelector(`a[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          menu.querySelectorAll('a').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });
}

/* ============ TABS ============ */
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderTabs(tab.dataset.cat);
    });
  });
  renderTabs('pizza');
}

/* ============ STATS COUNTER ============ */
function initStatsCounter() {
  const numbers = document.querySelectorAll('.stat-number');
  let started = false;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        numbers.forEach(animateCounter);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(document.getElementById('stats'));
}

/* ============ GALLERY AUTO-SCROLL ============ */
function initGalleryScroll() {
  const track = document.getElementById('galleryTrack');
  let direction = 1;
  setInterval(() => {
    track.scrollLeft += direction;
    if (track.scrollLeft >= track.scrollWidth - track.clientWidth) direction = -1;
    if (track.scrollLeft <= 0) direction = 1;
  }, 30);
}

/* ============ CART ============ */
let cart = [];

// استرجاع السلة من التخزين المحلي (حتى لا تُفقد إذا أغلق العميل الصفحة)
try {
  const saved = localStorage.getItem('pizzaCart');
  if (saved) cart = JSON.parse(saved);
} catch (e) { cart = []; }

function saveCart() {
  try { localStorage.setItem('pizzaCart', JSON.stringify(cart)); } catch (e) {}
}

function parsePrice(priceStr) {
  const digits = String(priceStr).replace(/[^\d]/g, '');
  return parseInt(digits, 10) || 0;
}

function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  saveCart();
  renderCart();
  flashCartCount();
  showToast(`✓ تمت إضافة ${name} إلى السلة!`);
}

function changeQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveCart();
  renderCart();
}

function removeCartItem(idx) {
  cart.splice(idx, 1);
  saveCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0);
}

function renderCart() {
  const wrap = document.getElementById('cartItems');
  const emptyMsg = document.getElementById('cartEmpty');
  const totalRow = document.getElementById('cartTotalRow');
  const form = document.getElementById('cartForm');
  const countEl = document.getElementById('cartCount');

  countEl.textContent = cart.reduce((s, i) => s + i.qty, 0);

  if (cart.length === 0) {
    wrap.innerHTML = '';
    emptyMsg.classList.add('show');
    totalRow.style.display = 'none';
    form.style.display = 'none';
    return;
  }

  emptyMsg.classList.remove('show');
  totalRow.style.display = 'flex';
  form.style.display = 'flex';

  wrap.innerHTML = cart.map((item, idx) => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span class="cart-item-price">${item.price}</span>
      </div>
      <div class="cart-item-qty">
        <button type="button" class="qty-btn" data-action="dec" data-idx="${idx}">-</button>
        <span>${item.qty}</span>
        <button type="button" class="qty-btn" data-action="inc" data-idx="${idx}">+</button>
      </div>
      <button type="button" class="cart-item-remove" data-idx="${idx}" aria-label="حذف">&times;</button>
    </div>
  `).join('');

  document.getElementById('cartTotal').textContent = `${cartTotal()} دج`;

  wrap.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      changeQty(idx, btn.dataset.action === 'inc' ? 1 : -1);
    });
  });
  wrap.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeCartItem(parseInt(btn.dataset.idx, 10)));
  });
}

function flashCartCount() {
  const counter = document.getElementById('cartCount');
  counter.style.transform = 'scale(1.4)';
  setTimeout(() => counter.style.transform = 'scale(1)', 200);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed; bottom: 100px; left: 30px;
    background: #1a1a1a; color: #f5b754;
    padding: 12px 20px; border-right: 3px solid #f5b754;
    z-index: 9999; font-size: 13px;
    font-family: 'Cairo', sans-serif;
    animation: slideIn 0.3s ease;
    box-shadow: 0 5px 20px rgba(0,0,0,0.4);
    direction: rtl;
  `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

/* ============ CART MODAL OPEN/CLOSE ============ */
function initCartModal() {
  const overlay = document.getElementById('cartOverlay');
  const modal = document.getElementById('cartModal');
  const cartFloat = document.getElementById('cartFloat');
  const closeBtn = document.getElementById('cartClose');

  function openCart() {
    renderCart();
    overlay.classList.add('open');
    modal.classList.add('open');
  }
  function closeCart() {
    overlay.classList.remove('open');
    modal.classList.remove('open');
  }

  cartFloat.addEventListener('click', openCart);
  closeBtn.addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);

  renderCart();
}

/* ============ SEND ORDER (Local API) ============ */
function initCartForm() {
  const form = document.getElementById('cartForm');
  const status = document.getElementById('cartStatus');
  const submitBtn = document.getElementById('cartSubmit');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (cart.length === 0) return;

    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const note = document.getElementById('custNote').value.trim();

    if (!name || !phone || !address) return;

    const phoneDigits = phone.replace(/[^\d]/g, '');
    if (phoneDigits.length !== 10) {
      status.classList.add('error');
      status.textContent = 'رقم الهاتف يجب أن يتكوّن من 10 أرقام بالضبط.';
      return;
    }
    if (address.length <= 4) {
      status.classList.add('error');
      status.textContent = 'العنوان قصير جداً، الرجاء إدخال عنوان أوضح.';
      return;
    }

    submitBtn.disabled = true;
    status.classList.remove('error');
    status.textContent = 'جارٍ إرسال طلبك...';

    const orderItems = cart.map(i => ({ name: i.name, price: i.price, qty: i.qty }));
    const total = cartTotal();

    // تسجيل الطلب عبر الخادم المحلي (PostgreSQL)
    try {
      const res = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customer_name: name,
          customer_phone: phone,
          customer_address: address,
          note: note,
          items: orderItems,
          total: total
        })
      });
      const data = await res.json();
      if (!res.ok) {
        console.warn('خطأ من الخادم:', data.error);
        status.classList.add('error');
        status.textContent = data.error || 'حدث خطأ أثناء إرسال الطلب، حاول مرة أخرى.';
        submitBtn.disabled = false;
        return;
      }
    } catch (err) {
      console.warn('تعذّر الاتصال بالخادم:', err);
      status.classList.add('error');
      status.textContent = 'تعذّر الاتصال بالخادم، تأكد من تشغيله.';
      submitBtn.disabled = false;
      return;
    }

    status.textContent = '✓ تم استلام طلبك بنجاح! سنتواصل معك قريباً.';
    submitBtn.disabled = false;

    // تفريغ السلة بعد الإرسال
    cart = [];
    saveCart();
    form.reset();
    setTimeout(() => {
      renderCart();
      status.textContent = '';
    }, 3000);
  });
}


/* ============ SCROLL ANIMATIONS ============ */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .meal-item, .pricing-item, .tab-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderMeals();
  renderPricing();
  initHeroCarousel();
  initNavbar();
  initTabs();
  initStatsCounter();
  initGalleryScroll();
  initCartModal();
  initCartForm();
  setTimeout(initScrollAnimations, 100);
});

/* Inject slide-in keyframes */
const style = document.createElement('style');
style.textContent = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(style);
