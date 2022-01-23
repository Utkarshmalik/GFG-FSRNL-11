
import './User.css';


function User(props){
    const userDetails=props.userDetails;

    
    const {title,firstName,lastName,picture}=userDetails;
    const fullName=  title.toUpperCase()+" "+firstName+" "+lastName;
    
    return <div className="user-box">

        <div className="image-box">
            <img src={picture} width="200px" height="200px" />
        </div>

        <div className="name-box">

            <h2> {fullName} </h2>

        </div>



    </div>
}

export default User;