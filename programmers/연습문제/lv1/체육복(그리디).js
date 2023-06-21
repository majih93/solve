// 그리디로 명시되어 있지 않았다면 왜 그리디 알고리즘으로 풀어야한다는 결론에 도달했을까?
// 문제의 최종 해결 방법이 부분 문제에 대한 최적 해결 방법으로 구성될 수 있어야 한다.
// 항상 최적의 해를 보장하는 알고리즘이 아니기 때문에
// 그리고 앞의 선택이 뒤의 선택에 영향을 주지 않아야 한다.

// 학생의 최대값을 구하려면, 무조건 일단 자기 앞에 있는 애한테 빌려야 함.
// 한쪽으로 정해진 방향으로 빌려주면 된다. 
// 1번 2개 2번 도난 3번 2개 이런 식인 경우, 어떻게 빌려야할지 모르는데 우선 앞에 친구한테 빌리고 없으면 뒤에 친구한테 빌리는 형태로 가면 되지 않을지?

// 추가 조건
// 여벌 체육복 가져온 친구도 도난 당했을 수 있음 -> 이 경우 그냥 1개 가져온 사람 취급되어야 한다.

function solution1(n, lost, reserve) {
    let answer = 0;
    
    // 잃어버린 애들하고 여벌 있는 애들 map 으로 만들어서 처리해보자.
    let lostMap = new Map();
    let reserveMap = new Map();
    
    // 학생들의 수가 많지 않으므로, 애초에 2개 가져온 애들 중에 잃어버린 애들에 대한 경우의 수를 미리 제거하는 것이 차후 계산이 편함
    // 여벌 가져온 애들 Map
    for(let x of reserve) {
        reserveMap.set(x, 1); 
    }

    // 잃어버린 애들 Map
    for(let x of lost) {    
        // 해당 아이가 2벌 있는 아이인 경우 맞춰서 체크
        if(reserveMap.has(x)) {
            // 1벌 있는 일반 케이스이므로 제거
            reserveMap.delete(x);
        } else {
            lostMap.set(x, 1)
            // else 문제 넣어서 reserve 가 없는 친구들만 진짜 잃어버린 친구들로 처리해주어야 한다.
        }
    }
    // 이러면 reserveMap 에는 2벌이 온전히 있는 애들만 존재함.
    
    // 1 ~ n 까지 돌면서
    // 체육복 잃어버리지 않은 경우 -> answer++;
    // 체육복 잃어버린 경우
    // - 앞에 사람이 2개인지 체크, ( 앞에 사람이 있는 경우)
    //// if yes, 앞에 사람 reserve 에서 제거/ answer++ / lost 에거 해당 친구 제거
    //// if no, 뒤에 사람 있는 경우 뒤에 2개인지 체크, if yes, 같은 처리
    // 이런 경우에만 answer++ 해주면 된다.
    // 이렇게 앞순서부터 처리하면 전체적으로 최적의 해가 되지 않을까?
    for(let i = 1; i <= n; i++) {
        if(lostMap.has(i)) {
            // 앞에 친구가 있는 경우 앞 친구 확인
            if(i > 1 && reserveMap.has(i-1)) {
                answer++;
                reserveMap.delete(i-1);
            } else if(i < n && reserveMap.has(i+1)) {
                answer++;
                reserveMap.delete(i+1);
            }
            
        } else {
        // 잃어버리지 않은 경우 -> ++
            answer++;
        }
    }
    
    return answer;
}


// solution 1 같은 경우 실행하면 통과하는데 실패하는 케이스가 존재함.
// 부분 문제를 잘못 정의한 듯.

// 무조건 일단 앞에서 빌려보고 안되면 뒤에서 빌린다 컨셉이 문제를 해결하나?

// 모르겠음 확신이 안섬 근거가 없음
// 그게 아니라, 2벌인 애들 중에 잃어버린 애들은 2벌에서만 제거하는게 아니라, 잃어버린 애들 배열에서도 제거해주어야 했다.



// console.log(solution1(5, [2,4], [1,5]));
// console.log(solution1(8, [1,4,8], [2,3,5,7]));
// console.log(solution1(13, [2,6,10,13], [1,4,8,11]));
// console.log(solution1(5, [3,4], [1,2,5]));

console.log(solution1(5, [1,2,3,4,5],[5]))

