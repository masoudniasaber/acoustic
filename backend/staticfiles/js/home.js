//// Selectors
//
//const result = document.querySelector('#result-form')
//const addLayer = document.querySelector('#addLayer-button')
//
//
//// Functions
//
//const addLayerHandler = () => {
//
//    const numberLayer = document.querySelector('#layers').value
//    if (numberLayer === "") {
//        alert('Enter Add Layer!');
//    }
//    const addLayerBox = document.querySelector('#addLayerBox')
//    addLayerBox.innerHTML = ""
//
//    for (let i = 0; i < numberLayer; i++) {
//        const node = document.createElement("input");
//        node.className = 'form-control mb-3 mt-3'
//        node.placeholder = 'Enter Layer' + (i + 1)
//        node.name = 'tk_list'
//        node.type = 'number'
//        node.value = '40'
//        addLayerBox.appendChild(node)
//    }
//}
//
//
//const resultHandler = async (event) => {
//    event.preventDefault()
//    const list = []
//    const num = event.target.elements.tk_list.length
//    for (let i = 0; i < num; i++) {
//        list.push(event.target.elements.tk_list[i].value)
//    }
//    const data = {
//        "layers": event.target.elements.layers.value,
//        "material": event.target.elements.material.value,
//        "tk_list": list,
//        "width": event.target.elements.width.value,
//        "length": event.target.elements.span.value,
//        "weight": event.target.elements.weight.value,
//        "dead": event.target.elements.dead.value,
//        "live": event.target.elements.live.value,
//    }
//    const response = await fetch("http://127.0.0.1:8000/crosswood/clt/",
//        {
//            method: 'POST',
//            headers:
//                {
//                    'Content-type': 'application/json',
//                },
//            body: JSON.stringify(data),
//        })
//    const responseData = await response.json()
//    document.querySelector('#na').innerHTML = responseData.NA
//
//}
//
//// Listeners
//addLayer.addEventListener('click', addLayerHandler)
//result.addEventListener('submit', resultHandler)
//
//
//
//// const element = document.querySelector('body');
//// html2pdf(element);
