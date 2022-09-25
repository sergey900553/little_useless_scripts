let link;
let H1;

if (document.querySelector(".userInfo")) {
    let container = document.createElement(`div`);
    container.id = "react_shit";
    container.style.cssText = "display: inline-block; vertical-align: middle;";
    document.querySelector(".userInfo").after(container);
    link = document.querySelector(`.video-info-row.userRow span a`) ? document.querySelector(`.video-info-row.userRow span a`).href : null;
    H1 = document.querySelector(".inlineFree") ? document.querySelector(".inlineFree") : null;
}


if (document.querySelector(".name")) {
    let container = document.createElement(`div`);
    container.id = "react_shit";
    container.style.cssText = "display: inline-block; vertical-align: middle;";
    document.querySelector(".name").after(container)
    link = document.querySelector(`#profileHome a`) ? document.querySelector(`#profileHome a`).href : null;
    H1 = document.querySelector(".nameSubscribe h1") ? document.querySelector(".nameSubscribe h1") : null;
}


const App = () => {

    let firstLocalName = "items";
    let secondLocalName = "items-later";
    let thirdLocalName = "items-cute";

    let firstLocalArray = localStorage.getItem(firstLocalName) ? JSON.parse(localStorage.getItem(firstLocalName)) : [];
    let secondLocalArray = localStorage.getItem(secondLocalName) ? JSON.parse(localStorage.getItem(secondLocalName)) : [];
    let thirdLocalArray = localStorage.getItem(thirdLocalName) ? JSON.parse(localStorage.getItem(thirdLocalName)) : [];

    let [isIncludeInFirstArray, setIncludeInFirstArray] = React.useState(firstLocalArray.includes(link));
    let [isIncludeInSecondArray, setIncludeInSecondArray] = React.useState(secondLocalArray.includes(link));
    let [isIncludeInThirdArray, setIncludeInThirdArray] = React.useState(thirdLocalArray.includes(link));


    const stylesContainers = {
        display: "inline-grid",
        marginLeft: "10px",

    }
    const stylesBtn = {
        padding: "2px",
        marginBottom: " 3px",
        cursor: "pointer",
    }

    function addToLocal(storage_item_name, storage_item_array, isIncludeInLocalArray) {

        if (!storage_item_array.includes(link)) {
            storage_item_array.push(link);
        }
        localStorage.setItem(storage_item_name, JSON.stringify(storage_item_array))
        isIncludeInLocalArray(true)

    }

    function showList(storage_item) {
        if (JSON.parse(localStorage.getItem(storage_item)) == null) {
            alert("Список пустой");
            return;
        }

        function urlSiteCrop(url) {
            let output = url.replace(/^/, `"`).replace(/$/, `",`);
            return output;
        }

        let itemsArray = JSON.parse(localStorage.getItem(storage_item));

        let output = [];
        for (let i = 0; i < itemsArray.length; i++) {
            output[i] = urlSiteCrop(itemsArray[i]) + ("<br>");
        }

        let newWidnow = window.open();
        newWidnow.document.write(output.join(""));
        newWidnow.document.close();
    }

    function deleteList(storage_item_name, isIncludeInLocalArray) {
        if (confirm("Подтвердить")) {
            localStorage.removeItem(storage_item_name)
            isIncludeInLocalArray(false)
        }
        return false;
    }


    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }


    function ifExistChangeColorOfVideo() {
        let isVideoInclude = (isIncludeInFirstArray || isIncludeInSecondArray || isIncludeInThirdArray);
        isVideoInclude ? H1.style.color = "red" : H1.style.color = "inherit"
    }

    function Aqua() {
        waitForElm("#containerForCheck").then(() => {
            let color = "#00ff6f";

            let l1 = document.querySelector("#local_1");
            let l2 = document.querySelector("#local_2");
            let l3 = document.querySelector("#local_3");

            isIncludeInFirstArray ? l1.style.color = color : l1.style.color = "inherit";
            isIncludeInSecondArray ? l2.style.color = color : l2.style.color = "inherit";
            isIncludeInThirdArray ? l3.style.color = color : l3.style.color = "inherit";
        });
    }

    function DelBoxes() {
        let allLinks = document.querySelectorAll(`.pcVideoListItem .usernameWrap a`);
        let linksIncludes = [];
        let allArrays = [...firstLocalArray, ...secondLocalArray, ...thirdLocalArray];

        for (let i = 0; i < allLinks.length; i++) {
            if (allArrays.includes(allLinks[i].href)) {
                linksIncludes.push(allLinks[i]);
            }
        }

        linksIncludes.forEach(e => e.closest("li").remove());
    }

    ifExistChangeColorOfVideo();
    Aqua();
    DelBoxes();

    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.code === 'KeyB') {
            document.getElementById("addToList").click();
        }
    });


    return (
        <div id="containerOfShit">
            <div style={stylesContainers} className="first-container">
                <button style={stylesBtn} onClick={() => addToLocal(firstLocalName, firstLocalArray, setIncludeInFirstArray)} id="addToList">{isIncludeInFirstArray ? "Добавлено в список" : "Добавить в список"}</button>
                <button style={stylesBtn} onClick={() => showList(firstLocalName)} id="showList">Показать список</button>
                <button style={stylesBtn} onClick={() => deleteList(firstLocalName, setIncludeInFirstArray)} id="deleteList">Удалить список</button>
            </div>
            <div style={stylesContainers} className="second-container">
                <button style={stylesBtn} onClick={() => addToLocal(secondLocalName, secondLocalArray, setIncludeInSecondArray)} id="addToList1">{isIncludeInSecondArray ? "Добавлено в список Inbox" : "Добавить в список Inbox"}</button>
                <button style={stylesBtn} onClick={() => showList(secondLocalName)} id="showList1">Показать список Inbox</button>
                <button style={stylesBtn} onClick={() => deleteList(secondLocalName, setIncludeInSecondArray)} id="deleteList1">Удалить список Inbox</button>

            </div>
            <div style={stylesContainers} className="third-container">
                <button style={stylesBtn} onClick={() => addToLocal(thirdLocalName, thirdLocalArray, setIncludeInThirdArray)} id="addToList2">{isIncludeInThirdArray ? "Добавлено в список 1" : "Добавить в список 1"}</button>
                <button style={stylesBtn} onClick={() => showList(thirdLocalName)} id="showList2">Показать список 1</button>
                <button style={stylesBtn} onClick={() => deleteList(thirdLocalName, setIncludeInThirdArray)} id="deleteList2">Удалить список 1</button>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#react_shit'));
root.render(
    <App/>
);


