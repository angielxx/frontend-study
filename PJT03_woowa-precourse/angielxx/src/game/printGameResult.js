export const restartBtn = document.getElementById('game-restart-button')
export const result = document.getElementById('result')

export function printGameResult(gameResult) {
    if (gameResult === '정답') {
        result.innerHTML =
            '<span><strong>🎉 정답을 맞추셨습니다!🎉</strong></span><br>' +
            '<span>게임을 다시 시작하시겠습니까? </span>'
        restartBtn.classList.remove('hidden')
        // 정답일 때 true 반환
        return true;
    } else {
        result.innerHTML = `<span>${gameResult}</span>`
        // 정답이 아닐 때 false 반환
        return false;
    }
}