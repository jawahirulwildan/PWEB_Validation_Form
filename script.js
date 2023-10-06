function validateForm() {
    const nama = document.getElementById('nama');
    const nrp = document.getElementById('nrp');
    const email = document.getElementById('email');
    const mata_kuliah = document.getElementById('mata_kuliah');
    const dosen = document.getElementById('dosen');
    const nrpRegex = /^[0-9]+$/;
    if (nama.value == "") {
        alert("Nama Wajib di Isi");
        document.forms["formAbsensi"]["nama"].focus();
        return false;
    } else if (nrp.value == "") {
        alert("NRP Wajib di Isi");
        document.forms["formAbsensi"]["nrp"].focus();
        return false;
    } else if (!nrpRegex.test(nrp.value) || nrp.value.length < 10) {
        alert("NRP Tidak Valid");
        document.forms["formAbsensi"]["nrp"].focus();
        return false;
    } else if (email.value == "") {
        alert("Email Wajib di Isi");
        document.forms["formAbsensi"]["email"].focus();
        return false;
    } else if (mata_kuliah.value == "") {
        alert("Mata kuliah Wajib di Isi");
        document.forms["formAbsensi"]["mata_kuliah"].focus();
        return false;
    } else if (dosen.value == "") {
        alert("Nama Dosen Wajib di Isi");
        document.forms["formAbsensi"]["dosen"].focus();
        return false;
    }
    window.location.href = "succes.html";
    return false;
}

function generateDosen(mata_kuliah) {
    const dosen = {
        'grafkom': ['Anny Yuniarti, S.Kom., M.Comp.Sc.', 'Dr. Eng. Darlis Herumurti, S.Kom., M.Kom.', 'Hadziq Fabroyir, Ph.D.', 'Siska Arifiani, S.Kom., M.Kom.'],
        'jarkom': ['Dr. Eng. Royyana Muslim Ijtihadie, S.Kom., M.Kom.', 'Bagus Jati Santoso, S.Kom., Ph.D.', 'Ir. Ary Mazharuddin Shiddiqi, S.Kom., M.Comp.Sc., Ph.D., IPM.', 'Dr. Baskoro Adi Pratomo, S.Kom., M.Kom.', 'Hudan Studiawan, S.Kom., M.Kom.'],
        'pbkk': ['Fajar Baskoro, S.Kom., M.T.', 'Agus Budi Raharjo, S.Kom., M.Kom., Ph.D.'],
        'ps' : ['Dr. Ahmad Saikhu, S.Si., MT.', 'Prof. Dr. Ir. Joko Lianto Buliali, M.Sc.'],
        'pweb': ['Fajar Baskoro, S.Kom., M.T.', 'Imam Kuswardayan, S.Kom., M.T.', 'Misbakhul Munir Irfan Subakti, S.Kom., M.Sc.', 'Siska Arifiani, S.Kom., M.Kom.'],
        'rsbp': ['Shintami Chusnul Hidayati, S.Kom., M.Sc., Ph.D.', 'Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc., Ph.D.'], 
        'tg': ['Victor Hariadi, S.Si., M.Kom.']
    }
    const dosen_mk = dosen[mata_kuliah];
    const target = document.getElementById('dosen');
    const placeholder = `<option value="" disabled selected>Pilih Dosen</option>`;
    target.innerHTML = placeholder;
    let i = 1;
    for (const dosen of dosen_mk) {
        option = `<option value=${i}>${dosen}</option>`;
        target.innerHTML += option;
        i += 1;
    }
}

