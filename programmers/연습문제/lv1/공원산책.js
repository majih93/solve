// 이동 시 위치한 좌표의 값을 비교해서 처리하면 된다.

function solution(park, routes) {
    let answer = [];
    
    let curPoint = [];
    
    for(let i = 0; i < park.length; i++) {
        for(let j = 0; j < park[0].length; j++) {
            if(park[i][j] === "S") {
                curPoint.push(i);
                curPoint.push(j);
                i = park.length;
                break;
            }
        }
    }
    
    function validate(x, y) {
        if(x >= park.length || y >= park[0].length || x < 0 || y < 0) return false;
        if(park[x][y] === "X") return false;
        
        return true;
    }
    
    for(let x of routes) {
        const tempPoint = [...curPoint];
        
        let validateResult;
        
        let direction = x.split(" ")[0]
        let amount = Number(x.split(" ")[1])
        
        if (direction === "N") {
            for(let i = 1; i <= amount; i++) {
                tempPoint[0]--
                validateResult = validate(tempPoint[0], tempPoint[1]);
                
                if(!validateResult) break; 
            }
        }
        
        if (direction === "S") {
            for(let i = 1; i <= amount; i++) {
                tempPoint[0]++
                validateResult = validate(tempPoint[0], tempPoint[1]);
                
                if(!validateResult) break; 
            }
        }
        
        if (direction === "W") {
            for(let i = 1; i <= amount; i++) {
                tempPoint[1]--
                validateResult = validate(tempPoint[0], tempPoint[1]);
                
                if(!validateResult) break; 
            }
        }
        
        if (direction === "E") {
            for(let i = 1; i <= amount; i++) {
                tempPoint[1]++
                validateResult = validate(tempPoint[0], tempPoint[1]);
                
                if(!validateResult) break; 
            }
        }
        
        if(validateResult) curPoint = [...tempPoint];
        
        console.log(x, curPoint)
    }
    
    answer = [...curPoint];
    
    return answer;
}