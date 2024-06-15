
const url = 'https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json'

fetch(url)
.then(res => res.json())
.then(res=> {
    const data = res.tasks;
    // ------- MENU BAR ---------
    let tasks = '';
    let menus = '';

    // -------- HOME CONTENT ---------------
    let header = "";
    let boxContent = "";
    let description = "";

    // ---------- BOX CONTAINER ----------------
        // --------- HEADER -----------
        let box_header1 = "";
        let box_header2 = "";
        let box_header3 = "";
        let box_header4 = "";

        // ---------- DESCRIPTION -------------
        let description1 = "";
        let description2 = "";
        let description3 = "";
        let description4 = "";

        // ------ img ------------
        let img = "";

    data.forEach((i) => {

        // ------ MANU BAR ------- 
        tasks += `<div><ul><li>${i.task_title}</li></ul></div>`;

        // --------- HOME CONTENT --------------
        header += `<p>${i.assets[0].asset_title}</p>`;
        boxContent += `<p>${i.task_title}</p>`;
        description += `<p>${i.task_description}</p>`

        // -------------- BOX CONTAINER ----------------
        box_header1 += `<p>${i.assets[0].asset_title}</p>`
        box_header2 += `<p>${i.assets[1].asset_title}</p>`
        box_header3 += `<p>${i.assets[2].asset_title}</p>`
        box_header4 += `<p>${i.assets[3].asset_title}</p>`

        // --------------- DESCRIPTION --------------------
        description1 += `<p>Description : <span>${i.assets[0].asset_description}</span></p>`
        description2 += `<p>Description : <span>${i.assets[1].asset_description}</span></p>`
        description3 += `<p>Description : <span>${i.assets[2].asset_description}</span></p>`
        description4 += `<p>Description : <span>${i.assets[3].asset_description}</span></p>`

        // ------- img ---------
        img += `<iframe width="480" height="291"
                 src=${i.assets[0].asset_content}>
                </iframe>`

        // IN FOREACH ANOTHER FOREACH METHOD MADE BCZ 
        //  IN API {[{[]}]} 
        i.assets.forEach((e)=>{
            // --------- MENU BAR ---------
            menus += `<ul><li>&nbsp;&nbsp; ${e.asset_title}</li></ul>`;

            // --------- BOX CONTAINER -------------
            // box_header += `<div class="boxes">
            //     <div class="container-title">
            //         <p>${e.asset_title}</p>
            //         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
            //             <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
            //         </svg>
            //     </div>
            //     <div class="box-bottom">
            //         <div class="description">
            //             <p>Description:<span>${e.asset_description}</span><p>
            //         </div>
            //     </div>
            // </div>`

            
        })
    });
    // ------- MENU BAR ---------
    document.querySelector("#menu-content .task").innerHTML = tasks;
    document.querySelector("#menu-content .ul").innerHTML = menus;

    // -------- HOME CONTENT ---------------
    document.querySelector("#content-section .content-header .content-headerName").innerHTML = header;
    document.querySelector("#content-section .box-content .box-content-title").innerHTML = boxContent;
    document.querySelector("#content-section .box-content .box-description").innerHTML = description

    // ----------- BOX CONTAINER ------------

        // --------- HEADER ----------- 
        document.querySelector("#box-container .boxes1 .container-title .p").innerHTML = box_header1;
        document.querySelector("#box-container .boxes2 .container-title .p").innerHTML = box_header2;
        document.querySelector("#box-container .boxes3 .container-title .p").innerHTML = box_header3;
        document.querySelector("#box-container .boxes4 .container-title .p").innerHTML = box_header4;

        // --------------- DESCRIPTION --------------------
        document.querySelector("#box-container .boxes1 .box-bottom .description").innerHTML = description1;
        document.querySelector("#box-container .boxes2 .box-bottom .description").innerHTML = description2;
        document.querySelector("#box-container .boxes3 .box-bottom .description").innerHTML = description3;
        document.querySelector("#box-container .boxes4 .box-bottom .description").innerHTML = description4;

        // ------- img -----------
        document.querySelector('#box-container .boxes1 .box-bottom .img').innerHTML = img
})