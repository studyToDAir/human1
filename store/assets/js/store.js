window.addEventListener('load', function () {
    bind();
})

function bind() {
    document.querySelector('#show').addEventListener('click', function () {


        let html = '';
        for (let i = 0; i < 7; i++) {
            html += '<div class="item">';
            html += '    <div>';
            html += '        <img src="assets/img/지갑.png">';
            html += '    </div>';
            html += '    <div class="brand">';
            html += '        Chanel';
            html += '    </div>';
            html += '    <div class="name">';
            html += '        Chanel Classic Card Holder Grained Calfskin & Silver Black';
            html += '    </div>';
            html += '    <div class="desc" title="샤넬 클래식 카드 홀더 그레인드 카프스킨 & 실버 메탈 블랙">';
            html += '        샤넬 클래식 카드 홀더 그레인드 카프스킨 & 실버 메탈 블랙';
            html += '    </div>';
            html += '    <div class="price">';
            html += '        1,121,000원';
            html += '   </div >';
            html += '</div >';

        }
        document.querySelector('#contents').innerHTML = html;


    })

}
