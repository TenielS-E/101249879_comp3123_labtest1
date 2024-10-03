/*
Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to
delayedSuccess and resolves a message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to
delayedException and rejects an error message after a timeout of
500ms.
o Call both promises separately and handle the resolved and reject
results and then output to the console
 */

const resolvedPromise = async() =>{
    try {
        return new Promise((resolve)=>{
            setTimeout(() => {
                let solved = {'message': 'Resolved Promise!'};
                console.log(solved);
                resolve();
            }, 500)
        })
    }
    catch (e) {
        console.error(e);
    }
    
}

function rejectedPromise(){
    return new Promise(
        async() =>{
            setTimeout(() => {
                return Promise.reject('error: Rejected Promise!');          
            }, 500)
            
            try{
                clearTimeout();
                resolve();
            }
            catch (e){
                clearTimeout();
                console.error(e);
            }
        }
        
    )
}
 

// Callback Promises:
resolvedPromise();
rejectedPromise();
