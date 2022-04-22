import { propTypes } from "react-bootstrap/esm/Image"
import { connect } from "react-redux"


const mapStateToProps = ({ userState}) => {
    return { userState }
  }

const FriendList = ({followingList}) => {

    return (
        <div className="friend-list">
            <h2>Friend List:</h2>
            <ul>
                {followingList.map((friend) => (
                    <li>{friend['followers.trailName']}</li>
                ))}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps)(FriendList)