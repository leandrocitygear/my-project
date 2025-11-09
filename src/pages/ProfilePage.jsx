import profileIcon from "../assets/contacts_product_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import userPic from "../../src/assets/icon-7797704_640.png"
import UserSettingsOptions from "../components/UserSettingsOptions"


function ProfilePage() {

    return (
        <div className="p-10 border bg-white">

            <div className="flex items-center gap-2 border">
            <img src={profileIcon} alt="" className="w-6 h-6"/>
             <h1 className="text-3xl font-medium">Profile</h1>   
            </div>

            <div className="flex border items-center gap-4">
                <img src={userPic} alt="" className="h-20 w-20 rounded-[100px] border" />
                <h3 className="font-semibold text-lg">johndoe@example.com</h3>
            </div>

            <div>
                <h2 className="text-3xl">Settings</h2>
                <UserSettingsOptions />
            </div>
        </div>
    )
}

export default ProfilePage