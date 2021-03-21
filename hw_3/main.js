let i = 1 
let n = 1
let commentList =[]; 
let oldCommentList
let newCommentList 

function comment(){
        let name = document.getElementById('0').value
        let comment = document.getElementById('1').value
        
        let  dateSeconds = Date.now() 
        let date = Intl.DateTimeFormat('ru').format(dateSeconds)

        commentList.push({name: name, comment: comment, date: date} )
        let newP = document.createElement('p')
        newP.setAttribute('align' , 'center')
        newP.setAttribute('id', i +'100')
        newP.setAttribute('class', '.new')
        for (let i=0; i<commentList.length; i++){ 
                newP.innerText = n + '. ' + commentList[i].name + ': ' + commentList[i].comment + ' ' + ' (' + commentList[i].date +')'
        document.querySelector('.news__comment_add1').append(newP)
        }
        n++
        i++ 
        oldCommentList = commentList
}


function sortingNew (){
        let n = 1
        newCommentList=oldCommentList
        newCommentList.sort((a, b) => {
                if (a.date < b.date) return 1;
                if (a.date === b.date) return 0;
                if (a.date > b.date) return -1; })
        for (let i = 0; i<=newCommentList.length; i++){
                test = document.getElementById(i+1+'100')
                test.innerText = n + '. ' + newCommentList[i].name + ': ' + newCommentList[i].comment + ' ' + ' (' + newCommentList[i].date +')'
                document.querySelector('.news__comment_add1').append(test)
                n++    
        }
        
}

function sortingOld(){
        let n = 1 
       oldCommentList.sort((a, b) => {
                if (a.date > b.date) return 1;
                if (a.date === b.date) return 0;
                if (a.date < b.date) return -1; })
        for (let i = 0; i<=oldCommentList.length; i++){
                text = document.getElementById(i+1+'100')
                text.innerText = n + '.' + oldCommentList[i].name + ': ' + oldCommentList[i].comment + ' ' + ' (' + oldCommentList[i].date +')'
                document.querySelector('.news__comment_add1').append(text)
                n++
        }
        
}


function edit(){
        let edit = document.getElementById('1').value
        let name = document.getElementById('0').value

        let  dateSeconds = Date.now() 
        let date = Intl.DateTimeFormat('ru').format(dateSeconds)

        let editArray = edit.split('.')
        let newEditArray=[]
        let comment = ' '
        for (let i=1; i<editArray.length; i++){ 
                comment= editArray[i] + comment
        }
        newEditArray.push({name: name, comment: comment, date: date})
        console.log(newEditArray)

        let x = document.getElementById(editArray[0] + '100')
        console.log(x)
        for (let i=0; i<newEditArray.length; i++){ 
                x.innerText = editArray[0] + '. ' + newEditArray[i].name + ': ' + newEditArray[i].comment + ' ' + ' (' + newEditArray[i].date +')'
        document.querySelector('.news__comment_add1').append(x)
        }      
}

function deleteComment(){
        let deleteNumber = document.getElementById('1').value
        let deleteArray = deleteNumber.split('')
        console.log(deleteArray)
        document.getElementById(deleteArray[0] + '100').remove()
}


        document.getElementById('3').addEventListener('click', sortingNew)
        document.getElementById('2').addEventListener('click', comment);
        document.getElementById('4').addEventListener('click', sortingOld)
        document.getElementById('5').addEventListener('click', edit)
        document.getElementById('6').addEventListener('click', deleteComment)
        