const suggestedNames = [
    'Abdullah Nasih Jasir','Abdullah Yasykur Bifadhlil Midror','Abhinaya Radiansyah Listiyanto','Abiansyah Adzani Gymnastiar','Abyan Zhafran Trisnanto','Achmad Khosyi Assajjad Ramandanta',
'Adam Haidar Azizi','Adhira Riyanti Amanda','Adrian Ismu Arifianto','Adrian Karuna Soetikno','Afiq Fawwaz Haidar','Ahda Filza Ghaffaru','Ahmad Danindra Nugroho','Ahmad Fauzan Alghifari',
'Ahmad Rafif Hikmatiar','Aida Fitrania Prabasati','Akbar Putra Asenti Priyanto','Akhmad Mustofa Solikin','Akmal Ariq Romadhon','Akmal Nafis','Al-Ferro Yudisthira Putra','Alexander Weynard Samsico',
'Alfa Fakhrur Rizal Zaini','Alfadito Aulia Denova','Alfan Lukeyan Rizki','Ali Hasyimi Assegaf','Altriska Izzati Khairunnisa Hermawan','Alya Putri Salma','Anas Azhar','Andhika Lingga Mariano',
'Andika Laksana Putra','Andrian','Andrian Tambunan','Anggara Saputra','Anneu Tsabita Putri','Apta Rasendriya Wijaya','Arfi Raushani Fikra','Ariel Pratama Menlolo','Ariella Firdaus Imata',
'Arif Nugraha Santosa','Arkana Bilal Imani','Armadya Hermawan','Aryan Shafa Wardana','Aurelio Killian Lexi Verrill','Azhar Abiyu Rasendriya Harun','Baihaqi Rizki Nurfajri','Beauty Valen Fajri',
'Bernisko Fancy Aljunez P.','Calvin Janitra','Cavel Ferrari','Choirul Rijal Dawam Iba','Christian Kevin Emor','Christopher Clement Wijaya','Clarissa Luna Maheswari','Dafarel Fatih Wirayudha',
'Daffa Saskara','Danar Sodik Priyambodo','Danno Denis Dhaifullah','Dany Dary','Darren Prasetya','Darvin Exaudi Simanjuntak','Daud Dhiya Rozaan','Dewangga Dika Darmawan','Dian Lies Seviona Dabukke',
'Dilla Wahdana','Dimas Aria Pujangga','Dimas Fadilah Akbar','Dimas Prihady Setyawan','Duevano Fairuz Pandya','Dzaky Hasbullah Wahyudi','Eric Azka Nugroho','Fadilla Rizky Nurhidayah',
'faiz haq noviandra ciptadi putra','Faizah Nurdianti Maghfirah','Farah Dhia Fadhila','Faraihan Rafi Adityawarman','Farhan Dwi Putra','Farrela Ranku Mahhisa','Fathan Abi Karami',
'Fathin Muhashibi Putra','Fauzan Ahmad Faisal','Fauzi Rizki Pratama','Ferza Noveri','Fihriz Ilham Rabbany','Frederick Hidayat','Frederick Yonatan Susanto','Gabriella Natasya Br Ginting',
'Gabrielle Immanuel Osvaldo Kurniawan','Ghifari Maaliki Syafa Syuhada','Gilang Aliefidanto','Glenaya','Gracetriana Survinta Septinaputri','Hammuda Arsyad','Hana Maheswari','Hanafi Satriyo Utomo Setiawan',
'Hanifi Abrar Setiawan','Hanun Shaka Puspa','Helmi Abiyu Mahendra','Heru Dwi Kurniawan','I Gusti Agung Ngurah Adhi Sanjaya','I Gusti Ngurah Ervan Juli Ardana','I Putu Arya Prawira Wiwekananda',
'Ihsan Widagdo','Ilham Insan Wafi','Immanuel Pascanov Samosir','Irsyad Fikriansyah Ramadhan','Java Kanaya Prada','Javier Nararya Aqsa Setiyono','Jawahirul Wildan','Kalyana Putri Al Kanza',
'Katarina Inezita Prambudi','Ken Anargya Alkausar','Ketut Arda Putra Mahotama Sadha','Kevin Nathanael Halim','Keyisa Raihan Illah Setiadi','Keysa Anadea Aqiva Ajie','Khairiya Maisa Putri',
'Kirana Alivia Enrico','Laurivasya Gadhing Syahafidh','Layyinatul Fuadah','Ligar Arsa Arnata','Lihardo Marson Purba','M Naufal Badruttamam','M. Armand Giovani','Made Nanda Wija Vahindra',
'Mardhatillah Shevy Ananti','Mashita Dewi','Mavaldi Rizqy Hazdi','Melanie Sayyidina Sabrina Refman','Meyroja Jovandha Firoos','Mikhael Aryasatya Nugraha','Mochammad Naufal Ihza Syahzada',
'Mochammad Taslam Gustino Prianto','Moh Adib Syambudi','Moh rosy haqqy aminy','mohammad ahnaf fauzan','Mohammad Kamal','Mohammad Zhafran Dzaky','Mordekhai Raden Agung Numberi',
'Muhamad Dafian Zaki Akhdan','Muhamad Faiz Fernanda','Muhammad Ahyun Irsyada','Muhammad Arkan Karindra Darvesh','Muhammad Daffa Ashdaqfillah','Muhammad Daffa Harits','Muhammad Dzaky Farhan',
'Muhammad Ersya Vinorian','Muhammad Fadhlan Ashila Harashta','Muhammad Febrianyah','Muhammad Ghifari Taqiuddin','Muhammad Hafidh Rosyadi','Muhammad Naufal Baihaqi','Muhammad Naufal Fawwaz Ramadhan',
'Muhammad Rafi Insan Fillah','Muhammad Rafi Sutrisno','Muhammad Rafif Tri Risqullah','Muhammad Razan Athallah','Muhammad Revel Wivanto','Muhammad Rifqi Fadhilah','Muhammad Wildan Kamal Al hakim',
'Muhammad Zhafran','Muhammad Zien Zidan','Muhammad Zikri Ramadhan','Nabila Aidah Diani','Nadiah Nuri Aisyah','Nadif Mustafa','Nadira Milha Nailul Fath','Nadya Zuhria Amana','Najma Ulya Agustina',
'Nayya Kamila Putri Yulianto','Nizam Hakim Santoso','Nur Azizah','Pascal Roger Junior Tauran','Raden Roro Kayla Angelica Priambudi','Radhiyan Muhammad Hisan','Rafi Aliefian Putra Ramadhani',
'Rani Listian Anggraeni','Rayhan Almer Kusumah','Rayhan Arvianta Bayuputra','Revanantyo Dwigantara','Richie Seputro','Riski Ilyas','Rizky Alifiyah Rahma','Robby Ulung Pambudi',
'Rr. Diajeng Alfisyahrinnisa Anandha','Rule Lulu Damara','Ryan Abinugraha','Salsabila Fatma Aripa','Sandhika Surya Ardyanto','Sandyatama Fransisna Nugraha','Sarah Nurhasna Khairunnisa',
'Satria Surya Prana','Schaquille Devlin Aristano','Shafa Nabilah Hanin','Shaloom David Togu','Shazia Ingeyla Naveeda','Sony Hermawan','Syarifah Talitha Erfany','Syomeron Ansell Widjaya',
'Syukra Wahyu Ramadhan','Talitha Hayyinas Sahala','Thalent Athalla Razzaq','Thariq Agfi Hermawan','Thomas Juan Mahardika Suryono','Thoriq Afif Habibi','Tigo S Yoga','Timothy Hosia Budianto',
'Tsabita Putri Ramadhany','Tsaqif Deniar Bhakti','Ulima Kaltsum Rizky H.','Umar Hanif Abdul Aziz','Victor Gustinova','Vija Wildan Gita Prabawa','Vito Febrian Ananta','Wan Sabrina Mayzura',
'Wardatul Amalia Safitri','WIDIAN SASI DISERTASIANI','Yoel Mountanus Sitorus','Yohanes Teguh Ukur Ginting','Yusna Millaturrosyidah','YUSUF HASAN NAZILA','Zakia Kolbi'
];

