function getRegion(v)
{
    return v[4];
}

function getFirmVersion(v)
{
    if(v[5]=="NEW")
    {
        return "N3DS";
    }else{
        if(v[0]<5)
        {
            return "PRE5";
        }else{
            return "POST5";
        }
    }
}

var VERSION_MAP = {
    9: {
        0: {E: "11272", U: "11272", J: "11272", K: ""},
        1: {E: "11272", U: "11272", J: "11272", K: ""},
        2: {E: "12288", U: "12288", J: "12288", K: ""},
        3: {E: "13330", U: "13330", J: "13330", K: ""},
        4: {E: "14336", U: "14336", J: "14336", K: ""},
        5: {E: "15360", U: "15360", J: "15360", K: ""},
        6: {E: "16404", U: "16404", J: "16404", K: "6166_kor"},
        7: {E: "17415", U: "17415", J: "17415", K: "7175_kor"},
        8: {E: "19456", U: "19456", J: "19456", K: "7175_kor"},
        9: {E: "19456", U: "20480_usa", J: "19456", K: "7175_kor"},
    },
    10: {
        0: {E: "19456", U: "20480_usa", J: "19456", K: "7175_kor"},
        1: {E: "20480", U: "21504_usa", J: "20480", K: "8192_kor"},
        2: {E: "21504", U: "22528_usa", J: "21504", K: "9216_kor"},
        3: {E: "22528", U: "23552_usa", J: "22528", K: "10240_kor"},
        4: {E: "23554", U: "24578_usa", J: "23554", K: "11266_kor"},
        5: {E: "23554", U: "24578_usa", J: "23554", K: "11266_kor"},
        6: {E: "24576", U: "25600_usa", J: "24576", K: "12288_kor"},
        7: {E: "24576", U: "25600_usa", J: "24576", K: "12288_kor"},
    },
    11: {
        0: {E: "24576", U: "25600_usa", J: "24576", K: "12288_kor"},
    },
}

function getMenuVersion(v)
{
    return VERSION_MAP[v[0]][v[1]][v[4]];
}


function getMsetVersion(v)
{
    if(v[0] == 9 && v[1] < 6)
    {
        return "8203";
    }
    else
    {
        return "9221";
    }
}

function getFilenameFromVersion(v)
{
    return getFirmVersion(v)+"_"+getRegion(v)+"_"+getMenuVersion(v)+"_"+getMsetVersion(v);
}

window.onload=function(){
;
(function () {
    'use strict';

    var regions = {
        'E' : {},
        'U' : {},
        'J' : {},
        'K' : {},
    }

    var NUPs_1 = {
        '7' : regions,
        '8' : regions,
        '9' : regions,
        '10' : regions,
        '11' : regions,
        '12' : regions,
        '13' : regions,
        '14' : regions,
        '15' : regions,
        '16' : regions,
        '17' : regions,
        '18' : regions,
        '19' : regions,
        '20' : regions,
        '21' : regions,
        '22' : regions,
        '23' : regions,
        '24' : regions,
        '25' : regions,
        '26' : regions,
        '27' : regions,
        '28' : regions,
        '29' : regions,
        '30' : regions,
        '31' : regions,
        '32' : regions,
        '33' : regions,
        '34' : regions,
        '35' : regions,
        '36' : regions,
        '37' : regions,
        '38' : regions,
        '39' : regions,
        '137' : regions,
        '999' : regions
    }

    var zeroMicro_1 = {
        '0' : NUPs_1
    }

    var oldOptions = {
        '9': {
            '0': zeroMicro_1,
            '1': zeroMicro_1,
            '2': zeroMicro_1,
            '3': zeroMicro_1,
            '4': zeroMicro_1,
            '5': zeroMicro_1,
            '6': zeroMicro_1,
            '7': zeroMicro_1,
            '8': zeroMicro_1,
            '9': zeroMicro_1
        },
        '10': {
            '0': zeroMicro_1,
            '1': zeroMicro_1,
            '2': zeroMicro_1,
            '3': zeroMicro_1,
            '4': zeroMicro_1,
            '5': zeroMicro_1,
            '6': zeroMicro_1,
            '7': zeroMicro_1
        },
        '11': {
            '0': zeroMicro_1
        }
    }

    var options = {
        'OLD': oldOptions,
        'NEW': oldOptions
    }

    var state = {};

    var range = function (a, b) {
        var xs = [];
        for (var i = a; i < b; ++i)
        xs.push(i);
        return xs;
    };

    var update = function (id) {
        var node = document.querySelector('[data-id="' + id + '"]');

        if (!node) {
            return;
        }

        range(id, 5).map(function (i) {
            delete state[i];
        });

        node.innerHTML = '';

        var lens = range(0, id).reduce(function (acc, i) {
            return acc[state[i]] || {};
        }, options);

        Object.keys(lens).map(function (v) {
            var opt = document.createElement('option');
            opt.value = v;
            opt.innerHTML = v;

            node.appendChild(opt);
        });
        state[id] = state[id] || Object.keys(lens)[0];

        update(id + 1);
    };

    /* NodeList does not have map */
    var selects = document.querySelectorAll('.firmware-form select');
    for (var i = 0; i < selects.length; ++i) {
        selects[i].addEventListener('change', function (e) {
            state[e.target.dataset.id] = e.target.value;
            update(parseInt(e.target.dataset.id, 10) + 1);
        });
    }

    update(0);

    global_version = state;

    // document.querySelector('.firmware-form').addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     alert(state[0] + '.' + state[1] + '.' + state[2] + '-' + state[3] + state[4]);
    // });

})();
}
