/* DDent 2026 — no backend credentials or patient information stored on site */
(()=>{
"use strict";
const byId=id=>document.getElementById(id);
const appointment=byId("appointmentForm"),dock=byId("contactDock"),toggle=byId("dockToggle"),menu=byId("dockMenu");
if(!appointment||!dock||!toggle||!menu)return;
const translations={
ro:{
eyebrow:"PROGRAMARE / DDENT",titleFirst:"Un moment pentru",titleSecond:"zâmbetul tău.",lead:"Completează câteva detalii pentru a pregăti solicitarea de programare. Echipa clinicii va confirma disponibilitatea direct cu tine.",
step1Title:"Spune-ne cum te putem contacta",step1Text:"Numele și numărul de telefon sunt suficiente pentru primul pas.",
step2Title:"Alege ce ți se potrivește",step2Text:"Poți indica serviciul, medicul și data preferată. Acestea nu sunt încă rezervate.",
step3Title:"Confirmăm împreună",step3Text:"La final vei trimite mesajul prin WhatsApp sau e-mail. Programarea se confirmă ulterior.",
call:"Preferi să vorbești direct?",formTitle:"Solicită o programare",formLead:"Nicio dată nu este rezervată automat.",
name:"Nume și prenume *",phone:"Număr de telefon *",service:"Serviciul dorit",doctor:"Medicul preferat",date:"Data preferată",interval:"Interval orar",notes:"Detalii suplimentare (opțional)",notesHelp:"Nu include diagnostice, fotografii sau alte date medicale sensibile.",consent:"Sunt de acord ca datele completate să fie folosite pentru a solicita o programare și să le trimit prin canalul ales.",consentLink:"Politica de confidențialitate",
whatsapp:"Continuă prin WhatsApp",email:"Continuă prin e-mail",disclaimer:"Cererea nu este o programare confirmată. După apăsarea unui buton se deschide WhatsApp sau aplicația de e-mail, unde trebuie să trimiți efectiv mesajul. Website-ul nu stochează formularul; integrarea CRM va fi adăugată ulterior.",
prepareWA:"WhatsApp se deschide cu mesajul pregătit. Apasă «Trimite» acolo pentru a expedia solicitarea.",prepareEmail:"Se deschide aplicația de e-mail cu solicitarea pregătită. Apasă «Trimite» acolo.",empty:"Te rugăm să completezi câmpurile obligatorii.",invalidPhone:"Introdu un număr de telefon valid.",dockToggle:"Contact rapid",dockClose:"Închide opțiunile",dockBook:"Programare",dockPhone:"Telefon",dockWA:"WhatsApp",dockIG:"Instagram",dockFB:"Facebook",dockEmail:"E-mail",dockMaps:"Indicații",mapTitle:"Locația DDent pe Google Maps",mapDirections:"Indicații ↗",mapCaption:"Albișoara 82/6, of. 4 · Chișinău",
specialtyFirst:"Consultație generală",doctorAny:"Fără preferință",intervalAny:"Oricând",intervalMorning:"Dimineața (09:00–12:00)",intervalMidday:"La prânz (12:00–15:00)",intervalAfternoon:"După-amiaza (15:00–18:00)",subject:"Solicitare programare DDent",messageTitle:"Bună ziua! Doresc o programare la DDent.",msgName:"Nume",msgPhone:"Telefon",msgService:"Serviciu",msgDoctor:"Medic",msgDate:"Dată preferată",msgTime:"Interval preferat",msgNotes:"Alte detalii",msgUnspecified:"De stabilit",msgFooter:"Vă rog să-mi confirmați disponibilitatea. Aceasta este doar o solicitare."
},
en:{
eyebrow:"APPOINTMENT / DDENT",titleFirst:"A moment for",titleSecond:"your smile.",lead:"Share a few details to prepare your appointment request. The clinic team will confirm availability directly with you.",
step1Title:"Tell us how to reach you",step1Text:"Your name and phone number are enough to get started.",
step2Title:"Choose what works for you",step2Text:"You can specify a service, doctor and preferred date. No slot is reserved yet.",
step3Title:"We confirm together",step3Text:"Send your request via WhatsApp or email. The appointment will be confirmed separately.",
call:"Prefer speaking directly?",formTitle:"Request an appointment",formLead:"No date is automatically booked.",
name:"Full name *",phone:"Phone number *",service:"Requested service",doctor:"Preferred dentist",date:"Preferred date",interval:"Time preference",notes:"Additional details (optional)",notesHelp:"Do not include diagnoses, images or other sensitive health information.",consent:"I agree to share the details provided to request an appointment through the communication channel I choose.",consentLink:"Privacy policy",
whatsapp:"Continue with WhatsApp",email:"Continue by email",disclaimer:"Your request is not a confirmed appointment. After clicking, WhatsApp or your email app opens with a prepared message that you must actually send. This site does not store the form; CRM integration will be added later.",
prepareWA:"WhatsApp opens with a prepared message. Press Send there to submit your request.",prepareEmail:"Your email app opens with a prepared request. Press Send there to submit.",empty:"Please complete the required fields.",invalidPhone:"Please enter a valid phone number.",dockToggle:"Quick contact",dockClose:"Close contact options",dockBook:"Appointment",dockPhone:"Call",dockWA:"WhatsApp",dockIG:"Instagram",dockFB:"Facebook",dockEmail:"Email",dockMaps:"Directions",mapTitle:"DDent location on Google Maps",mapDirections:"Directions ↗",mapCaption:"82/6 Albișoara, office 4 · Chișinău",
specialtyFirst:"General consultation",doctorAny:"No preference",intervalAny:"Any time",intervalMorning:"Morning (09:00–12:00)",intervalMidday:"Midday (12:00–15:00)",intervalAfternoon:"Afternoon (15:00–18:00)",subject:"DDent appointment request",messageTitle:"Hello! I would like to request a DDent appointment.",msgName:"Name",msgPhone:"Phone",msgService:"Service",msgDoctor:"Dentist",msgDate:"Preferred date",msgTime:"Preferred time",msgNotes:"Additional information",msgUnspecified:"To be arranged",msgFooter:"Please confirm availability. This is only a request."
},
ru:{
eyebrow:"ЗАПИСЬ / DDENT",titleFirst:"Время для",titleSecond:"вашей улыбки.",lead:"Укажите несколько деталей для заявки на приём. Сотрудники клиники свяжутся с вами и подтвердят доступное время.",
step1Title:"Как с вами связаться",step1Text:"Для начала достаточно имени и номера телефона.",
step2Title:"Укажите предпочтения",step2Text:"Выберите услугу, врача и удобную дату. Время пока не забронировано.",
step3Title:"Подтверждаем вместе",step3Text:"Отправьте заявку через WhatsApp или e-mail. Запись подтверждается отдельно.",
call:"Удобнее позвонить?",formTitle:"Оставить заявку",formLead:"Дата не бронируется автоматически.",
name:"Имя и фамилия *",phone:"Номер телефона *",service:"Услуга",doctor:"Предпочитаемый врач",date:"Желаемая дата",interval:"Удобное время",notes:"Дополнительные сведения (необязательно)",notesHelp:"Не указывайте диагнозы, снимки или другие чувствительные медицинские данные.",consent:"Я согласен(на) передать указанные данные для заявки на приём через выбранный канал связи.",consentLink:"Политика конфиденциальности",
whatsapp:"Продолжить в WhatsApp",email:"Продолжить по e-mail",disclaimer:"Заявка не является подтверждённой записью. После нажатия откроется WhatsApp или почтовое приложение с текстом, который необходимо отправить самостоятельно. Данные формы не хранятся на сайте; CRM будет подключена позже.",
prepareWA:"Откроется WhatsApp с готовым текстом. Нажмите «Отправить» в чате.",prepareEmail:"Откроется почтовое приложение с готовым письмом. Нажмите «Отправить».",empty:"Заполните обязательные поля.",invalidPhone:"Введите корректный номер телефона.",dockToggle:"Связаться",dockClose:"Закрыть контакты",dockBook:"Запись",dockPhone:"Позвонить",dockWA:"WhatsApp",dockIG:"Instagram",dockFB:"Facebook",dockEmail:"Почта",dockMaps:"Маршрут",mapTitle:"Расположение DDent на Google Maps",mapDirections:"Маршрут ↗",mapCaption:"Албишоара 82/6, офис 4 · Кишинёв",
specialtyFirst:"Общая консультация",doctorAny:"Без предпочтений",intervalAny:"В любое время",intervalMorning:"Утром (09:00–12:00)",intervalMidday:"Днём (12:00–15:00)",intervalAfternoon:"После обеда (15:00–18:00)",subject:"Заявка на приём DDent",messageTitle:"Здравствуйте! Хочу записаться на приём в DDent.",msgName:"Имя",msgPhone:"Телефон",msgService:"Услуга",msgDoctor:"Врач",msgDate:"Желаемая дата",msgTime:"Желаемое время",msgNotes:"Примечание",msgUnspecified:"Уточнить",msgFooter:"Пожалуйста, подтвердите наличие свободного времени. Это только заявка."
}
};
const serviceNames={
ro:["Consultație generală","Profilaxie dentară","Tratamentul cariilor","Estetică dentară","Ortodonție","Parodontologie","Chirurgie dentară","Implantologie","Protezare dentară"],
en:["General consultation","Preventive dentistry","Cavity treatment","Cosmetic dentistry","Orthodontics","Periodontal care","Oral surgery","Dental implants","Prosthodontics"],
ru:["Общая консультация","Профилактика","Лечение кариеса","Эстетическая стоматология","Ортодонтия","Пародонтология","Стоматологическая хирургия","Имплантация","Протезирование"]
};
const defaultLang=()=>["ro","en","ru"].includes(document.documentElement.lang)?document.documentElement.lang:"ro";
let lang=defaultLang();
const t=key=>(translations[lang]||translations.ro)[key]||translations.ro[key]||key;
const directions="https://www.google.com/maps/dir/?api=1&destination=DDent+Stomatologie%2C+Strada+Albi%C8%99oara+82%2F6%2C+Chi%C8%99in%C4%83u%2C+Moldova";
const service=byId("apService"),doctor=byId("apDoctor"),interval=byId("apInterval");
function updateLocale(){
 lang=defaultLang();
 document.querySelectorAll("[data-ap-text]").forEach(el=>{el.textContent=t(el.dataset.apText)});
 document.querySelectorAll("[data-ap-aria]").forEach(el=>el.setAttribute("aria-label",t(el.dataset.apAria)));
 const name=byId("apName"),phone=byId("apPhone"),notes=byId("apNotes");
 if(name)name.placeholder={ro:"Ex.: Ion Popescu",en:"E.g. Alex Smith",ru:"Например: Иван Попеску"}[lang];
 if(phone)phone.placeholder="+373 79 000 000";
 if(notes)notes.placeholder={ro:"Ex.: Prima consultație",en:"E.g. First visit",ru:"Например: первичный приём"}[lang];
 [...service.options].forEach((o,i)=>o.textContent=serviceNames[lang][i]);
 const dr=["Andrei Dumbravă","Victor Cazaciuc"];[...doctor.options].forEach((o,i)=>o.textContent=i===0?t("doctorAny"):dr[i-1]);
 [...interval.options].forEach(o=>o.textContent=t(o.dataset.apTime));
 const m=byId("ddentMap");if(m)m.title=t("mapTitle");
 const nav=byId("dockToggle");if(nav)nav.title=nav.getAttribute("aria-expanded")==="true"?t("dockClose"):t("dockToggle");
 const status=byId("bookingStatus");if(status)status.textContent="";
}
const select=byId("langSelect");
if(select)select.addEventListener("change",()=>{lang=select.value;requestAnimationFrame(updateLocale)});
function toggleDock(open){
 dock.classList.toggle("open",open);
 toggle.setAttribute("aria-expanded",String(open));
 toggle.title=open?t("dockClose"):t("dockToggle");
 toggle.setAttribute("aria-label",open?t("dockClose"):t("dockToggle"));
 menu.inert=!open;
 menu.setAttribute("aria-hidden",String(!open));
}
toggleDock(false);
toggle.addEventListener("click",()=>toggleDock(!dock.classList.contains("open")));
document.addEventListener("click",e=>{if(!dock.contains(e.target)&&dock.classList.contains("open"))toggleDock(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&dock.classList.contains("open")){toggleDock(false);toggle.focus()}});
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>toggleDock(false)));
const localToday=()=>{
 const d=new Date();
 return [d.getFullYear(),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-");
};
const date=byId("apDate");
if(date)date.min=localToday();
function message(){
 const selected=service.options[service.selectedIndex]?.textContent||t("msgUnspecified");
 const chosenDoctor=doctor.options[doctor.selectedIndex]?.textContent||t("msgUnspecified");
 const chosenTime=interval.options[interval.selectedIndex]?.textContent||t("msgUnspecified");
 const values=[
 t("messageTitle"),"",
 t("msgName")+": "+byId("apName").value.trim(),
 t("msgPhone")+": "+byId("apPhone").value.trim(),
 t("msgService")+": "+selected,
 t("msgDoctor")+": "+chosenDoctor,
 t("msgDate")+": "+(date.value||t("msgUnspecified")),
 t("msgTime")+": "+chosenTime
 ];
 const note=byId("apNotes").value.trim();
 if(note)values.push(t("msgNotes")+": "+note);
 values.push("",t("msgFooter"));
 return values.join("\n");
}
appointment.addEventListener("submit",e=>{
 e.preventDefault();
 const status=byId("bookingStatus");
 if(!appointment.reportValidity()){status.textContent=t("empty");return}
 const raw=byId("apPhone").value.trim();
 if(!/^\+?[\d ().-]{7,25}$/.test(raw)||raw.replace(/\D/g,"").length<7){byId("apPhone").setCustomValidity(t("invalidPhone"));byId("apPhone").reportValidity();status.textContent=t("invalidPhone");return}
 byId("apPhone").setCustomValidity("");
 const send=e.submitter?.dataset.apSend||"whatsapp";
 const msg=message();
 if(send==="email"){
  status.textContent=t("prepareEmail");
  const url="mailto:dumbravadent@gmail.com?subject="+encodeURIComponent(t("subject"))+"&body="+encodeURIComponent(msg);
  window.location.href=url;
 }else{
  status.textContent=t("prepareWA");
  const url="https://wa.me/37379526737?text="+encodeURIComponent(msg);
  const a=document.createElement("a");a.href=url;a.target="_blank";a.rel="noopener noreferrer";a.style.display="none";document.body.append(a);a.click();a.remove();
 }
});
byId("apPhone")?.addEventListener("input",()=>byId("apPhone").setCustomValidity(""));
document.querySelectorAll("#specialtyGrid").forEach(el=>el.addEventListener("click",e=>{
 const b=e.target.closest("button[data-service-index]");
 if(b)service.value=String(Number(b.dataset.serviceIndex)+1);
}));
document.querySelectorAll("#serviceModal a[href='#programare']").forEach(a=>a.addEventListener("click",e=>{
 e.preventDefault();
 byId("modalClose")?.click();
 history.replaceState(null,"","#programare");
 byId("programare")?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"});
}));
updateLocale();
})();