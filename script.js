(function($) {
    "use strict";
 
    //Navigation
 
    var app = function() {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function() {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };
        init();
    }();
 
 
})(jQuery);
 
// dark light mode ================================================ //
const themeToggle = document.querySelector("#theme-toggle");
 
// Thêm sự kiện click cho nút chuyển đổi theme
themeToggle.addEventListener("click", () => {
    document.body.classList.contains("light") ?
        enableDarkMode() :
        enableLightMode();
 
    // Lưu trạng thái theme mới trong localStorage
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
});
 
function enableDarkMode() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    themeToggle.setAttribute("aria-label", "Bật light theme");
}
 
function enableLightMode() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    themeToggle.setAttribute("aria-label", "Bật dark theme");
}
 
function setThemePreference() {
    // Lấy trạng thái theme được lưu trữ trong localStorage (nếu có)
    const savedTheme = localStorage.getItem("theme");
 
    if (savedTheme) {
        // Thiết lập chế độ theme từ trạng thái đã lưu trữ
        document.body.classList.remove("light", "dark");
        document.body.classList.add(savedTheme);
        themeToggle.setAttribute("aria-label", savedTheme === "light" ? "Bật dark theme" : "Bật light theme");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Thiết lập chế độ theme mặc định dựa trên chế độ mà người dùng đang sử dụng
        enableDarkMode();
    } else {
        enableLightMode();
    }
}
 
// Thiết lập chế độ theme khi trang web được tải lại
document.onload = setThemePreference();
 
// ====== typing ===========================//
async function init() {
    const node = document.querySelector("#type-text")
 
    await sleep(2000)
    node.innerText = "> "
    await node.type('Hello, I am ')
 
    while (true) {
        await node.type('LEMIN!')
        await sleep(3000)
        await node.delete('hhieu02!')
        await node.type('a Hair Stylist')
        await sleep(3000)
        await node.delete('a Graphic Designer')
        await node.type('a ... ')
        await sleep(3000)
        await node.delete('a UX/UI Designer')
        await node.type('a Video Editor')
        await sleep(3000)
        await node.delete('a Video Editor')
        await node.type('Cường đẹp trai')
        await sleep(3000)
        await node.delete('Cường đẹp trai')
    }
}
 
const sleep = time => new Promise(resolve => setTimeout(resolve, time))
 
class TypeAsync extends HTMLSpanElement {
    get typeInterval() {
        const randomMs = 200 * Math.random() /*tốc độ typing*/
        return randomMs < 50 ? 10 : randomMs
    }
 
    async type(text) {
        for (let character of text) {
            this.innerText += character
            await sleep(this.typeInterval)
        }
    }
 
    async delete(text) {
        for (let character of text) {
            this.innerText = this.innerText.slice(0, this.innerText.length - 1)
            await sleep(this.typeInterval)
        }
    }
}
 
customElements.define('type-async', TypeAsync, {
    extends: 'span'
})
 
 
init()