/* ========================================
   F&B 상품 리스트 페이지 전용 스크립트
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== 필터 탭 기능 =====
    const filterTabs = document.querySelectorAll('.filter-tab');
    const productCards = document.querySelectorAll('.product-card-detailed');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 활성 탭 변경
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 카테고리 필터링
            const category = this.getAttribute('data-category');
            
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // ===== 정렬 기능 =====
    const sortSelect = document.querySelector('.sort-select');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            const productsGrid = document.querySelector('.products-grid-detailed');
            const products = Array.from(productCards);
            
            // 정렬 로직 (실제 구현 시에는 서버에서 처리)
            products.sort((a, b) => {
                switch(sortBy) {
                    case 'popular':
                        return Math.random() - 0.5; // 임시 랜덤 정렬
                    case 'newest':
                        return Math.random() - 0.5;
                    case 'price-low':
                        return Math.random() - 0.5;
                    case 'price-high':
                        return Math.random() - 0.5;
                    default:
                        return 0;
                }
            });
            
            // DOM에서 재정렬
            products.forEach(product => {
                productsGrid.appendChild(product);
            });
        });
    }
    
    // ===== 상품 카드 클릭 이벤트 =====
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            // 상품 상세 페이지로 이동 (구현 예정)
            console.log('상품 상세 페이지로 이동:', this.querySelector('.product-title').textContent);
        });
    });
    
    // ===== 무한 스크롤 (향후 구현) =====
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // 더 많은 상품 로드
    //             loadMoreProducts();
    //         }
    //     });
    // });
    
    // const lastProduct = productCards[productCards.length - 1];
    // if (lastProduct) {
    //     observer.observe(lastProduct);
    // }
    
    console.log('F&B 상품 리스트 페이지가 로드되었습니다!');
});
