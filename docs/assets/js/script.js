/* ========================================
   Nextwave Creators - 랜딩페이지 스크립트
   ======================================== */

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 네비게이션 스무스 스크롤 =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== 헤더 스크롤 효과 =====
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // ===== 스크롤 애니메이션 =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // 모든 섹션 관찰
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // ===== CTA 버튼 클릭 이벤트 =====
    document.querySelectorAll('.cta-button, .btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            // 실제 구현 시에는 모달이나 폼으로 연결
            alert('무료 상담 신청 기능이 곧 추가됩니다!');
        });
    });

    document.querySelectorAll('.btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            // 서비스 자세히 보기 기능
            document.querySelector('#features').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ===== 카드 호버 효과 개선 =====
    document.querySelectorAll('.feature-card, .product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===== 통계 카운터 애니메이션 =====
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (target >= 1000 ? '+' : '');
        }, 20);
    };

    // 통계 섹션이 보일 때 카운터 시작
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-item h3');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    if (number) {
                        stat.textContent = '0';
                        animateCounter(stat, number);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // ===== 모바일 메뉴 토글 (향후 확장용) =====
    // const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    // const navLinks = document.querySelector('.nav-links');
    
    // if (mobileMenuToggle && navLinks) {
    //     mobileMenuToggle.addEventListener('click', () => {
    //         navLinks.classList.toggle('active');
    //     });
    // }

    console.log('Nextwave Creators 랜딩페이지가 성공적으로 로드되었습니다!');
});
