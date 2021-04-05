import React from 'react'


const edit = () => {
    const [data, setData] = useState({})
    return (
        <body className="h-screen w-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;" onload='document.email.focus()'>   
                 <div className="w-screen min-h-screen bg-gradient-to-tr from-purple-800 to-blue-400  flex items-center justify-center px-5 py-5">
                        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
                            <div className="md:flex w-full">
                                <div className="hidden text-center md:block w-1/2 m-0 bg-white ">
                                    <img className="m-auto" src="3.jpg" alt=""/>
                                    <h1 className="font-bold text-5xl font-mono text-blue-900">Helpify</h1>
                                </div>
                                <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                                    <div className="text-center mb-10">
                                        <h1 className="font-bold text-3xl text-gray-900">Informations du profil</h1>
                                        <p>Modifier vos informations personnelles</p>
                                    </div>
                                    <div>
                                        <div className="flex -mx-3">
                                            <div className="w-full px-3 mb-5">
                                                <label for="" className="text-xs font-semibold px-1">Nom d'utilisateur</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Harrouch" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex -mx-3">
                                            <div className="w-1/2 px-3 mb-5">
                                                <label for="" className="text-xs font-semibold px-1">Nom</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="El Harchi" required/>
                                                </div>
                                            </div>
                                            <div className="w-1/2 px-3 mb-5">
                                                <label for="" className="text-xs font-semibold px-1">Prenom</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Abderrahmane" required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex -mx-3">
                                            <div className="w-full px-3 mb-5">
                                                <label for="" className="text-xs font-semibold px-1">Email</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                                    <input type="email" id='email' className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Harrouch@gmail.com" required/>
                                                </div>
                                                <p id="msg" style="font-size:12px;" className="text-red-400"></p>
                                            </div>
                                        </div>
                                        <div className="flex -mx-3">
                                            <div className="w-1/2 px-3 mb-5">
                                                <label for="" className="text-xs font-semibold px-1">Mot de pass</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                    <input type="password" id="pass" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" minlength="8" placeholder="************"/>
                                                </div>
                                            </div>
                                            <div className="w-1/2 px-3 mb-5">
                                                <label for="" className="text-xs font-semibold px-1">Repeter le mot de pass</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                                    <input type="password" id="Conpass" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" minlength="8" placeholder="************"/>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="flex -mx-3">
                                            <div className="w-full px-3 mb-5">
                                                <label for="" className="text-xs font-semibold px-1">Adresse</label>
                                                <div className="flex">
                                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                                    <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="145, rue tejdur yussufia marrakech" required/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex -mx-3">
                                            <div className="w-full px-3 mb-5">
                                                <button className="block  text-white rounded-lg px-3 py-3 font-semibold w-full max-w-xs mx-auto bg-gradient-to-r from-purple-800 to-blue-400 hover:shadow-lg" onclick="validate();validatePassword()">Enregistrer les modifications</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


</body>
    )
}

export default edit
