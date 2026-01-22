// HTML Beautifier 스크립트
const fs = require('fs');

function beautifyHTML(html) {
    // 기본적인 HTML 포맷팅
    let formatted = html
        // 태그 사이에 줄바꿈 추가
        .replace(/></g, '>\n<')
        // 들여쓰기 추가
        .split('\n')
        .map((line, index, array) => {
            const trimmed = line.trim();
            if (!trimmed) return '';
            
            // 닫는 태그는 들여쓰기 감소
            if (trimmed.startsWith('</')) {
                return '  '.repeat(Math.max(0, getIndentLevel(trimmed) - 1)) + trimmed;
            }
            
            // 여는 태그는 들여쓰기 유지
            return '  '.repeat(getIndentLevel(trimmed)) + trimmed;
        })
        .join('\n');
    
    return formatted;
}

function getIndentLevel(line) {
    // 간단한 들여쓰기 레벨 계산
    const openTags = (line.match(/</g) || []).length;
    const closeTags = (line.match(/<\//g) || []).length;
    return Math.max(0, openTags - closeTags);
}

// 파일 읽기 및 포맷팅
const inputFile = process.argv[2] || 'test.html';
const outputFile = process.argv[3] || inputFile.replace('.html', '-beautified.html');

try {
    const htmlContent = fs.readFileSync(inputFile, 'utf8');
    const beautifiedHTML = beautifyHTML(htmlContent);
    
    fs.writeFileSync(outputFile, beautifiedHTML, 'utf8');
    console.log(`✅ HTML이 뷰티파이되어 ${outputFile}에 저장되었습니다.`);
} catch (error) {
    console.error('❌ 오류 발생:', error.message);
}



