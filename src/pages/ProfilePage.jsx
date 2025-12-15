import profileIcon from "../assets/contacts_product_24dp_059669_FILL0_wght400_GRAD0_opsz24.svg"
import userPic from "../../src/assets/icon-7797704_640.png"
import UserSettingsOptions from "../components/UserSettingsOptions"


function ProfilePage() {

    return (
        <div className="lg:pl-16 lg:pr-16 space-y-6">
        <div className="bg-white p-4 gap-6 rounded-lg shadow  h-[calc(100vh-2rem)] flex flex-col">

            <div className="flex items-center  ">
            <img src={profileIcon} alt="" className="w-6 h-6"/>
             <h1 className="text-3xl font-medium">Profile</h1>   
            </div>

            <div className="gap-6 flex flex-col h-[calc(100vh-8rem)]">

            <div className="rounded-full bg-gray-300 p-1  flex items-center grid grid-cols-2">

                <div className="flex items-center gap-4 borde">
                <img src={userPic} alt="" className="h-15 w-15 rounded-[100px] border" />
                <h3 className="font-semibold  text-lg">johndoe@example.com</h3>
                </div>

                
                <h2 className="text-3xl borde">Settings</h2>

            </div>

            <div className="borde flex justify-">

               
                

                <UserSettingsOptions />
            
            </div>
            </div>

        </div>
        </div>
    )
}

export default ProfilePage