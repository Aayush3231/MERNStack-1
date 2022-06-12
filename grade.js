var processStudent=function(tmpMarks){
    var tmpTotal=Number(tmpMarks.sub1)+Number(tmpMarks.sub2);
    console.log(tmpTotal);
    tmpMarks.total=tmpTotal;
    return tmpMarks;
}
//var processStudentV2()
