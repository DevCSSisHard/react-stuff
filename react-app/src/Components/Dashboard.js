import React, {useEffect, useState} from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard(){
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, loading, error] = useAuthState(auth);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName()
  }, [user, loading]);

  return (
    <div>
      <header>
        <span className={"font-bold min-h-screen dark:text-white"}>Account dashboard. Logged in as {name}</span>

      </header>
      <body className="dark:text-white "> Wow nice password.  </body>
      <div className= "flex flex-wrap justify-center ">
        <img src="https://cdn.discordapp.com/attachments/1008618824599351376/1014231987558564004/Runda_Retrowave_Vaporwave_busy_neon_city_detailed_buildings_wit_bae82589-01c5-4686-865f-e20ebd009cde.png"
             className= "max-w-full h-auto"
             alt=""/>
        <div className="absolute translate-x-50 translate-y-50 dark:text-white">
          Test
        </div>
      </div>
      <button className="p-8 font-bold border-1 bg-white" onClick={logout}>
        Logout
      </button>

    </div>
  )
}

export default Dashboard;
