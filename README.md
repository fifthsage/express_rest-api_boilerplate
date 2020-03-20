# Express Rest API bolierplate

| express, typescript, typeorm, swagger-ui, jest, sentry

## 프로젝트 설정

```bash
# env file
$ cp .env.example .env

# 의존성 설치
$ yarn

# db migration
$ yarn migrate

# 개발 서버 실행
$ yarn dev
```

그 외 명령어는 package.json script 참고

```bash
# feature (endpoint) 테스트
$ yarn test:feature
# unit 테스트
$ yarn test:unit

# 파일별 테스트
$ yarn test -f __tests__/[dir]/[filename].test.ts
```

### 공식 문서

- [Express](https://expressjs.com/ko/)
- [Open API Spec](https://swagger.io/specification/)
- [TypeORM Official DOC](https://typeorm.io)
