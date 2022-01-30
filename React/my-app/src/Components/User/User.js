
import './User.css';


function User(props){
    const userDetails=props.userDetails;

    
    const {title,firstName,lastName,picture}=userDetails;
    const fullName=firstName+" "+lastName;
    
    return <div onClick={()=>props.onUserClick(userDetails)} className="user-box">

        <div className="image-box">
            <img src={picture} width="200px" height="200px" />
        </div>

        <div className="name-box">

            <h3> {fullName} </h3>

        </div>



    </div>
}

export default User;