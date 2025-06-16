let list = document.querySelector(".list")
let form = document.querySelector("#form")
let firstName = document.querySelector("#firstName")
let lastName = document.querySelector("#lastName")
let phoneNumber = document.querySelector("#phoneNumber")
let comment = document.querySelector("#comment")
let categoryId = document.querySelector("#categoryId")
let gender = document.querySelector("#gender")
let dateOfBirth = document.querySelector("#dateOfBirth")
let dataFetch = async () => {
    list.innerHTML = ``
    let response = await fetch("https://crm-test-api.duckdns.org/api/Leads",{
        method: "GET",
        headers: {
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6ImFzaWxiZWsiLCJ1bmlxdWVfbmFtZSI6Iis5OTg5MTQ1NDIzMzkiLCJqdGkiOiJjNGUzMTllYy1hZGQ5LTRlMmQtOTY2Ni05NmM3OTM3YzFhOGQiLCJUZW5hbnRJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc1NTgwODg0MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.qtxp4zaDCI3a-v2ieaXi3xeEjT7DzeAYS4etrrOMp7M`
        }
    });

    let data = await response.json()
    getData(data.items)

}
dataFetch()
function getData(data) {
    console.log(data)
    data.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = `
       <div class="bg-[#EEEEEE] w-[1100px] p-4 px-[70px] rounded-xl mt-10 ">
       <p>Id :  ${item.id}</p>
       <p>${item.id}</p>
       <p>${item.lastName}</p>
       <p>${item.phoneNumber}</p>
<button data-id="${item.id}"  class="btn_delete bg-red-500 p-4 w-full text-white font-medium rounded-md">Delete</button>
</div>
`
        list.appendChild(li);


    })


    let buttons = document.querySelectorAll(".btn_delete")
    buttons.forEach(btn=> {
        btn.addEventListener("click", (e) => {
            let id = e.target.getAttribute("data-id");
            console.log(id)
            console.log("salom")
            let deleteItem = async ()=> {
                let res = await fetch(`https://crm-test-api.duckdns.org/api/Leads/${id}`,{
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6ImFzaWxiZWsiLCJ1bmlxdWVfbmFtZSI6Iis5OTg5MTQ1NDIzMzkiLCJqdGkiOiJjNGUzMTllYy1hZGQ5LTRlMmQtOTY2Ni05NmM3OTM3YzFhOGQiLCJUZW5hbnRJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc1NTgwODg0MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.qtxp4zaDCI3a-v2ieaXi3xeEjT7DzeAYS4etrrOMp7M`
                    }
                });
                if(res.ok){
                    alert("o'chirildi")
                    dataFetch()
                }
            }
            deleteItem()

        })
    })
}







form.addEventListener("submit", (e) => {
    e.preventDefault();
    let postData = async () => {
        const dateToSend = new Date(dateOfBirth.value).toISOString();
        let post = await fetch("https://crm-test-api.duckdns.org/api/Leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwibmFtZSI6ImFzaWxiZWsiLCJ1bmlxdWVfbmFtZSI6Iis5OTg5MTQ1NDIzMzkiLCJqdGkiOiJjNGUzMTllYy1hZGQ5LTRlMmQtOTY2Ni05NmM3OTM3YzFhOGQiLCJUZW5hbnRJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTc1NTgwODg0MywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDAwIn0.qtxp4zaDCI3a-v2ieaXi3xeEjT7DzeAYS4etrrOMp7M`
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                phoneNumber: phoneNumber.value,
                comment: comment.value,
                categoryId: categoryId.value*1,
                gender: gender.value*1,
                dateOfBirth: dateToSend,
            })

        });


        if (post.ok) {
            alert("Yuborildi!");
            await dataFetch();
        } else {
            alert("Xatolik yuz berdi.");
        }
    };

    postData();
});


