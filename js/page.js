(() => {
    console.log('Js On Fire')

    let canvas = document.querySelector('#c')
    let canvasCtx = canvas.getContext('2d')
    let paperplane = document.querySelector('.paperplane')
    let sidebar = document.querySelector('.sidebar')
    let users = document.querySelector('.users')
    let upload = document.querySelector('.upload-post')
    let register = document.querySelector('.register')
    let closeChatBtn = document.querySelector('#closeChat')
    let openRegisterBtn = document.querySelector('#openRegister')
    let closeUploadBtn = document.querySelector('#closeUpload')
    let closeRegisterBtn = document.querySelector('#closeRegister')
    let togglePaperplane = document.querySelector('#togglePaperplane')
    let UsersBtn = document.querySelector('#toggleUsers')
    let sidebarBtn = document.querySelector('#toggleSidebar')
    let uploadBtn = document.querySelector('#uploadBtn')
    let closeBtn = document.querySelector('#closeSidebar')

    closeChatBtn.addEventListener('click', e => {
        paperplane.style.display = 'none'
    }
    )

    closeUploadBtn.addEventListener('click', e => {
        upload.style.height = '0px'
        canvasCtx.font = '30px Arial'
        canvasCtx.textAlign = 'center'
        canvasCtx.fillText('Scroll down', canvas.width / 2, canvas.height / 2)
    }
    )

    closeRegisterBtn.addEventListener('click', e => {
        register.style.height = '0px'
    }
    )

    /*openRegisterBtn.addEventListener('click', e=>{
        register.style.height = '60vh'
    }
    )*/

    togglePaperplane.addEventListener('click', e => {
        if (paperplane.style.display === 'none') {
            paperplane.style.display = 'block'
            togglePaperplane.style.background = "black"
            togglePaperplane.style.color = "white"
        } else {
            paperplane.style.display = 'none'
            togglePaperplane.style.background = "transparent"
            togglePaperplane.style.color = "black"
        }
    }
    )

    UsersBtn.addEventListener('click', event => {
        if (users.style.display === 'none') {
            users.style.display = 'block'
            UsersBtn.style.color = '#000'
        } else {
            users.style.display = 'none'
            UsersBtn.style.color = '#000'
        }
    }
    )

    closeBtn.addEventListener("click", e => {
        sidebar.style.display = 'none'
        sidebarBtn.style.color = '#000'
    })

    sidebarBtn.addEventListener('click', event => {
        console.log(sidebar.style.width)
        if (sidebar.style.display === 'flex') {
            sidebar.style.display = 'none'
            sidebarBtn.style.color = '#000'
        } else {
            sidebar.style.display = 'flex'
        }
    }
    )

    uploadBtn.addEventListener('click', event => {
        console.log(event)
        console.log(upload.style.display)
        /*if (upload.style.height === '70vh') {
            upload.style.height = '1px'
        } else {
            upload.style.display = '70vh'
        }*/
        upload.style.height = '60vh'

    }
    )
}
)()
