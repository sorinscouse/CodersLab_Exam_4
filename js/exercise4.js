const MAX = 180;
let userResults = [102, 120, 156, 23, 178];

$(document).ready(() => {
  let score = $(".score");
  let info = $(".info");
  userResults.forEach((e, i) => {
    score.eq(i).text(e);
    if (e >= 120) {
      info.eq(i).text("Passed");
    } else {
      info.eq(i).text("Failed");
    }
  });
});