function NameSuggestions() {
    const namaDropdown = document.getElementById('suggest_name');
    const inputNamaValue = document.getElementById('nama').value.toLowerCase();
    namaDropdown.innerHTML = '';

    if (inputNamaValue.length > 0) {
        suggestedNames.forEach(suggestedName => {
            const suggestedNameLowerCase = suggestedName.toLowerCase();
            if (suggestedNameLowerCase.startsWith(inputNamaValue) &&
                suggestedNameLowerCase.indexOf(inputNamaValue) === 0) {
                const option = document.createElement('option');
                option.value = suggestedName;
                option.textContent = suggestedName;
                option.addEventListener('click', function () {
                    document.getElementById('nama').value = suggestedName;
                    namaDropdown.innerHTML = '';
                });
                namaDropdown.appendChild(option);
            }
        });
    }
}

const suggestedNrp =[
    '5025211001','5025211002','5025211003','5025211004','5025211005','5025211006','5025211007','5025211007','5025211009','5025211010','5025211011','5025211012','5025211013','5025211014',
    '5025211015','5025211016','5025211017','5025211018','5025211019','5025211020','5025211021','5025211022','5025211023','5025211024','5025211026','5025211027','5025211028','5025211029',
    '5025211030','5025211031','5025211032','5025211033','5025211034','5025211035','5025211036','5025211037','5025211040','5025211042','5025211043','5025211044','5025211045','5025211046',
    '5025211048','5025211049','5025211050','5025211051','5025211052','5025211054','5025211055','5025211056','5025211057','5025211058','5025211060','5025211061','5025211062','5025211063',
    '5025211064','5025211065','5025211066','5025211067','5025211068','5025211069','5025211070','5025211072','5025211073','5025211074','5025211077','5025211078','5025211079','5025211080',
    '5025211081','5025211083','5025211084','5025211085','5025211086','5025211091','5025211093','5025211097','5025211098','5025211100','5025211101','5025211102','5025211103','5025211105',
    '5025211106','5025211108','5025211109','5025211110','5025211111','5025211112','5025211113','5025211114','5025211115','5025211116','5025211119','5025211120','5025211121','5025211122',
    '5025211125','5025211126','5025211127','5025211129','5025211130','5025211131','5025211132','5025211134','5025211135','5025211136','5025211137','5025211138','5025211139','5025211140',
    '5025211142','5025211144','5025211145','5025211146','5025211147','5025211148','5025211149','5025211150','5025211151','5025211152','5025211153','5025211154','5025211155','5025211156',
    '5025211157','5025211158','5025211159','5025211160','5025211161','5025211162','5025211164','5025211166','5025211167','5025211168','5025211169','5025211170','5025211171','5025211172',
    '5025211173','5025211174','5025211175','5025211176','5025211177','5025211178','5025211179','5025211180','5025211182','5025211183','5025211184','5025211186','5025211187','5025211188',
    '5025211189','5025211190','5025211192','5025211194','5025211195','5025211196','5025211198','5025211199','5025211201','5025211202','5025211203','5025211204','5025211205','5025211206',
    '5025211207','5025211208','5025211209','5025211210','5025211211','5025211212','5025211213','5025211214','5025211215','5025211216','5025211217','5025211218','5025211220','5025211222',
    '5025211223','5025211224','5025211225','5025211226','5025211227','5025211228','5025211229','5025211230','5025211231','5025211232','5025211233','5025211234','5025211235','5025211236',
    '5025211237','5025211238','5025211239','5025211240','5025211241','5025211242','5025211243','5025211244','5025211245','5025211246','5025211247','5025211249','5025211250','5025211251',
    '5025211252','5025211253','5025211254','5025211255','5025211256','5025211257','5025211259','5025211260','5025211261','5025211262','5025211263','5025211264'
];

function NrpSuggestions() {
    const nrpDropdown = document.getElementById('suggest_nrp');
    const inputNrpValue = document.getElementById('nrp').value.toLowerCase();
    nrpDropdown.innerHTML = '';

    if (inputNrpValue.length > 0) {
        suggestedNrp.forEach(suggestedNrp => {
            const suggestedNrpLowerCase = suggestedNrp.toLowerCase();
            if (suggestedNrpLowerCase.startsWith(inputNrpValue) &&
                suggestedNrpLowerCase.indexOf(inputNrpValue) === 0) {
                const option = document.createElement('option');
                option.value = suggestedNrp;
                option.textContent = suggestedNrp;
                option.addEventListener('click', function () {
                    document.getElementById('nrp').value = suggestedNrp;
                    nrpDropdown.innerHTML = '';
                });
                nrpDropdown.appendChild(option);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputNama = document.getElementById('nama');
    inputNama.addEventListener('input', NameSuggestions);
    const inputNrp = document.getElementById('nrp');
    inputNrp.addEventListener('input', NrpSuggestions);
    mata_kuliah.addEventListener('change', function () {
        generateDosen(mata_kuliah.value);
    });
});
