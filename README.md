# Nextwave Creators

인플루언서 커머스의 새로운 패러다임을 제시하는 통합 플랫폼입니다.

## 프로젝트 구조

```
/nwc/
├── docs/                          # GitHub Pages 루트 (정적 웹사이트)
│   ├── index.html                 # 메인 페이지
│   ├── fnb-products.html          # F&B 상품 페이지
│   ├── product-detail.html        # 상품 상세 페이지
│   └── assets/                    # 정적 자산
│       ├── css/                   # 스타일시트
│       ├── js/                    # JavaScript 파일
│       └── images/                # 이미지 파일
└── .github/workflows/            # GitHub Actions 설정
```

## 웹사이트 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### 로컬에서 실행하기

1. 저장소를 클론합니다:
```bash
git clone <repository-url>
cd nwc
```

2. 웹사이트를 로컬에서 확인하려면:
```bash
cd docs
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`으로 접속하세요.

## API 서버

API 서버는 별도 저장소(`nwc-api`)에서 관리됩니다. 
- **저장소**: `nwc-api` (별도 Git 저장소)
- **배포**: Heroku, Railway, 또는 다른 클라우드 서비스
- **문서**: `nwc-api` 저장소의 README.md 참조

## 기술 스택

- **프론트엔드**: HTML5, CSS3, JavaScript (Vanilla)
- **백엔드**: Python Flask
- **데이터베이스**: SQLite
- **배포**: GitHub Pages (웹사이트), 별도 서버 (API)

## 라이선스

© 2024 Nextwave Creators. All rights reserved.
