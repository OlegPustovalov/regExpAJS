class Validator{
    constructor(strUser){
        this.strUser = strUser
    }
    validateUsername(){
        if (this.strUser.match(/^[a-z][a-z,\-,\_,\d.]+[a-z]$/gm) != null){
            if (/\d{4}/gm.test(this.strUser)){
                return false 
            }
            else{
                return true 
            }
        }
        else{
            return false 
        }
    }
}
module.exports = Validator
