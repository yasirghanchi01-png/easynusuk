
(function(){
  "use strict";
  var END = new Date("2026-12-20T23:59:59+05:00").getTime();
  var $ = function(id){ return document.getElementById(id); };
  var qs = function(s, r){ return (r||document).querySelector(s); };
  var qsa = function(s, r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); };

  /* ================= I18N ================= */
  var I18N = {
    en:{tabc:"Competition",tabh:"🏠 Home — Umrah Guide",h1:"Free Nusuk Key Codes — <em>Every Code, One More Chance</em>",lede:"Copy a free community code, paste it in the Nusuk app, and you both earn +1 key. More keys = more chances to win a free Umrah trip in the daily draws.",bget:"🔑 Get a Free Code",bsub:"Submit Your Code",bfeat:"★ Get Featured — $3",feath:"Featured codes — copied first",codesh:"Free codes — copy one, paste it in Nusuk",howh:"Earn a key in 4 steps",s1t:"Copy a code",s1p:"Pick any free code from the list above and press Copy. The code goes to your clipboard.",s2t:"Open the Nusuk app",s2p:"Open the official Nusuk app on your phone and go to the competition / keys section.",s3t:"Paste the code",s3p:"Paste the NG- code there and confirm. If a code fails, come back and take another one.",s4t:"+1 key for both of you",s4p:"You earn 1 key and the code owner earns 1 key. Winners are announced daily — more keys, more chances.",subh:"Add your code, collect keys",priceh:"Put your code at the very top",faqh:"Competition questions",fq1:"Is EasyNusuk the official Nusuk website?",fq2:"Are the codes really free? Do I need a login or password?",fq3:"How many times can one code be used?",fq4:"Does Featured placement guarantee I win an Umrah trip?",fq5:"What happens to this site after 20 December?",copy:"Copy Code",copied:"Copied ✓",open:"Open in Nusuk",report:"Report",homeh:"Welcome to EasyNusuk, <em>Your Companion for Deen &amp; the Sacred Journey</em>",homesub:"EasyNusuk is a free Islamic website for Muslims around the world: Hajj &amp; Umrah guides, Azkar &amp; Duas, Namaz, Qibla, articles, Q&amp;A and an Islamic Quiz — in simple English, with 10 languages.",guidesh:"Guides for every rite",duash:"Azkar & duas for the journey",hfaqh:"Frequently asked questions"},
    ar:{tabc:"المسابقة",tabh:"🏠 الرئيسية — دليل العمرة",h1:"أكواد مفاتيح نسك المجانية — <em>كل كود، فرصة جديدة</em>",lede:"انسخ كودًا مجانيًا من المجتمع، والصقه في تطبيق نسك، وستربحان معًا مفتاحًا إضافيًا. مفاتيح أكثر = فرص أكبر للفوز برحلة عمرة مجانية في السحوبات اليومية.",bget:"🔑 احصل على كود مجاني",bsub:"أرسل الكود الخاص بك",bfeat:"★ احصل على التمييز — $3",feath:"الأكواد المميزة — تُنسخ أولًا",codesh:"أكواد مجانية — انسخ واحدًا والصقه في نسك",howh:"اكسب مفتاحًا في 4 خطوات",s1t:"انسخ كودًا",s1p:"اختر أي كود مجاني من القائمة أعلاه واضغط نسخ. سيذهب الكود إلى الحافظة.",s2t:"افتح تطبيق نسك",s2p:"افتح تطبيق نسك الرسمي على هاتفك وانتقل إلى قسم المسابقة / المفاتيح.",s3t:"الصق الكود",s3p:"الصق كود NG- هناك وأكّد. إذا فشل كود، عد وخذ كودًا آخر.",s4t:"مفتاح +1 لكليكما",s4p:"تربح مفتاحًا واحدًا ويربح صاحب الكود مفتاحًا واحدًا. تُعلن النتائج يوميًا — مفاتيح أكثر، فرص أكثر.",subh:"أضف الكود الخاص بك واجمع المفاتيح",priceh:"ضع الكود الخاص بك في الأعلى تمامًا",faqh:"أسئلة المسابقة",fq1:"هل EasyNusuk هو موقع نسك الرسمي؟",fq2:"هل الأكواد مجانية حقًا؟ هل أحتاج إلى تسجيل دخول أو كلمة مرور؟",fq3:"كم مرة يمكن استخدام كود واحد؟",fq4:"هل يضمن التمييز فوزي برحلة عمرة؟",fq5:"ماذا يحدث لهذا الموقع بعد 20 ديسمبر؟",copy:"نسخ الكود",copied:"تم النسخ ✓",open:"افتح في نسك",report:"إبلاغ",homeh:"رحلة عمرتك، <em>بشرح بسيط</em>",homesub:"أدلة العمرة والحج خطوة بخطوة، شرح تطبيق نسك، تصاريح الروضة، الأذكار والأدعية، أساسيات التأشيرة ومساعدة صادقة في الباقات — بإنجليزية بسيطة، للحجاج في كل مكان.",guidesh:"أدلة لكل شعيرة",duash:"أذكار وأدعية للرحلة",hfaqh:"الأسئلة الشائعة"},
    ur:{tabc:"مقابلہ",tabh:"🏠 ہوم — عمرہ گائیڈ",h1:"مفت نسک کی کوڈز — <em>ہر کوڈ، ایک اور موقع</em>",lede:"ایک مفت کمیونٹی کوڈ کاپی کریں، نسک ایپ میں پیسٹ کریں، اور آپ دونوں کو +1 کی ملے گی۔ زیادہ کیز = روزانہ کے ڈراز میں مفت عمرہ جیتنے کے زیادہ مواقع۔",bget:"🔑 مفت کوڈ لیں",bsub:"اپنا کوڈ جمع کریں",bfeat:"★ فیچرڈ حاصل کریں — $3",feath:"فیچرڈ کوڈز — سب سے پہلے کاپی ہوتے ہیں",codesh:"مفت کوڈز — ایک کاپی کریں، نسک میں پیسٹ کریں",howh:"4 مراحل میں کی کمائیں",s1t:"کوڈ کاپی کریں",s1p:"اوپر کی فہرست سے کوئی بھی مفت کوڈ چنیں اور Copy دبائیں۔ کوڈ آپ کے کلپ بورڈ میں آ جائے گا۔",s2t:"نسک ایپ کھولیں",s2p:"اپنے فون پر آفیشل نسک ایپ کھولیں اور مقابلہ / کیز والے سیکشن میں جائیں۔",s3t:"کوڈ پیسٹ کریں",s3p:"NG- کوڈ وہاں پیسٹ کر کے تصدیق کریں۔ کوڈ ناکام ہو تو واپس آ کر دوسرا کوڈ لیں۔",s4t:"دونوں کو +1 کی",s4p:"آپ کو بھی 1 کی ملتی ہے، کوڈ والے کو بھی۔ فاتحین روزانہ اعلان ہوتے ہیں — زیادہ کیز، زیادہ مواقع۔",subh:"اپنا کوڈ لگائیں، کیز جمع کریں",priceh:"اپنا کوڈ سب سے اوپر لگائیں",faqh:"مقابلے کے سوالات",fq1:"کیا EasyNusuk آفیشل نسک ویب سائٹ ہے؟",fq2:"کیا کوڈز واقعی مفت ہیں؟ کیا لاگ اِن یا پاس ورڈ چاہیے؟",fq3:"ایک کوڈ کتنی بار استعمال ہو سکتا ہے؟",fq4:"کیا فیچرڈ لگانے سے عمرہ جیتنا یقینی ہے؟",fq5:"20 دسمبر کے بعد اس سائٹ کا کیا ہوگا؟",copy:"کوڈ کاپی کریں",copied:"کاپی ہو گیا ✓",open:"نسک میں کھولیں",report:"رپورٹ",homeh:"آپ کا عمرہ سفر، <em>آسان الفاظ میں</em>",homesub:"قدم بہ قدم عمرہ و حج گائیڈز، نسک ایپ کی وضاحت، روضہ پرمٹ، اذکار و دعائیں، ویزا کی بنیادی باتیں اور دیانتدارانہ پیکیج رہنمائی — سادہ انگریزی میں، دنیا بھر کے زائرین کے لیے۔",guidesh:"ہر رکن کے لیے گائیڈز",duash:"سفر کے اذکار و دعائیں",hfaqh:"اکثر پوچھے جانے والے سوالات"},
    id:{tabc:"Kompetisi",tabh:"🏠 Beranda — Panduan Umrah",h1:"Kode Kunci Nusuk Gratis — <em>Setiap Kode, Satu Kesempatan Lagi</em>",lede:"Salin kode komunitas gratis, tempel di aplikasi Nusuk, dan kalian berdua mendapat +1 kunci. Lebih banyak kunci = lebih banyak peluang memenangkan perjalanan Umrah gratis dalam undian harian.",bget:"🔑 Ambil Kode Gratis",bsub:"Kirim Kode Anda",bfeat:"★ Jadi Unggulan — $3",feath:"Kode unggulan — disalin paling dulu",codesh:"Kode gratis — salin satu, tempel di Nusuk",howh:"Dapatkan kunci dalam 4 langkah",s1t:"Salin kode",s1p:"Pilih kode gratis apa pun dari daftar di atas dan tekan Salin. Kode masuk ke clipboard Anda.",s2t:"Buka aplikasi Nusuk",s2p:"Buka aplikasi resmi Nusuk di ponsel Anda dan masuk ke bagian kompetisi / kunci.",s3t:"Tempel kode",s3p:"Tempel kode NG- di sana dan konfirmasi. Jika kode gagal, kembali dan ambil kode lain.",s4t:"+1 kunci untuk kalian berdua",s4p:"Anda mendapat 1 kunci dan pemilik kode mendapat 1 kunci. Pemenang diumumkan setiap hari — lebih banyak kunci, lebih banyak peluang.",subh:"Tambahkan kode Anda, kumpulkan kunci",priceh:"Taruh kode Anda paling atas",faqh:"Pertanyaan kompetisi",fq1:"Apakah EasyNusuk situs resmi Nusuk?",fq2:"Apakah kodenya benar-benar gratis? Perlukah login atau kata sandi?",fq3:"Berapa kali satu kode bisa dipakai?",fq4:"Apakah penempatan Unggulan menjamin saya menang Umrah?",fq5:"Apa yang terjadi pada situs ini setelah 20 Desember?",copy:"Salin Kode",copied:"Tersalin ✓",open:"Buka di Nusuk",report:"Lapor",homeh:"Perjalanan Umrah Anda, <em>Dijelaskan dengan Sederhana</em>",homesub:"Panduan Umrah dan Haji langkah demi langkah, penjelasan aplikasi Nusuk, izin Rawdah, azkar dan doa, dasar visa dan bantuan paket yang jujur — dalam bahasa Inggris sederhana, untuk jamaah di mana pun.",guidesh:"Panduan untuk setiap rukun",duash:"Azkar & doa untuk perjalanan",hfaqh:"Pertanyaan yang sering diajukan"},
    bn:{tabc:"প্রতিযোগিতা",tabh:"🏠 হোম — ওমরাহ গাইড",h1:"ফ্রি নুসুক কি কোড — <em>প্রতিটি কোড, আরও একটি সুযোগ</em>",lede:"একটি ফ্রি কমিউনিটি কোড কপি করুন, নুসুক অ্যাপে পেস্ট করুন, এবং আপনারা দুজনেই +1 কি পাবেন। বেশি কি = দৈনিক ড্রতে ফ্রি ওমরাহ ভ্রমণ জেতার বেশি সুযোগ।",bget:"🔑 ফ্রি কোড নিন",bsub:"আপনার কোড জমা দিন",bfeat:"★ ফিচার্ড হোন — $3",feath:"ফিচার্ড কোড — সবার আগে কপি হয়",codesh:"ফ্রি কোড — একটি কপি করুন, নুসুকে পেস্ট করুন",howh:"৪ ধাপে কি আয় করুন",s1t:"কোড কপি করুন",s1p:"উপরের তালিকা থেকে যেকোনো ফ্রি কোড বেছে কপি চাপুন। কোডটি আপনার ক্লিপবোর্ডে যাবে।",s2t:"নুসুক অ্যাপ খুলুন",s2p:"ফোনে অফিসিয়াল নুসুক অ্যাপ খুলুন এবং প্রতিযোগিতা / কি বিভাগে যান।",s3t:"কোড পেস্ট করুন",s3p:"সেখানে NG- কোড পেস্ট করে নিশ্চিত করুন। কোড ব্যর্থ হলে ফিরে এসে আরেকটি নিন।",s4t:"দুজনের জন্যই +1 কি",s4p:"আপনি 1 কি পাবেন, কোডের মালিকও 1 কি পাবেন। বিজয়ীদের প্রতিদিন ঘোষণা করা হয় — বেশি কি, বেশি সুযোগ।",subh:"আপনার কোড যোগ করুন, কি সংগ্রহ করুন",priceh:"আপনার কোড একদম উপরে রাখুন",faqh:"প্রতিযোগিতার প্রশ্ন",fq1:"EasyNusuk কি অফিসিয়াল নুসুক ওয়েবসাইট?",fq2:"কোডগুলো কি সত্যিই ফ্রি? লগইন বা পাসওয়ার্ড লাগবে?",fq3:"একটি কোড কতবার ব্যবহার করা যায়?",fq4:"ফিচার্ড প্লেসমেন্ট কি ওমরাহ জয়ের নিশ্চয়তা দেয়?",fq5:"২০ ডিসেম্বরের পর এই সাইটের কী হবে?",copy:"কোড কপি করুন",copied:"কপি হয়েছে ✓",open:"নুসুকে খুলুন",report:"রিপোর্ট",homeh:"আপনার ওমরাহ যাত্রা, <em>সহজ ভাষায় ব্যাখ্যা</em>",homesub:"ধাপে ধাপে ওমরাহ ও হজ গাইড, নুসুক অ্যাপের ব্যাখ্যা, রওদাহ পারমিট, আজকার ও দোয়া, ভিসার মূল বিষয় এবং সৎ প্যাকেজ সহায়তা — সহজ ইংরেজিতে, সব জায়গার তীর্থযাত্রীদের জন্য।",guidesh:"প্রতিটি রুকনের জন্য গাইড",duash:"যাত্রার আজকার ও দোয়া",hfaqh:"সাধারণ জিজ্ঞাসা"},
    tr:{tabc:"Yarışma",tabh:"🏠 Ana Sayfa — Umre Rehberi",h1:"Ücretsiz Nusuk Anahtar Kodları — <em>Her Kod, Bir Şans Daha</em>",lede:"Ücretsiz bir topluluk kodunu kopyalayın, Nusuk uygulamasına yapıştırın, ikiniz de +1 anahtar kazanın. Daha fazla anahtar = günlük çekilişlerde ücretsiz Umre seyahati kazanma şansı.",bget:"🔑 Ücretsiz Kod Al",bsub:"Kodunuzu Gönderin",bfeat:"★ Öne Çıkın — $3",feath:"Öne çıkan kodlar — ilk kopyalananlar",codesh:"Ücretsiz kodlar — birini kopyalayın, Nusuk'a yapıştırın",howh:"4 adımda anahtar kazanın",s1t:"Bir kod kopyalayın",s1p:"Yukarıdaki listeden herhangi bir ücretsiz kodu seçin ve Kopyala'ya basın. Kod panonuza gider.",s2t:"Nusuk uygulamasını açın",s2p:"Telefonunuzda resmi Nusuk uygulamasını açın ve yarışma / anahtarlar bölümüne gidin.",s3t:"Kodu yapıştırın",s3p:"NG- kodunu oraya yapıştırın ve onaylayın. Kod çalışmazsa geri gelip başka bir kod alın.",s4t:"İkinize de +1 anahtar",s4p:"Siz 1 anahtar, kod sahibi 1 anahtar kazanır. Kazananlar her gün açıklanır — daha fazla anahtar, daha fazla şans.",subh:"Kodunuzu ekleyin, anahtar toplayın",priceh:"Kodunuzu en üste koyun",faqh:"Yarışma soruları",fq1:"EasyNusuk resmi Nusuk sitesi mi?",fq2:"Kodlar gerçekten ücretsiz mi? Giriş veya şifre gerekiyor mu?",fq3:"Bir kod kaç kez kullanılabilir?",fq4:"Öne çıkarma, Umre kazanmayı garantiler mi?",fq5:"20 Aralık'tan sonra bu siteye ne olacak?",copy:"Kodu Kopyala",copied:"Kopyalandı ✓",open:"Nusuk'ta Aç",report:"Bildir",homeh:"Umre Yolculuğunuz, <em>Sade Bir Dille</em>",homesub:"Adım adım Umre ve Hac rehberleri, Nusuk uygulaması açıklaması, Ravda izinleri, zikirler ve dualar, vize temelleri ve dürüst paket yardımı — sade İngilizceyle, her yerdeki hacılar için.",guidesh:"Her rükün için rehberler",duash:"Yolculuk için zikirler ve dualar",hfaqh:"Sık sorulan sorular"},
    fa:{tabc:"مسابقه",tabh:"🏠 خانه — راهنمای عمره",h1:"کدهای رایگان کلید نسک — <em>هر کد، یک شانس دیگر</em>",lede:"یک کد رایگان انجمن را کپی کنید، در برنامه نسک بچسبانید و هر دو نفرتان +۱ کلید می‌گیرید. کلید بیشتر = شانس بیشتر برای بردن سفر رایگان عمره در قرعه‌کشی‌های روزانه.",bget:"🔑 کد رایگان بگیرید",bsub:"کد خود را ارسال کنید",bfeat:"★ ویژه شوید — $3",feath:"کدهای ویژه — اول کپی می‌شوند",codesh:"کدهای رایگان — یکی را کپی کنید و در نسک بچسبانید",howh:"در ۴ گام کلید بگیرید",s1t:"یک کد کپی کنید",s1p:"هر کد رایگانی را از فهرست بالا انتخاب کنید و «کپی» را بزنید. کد به حافظه موقت می‌رود.",s2t:"برنامه نسک را باز کنید",s2p:"برنامه رسمی نسک را در تلفن خود باز کنید و به بخش مسابقه / کلیدها بروید.",s3t:"کد را بچسبانید",s3p:"کد NG- را آنجا بچسبانید و تأیید کنید. اگر کدی کار نکرد، برگردید و کد دیگری بردارید.",s4t:"+۱ کلید برای هر دو نفر",s4p:"شما ۱ کلید و صاحب کد هم ۱ کلید می‌گیرد. برندگان روزانه اعلام می‌شوند — کلید بیشتر، شانس بیشتر.",subh:"کد خود را اضافه کنید، کلید جمع کنید",priceh:"کد خود را در بالاترین قسمت بگذارید",faqh:"پرسش‌های مسابقه",fq1:"آیا EasyNusuk وب‌سایت رسمی نسک است؟",fq2:"آیا کدها واقعاً رایگان‌اند؟ آیا ورود یا گذرواژه لازم است؟",fq3:"هر کد چند بار قابل استفاده است؟",fq4:"آیا جایگاه ویژه، بردن عمره را تضمین می‌کند؟",fq5:"بعد از ۲۰ دسامبر چه اتفاقی برای این سایت می‌افتد؟",copy:"کپی کد",copied:"کپی شد ✓",open:"باز کردن در نسک",report:"گزارش",homeh:"سفر عمره شما، <em>به زبان ساده</em>",homesub:"راهنمای گام‌به‌گام عمره و حج، توضیح برنامه نسک، مجوز روضه، اذکار و دعاها، اصول ویزا و کمک صادقانه برای بسته‌ها — به انگلیسی ساده، برای زائران همه‌جا.",guidesh:"راهنما برای هر رکن",duash:"اذکار و دعاهای سفر",hfaqh:"پرسش‌های متداول"},
    ms:{tabc:"Pertandingan",tabh:"🏠 Laman Utama — Panduan Umrah",h1:"Kod Kunci Nusuk Percuma — <em>Setiap Kod, Satu Lagi Peluang</em>",lede:"Salin kod komuniti percuma, tampal dalam aplikasi Nusuk, dan anda berdua mendapat +1 kunci. Lebih banyak kunci = lebih banyak peluang memenangi perjalanan Umrah percuma dalam cabutan harian.",bget:"🔑 Dapatkan Kod Percuma",bsub:"Hantar Kod Anda",bfeat:"★ Jadi Pilihan Utama — $3",feath:"Kod pilihan utama — disalin dahulu",codesh:"Kod percuma — salin satu, tampal di Nusuk",howh:"Dapatkan kunci dalam 4 langkah",s1t:"Salin kod",s1p:"Pilih mana-mana kod percuma dari senarai di atas dan tekan Salin. Kod masuk ke papan klip anda.",s2t:"Buka aplikasi Nusuk",s2p:"Buka aplikasi rasmi Nusuk di telefon anda dan pergi ke bahagian pertandingan / kunci.",s3t:"Tampal kod",s3p:"Tampal kod NG- di sana dan sahkan. Jika kod gagal, kembali dan ambil kod lain.",s4t:"+1 kunci untuk anda berdua",s4p:"Anda mendapat 1 kunci dan pemilik kod mendapat 1 kunci. Pemenang diumumkan setiap hari — lebih banyak kunci, lebih banyak peluang.",subh:"Tambah kod anda, kumpul kunci",priceh:"Letakkan kod anda di paling atas",faqh:"Soalan pertandingan",fq1:"Adakah EasyNusuk laman web rasmi Nusuk?",fq2:"Adakah kod ini benar-benar percuma? Perlukah log masuk atau kata laluan?",fq3:"Berapa kali satu kod boleh digunakan?",fq4:"Adakah penempatan Pilihan Utama menjamin saya memenangi Umrah?",fq5:"Apa yang berlaku kepada laman ini selepas 20 Disember?",copy:"Salin Kod",copied:"Disalin ✓",open:"Buka dalam Nusuk",report:"Lapor",homeh:"Perjalanan Umrah Anda, <em>Diterangkan Secara Mudah</em>",homesub:"Panduan Umrah dan Haji langkah demi langkah, penerangan aplikasi Nusuk, permit Rawdah, azkar dan doa, asas visa dan bantuan pakej yang jujur — dalam bahasa Inggeris mudah, untuk jemaah di mana sahaja.",guidesh:"Panduan untuk setiap rukun",duash:"Azkar & doa untuk perjalanan",hfaqh:"Soalan lazim"},
    ha:{tabc:"Gasa",tabh:"🏠 Gida — Jagorar Umrah",h1:"Lambobin Makullin Nusuk Kyauta — <em>Kowace Lamba, Wata Dama</em>",lede:"Kwafi lamba kyauta daga al'umma, liƙe ta a manhajar Nusuk, ku biyu ku sami +1 makulli. Makullai da yawa = ƙarin dama na lashe tafiyar Umrah kyauta a zaɓen yau da kullum.",bget:"🔑 Sami Lamba Kyauta",bsub:"Aika Lambarka",bfeat:"★ Zama Na Musamman — $3",feath:"Lambobin musamman — su ake kwafa da farko",codesh:"Lambobi kyauta — kwafi ɗaya, liƙe a Nusuk",howh:"Sami makulli a matakai 4",s1t:"Kwafi lamba",s1p:"Zaɓi kowace lamba kyauta daga jerin sama ka danna Kwafi. Lambar za ta shiga allo.",s2t:"Buɗe manhajar Nusuk",s2p:"Buɗe manhajar Nusuk ta hukuma a wayarka ka je sashen gasa / makullai.",s3t:"Liƙe lambar",s3p:"Liƙe lambar NG- a can ka tabbatar. Idan lamba ta gaza, dawo ka ɗauki wata.",s4t:"+1 makulli gare ku biyu",s4p:"Kai ka sami makulli 1, mai lambar ma ya sami 1. Ana sanar da waɗanda suka yi nasara kowace rana — makullai da yawa, dama da yawa.",subh:"Ƙara lambarka, tara makullai",priceh:"Sanya lambarka a sama ƙwarai",faqh:"Tambayoyin gasa",fq1:"Shin EasyNusuk shi ne shafin Nusuk na hukuma?",fq2:"Lambobin da gaske kyauta ne? Ana buƙatar shiga ko kalmar sirri?",fq3:"Sau nawa za a iya amfani da lamba ɗaya?",fq4:"Shin matsayin Musamman yana tabbatar da lashe Umrah?",fq5:"Me zai faru da wannan shafi bayan 20 ga Disamba?",copy:"Kwafi Lamba",copied:"An Kwafi ✓",open:"Buɗe a Nusuk",report:"Rahoto",homeh:"Tafiyar Umrah ɗinka, <em>Cikin Sauƙi</em>",homesub:"Jagororin Umrah da Hajji mataki-mataki, bayanin manhajar Nusuk, izinin Rawdah, azkar da addu'o'i, asalin biza da taimakon fakiti na gaskiya — cikin Turanci mai sauƙi, ga mahajjata a ko'ina.",guidesh:"Jagorori ga kowane rukuni",duash:"Azkar da addu'o'i don tafiya",hfaqh:"Tambayoyin da ake yawan yi"},
    fr:{tabc:"Concours",tabh:"🏠 Accueil — Guide Omra",h1:"Codes Clés Nusuk Gratuits — <em>Chaque Code, Une Chance de Plus</em>",lede:"Copiez un code communautaire gratuit, collez-le dans l'application Nusuk, et vous gagnez tous les deux +1 clé. Plus de clés = plus de chances de gagner un voyage Omra gratuit aux tirages quotidiens.",bget:"🔑 Obtenir un Code Gratuit",bsub:"Envoyer Votre Code",bfeat:"★ Être Mis en Avant — $3",feath:"Codes mis en avant — copiés en premier",codesh:"Codes gratuits — copiez-en un, collez-le dans Nusuk",howh:"Gagnez une clé en 4 étapes",s1t:"Copiez un code",s1p:"Choisissez un code gratuit dans la liste ci-dessus et appuyez sur Copier. Le code va dans votre presse-papiers.",s2t:"Ouvrez l'application Nusuk",s2p:"Ouvrez l'application officielle Nusuk sur votre téléphone et allez dans la section concours / clés.",s3t:"Collez le code",s3p:"Collez le code NG- et confirmez. Si un code échoue, revenez en prendre un autre.",s4t:"+1 clé pour vous deux",s4p:"Vous gagnez 1 clé et le propriétaire du code gagne 1 clé. Les gagnants sont annoncés chaque jour — plus de clés, plus de chances.",subh:"Ajoutez votre code, collectionnez des clés",priceh:"Placez votre code tout en haut",faqh:"Questions sur le concours",fq1:"EasyNusuk est-il le site officiel de Nusuk ?",fq2:"Les codes sont-ils vraiment gratuits ? Faut-il un identifiant ou un mot de passe ?",fq3:"Combien de fois un code peut-il être utilisé ?",fq4:"Le placement Mis en Avant garantit-il de gagner une Omra ?",fq5:"Qu'arrive-t-il à ce site après le 20 décembre ?",copy:"Copier le Code",copied:"Copié ✓",open:"Ouvrir dans Nusuk",report:"Signaler",homeh:"Votre Voyage Omra, <em>Expliqué Simplement</em>",homesub:"Guides Omra et Hajj étape par étape, l'application Nusuk expliquée, permis Rawdah, azkar et duas, bases du visa et aide honnête pour les forfaits — en anglais simple, pour les pèlerins du monde entier.",guidesh:"Guides pour chaque rite",duash:"Azkar et duas pour le voyage",hfaqh:"Questions fréquentes"}
  };
  var RTL = {ar:1, ur:1, fa:1};
  var curLang = "en";
  function T(){ return I18N[curLang] || I18N.en; }

  /* language switcher — header me insert */
  var sel = document.createElement("select");
  sel.className = "langsel"; sel.id = "lang-select";
  sel.setAttribute("aria-label","Language");
  sel.innerHTML = '<option value="en">🌐 English</option><option value="ar">العربية</option><option value="ur">اردو</option><option value="id">Bahasa Indonesia</option><option value="bn">বাংলা</option><option value="tr">Türkçe</option><option value="fa">فارسی</option><option value="ms">Bahasa Melayu</option><option value="ha">Hausa</option><option value="fr">Français</option>';
  var tabsBox = qs(".mainnav") || qs(".viewtabs");
  if (tabsBox && tabsBox.parentNode) tabsBox.parentNode.insertBefore(sel, tabsBox);
  sel.addEventListener("change", function(){ applyLang(sel.value); });

  function setText(node, txt){ if (node) node.textContent = txt; }
  function applyLang(lang){
    curLang = I18N[lang] ? lang : "en";
    var t = T();
    document.documentElement.lang = curLang;
    document.documentElement.dir = RTL[curLang] ? "rtl" : "ltr";
    $("tab-comp").innerHTML = '<span class="live-dot" aria-hidden="true"></span>' + t.tabc;
    /* page nav labels stay as page names */
    var h1 = qs("#view-comp .hero h1"); if (h1) h1.innerHTML = t.h1;
    setText(qs("#view-comp .hero .lede"), t.lede);
    var ctas = qsa("#view-comp .hero-ctas a");
    if (ctas[0]) ctas[0].textContent = t.bget;
    if (ctas[1]) ctas[1].textContent = t.bsub;
    if (ctas[2]) ctas[2].textContent = t.bfeat;
    setText(qs(".featured-band h2"), t.feath);
    setText(qs("#codes h2"), t.codesh);
    setText(qs("#how h2"), t.howh);
    var steps = qsa("#how .step");
    var st = [[t.s1t,t.s1p],[t.s2t,t.s2p],[t.s3t,t.s3p],[t.s4t,t.s4p]];
    steps.forEach(function(el, i){ if (st[i]){ setText(el.querySelector("h3"), st[i][0]); setText(el.querySelector("p"), st[i][1]); } });
    setText(qs("#submit h2"), t.subh);
    setText(qs("#submit-form .form-btn"), t.bsub);
    setText(qs("#featured-pricing h2"), t.priceh);
    setText(qs("#faq-comp h2"), t.faqh);
    var sums = qsa("#faq-comp summary");
    [t.fq1,t.fq2,t.fq3,t.fq4,t.fq5].forEach(function(q, i){ if (sums[i]) sums[i].textContent = q; });
    var hh = $("home-h"); if (hh) hh.innerHTML = t.homeh;
    setText($("home-sub"), t.homesub);
    setText(qs("#h-guides h2"), t.guidesh);
    setText(qs("#duas h2"), t.duash);
    setText(qs("#h-faq h2"), t.hfaqh);
    render();
  }

  /* ================= VIEWS ================= */
  var trendActive = Date.now() <= END;
  var VIEWS = ["home","guides","azkar","namaz","articles","qibla","qa","quiz","comp","privacy"];
  function defaultView(){
    var h = (location.hash||"").replace("#","");
    if (VIEWS.indexOf(h) > -1) return h;
    if (h === "competition") return "comp";
    return trendActive ? "comp" : "home";
  }
  function showView(name, scrollTarget){
    if (VIEWS.indexOf(name) === -1) name = "home";
    VIEWS.forEach(function(v){
      var el = $("view-" + v); if (el) el.hidden = (v !== name);
      var tab = $("tab-" + v); if (tab) tab.setAttribute("aria-selected", v === name ? "true" : "false");
    });
    var notes = {
      comp: trendActive ? "🔴 <b>Competition is LIVE</b> (1 Nov – 20 Dec 2026) — that is why the site opened here. All other pages are in the menu above." : "The competition ended on 20 Dec 2026 — the site now normally opens on Home.",
      home: trendActive ? "You are on <b>Home</b> — the introduction page. The competition is live: open it any time from the menu above." : "🏠 Welcome to <b>EasyNusuk</b> — choose any page from the menu above.",
      guides: "🕋 <b>Hajj &amp; Umrah Guides</b> — step-by-step guides for every rite.",
      azkar: "🤲 <b>Azkar &amp; Duas</b> — Arabic with English translation.",
      namaz: "🕌 <b>Namaz</b> — live prayer times, raka'at table and Wudu steps.",
      articles: "📰 <b>Articles</b> — practical reads for pilgrims.",
      qibla: "🧭 <b>Qibla Finder</b> — direction of the Kaaba from where you are.",
      qa: "❓ <b>Question &amp; Answers</b> — grouped by topic.",
      quiz: "🏆 <b>Islamic Quiz</b> — 12 questions. Good luck!",
      privacy: "🔒 <b>Privacy Policy</b> — what this site collects, cookies and advertising, in plain words."
    };
    $("mode-note").innerHTML = notes[name] || "";
    try { history.replaceState(null, "", "#" + name); } catch(e){}
    if (scrollTarget){
      var el2 = qs(scrollTarget);
      if (el2){ setTimeout(function(){ el2.scrollIntoView({behavior:"smooth"}); }, 60); observeReveals(); return; }
    }
    window.scrollTo({top:0, behavior:"smooth"});
    observeReveals();
    if (name === "quiz") renderQuiz();
  }
  document.addEventListener("click", function(e){
    var v = e.target.closest("[data-view]");
    if (v){
      e.preventDefault();
      var target = v.getAttribute("data-view");
      var href = v.getAttribute("href") || "";
      var anchor = (href && href.charAt(0) === "#" && href.length > 1) ? href : null;
      showView(target, anchor);
    }
  });
  VIEWS.forEach(function(v){ var t = $("tab-" + v); if (t) t.addEventListener("click", function(){ showView(v); }); });

  /* ================= MOBILE NAV — slim bar + collapsible page panel ================= */
  var navToggle = $("nav-toggle"), mainNav = $("mainnav");
  function closeMobileNav(){ if (mainNav) mainNav.classList.remove("open"); if (navToggle){ navToggle.setAttribute("aria-expanded","false"); navToggle.innerHTML = "☰ Menu"; } }
  if (navToggle && mainNav){
    navToggle.addEventListener("click", function(e){
      e.stopPropagation();
      var open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.innerHTML = open ? "✕ Close" : "☰ Menu";
    });
    mainNav.addEventListener("click", function(e){ if (e.target.closest("[data-view]")) closeMobileNav(); });
    document.addEventListener("click", function(e){ if (mainNav.classList.contains("open") && !e.target.closest(".topnav")) closeMobileNav(); });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeMobileNav(); });
  }

  /* ================= TOAST + COPY ================= */
  var toastTimer = null;
  function toast(msg){
    var t = $("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.classList.remove("show"); }, 3200);
  }
  function copyText(text, okMsg){
    function done(){ toast(okMsg); }
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done, function(){ fallback(); });
    } else { fallback(); }
    function fallback(){
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); }
      catch(e){ toast("Copy failed — please select and copy manually: " + text); }
      document.body.removeChild(ta);
    }
  }

  /* ================= CODES ================= */
  var FLAGS = {"Pakistan":"🇵🇰","Indonesia":"🇮🇩","Bangladesh":"🇧🇩","India":"🇮🇳","Malaysia":"🇲🇾","Nigeria":"🇳🇬","Egypt":"🇪🇬","Türkiye":"🇹🇷","UAE":"🇦🇪","Saudi Arabia":"🇸🇦","United Kingdom":"🇬🇧","United States":"🇺🇸","Kuwait":"🇰🇼","Kazakhstan":"🇰🇿","Other":"🌍"};
    var codes = [
    {code:"NG-mFajol2X", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-Nsn3Ge4c", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-9iCNlVLj", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-W1DuoxZc", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-lQOQwl1X", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-H8T6EOHL", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-OUEDGOtd", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-uCuTJ4HF", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-GnY5wiNv", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-D840lAYA", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-JrXac89w", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-fvlYyHhd", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-ZiqRWvwe", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-jK7U4cdd", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-c9rA7DJH", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-b974VVeP", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-GTqkdX1D", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-wYApFRqd", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-ge7cMTjS", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-01r3vVwm", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-01rNmwaY", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-024ESi0I", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-02QL6VPB", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-02laBoNZ", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-02tCxpCI", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-031bz2Pt", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-04H7xPKS", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-06Pz7Hon", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-07NE89MZ", name:"umrahcodes.click", country:"Other", countryCode:"", live:true},
    {code:"NG-M7RDGWBA", name:"nusukkey.com", country:"UAE", countryCode:"AE", live:true},
    {code:"NG-RILR63AK", name:"nusukkey.com", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-5VQBJF42", name:"nusukkey.com", country:"Kuwait", countryCode:"KW", live:true},
    {code:"NG-8YXAK41U", name:"nusukkey.com", country:"Malaysia", countryCode:"MY", live:true, featured:true},
    {code:"NG-LMZFOGCE", name:"nusukkey.com", country:"Egypt", countryCode:"EG", live:true},
    {code:"NG-N8JHTTX5", name:"nusukkey.com", country:"United Kingdom", countryCode:"GB", live:true},
    {code:"NG-6VXK4USN", name:"nusukkey.com", country:"Kazakhstan", countryCode:"KZ", live:true},
    {code:"NG-IJY4WUOU", name:"nusukkey.com", country:"Kazakhstan", countryCode:"KZ", live:true},
    {code:"NG-OF8II3LU", name:"nusukkey.com", country:"Saudi Arabia", countryCode:"SA", live:true},
    {code:"NG-11GBMR4J", name:"nusukkey.com", country:"Kuwait", countryCode:"KW", live:true},
    {code:"NG-CZLKLP9L", name:"nusukkey.com", country:"Pakistan", countryCode:"PK", live:true, featured:true},
    {code:"NG-8UULBLUF", name:"nusukkey.com", country:"Egypt", countryCode:"EG", live:true},
    {code:"NG-4UKWRLBL", name:"nusukkey.com", country:"Malaysia", countryCode:"MY", live:true},
    {code:"NG-PkKZWK8B", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-DkJSDpLD", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-wSOHqbVo", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-F83np52b", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-1er3aFL6", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-6F9rdx31", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-eijjb4Cc", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-2vCYvlXU", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-9xv5N4nk", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-b3wo1u9U", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-Df6oe7wU", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-dtCgVUsI", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-L34Mjumu", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-BiV65N3s", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-9Doa62oP", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-fwb9F2aq", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-FAoC3M5H", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-5x1GSRUT", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-hqy7FtyV", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-dS0iPbnU", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-Ws4mMlqx", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-BVbsWdMe", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-QnKIiPMv", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-tZvkg8MD", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-NrN69Zah", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-ix8zAjnd", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-x7C4c3qX", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-Rjti3oLq", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-rPO5zWGC", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-vXdFVaS2", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-zPAHNT0u", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-yOeBDfuT", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-CEkvD7ji", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-LSj4vjuU", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-wx9Cil7h", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-0OrxkTos", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-XiPf5Qzc", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-bP3raRh5", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-TmMm5IRs", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-kMs7oUyc", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-FXH6HhCo", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-pBcCZM3u", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-f1ICV7by", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-t9ocGXUI", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-bBS0R7Jo", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-WOKgy6lL", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-xq8MNBrf", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-RqW5CdQT", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-DjHfThv6", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-4fV7JhhO", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-CIh1VmGl", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-Fja0oxLN", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-YT2qWYys", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-Iw1tUwU1", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-jT073eRQ", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-m1VX9SVQ", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-1GAlE8b3", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-CigTNiHw", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-Fcx4zauD", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-yXlZLraU", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-SWd2ZOtA", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-G0tW1vi9", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-mhJR81sX", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-GGRwuMUH", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-LItfr906", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-JfMn3byn", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-b2mGXl00", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-JZZPvJSn", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-e99yehZi", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-Ce23oR7X", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-vm0g164A", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-tyZ32xlk", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-SYxzErpC", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-Tl6js63Z", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-tygK2Xfx", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-BtGbKQ1K", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-hnPqnhF9", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-onGc027l", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-hZgDK2oj", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-eGVR5ws2", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-tfC9xuBG", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-jRsOPeWF", name:"EasyNusuk user", country:"Nigeria", countryCode:"NG", live:true},
    {code:"NG-HYwJinFV", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-UlIBacve", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-saifsaif", name:"EasyNusuk user", country:"Nigeria", countryCode:"NG", live:true, featured:true},
    {code:"NG-JI2sxBiL", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-1xBYoDzv", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-zpZ0mPUq", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-JkJcitW6", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-uRA2OoVX", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-xw5U5hsY", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-Uxt6lvQd", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-Hu14mXyg", name:"EasyNusuk user", country:"Bangladesh", countryCode:"BD", live:true},
    {code:"NG-6SDteVg8", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-tTQLEo43", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-UMsc0g2Y", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-YRCDKtsP", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-YbtruJvK", name:"nusukkey.xyz", country:"Other", countryCode:"", live:true},
    {code:"NG-4b44eMFr", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-FaRmnsvn", name:"EasyNusuk user", country:"Egypt", countryCode:"EG", live:true},
    {code:"NG-URfaWiit", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-9TUd12p5", name:"EasyNusuk user", country:"Egypt", countryCode:"EG", live:true},
    {code:"NG-5Fj1p1Nt", name:"EasyNusuk user", country:"Egypt", countryCode:"EG", live:true},
    {code:"NG-kKMD6NOd", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-Z79R1PTx", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-IGTEdlvS", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-5qfWtX6D", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-S1VQ17HL", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-5gH5KCD2", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-uLz7c28M", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-YZrdt3ol", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-5cNV5FDt", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-k40iUC8G", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-qxDfDpr6", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-aG4wnIEB", name:"EasyNusuk user", country:"Egypt", countryCode:"EG", live:true},
    {code:"NG-1EDleCI6", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-nHjPZTCL", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-gxynG1A1", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-nY9vfkAQ", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-yZ22Efm3", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-wfM1WKIW", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-rDGkLc8A", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-XqhEJWi7", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-fpuKOLwJ", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-uJBWIpFF", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-9571Mi3n", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-ZdFfDp04", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-CPKNxARx", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-XT90Fe2P", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-sXpIXqSG", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-l6AF3S6e", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-qic2aZAt", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-MwvSHxxh", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-PXPnaJk6", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-JBFe0Xik", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-Ef7G7i95", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-CzrR0kbn", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-gKmyzBEw", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-HznZZdm1", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-Y6IWVlHJ", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-kjufLxmP", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-GZpwSmwJ", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-l01t29ky", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-OTyQoARv", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-oFsvac9P", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-QAqXJUgt", name:"EasyNusuk user", country:"Other", countryCode:"", live:true},
    {code:"NG-NTFKyhwv", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-Sa4iH2da", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true},
    {code:"NG-3yhD7KSb", name:"EasyNusuk user", country:"Pakistan", countryCode:"PK", live:true}
  ];
  var usedToday = 0, DAILY_LIMIT = 50, activeFilter = "All";
  function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  function initials(name){ var p = name.trim().split(/\s+/); return ((p[0]||"U").charAt(0) + (p[1] ? p[1].charAt(0) : "")).toUpperCase(); }
  function cardHTML(c, isFeatured){
    var t = T();
    var badge = isFeatured ? '<span class="vip">★ FEATURED</span>' : (c.fresh ? '<span class="newtag">NEW</span>' : '');
    var flag = FLAGS[c.country] || "🌍";
    return '<article class="code-card' + (isFeatured ? " featured" : "") + (c.used ? " used" : "") + '">'
      + '<div class="code-top"><div class="avatar" aria-hidden="true">' + esc(initials(c.name)) + '</div>'
      + '<div class="who"><b>' + esc(c.name) + '</b><span>' + flag + ' ' + esc(c.country) + '</span></div>' + badge + '</div>'
      + '<div class="codetext mono">' + esc(c.code) + '</div>'
      + '<div class="code-meta"><span>' + (c.when ? "Added " + esc(c.when) : "Community code") + '</span><span>' + (c.reports ? c.reports + ' report' + (c.reports>1?"s":"") : (c.live ? "Live" : "Community code")) + '</span></div>'
      + '<div class="code-actions"><button type="button" class="copy-btn" data-copy="' + esc(c.code) + '">' + (c.used ? t.copied : t.copy) + '</button>'
      + '<a class="open-btn" href="https://hajj.nusuk.sa" target="_blank" rel="noopener">' + t.open + '</a>'
      + '<button type="button" class="report-btn" data-report="' + esc(c.code) + '">' + t.report + '</button></div></article>';
  }
  function render(){
    if (!$("featured-grid")) return;
    var feat = codes.filter(function(c){ return c.featured && !c.hidden; });
    var rest = codes.filter(function(c){ return !c.featured && !c.hidden; });
    if (activeFilter !== "All") rest = rest.filter(function(c){ return c.country === activeFilter; });
    $("featured-grid").innerHTML = feat.map(function(c){ return cardHTML(c, true); }).join("");
    $("code-grid").innerHTML = rest.map(function(c){ return cardHTML(c, false); }).join("");
    $("empty-note").style.display = rest.length ? "none" : "block";
    var seenCodes = {};
    $("stat-ready").textContent = codes.filter(function(c){
      if (c.hidden || c.used || seenCodes[c.code]) return false;
      seenCodes[c.code] = 1;
      return true;
    }).length;
  }
  var countries = ["All","Pakistan","Indonesia","Bangladesh","India","Malaysia","Nigeria","Egypt","Türkiye","UAE","Saudi Arabia","United Kingdom","United States","Kuwait","Kazakhstan","Other"];
  $("filters").innerHTML = countries.map(function(c){
    var label = c === "All" ? "🌐 All" : (FLAGS[c] || "") + " " + c;
    return '<button type="button" class="fchip" data-filter="' + c + '" aria-pressed="' + (c==="All") + '">' + label + '</button>';
  }).join("");

  /* ticker */
  function renderTicker(){
    var items = codes.map(function(c){ return '<span><b>' + esc(c.code) + '</b>' + (FLAGS[c.country]||"") + ' ' + esc(c.country) + '</span>'; }).join("");
    $("ticker-track").innerHTML = items + items;
  }
  renderTicker();

  /* ================= LIVE BACKEND (Google Apps Script + Sheet) ================= */
  var BACKEND_URL = "https://script.google.com/macros/s/AKfycby-vxGqdl9HSMwh0oTALOD3AxnDZBwRcZWxAnEG-mrCDzNLeNR0EXhv_fUL6dTNSlk7/exec";
  var COUNTRY_CODES = {"Pakistan":"PK","Indonesia":"ID","Bangladesh":"BD","India":"IN","Malaysia":"MY","Nigeria":"NG","Egypt":"EG","Türkiye":"TR","Turkey":"TR","UAE":"AE","United Arab Emirates":"AE","Saudi Arabia":"SA","United Kingdom":"GB","United States":"US","Kuwait":"KW","Kazakhstan":"KZ"};
  function countryCodeFor(country){
    for (var i=0;i<codes.length;i++) if (codes[i].country === country && codes[i].countryCode) return codes[i].countryCode;
    return COUNTRY_CODES[country] || "";
  }
  function normalizeCountry(n){
    n = (n || "").trim();
    if (!n) return "Other";
    if (n === "Turkey") return "Türkiye";
    if (n === "United Arab Emirates") return "UAE";
    return n;
  }
  /* POST as text/plain so the browser sends no CORS preflight; Apps Script replies with JSON. */
  function postBackend(payload){
    return fetch(BACKEND_URL, {
      method: "POST",
      headers: {"Content-Type": "text/plain;charset=utf-8"},
      body: JSON.stringify(payload)
    }).then(function(r){
      return r.json().catch(function(){ return {}; });
    }).then(function(d){
      if (d && d.ok === false){
        var e = new Error("backend");
        e.serverMessage = d.message || d.error || "";
        throw e;
      }
      return d;
    });
  }
  /* On load, merge the live codes from the backend into the list already
     built into the page (the same 132 real community codes are baked in, so
     the page shows real, working codes instantly — even on a slow
     connection, and even if the backend fetch fails completely).
     The merge never removes the Featured codes or a code the visitor
     just submitted, and it keeps each code's used / reported state.
     A failed fetch is retried once before giving up. */
  function loadBackendCodes(attempt){
    fetch(BACKEND_URL).then(function(r){ return r.json(); }).then(function(d){
      if (!d || d.ok !== true || !Array.isArray(d.codes) || !d.codes.length) throw new Error("bad backend reply");
      var seen = {}, list = [];
      d.codes.forEach(function(item){
        if (!item || typeof item.code !== "string") return;
        var code = item.code.trim();
        if (code.indexOf("NG-") !== 0 || seen[code]) return;
        seen[code] = 1;
        list.push({
          code: code,
          name: (typeof item.source === "string" && item.source.trim()) ? item.source.trim() : "Community Member",
          country: normalizeCountry(item.country),
          countryCode: (typeof item.countryCode === "string") ? item.countryCode.trim() : "",
          source: (typeof item.source === "string") ? item.source.trim() : "",
          live: true
        });
      });
      if (!list.length) throw new Error("empty backend list");
      var byCode = {};
      codes.forEach(function(c){ byCode[c.code] = c; });
      var merged = [];
      /* Featured placements stay exactly where they are */
      codes.forEach(function(c){ if (c.featured) merged.push(c); });
      /* Live backend codes, carrying over local state where the code already exists */
      list.forEach(function(item){
        var ex = byCode[item.code];
        if (ex && ex.featured) return;
        if (ex){ item.used = ex.used; item.hidden = ex.hidden; item.reports = ex.reports; item.fresh = ex.fresh; }
        merged.push(item);
      });
      /* Anything already on the page that the backend did not send (e.g. a
         code submitted a moment ago) stays on the list */
      codes.forEach(function(c){ if (!c.featured && !seen[c.code]) merged.push(c); });
      codes = merged;
      render();
      renderTicker();
    }).catch(function(){
      if (!attempt){ setTimeout(function(){ loadBackendCodes(1); }, 3000); }
      /* after the retry: keep the real codes already built into the page */
    });
  }

  document.addEventListener("click", function(e){
    var f = e.target.closest("[data-filter]");
    if (f){
      activeFilter = f.getAttribute("data-filter");
      qsa(".fchip").forEach(function(ch){ ch.setAttribute("aria-pressed", ch===f ? "true" : "false"); });
      render(); return;
    }
    var cp = e.target.closest("[data-copy]");
    if (cp){
      if (usedToday >= DAILY_LIMIT){ toast("Daily limit of 50 copies reached — please try again tomorrow."); return; }
      var code = cp.getAttribute("data-copy"), entry = null;
      for (var j=0;j<codes.length;j++) if (codes[j].code === code) entry = codes[j];
      if (entry && !entry.used){ entry.used = true; usedToday++; $("copy-count").textContent = usedToday; }
      copyText(code, code + " copied! Now open the Nusuk app and paste it in the competition section — you both earn +1 key.");
      render(); return;
    }
    var rp = e.target.closest("[data-report]");
    if (rp){
      var rc = rp.getAttribute("data-report"), reportMsg = null;
      for (var k=0;k<codes.length;k++){
        if (codes[k].code === rc){
          codes[k].reports = (codes[k].reports||0) + 1;
          if (codes[k].reports >= 2) codes[k].hidden = true;
          reportMsg = codes[k].hidden ? "Report received — this code has been removed from the list. Thank you!" : "Report received. If this code is reported again, it will be removed.";
        }
      }
      render();
      if (reportMsg){
        postBackend({action:"report", code:rc}).then(function(){
          toast(reportMsg);
        }, function(){
          toast("Your report could not be sent — please check your internet connection and try again.");
        });
      }
      return;
    }
  });

  /* ================= COUNTDOWN (local timezone) ================= */
  function pad(n){ return (n<10 ? "0" : "") + n; }
  function tick(){
    var diff = END - Date.now(); if (diff < 0) diff = 0;
    var d = Math.floor(diff/86400000), h = Math.floor(diff/3600000)%24, m = Math.floor(diff/60000)%60, s = Math.floor(diff/1000)%60;
    qsa(".cd-days").forEach(function(el){ el.textContent = d; });
    qsa(".cd-hours").forEach(function(el){ el.textContent = pad(h); });
    qsa(".cd-mins").forEach(function(el){ el.textContent = pad(m); });
    qsa(".cd-secs").forEach(function(el){ el.textContent = pad(s); });
  }
  (function(){
    var endLocal = new Date(END).toLocaleString(undefined, {day:"numeric", month:"short", year:"numeric", hour:"numeric", minute:"2-digit", timeZoneName:"short"});
    var en = qs(".countbar .endnote");
    if (en) en.textContent = "Ends " + endLocal + " (your local time)";
  })();
  tick(); setInterval(tick, 1000);

  /* ================= FORMS ================= */
  /* Nusuk codes are case-sensitive: keep the code exactly as typed, never change its case. */
  var CODE_RE = /^NG-[A-Za-z0-9]{8}$/;
  function validateCode(raw){ var v = (raw||"").trim(); return CODE_RE.test(v) ? v : null; }

  var submitBusy = false;
  $("submit-form").addEventListener("submit", function(e){
    e.preventDefault();
    if (submitBusy) return;
    var form = e.target, err = $("code-err"), v = validateCode($("f-code").value);
    if (!v){ err.textContent = "Please write the code in the right format: NG- followed by 8 characters, typed exactly as in the Nusuk app (codes are case-sensitive), e.g. NG-7mpjM6vp"; err.style.display = "block"; $("f-code").setAttribute("aria-invalid","true"); return; }
    for (var i=0;i<codes.length;i++) if (codes[i].code === v){ err.textContent = "This code is already on the list — duplicates are not accepted."; err.style.display = "block"; return; }
    err.style.display = "none"; $("f-code").removeAttribute("aria-invalid");
    var name = $("f-name").value.trim() || "Community Member";
    var country = $("f-country").value;
    var cc = countryCodeFor(country);
    var btn = form.querySelector(".form-btn"), btnText = btn ? btn.textContent : "";
    submitBusy = true;
    if (btn){ btn.disabled = true; btn.textContent = "Adding your code…"; }
    postBackend({action:"add", code:v, countryCode:cc, country:country}).then(function(){
      submitBusy = false;
      if (btn){ btn.disabled = false; btn.textContent = btnText; }
      codes.unshift({code:v, name:name, country:country, countryCode:cc, when:"just now", fresh:true});
      activeFilter = "All";
      qsa(".fchip").forEach(function(ch){ ch.setAttribute("aria-pressed", ch.getAttribute("data-filter")==="All" ? "true" : "false"); });
      render();
      renderTicker();
      toast("Congratulations! Your code " + v + " is now at the top of the list. Share it and collect keys.");
      form.reset();
      $("codes").scrollIntoView({behavior:"smooth"});
    }, function(postErr){
      submitBusy = false;
      if (btn){ btn.disabled = false; btn.textContent = btnText; }
      err.textContent = (postErr && postErr.serverMessage) ? postErr.serverMessage : "Your code could not be saved — please check your internet connection and try again.";
      err.style.display = "block";
    });
  });

  $("featured-form").addEventListener("submit", function(e){
    e.preventDefault();
    var err = $("order-err"), v = validateCode($("o-code").value);
    if (!v){ err.textContent = "First write your code in the right format: NG- followed by 8 characters, typed exactly as in the Nusuk app (codes are case-sensitive)."; err.style.display = "block"; return; }
    err.style.display = "none";
    var msg = "Assalam o Alaikum! EasyNusuk FEATURED order:\n"
      + "Code: " + v + "\n"
      + "Plan: " + $("o-plan").value + "\n"
      + "Please send me payment details (Payoneer / USDT — or JazzCash / Easypaisa if Pakistan). After payment, please place my code in the Featured section. Thank you!";
    $("order-msg").textContent = msg; $("order-msg").classList.add("show");
    $("order-copy").style.display = "block";
    $("order-copy").onclick = function(){ copyText(msg, "Order message copied — now send it to our team."); };
    toast("Your order message is ready — copy it and send it, payment details will come in reply.");
  });

  function leadHandler(formId, nameId, cityId, monthId, peopleId, msgId, copyId){
    var form = $(formId); if (!form) return;
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var name = $(nameId).value.trim() || "—";
      var msg = "Assalam o Alaikum! I need information about an Umrah package.\n"
        + "Name: " + name + "\n"
        + "City/Country: " + ($(cityId).value.trim() || "—") + "\n"
        + "Travel month: " + $(monthId).value + "\n"
        + "Persons: " + $(peopleId).value + "\n"
        + "Please send the complete package price including flights, a hotel near the Haram, and visa. (via EasyNusuk.com)";
      $(msgId).textContent = msg; $(msgId).classList.add("show");
      $(copyId).style.display = "block";
      $(copyId).onclick = function(){ copyText(msg, "Enquiry copied — now send it to any trusted travel agency."); };
      toast("Your enquiry is ready — copy it and send it to an agency.");
    });
  }
  leadHandler("lead-form","l-name","l-city","l-month","l-people","lead-msg","lead-copy");
  leadHandler("h-lead-form","hl-name","hl-city","hl-month","hl-people","hl-msg","hl-copy");

  /* ================= REVEAL ANIMATIONS ================= */
  var io = null;
  function observeReveals(){
    var els = qsa(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      els.forEach(function(el){ el.classList.add("in"); }); return;
    }
    if (!io){
      io = new IntersectionObserver(function(entries){
        entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
      }, {threshold:.08});
    }
    els.forEach(function(el){ io.observe(el); });
  }


  /* ================= LOCATION PERMISSION MANAGER ================= */
  var userPos = null;
  function locStatus(state, msg){
    qsa("[data-loc-status]").forEach(function(el){
      el.classList.remove("granted","denied","prompt");
      if (state) el.classList.add(state);
      var t = el.querySelector("[data-loc-status-text]"); if (t) t.textContent = msg;
    });
  }
  function locHelpShow(show){
    qsa("[data-loc-help]").forEach(function(el){ el.classList.toggle("show", !!show); });
    var hint = $("pt-city-hint"); if (hint) hint.style.display = show ? "block" : "none";
  }
  var locBusy = false;
  /* ONE shared location flow — every “Use My Location” / Allow / Refresh button on Namaz and Qibla calls this same function. Nothing is stored. */
  function requestLocation(){
    if (locBusy) return;
    if (!navigator.geolocation){
      locStatus("denied","Location: not supported on this device or browser");
      locHelpShow(true);
      toast("This device or browser cannot share location. Please pick your city instead — prayer times and Qibla will update for that city.");
      return;
    }
    locBusy = true;
    locStatus("prompt","Location: waiting for your permission…");
    toast("Your browser will now ask for location permission — tap Allow.");
    navigator.geolocation.getCurrentPosition(function(pos){
      locBusy = false;
      userPos = {lat:pos.coords.latitude, lon:pos.coords.longitude};
      locStatus("granted","Location: allowed ✓ — updated just now");
      locHelpShow(false);
      var acc = pos.coords.accuracy ? " (±" + Math.round(pos.coords.accuracy) + " m accuracy)" : "";
      qsa("[data-loc-coords]").forEach(function(el){ el.textContent = "Your coordinates: " + userPos.lat.toFixed(4) + ", " + userPos.lon.toFixed(4) + acc + ". Used only in your browser for prayer times & Qibla — nothing is stored."; });
      /* One success updates BOTH features at once */
      if (typeof setQibla === "function") setQibla(userPos.lat, userPos.lon, "your location");
      if (typeof loadPrayerTimes === "function") loadPrayerTimes(userPos.lat, userPos.lon, "your location", browserTz());
      toast("Location received — prayer times and Qibla updated for where you are.");
    }, function(err){
      locBusy = false;
      if (err && err.code === 1){ /* PERMISSION_DENIED */
        locStatus("denied","Location: blocked — follow the steps below, or pick a city");
        locHelpShow(true);
        toast("Location is blocked. Follow the steps shown to allow it, or simply pick your city — both work.");
      } else if (err && err.code === 3){
        locStatus("prompt","Location: timed out — please try again");
        locHelpShow(false);
        toast("Location timed out. Move to a clearer signal and tap again, or pick your city.");
      } else {
        locStatus("prompt","Location: could not be detected — please try again");
        toast("Location could not be detected. Please try again, or pick your city.");
      }
    }, {enableHighAccuracy:true, timeout:15000, maximumAge:60000});
  }
  function browserTz(){
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone || null; } catch(e){ return null; }
  }
  /* City-picker fallback — shared by Namaz and Qibla pickers */
  function useCity(lat, lon, label, tzName){
    userPos = {lat:lat, lon:lon};
    locStatus("prompt","Showing: " + label + " (city picked manually)");
    locHelpShow(false);
    if (typeof setQibla === "function") setQibla(lat, lon, label);
    if (typeof loadPrayerTimes === "function") loadPrayerTimes(lat, lon, label, tzName || null);
  }
  if (navigator.permissions && navigator.permissions.query){
    try {
      navigator.permissions.query({name:"geolocation"}).then(function(p){
        function sync(){
          if (p.state === "granted") locStatus("granted","Location: allowed ✓");
          else if (p.state === "denied"){ locStatus("denied","Location: blocked — follow the steps below to allow it"); locHelpShow(true); }
          else locStatus("prompt","Location: not requested yet — tap Allow Location Access");
        }
        sync();
        if (p.addEventListener) p.addEventListener("change", sync); else p.onchange = sync;
      }).catch(function(){});
    } catch(e){}
  }
  qsa("[data-loc-allow],[data-loc-refresh]").forEach(function(b){ b.addEventListener("click", requestLocation); });

  /* ================= QIBLA — great-circle bearing + live compass ================= */
  var KAABA = {lat:21.422487, lon:39.826206};
  var qiblaBearing = 0, deviceHeading = null, compassOn = false;
  function qiblaCalc(lat, lon){
    var p1 = lat*Math.PI/180, p2 = KAABA.lat*Math.PI/180, dl = (KAABA.lon-lon)*Math.PI/180;
    var y = Math.sin(dl), x = Math.cos(p1)*Math.tan(p2) - Math.sin(p1)*Math.cos(dl);
    var brg = (Math.atan2(y,x)*180/Math.PI + 360) % 360;
    var R=6371, dp=(KAABA.lat-lat)*Math.PI/180, dll=(KAABA.lon-lon)*Math.PI/180;
    var a = Math.sin(dp/2)*Math.sin(dp/2) + Math.cos(p1)*Math.cos(p2)*Math.sin(dll/2)*Math.sin(dll/2);
    var dist = Math.round(2*R*Math.asin(Math.sqrt(a)));
    return {bearing:brg, dist:dist};
  }
  /* Build degree ticks inside the rotating ring (every 15°, major every 90°) */
  (function buildTicks(){
    var ring = $("qibla-ring"); if (!ring) return;
    for (var a = 0; a < 360; a += 15){
      if (a === 0 || a === 90 || a === 180 || a === 270) continue; /* cardinals already labelled */
      var tick = document.createElement("span");
      tick.className = "qibla-tick" + (a % 90 === 0 ? " major" : "");
      tick.style.transform = "rotate(" + a + "deg) translateY(-112px)";
      ring.appendChild(tick);
    }
  })();
  function paintNeedle(){ paintCompass(); }
  function paintCompass(){
    var needle = $("qibla-needle"), ring = $("qibla-ring"), dial = $("qibla-dial"), facing = $("qibla-facing");
    var heading = (deviceHeading === null || deviceHeading === undefined || isNaN(deviceHeading)) ? null : ((deviceHeading % 360) + 360) % 360;
    /* Outer ring counter-rotates by -heading so North stays true */
    if (ring) ring.style.transform = "rotate(" + (heading === null ? 0 : -heading).toFixed(1) + "deg)";
    /* Needle / Kaaba marker rotates by bearing - heading */
    var rot = (heading === null) ? qiblaBearing : (qiblaBearing - heading);
    if (needle) needle.style.transform = "translate(-50%,-100%) rotate(" + rot.toFixed(1) + "deg)";
    /* Facing check: within ±10° counts as facing Qibla */
    var isFacing = false;
    if (heading !== null){
      var angular = Math.abs(((qiblaBearing - heading + 180) % 360 + 360) % 360 - 180);
      isFacing = angular <= 10;
    }
    if (dial) dial.classList.toggle("facing", isFacing);
    if (facing){
      facing.classList.toggle("show", isFacing);
      if (isFacing) facing.textContent = "🧭 You are facing Qibla ✓ — bearing " + qiblaBearing.toFixed(1) + "°";
    }
  }
  function setQibla(lat, lon, label){
    var r = qiblaCalc(lat, lon);
    if (r.dist < 2) r.bearing = 0; /* at the Kaaba itself the bearing is undefined — show 0 */
    qiblaBearing = r.bearing;
    var dirs = ["North","North-East","East","South-East","South","South-West","West","North-West"];
    var dir = dirs[Math.round(r.bearing/45)%8];
    paintNeedle();
    if (r.dist < 2){
      $("qibla-result").textContent = (label === "Makkah") ? "Qibla from Makkah: 0° — the Kaaba is here 🕋" : "You are in Makkah — Alhamdulillah, the Kaaba is here 🕋";
      $("qibla-detail").textContent = "Distance to the Kaaba: under 2 km, so the bearing is 0°. Inside Masjid al-Haram, face the Kaaba directly. Use your location or pick your city for your own bearing.";
      return;
    }
    $("qibla-result").textContent = "Qibla from " + label + ": " + r.bearing.toFixed(1) + "° (" + dir + ")";
    $("qibla-detail").textContent = "Distance to Makkah: " + r.dist.toLocaleString() + " km. Manual bearing: face " + r.bearing.toFixed(0) + "° clockwise from North to face the Kaaba. (Reference checks: Karachi ≈ 268°, Jakarta ≈ 295°.)";
  }
  var qc = $("qibla-city");
  if (qc) qc.addEventListener("change", function(){ if(!qc.value) return; var parts = qc.value.split(","); var opt = qc.options[qc.selectedIndex]; useCity(parseFloat(parts[0]), parseFloat(parts[1]), opt.textContent, opt.getAttribute("data-tz")); });
  var ptc = $("pt-city");
  if (ptc) ptc.addEventListener("change", function(){ if(!ptc.value) return; var parts = ptc.value.split(","); var opt = ptc.options[ptc.selectedIndex]; useCity(parseFloat(parts[0]), parseFloat(parts[1]), opt.textContent, opt.getAttribute("data-tz")); });
  var ql = $("qibla-locate");
  if (ql) ql.addEventListener("click", requestLocation);

  /* Live compass — deviceorientationabsolute preferred, with the iOS permission flow */
  var absoluteSeen = false;
  function onOrientation(e, isAbsolute){
    if (isAbsolute) absoluteSeen = true;
    else if (absoluteSeen) return; /* once absolute readings arrive, ignore relative ones */
    else if (e && e.absolute === false && typeof DeviceOrientationEvent !== "undefined") { /* still accept as fallback until absolute arrives */ }
    var h = null;
    if (typeof e.webkitCompassHeading === "number" && !isNaN(e.webkitCompassHeading)) h = e.webkitCompassHeading;
    else if (typeof e.alpha === "number" && !isNaN(e.alpha)) h = 360 - e.alpha;
    if (h === null || isNaN(h)) return;
    deviceHeading = (h + 360) % 360;
    if (!compassOn){
      compassOn = true;
      var cs0 = $("compass-status");
      if (cs0) cs0.textContent = "Live compass is ON. Hold the phone flat and turn yourself until the Kaaba needle points straight up.";
    }
    paintCompass();
    var cs = $("compass-status");
    if (cs && compassOn) cs.textContent = "Live compass ON — phone heading " + Math.round(deviceHeading) + "° · Qibla bearing " + qiblaBearing.toFixed(1) + "°. Turn until the Kaaba needle points straight up — when you are within 10°, “You are facing Qibla” will appear.";
  }
  function onOrientationAbsolute(e){ onOrientation(e, true); }
  function onOrientationPlain(e){ onOrientation(e, false); }
  function startCompass(){
    var cs = $("compass-status");
    function begin(){
      window.addEventListener("deviceorientationabsolute", onOrientationAbsolute, true);
      window.addEventListener("deviceorientation", onOrientationPlain, true);
      if (cs) cs.textContent = "Compass starting… hold the phone flat and move it in a figure-8 (∞) to calibrate.";
      setTimeout(function(){
        if (!compassOn && cs) cs.textContent = "No compass readings arrived — this device or browser may not have a compass sensor. Use the manual bearing instead: face " + qiblaBearing.toFixed(0) + "° clockwise from North.";
      }, 4000);
    }
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function"){
      DeviceOrientationEvent.requestPermission().then(function(res){
        if (res === "granted") begin();
        else if (cs) cs.textContent = "Motion-sensor permission was not granted, so the live compass stays off. Use the manual bearing: face " + qiblaBearing.toFixed(0) + "° clockwise from North.";
      }).catch(function(){ if (cs) cs.textContent = "Compass permission could not be requested on this device. Use the manual bearing number instead."; });
    } else if (typeof DeviceOrientationEvent !== "undefined"){ begin(); }
    else if (cs){ cs.textContent = "This device/browser has no compass sensor. Use the manual bearing: face " + qiblaBearing.toFixed(0) + "° clockwise from North."; }
  }
  var cb = $("qibla-compass");
  if (cb) cb.addEventListener("click", startCompass);

  /* ================= PRAYER TIMES =================
     All times are calculated on the device itself (solar calculation —
     no internet needed, so the cards can never stay blank, and nothing
     links out: the visitor stays on this page). One single calculation
     is used for every place:
     Fajr (Subh-e-Sadiq) and Isha Hanafi (Shafaq-e-Abyad) at 18°,
     Isha Shafi (Shafaq-e-Ahmar) at 12°, Asr Shafi shadow factor 1,
     Asr Hanafi shadow factor 2, and Dahwa-e-Kubra at the midpoint
     between Fajr and Maghrib (sunset) — the Islamic midday. */
  var PT_ALL = ["Fajr","Sunrise","Dahwa","Dhuhr","AsrShafi","Asr","Maghrib","IshaShafi","Isha"];
  var PT_PRAYERS = ["Fajr","Dhuhr","Asr","Maghrib","Isha"];
  var ptLastPlace = {lat:21.4225, lon:39.8262, label:"Makkah", tzName:"Asia/Riyadh"};
  var PT_CALC = {fajr:18, isha:18, ishaShafi:12, asrFactor:2, dahwa:true};
  function tzOffsetHours(tzName, date){
    /* UTC offset (hours) of an IANA zone on a given date, from the browser's
       own Intl data — no network. Falls back to the device's own offset. */
    if (!tzName) return -date.getTimezoneOffset()/60;
    try {
      var parts = new Intl.DateTimeFormat("en-US",{timeZone:tzName,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).formatToParts(date);
      var v = {}; parts.forEach(function(p){ v[p.type] = p.value; });
      var asUTC = Date.UTC(+v.year, +v.month - 1, +v.day, (+v.hour) % 24, +v.minute, +v.second);
      return (asUTC - date.getTime())/3600000;
    } catch(e){ return -date.getTimezoneOffset()/60; }
  }
  function tzDateParts(tzName, date){
    /* {y, m, d, readable} for "today" in the target zone. */
    try {
      var f = new Intl.DateTimeFormat("en-GB",{timeZone:tzName || undefined, day:"2-digit", month:"short", year:"numeric"});
      var readable = f.format(date);
      var p = new Intl.DateTimeFormat("en-US",{timeZone:tzName || undefined, year:"numeric", month:"2-digit", day:"2-digit"}).formatToParts(date);
      var v = {}; p.forEach(function(x){ v[x.type] = x.value; });
      return {y:+v.year, m:+v.month, d:+v.day, readable:readable};
    } catch(e){
      return {y:date.getFullYear(), m:date.getMonth()+1, d:date.getDate(), readable:date.toDateString()};
    }
  }
  function calcPrayerTimes(lat, lon, tzName, method){
    /* Solar prayer-time calculation (PrayTimes algorithm), computed for the
       target location's own date and timezone. */
    function rad(x){ return x*Math.PI/180; } function deg(x){ return x*180/Math.PI; }
    function fix360(a){ return ((a % 360) + 360) % 360; } function fix24(a){ return ((a % 24) + 24) % 24; }
    function fmt(t){
      t = fix24(t); var total = Math.round(t*60), h = Math.floor(total/60) % 24, m = total % 60;
      return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
    }
    var dp = tzDateParts(tzName, new Date());
    var y = dp.y, mo = dp.m, d = dp.d;
    var yy = y, mm = mo; if (mm <= 2){ yy -= 1; mm += 12; }
    var A = Math.floor(yy/100), B = 2 - A + Math.floor(A/4);
    var jd = Math.floor(365.25*(yy + 4716)) + Math.floor(30.6001*(mm + 1)) + d + B - 1524.5 - lon/(15*24);
    var ds = jd - 2451545.0;
    var g = fix360(357.529 + 0.98560028*ds);
    var q = fix360(280.459 + 0.98564736*ds);
    var L = fix360(q + 1.915*Math.sin(rad(g)) + 0.020*Math.sin(rad(2*g)));
    var e = 23.439 - 0.00000036*ds;
    var RA = fix24(deg(Math.atan2(Math.cos(rad(e))*Math.sin(rad(L)), Math.cos(rad(L))))/15);
    var decl = deg(Math.asin(Math.sin(rad(e))*Math.sin(rad(L))));
    var eqt = q/15 - RA; if (eqt > 12) eqt -= 24; if (eqt < -12) eqt += 24;
    var tz = tzOffsetHours(tzName, new Date());
    var noon = fix24(12 - eqt - lon/15 + tz);
    function atAngle(angleDeg, morning){
      var cosH = (Math.sin(rad(angleDeg)) - Math.sin(rad(lat))*Math.sin(rad(decl))) / (Math.cos(rad(lat))*Math.cos(rad(decl)));
      cosH = Math.max(-1, Math.min(1, cosH));
      var H = deg(Math.acos(cosH))/15;
      return morning ? noon - H : noon + H;
    }
    var fajr = atAngle(-method.fajr, true);
    var sunrise = atAngle(-0.833, true);
    var asrFactor = method.asrFactor || 2; /* Hanafi: shadow factor 2 */
    var asrAlt = deg(Math.atan(1/(asrFactor + Math.tan(rad(Math.abs(lat - decl))))));
    var asr = atAngle(asrAlt, false);
    var maghrib = atAngle(-0.833, false);
    var isha = method.ishaMin ? maghrib + method.ishaMin/60 : atAngle(-method.isha, false);
    var timings = {Fajr:fmt(fajr), Sunrise:fmt(sunrise), Dhuhr:fmt(noon), Asr:fmt(asr), Maghrib:fmt(maghrib), Isha:fmt(isha)};
    if (method.dahwa){
      /* Extras: Dahwa-e-Kubra (midpoint Fajr → Maghrib),
         Asr Shafi (shadow factor 1) and Isha Shafi (12°). */
      timings.Dahwa = fmt((fajr + maghrib)/2);
      var asrShafiAlt = deg(Math.atan(1/(1 + Math.tan(rad(Math.abs(lat - decl))))));
      timings.AsrShafi = fmt(atAngle(asrShafiAlt, false));
      if (method.ishaShafi) timings.IshaShafi = fmt(atAngle(-method.ishaShafi, false));
    }
    return {timings:timings, readable:dp.readable};
  }
  function paintPrayerTimes(timings, label, note, tzName){
    PT_ALL.forEach(function(n){ var el = qs('[data-pt="' + n + '"]'); if (el && timings[n]) el.textContent = String(timings[n]).split(" ")[0]; });
    var locEl = $("pt-location"); if (locEl) locEl.textContent = note;
    /* Next obligatory prayer, measured in the target place's own time */
    var nextName = null;
    try {
      var nowParts = new Intl.DateTimeFormat("en-US",{timeZone:tzName || undefined, hour:"2-digit", minute:"2-digit", hour12:false}).format(new Date());
      var np = nowParts.replace(/[^0-9:]/g,"").split(":");
      var nowMin = (+np[0] % 24)*60 + (+np[1]);
      for (var i = 0; i < PT_PRAYERS.length; i++){
        var tp = String(timings[PT_PRAYERS[i]]||"").split(" ")[0].split(":");
        if (tp.length < 2) continue;
        if ((+tp[0])*60 + (+tp[1]) > nowMin){ nextName = PT_PRAYERS[i]; break; }
      }
    } catch(e){}
    if (!nextName) nextName = "Fajr";
    qsa(".prayer-card").forEach(function(c){ c.classList.remove("next"); });
    var nextEl = qs('[data-pt="' + nextName + '"]');
    if (nextEl && nextEl.closest) { var card = nextEl.closest(".prayer-card"); if (card) card.classList.add("next"); }
    var nx = $("pt-next"); if (nx) nx.textContent = "Next prayer: " + nextName + " at " + String(timings[nextName]||"").split(" ")[0] + " (" + label + " time).";
  }
  function loadPrayerTimes(lat, lon, label, tzName){
    ptLastPlace = {lat:lat, lon:lon, label:label, tzName:tzName};
    /* One single calculation for every place, done entirely on the
       device — the cards fill immediately and always show. */
    var calc = calcPrayerTimes(lat, lon, tzName, PT_CALC);
    paintPrayerTimes(calc.timings, label, "Prayer times for " + label + " — " + calc.readable + ".", tzName);
  }
  var pl = $("pt-locate");
  if (pl) pl.addEventListener("click", requestLocation);
  var pm = $("pt-makkah");
  if (pm) pm.addEventListener("click", function(){ loadPrayerTimes(21.4225, 39.8262, "Makkah", "Asia/Riyadh"); });
  loadPrayerTimes(21.4225, 39.8262, "Makkah", "Asia/Riyadh");

  /* ================= QUIZ ================= */
  var QUIZ_UI = {
    en:{score:"Score",q:"Question",of:"of",next:"Next Question →",correct:"✅ Correct! Well done.",wrong:"❌ Not quite. The correct answer is:",done:"Quiz Complete",again:"↻ Play Again",msg1:"Excellent! You know your Deen very well. 🌟",msg2:"Good effort! Keep learning — try again to beat your score.",msg3:"A good start! Read the Guides and Azkar pages, then try again."},
    ar:{score:"النقاط",q:"السؤال",of:"من",next:"السؤال التالي ←",correct:"✅ صحيح! أحسنت.",wrong:"❌ ليست الإجابة الصحيحة. الإجابة الصحيحة هي:",done:"اكتمل الاختبار",again:"↻ العب مرة أخرى",msg1:"ممتاز! معرفتك بدينك قوية جدًا. 🌟",msg2:"محاولة جيدة! واصل التعلم وحاول مرة أخرى.",msg3:"بداية جيدة! اقرأ صفحات الأدلة والأذكار ثم حاول مرة أخرى."},
    ur:{score:"اسکور",q:"سوال",of:"میں سے",next:"اگلا سوال ←",correct:"✅ درست! شاباش۔",wrong:"❌ درست نہیں۔ صحیح جواب ہے:",done:"کوئز مکمل",again:"↻ دوبارہ کھیلیں",msg1:"زبردست! آپ کی دینی معلومات بہت اچھی ہیں۔ 🌟",msg2:"اچھی کوشش! سیکھتے رہیں اور دوبارہ کوشش کریں۔",msg3:"اچھی شروعات! گائیڈز اور اذکار پڑھ کر دوبارہ کوشش کریں۔"},
    id:{score:"Skor",q:"Soal",of:"dari",next:"Soal Berikutnya →",correct:"✅ Benar! Kerja bagus.",wrong:"❌ Kurang tepat. Jawaban yang benar adalah:",done:"Kuis Selesai",again:"↻ Main Lagi",msg1:"Luar biasa! Pengetahuan agama Anda sangat baik. 🌟",msg2:"Usaha yang bagus! Terus belajar dan coba lagi.",msg3:"Awal yang baik! Baca halaman Panduan dan Azkar, lalu coba lagi."},
    bn:{score:"স্কোর",q:"প্রশ্ন",of:"এর মধ্যে",next:"পরের প্রশ্ন →",correct:"✅ সঠিক! খুব ভালো।",wrong:"❌ ঠিক নয়। সঠিক উত্তর হলো:",done:"কুইজ সম্পূর্ণ",again:"↻ আবার খেলুন",msg1:"চমৎকার! আপনার দ্বীনি জ্ঞান খুব ভালো। 🌟",msg2:"ভালো চেষ্টা! শিখতে থাকুন, আবার চেষ্টা করুন।",msg3:"ভালো শুরু! গাইড ও আজকার পড়ে আবার চেষ্টা করুন।"},
    tr:{score:"Puan",q:"Soru",of:"/",next:"Sonraki Soru →",correct:"✅ Doğru! Tebrikler.",wrong:"❌ Tam değil. Doğru cevap:",done:"Test Tamamlandı",again:"↻ Tekrar Oyna",msg1:"Mükemmel! Dini bilginiz çok iyi. 🌟",msg2:"İyi çaba! Öğrenmeye devam edin ve tekrar deneyin.",msg3:"İyi bir başlangıç! Rehberler ve Zikirler sayfalarını okuyup tekrar deneyin."},
    fa:{score:"امتیاز",q:"پرسش",of:"از",next:"پرسش بعدی ←",correct:"✅ درست است! آفرین.",wrong:"❌ درست نیست. پاسخ صحیح این است:",done:"آزمون تمام شد",again:"↻ دوباره بازی کنید",msg1:"عالی! دانش دینی شما بسیار خوب است. 🌟",msg2:"تلاش خوبی بود! به یادگیری ادامه دهید و دوباره تلاش کنید.",msg3:"شروع خوبی است! صفحات راهنما و اذکار را بخوانید و دوباره تلاش کنید."},
    ms:{score:"Markah",q:"Soalan",of:"daripada",next:"Soalan Seterusnya →",correct:"✅ Betul! Tahniah.",wrong:"❌ Kurang tepat. Jawapan yang betul ialah:",done:"Kuiz Selesai",again:"↻ Main Semula",msg1:"Cemerlang! Pengetahuan agama anda sangat baik. 🌟",msg2:"Usaha yang baik! Terus belajar dan cuba lagi.",msg3:"Permulaan yang baik! Baca halaman Panduan dan Azkar, kemudian cuba lagi."},
    ha:{score:"Maki",q:"Tambaya",of:"daga",next:"Tambaya ta Gaba →",correct:"✅ Daidai ne! Madalla.",wrong:"❌ Ba daidai ba. Amsa daidai ita ce:",done:"An Kammala Tambayoyi",again:"↻ Sake Yin Wasa",msg1:"Madalla! Ilimin addininka yana da kyau sosai. 🌟",msg2:"Ƙoƙari mai kyau! Ci gaba da koyo ka sake gwadawa.",msg3:"Fara wa mai kyau! Karanta Jagorori da Azkar sannan ka sake gwadawa."},
    fr:{score:"Score",q:"Question",of:"sur",next:"Question Suivante →",correct:"✅ Correct ! Bravo.",wrong:"❌ Pas tout à fait. La bonne réponse est :",done:"Quiz Terminé",again:"↻ Rejouer",msg1:"Excellent ! Vos connaissances religieuses sont très bonnes. 🌟",msg2:"Bel effort ! Continuez à apprendre et réessayez.",msg3:"Bon début ! Lisez les Guides et les Azkar, puis réessayez."}
  };
  var QUIZ_EN = [
    {c:"Hajj",q:"On which date of Zul-Hijjah is the Day of Arafat?",o:["8 Zul-Hijjah","9 Zul-Hijjah","10 Zul-Hijjah","13 Zul-Hijjah"],a:1},
    {c:"Umrah",q:"How many rounds (circuits) are there in Tawaf around the Kaaba?",o:["3","5","7","10"],a:2},
    {c:"Umrah",q:"Sa'i is walked between which two hills?",o:["Noor & Thawr","Safa & Marwah","Uhud & Quba","Arafat & Mina"],a:1},
    {c:"Hajj",q:"At which place do pilgrims stone the pillars (Rami)?",o:["Arafat","Muzdalifah","Mina","Safa"],a:2},
    {c:"Namaz",q:"How many Farz raka'at are there in Fajr prayer?",o:["2","3","4","5"],a:0},
    {c:"Namaz",q:"How many obligatory (Farz) prayers are there each day?",o:["3","4","5","7"],a:2},
    {c:"Namaz",q:"In which direction do Muslims face when praying?",o:["Towards Madinah","Towards the Kaaba in Makkah","Towards the east","Towards Jerusalem"],a:1},
    {c:"Quran",q:"What is the first Surah of the Qur'an?",o:["Al-Baqarah","Al-Fatiha","Ya-Sin","Al-Ikhlas"],a:1},
    {c:"Quran",q:"How many Surahs are there in the Qur'an?",o:["99","110","114","120"],a:2},
    {c:"Quran",q:"Which is the longest Surah of the Qur'an?",o:["Aal-e-Imran","An-Nisa","Al-Baqarah","Al-Ma'idah"],a:2},
    {c:"Islamic History",q:"In which city was Prophet Muhammad ﷺ born?",o:["Madinah","Taif","Makkah","Jerusalem"],a:2},
    {c:"Islamic History",q:"In which Hijri year was the Battle of Badr fought?",o:["1 AH","2 AH","5 AH","8 AH"],a:1}
  ];
  var QUIZ_AR = [
    {c:"الحج",q:"في أي تاريخ من ذي الحجة يكون يوم عرفة؟",o:["٨ ذي الحجة","٩ ذي الحجة","١٠ ذي الحجة","١٣ ذي الحجة"],a:1},
    {c:"العمرة",q:"كم عدد أشواط الطواف حول الكعبة؟",o:["٣","٥","٧","١٠"],a:2},
    {c:"العمرة",q:"يكون السعي بين أي جبلين؟",o:["النور وثور","الصفا والمروة","أحد وقباء","عرفات ومنى"],a:1},
    {c:"الحج",q:"أين يرمي الحجاج الجمرات؟",o:["عرفات","مزدلفة","منى","الصفا"],a:2},
    {c:"الصلاة",q:"كم عدد ركعات فرض صلاة الفجر؟",o:["٢","٣","٤","٥"],a:0},
    {c:"الصلاة",q:"كم عدد الصلوات المفروضة كل يوم؟",o:["٣","٤","٥","٧"],a:2},
    {c:"الصلاة",q:"إلى أي اتجاه يتجه المسلمون في الصلاة؟",o:["نحو المدينة","نحو الكعبة في مكة","نحو الشرق","نحو القدس"],a:1},
    {c:"القرآن",q:"ما هي أول سورة في القرآن؟",o:["البقرة","الفاتحة","يس","الإخلاص"],a:1},
    {c:"القرآن",q:"كم عدد سور القرآن؟",o:["٩٩","١١٠","١١٤","١٢٠"],a:2},
    {c:"القرآن",q:"ما هي أطول سورة في القرآن؟",o:["آل عمران","النساء","البقرة","المائدة"],a:2},
    {c:"التاريخ الإسلامي",q:"في أي مدينة وُلد النبي محمد ﷺ؟",o:["المدينة","الطائف","مكة","القدس"],a:2},
    {c:"التاريخ الإسلامي",q:"في أي سنة هجرية وقعت غزوة بدر؟",o:["١ هـ","٢ هـ","٥ هـ","٨ هـ"],a:1}
  ];
  var QUIZ_UR = [
    {c:"حج",q:"یومِ عرفہ ذوالحجہ کی کس تاریخ کو ہوتا ہے؟",o:["8 ذوالحجہ","9 ذوالحجہ","10 ذوالحجہ","13 ذوالحجہ"],a:1},
    {c:"عمرہ",q:"طواف میں کعبہ کے گرد کتنے چکر ہوتے ہیں؟",o:["3","5","7","10"],a:2},
    {c:"عمرہ",q:"سعی کن دو پہاڑیوں کے درمیان ہوتی ہے؟",o:["نور و ثور","صفا و مروہ","احد و قبا","عرفات و منیٰ"],a:1},
    {c:"حج",q:"حاجی رمی (کنکریاں) کہاں مارتے ہیں؟",o:["عرفات","مزدلفہ","منیٰ","صفا"],a:2},
    {c:"نماز",q:"فجر کی فرض رکعتیں کتنی ہیں؟",o:["2","3","4","5"],a:0},
    {c:"نماز",q:"ہر دن فرض نمازیں کتنی ہیں؟",o:["3","4","5","7"],a:2},
    {c:"نماز",q:"نماز میں مسلمان کس طرف منہ کرتے ہیں؟",o:["مدینہ کی طرف","مکہ میں کعبہ کی طرف","مشرق کی طرف","بیت المقدس کی طرف"],a:1},
    {c:"قرآن",q:"قرآن کی پہلی سورت کون سی ہے؟",o:["البقرہ","الفاتحہ","یٰس","الاخلاص"],a:1},
    {c:"قرآن",q:"قرآن میں کل کتنی سورتیں ہیں؟",o:["99","110","114","120"],a:2},
    {c:"قرآن",q:"قرآن کی سب سے لمبی سورت کون سی ہے؟",o:["آل عمران","النساء","البقرہ","المائدہ"],a:2},
    {c:"اسلامی تاریخ",q:"نبی کریم ﷺ کس شہر میں پیدا ہوئے؟",o:["مدینہ","طائف","مکہ","بیت المقدس"],a:2},
    {c:"اسلامی تاریخ",q:"غزوہ بدر کس ہجری سال میں ہوا؟",o:["1 ہجری","2 ہجری","5 ہجری","8 ہجری"],a:1}
  ];
  var quizIdx = 0, quizScore = 0, quizAnswered = false, quizStarted = false;
  function quizData(){ if (curLang === "ar") return QUIZ_AR; if (curLang === "ur") return QUIZ_UR; return QUIZ_EN; }
  function quizUI(){ return QUIZ_UI[curLang] || QUIZ_UI.en; }
  function renderQuiz(){
    var data = quizData(), ui = quizUI();
    if (!quizStarted){ quizStarted = true; quizIdx = 0; quizScore = 0; }
    if (quizIdx >= data.length){ showQuizResult(); return; }
    $("quiz-result").style.display = "none"; $("quiz-card").style.display = "block";
    quizAnswered = false;
    var item = data[quizIdx];
    $("quiz-cat").textContent = item.c;
    $("quiz-progress-text").textContent = ui.q + " " + (quizIdx+1) + " " + ui.of + " " + data.length;
    $("quiz-score").textContent = ui.score + ": " + quizScore;
    $("quiz-progress-bar").style.width = ((quizIdx)/data.length*100) + "%";
    $("quiz-question").textContent = item.q;
    var fb = $("quiz-feedback"); fb.className = "quiz-feedback"; fb.textContent = "";
    $("quiz-next").style.display = "none";
    $("quiz-opts").innerHTML = item.o.map(function(opt, i){ return '<button type="button" class="quiz-opt" data-opt="' + i + '">' + esc(opt) + '</button>'; }).join("");
  }
  function showQuizResult(){
    var data = quizData(), ui = quizUI();
    $("quiz-card").style.display = "none"; $("quiz-result").style.display = "block";
    $("quiz-done-label").textContent = ui.done;
    $("quiz-final-score").textContent = quizScore + " / " + data.length;
    $("quiz-final-msg").textContent = quizScore >= 10 ? ui.msg1 : (quizScore >= 6 ? ui.msg2 : ui.msg3);
    var rb = $("quiz-restart"); rb.textContent = ui.again;
    rb.onclick = function(){ quizIdx = 0; quizScore = 0; quizStarted = true; renderQuiz(); };
  }
  document.addEventListener("click", function(e){
    var opt = e.target.closest("[data-opt]");
    if (!opt || quizAnswered) return;
    quizAnswered = true;
    var data = quizData(), ui = quizUI(), item = data[quizIdx];
    var chosen = parseInt(opt.getAttribute("data-opt"), 10);
    var opts = qsa(".quiz-opt");
    opts.forEach(function(b){ b.disabled = true; });
    var fb = $("quiz-feedback");
    if (chosen === item.a){
      opt.classList.add("correct"); quizScore++;
      fb.textContent = ui.correct; fb.className = "quiz-feedback show ok";
    } else {
      opt.classList.add("wrong"); if (opts[item.a]) opts[item.a].classList.add("correct");
      fb.textContent = ui.wrong + " " + item.o[item.a]; fb.className = "quiz-feedback show bad";
    }
    $("quiz-score").textContent = ui.score + ": " + quizScore;
    $("quiz-progress-bar").style.width = ((quizIdx+1)/data.length*100) + "%";
    var nb = $("quiz-next"); nb.textContent = (quizIdx === data.length-1) ? ui.done + " ✓" : ui.next; nb.style.display = "block";
  });
  var qn = $("quiz-next");
  if (qn) qn.addEventListener("click", function(){ quizIdx++; renderQuiz(); });
  var qr = $("quiz-restart");
  if (qr) qr.addEventListener("click", function(){ quizIdx = 0; quizScore = 0; quizStarted = true; renderQuiz(); });
  // re-render quiz when language changes
  var oldApply = applyLang;
  applyLang = function(lang){ oldApply(lang); quizIdx = 0; quizScore = 0; quizStarted = true; if (!$("view-quiz").hidden) renderQuiz(); else { var qc2 = $("quiz-card"); if (qc2) renderQuiz(); } };


  /* ================= INIT ================= */
  render();
  loadBackendCodes();
  if (typeof setQibla === "function") setQibla(21.4225,39.8262,"Makkah");
  showView(defaultView());
  observeReveals();
})();
