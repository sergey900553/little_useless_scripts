import React from "react";
import ReactDOM from "react-dom/client";


let playlist_action = document.querySelector(".playlist-action");

if (playlist_action) {
    playlist_action.style.cssText = "display: flex; align-items: center;"
    let container = document.createElement(`div`);
    container.id = "react_playlist_button_wrap";
    container.style.cssText = "";
    document.querySelector(".playlist-action").append(container);
}


const App = () => {

    let firstLocalName = "items";
    let secondLocalName = "items-later";
    let thirdLocalName = "items-cute";


    let btnStyle = {
        marginLeft: "5px",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "400",
        borderRadius: "2px",
    };

    let buttons_wrap = {
        marginLeft: "8px",
    }


    function updateList() {
        let firstLocalArray = JSON.parse(localStorage.getItem(firstLocalName) ?? "[]");
        let secondLocalArray = JSON.parse(localStorage.getItem(secondLocalName) ?? "[]");
        let thirdLocalArray = JSON.parse(localStorage.getItem(thirdLocalName) ?? "[]");

        let linksToDelete = new Set([...firstLocalArray, ...secondLocalArray, ...thirdLocalArray]);
        let allLinks = document.querySelectorAll(`.pcVideoListItem .usernameWrap a`);


        allLinks.forEach(link => {
            if (linksToDelete.has(link.href)) {
                link.closest("li").remove();
            }
        });
    }

    function delChannels() {
        let channels = document.querySelectorAll(`.pcVideoListItem.js-pop.videoblock.videoBox.canEdit .usernameWrap a`);

        channels.forEach(e => {
            if ((e.href).includes("channels")) {
                e.closest("li").remove();
            }
        });
    }


    function delPornoStar() {
        let channels = document.querySelectorAll(`.pcVideoListItem.js-pop.videoblock.videoBox.canEdit .usernameWrap a`);

        channels.forEach(e => {
            if ((e.href).includes("pornstar")) {
                e.closest("li").remove();
            }
        });
    }

    function scrolling() {
        const scrollDownInterval = setInterval(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 1000);

        const scrollUpInterval = setInterval(() => {
            window.scrollTo({ top: document.body.scrollHeight - 2000, behavior: 'smooth' });
        }, 2000);

        setTimeout(() => {
            clearInterval(scrollDownInterval);
            clearInterval(scrollUpInterval);
        }, 30000);
    }

    function openAllLinks() {
        const allLinks = document.querySelectorAll(`.pcVideoListItem.js-pop.videoblock.videoBox.canEdit .wrap .usernameWrap  a`);
        const uniqueLinks = new Set();

        allLinks.forEach((element) => {
            uniqueLinks.add(element.href);
        });

        uniqueLinks.forEach((item, i) => {
            setTimeout(() => {
                window.open(item, '_blank');
            }, i * 100);
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.shiftKey && e.code === 'KeyB') {
            updateList();
        }
    });




    return (
        <div id="buttons_wrap" style={buttons_wrap}>
            <button style={btnStyle} className="greyButton light" onClick={updateList} id="updateList">Обновить список</button>
            <button style={btnStyle} className="greyButton light" onClick={delChannels} id="delChannels">Удалить каналы</button>
            <button style={btnStyle} className="greyButton light" onClick={delPornoStar} id="delPornoStars">Удалить порнозвезд</button>
            <button style={btnStyle} className="greyButton light" onClick={scrolling}>Скроллинг</button>
            <button style={btnStyle} className="greyButton light" onClick={openAllLinks}>Открыть все профили</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('react_playlist_button_wrap'));
root.render(
    <App />
);





