export default {
    titleChecker(title, stead){
        if (this.isEmpty(title)) {
            return stead || 'empty'
        }
        return title
    },

    isEmpty(string){
        return string == ''
    },
}