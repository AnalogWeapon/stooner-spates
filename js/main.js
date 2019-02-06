var spates = { "first": { "consonant": [ "Alab", "Alabam", "Alas", "Alask", "Ariz", "Ark", "Arkan", "Arkans", "Cal", "Calif", "Califor", "Californ", "Col", "Color", "Colorad", "Conn", "Connec", "Connect", "Del", "Delaw", "Flor", "Florid", "Geor", "Haw", "Idah", "Ill", "Illin", "Ind", "Indian", "Iow", "Kan", "Kans", "Ken", "Kent", "Kentuck", "Louis", "Louisian", "Main", "Mary", "Mass", "Massach", "Massachus", "Mich", "Michig", "Minn", "Minnes", "Miss", "Mississ", "Mon", "Mont", "Montan", "Neb", "Nebr", "Nebras", "Nev", "Hamp", "Hampsh", "Jers", "Mex", "Yor", "Car", "Carol", "Dak", "Oh", "Okl", "Oklah", "Oreg", "Penn", "Penns", "Pennsyl", "Pennsylv", "Rhod", "Tenn", "Tex", "Ut", "Ver", "Verm", "Vir", "Virg", "Wash", "Washing", "Wis", "Wisc", "Wiscon", "Wyom" ], "vowel": [ "Ala", "Alaba", "Ala", "Ari", "Arizo", "Arka", "Cali", "Califo", "Colo", "Colora", "Conne", "Connecti", "Dela", "Flori", "Geo", "Ha", "Ida", "Illi", "Indi", "India", "Io", "Ka", "Kansa", "Ke", "Kentu", "Loui", "Louisi", "Mai", "Mary", "Massa", "Massachu", "Michi", "Minne", "Minneso", "Mississi", "Missi", "Missou", "Monta", "Nebra", "Neva", "Hampshi", "Jerse", "Mexi", "Yo", "Caro", "Caroli", "Dako", "Ohi", "Okla", "Oklaho", "Ore", "Pennsy", "Pennsylva", "Rho", "Tenne", "Texa", "Uta", "Vermo", "Virgi", "Washi", "Wisco", "Wisconsi", "Wyo", "Wyomi" ] }, "last": { "consonant": [ "bama", "laska", "ska", "zona", "nsas", "sas", "fornia", "nia", "lorado", "rado", "cticut", "laware", "ware", "rida", "rgia", "waii", "daho", "ho", "nois", "diana", "na", "wa", "ntucky", "tucky", "siana", "ryland", "yland", "land", "ssachusetts", "chusetts", "setts", "chigan", "gan", "nnesota", "sota", "ssissippi", "ssippi", "ippi", "ssouri", "ntana", "tana", "braska", "raska", "vada", "mpshire", "shire", "rsey", "sey", "xico", "rolina", "lina", "kota", "hio", "klahoma", "lahoma", "homa", "regon", "gon", "nnsylvania", "sylvania", "lvania", "vania", "hode", "nnessee", "ssee", "xas", "tah", "rmont", "mont", "ginia", "shington", "ton", "sconsin", "sin", "ming" ], "vowel": [ "abama", "ama", "aska", "izona", "ona", "ansas", "ifornia", "ornia", "orado", "ado", "ecticut", "icut", "aware", "are", "orida", "ida", "eorgia", "ia", "aii", "awaii", "aho", "inois", "ois", "iana", "owa", "as", "ucky", "isiana", "iana", "aine", "yland", "achusetts", "usettes", "igan", "esota", "ota", "issippi", "ippi", "issouri", "ouri", "ana", "aska", "ada", "ampshire", "ire", "ersey", "exico", "ico", "ork", "olina", "akota", "ota", "io", "ahoma", "egon", "ylvania", "ania", "ode", "essee", "exas", "ah", "ont", "ington", "inia", "onsin", "oming" ] }, "prefix": [ "New", "North", "West" ], "postfix": [ "Island" ] };

$(function() {
    console.log(spates);
    newSpate();
});

$('#btn_another').on('click', function(e) {
    newSpate();
});

function newSpate() {
    var spate = [];

    if (randBool(.3)) spate.push(randVal(spates.prefix));
    if (randBool()) {
        spate.push(randVal(spates.first.consonant) + randVal(spates.last.vowel));
    } else {
        spate.push(randVal(spates.first.vowel) + randVal(spates.last.consonant));
    }
    if (randBool(.2)) spate.push(randVal(spates.postfix));
    
    $('#output').prepend('<li>' + spate.join(' ') + '</li>');
}

function clearSpates() {
    $('#output').empty();
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max -min) + min);
}

function randBool(trueChance = 0.5) {
    return Math.random() < trueChance;
}

function randVal(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}