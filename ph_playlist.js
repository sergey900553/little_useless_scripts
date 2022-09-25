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
        let firstLocalArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
        let secondLocalArray = localStorage.getItem("items-later") ? JSON.parse(localStorage.getItem("items-later")) : [];
        let thirdLocalArray = localStorage.getItem("items-cute") ? JSON.parse(localStorage.getItem("items-cute")) : [];

        let listDeletes = [...firstLocalArray, ...secondLocalArray, ...thirdLocalArray];
        let allLinks = document.querySelectorAll(`.pcVideoListItem .usernameWrap a`);
        let linksIncludes = [];

        allLinks.forEach(e => {
            if (listDeletes.includes(e.href)) {
                linksIncludes.push(e);
            }
        });
        linksIncludes.forEach(e => e.closest("li").remove());
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
        let id2 = setInterval(() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'}), 1000);
        let id1 = setInterval(() => window.scrollTo({top: document.body.scrollHeight - 2000, behavior: 'smooth'}), 2000);

        setTimeout(function () {
            clearInterval(id1);
            clearInterval(id2);
        }, 30000);
    }


    function openAllLinks() {
        let allLinks = document.querySelectorAll(`.pcVideoListItem.js-pop.videoblock.videoBox.canEdit .wrap .usernameWrap  a`);

        let uniqueLinks = [];
        allLinks.forEach((element) => {
            if (!uniqueLinks.includes(element.href)) {
                uniqueLinks.push(element.href);
            }
        });

        uniqueLinks.forEach((item, i) => {
            setTimeout(() => {
                window.open(item, '_blank');
            }, i * 100);
        });
    }


    function addPlaylist() {
        let itemsArray = localStorage.getItem('items-playlist') ? JSON.parse(localStorage.getItem('items-playlist')) : [];
        if (!itemsArray.includes(window.location.href)) {
            itemsArray.push(window.location.href);
        }
        localStorage.setItem('items-playlist', JSON.stringify(itemsArray))
        setIsPlaylistInLocal(true);
    }


    document.addEventListener('keydown', function (e) {
        if (e.shiftKey && e.code === 'KeyB' && window.location.href.includes("playlist")) {
            updateList();
            delChannels();
            delPornoStar();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.code === 'KeyB' && window.location.href.includes("playlist")) {
            addPlaylist();
        }
    });





    let items_playlist_local = localStorage.getItem("items-playlist") ? JSON.parse(localStorage.getItem("items-playlist")) : [];
    let [isPlaylistInLocal, setIsPlaylistInLocal] = React.useState(items_playlist_local.includes(window.location.href));

    function ifExistChangeColor() {
        let playlistName = document.querySelector(".playlistTitle.watchPlaylistButton.js-watchPlaylistHeader.js-watchPlaylist");
        isPlaylistInLocal && (playlistName.style.cssText = "color: red;");
    }

    ifExistChangeColor();



    return (
        <div id="buttons_wrap" style={buttons_wrap}>
            <button style={btnStyle} className="greyButton light" onClick={updateList}>Обновить список</button>
            <button style={btnStyle} className="greyButton light" onClick={delChannels}>Удалить каналы</button>
            <button style={btnStyle} className="greyButton light" onClick={delPornoStar}>Удалить порнозвезд</button>
            <button style={btnStyle} className="greyButton light" onClick={scrolling}>Скроллинг</button>
            <button style={btnStyle} className="greyButton light" onClick={openAllLinks}>Открыть все профили</button>
            <button style={btnStyle} className="greyButton light" onClick={addPlaylist}>Добавить плейлист в список</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('react_playlist_button_wrap'));
root.render(
    <App/>
);




function ChangeColor() {
    let allLink = document.querySelectorAll(`.videos.row-3-thumbs.user-playlist.feedSize .full-width .title.display-block a`) ? document.querySelectorAll(`.videos.row-3-thumbs.user-playlist.feedSize .full-width .title.display-block a`) : null;
    let listDeletes = JSON.parse(localStorage.getItem('items-playlist'));
    let linksinclude = [];

    for (let i = 0; i < allLink.length; i++) {
        if (listDeletes.includes(allLink[i].href)) {
            linksinclude.push(allLink[i]);
        }
    }
    linksinclude.forEach((e) => {
        e.style = "color: red;"
    });
}

ChangeColor();
