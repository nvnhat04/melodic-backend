import AccountModel from '../model/account.model.js';

class AccountController {
    async signup(req, res) {
        const user = req.body;
        try {
            AccountModel.signup(user, (error, result) => {
                if(error){
                    res.status(400).send(error);
                }
                res.status(200).send(result);
            });
        }
        catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    }
    async login(req, res) {
        const { username, password } = req.body;
        try {
            AccountModel.login(username, password, (error, result) => {
                if (error) {
                    return res.status(400).send(error); // Send error response and exit early
                }
                res.status(200).send(result);
            });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    }
    async logout(req, res) {
        res.status(200).send({ auth: false, token: null });
    }
    async getInfo(req, res) {
        const {id, username} = req.params;
        try{
            AccountModel.getUserByID(id, (error, result) => {
                if(error){
                    res.status(500).send('Error: ' + error.message);
                }
                res.status(200).send(result.rows);
            });
        }catch(error){
            res.status(500).send('Error: ' + error.message);
        }

    }
    
    async getAllUsers(req, res) {
        try{
            AccountModel.getAllUsers((error, result) => {
                if(error){
                    res.status(500).send('Error: ' + error.message);
                }
                res.status(200).send(result.rows);
            });
        }catch(error){
            res.status(500).send('Error: ' + error.message);
        }
    }
    async deleteUser(req, res) {
        const {username} = req.body;
        const {id} = req.params;
        try{
            AccountModel.deleteUserById(id, (error, result) => {
                if(error){
                    res.status(500).send('Error: ' + error.message);
                }
                res.status(200).send({success:true, message:"User deleted successfully", result});
            });
        }catch(error){
            res.status(500).send('Error: ' + error.message);
        }
    }
}

export default new AccountController();
