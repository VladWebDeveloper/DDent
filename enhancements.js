/* DDent Studio enhancements — progressive, accessible, no marketing trackers */
(function(){
"use strict";
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const content=window.DDENT_CONTENT||{reviews:[],cases:[],videos:[],socials:[]};
let lang=(()=>{try{return localStorage.getItem("ddent_lang")||"ro"}catch{return "ro"}})();
if(!["ro","ru","en"].includes(lang))lang="ro";
const inLang=(ro,en,ru)=>({ro,en,ru})[lang];
const T={
 "Filosofia noastră":["Our philosophy","Наша философия"],"Servicii":["Services","Услуги"],"Experiența DDent":["The DDent experience","Опыт DDent"],"Recenzii":["Reviews","Отзывы"],"Contact":["Contact","Контакты"],"Programează-te":["Book a visit","Записаться"],
 "DDent Stomatologie · Chișinău":["DDent Dentistry · Chișinău","DDent Стоматология · Кишинёв"],"Grija":["Care","Забота"],"se vede":["is in every","видна"],"în":["in","в"],"zâmbet.":["smile.","улыбке."],
 "Mai mult decât o vizită la stomatolog. Un loc în care atenția, timpul și încrederea fac parte din îngrijire.":["More than a dentist appointment. A place where attention, time and trust are part of your care.","Больше, чем приём у стоматолога. Место, где внимание, время и доверие — часть заботы."],
 "Programează o consultație":["Book a consultation","Записаться на консультацию"],"Descoperă DDent":["Discover DDent","Откройте DDent"],
 "DESCARCĂ GHIDUL GRATUIT DE PREVENȚIE (PDF)":["DOWNLOAD THE FREE PREVENTION GUIDE (PDF)","СКАЧАТЬ БЕСПЛАТНЫЙ ГИД (PDF)"],
 "Calm înainte de toate":["Calm comes first","Спокойствие прежде всего"],"Îngrijire atentă":["Thoughtful care","Внимательный уход"],"Un plan pentru tine":["A plan for you","План для вас"],"Din 2016 în Chișinău":["In Chișinău since 2016","В Кишинёве с 2016 года"],
 "01 / FILOSOFIA NOASTRĂ":["01 / OUR PHILOSOPHY","01 / НАША ФИЛОСОФИЯ"],"Întâi,":["First,","Сначала"],"te ascultăm.":["we listen.","мы слушаем."],
 "Fiecare pacient vine cu o poveste diferită. La DDent, primul pas este să înțelegem nevoile tale, să discutăm opțiunile și să găsim împreună direcția potrivită pentru sănătatea ta orală.":["Every patient has a different story. At DDent we begin by listening, exploring your options, and helping you understand the next step in your oral care.","У каждого пациента своя история. В DDent мы сначала выслушиваем вас, обсуждаем варианты и вместе находим подходящий путь к здоровью полости рта."],
 "Fondată în 2016 de medicul stomatolog Andrei Dumbravă, clinica oferă o gamă amplă de servicii dentare într-un cadru dedicat îngrijirii individuale.":["Founded in 2016 by dentist Andrei Dumbravă, the clinic offers a broad range of dental services with a personal approach.","Основанная в 2016 году стоматологом Андреем Думбравэ, клиника предлагает широкий спектр услуг с индивидуальным подходом."],
 "Personal. Atent. Fără grabă.":["Personal. Attentive. Unhurried.","Индивидуально. Внимательно. Без спешки."],
 "Imagine ilustrativă / experiență pacient":["Illustrative image / patient experience","Иллюстративное изображение"],"ANUL ÎNFIINȚĂRII":["FOUNDED","ГОД ОСНОВАНИЯ"],
 "O EXPERIENȚĂ CENTRATĂ PE OM":["PEOPLE COME FIRST","НА ПЕРВОМ МЕСТЕ — ЛЮДИ"],"Nu doar despre dinți.":["Not just about teeth.","Не только о зубах."],"Despre tine.":["About you.","О вас."],"FOTOGRAFIE ILUSTRATIVĂ · PEXELS":["ILLUSTRATIVE PHOTO · PEXELS","ИЛЛЮСТРАТИВНОЕ ФОТО · PEXELS"],
 "04 / VIZITEAZĂ-NE":["06 / FIND US","06 / КОНТАКТЫ"],"Ne vedem":["See you","До встречи"],"la DDent.":["at DDent.","в DDent."],
 "Luni — Vineri":["Monday — Friday","Понедельник — пятница"],"Sâmbătă":["Saturday","Суббота"],"ADRESĂ":["ADDRESS","АДРЕС"],"TELEFON":["PHONE","ТЕЛЕФОН"],"E-MAIL":["EMAIL","ЭЛ. ПОЧТА"],
 "Strada Albișoara 82/6, oficiul 4":["82/6 Albișoara Street, office 4","ул. Албишоара 82/6, офис 4"],"Chișinău, Republica Moldova":["Chișinău, Republic of Moldova","Кишинёв, Республика Молдова"],
 "DDent Stomatologie":["DDent Dentistry","DDent Стоматология"],"Albișoara 82/6, of. 4 · Chișinău":["82/6 Albișoara, office 4 · Chișinău","Албишоара 82/6, офис 4 · Кишинёв"],
 "URMĂTORUL PAS":["THE NEXT STEP","СЛЕДУЮЩИЙ ШАГ"],"Ai grijă de zâmbetul":["Take care of your","Заботьтесь о"],"tău, de azi.":["smile, starting today.","улыбке уже сегодня."],"Sună pentru o programare":["Call to book","Позвонить для записи"],
 "Un zâmbet sănătos începe cu o conversație.":["A healthy smile starts with a conversation.","Здоровая улыбка начинается с разговора."],
 "LINKURI":["EXPLORE","РАЗДЕЛЫ"],"Despre noi":["About us","О нас"],"Program & locație":["Hours & location","Время работы и адрес"],"VORBIM?":["LET'S TALK","СВЯЗАТЬСЯ"],
 "Toate drepturile rezervate.":["All rights reserved.","Все права защищены."],"Site oficial":["Official website","Официальный сайт"],
 "Îngrijire atentă, în fiecare etapă":["Thoughtful care at every step","Забота на каждом этапе"],
 "Cazurile reale vor fi adăugate cu permisiunea scrisă a pacienților.":["Real cases will be added with patients' written permission.","Реальные случаи будут добавлены с письменного согласия пациентов."],
 "05 / REZULTATE DIN CABINET":["05 / CLINICAL STORIES","05 / КЛИНИЧЕСКИЕ ИСТОРИИ"],
 "Cazuri care spun":["Cases that tell","Истории, которые"],"povești reale.":["real stories.","говорят сами за себя."],
 "O galerie pregătită pentru fotografii reale înainte și după, exclusiv cu acordul pacientului. Fără simulări prezentate drept rezultate clinice.":["A future gallery of real before-and-after images, only with patient consent. No simulations presented as clinical outcomes.","Будущая галерея реальных фото до и после лечения — только с согласия пациентов. Без симуляций, выдаваемых за результаты."],
 "Explorează galeria":["Explore the gallery","Открыть галерею"],
 "06 / POVESTI VIDEO":["06 / VIDEO STORIES","06 / ВИДЕООТЗЫВЫ"],
 "Pacienții au":["Patients have","Пациентам есть"],"cuvântul.":["the floor.","что сказать."],
 "Experiențe povestite chiar de pacienți. Fiecare video va putea fi redat doar după apăsarea butonului Play.":["Real patient experiences. Every video will play only after pressing Play.","Истории пациентов из первых уст. Каждое видео запускается только после нажатия Play."],
 "În pregătire":["Coming soon","Скоро"],"Videourile vor fi publicate după confirmarea acordului pacienților.":["Videos will be published after consent is confirmed.","Видео будут опубликованы после подтверждения согласия пациентов."],
 "Mărturii video":["Video testimonials","Видеоотзывы"],
 "03 / CUVINTE CARE CONTEAZĂ":["03 / WORDS THAT MATTER","03 / ВАЖНЫЕ СЛОВА"],
 "Încrederea se":["Trust is","Доверие"],"construiește.":["earned.","заслуживают."],
 "Recenzii Google":["Google reviews","Отзывы Google"],"Din recenziile cu text transmise pentru proiect. Consultați profilul Google pentru lista completă și recenziile originale.":["Excerpts from reviews supplied for this project. See the Google profile for the complete and original reviews.","Фрагменты отзывов, предоставленных для проекта. Полный список и оригиналы доступны в Google."],
 "Pauză":["Pause","Пауза"],"Reia":["Resume","Продолжить"],
 "Specialitățile noastre":["Our specialties","Наши специализации"],"Descoperă îngrijirea":["Discover thoughtful","Забота о"],"care ți se potrivește.":["care for every need.","ваших потребностях."],
 "Alege un serviciu pentru a afla cum se desfășoară evaluarea și ce variante poate discuta medicul cu tine.":["Select a specialty to learn about assessment and options to discuss with your dentist.","Выберите направление, чтобы узнать об обследовании и возможностях лечения."],
 "Vezi detalii":["Discover more","Подробнее"],"Informații generale, fără înlocuirea consultului medical.":["General information, not a substitute for medical advice.","Общая информация, не заменяющая консультацию врача."],
 "02 / SPECIALITĂȚI":["02 / SPECIALTIES","02 / НАПРАВЛЕНИЯ"],
 "Mai multă":["More than","Больше, чем"],"grijă la fiecare pas.":["a routine visit.","обычный приём."],
 "Consultația inițială":["Initial consultation","Первичная консультация"],"Discutăm istoricul și nevoile, apoi medicul recomandă pașii următori.":["We discuss your needs and a clinician recommends next steps.","Обсуждаем потребности, затем врач рекомендует дальнейшие шаги."],
 "Planificare individuală":["Individual planning","Индивидуальный план"],"Opțiunile sunt adaptate rezultatului evaluării clinice.":["Options depend on your clinical assessment.","Варианты зависят от клинической оценки."],
 "Comunicare clară":["Clear communication","Понятное общение"],"Explicăm procedurile și îți răspundem la întrebări.":["We explain procedures and answer your questions.","Объясняем процедуры и отвечаем на вопросы."],
 "GHID GRATUIT · PREVENȚIE":["FREE GUIDE · PREVENTION","БЕСПЛАТНЫЙ ГИД · ПРОФИЛАКТИКА"],
 "Un pas simplu pentru":["A simple step toward","Простой шаг к"],"un zâmbet sănătos.":["a healthy smile.","здоровой улыбке."],
 "Descoperă patru obiceiuri esențiale de îngrijire orală, într-un ghid gratuit, ușor de păstrat pe telefon.":["Four essential oral-care habits in a free guide you can keep on your phone.","Четыре важных привычки ухода за полостью рта в бесплатном гиде."],
 "DESCARCĂ PDF GRATUIT":["DOWNLOAD FREE PDF","СКАЧАТЬ PDF БЕСПЛАТНО"],
 "Disponibil fără înregistrare.":["No sign-up required.","Без регистрации."],
 "07 / OAMENII DIN SPATELE ÎNGRIJIRII":["07 / YOUR DENTAL TEAM","07 / НАША КОМАНДА"],
 "Oameni cărora le":["People you can","Люди, которым"],"poți vorbi.":["talk to.","можно доверять."],
 "Contact direct cu medicii prezentați pe website-ul oficial DDent.":["Direct contact with the clinicians listed on the official DDent website.","Прямой контакт с врачами, указанными на официальном сайте DDent."],
 "MEDIC STOMATOLOG":["DENTIST","СТОМАТОЛОГ"],
 "FACEBOOK OFICIAL":["OFFICIAL FACEBOOK","ОФИЦИАЛЬНЫЙ FACEBOOK"],"INSTAGRAM OFICIAL":["OFFICIAL INSTAGRAM","ОФИЦИАЛЬНЫЙ INSTAGRAM"],
 "Confidențialitate":["Privacy policy","Конфиденциальность"],"Termeni de utilizare":["Terms of use","Условия использования"],"Cookie-uri":["Cookies","Файлы cookie"],
 "Materialele medicale și cifrele statistice necesită validarea clinicii înainte de lansarea pe domeniul oficial.":["Medical materials and statistical figures require clinic approval before going live on the official domain.","Медицинские материалы и статистика должны быть подтверждены клиникой до публикации на официальном домене."],
 "ANII DE PRACTICĂ":["YEARS IN PRACTICE","ЛЕТ ПРАКТИКИ"],"PACIENȚI TRATAȚI":["PATIENTS TREATED","ПАЦИЕНТОВ ПРОШЛИ ЛЕЧЕНИЕ"],"CLINICĂ ÎNFIINȚATĂ":["CLINIC FOUNDED","КЛИНИКА ОСНОВАНА"],
 "Cifre transmise pentru concept; confirmarea lor în scris de către clinică este necesară înainte de publicarea oficială.":["Figures supplied for the concept; written clinic confirmation is required before official publication.","Цифры предоставлены для концепта; перед публикацией необходимо письменное подтверждение клиники."],
 "FOTOGRAFII ÎN PREGĂTIRE":["PHOTOS COMING SOON","ФОТОГОТОВЯТСЯ"],"Nu sunt disponibile încă fotografii clinice autorizate pentru publicare.":["Authorized clinical photos have not been supplied yet.","Разрешённые для публикации клинические фото пока не предоставлены."],
 "Povestea următoare":["The next story","Следующая история"],"încă se scrie.":["is coming.","скоро появится."],
 "Demo de structură — nu prezintă cazuri reale.":["Layout preview — not real cases.","Предпросмотр структуры — не реальные случаи."]
};
Object.assign(T,{
 "Specialitățile":["Our","Наши"],"noastre.":["specialties.","специализации."],
 "Cazuri":["Cases","Кейсы"],"GRIJA DDENT / PAS CU PAS":["DDENT CARE / STEP BY STEP","ЗАБОТА DDENT / ШАГ ЗА ШАГОМ"],
 "De la prima conversație până la recomandările de îngrijire, fiecare etapă începe cu înțelegerea nevoilor pacientului.":["From the first conversation to ongoing care, every step begins with understanding the patient.","От первого разговора до ухода — каждый этап начинается с понимания потребностей пациента."],
 "fragmente · 45 recenzii Google":["excerpts · 45 Google reviews","фрагментов · 45 отзывов Google"],
 "Următorul caz ↗":["Next case ↗","Следующий случай ↗"],
 "Etapele orientative":["Typical steps","Этапы лечения"],
 "DDENT / SPECIALITATE":["DDENT / SPECIALTY","DDENT / НАПРАВЛЕНИЕ"],
 "Informațiile sunt generale. Un plan de tratament se stabilește doar după consultație.":["This is general information. Only a dentist can create an individualized treatment plan.","Это общая информация. Индивидуальный план лечения составляется после консультации."],
 "Programează o consultație ↗":["Book a consultation ↗","Записаться на консультацию ↗"],
 "Recenzii Google ↗":["Google reviews ↗","Отзывы Google ↗"]
});
Object.assign(T,{
 "Sari la conținut":["Skip to content","Перейти к содержимому"],
 "ANUL":["YEAR","ГОД"],"ÎNFIINȚĂRII":["FOUNDED","ОСНОВАНИЯ"],
 "DESCARCĂ PDF GRATUIT ↗":["DOWNLOAD FREE PDF ↗","СКАЧАТЬ PDF БЕСПЛАТНО ↗"],
 "zâmbetul tău.":["your smile.","вашей улыбки."],
 "Grija de zi cu zi pentru":["Everyday care for","Ежедневная забота о"],
 "06 / POVEȘTI VIDEO":["06 / VIDEO STORIES","06 / ВИДЕОИСТОРИИ"],
 "Programează-te ↗":["Book now ↗","Записаться ↗"],
 "Indicații ↗":["Directions ↗","Маршрут ↗"],
 "Video ilustrativ · Pexels":["Illustrative video · Pexels","Иллюстративное видео · Pexels"],
 "31 fragmente · 45 recenzii Google":["31 excerpts · 45 Google reviews","31 фрагмент · 45 отзывов Google"],
 "Domenii stomatologice prezentate":["Dental care categories","Стоматологические направления"]
});
const serviceData=[
 {symbol:"tooth",title:["Profilaxie dentară","Preventive dentistry","Профилактика"],teaser:["Prevenția începe cu un control atent.","Prevention starts with a thoughtful checkup.","Профилактика начинается с осмотра."],desc:["Un consult preventiv ajută la identificarea timpurie a problemelor și la personalizarea rutinei de igienă. În funcție de evaluare, medicul poate recomanda curățare profesională și controale periodice.","Preventive visits help identify issues early and tailor oral hygiene. Your dentist may recommend professional cleaning and check-ups.","Профилактический осмотр помогает выявлять проблемы и подобрать уход. Врач может рекомендовать профессиональную чистку и осмотры."],steps:[["Examinarea dinților și gingiilor","Recomandări individuale de igienă","Plan pentru monitorizare"],["Examination of teeth and gums","Personalized oral-care advice","Follow-up plan"],["Осмотр зубов и дёсен","Рекомендации по гигиене","План наблюдения"]]},
 {symbol:"spark",title:["Tratamentul cariilor","Cavity treatment","Лечение кариеса"],teaser:["Îngrijire atentă pentru dinții afectați.","Considerate care for affected teeth.","Бережное лечение поражённых зубов."],desc:["Medicul evaluează leziunea și discută opțiunile de restaurare. Tipul și întinderea tratamentului depind de starea dintelui.","Your dentist assesses the lesion and discusses restoration options. Treatment depends on the condition of each tooth.","Врач оценивает кариозное поражение и обсуждает варианты восстановления. Лечение зависит от состояния зуба."],steps:[["Consultație și diagnostic","Îndepărtarea țesutului afectat, când este indicat","Restaurare și recomandări de îngrijire"],["Examination and diagnosis","Removal of affected tissue, when indicated","Restoration and aftercare guidance"],["Осмотр и диагностика","Удаление поражённых тканей по показаниям","Восстановление и рекомендации"]]},
 {symbol:"star",title:["Estetică dentară","Cosmetic dentistry","Эстетическая стоматология"],teaser:["Armonia unui zâmbet, fără compromisuri pripite.","A thoughtful approach to smile aesthetics.","Внимательный подход к эстетике улыбки."],desc:["Discutăm obiectivele estetice și variantele posibile după examinare. Indicațiile, riscurile și rezultatele diferă de la caz la caz.","We discuss aesthetic goals and suitable options after examination. Indications and outcomes vary by individual.","После осмотра обсуждаем эстетические цели и варианты. Показания и результаты индивидуальны."],steps:[["Analiza zâmbetului și a sănătății dentare","Discuție despre opțiuni și limitări","Plan personalizat, dacă este indicat"],["Smile and oral health assessment","Discussion of options and limitations","Personalized plan when appropriate"],["Оценка улыбки и здоровья зубов","Обсуждение вариантов и ограничений","Индивидуальный план по показаниям"]]},
 {symbol:"braces",title:["Ortodonție","Orthodontics","Ортодонтия"],teaser:["Aliniere dentară evaluată cu atenție.","A thoughtful approach to alignment.","Внимательный подход к выравниванию."],desc:["Ortodonția urmărește corectarea poziției dinților și a mușcăturii. O evaluare clinică stabilește dacă este nevoie de tratament și ce soluții pot fi luate în considerare.","Orthodontics addresses alignment and bite. Assessment helps establish if treatment is needed and which options may suit you.","Ортодонтия помогает корректировать положение зубов и прикус. Обследование определяет показания и варианты лечения."],steps:[["Examinare și documentație clinică","Discuție despre opțiuni de tratament","Monitorizare și controale"],["Clinical examination and records","Discussion of treatment options","Monitoring and review"],["Осмотр и диагностика","Обсуждение вариантов лечения","Наблюдение и контроль"]]},
 {symbol:"gum",title:["Parodontologie","Periodontal care","Пародонтология"],teaser:["Sănătatea gingiilor merită atenție.","Your gum health matters.","Здоровье дёсен важно."],desc:["Îngrijirea parodontală se concentrează pe gingii și țesuturile care susțin dinții. Medicul evaluează semnele de inflamație și propune pașii adecvați.","Periodontal care focuses on gums and tooth-supporting tissues. A dentist evaluates inflammation and discusses suitable care.","Пародонтология занимается дёснами и тканями вокруг зубов. Врач оценивает воспаление и предлагает подходящее лечение."],steps:[["Evaluarea gingiilor și a riscurilor","Recomandarea tratamentului necesar","Întreținere și monitorizare"],["Gum and risk assessment","Recommended care plan","Maintenance and monitoring"],["Осмотр дёсен и оценка рисков","План лечения","Поддерживающий уход"]]},
 {symbol:"cross",title:["Chirurgie dentară","Oral surgery","Стоматологическая хирургия"],teaser:["Decizii explicate, tratamente individualizate.","Clear decisions, individualized care.","Понятные решения и индивидуальный уход."],desc:["Intervențiile chirurgicale necesită consult, evaluarea riscurilor și consimțământ informat. Medicul explică alternativa, procedura și îngrijirea ulterioară.","Oral surgery requires assessment, risk discussion and informed consent. Your dentist explains options and aftercare.","Хирургические вмешательства требуют осмотра, оценки рисков и информированного согласия. Врач объяснит процедуру и уход."],steps:[["Consultație și investigații când sunt indicate","Discuție despre beneficii și riscuri","Indicații de recuperare și control"],["Consultation and appropriate investigations","Risks and benefits discussion","Aftercare and follow-up"],["Осмотр и необходимые исследования","Обсуждение рисков и пользы","Рекомендации после вмешательства"]]},
 {symbol:"implant",title:["Implantologie","Dental implants","Имплантология"],teaser:["Opțiuni de înlocuire a dinților lipsă.","Options to replace missing teeth.","Варианты замещения отсутствующих зубов."],desc:["Implantul poate fi o opțiune pentru anumite cazuri de edentație. Eligibilitatea depinde de sănătatea orală și generală, precum și de investigațiile necesare.","Implants may be an option for some missing teeth. Suitability depends on oral and overall health and required imaging.","Импланты могут быть вариантом замещения зубов. Возможность лечения определяется состоянием здоровья и обследованиями."],steps:[["Consultație și evaluarea situației","Planificare și explicarea alternativelor","Controale după tratament, dacă este efectuat"],["Consultation and assessment","Planning and alternative options","Follow-up if treatment is carried out"],["Консультация и оценка ситуации","Планирование и альтернативы","Контроль после лечения"]]},
 {symbol:"layers",title:["Protezare dentară","Prosthodontics","Протезирование"],teaser:["Redescoperă funcția și armonia zâmbetului.","Restoring function and smile harmony.","Восстановление функции и эстетики."],desc:["Protezele și restaurările pot contribui la refacerea funcției masticatorii și a aspectului. Alegerea soluției necesită evaluarea clinică și un plan individualizat.","Restorations can help improve function and appearance. Choice of treatment requires clinical assessment and planning.","Протезы и реставрации помогают восстановить функцию и внешний вид зубов. Решение подбирается индивидуально."],steps:[["Examinare și definirea obiectivelor","Alegerea opțiunilor protetice","Probare, adaptare și întreținere"],["Assessment and goals","Choosing restoration options","Fitting, adjustment and maintenance"],["Осмотр и определение целей","Выбор вариантов протезирования","Примерка, адаптация и уход"]]}
];
const icons={
 tooth:'<path d="M7 4c3-2 5 0 9 0s6-2 9 0c4 4 0 11-2 16-2 4-3 6-5 6-2 0-1-9-5-9s-3 9-5 9c-2 0-3-2-5-6C1 15-2 8 2 4" transform="translate(4 1) scale(.75)"/>',
 spark:'<path d="M16 2 18 13 29 16 18 19 16 30 13 19 2 16 13 13Z"/>',
 star:'<path d="M16 3 20 12 30 13 22 20 24 30 16 25 8 30 10 20 2 13 12 12Z"/>',
 braces:'<rect x="3" y="7" width="26" height="18" rx="7"/><path d="M3 16h26 M9 11v10 M16 11v10 M23 11v10"/>',
 gum:'<path d="M2 18c4-7 6-5 10-3s7 2 11-2 7 3 7 6M4 21c5 6 10 6 15 3s6-1 10 1"/>',
 cross:'<path d="M12 3h8v9h9v8h-9v9h-8v-9H3v-8h9z"/>',
 implant:'<path d="M9 3h14v5H9z M12 8h8v15l-4 6-4-6z M10 12h12 M11 17h10 M13 22h6"/>',
 layers:'<path d="M16 3 29 10 16 17 3 10 16 3z M3 16l13 7 13-7 M3 22l13 7 13-7"/>'
};
const getLocale=()=>lang;
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderServices(){
 const grid=$("#specialtyGrid");if(!grid)return;
 grid.innerHTML=serviceData.map((s,i)=>'<button type="button" class="specialty-card" data-service-index="'+i+'" aria-haspopup="dialog"><div class="sc-top"><span class="sc-num">'+String(i+1).padStart(2,"0")+' / 08</span><span class="sc-icon"><svg viewBox="0 0 32 32" aria-hidden="true">'+icons[s.symbol]+'</svg></span></div><div><h3>'+esc(s.title[lang==="ro"?0:lang==="en"?1:2])+'</h3><p>'+esc(s.teaser[lang==="ro"?0:lang==="en"?1:2])+'</p><div class="sc-go"><span>'+inLang("Vezi detalii","Discover more","Подробнее")+'</span><span>↗</span></div></div></button>').join("");
 grid.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>showService(Number(btn.dataset.serviceIndex),btn)));
}
let previousFocus=null;
function showService(i,trigger){
 const s=serviceData[i];if(!s)return;previousFocus=trigger;
 const t=lang==="ro"?0:lang==="en"?1:2;
 $("#modalSpecialty").textContent=s.title[t];
 $("#modalDesc").textContent=s.desc[t];
 $("#modalSteps").replaceChildren();
 s.steps[t].forEach(x=>{const li=document.createElement("li");li.textContent=x;$("#modalSteps").append(li)});
 $("#serviceModal").classList.add("open");
 $("#serviceModal").setAttribute("aria-hidden","false");
 $("#modalClose").focus();document.body.style.overflow="hidden";
}
function closeService(){const m=$("#serviceModal");if(!m)return;m.classList.remove("open");m.setAttribute("aria-hidden","true");document.body.style.overflow="";if(previousFocus)previousFocus.focus()}
$("#modalClose")?.addEventListener("click",closeService);
$("#serviceModal")?.addEventListener("click",e=>{if(e.target.id==="serviceModal")closeService()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeService()});
function renderReviews(){
 const rail=$("#reviewTrack");if(!rail)return;
 rail.replaceChildren();
 const make=(r,hidden)=>{
   const card=document.createElement("article");card.className="review-card";if(hidden)card.setAttribute("aria-hidden","true");
   const mark=document.createElement("span");mark.className="rc-mark";mark.textContent="“";
   const quote=document.createElement("blockquote");quote.textContent=r[1];
   const who=document.createElement("div");who.className="rc-name";who.textContent=r[0];
   const src=document.createElement("div");src.className="rc-source";src.textContent=inLang("Recenzie Google · fragment","Google review · excerpt","Отзыв Google · фрагмент");
   card.append(mark,quote,who,src);
   if(!hidden){const read=document.createElement("button");read.className="rc-read";read.type="button";read.textContent=inLang("Citește integral ↗","Read full review ↗","Читать полностью ↗");read.addEventListener("click",()=>{let d=$("#reviewDetail");if(!d){d=document.createElement("dialog");d.id="reviewDetail";d.className="review-detail";d.innerHTML='<button type="button" class="rd-close" aria-label="Close">×</button><span class="eyebrow">GOOGLE REVIEW</span><h2 id="rdAuthor"></h2><p id="rdText"></p><a href="https://www.google.com/maps/place/DDent+Stomatologie/" target="_blank" rel="noopener noreferrer">Google Maps ↗</a>';document.body.append(d);d.querySelector(".rd-close").onclick=()=>d.close()}d.querySelector("#rdAuthor").textContent=r[0];d.querySelector("#rdText").textContent=r[1];d.showModal()});card.append(read)}
   return card;
 };
 const all=content.reviews.filter(r=>r[1]);
 all.forEach(r=>rail.append(make(r,false)));
 all.forEach(r=>rail.append(make(r,true)));
 const num=$("#reviewArchiveCount");if(num)num.textContent=String(all.length);
 const pause=$("#reviewPause");if(pause){pause.textContent=inLang("Pauză ◼","Pause ◼","Пауза ◼");pause.onclick=()=>{let paused=$("#reviewViewport").classList.toggle("paused");pause.textContent=paused?inLang("Reia ▶","Resume ▶","Продолжить ▶"):inLang("Pauză ◼","Pause ◼","Пауза ◼");pause.setAttribute("aria-pressed",String(paused))}}
}
function renderCases(){
 const rail=$("#casesRail");if(!rail)return;
 rail.replaceChildren();
 const actual=content.cases.filter(c=>c.consent&&c.before&&c.after);
 if(actual.length){
  for(const c of [...actual,...actual]){
   const el=document.createElement("article");el.className="case-card";
   el.style.padding="0";el.style.background="#d1d5c9";
   const figure=document.createElement("div");figure.className="case-comparison";figure.style.cssText="width:100%;height:78%;display:grid;grid-template-columns:1fr 1fr;gap:2px";
   for(const [title,src] of [["Before",c.before],["After",c.after]]){const x=document.createElement("div");x.style.cssText="position:relative;overflow:hidden";const img=document.createElement("img");img.src=src;img.alt=title+" "+(c.title?.[lang]||"case");img.loading="lazy";img.style.cssText="height:100%;width:100%;object-fit:cover";const b=document.createElement("span");b.textContent=title;b.style.cssText="position:absolute;bottom:10px;left:10px;background:#244231;color:white;padding:5px 9px;font-size:10px";x.append(img,b);figure.append(x)}
   const cap=document.createElement("p");cap.textContent=c.title?.[lang]||c.title?.ro||"Case";cap.style.cssText="padding:0 20px;color:#fff";
   el.append(figure,cap);rail.append(el);
  }
 }else{
  const kinds=inLang(["Estetică dentară","Restaurări dentare","Implantologie"],["Cosmetic care","Dental restorations","Implants"],["Эстетика","Реставрация","Имплантация"]);
  [...kinds,...kinds].forEach((name,i)=>{const card=document.createElement("article");card.className="case-card";card.innerHTML='<span class="case-no">'+String(i%3+1).padStart(2,"0")+' / 03</span><span class="case-watermark">'+String(i%3+1).padStart(2,"0")+'</span><div class="case-content"><h3>'+esc(name)+'</h3><p>'+inLang("Nu sunt disponibile încă fotografii clinice autorizate pentru publicare.","Authorized clinical photos have not been supplied yet.","Разрешённые для публикации клинические фото пока не предоставлены.")+'</p></div><div class="case-footer">'+inLang("FOTOGRAFII ÎN PREGĂTIRE","PHOTOS COMING SOON","ФОТО В ПОДГОТОВКЕ")+'</div>';rail.append(card)})
 }
}
function renderVideos(){
 const grid=$("#videoGrid");if(!grid)return;
 const videos=content.videos.filter(v=>v.consent&&v.src&&v.poster);
 if(videos.length){
  grid.innerHTML="";grid.style.gridTemplateColumns="repeat(auto-fit,minmax(220px,1fr))";
  for(const v of videos){const article=document.createElement("article");const video=document.createElement("video");video.controls=true;video.preload="none";video.playsInline=true;video.poster=v.poster;video.className="video-real";video.setAttribute("aria-label",v.name);const source=document.createElement("source");source.src=v.src;source.type="video/mp4";video.append(source);const caption=document.createElement("p");caption.textContent=v.name;article.append(video,caption);grid.append(article)}
 }else{
  grid.innerHTML='<div class="video-story-primary"><div class="video-symbol" aria-hidden="true">▶</div><strong>'+inLang("Povestea următoare încă se scrie.","The next story is coming.","Следующая история скоро появится.")+'</strong><p>'+inLang("Videourile vor fi publicate după confirmarea acordului pacienților.","Videos will be published after consent is confirmed.","Видео будут опубликованы после подтверждения согласия пациентов.")+'</p></div><div class="video-story-aside"><span class="eyebrow">DDENT / FILM</span><span class="file-icon" aria-hidden="true">▶</span><p>'+inLang("Mărturii video","Video testimonials","Видеоотзывы")+'<br>'+inLang("În pregătire","Coming soon","Скоро")+'</p></div>';
 }
}
function createSocial(){
 const s=$("#socialLinks");if(!s)return;
 s.replaceChildren();
 for(const item of content.socials){
  const a=document.createElement("a");a.href=item.url;a.target="_blank";a.rel="noopener noreferrer";a.textContent=item.label+" ↗";a.setAttribute("aria-label",item.label+" DDent");s.append(a)
 }
}
const originalNodes=new WeakMap();let nodes=[];
function collectNodes(){
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){const p=n.parentElement;if(!p||["SCRIPT","STYLE","NOSCRIPT","TEXTAREA"].includes(p.tagName))return NodeFilter.FILTER_REJECT;return n.nodeValue.trim()?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
 while(walker.nextNode()){const n=walker.currentNode;originalNodes.set(n,n.nodeValue);nodes.push(n)}
}
function translateStatic(){
 const idx=lang==="en"?0:1;
 nodes.forEach(n=>{
   const original=originalNodes.get(n);if(original==null||!n.isConnected)return;
   const clean=original.trim();const rep=lang==="ro"?clean:T[clean]?.[idx];
   if(rep){const leading=original.match(/^\s*/)?.[0]||"";const trailing=original.match(/\s*$/)?.[0]||"";n.nodeValue=leading+rep+trailing}else n.nodeValue=original;
 });
 document.documentElement.lang=lang;
 document.title={ro:"DDent — Stomatologie cu grijă | Chișinău",en:"DDent — Thoughtful Dentistry | Chișinău",ru:"DDent — Стоматология с заботой | Кишинёв"}[lang];
 const descr=$('meta[name="description"]');if(descr)descr.content={ro:"DDent Stomatologie în Chișinău — servicii dentare, consultații, medici, recenzii și contact.",en:"DDent Dentistry in Chișinău — dental services, appointments, reviews and contact.",ru:"DDent Стоматология в Кишинёве — услуги, консультации, отзывы и контакты."}[lang];
 const select=$("#langSelect");if(select)select.value=lang;
}
function setLanguage(next){
 if(!["ro","en","ru"].includes(next))return;lang=next;
 try{localStorage.setItem("ddent_lang",lang)}catch{}
 translateStatic();updateVideoLabels();renderServices();renderReviews();renderCases();renderVideos()
}
function updateVideoLabels(){
 const v=$("#heroVideo"),state=$("#videoState"),btn=$("#videoToggle");if(!v||!state||!btn)return;
 const isPlaying=!v.paused;
 state.textContent=isPlaying?inLang("PAUZĂ VIDEO","PAUSE VIDEO","ПАУЗА ВИДЕО"):inLang("REDA VIDEO","PLAY VIDEO","ВОСПРОИЗВЕСТИ");
 btn.setAttribute("aria-label",isPlaying?inLang("Pune videoclipul pe pauză","Pause background video","Остановить фоновое видео"):inLang("Redă videoclipul","Play background video","Воспроизвести видео"));
}
function init(){
 const video=$("#heroVideo");if(video){video.addEventListener("play",updateVideoLabels);video.addEventListener("pause",updateVideoLabels);$("#videoToggle")?.addEventListener("click",()=>requestAnimationFrame(updateVideoLabels))}
 createSocial();renderServices();renderReviews();renderCases();renderVideos();collectNodes();translateStatic();updateVideoLabels();
 const select=$("#langSelect");if(select)select.addEventListener("change",e=>setLanguage(e.target.value));
 const rail=$("#casesRail");
 let manualPauseUntil=0;
 $("#casesNext")?.addEventListener("click",()=>{if(rail){manualPauseUntil=performance.now()+2500;rail.scrollLeft+=Math.max(280,rail.clientWidth*0.72)}});
 if(rail&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  let hover=false,last=0;
  rail.addEventListener("pointerenter",()=>hover=true);rail.addEventListener("pointerleave",()=>hover=false);
  rail.addEventListener("focusin",()=>hover=true);rail.addEventListener("focusout",()=>hover=false);
  const tick=ts=>{if(!hover&&ts>manualPauseUntil&&document.visibilityState==="visible"){const dt=Math.min(ts-last,40);if(last&&rail.scrollWidth>rail.clientWidth)rail.scrollLeft+=dt*0.018;if(rail.scrollLeft>=rail.scrollWidth/2)rail.scrollLeft=0}last=ts;requestAnimationFrame(tick)};
  requestAnimationFrame(tick)
 }
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();