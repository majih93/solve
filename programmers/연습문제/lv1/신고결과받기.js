// 신고 결과 받기

// function mySol(id_list, reports, k) {
//   let answer = [];

//   let 신고한사람목록 = new Map(); // 신고 현황 담을 자료구조
//   let 신고당한횟수목록 = new Map(); // 신고 당한 횟수 담을 구조

//   // 각 신고에 대해서 map 에 데이터 형성
//   for (let report of reports) {
//     // 신고자
//     let 신고자 = report.split(" ")[0];
//     // 신고 당한 사람
//     let 신고당한사람 = report.split(" ")[1];

//     // 신고자에 대해서는, 기존에 신고한 사람 목록이 있다면 해당 목록에 이번에 신고한 사람이 있는지 확인하고, 없으면 해당 목록에 이번에 신고한 사람 추가
//     if (신고한사람목록.has(신고자)) {
//       // 신고자가 기존 신고 목록이 존재하는 경우
//       if (
//         신고한사람목록.get(신고).includes(userWhoHasBeenReported) === false // 신고자 기존 목록에 이번에 신고한 사람 없으면
//       ) {
//         // 신고자 목록에 이번에 신고한 사람 추가
//         thisUserHasReported.set(userWhoReported, [
//           ...thisUserHasReported.get(userWhoReported),
//           userWhoHasBeenReported,
//         ]);
//       }
//     } else {
//       // 이번이 처음으로 누군가를 신고하는 경우
//       // 신고자 이름의 키에 신고당한 사람을 요소로 갖는 배열 추가
//       thisUserHasReported.set(userWhoReported, [userWhoHasBeenReported]);
//     }

//     // 신고 당한 사람에 대해서는, 기존에 신고 당한적이 있으면 count++, 없으면 새로 생성해서 1을 할당한다.
//     // 신고
//     if (thisUserHasBeenReported.has(userWhoHasBeenReported)) {
//       // 이번에 신고한 사람이 기존에 신고한 적이 없으면
//       if (
//         thisUserHasReported
//           .get(userWhoReported)
//           .includes(userWhoHasBeenReported) === false
//       ) {
//         thisUserHasBeenReported.set(
//           userWhoHasBeenReported,
//           thisUserHasBeenReported.get(userWhoHasBeenReported) + 1
//         );
//       }
//     } else {
//       // 없는경우, 새롭게 생성하고 1을 할당
//       thisUserHasBeenReported.set(userWhoHasBeenReported, 1);
//     }
//   }

//   console.log(thisUserHasReported);
//   console.log(thisUserHasBeenReported);

//   // 유저 목록에 대해서 메일 받을 횟수 처리
//   for (let user of id_list) {
//     let mailCount = 0; // 메일 받을 횟수 보관하는 변수
//     // 해당 유저가 신고한 사람의 목록에 대해서 순회

//     // 신고한 사람이 있는지 확인
//     if (thisUserHasReported.has(user)) {
//       for (let reportedUser of thisUserHasReported.get(user)) {
//         // 신고한 사람이 몇 번 신고당했는지 확인
//         if (thisUserHasBeenReported.get(reportedUser) >= k) {
//           mailCount++;
//         }
//       }
//     }
//     answer.push(mailCount);
//   }

//   return answer;
// }

function mySol(id_list, report_list, k) {
  let answer = [];

  // 데이터 저장소 초기화
  let amap = new Map();
  let bmap = new Map();

  // 1. 신고 목록 순회

  for (let report of report_list) {
    // 신고자와 신고한ID 로 구분
    let reporter = report.split(" ")[0];
    let reportID = report.split(" ")[1];

    // console.log(`신고자: ${reporter}, 신고한 ID: ${reportID}`);
    // 1-1. 신고자가 신고한 사람 목록에 해당 사람을 추가
    if (amap.has(reporter)) {
      // 누굴 신고한 적은 있는데, 신고한 사람 목록에 이번에 신고한 놈이 없어.
      if (amap.get(reporter).has(reportID) === false) {
        // 얘를 신고하는 최초인 경우
        if (bmap.has(reportID)) {
          // 신고당한 적이있는놈이야
          bmap.set(reportID, bmap.get(reportID) + 1);
        } else {
          // 신고 당한 적이 없는 놈이야
          bmap.set(reportID, 1);
        }
        // 처리 먼저 한 다음에 신고한 놈 추가
        amap.get(reporter).add(reportID);
      } else {
        // 신고한놈이 기존에 신고한 적이 있어 -> 할게 없음.
      }
      // amap.get(reporter).add(reportID);
    } else {
      // 아직 누군가를 신고한 적이 없어 -> amap 에 등록하고, 이번에 신고한 놈 배열에 넣어서 값으로 할당
      amap.set(reporter, new Set([reportID]));
      // 최초 신고니까 count 처리 해야되는데, 이놈 기존에 처리 되었던 놈이면 ++, 아니면 set 1
      if (bmap.has(reportID)) {
        // 기존에도 신고당한 적이 있는 놈이야
        bmap.set(reportID, bmap.get(reportID) + 1);
      } else {
        // 기존에 신고당한 적이 없는 놈이야
        bmap.set(reportID, 1); // 1번 신고로 처리
      }
    }
  }

  // console.log(`신고자가 신고한 사람 목록:`);
  // console.log(amap);
  // console.log(`신고당한사람의 신고당한 횟수 목록:`);
  // console.log(bmap);

  // 2. id 목록 순회

  for (let user of id_list) {
    let mailCount = 0;
    // 해당 사람이 신고한 목록 있다면, 순회 , 신고자 목록: amap
    if (amap.has(user)) {
      for (let reportedID of amap.get(user)) {
        // 해당 사람이 몇 번 신고당했는지 count
        if (bmap.get(reportedID) >= k) {
          mailCount++;
          // console.log(
          //   `${user}님, 님이 리폿하신 ${reportedID}는 ${bmap.get(
          //     reportedID
          //   )}번 신고당해서, 정지를 처먹었어요.`
          // );
        }
      }
    }

    answer.push(mailCount);
  }
  return answer;
}

// console.log(mySol());

console.log(
  mySol(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  mySol(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);

// let newSet = new Set();

// newSet.add("muzi");

// console.log(newSet);

// newSet.add("muzi");

// console.log(newSet);

// let newMap = new Map();

// newMap.set("muzi", new Set());

// console.log(newMap);

// newMap.get("muzi").add("frodo");
// newMap.get("muzi").add("frodo");
// newMap.get("muzi").add("apeach");

// console.log(newMap);

// for (let id of newMap.get("muzi")) {
//   console.log(id);
// }

// let newSetwith = new Set(["muzi"]);
// console.log(newSetwith);

// console.log(newSet.has("muzi")); // true

// for (let x of newSet) {
//   console.log(typeof x);
// }
