// CRUD Api Basic Concept

//get requset

//axios.get("http://127.0.0.1:8000/apiV1/status/")
//.then(response => console.log(response))

//detail like get

axios.get("http://127.0.0.1:8000/apiV1/status/detail/4/")
.then(response => console.log(response))

//delete request
axios.delete("http://127.0.0.1:8000/apiV1/status/detail/4/")
.then(response => console.log(response))


// put (update) request => whole Entity

let status1 ={
    user : 2,
    content:"I am put updated data",
    image:null

}

axios.put("http://127.0.0.1:8000/apiV1/status/update/6/",status1, {
    headers: {
        "Content-Type" : "application/json"
    }
})
.then(response => console.log(response))
.catch(error => console.log(error.message)) 


// patch (update) request => just the particular property
let status2 ={
   
    content:"I am patch updated data",  
    

}

axios.patch("http://127.0.0.1:8000/apiV1/status/update/5/",status2, {
    headers: {
        "Content-Type" : "application/json"
    }
})
.then(response => console.log(response))
.catch(error => console.log(error.message)) 





//post requset
let status ={
    user : 5,
    content:"I am test data",
    image:null

}
axios.post("http://127.0.0.1:8000/apiV1/status/create/", status, {
    headers: {
        "Content-Type" : "application/json"
    }
})
.then(response => console.log(response))
.catch(error => console.log(error.message))