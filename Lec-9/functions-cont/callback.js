
var data = [{l:5, b:8}, {l:6, b:10}, {l:4, b:4}, {l:20, b:8}];

// function area(l, b){return l*b;}
var area = (a,b) => a*b;
function perimeter(l, b){return 2*(l+b);}

function calculateAreas(data){
    var areas = [];
    for(var rect of data){
        var ans1 = area(rect.l, rect.b);
        areas.push(ans1);
    }
    return areas;
}

function calculatePerimeters(data){
    var perimeters = [];
    for(var rect of data){
        var ans2 = perimeter(rect.l, rect.b);
        perimeters.push(ans2);
    }

    return perimeters;
}

function calculate(data, logic){
    var output = [];
    for(let rect of data){
        var ans = logic(rect.l, rect.b);
        output.push(ans);
    }
    return output;
}

console.log(calculate(data, area))
console.log(calculate(data, perimeter))

// console.log(calculateAreas(data));
// console.log(calculatePerimeters(data));