





function FeedBackForm() {







    return (
        <div className="bg-gray-300 shadow-sm rounded-4xl w-95 p-6">
            <h1 className="text-xl font-semibold text-center p-1">Request a feature/FeedBack</h1>
            <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="3ed13f66-2c71-4d4a-bcd2-dce1d6590a57"/>

                <div className="grid grid-cols-1 content-between gap-4">
                    <label className="text-xl font-semibold"  htmlFor="name">Name: </label>
                    <input className="text-white rounded-2xl bg-gray-500 px-2 py-1" type="text" name="name" id="name" required/>
                    
                     <label className="text-xl font-semibold" htmlFor="email">Email: </label>
                     <input className="bg-gray-500 text-white cursor-pointer py-1 rounded-2xl px-2" name="email" id="email" required>
                        
                     </input>

                    <label className="text-xl font-semibold " htmlFor="Message">Message:</label>
                    <input className="bg-gray-500 text-white py-1 cursor-pointer rounded-2xl  px-2" type="text" name="message" id="message" required>
                        

                     </input>

                     
                
                     <button className="text-xl cursor-pointer bg-emerald-600 hover:bg-emerald-700 font-semibold py-1 text-white rounded-4xl " type="submit" value="Submit">Send Message</button>
                </div>
            </form>

        </div>
    )
}

export default FeedBackForm;