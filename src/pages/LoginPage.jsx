

function LoginPage() {


    return (
        <section className="min-h-screen bg-gray-100">
            <h1 className="text-5xl">Login</h1>
            <section className="border-2">
                <form className="border-2 border-blue-500" action="/login" method="post">
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required/>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <button type="submit">Login</button>
                </form>
            </section>
        </section>
    )
}

export default LoginPage