import React, { useState, useEffect } from "react";
import "./petInfo.css";
import axios from "axios";
import PetInfoDetail from './PetInfoDetail';


function PetInfo() {

  const [state, setState] = useState({
    petsList: [],
    createdAt: "",
  });

  const token = window.localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;

  useEffect(() => {
    const fetchData = async () => {
      // const res = await axios.get("http://localhost:8080/users/myinfo", { withCredentials: true });
      const res = await axios.get('https://missinganimals.ml/users/myinfo', { withCredentials: true });
      if (res.status === 200) {
        console.log(res.status, res.statusText);
        setState((prevState) => ({
          ...prevState,
          petsList: res.data.petslist,
          createdAt: res.data.createdAt,
        }));
      } else {
        console.log(res.status, res.statusText);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="petInfo">
      <div className="petInfoTitle">Pet Info</div>
      {
        state.petsList.map((pet) => 
          <PetInfoDetail
            key={pet.id}
            id={pet.id}
            title={pet.title}
            petname={pet.petname}
            description={pet.description}
            species={pet.species}
            sex={pet.sex}
            missingDate={pet.missingDate}
            area={pet.area}
            reward={pet.reward}
            createdAt={pet.createdAt}
            petsImages={pet.petsImages}
            handleToModifyPetInfo={(petObj) => {
              const newList = state.petsList.slice();
              let index;
              for (let i = 0; i < newList.length; i++) {
                if (newList[i].id === petObj.id) index = i;
                break;
              }
              newList.splice(index, 1, petObj);
              setState((prevState) => ({
                ...prevState,
                petsList: newList,
              }));
            }}
            handleToDeletePetInfo={(petId) => {
              const newList = state.petsList.slice();
              let index;
              for (let i = 0; i < newList.length; i++) {
                if (newList[i].id === petId) index = i;
                break;
              }
              newList.splice(index, 1);
              setState((prevState) => ({
                ...prevState,
                petsList: newList,
              }));
            }}
          ></PetInfoDetail>
        )
      }
    </div>
  );
}

export default PetInfo;
