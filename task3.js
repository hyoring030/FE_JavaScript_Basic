/* 3번 문제 답안을 작성해주세요. */
function fac(n){
    let a=1;
    for(let i=1; i<= n;i++){
    a=a*i;
    }
    return a;
}

function solution(n) {
    var answer = 0;
    for(let i=1; fac(i)<=n;i++){   
    answer=i;
    }

    return answer;
}