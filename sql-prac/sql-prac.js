const mysql = require('mysql');

//npm install -s mysql 모듈 설치 해야함
//이부분 보통 모듈화 해서 쓰는것 같음
//db 연동하기 
const db = mysql.createConnection({
  //본인 아이디 패스워드 db이름 사용할 것 
  host:'localhost',
  user:'root',
  password:'admin',
  database:'test_2',
}) 

db.connect();

//여기도 모듈화 하는 것 같음
//연결 잘되었는지 확인 하는 작업
db.query('SELECT * FROM  test',function(err,results,fields){
  if(err){
    console.log(err);
  }
  console.log(results);
});
//db.query 로 테이블 CRUD, 컬럼 CRUD , 데이터 CRUD 전부 가능하다.
db.query('ALTER TABLE test DROP COLUMN content');
db.end();

