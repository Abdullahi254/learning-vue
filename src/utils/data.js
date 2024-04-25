const pages = {
    "pages": [
        {
            "pageTitle": "Home",
            "content": "This is my home page",
            "linkText": "Home",
            "linkUrl": "index.html",
            "published": true
        },
        {
            "pageTitle": "About",
            "content": "This is my about page",
            "linkText": "About",
            "linkUrl": "about.html",
            "published": true
        },
        {
            "pageTitle": "Contact",
            "content": "This is my contact page",
            "linkText": "Contact",
            "linkUrl": "contact.html",
            "published": true
        }
    ]
}

export default {
    getSinglePage(index){
        return pages.pages[index]
    },
    getAllPages(){
        return pages.pages
    }  
}
