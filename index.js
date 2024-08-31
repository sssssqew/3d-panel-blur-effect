let stickySections = [...document.querySelectorAll('.sticky')]

function animate(){
    for (let i = 0; i < stickySections.length; i++) {
        let { top } = stickySections[i].parentElement.getBoundingClientRect() // section 과 브라우저 상단간의 거리
        let transTop = top > 0 ? 0 : top * -1
        if(i === 0) console.log(top, transTop) // top 이 0 보다 작거나 같아지면(특정 섹션이 브라우저 상단보다 더 올라가면) top 을 반전시킴. top (-94) 일때 transTop (94)

        if(transTop > 1000){
            transTop = 1000 // 1000px 로 제한
            console.log('limit')
        }
        if(top <= 0 && i !== stickySections.length - 1){ // 마지막 섹션에서는 애니메이션 적용하지 않기 위해서
            stickySections[i].style.filter = `blur(${0 + (transTop * 0.01)}px)` // 현재 이동중인 섹션을 블러처리함 (점점 섹션이 올라갈수록 transTop 이 양수이고 커지므로 올라갈수록 더 흐릿해짐)
            stickySections[i].style.transform = `scale3d(${1 - transTop * 0.001}, ${1 - transTop * 0.001}, 1)` // transTop 이 양수로 점점 커지므로 1에서 뺀 값은 점점 작아진다. 즉, 섹션이 올라가면서 점점 작아진다.

        }
    }
    requestAnimationFrame(animate)
}
animate()