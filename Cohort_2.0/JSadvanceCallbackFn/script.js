 /*
## Exercise 3 — Intermediate (Callback dependency — thoda painful)

**Task (Hindi):** Teen functions banao:

1. `loginUser`
   - 1 second baad callback ko `user` object de
2. `fetchPermissions`
   - `userId` lega
   - 1 second baad callback ko `permissions` array de
3. `loadDashboard`
   - `permissions` lega
   - 1 second baad callback ko `"Dashboard loaded"` bole

**Flow:**
- Pehle `loginUser`
- Uske andar `fetchPermissions`
- Uske andar `loadDashboard`
- Final output console mein print ho

**Goal:**
- Callback nesting ko feel karna
- Yehi structure baad mein callback hell banta hai*/

function loginUser(username , cb){
    console.log('fetchin data');
    setTimeout(()=> {
        cb({ username :'yash' , id : 1});
    }
,1000);
}

function fetchPermission(id , cb){
    console.log('fetchin permission');
    setTimeout(()=>{
        cb(['read', 'write', 'delete']);
    },2000);
}

function loadDashboard(permissions, cb){
    console.log('loading Dashboard');
    setTimeout(()=>{
        cb();
    },3000);
}

loginUser('yash', function(userdata){
    fetchPermission(userdata.id ,function(permissions){
        loadDashboard(permissions, function(){
            console.log('Dashboard loaded')
        })
    })
})