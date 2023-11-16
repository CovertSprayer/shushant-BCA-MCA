function outerFun(){
    let x = 10;

    function innerFun(){
        let a = 100;
        x++;
        // console.log(x);

        function innerMostFun(){
            a++;
            x++;
            console.log(x, a);
        }

        return innerMostFun;
    }

    return innerFun;
}

let temp = outerFun();

let fun1 = temp();
let fun2 = temp();

fun1()
fun1()
fun1()
fun2()
fun2()
fun1()