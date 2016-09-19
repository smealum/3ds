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

function getMenuVersion(v)
{
    if(v[4]=="K")
    {
        if(v[0] == 9)
        {
            if (v[1]==6)
            {
                return "6166_kor";
            }else if (v[1]>6)
            {
                return "7175_kor";
            }
        }else if(v[0] == 10)
        {
            if (v[1]==0)
            {
                return "7175_kor";
            }else if (v[1]==1)
            {
                return "8192_kor";
            }else if (v[1]==2)
            {
                return "9216_kor";
            }else if (v[1]==3)
            {
                return "10240_kor";
            }else if (v[1]>=6)
            {
                return "12288_kor";
            }else if (v[1]>=4)
            {
                return "11266_kor";
            }
        }else if(v[0] == 11)
        {
            if (v[1]==0)
            {
                return "12288_kor";
            }else if (v[1]==1)
            {
                return "13312_kor";
            }
        }
    }else{
        if(v[0]==9)
        {
            if (v[1]==0 || v[1]==1)
            {
                return "11272";
            }
            else if (v[1]==2)
            {
                return "12288";
            }
            else if (v[1]==3)
            {
                return "13330";
            }
            else if (v[1]==4)
            {
                return "14336";
            }
            else if (v[1]==5)
            {
                return "15360";
            }
            else if (v[1]==6)
            {
                return "16404";
            }
            else if (v[1]==7)
            {
                return "17415";
            }
            else if (v[1]==9 && v[4]=="U")
            {
                return "20480_usa";
            }
            else if (v[1]>=8)
            {
                return "19456";
            }
        }else if(v[0]==10)
        {
            if(v[1]==0)
            {
                if (v[4]=="U")
                {
                    return "20480_usa";
                }
                else
                {
                    return "19456";
                }
            }else if(v[1]==1)
            {
                if (v[4]=="U")
                {
                    return "21504_usa";
                }
                else
                {
                    return "20480";
                }
            }else if(v[1]==2)
            {
                if (v[4]=="U")
                {
                    return "22528_usa";
                }
                else
                {
                    return "21504";
                }
            }else if(v[1]==3)
            {
                if (v[4]=="U")
                {
                    return "23552_usa";
                }
                else
                {
                    return "22528";
                }
            }else if(v[1]==4 || v[1]==5)
            {
                if (v[4]=="U")
                {
                    return "24578_usa";
                }
                else
                {
                    return "23554";
                }
            }else if(v[1]>=6)
            {
                if (v[4]=="U")
                {
                    return "25600_usa";
                }
                else
                {
                    return "24576";
                }
            }
        }else if(v[0]==11)
        {
            if (v[1]==0)
            {
                if (v[4]=="U")
                {
                    return "25600_usa";
                }
                else
                {
                    return "24576";
                }
            }else{
                if (v[4]=="U")
                {
                    return "26624_usa";
                }
                else
                {
                    return "25600";
                }
            }
        }
    }
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

function versionNeedsQrInstaller(v)
{
    return v[0] >= 11;
}

window.onload=function(){
;
(function () {
    'use strict';

    var regions = {
        'E' : {},
        'U' : {},
        'J' : {},
        'K' : {}
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
            '0': zeroMicro_1,
            '1': zeroMicro_1
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
