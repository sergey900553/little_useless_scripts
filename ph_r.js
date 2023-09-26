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

    let [firstLocalArray, setFirstLocalArray] = React.useState(JSON.parse(localStorage.getItem(firstLocalName) ?? "[]"));
    let [secondLocalArray, setSecondLocalArray] = React.useState(JSON.parse(localStorage.getItem(secondLocalName) ?? "[]"));
    let [thirdLocalArray, setThirdLocalArray] = React.useState(JSON.parse(localStorage.getItem(thirdLocalName) ?? "[]"));


    let isIncludeInFirstArray = (firstLocalArray.includes(link));
    let isIncludeInSecondArray = (secondLocalArray.includes(link));
    let isIncludeInThirdArray = (thirdLocalArray.includes(link));





    window.addEventListener('storage', (event) => {
        if (event.key === firstLocalName) {
            setFirstLocalArray(localStorage.getItem(firstLocalName) ? JSON.parse(localStorage.getItem(firstLocalName)) : [])
        }
        if (event.key === secondLocalName) {
            setSecondLocalArray(localStorage.getItem(secondLocalName) ? JSON.parse(localStorage.getItem(secondLocalName)) : [])
        }
        if (event.key === thirdLocalName) {
            setThirdLocalArray(localStorage.getItem(thirdLocalName) ? JSON.parse(localStorage.getItem(thirdLocalName)) : [])
        }

    });



    const stylesContainers = {
        display: "inline-grid",
        marginLeft: "10px",

    }
    const stylesBtn = {
        padding: "2px",
        marginBottom: " 3px",
        cursor: "pointer",
    }

    function addToLocal(storage_item_name, storage_item_array, setLocal) {

        if (!storage_item_array.includes(link)) {
            storage_item_array.push(link);
            localStorage.setItem(storage_item_name, JSON.stringify(storage_item_array));
            setLocal(localStorage.getItem(storage_item_name) ? JSON.parse(localStorage.getItem(storage_item_name)) : []);
        }

    }
    

    function showList(storage_item) {
        if (!localStorage.getItem(storage_item)) {
            alert("Список пустой");
            return;
        }

        let itemsArray = JSON.parse(localStorage.getItem(storage_item));

        let formatedUrls = itemsArray.join('</br>');

        let newWidnow = window.open();
        newWidnow.document.write(formatedUrls);
        newWidnow.document.close();
    }


    function deleteList(storage_item_name, setLocal) {
        if (confirm("Подтвердить")) {
            localStorage.removeItem(storage_item_name)
            setLocal(localStorage.getItem(storage_item_name) ? JSON.parse(localStorage.getItem(storage_item_name)) : []);
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
        let block = Boolean(document.querySelector("#block").style.color);
        let recheck = Boolean(document.querySelector("#recheck").style.color);
        let outdate = Boolean(document.querySelector("#outdate").style.color);

        let isVideoInclude = (isIncludeInFirstArray || isIncludeInSecondArray || isIncludeInThirdArray || block || recheck || outdate);
        isVideoInclude ? (H1.style.color = "red") : (H1.style.color = "inherit");
        // isVideoInclude && (H1.style.color = "red");
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
        let linksToDelete = new Set([...firstLocalArray, ...secondLocalArray, ...thirdLocalArray]);
    
        allLinks.forEach(link => {
            if (linksToDelete.has(link.href)) {
                link.closest("li").remove();
            }
        });
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
                <button style={stylesBtn} onClick={() => addToLocal(firstLocalName, firstLocalArray, setFirstLocalArray)} id="addToList">{isIncludeInFirstArray ? "Добавлено в список" : "Добавить в список"}</button>
                <button style={stylesBtn} onClick={() => showList(firstLocalName)} id="showList">Показать список</button>
                <button style={stylesBtn} onClick={() => deleteList(firstLocalName, setFirstLocalArray)} id="deleteList">Удалить список</button>
            </div>
            <div style={stylesContainers} className="second-container">
                <button style={stylesBtn} onClick={() => addToLocal(secondLocalName, secondLocalArray, setSecondLocalArray)} id="addToList1">{isIncludeInSecondArray ? "Добавлено в список Inbox" : "Добавить в список Inbox"}</button>
                <button style={stylesBtn} onClick={() => showList(secondLocalName)} id="showList1">Показать список Inbox</button>
                <button style={stylesBtn} onClick={() => deleteList(secondLocalName, setSecondLocalArray)} id="deleteList1">Удалить список Inbox</button>

            </div>
            <div style={stylesContainers} className="third-container">
                <button style={stylesBtn} onClick={() => addToLocal(thirdLocalName, thirdLocalArray, setThirdLocalArray)} id="addToList2">{isIncludeInThirdArray ? "Добавлено в список 1" : "Добавить в список 1"}</button>
                <button style={stylesBtn} onClick={() => showList(thirdLocalName)} id="showList2">Показать список 1</button>
                <button style={stylesBtn} onClick={() => deleteList(thirdLocalName, setThirdLocalArray)} id="deleteList2">Удалить список 1</button>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#react_shit'));
root.render(
    <App />
);
