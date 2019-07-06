let id = document.getElementById('id'); //id form
let name = document.getElementById('name'); //name form

let get = document.getElementById('get'); //get button
let post = document.getElementById('post'); //post button
let put = document.getElementById('put'); //put button
let del = document.getElementById('delete'); //delete button

let resultStatus = document.getElementById('result-status');
let resultData = document.getElementById('result-data');

get.addEventListener('click', () => {
    fetch(`/api/tasks/${id.value}`)
    .then((res) => {
        resultStatus.innerText = `${res.status} ${res.statusText}`;
        return res.text();
    })
    .then((res) => resultData.innerText = res)
    .catch((e) => console.dir(e));
});
