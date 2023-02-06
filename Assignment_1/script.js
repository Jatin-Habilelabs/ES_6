//  using FETCH====================================

// fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
//     // console.log(data); // data in json formet
//     return data.json()  /// converted in object
// }).then((objectData)=>{

//     // console.log(objectData[0].title);  // data come in object
//     let tableData="";
//     objectData.map((val)=>{
//         tableData+=`    <tr>
//         <td>${val.userId}</td>
//         <td>${val.id}</td>
//         <td>${val.title}</td>

//       </tr>`
//     })
// document.getElementById('table_body').innerHTML=tableData
// }).catch((err)=>{
//     console.log(err);
// })





// };

// USING ASYNC=============================================

// axios.get('https://jsonplaceholder.typicode.com/posts').then((objectData) => {


//         console.log(objectData.data);  // data come in object
//         let tableData = document.getElementById('table_body')
//         tableData.innerHTML= (objectData.data).map((val) => 

//             ` <tr>
//             <td>${val.userId}</td>
//             <td>${val.id}</td>
//             <td>${val.title}</td>

//           </tr>`
//         ).join('')


//     })


//   using ASYNC AND WAIT=========================================

async function addItem () {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

        // console.log(response);
        // console.log(objectData.data);  // data come in object
        let tableData = document.getElementById('table_body')
        tableData.innerHTML = (response.data).map((val) =>

            ` <tr>
            <td>${val.userId}</td>
            <td>${val.id}</td>
            <td>${val.title}</td>
           
          </tr>`
        ).join('')



    } catch (errors) {
        console.log(errors);
    }
}
addItem()

