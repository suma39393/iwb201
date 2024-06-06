const properties = [
  {
    id: 0,
    price: 500000,
    description: "شقة لشخص 75 متر ",
    location: "بانياس",
    details: `
      المنطقة : شارع جول جمال
      الملكية : طابو أخضر
     _ غرفة نوم تتسع لشخص واحد _
      مفروش كامل مع توفر كافة المستلزمات _
    `,
    image: "img 12/imagefour.png",
  },
  {
    id: 1,
    price: 250000,
    description: "صالة أعراس 500 متر",
    location: "حمص",
    details: `
      المنطقة : حي الخالدية
     _  أكبر وأفخم قاعات الأعراس _
      أكثر من 1000 شخص _
      تتضمن فريق تصوير كامل
    `,
    image: "img 12/imagefife.png",
  },
  {
    id: 2,
    price: 600000,
    description: "شقة فارغة 110 متر",
    location: "دمشق",
    details: `
      المنطقة : ركن الدين
      الملكية : طابو _
      غرفتين وصالون 
     _  متوفر كراج _
      بلكونة مساحة 12 متر
    `,
    image: "img 12/imagesix.png",
  },
  {
    id: 3,
    price: 900000,
    description: "معرض البيت العتيق",
    location: "دير الزور",
    details: `
      المنطقة : الميادين
       _ مساحة 75 متر _
        يوجد مستودع داخلي (السقيفة )
      _ معرض سابق لعرض الأدوات المنزلية
    `,
    image: "img 12/imagebdr.png",
  },
  {
    id: 4,
    price: 900000,
    description: "شقة مكسية  110م",
    location: "طرطوس",
    details: `
      المنطقة :  ساحة شمدين
      _ الملكية: طابو
      مطبخ بصالون مع غرفة نوم 
      _ مفروش كامل _
      مساحة كافية لشخصين 
    `,
    image: "img 12/imagedra.png",
  },
  {
    id: 5,
    price: 120000,
    description: "غرفة طلابية لشخصين",
    location: "دمشق",
    details: `
      المنطقة :  طريق المطار _قرب جامعة الهمك
     _  الطابق الثالث _
      توفر مكتب للدراسة لشخصين _
      مساحة كافية لشخصين
    `,
    image: "img 12/imagesiven.png",
  },
  {
    id: 6,
    price: 900000,
    description: "محال تجاري",
    location: "السويداء",
    details: `
      المنطقة : الشهباء
      مساحة 75 متر 
      داخل مول السويداء _ الطابق الثاني
      معرض سابق للبصريات
    `,
    image: "img 12/imageadam.png",
  },
  {
    id: 7,
    price: 300000,
    description: "شقة غرفة ومطبخ",
    location: "حمص",
    details: `
      المنطقة : حي الوعر
      _ الطابق الرابع _مساحة 70 متر _
     مطبخ أمريكي _ غرفة نوم 
    `,
    image: "img 12/imagehla.png",
  },
  {
    id: 8,
    price: 200000,
    description: "شقة مفروشة  لشخصين 90 متر",
    location: "درعا",
    details: `
    المنطقة: حي السبيل
    كراج خاص بالبناء _
    توفر مصعد _ وحديقة خاصة بالبناء
    `,
    image: "img 12/imagehms.png",
  },
  {
    id: 9,
    price: 1900000,
    description: "منزل عائلي غير مفروش",
    location: "حلب",
    details: `
     _ المنطقة : الشعال
     مساحة 125 متر _ 
      مطبخ _ غرفة وصالون مساحة 25 متر 
     حديقة منزلية _ كراج _ حمامات
    `,
    image: "img 12/imageeight.png",
  },
 
];

const createPropertiesTable = () => {
  const propertiesRowsContainer = document.querySelector(".properties .body");

  properties.forEach((property) => {
    propertiesRowsContainer.innerHTML += `
        <div class="row">
            <div class="col">${property.location}</div>
            <div class="col">${property.description}</div>
            <div class="col">${property.price} syp</div>
            <div class="col">
                <button class="col-but details-but">اظهار التفاصيل</button>
            </div>
            <div class="col">
                <button class="col-but but-select">إختيار العقار</button>
            </div>
        </div>
        <div class="details-row">
            <div class="details-wrapper">
                <h2>تفاصيل العقار</h2>
                <div class="details">${property.details}</div>
                <img src="${property.image}" alt="Property image" />
            </div>
        </div>
    `;
  });

  const buttons = document.querySelectorAll(".details-but");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const detailsRow = document.querySelectorAll(".details-row")[index];
      detailsRow.classList.toggle("show");
    });
  });
};

const selectProperty = () => {
  const continuebutton = document.querySelector(".but-continue");
  const buttons = document.querySelectorAll(".but-select");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      const selectedProperty = properties[index];
      if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        continuebutton.disabled = true;
        return;
      }
      buttons.forEach((button) => {
        button.classList.remove("selected");
      });
      button.classList.add("selected");
      // disable continue button
      continuebutton.disabled = false;
      console.log(selectedProperty);
    });
  });
};

const modalHandler = () => {
  const continuebutton = document.querySelector(".but-continue");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-but");
  continuebutton.addEventListener("click", () => {
    // check if it's not disabled
    if (continuebutton.disabled) {
      return;
    }
    modal.classList.add("show");
  });
  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
  });
};

function arabicOnly(e) {
  // https://stackoverflow.com/questions/10364737/validation-on-arabic-characters
  console.log(e);
  var unicode = e.charCode ? e.charCode : e.keyCode;
  if (unicode != 8 && unicode != 32) {
    //if the key isn't the backspace key (which we should allow)
    if (
      (unicode < 48 || unicode > 57) &&
      (unicode < 0x0600 || unicode > 0x06ff)
    )
      //if not a number or arabic
      e.preventDefault(); //disable key press
    return false; //disable key press
  }
}

const formHandler = () => {
  const form = document.querySelector("form");
  const button = document.querySelector(".form-but");
  const name = document.querySelector("#name");
  const id = document.querySelector("#id");

  name.addEventListener("keypress", arabicOnly);
  id.addEventListener("keypress", (e) => {
    if (e.charCode < 48 || e.charCode > 57) {
      e.preventDefault();
    }
  });
  id.addEventListener("change", (e) => {
    // check if the id is 11 digits
    if (e.target.value.length !== 11) {
      e.target.classList.add("invalid");
      e.target.setCustomValidity("الرجاء إدخال رقم الهوية بشكل صحيح");
    } else {
      e.target.setCustomValidity("");
    }
  });
  button.addEventListener("click", () => {
    // check if the form is valid
    if (!form.checkValidity()) {
      return;
    }
    form.submit();
  });
};

createPropertiesTable();
selectProperty();
modalHandler();
formHandler();
