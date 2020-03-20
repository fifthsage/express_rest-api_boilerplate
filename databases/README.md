# 데이터베이스

### TypeORM 마이그레이션

```bash
# 모든 테이블 삭제(개발시에만 사용)
yarn schema:drop

# 마이그레이션 파일 자동 생성(최초 테이블 생성 시)
yarn migration:generate Init

# 마이그레이션 파일 생성 후 직접 작성
yarn migration:create [filename]

# 마이그레이션 진행
yarn migrate
```

### 시딩하기

#### 모든 데이터 시딩하기(케어코디 사진 제외)

```bash
yarn db:seed
```

#### 선택적으로 시딩하기

```bash
yarn db:seed question unit-price ...
```

#### ADMIN Gsuit-Email 포함 시켜서 시딩

```bash
yarn db:seed --include-admin=sh_choi@caredoc.kr,...
```

#### 케어코디 특정 스프레드시트와 특정 범위 시딩

##### --spreadSheetId=[SPREAD_SHEET_ID]

##### --sheetName=[SHEET_NAME]

##### --startRow=[START_ROW]

##### --endRow=[END_ROW]

```bash
yarn db:seed --spreadSheetId=1WcUdW5lHkSmS07XpRsY0t6-A0aC3fMLIwdQO64LYuQQ --sheetName=케어코디_DB --startRow=1 --endRow=9999
```

#### 케어코디 사진 시딩

```bash
yarn db:seed carecoordi-photo
```

#### 케어코디 업데이트 하기

##### (선호지역, 선호요일/시간, 자격증, 체크항목은 업데이트 하지 않음. 없을 경우만 추가)

```bash
yarn db:seed carecoordi -update --startRow=4
```
